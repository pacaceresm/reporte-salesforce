// Dashboard Comercial - SuperPet / SuperZoo
// app.js - version con filtro de fechas, descargas CSV y metricas por envio

// ---- NORMALIZER ----
(function() {
  if (typeof DASH_DATA === 'undefined') return;
  var D = DASH_DATA;
  if (D.sp || D.sz) return;
  if (D.periodo_a) {
    var m = (D.a && D.a.meta) || {};
    var store = m.store || 'SuperPet Peru';
    var symbol = m.symbol || 'S/';
    var currency = m.currency || 'PEN';
    var key = store.indexOf('Zoo') >= 0 ? 'sz' : 'sp';
    var tmp = { a: D.a, b: D.b, deltas: D.deltas, store: store, symbol: symbol, currency: currency };
    Object.keys(DASH_DATA).forEach(function(k) { delete DASH_DATA[k]; });
    DASH_DATA[key] = tmp;
    return;
  }
  var meta = D.meta || {};
  var store = meta.store || 'SuperPet Peru';
  var symbol = meta.symbol || 'S/';
  var currency = meta.currency || 'PEN';
  var key = store.indexOf('Zoo') >= 0 ? 'sz' : 'sp';
  var period = JSON.parse(JSON.stringify(D));
  if (!period.periodo) period.periodo = meta.fecha || '';
  Object.keys(DASH_DATA).forEach(function(k) { delete DASH_DATA[k]; });
  DASH_DATA[key] = { a: period, b: null, deltas: null, store: store, symbol: symbol, currency: currency };
})();

// ---- ESTADO GLOBAL ----
var D = DASH_DATA;
var STORES = Object.keys(D);
var COLORS = ['#2563eb','#ea580c','#16a34a','#d97706','#7c3aed','#dc2626','#0d9488','#6b7280'];
var activeStore = STORES[0];
var activeMode  = 'a';
var filterFrom  = null;  // "2026-05-01"
var filterTo    = null;  // "2026-05-31"
var cMascota = null, cHour = null, cShip = null, cDaily = null;

// ---- HELPERS ----
function fmtNum(v, sym, dec) {
  dec = dec || 0;
  var n = Number(v);
  if (n >= 1000000) return sym + (n / 1000000).toLocaleString('es-PE', {minimumFractionDigits:1, maximumFractionDigits:2}) + ' M';
  if (n >= 10000)   return sym + (n / 1000).toLocaleString('es-PE',    {minimumFractionDigits:0, maximumFractionDigits:1}) + ' K';
  return sym + n.toLocaleString('es-PE', {minimumFractionDigits:dec, maximumFractionDigits:dec});
}
function fmtPct(v) { return Number(v).toFixed(1) + '%'; }
function deltaTag(d, invert) {
  if (d === null || d === undefined) return '';
  var good = invert ? d < 0 : d > 0;
  return '<span class="delta ' + (good ? 'up' : 'dn') + '">' + (d > 0 ? '+' : '') + d + '%</span>';
}
function ppTag(d) {
  if (d === null || d === undefined) return '';
  return '<span class="delta ' + (d > 0 ? 'dn' : 'up') + '">' + (d > 0 ? '+' : '') + d + 'pp</span>';
}
function hbar(lbl, pctW, color, valStr) {
  return '<div class="hb">' +
    '<div class="hb-l" title="' + lbl + '">' + lbl + '</div>' +
    '<div class="hb-track"><div class="hb-fill" style="width:' + pctW + '%;background:' + color + '">' + (pctW > 20 ? valStr : '') + '</div></div>' +
    '<div class="hb-val">' + valStr + '</div></div>';
}

// ---- DATA HELPERS ----
function storeData() { return D[activeStore]; }
function rawPeriod() {
  var sd = storeData();
  return (activeMode === 'b' && sd.b) ? sd.b : sd.a;
}
function sym() { return storeData().symbol; }
function hasB() { return !!storeData().b; }
function isCmp() { return activeMode === 'cmp' && hasB(); }

// ---- FILTRO DE FECHA ----
// Filtra los datos diarios y recalcula los KPIs del periodo filtrado
function applyDateFilter(data) {
  if (!filterFrom && !filterTo) return data;
  if (!data.daily || data.daily.length === 0) return data;

  var days = data.daily.filter(function(d) {
    return (!filterFrom || d.date >= filterFrom) && (!filterTo || d.date <= filterTo);
  });
  if (days.length === 0) return data;

  // Recalcular KPIs del subperiodo
  var totalOrders  = days.reduce(function(a, d) { return a + d.orders; }, 0);
  var totalNet     = days.reduce(function(a, d) { return a + d.net; }, 0);
  var totalDisc    = days.reduce(function(a, d) { return a + d.discount; }, 0);
  var filtered = JSON.parse(JSON.stringify(data)); // copia profunda
  filtered.kpis = JSON.parse(JSON.stringify(data.kpis));
  filtered.kpis.orders = totalOrders;
  filtered.kpis.net    = Math.round(totalNet * 100) / 100;
  filtered.kpis.discount = Math.round(totalDisc * 100) / 100;
  filtered.kpis.discount_pct = totalNet > 0 ? Math.round(totalDisc / (totalNet + totalDisc) * 100 * 10) / 10 : 0;
  filtered.kpis.ticket = totalOrders > 0 ? Math.round(totalNet / totalOrders * 100) / 100 : 0;

  // Actualizar periodo label
  var dFrom = filterFrom || days[0].date;
  var dTo   = filterTo   || days[days.length-1].date;
  filtered.periodo = fmtDate(dFrom) + ' - ' + fmtDate(dTo);
  filtered._filtered = true;
  filtered._days_filtered = days;
  return filtered;
}

function fmtDate(s) {
  if (!s) return '';
  var p = s.split('-');
  return p[2] + '/' + p[1] + '/' + p[0];
}

function periodData() {
  var sd = storeData();
  var raw = (activeMode === 'b' && sd.b) ? sd.b : sd.a;
  return applyDateFilter(raw);
}

// ---- CSV DOWNLOAD ----
function downloadCSV(rows, headers, filename) {
  var csv = headers.join(',') + '\n';
  rows.forEach(function(r) {
    csv += headers.map(function(h) {
      var val = r[h] !== undefined ? r[h] : '';
      if (typeof val === 'string' && (val.indexOf(',') >= 0 || val.indexOf('"') >= 0)) {
        val = '"' + val.replace(/"/g, '""') + '"';
      }
      return val;
    }).join(',') + '\n';
  });
  var blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadProducts() {
  var raw = (activeMode === 'b' && storeData().b) ? storeData().b : storeData().a;
  var prods = raw.products || [];
  var rows = prods.map(function(p, i) {
    return { ranking: i+1, id: p.id, nombre: p.name, mascota: p.mascota,
             subcategoria: p.subcat, categoria: p.cat || '',
             ordenes: p.orders, qty_total: p.qty,
             venta_neta: p.net, pct_pos1: p.pos1_pct };
  });
  var sd = storeData();
  downloadCSV(rows, ['ranking','id','nombre','mascota','subcategoria','categoria','ordenes','qty_total','venta_neta','pct_pos1'],
    sd.store.replace(' ','_') + '_top_productos.csv');
}

function downloadPromos() {
  var raw = (activeMode === 'b' && storeData().b) ? storeData().b : storeData().a;
  var promos = raw.promos_all || raw.promos || [];
  var sd = storeData();
  downloadCSV(promos, ['id','usos','disc_net','ppu'],
    sd.store.replace(' ','_') + '_promociones.csv');
}

function downloadCoupons() {
  var raw = (activeMode === 'b' && storeData().b) ? storeData().b : storeData().a;
  var coupons = raw.coupons_all || raw.coupons || [];
  var sd = storeData();
  downloadCSV(coupons, ['code','usos','disc','pct'],
    sd.store.replace(' ','_') + '_cupones.csv');
}

// ---- NAV ----
document.querySelectorAll('.nav-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.section').forEach(function(s) { s.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById('s-' + btn.dataset.s).classList.add('active');
  });
});

// ---- STORE TABS ----
function buildStoreTabs() {
  var el = document.getElementById('store-tabs');
  if (STORES.length < 2) { el.style.display = 'none'; return; }
  el.innerHTML = STORES.map(function(k) {
    var flag = k === 'sp' ? '&#x1F1F5;&#x1F1EA;' : '&#x1F1E8;&#x1F1F1;';
    return '<button class="store-tab' + (k === activeStore ? ' active' : '') + '" onclick="setStore(\'' + k + '\')">' + flag + ' ' + D[k].store + '</button>';
  }).join('');
}
function setStore(key) {
  activeStore = key; activeMode = 'a'; filterFrom = null; filterTo = null;
  buildStoreTabs(); buildPeriodChips(); buildModeToggle(); buildDateFilter(); renderAll();
}

// ---- PERIOD CHIPS ----
function buildPeriodChips() {
  var sd = storeData();
  var el = document.getElementById('hdr-periods');
  var pA = sd.a.periodo || ''; var pB = sd.b ? (sd.b.periodo || '') : '';
  el.innerHTML = '<span class="period-chip a">' + pA + '</span>' +
    (pB ? '<span class="period-chip vs">vs</span><span class="period-chip">' + pB + '</span>' : '');
}

// ---- MODE TOGGLE ----
function buildModeToggle() {
  var toggle = document.getElementById('mode-toggle');
  if (!hasB()) { toggle.style.display = 'none'; return; }
  toggle.style.display = 'flex';
  toggle.querySelectorAll('.mode-btn').forEach(function(btn, i) {
    btn.classList.toggle('active', ['a','b','cmp'][i] === activeMode);
  });
}
function setMode(m) {
  activeMode = m; filterFrom = null; filterTo = null;
  buildModeToggle(); buildDateFilter(); renderAll();
}

// ---- DATE FILTER ----
function buildDateFilter() {
  var el = document.getElementById('date-filter-area');
  if (!el) return;
  var d = rawPeriod();
  if (!d.daily || d.daily.length === 0) { el.innerHTML = ''; return; }

  var dates = d.daily.map(function(x) { return x.date; });
  var minD = dates[0]; var maxD = dates[dates.length - 1];

  el.innerHTML =
    '<div class="date-filter">' +
    '<span class="df-label">Filtrar por fecha:</span>' +
    '<input type="date" id="df-from" min="' + minD + '" max="' + maxD + '" value="' + (filterFrom || '') + '" onchange="onDateChange()">' +
    '<span class="df-sep">hasta</span>' +
    '<input type="date" id="df-to"   min="' + minD + '" max="' + maxD + '" value="' + (filterTo || '') + '" onchange="onDateChange()">' +
    '<button class="df-clear" onclick="clearDateFilter()">Limpiar</button>' +
    (filterFrom || filterTo ? '<span class="df-active">Filtrado activo</span>' : '') +
    '</div>';
}

function onDateChange() {
  var from = document.getElementById('df-from');
  var to   = document.getElementById('df-to');
  filterFrom = from && from.value ? from.value : null;
  filterTo   = to   && to.value   ? to.value   : null;
  buildDateFilter();
  renderAll();
}

function clearDateFilter() {
  filterFrom = null; filterTo = null;
  buildDateFilter(); renderAll();
}

// ---- FOOTER ----
function buildFooter() {
  var sd = storeData();
  var d = periodData();
  document.getElementById('ftr-left').textContent = sd.store + ' - ' + d.periodo + ' - Venta neta sin IVA';
}

// ---- RESUMEN ----
function renderKPIs() {
  var sd = storeData(); var d = periodData(); var S = sym(); var dl = sd.deltas;
  var items = [
    { l:'Ordenes',    v:d.kpis.orders.toLocaleString('es-PE'), s:d.periodo||'', dark:true, delta: isCmp()&&dl ? deltaTag(dl.orders) : '' },
    { l:'Venta neta', v:fmtNum(d.kpis.net,S),    s:'sin IVA', hi:true, delta: isCmp()&&dl ? deltaTag(dl.net) : '' },
    { l:'Merch bruta',v:fmtNum(d.kpis.bruta,S),  s:'antes de descuentos', delta:'' },
    { l:'Descuentos', v:fmtPct(d.kpis.discount_pct), s:fmtNum(d.kpis.discount,S)+' sobre bruta', delta: isCmp()&&dl ? ppTag(dl.discount_pct) : '' },
    { l:'Ticket neto',v:fmtNum(d.kpis.ticket,S), s:d.kpis.avg_items+' items/orden', delta: isCmp()&&dl ? deltaTag(dl.ticket) : '' },
  ];
  document.getElementById('kpi-grid').innerHTML = items.map(function(k) {
    return '<div class="kpi' + (k.dark?' primary':k.hi?' highlight':'') + '">' +
      '<div class="kpi-label">' + k.l + '</div>' +
      '<div class="kpi-value">' + k.v + '</div>' +
      '<div class="kpi-sub">' + k.s + '</div>' +
      (k.delta ? '<div style="margin-top:6px">' + k.delta + '</div>' : '') + '</div>';
  }).join('');
}

function renderCats() {
  var d = periodData(); var S = sym();
  var maxN = d.categories[0].orders;
  document.getElementById('cat-bars').innerHTML = d.categories.map(function(c, i) {
    return hbar(c.cat, Math.round(c.orders/maxN*100), COLORS[i], c.orders + ' - ' + fmtNum(c.net,S));
  }).join('');
}

function renderMascota() {
  var d = periodData(); var S = sym();
  document.getElementById('mascota-area').innerHTML = '<div class="mascota-split">' +
    d.mascota.map(function(m) {
      return '<div class="mascota-h">' +
        '<div class="mascota-ico">' + (m.m==='Perro'?'&#x1F436;':'&#x1F431;') + '</div>' +
        '<div class="mascota-name">' + m.m + '</div>' +
        '<div class="mascota-big">' + m.n + '</div>' +
        '<div class="mascota-rev">' + m.pct + '% tickets - ' + fmtNum(m.net||0,S) + '</div></div>';
    }).join('') + '</div>';

  if (cMascota) cMascota.destroy();
  var sd = storeData(); var showBoth = isCmp() && sd.b;
  cMascota = new Chart(document.getElementById('mascotaChart'), {
    type:'bar',
    data:{ labels: d.mascota.map(function(m){return m.m;}),
      datasets: showBoth
        ? [{label:sd.a.periodo||'A',data:sd.a.mascota.map(function(m){return m.n;}),backgroundColor:'#2563eb',borderRadius:4,borderSkipped:false},
           {label:sd.b.periodo||'B',data:sd.b.mascota.map(function(m){return m.n;}),backgroundColor:'#bfdbfe',borderRadius:4,borderSkipped:false}]
        : [{data:d.mascota.map(function(m){return m.n;}),backgroundColor:d.mascota.map(function(m){return m.m==='Perro'?'#2563eb':'#d97706';}),borderRadius:5,borderSkipped:false}]
    },
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:showBoth,position:'bottom'},tooltip:{callbacks:{label:function(c){return ' '+(c.dataset.label||c.label)+': '+c.raw;}}}},
      scales:{x:{grid:{display:false},ticks:{font:{size:12},color:'#a09fa8'}},y:{grid:{color:'rgba(0,0,0,.05)'},ticks:{font:{size:10},color:'#a09fa8'}}}
    }
  });
}

function renderHours() {
  var d = periodData(); var sd = storeData(); var showBoth = isCmp() && sd.b;
  if (cHour) cHour.destroy();
  cHour = new Chart(document.getElementById('hourChart'), {
    type:'bar',
    data:{ labels:Array.from({length:24},function(_,i){return i+'h';}),
      datasets: showBoth
        ? [{label:sd.a.periodo||'A',data:sd.a.hours,backgroundColor:'#2563eb',borderRadius:2,borderSkipped:false},
           {label:sd.b.periodo||'B',data:sd.b.hours,backgroundColor:'#bfdbfe',borderRadius:2,borderSkipped:false}]
        : [{data:d.hours,backgroundColor:function(ctx){var v=ctx.raw;return v>=50?'#2563eb':v>=30?'#3b82f6':v>=10?'#93c5fd':'#dbeafe';},borderRadius:3,borderSkipped:false}]
    },
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:showBoth,position:'bottom'}},
      scales:{x:{grid:{display:false},ticks:{font:{size:10},color:'#a09fa8',maxRotation:0}},y:{grid:{color:'rgba(0,0,0,.05)'},ticks:{font:{size:10},color:'#a09fa8'}}}
    }
  });
}

function renderDaily() {
  var d = periodData();
  var daily = d._days_filtered || d.daily || [];
  var el = document.getElementById('daily-chart-wrap');
  if (!el || daily.length === 0) return;
  if (cDaily) cDaily.destroy();
  cDaily = new Chart(document.getElementById('dailyChart'), {
    type:'line',
    data:{
      labels: daily.map(function(x){return x.date.slice(5);}),
      datasets:[{label:'Ordenes',data:daily.map(function(x){return x.orders;}),
        borderColor:'#2563eb',backgroundColor:'rgba(37,99,235,.08)',fill:true,tension:.3,pointRadius:2,borderWidth:2}]
    },
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{x:{grid:{display:false},ticks:{font:{size:10},color:'#a09fa8',maxRotation:45}},
              y:{grid:{color:'rgba(0,0,0,.05)'},ticks:{font:{size:10},color:'#a09fa8'}}}
    }
  });
}

// ---- PRODUCTOS ----
function renderProducts() {
  var raw = (activeMode==='b'&&storeData().b)?storeData().b:storeData().a;
  var prods = (raw.products || []).slice(0, 12);
  var S = sym();
  document.getElementById('prod-tbody').innerHTML = prods.map(function(p, i) {
    var mCls = p.mascota==='Perro'?'b-perro':'b-gato';
    var p1color = p.pos1_pct===0?'#ea580c':p.pos1_pct>=80?'#16a34a':'#18171a';
    return '<tr>' +
      '<td class="mono" style="color:#a09fa8">' + String(i+1).padStart(2,'0') + '</td>' +
      '<td><div style="font-weight:500;font-size:12px">' + p.name + '</div><div class="mono" style="color:#a09fa8">' + p.id + '</div></td>' +
      '<td><span class="bdg ' + mCls + '">' + p.mascota + '</span></td>' +
      '<td><span class="bdg b-cat">' + p.subcat + '</span></td>' +
      '<td class="r">' + p.orders + '</td>' +
      '<td class="r" style="color:#a09fa8">' + p.qty + '</td>' +
      '<td class="r">' + fmtNum(p.net,S) + '</td>' +
      '<td><div style="font-size:11px;font-weight:500;color:' + p1color + '">' + (p.pos1_pct===0?'cross-sell':p.pos1_pct+'%') + '</div>' +
      '<div style="height:3px;border-radius:2px;background:' + (p.pos1_pct>=80?'#16a34a':'#2563eb') + ';width:' + p.pos1_pct + '%;margin-top:4px"></div></td>' +
      '</tr>';
  }).join('');
}

// ---- PRESENCIA ----
function renderPresence() {
  var d = periodData(); var top = d.presence[0];
  document.getElementById('pres-kpis').innerHTML = [
    {l:'Mas presente',    v:top.sc, s:top.pct+'% de tickets'},
    {l:'Ancla dominante', v:d.presence.reduce(function(a,p){return p.anc_pct>a.anc_pct?p:a;},d.presence[0]).sc, s:'mayor % en pos.1'},
    {l:'Add-on estrella', v:d.presence.reduce(function(a,p){return p.add_pct>a.add_pct?p:a;},d.presence[0]).sc, s:'mayor % en pos.2+'},
    {l:'Mayor revenue',   v:d.presence.reduce(function(a,p){return p.net>a.net?p:a;},d.presence[0]).sc, s:'venta neta'},
  ].map(function(k){return '<div class="kpi-mini"><div class="kpi-mini-l">'+k.l+'</div><div class="kpi-mini-v">'+k.v+'</div><div class="kpi-mini-s">'+k.s+'</div></div>';}).join('');

  var maxN = d.presence[0].n;
  document.getElementById('pres-bars').innerHTML = d.presence.map(function(p,i){
    return hbar(p.sc, Math.round(p.n/maxN*100), COLORS[i%COLORS.length], p.pct+'%');
  }).join('');

  var rolHtml = '<div style="display:grid;grid-template-columns:148px 1fr 1fr 44px;gap:6px;font-size:10px;font-weight:600;text-transform:uppercase;color:#a09fa8;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #e4e2dd"><span>Subcat.</span><span style="text-align:center">% ancla</span><span style="text-align:center">% add-on</span><span style="text-align:right">pos.</span></div>';
  rolHtml += d.presence.map(function(p){
    return '<div style="display:grid;grid-template-columns:148px 1fr 1fr 44px;gap:6px;align-items:center;margin-bottom:6px">' +
      '<div style="font-size:11px;color:#6b6a72;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="'+p.sc+'">'+p.sc+'</div>' +
      '<div><div style="height:13px;background:#f2f1ef;border-radius:2px;overflow:hidden"><div style="width:'+Math.round(p.anc_pct*.95)+'%;background:#2563eb;height:100%;border-radius:2px"></div></div><div style="font-size:10px;color:#a09fa8">'+p.anc_pct+'%</div></div>' +
      '<div><div style="height:13px;background:#f2f1ef;border-radius:2px;overflow:hidden"><div style="width:'+Math.round(p.add_pct*.95)+'%;background:#ea580c;height:100%;border-radius:2px"></div></div><div style="font-size:10px;color:#a09fa8">'+p.add_pct+'%</div></div>' +
      '<div style="font-size:12px;font-weight:500;text-align:right">'+p.pos_avg+'</div></div>';
  }).join('');
  document.getElementById('rol-bars').innerHTML = rolHtml;

  var tbl = document.getElementById('cooc-table');
  tbl.innerHTML = '<thead><tr><th class="lbl">Si lleva / Tambien</th>' +
    d.cooc_labels.map(function(l){return '<th>'+l.replace('Alimento ','A.')+'</th>';}).join('') + '</tr></thead><tbody>' +
    d.cooc_matrix.map(function(row,i){
      return '<tr><td class="lbl">'+d.cooc_labels[i]+'</td>'+
        row.map(function(v){
          var bg=v===null?'#f2f1ef':v>=30?'#2563eb':v>=15?'#6092bc':v>=5?'#bfdbfe':'#eff4ff';
          var tc=v>=15?'#fff':v>=5?'#1e40af':'#a09fa8';
          return '<td style="background:'+bg+';color:'+tc+';font-weight:500">'+(v===null?'':v>0?v+'%':'-')+'</td>';
        }).join('')+'</tr>';
    }).join('')+'</tbody>';
}

// ---- CARRITO ----
function renderCarrito() {
  var d = periodData(); var maxN = d.conversion[0].n;
  document.getElementById('conv-funnel').innerHTML = d.conversion.map(function(c,i){
    var w=Math.round(c.n/maxN*100);
    var drop=i>0?' - caida '+Math.round((1-c.n/d.conversion[i-1].n)*100)+'%':'';
    return '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
      '<div style="font-size:11px;color:#a09fa8;width:50px;font-family:monospace">item '+c.pos+'</div>' +
      '<div style="flex:1;background:#f2f1ef;border-radius:4px;overflow:hidden;height:22px"><div style="width:'+w+'%;background:#2563eb;height:100%;border-radius:4px;display:flex;align-items:center;padding:0 9px;font-size:11px;font-weight:600;color:#fff">'+c.n+'</div></div>' +
      '<div style="font-size:11px;color:#a09fa8;min-width:100px;text-align:right">'+c.pct+'%'+drop+'</div></div>';
  }).join('');

  document.getElementById('cs-grid').innerHTML = d.crosssell.map(function(cs){
    var maxP=Math.max.apply(null,cs.addons.map(function(a){return a.pct;}));
    return '<div style="background:#f2f1ef;border-radius:8px;padding:12px 14px;margin-bottom:10px">' +
      '<div style="font-size:12px;font-weight:600;margin-bottom:2px">Ancla: '+cs.anchor+'</div>' +
      '<div style="font-size:10px;color:#a09fa8;margin-bottom:8px">'+cs.n+' ordenes - lo que agregan despues:</div>' +
      cs.addons.map(function(a){
        return '<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">' +
          '<div style="font-size:11px;color:#6b6a72;width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+a.sc+'</div>' +
          '<div style="flex:1;height:12px;background:#e4e2dd;border-radius:2px;overflow:hidden"><div style="width:'+Math.round(a.pct/maxP*100)+'%;height:100%;background:#2563eb;border-radius:2px"></div></div>' +
          '<div style="font-size:11px;font-weight:600;min-width:28px;text-align:right">'+a.pct+'%</div></div>';
      }).join('')+'</div>';
  }).join('');
}

// ---- PROMOS ----
function renderPromos() {
  var raw = (activeMode==='b'&&storeData().b)?storeData().b:storeData().a;
  var S = sym();
  var promos = (raw.promos || []).slice(0,10);
  var maxD = promos.length > 0 ? promos[0].disc_net : 1;

  document.getElementById('promo-tbody').innerHTML = promos.map(function(p){
    var ppu = (p.disc_net / p.usos).toFixed(0);
    var bw  = Math.round(p.disc_net / maxD * 100);
    return '<tr>' +
      '<td><div class="mono">'+p.id+'</div>' +
      '<div style="height:2px;background:#e4e2dd;border-radius:1px;margin-top:4px;overflow:hidden"><div style="width:'+bw+'%;height:100%;background:#2563eb"></div></div></td>' +
      '<td class="r">'+p.usos+'</td>' +
      '<td class="r">'+fmtNum(p.disc_net,S)+'</td>' +
      '<td class="r" style="color:#a09fa8">'+S+ppu+'</td></tr>';
  }).join('');

  var coupons = (raw.coupons || []).slice(0,10);
  document.getElementById('coupon-tbody').innerHTML = coupons.map(function(c){
    var clr=c.pct>=40?'#dc2626':c.pct>=20?'#d97706':'#2563eb';
    return '<tr>' +
      '<td class="mono">'+c.code+'</td>' +
      '<td class="r">'+c.usos+'</td>' +
      '<td class="r">'+fmtNum(c.disc,S)+'</td>' +
      '<td class="r"><span style="font-weight:600;color:'+clr+'">'+c.pct+'%</span></td></tr>';
  }).join('');
}

// ---- OPERACIONES ----
function renderOps() {
  var raw = (activeMode==='b'&&storeData().b)?storeData().b:storeData().a;
  var S = sym();
  var ship = raw.shipping_detail || raw.shipping || [];
  var maxN = ship.length > 0 ? ship[0].n : 1;

  // Tabla con metricas por metodo
  // Barras de participacion
  var barsHtml = ship.map(function(s,i){
    return hbar(s.method, Math.round(s.n/maxN*100), COLORS[i], s.n+' ('+s.pct+'%)');
  }).join('');

  // Tabla de metricas separada con estilos normalizados
  var tableHtml =
    '<div style="margin-top:20px;border-top:1px solid #e4e2dd;padding-top:16px">' +
    '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#a09fa8;margin-bottom:10px">Metricas por metodo</div>' +
    '<table class="tbl ship-metrics-tbl">' +
    '<thead><tr>' +
    '<th style="width:40%">Metodo</th>' +
    '<th class="r" style="width:15%">Ordenes</th>' +
    '<th class="r" style="width:10%">%</th>' +
    '<th class="r" style="width:20%">Ticket neto prom.</th>' +
    '<th class="r" style="width:15%">Lineas/orden</th>' +
    '</tr></thead><tbody>' +
    ship.map(function(s){
      return '<tr>' +
        '<td style="font-weight:500">'+s.method+'</td>' +
        '<td class="r">'+s.n.toLocaleString('es-PE')+'</td>' +
        '<td class="r">'+s.pct+'%</td>' +
        '<td class="r">'+(s.ticket ? fmtNum(s.ticket,S) : '-')+'</td>' +
        '<td class="r">'+(s.avg_items ? s.avg_items : '-')+'</td>' +
        '</tr>';
    }).join('') +
    '</tbody></table></div>';

  document.getElementById('ship-bars').innerHTML = barsHtml + tableHtml;

  if (cShip) cShip.destroy();
  var N = raw.kpis.orders;
  cShip = new Chart(document.getElementById('shipChart'), {
    type:'doughnut',
    data:{labels:ship.map(function(s){return s.method;}),
      datasets:[{data:ship.map(function(s){return s.n;}),backgroundColor:COLORS.slice(0,ship.length),borderWidth:3,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
      plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return ' '+c.label+': '+c.raw+' ('+((c.raw/N*100).toFixed(1))+'%)';}}}}}
  });

  document.getElementById('ship-legend').innerHTML = ship.map(function(s,i){
    return '<span><span style="width:9px;height:9px;border-radius:2px;background:'+COLORS[i]+';display:inline-block;margin-right:5px;vertical-align:middle"></span>'+s.method+' '+s.pct+'%</span>';
  }).join('');
}

// ---- HELP BOXES ----
var SECTION_HELP = {
  'resumen':   { t:'Resumen del periodo', d:'KPIs principales. Venta neta no incluye IVA. Que mirar: si el descuento sube pero las ordenes no crecen, hay presion de margen.' },
  'productos': { t:'Top 12 productos - como leer % pos.1 y cross-sell',
    d:'% pos.1 = cuantas veces ese producto fue el PRIMERO en el carrito (item ancla). ' +
      'Ejemplo: Canbo 94% significa que en 94 de cada 100 ordenes donde aparece, fue el primer producto agregado. ' +
      'El cliente llego al sitio a comprarlo. ' +
      '0% (cross-sell) = nunca fue el primer producto, siempre lo agregan DESPUES de otro. ' +
      'Ejemplo: Churu Atun 0% - nadie entra al sitio a buscarlo, pero lo agrega junto a otro producto. ' +
      'Valores bajos (10-40%) = producto de oportunidad, el cliente lo encuentra navegando. ' +
      'Que hacer: los cross-sell puros son candidatos a bundle o sugerencia en checkout.' },
  'presencia': { t:'Presencia en ticket y co-ocurrencia - como leer la tabla',
    d:'PRESENCIA: de cada 100 ordenes totales, cuantas incluyen esa subcategoria al menos una vez. ' +
      'ROL ANCLA: % de veces que esa subcat fue el primer item (pos.1). Alta ancla = la gente viene a buscar eso. ' +
      'ROL ADD-ON: % de veces que entro en pos.2 o despues. Alta add-on = se agrega de camino. ' +
      'CO-OCURRENCIA: solo aplica a ordenes con 2 o mas productos. ' +
      'Lee la tabla fila por fila: la fila es "quien compra X" y la columna es "tambien lleva Y". ' +
      'Ejemplo: fila Alimento seco / columna Alimento humedo = 36% significa: ' +
      'de todas las ordenes que tienen alimento seco, el 36% tambien tiene humedo en la misma boleta. ' +
      'No dice cual fue primero, solo que coexisten. ' +
      'Que hacer: pares con % alto son candidatos a bundle (descuento si llevas ambos) o campana cruzada.' },
  'carrito':   { t:'Embudo de carrito y cross-sell por ancla',
    d:'EMBUDO: de cada 100 ordenes, cuantas tienen 2do, 3er producto. El % de caida es el drop-off. ' +
      'Si cae 57% de item1 a item2, significa que 57 de cada 100 clientes no agrega nada mas. ' +
      'CROSS-SELL POR ANCLA: a diferencia de la co-ocurrencia, aqui SI importa el orden. ' +
      'Muestra que agrega el cliente DESPUES de su primer producto (ancla). ' +
      'Ejemplo: si ancla=Alimento seco y aparece Humedo 16%, significa que de 100 ordenes donde ' +
      'el primer producto fue alimento seco, 16 tambien agregaron humedo despues.' },
  'promos':    { t:'Promociones y cupones',
    d:'PROMOS AUTOMATICAS: se aplican solas por reglas de negocio (4x3, 50% seleccionados, etc). ' +
      'La columna Por uso = cuanto descuenta en promedio cada uso. ' +
      'CUPONES: el % es sobre la merch bruta de esa orden especifica, NO sobre el total pagado. ' +
      'Ejemplo: CMRE100 al 50% = cupon de S/100 aplicado sobre una orden de S/200 bruta. Esta bien configurado. ' +
      'Alerta: % muy alto (70%+) con muchos usos puede indicar mal configuracion o abuso. ' +
      'Descarga el CSV para ver el listado completo y detectar anomalias.' },
  'ops':       { t:'Operaciones, envio y horarios',
    d:'TABLA DE ENVIO: ticket promedio y items por metodo te dice el perfil del cliente segun como compra. ' +
      'Click & Collect alto = clientes que prefieren retirar o zonas con despacho caro. ' +
      'Express alto = compradores con urgencia, ticket probablemente mayor. ' +
      'HORAS: el grafico muestra en que horas del dia llegan las ordenes. ' +
      'Que hacer: concentrar campanas de email y push en las 2 horas previas al peak.' }
};

function addHelpBoxes() {
  Object.keys(SECTION_HELP).forEach(function(key) {
    var sec = document.getElementById('s-' + key);
    if (!sec || sec.querySelector('.help-box')) return;
    var info = SECTION_HELP[key];
    var box = document.createElement('div');
    box.className = 'help-box';
    box.innerHTML = '<div class="help-header" onclick="this.parentElement.classList.toggle(\'open\')">' +
      '<span class="help-icon">?</span>' +
      '<span class="help-title">' + info.t + '</span>' +
      '<span class="help-arrow">ver explicacion</span></div>' +
      '<div class="help-body">' + info.d + '</div>';
    sec.prepend(box);
  });
}

// ---- RENDER ALL ----
function renderAll() {
  renderKPIs();
  renderCats();
  renderMascota();
  renderHours();
  renderDaily();
  renderProducts();
  renderPresence();
  renderCarrito();
  renderPromos();
  renderOps();
  buildFooter();
}

// ---- INIT ----
buildStoreTabs();
buildPeriodChips();
buildModeToggle();
buildDateFilter();
addHelpBoxes();
renderAll();
