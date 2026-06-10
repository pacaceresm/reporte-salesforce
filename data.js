const DASH_DATA = {
  "sp": {
    "a": {
      "periodo": "01/05/2026 – 01/06/2026",
      "fecha_inicio": "2026-05-01",
      "fecha_fin": "2026-06-01",
      "kpis": {
        "orders": 14207,
        "net": 2139275.74,
        "bruta": 3261212.89,
        "discount": 765411.31,
        "discount_pct": 23.5,
        "ticket": 150.58,
        "avg_items": 2.1
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 9152,
          "pct": 64.4,
          "net": 1720193.72
        },
        {
          "m": "Gato",
          "n": 5815,
          "pct": 40.9,
          "net": 1012048.9
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 20895,
          "net": 2046499.02
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 4246,
          "net": 441891.27
        },
        {
          "cat": "Salud e higiene",
          "orders": 1884,
          "net": 189873.75
        },
        {
          "cat": "Accesorios",
          "orders": 1593,
          "net": 59400.83
        },
        {
          "cat": "Juguetes",
          "orders": 289,
          "net": 8021.99
        },
        {
          "cat": "Arena y accesorios",
          "orders": 129,
          "net": 15177.21
        },
        {
          "cat": "Pet lovers",
          "orders": 80,
          "net": 2081.83
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 6785,
          "pct": 47.8,
          "pos_avg": 1.4,
          "anc_pct": 89.7,
          "add_pct": 20.0,
          "net": 1220227.29
        },
        {
          "sc": "Alimento húmedo",
          "n": 3952,
          "pct": 27.8,
          "pos_avg": 3.1,
          "anc_pct": 34.7,
          "add_pct": 80.9,
          "net": 274289.74
        },
        {
          "sc": "Antiparasitarios",
          "n": 2010,
          "pct": 14.1,
          "pos_avg": 1.5,
          "anc_pct": 83.7,
          "add_pct": 27.4,
          "net": 352640.61
        },
        {
          "sc": "Snacks",
          "n": 1590,
          "pct": 11.2,
          "pos_avg": 3.8,
          "anc_pct": 32.4,
          "add_pct": 85.9,
          "net": 102257.64
        },
        {
          "sc": "Arena para gato",
          "n": 1433,
          "pct": 10.1,
          "pos_avg": 1.7,
          "anc_pct": 66.3,
          "add_pct": 36.9,
          "net": 162770.08
        },
        {
          "sc": "Alimento medicado",
          "n": 946,
          "pct": 6.7,
          "pos_avg": 1.4,
          "anc_pct": 82.0,
          "add_pct": 23.6,
          "net": 171358.65
        },
        {
          "sc": "Juguetes",
          "n": 905,
          "pct": 6.4,
          "pos_avg": 3.2,
          "anc_pct": 9.6,
          "add_pct": 91.9,
          "net": 10662.94
        },
        {
          "sc": "Alimento natural",
          "n": 790,
          "pct": 5.6,
          "pos_avg": 1.4,
          "anc_pct": 88.5,
          "add_pct": 22.7,
          "net": 231817.59
        },
        {
          "sc": "Fármacos",
          "n": 536,
          "pct": 3.8,
          "pos_avg": 1.6,
          "anc_pct": 76.9,
          "add_pct": 35.0,
          "net": 32498.79
        },
        {
          "sc": "Pañales y control de orina",
          "n": 331,
          "pct": 2.3,
          "pos_avg": 1.6,
          "anc_pct": 72.5,
          "add_pct": 32.6,
          "net": 34987.19
        },
        {
          "sc": "Alimento BARF",
          "n": 327,
          "pct": 2.3,
          "pos_avg": 2.0,
          "anc_pct": 69.1,
          "add_pct": 55.2,
          "net": 25899.38
        },
        {
          "sc": "Suplementos y vitaminas",
          "n": 293,
          "pct": 2.1,
          "pos_avg": 1.6,
          "anc_pct": 71.7,
          "add_pct": 34.4,
          "net": 19957.31
        },
        {
          "sc": "Shampoo",
          "n": 173,
          "pct": 1.2,
          "pos_avg": 2.1,
          "anc_pct": 48.6,
          "add_pct": 56.2,
          "net": 7129.42
        },
        {
          "sc": "Cuidado externo",
          "n": 156,
          "pct": 1.1,
          "pos_avg": 2.0,
          "anc_pct": 54.5,
          "add_pct": 47.2,
          "net": 5385.07
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Alimento húmedo",
        "Antiparasitarios",
        "Snacks",
        "Arena para gato",
        "Alimento medicado"
      ],
      "cooc_matrix": [
        [
          null,
          18.0,
          3.3,
          8.8,
          7.2,
          1.4
        ],
        [
          30.9,
          null,
          33.0,
          14.0,
          8.7,
          4.4
        ],
        [
          11.3,
          64.8,
          null,
          6.5,
          2.2,
          1.5
        ],
        [
          37.5,
          34.9,
          8.2,
          null,
          12.2,
          5.5
        ],
        [
          34.1,
          24.0,
          3.1,
          13.5,
          null,
          4.7
        ],
        [
          10.0,
          18.4,
          3.3,
          9.2,
          7.1,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 6083,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 881,
              "pct": 14.5
            },
            {
              "sc": "Snacks",
              "n": 438,
              "pct": 7.2
            },
            {
              "sc": "Arena para gato",
              "n": 271,
              "pct": 4.5
            },
            {
              "sc": "Antiparasitarios",
              "n": 141,
              "pct": 2.3
            },
            {
              "sc": "Juguetes",
              "n": 123,
              "pct": 2.0
            },
            {
              "sc": "Alimento BARF",
              "n": 48,
              "pct": 0.8
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 1682,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 1135,
              "pct": 67.5
            },
            {
              "sc": "Alimento seco",
              "n": 66,
              "pct": 3.9
            },
            {
              "sc": "Snacks",
              "n": 63,
              "pct": 3.7
            },
            {
              "sc": "Shampoo",
              "n": 22,
              "pct": 1.3
            },
            {
              "sc": "Fármacos",
              "n": 19,
              "pct": 1.1
            },
            {
              "sc": "Juguetes",
              "n": 14,
              "pct": 0.8
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 1370,
          "addons": [
            {
              "sc": "Snacks",
              "n": 199,
              "pct": 14.5
            },
            {
              "sc": "Alimento seco",
              "n": 187,
              "pct": 13.6
            },
            {
              "sc": "Arena para gato",
              "n": 88,
              "pct": 6.4
            },
            {
              "sc": "Alimento medicado",
              "n": 51,
              "pct": 3.7
            },
            {
              "sc": "Juguetes",
              "n": 38,
              "pct": 2.8
            },
            {
              "sc": "Antiparasitarios",
              "n": 26,
              "pct": 1.9
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 950,
          "addons": [
            {
              "sc": "Juguetes",
              "n": 481,
              "pct": 50.6
            },
            {
              "sc": "Alimento seco",
              "n": 168,
              "pct": 17.7
            },
            {
              "sc": "Alimento húmedo",
              "n": 144,
              "pct": 15.2
            },
            {
              "sc": "Snacks",
              "n": 99,
              "pct": 10.4
            },
            {
              "sc": "Alimento medicado",
              "n": 25,
              "pct": 2.6
            },
            {
              "sc": "Antiparasitarios",
              "n": 20,
              "pct": 2.1
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 776,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 93,
              "pct": 12.0
            },
            {
              "sc": "Snacks",
              "n": 56,
              "pct": 7.2
            },
            {
              "sc": "Alimento seco",
              "n": 41,
              "pct": 5.3
            },
            {
              "sc": "Arena para gato",
              "n": 34,
              "pct": 4.4
            },
            {
              "sc": "Antiparasitarios",
              "n": 21,
              "pct": 2.7
            },
            {
              "sc": "Fármacos",
              "n": 14,
              "pct": 1.8
            }
          ]
        },
        {
          "anchor": "Alimento natural",
          "n": 699,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 66,
              "pct": 9.4
            },
            {
              "sc": "Alimento seco",
              "n": 36,
              "pct": 5.2
            },
            {
              "sc": "Snacks",
              "n": 36,
              "pct": 5.2
            },
            {
              "sc": "Antiparasitarios",
              "n": 27,
              "pct": 3.9
            },
            {
              "sc": "Juguetes",
              "n": 16,
              "pct": 2.3
            },
            {
              "sc": "Correas y arneses",
              "n": 13,
              "pct": 1.9
            }
          ]
        }
      ],
      "hours": [
        201,
        93,
        41,
        33,
        31,
        37,
        145,
        248,
        557,
        854,
        1050,
        1117,
        1068,
        991,
        945,
        908,
        887,
        925,
        872,
        715,
        787,
        674,
        592,
        436
      ],
      "shipping": [
        {
          "method": "Lima",
          "n": 7055,
          "pct": 49.7
        },
        {
          "method": "Click & Collect",
          "n": 3982,
          "pct": 28.0
        },
        {
          "method": "Express",
          "n": 2362,
          "pct": 16.6
        },
        {
          "method": "Programado",
          "n": 571,
          "pct": 4.0
        },
        {
          "method": "Arequipa",
          "n": 85,
          "pct": 0.6
        },
        {
          "method": "Lima-La-Libertad",
          "n": 61,
          "pct": 0.4
        },
        {
          "method": "Piura",
          "n": 43,
          "pct": 0.3
        },
        {
          "method": "Lambayeque",
          "n": 36,
          "pct": 0.3
        }
      ],
      "promos": [
        {
          "id": "PBOMBA",
          "usos": 1960,
          "disc_net": 74426.61
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 1335,
          "disc_net": 18392.2
        },
        {
          "id": "REGAL-TRUE",
          "usos": 1241,
          "disc_net": 13564.13
        },
        {
          "id": "10M2PERMAN",
          "usos": 730,
          "disc_net": 11725.1
        },
        {
          "id": "REGALO-TCBAND",
          "usos": 685,
          "disc_net": 2267.35
        },
        {
          "id": "50-LIQUI-ALIM",
          "usos": 611,
          "disc_net": 62412.79
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 568,
          "disc_net": 53910.99
        },
        {
          "id": "70-LIQUI-ALIM",
          "usos": 455,
          "disc_net": 93351.62
        },
        {
          "id": "4x3HUM-MMPP",
          "usos": 444,
          "disc_net": 6430.67
        },
        {
          "id": "3x2AREN-TKPET",
          "usos": 383,
          "disc_net": 23332.45
        }
      ],
      "coupons": [
        {
          "code": "PRIMERA10",
          "usos": 765,
          "disc": 12206.04,
          "pct": 10.0
        },
        {
          "code": "SINIGV",
          "usos": 665,
          "disc": 49552.78,
          "pct": 18.0
        },
        {
          "code": "20DESCUENTO",
          "usos": 154,
          "disc": 14679.17,
          "pct": 19.8
        },
        {
          "code": "PET15",
          "usos": 90,
          "disc": 2329.14,
          "pct": 15.0
        },
        {
          "code": "20CUPON",
          "usos": 62,
          "disc": 5903.44,
          "pct": 19.8
        },
        {
          "code": "414791",
          "usos": 16,
          "disc": 3184.4,
          "pct": 40.0
        },
        {
          "code": "CPC15PE2",
          "usos": 13,
          "disc": 259.81,
          "pct": 15.0
        },
        {
          "code": "VUELVE15",
          "usos": 10,
          "disc": 150.0,
          "pct": 60.9
        },
        {
          "code": "447409",
          "usos": 5,
          "disc": 388.54,
          "pct": 20.0
        },
        {
          "code": "455170",
          "usos": 5,
          "disc": 590.68,
          "pct": 40.0
        }
      ],
      "products": [
        {
          "id": "AP001301",
          "name": "True Origins Pure Dog Tuna Potato 185 Gr",
          "orders": 1247,
          "qty": 1250.0,
          "net": 13662.51,
          "pos1_pct": 0,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "MD005242",
          "name": "The Cat Band Raton Roll (Modelos Aleatorios)",
          "orders": 715,
          "qty": 731.0,
          "net": 2419.49,
          "pos1_pct": 1,
          "mascota": "Gato",
          "subcat": "Juguetes",
          "cat": "Accesorios"
        },
        {
          "id": "AP000813",
          "name": "Salvaje Adulto Con Pollo 15 Kg",
          "orders": 566,
          "qty": 674.0,
          "net": 94190.56,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000033",
          "name": "Canbo Adulto Cordero Razas Med/Gran Alimento Sec",
          "orders": 437,
          "qty": 465.0,
          "net": 95720.01,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000814",
          "name": "Salvaje Adulto Con Cordero 15 Kg",
          "orders": 390,
          "qty": 456.0,
          "net": 65655.4,
          "pos1_pct": 95,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000743",
          "name": "Proteggo 3m 500mg para Perro 10 20 Kg (Cja X 1 T",
          "orders": 336,
          "qty": 429.0,
          "net": 58133.74,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000561",
          "name": "Salvaje Esterilizado Gato 12kg",
          "orders": 332,
          "qty": 371.0,
          "net": 47128.44,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000655",
          "name": "Catxtreme Cat Adult Steril Pate With Lamb 170 Gr",
          "orders": 317,
          "qty": 433.0,
          "net": 3632.87,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000489",
          "name": "Churu Sabor Atún con Salmón 60Gr",
          "orders": 268,
          "qty": 597.0,
          "net": 6526.13,
          "pos1_pct": 19,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000487",
          "name": "Arena para gato Tkpet aglomerante aroma talco",
          "orders": 236,
          "qty": 580.0,
          "net": 44188.25,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "FF000101",
          "name": "Bravecto 250mg para Perro 4.5 a 10kg 1 Tab.",
          "orders": 222,
          "qty": 255.0,
          "net": 41253.9,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP000036",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 193,
          "qty": 217.0,
          "net": 22785.0,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000486",
          "name": "Arena para gato Tkpet aglomerante aroma talco",
          "orders": 192,
          "qty": 491.0,
          "net": 21755.11,
          "pos1_pct": 71,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000017",
          "name": "Canbo Cuidado De Esterilizados / Sterilized Care",
          "orders": 192,
          "qty": 218.0,
          "net": 33236.25,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000742",
          "name": "Proteggo 3m 250 Mg para Perro 4.5 10 Kg (Cja X 1",
          "orders": 191,
          "qty": 229.0,
          "net": 29866.53,
          "pos1_pct": 73,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "JUNAP001191",
          "name": "True Origins Pure Dog Puppy Salmon Gf 12 Kg",
          "orders": 189,
          "qty": 283.0,
          "net": 71686.04,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "FF000755",
          "name": "Proteggo m 100 mg para Perro 4,5 10Kg (1tab x ca",
          "orders": 188,
          "qty": 247.0,
          "net": 12957.52,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP000796",
          "name": "Dogxtreme Adulto Cordero Alimento Seco Perro",
          "orders": 187,
          "qty": 225.0,
          "net": 32395.81,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000015",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 160,
          "qty": 193.0,
          "net": 11923.54,
          "pos1_pct": 49,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP000270",
          "name": "Mio Cane Premium Adulto 15 kg",
          "orders": 149,
          "qty": 170.0,
          "net": 24765.58,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000014",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 149,
          "qty": 203.0,
          "net": 6520.32,
          "pos1_pct": 52,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "FF000744",
          "name": "Proteggo 3m 1000mg para Perro 20 40 Kg (Cja X 1 ",
          "orders": 145,
          "qty": 174.0,
          "net": 30361.27,
          "pos1_pct": 78,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "FF000102",
          "name": "Bravecto 500mg para Perro 10 a 20kg 1 Tab.",
          "orders": 145,
          "qty": 168.0,
          "net": 28887.59,
          "pos1_pct": 73,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000490",
          "name": "Churu Sabor Pollo con Camarón 60Gr",
          "orders": 144,
          "qty": 295.0,
          "net": 3224.74,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000393",
          "name": "Gran Plus Menu Gato Adulto Castrado  Salmon Y Ar",
          "orders": 143,
          "qty": 158.0,
          "net": 29846.17,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PG000105",
          "name": "Churu Gato Pollo Con Salmón (4 Unidades)",
          "orders": 141,
          "qty": 265.0,
          "net": 2896.77,
          "pos1_pct": 6,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "PG000106",
          "name": "Churu Gato Tuna/Seafood (4 Unidades)",
          "orders": 138,
          "qty": 245.0,
          "net": 2678.15,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "JULAP001181",
          "name": "True Origins Pure Dog Adult Chicken Gf 12 Kg",
          "orders": 126,
          "qty": 154.0,
          "net": 35224.42,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "AG000487",
          "name": "Churu Sabor Pollo 60Gr",
          "orders": 125,
          "qty": 300.0,
          "net": 3279.5,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000486",
          "name": "Churu Sabor Atún con Pollo 60Gr",
          "orders": 117,
          "qty": 247.0,
          "net": 2700.08,
          "pos1_pct": 4,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000681",
          "name": "Leonardo Drink Salmón 0.040 Kg",
          "orders": 112,
          "qty": 673.0,
          "net": 3365.0,
          "pos1_pct": 24,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000675",
          "name": "Leonardo Quality Selection Ave",
          "orders": 110,
          "qty": 588.0,
          "net": 10913.03,
          "pos1_pct": 44,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000019",
          "name": "Canbo Cuidado Del Tracto Urinario / Urinary Heal",
          "orders": 108,
          "qty": 121.0,
          "net": 18447.63,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000098",
          "name": "Bravecto 1000mg para Perro 20 a 40kg 1 Tab.",
          "orders": 106,
          "qty": 117.0,
          "net": 25868.7,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000495",
          "name": "Catxtreme Adulto Esterilizado Salmón 6 Kg",
          "orders": 105,
          "qty": 156.0,
          "net": 17569.85,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000798",
          "name": "Dogxtreme Adulto Salmón Alimento Seco Perro",
          "orders": 101,
          "qty": 111.0,
          "net": 18804.41,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PG000104",
          "name": "Churu Gato Atún Con Cangrejo (4 Unidades)",
          "orders": 96,
          "qty": 169.0,
          "net": 1847.36,
          "pos1_pct": 4,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000093",
          "name": "Hills PD c/d Multicare 1.8kg Cuidado urinario Mu",
          "orders": 94,
          "qty": 108.0,
          "net": 13536.71,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "JUNAP001260",
          "name": "True Origins Wild Dog Redlands Adult 3 Kg",
          "orders": 93,
          "qty": 184.0,
          "net": 20255.33,
          "pos1_pct": 75,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "AG000249",
          "name": "Origens Filete Atún Con Camaron 85 g",
          "orders": 92,
          "qty": 368.0,
          "net": 2775.5,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000035",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 92,
          "qty": 98.0,
          "net": 4725.56,
          "pos1_pct": 70,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000656",
          "name": "Catxtreme Cat Adult Steril Pate With Salmon 170 ",
          "orders": 90,
          "qty": 401.0,
          "net": 3364.38,
          "pos1_pct": 33,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000614",
          "name": "True Origins Wild Cat Adult Country Water Alimen",
          "orders": 90,
          "qty": 91.0,
          "net": 1534.27,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000016",
          "name": "Canbo Cuidado De Esterilizados / Sterilized Care",
          "orders": 87,
          "qty": 87.0,
          "net": 6554.58,
          "pos1_pct": 74,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000251",
          "name": "Origens Filete Atún Con Papaya 85 g",
          "orders": 87,
          "qty": 310.0,
          "net": 2338.01,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000330",
          "name": "Origens Filete De Atún Con Aceituna 85 g",
          "orders": 87,
          "qty": 427.0,
          "net": 3220.51,
          "pos1_pct": 17,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000677",
          "name": "Rivolta 6% X 0.75 Ml (2.6kg A 7.5kg) 1 Pipeta",
          "orders": 87,
          "qty": 255.0,
          "net": 10783.25,
          "pos1_pct": 54,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Salud e higiene"
        },
        {
          "id": "HC000674",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 86,
          "qty": 116.0,
          "net": 7491.07,
          "pos1_pct": 67,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "JUNAP001254",
          "name": "True Origins Wild Dog Pacific Adult 12 Kg",
          "orders": 85,
          "qty": 120.0,
          "net": 32532.03,
          "pos1_pct": 94,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "JULAG000749",
          "name": "Nath Veterinary Diets Gato Estruvita 2Kg",
          "orders": 84,
          "qty": 152.0,
          "net": 13126.2,
          "pos1_pct": 88,
          "mascota": "Gato",
          "subcat": "Dietas veterinarias",
          "cat": "Alimentos"
        },
        {
          "id": "AG000673",
          "name": "Leonardo Quality Selection Pato",
          "orders": 81,
          "qty": 323.0,
          "net": 6268.36,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000682",
          "name": "Leonardo Drink Pato 0.040 Kg",
          "orders": 80,
          "qty": 499.0,
          "net": 2495.0,
          "pos1_pct": 15,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000485",
          "name": "Churu Sabor Atún 60Gr",
          "orders": 80,
          "qty": 179.0,
          "net": 1956.76,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000683",
          "name": "Leonardo Drink Ternera 0.040 Kg",
          "orders": 76,
          "qty": 392.0,
          "net": 1960.0,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000715",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 76,
          "qty": 116.0,
          "net": 3833.81,
          "pos1_pct": 55,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000250",
          "name": "Origens Filete Atún Con Corvina 85 g",
          "orders": 75,
          "qty": 272.0,
          "net": 2051.44,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000671",
          "name": "Leonardo Quality Selection Pescado",
          "orders": 74,
          "qty": 292.0,
          "net": 5666.78,
          "pos1_pct": 24,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000804",
          "name": "Tkpet Arena Con Carbón Activado",
          "orders": 73,
          "qty": 156.0,
          "net": 8580.0,
          "pos1_pct": 60,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000229",
          "name": "Félix Pate Salmón 156gr",
          "orders": 73,
          "qty": 817.0,
          "net": 4777.34,
          "pos1_pct": 37,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP001476",
          "name": "Dogxtreme Adulto Salmon 400Gr",
          "orders": 72,
          "qty": 233.0,
          "net": 2547.15,
          "pos1_pct": 28,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000247",
          "name": "Origens Filete Atún 85 g",
          "orders": 72,
          "qty": 400.0,
          "net": 3016.87,
          "pos1_pct": 25,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000797",
          "name": "Dogxtreme Adulto Senior/Light Alimento Seco Perr",
          "orders": 70,
          "qty": 78.0,
          "net": 11891.88,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000253",
          "name": "Origens Filete Atún Con Tilapia 85 g",
          "orders": 69,
          "qty": 277.0,
          "net": 2089.13,
          "pos1_pct": 4,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000670",
          "name": "Leonardo Quality Selection Pescado",
          "orders": 68,
          "qty": 280.0,
          "net": 3298.4,
          "pos1_pct": 24,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000349",
          "name": "Rambala Congelado Pollo Y Pavo 800 g",
          "orders": 67,
          "qty": 283.0,
          "net": 4266.74,
          "pos1_pct": 67,
          "mascota": "Perro",
          "subcat": "Alimento BARF",
          "cat": "Alimentos"
        },
        {
          "id": "AG000219",
          "name": "Fancy Feast Gravy Lovers A La Parrilla Sabor Fes",
          "orders": 67,
          "qty": 550.0,
          "net": 3216.06,
          "pos1_pct": 39,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "PG000058",
          "name": "Cremi Creamy Treats Receta De Salmon Y Atun 60 G",
          "orders": 65,
          "qty": 142.0,
          "net": 1191.38,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "JULAG000573",
          "name": "True Origins Pure Cat Kitten Chicken Poultry 2 K",
          "orders": 65,
          "qty": 118.0,
          "net": 7989.93,
          "pos1_pct": 68,
          "mascota": "Gato",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "AP000034",
          "name": "Canbo Adulto Cordero Razas Med/Gran Alimento Sec",
          "orders": 64,
          "qty": 74.0,
          "net": 3568.28,
          "pos1_pct": 73,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PG000056",
          "name": "Cremi Creamy Treats Receta De Pollo 60 Gr",
          "orders": 63,
          "qty": 131.0,
          "net": 1099.09,
          "pos1_pct": 0,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AGOAP001254",
          "name": "True Origins Wild Dog Pacific Adult 12 Kg",
          "orders": 62,
          "qty": 76.0,
          "net": 20603.62,
          "pos1_pct": 98,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "HC000803",
          "name": "Tkpet Arena aglomerante sin aroma",
          "orders": 61,
          "qty": 150.0,
          "net": 11427.99,
          "pos1_pct": 66,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP001366",
          "name": "Pro plan Piel Sensible Adulto Cordero Todas las ",
          "orders": 61,
          "qty": 63.0,
          "net": 19215.0,
          "pos1_pct": 95,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000756",
          "name": "Proteggo m 200 mg para Perro 10 20Kg (1tab x caj",
          "orders": 61,
          "qty": 77.0,
          "net": 4887.32,
          "pos1_pct": 66,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000492",
          "name": "Catxtreme Adulto Esterilizado Pollo 2.5 Kg",
          "orders": 61,
          "qty": 93.0,
          "net": 4957.52,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000043",
          "name": "Canbo Enlatado Óptima Digestión 330 g",
          "orders": 60,
          "qty": 356.0,
          "net": 3891.78,
          "pos1_pct": 50,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000252",
          "name": "Origens Filete Atún Con Piña 85 g",
          "orders": 59,
          "qty": 194.0,
          "net": 1463.11,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000674",
          "name": "Leonardo Quality Selection Ave",
          "orders": 59,
          "qty": 271.0,
          "net": 3192.37,
          "pos1_pct": 47,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000572",
          "name": "True Origins Pure Cat Adult Sterilized Salmon Gr",
          "orders": 59,
          "qty": 69.0,
          "net": 13443.27,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000333",
          "name": "Origens Filete De Atún Con Manzana 85 g",
          "orders": 58,
          "qty": 136.0,
          "net": 1025.65,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000331",
          "name": "Origens Filete De Atún Con Durazno 85 g",
          "orders": 57,
          "qty": 170.0,
          "net": 1282.08,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "PG000057",
          "name": "Cremi Creamy Treats Receta De Atun 60 Gr",
          "orders": 56,
          "qty": 115.0,
          "net": 964.85,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "JULAP001188",
          "name": "True Origins Pure Dog Puppy Chicken 12 Kg",
          "orders": 56,
          "qty": 62.0,
          "net": 14181.26,
          "pos1_pct": 80,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "HC000898",
          "name": "Nice Care Carbon Pads",
          "orders": 56,
          "qty": 103.0,
          "net": 5228.59,
          "pos1_pct": 70,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP001473",
          "name": "Dogxtreme Adulto Pavo Con Arvejas 400Gr",
          "orders": 56,
          "qty": 164.0,
          "net": 1792.79,
          "pos1_pct": 27,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000529",
          "name": "Nath Cat Adult Sterilized Alimento Seco Gato",
          "orders": 55,
          "qty": 83.0,
          "net": 5479.38,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000757",
          "name": "Proteggo m 400 mg para Perro 20 40Kg (1tab x caj",
          "orders": 55,
          "qty": 67.0,
          "net": 5388.23,
          "pos1_pct": 65,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP001472",
          "name": "Dogxtreme Adulto Pescado Con Calabaza 400Gr",
          "orders": 54,
          "qty": 108.0,
          "net": 1180.58,
          "pos1_pct": 9,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000795",
          "name": "Dogxtreme Adulto Pollo Alimento Seco Perro",
          "orders": 54,
          "qty": 65.0,
          "net": 9358.81,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000669",
          "name": "Leonardo Quality Selection Kitten",
          "orders": 54,
          "qty": 333.0,
          "net": 6462.47,
          "pos1_pct": 41,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000672",
          "name": "Leonardo Quality Selection Pato",
          "orders": 53,
          "qty": 234.0,
          "net": 2756.52,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000218",
          "name": "Fancy Feast Paté Clásico Con Bacalao, Lenguado, ",
          "orders": 53,
          "qty": 401.0,
          "net": 2684.63,
          "pos1_pct": 17,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000658",
          "name": "Catxtreme Kitten Chicken 170 Gr",
          "orders": 53,
          "qty": 138.0,
          "net": 1157.82,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000350",
          "name": "Rambala Congelado Res Y Pavo 800 g",
          "orders": 52,
          "qty": 164.0,
          "net": 2720.82,
          "pos1_pct": 40,
          "mascota": "Perro",
          "subcat": "Alimento BARF",
          "cat": "Alimentos"
        },
        {
          "id": "HC000935",
          "name": "Tkpet Arena Aglomerante Aroma Lavanda",
          "orders": 52,
          "qty": 88.0,
          "net": 3933.36,
          "pos1_pct": 38,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "AG000539",
          "name": "Applaws Filete De Atun Con Cangrejo X 70 Gr",
          "orders": 52,
          "qty": 262.0,
          "net": 1953.99,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP001298",
          "name": "True Origins Pure Dog Lamb Peas 185 Gr",
          "orders": 51,
          "qty": 139.0,
          "net": 1519.49,
          "pos1_pct": 20,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000534",
          "name": "Barker Carne De Res (1kg) 20 Hamburguesas",
          "orders": 50,
          "qty": 135.0,
          "net": 2391.06,
          "pos1_pct": 50,
          "mascota": "Perro",
          "subcat": "Alimento BARF",
          "cat": "Alimentos"
        },
        {
          "id": "AG000379",
          "name": "Gran Plus Menu Gato Adulto Carne Y Arroz",
          "orders": 50,
          "qty": 53.0,
          "net": 9517.71,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000332",
          "name": "Origens Filete De Atún Con Melón 85 g",
          "orders": 50,
          "qty": 127.0,
          "net": 957.79,
          "pos1_pct": 2,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 14207,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 6923,
          "pct": 48.7
        },
        {
          "pos": 3,
          "n": 3247,
          "pct": 22.9
        },
        {
          "pos": 4,
          "n": 1749,
          "pct": 12.3
        },
        {
          "pos": 5,
          "n": 1052,
          "pct": 7.4
        },
        {
          "pos": 6,
          "n": 659,
          "pct": 4.6
        },
        {
          "pos": 7,
          "n": 426,
          "pct": 3.0
        }
      ],
      "promos_all": [
        {
          "id": "PBOMBA",
          "usos": 1960,
          "disc_net": 74426.61,
          "ppu": 37.97
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 1335,
          "disc_net": 18392.2,
          "ppu": 13.78
        },
        {
          "id": "REGAL-TRUE",
          "usos": 1241,
          "disc_net": 13564.13,
          "ppu": 10.93
        },
        {
          "id": "10M2PERMAN",
          "usos": 730,
          "disc_net": 11725.1,
          "ppu": 16.06
        },
        {
          "id": "REGALO-TCBAND",
          "usos": 685,
          "disc_net": 2267.35,
          "ppu": 3.31
        },
        {
          "id": "50-LIQUI-ALIM",
          "usos": 611,
          "disc_net": 62412.79,
          "ppu": 102.15
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 568,
          "disc_net": 53910.99,
          "ppu": 94.91
        },
        {
          "id": "70-LIQUI-ALIM",
          "usos": 455,
          "disc_net": 93351.62,
          "ppu": 205.17
        },
        {
          "id": "4x3HUM-MMPP",
          "usos": 444,
          "disc_net": 6430.67,
          "ppu": 14.48
        },
        {
          "id": "3x2AREN-TKPET",
          "usos": 383,
          "disc_net": 23332.45,
          "ppu": 60.92
        },
        {
          "id": "15DOGX",
          "usos": 310,
          "disc_net": 6161.54,
          "ppu": 19.88
        },
        {
          "id": "5M1PERMAN",
          "usos": 303,
          "disc_net": 3681.64,
          "ppu": 12.15
        },
        {
          "id": "40PROTEGG",
          "usos": 283,
          "disc_net": 14473.18,
          "ppu": 51.14
        },
        {
          "id": "30TRUEORIGINS",
          "usos": 282,
          "disc_net": 17105.81,
          "ppu": 60.66
        },
        {
          "id": "REG-CANB-GT",
          "usos": 275,
          "disc_net": 2307.25,
          "ppu": 8.39
        },
        {
          "id": "2DO30MMPP",
          "usos": 256,
          "disc_net": 8701.47,
          "ppu": 33.99
        },
        {
          "id": "50%PRODSELE-WEB",
          "usos": 224,
          "disc_net": 19751.3,
          "ppu": 88.18
        },
        {
          "id": "20%PRODSELE",
          "usos": 199,
          "disc_net": 2935.61,
          "ppu": 14.75
        },
        {
          "id": "8M4HUMSELEC-WEB",
          "usos": 168,
          "disc_net": 5499.15,
          "ppu": 32.73
        },
        {
          "id": "45%PRODSELE-WEB",
          "usos": 167,
          "disc_net": 9575.88,
          "ppu": 57.34
        },
        {
          "id": "20NATHVET",
          "usos": 153,
          "disc_net": 5480.63,
          "ppu": 35.82
        },
        {
          "id": "DOGX14440",
          "usos": 137,
          "disc_net": 3435.99,
          "ppu": 25.08
        },
        {
          "id": "2DA50PAÑALES",
          "usos": 136,
          "disc_net": 4001.68,
          "ppu": 29.42
        },
        {
          "id": "1690BARKER",
          "usos": 120,
          "disc_net": 1111.77,
          "ppu": 9.26
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 107,
          "disc_net": 3679.09,
          "ppu": 34.38
        },
        {
          "id": "40BRAVEC",
          "usos": 106,
          "disc_net": 8567.82,
          "ppu": 80.83
        },
        {
          "id": "4x3SNACKSELEC",
          "usos": 105,
          "disc_net": 1454.41,
          "ppu": 13.85
        },
        {
          "id": "5M1HUMESELEC-WEB",
          "usos": 105,
          "disc_net": 1695.33,
          "ppu": 16.15
        },
        {
          "id": "5PROPLN",
          "usos": 103,
          "disc_net": 1558.64,
          "ppu": 15.13
        },
        {
          "id": "2x1HUMSELEC",
          "usos": 99,
          "disc_net": 1661.46,
          "ppu": 16.78
        },
        {
          "id": "2x990BARKER",
          "usos": 98,
          "disc_net": 685.0,
          "ppu": 6.99
        },
        {
          "id": "35NEXGARD-SP",
          "usos": 97,
          "disc_net": 7860.27,
          "ppu": 81.03
        },
        {
          "id": "COLLAR-9-90",
          "usos": 96,
          "disc_net": 3042.35,
          "ppu": 31.69
        },
        {
          "id": "30%PRODSELE-WEB",
          "usos": 93,
          "disc_net": 638.29,
          "ppu": 6.86
        },
        {
          "id": "2x1TKPET",
          "usos": 89,
          "disc_net": 8346.81,
          "ppu": 93.78
        },
        {
          "id": "45PRODSELEC-WEB",
          "usos": 88,
          "disc_net": 3114.06,
          "ppu": 35.39
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 87,
          "disc_net": 762.43,
          "ppu": 8.76
        },
        {
          "id": "REG-BRAVLEO-TRUE",
          "usos": 77,
          "disc_net": 1298.22,
          "ppu": 16.86
        },
        {
          "id": "40PRODSELEC",
          "usos": 75,
          "disc_net": 4513.23,
          "ppu": 60.18
        },
        {
          "id": "3x2RIVOLTA",
          "usos": 72,
          "disc_net": 3416.37,
          "ppu": 47.45
        },
        {
          "id": "3x2HUMESELEC-WEB",
          "usos": 72,
          "disc_net": 1486.62,
          "ppu": 20.65
        },
        {
          "id": "35NEXGARD",
          "usos": 68,
          "disc_net": 3575.37,
          "ppu": 52.58
        },
        {
          "id": "15SIMPAR",
          "usos": 63,
          "disc_net": 1513.07,
          "ppu": 24.02
        },
        {
          "id": "20DOGZ-CATZ",
          "usos": 55,
          "disc_net": 1587.53,
          "ppu": 28.86
        },
        {
          "id": "10M2HUMSELEC",
          "usos": 54,
          "disc_net": 713.13,
          "ppu": 13.21
        },
        {
          "id": "20ARENEROS",
          "usos": 54,
          "disc_net": 956.48,
          "ppu": 17.71
        },
        {
          "id": "PBOMB-NCCAR60X90",
          "usos": 53,
          "disc_net": 1678.04,
          "ppu": 31.66
        },
        {
          "id": "3x2TOOTOY",
          "usos": 53,
          "disc_net": 788.63,
          "ppu": 14.88
        },
        {
          "id": "2x1PETLOVERS",
          "usos": 53,
          "disc_net": 965.69,
          "ppu": 18.22
        },
        {
          "id": "REG-BRAVBELC-TRUE",
          "usos": 45,
          "disc_net": 1026.0,
          "ppu": 22.8
        },
        {
          "id": "15%PRODSELE",
          "usos": 44,
          "disc_net": 945.53,
          "ppu": 21.49
        },
        {
          "id": "3x2TOALL",
          "usos": 44,
          "disc_net": 580.77,
          "ppu": 13.2
        },
        {
          "id": "6x3990TRUE",
          "usos": 44,
          "disc_net": 1652.55,
          "ppu": 37.56
        },
        {
          "id": "DCTO-FUNCIONARIO-MC",
          "usos": 43,
          "disc_net": 871.82,
          "ppu": 20.27
        },
        {
          "id": "DCTO-FUNCIONARIO-MP",
          "usos": 42,
          "disc_net": 2254.78,
          "ppu": 53.69
        },
        {
          "id": "10%PRODSELE-WEB",
          "usos": 42,
          "disc_net": 394.91,
          "ppu": 9.4
        },
        {
          "id": "40PRODSELEC-WEB",
          "usos": 42,
          "disc_net": 3409.95,
          "ppu": 81.19
        },
        {
          "id": "10ROYALSECO",
          "usos": 41,
          "disc_net": 737.77,
          "ppu": 17.99
        },
        {
          "id": "ARENA2990-ALIM",
          "usos": 40,
          "disc_net": 1322.04,
          "ppu": 33.05
        },
        {
          "id": "PBOMB-NC60X90",
          "usos": 39,
          "disc_net": 1080.45,
          "ppu": 27.7
        },
        {
          "id": "PE-list-liquidacion20%",
          "usos": 38,
          "disc_net": 395.26,
          "ppu": 10.4
        },
        {
          "id": "AREN-TKPET-10Y20",
          "usos": 38,
          "disc_net": 837.1,
          "ppu": 22.03
        },
        {
          "id": "3x2BOLSA-FECA",
          "usos": 37,
          "disc_net": 576.33,
          "ppu": 15.58
        },
        {
          "id": "2DO15PROPLN",
          "usos": 37,
          "disc_net": 490.7,
          "ppu": 13.26
        },
        {
          "id": "4x3PRODSELEC",
          "usos": 36,
          "disc_net": 478.99,
          "ppu": 13.31
        },
        {
          "id": "PBOMB-NC60X60",
          "usos": 36,
          "disc_net": 1033.95,
          "ppu": 28.72
        },
        {
          "id": "20HILLS",
          "usos": 33,
          "disc_net": 2013.81,
          "ppu": 61.02
        },
        {
          "id": "10PRODSELEC-WEB",
          "usos": 33,
          "disc_net": 523.22,
          "ppu": 15.86
        },
        {
          "id": "COLLAR-19-90",
          "usos": 32,
          "disc_net": 1055.13,
          "ppu": 32.97
        },
        {
          "id": "2x1JUGUE-PERM",
          "usos": 32,
          "disc_net": 191.03,
          "ppu": 5.97
        },
        {
          "id": "10APOQUEL",
          "usos": 31,
          "disc_net": 287.97,
          "ppu": 9.29
        },
        {
          "id": "10%PRODSELE",
          "usos": 30,
          "disc_net": 698.48,
          "ppu": 23.28
        },
        {
          "id": "5M1HUM-SELEC",
          "usos": 29,
          "disc_net": 328.64,
          "ppu": 11.33
        },
        {
          "id": "4x3ORIGENS",
          "usos": 27,
          "disc_net": 238.6,
          "ppu": 8.84
        },
        {
          "id": "REGAL-NICECARE",
          "usos": 27,
          "disc_net": 295.11,
          "ppu": 10.93
        },
        {
          "id": "2DO30GOTOO-COASTAL",
          "usos": 26,
          "disc_net": 199.4,
          "ppu": 7.67
        },
        {
          "id": "14M4LEONARDO",
          "usos": 24,
          "disc_net": 891.72,
          "ppu": 37.16
        },
        {
          "id": "15APOQUEL",
          "usos": 23,
          "disc_net": 295.12,
          "ppu": 12.83
        },
        {
          "id": "10PRODSELEC",
          "usos": 21,
          "disc_net": 233.34,
          "ppu": 11.11
        },
        {
          "id": "REGALO-DOGXHUM",
          "usos": 20,
          "disc_net": 218.6,
          "ppu": 10.93
        },
        {
          "id": "15BEXTER",
          "usos": 19,
          "disc_net": 105.09,
          "ppu": 5.53
        },
        {
          "id": "2DA30HILLS",
          "usos": 18,
          "disc_net": 887.6,
          "ppu": 49.31
        },
        {
          "id": "PR-NEXGARD1",
          "usos": 17,
          "disc_net": 1613.91,
          "ppu": 94.94
        },
        {
          "id": "30%PRODSELE",
          "usos": 15,
          "disc_net": 910.33,
          "ppu": 60.69
        },
        {
          "id": "35%PRODSELE",
          "usos": 15,
          "disc_net": 1016.09,
          "ppu": 67.74
        },
        {
          "id": "5REVOLUL",
          "usos": 14,
          "disc_net": 54.8,
          "ppu": 3.91
        },
        {
          "id": "15REVOLUL",
          "usos": 14,
          "disc_net": 133.12,
          "ppu": 9.51
        },
        {
          "id": "15ROYALSECO",
          "usos": 13,
          "disc_net": 355.27,
          "ppu": 27.33
        },
        {
          "id": "PE-list-liquidacion70%",
          "usos": 13,
          "disc_net": 1023.13,
          "ppu": 78.7
        },
        {
          "id": "40X16HUM-CATX",
          "usos": 11,
          "disc_net": 483.23,
          "ppu": 43.93
        },
        {
          "id": "3LATA-REGA",
          "usos": 11,
          "disc_net": 360.8,
          "ppu": 32.8
        },
        {
          "id": "20NEXGARD",
          "usos": 11,
          "disc_net": 160.66,
          "ppu": 14.61
        },
        {
          "id": "3X2RIVOLTA",
          "usos": 9,
          "disc_net": 422.9,
          "ppu": 46.99
        },
        {
          "id": "PE-list-liquidacion50%",
          "usos": 9,
          "disc_net": 62.66,
          "ppu": 6.96
        },
        {
          "id": "2DO25PROEXCEL",
          "usos": 7,
          "disc_net": 209.0,
          "ppu": 29.86
        },
        {
          "id": "10REVOLUL",
          "usos": 7,
          "disc_net": 70.4,
          "ppu": 10.06
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 6,
          "disc_net": 111.18,
          "ppu": 18.53
        },
        {
          "id": "15%PRODSELE-WEB",
          "usos": 6,
          "disc_net": 150.52,
          "ppu": 25.09
        },
        {
          "id": "2DO30PLATOS",
          "usos": 5,
          "disc_net": 50.72,
          "ppu": 10.14
        },
        {
          "id": "REG-BRAVCHIK-TRUE",
          "usos": 5,
          "disc_net": 105.5,
          "ppu": 21.1
        },
        {
          "id": "20%PRODSELE-WEB",
          "usos": 5,
          "disc_net": 48.22,
          "ppu": 9.64
        },
        {
          "id": "3x2JUGUE-SELEC",
          "usos": 4,
          "disc_net": 53.89,
          "ppu": 13.47
        },
        {
          "id": "70PRODSELEC",
          "usos": 4,
          "disc_net": 59.08,
          "ppu": 14.77
        },
        {
          "id": "PE-list-liquidacion30%",
          "usos": 4,
          "disc_net": 105.68,
          "ppu": 26.42
        },
        {
          "id": "3LATA-PR-REGHILLS",
          "usos": 4,
          "disc_net": 232.88,
          "ppu": 58.22
        },
        {
          "id": "LEEBY8990-DOGX",
          "usos": 4,
          "disc_net": 203.4,
          "ppu": 50.85
        },
        {
          "id": "4x3YOGY",
          "usos": 4,
          "disc_net": 23.4,
          "ppu": 5.85
        },
        {
          "id": "2LATA-PR-REGHILLS",
          "usos": 4,
          "disc_net": 155.24,
          "ppu": 38.81
        },
        {
          "id": "REG-BRAVKITT-TRUE",
          "usos": 4,
          "disc_net": 67.44,
          "ppu": 16.86
        },
        {
          "id": "2DO30PLATOS-SEL",
          "usos": 3,
          "disc_net": 26.62,
          "ppu": 8.87
        },
        {
          "id": "2X1JUGUET-PR",
          "usos": 3,
          "disc_net": 44.66,
          "ppu": 14.89
        },
        {
          "id": "3PELSOLID",
          "usos": 3,
          "disc_net": 19.83,
          "ppu": 6.61
        },
        {
          "id": "2LATA-GT-REGHILLS",
          "usos": 3,
          "disc_net": 121.53,
          "ppu": 40.51
        },
        {
          "id": "REG-BRAVSALMM-TRUE",
          "usos": 3,
          "disc_net": 68.4,
          "ppu": 22.8
        },
        {
          "id": "REG-BELCAPUPP-TRUE",
          "usos": 3,
          "disc_net": 68.4,
          "ppu": 22.8
        },
        {
          "id": "2PELSOLID",
          "usos": 2,
          "disc_net": 6.62,
          "ppu": 3.31
        },
        {
          "id": "REG-LEOKITT-TRUE",
          "usos": 2,
          "disc_net": 33.72,
          "ppu": 16.86
        },
        {
          "id": "REG-BRAVHERR-TRUE",
          "usos": 2,
          "disc_net": 42.2,
          "ppu": 21.1
        },
        {
          "id": "REG-BRAVSALM-TRUE",
          "usos": 2,
          "disc_net": 42.2,
          "ppu": 21.1
        },
        {
          "id": "COLLAR-14-90",
          "usos": 1,
          "disc_net": 38.14,
          "ppu": 38.14
        },
        {
          "id": "3LATA-GT-REGHILLS",
          "usos": 1,
          "disc_net": 60.76,
          "ppu": 60.76
        },
        {
          "id": "PR-NEXGARD2",
          "usos": 1,
          "disc_net": 54.07,
          "ppu": 54.07
        },
        {
          "id": "JUGUEGRANEL-RATON",
          "usos": 1,
          "disc_net": 4.66,
          "ppu": 4.66
        },
        {
          "id": "10IMPERIA",
          "usos": 1,
          "disc_net": 4.31,
          "ppu": 4.31
        },
        {
          "id": "3x2SNACKSELEC-WEB",
          "usos": 1,
          "disc_net": 13.47,
          "ppu": 13.47
        },
        {
          "id": "20ROYALSECO",
          "usos": 1,
          "disc_net": 102.09,
          "ppu": 102.09
        },
        {
          "id": "25%PRODSELE-WEB",
          "usos": 1,
          "disc_net": 30.9,
          "ppu": 30.9
        }
      ],
      "coupons_all": [
        {
          "code": "PRIMERA10",
          "usos": 765,
          "disc": 12206.04,
          "pct": 10.0
        },
        {
          "code": "SINIGV",
          "usos": 665,
          "disc": 49552.78,
          "pct": 18.0
        },
        {
          "code": "20DESCUENTO",
          "usos": 154,
          "disc": 14679.17,
          "pct": 19.8
        },
        {
          "code": "PET15",
          "usos": 90,
          "disc": 2329.14,
          "pct": 15.0
        },
        {
          "code": "20CUPON",
          "usos": 62,
          "disc": 5903.44,
          "pct": 19.8
        },
        {
          "code": "414791",
          "usos": 16,
          "disc": 3184.4,
          "pct": 40.0
        },
        {
          "code": "CPC15PE2",
          "usos": 13,
          "disc": 259.81,
          "pct": 15.0
        },
        {
          "code": "VUELVE15",
          "usos": 10,
          "disc": 150.0,
          "pct": 60.9
        },
        {
          "code": "447409",
          "usos": 5,
          "disc": 388.54,
          "pct": 20.0
        },
        {
          "code": "455170",
          "usos": 5,
          "disc": 590.68,
          "pct": 40.0
        },
        {
          "code": "491914",
          "usos": 5,
          "disc": 673.72,
          "pct": 40.0
        },
        {
          "code": "SPN6FDC",
          "usos": 5,
          "disc": 75.0,
          "pct": 16.3
        },
        {
          "code": "CSM8KB7NTO",
          "usos": 5,
          "disc": 750.0,
          "pct": 72.9
        },
        {
          "code": "491909",
          "usos": 4,
          "disc": 1034.44,
          "pct": 40.0
        },
        {
          "code": "447411",
          "usos": 3,
          "disc": 221.86,
          "pct": 20.0
        },
        {
          "code": "CSM54HJW3N",
          "usos": 3,
          "disc": 330.0,
          "pct": 60.6
        },
        {
          "code": "SP-TO5PYFXT",
          "usos": 1,
          "disc": 22.89,
          "pct": 15.0
        },
        {
          "code": "SP-MS5EQUAI",
          "usos": 1,
          "disc": 61.5,
          "pct": 25.0
        },
        {
          "code": "414075",
          "usos": 1,
          "disc": 79.2,
          "pct": 40.0
        },
        {
          "code": "SP-WOVXAV3C",
          "usos": 1,
          "disc": 48.58,
          "pct": 20.0
        },
        {
          "code": "CMRE1006LDXBF",
          "usos": 1,
          "disc": 100.0,
          "pct": 29.9
        },
        {
          "code": "CMRE702OAU3S",
          "usos": 1,
          "disc": 70.0,
          "pct": 28.8
        },
        {
          "code": "SP-UUIW7TBG",
          "usos": 1,
          "disc": 37.08,
          "pct": 25.0
        },
        {
          "code": "CSC-82LM-P9XT",
          "usos": 1,
          "disc": 16.86,
          "pct": 14.7
        },
        {
          "code": "CMRE100HYLLK2",
          "usos": 1,
          "disc": 100.0,
          "pct": 75.0
        },
        {
          "code": "CSC-45QR-M2NB",
          "usos": 1,
          "disc": 6.0,
          "pct": 7.7
        },
        {
          "code": "CMRE10079H8ZF",
          "usos": 1,
          "disc": 100.0,
          "pct": 78.3
        },
        {
          "code": "SP-WIS279DX",
          "usos": 1,
          "disc": 85.6,
          "pct": 20.0
        },
        {
          "code": "SP-5XXEYYUV",
          "usos": 1,
          "disc": 15.38,
          "pct": 20.0
        },
        {
          "code": "SP-NMUNHV9C",
          "usos": 1,
          "disc": 62.49,
          "pct": 15.0
        },
        {
          "code": "CMRE100FMUX3X",
          "usos": 1,
          "disc": 100.0,
          "pct": 61.4
        },
        {
          "code": "CMRE3067MANA",
          "usos": 1,
          "disc": 30.0,
          "pct": 52.0
        },
        {
          "code": "CMRE100WNHT13",
          "usos": 1,
          "disc": 100.0,
          "pct": 78.8
        },
        {
          "code": "CMRE100K2NTY8",
          "usos": 1,
          "disc": 100.0,
          "pct": 70.0
        },
        {
          "code": "JP4CPAJUL",
          "usos": 1,
          "disc": 15.0,
          "pct": 10.1
        },
        {
          "code": "CMRE5093598G",
          "usos": 1,
          "disc": 50.0,
          "pct": 27.8
        },
        {
          "code": "CMRE50KGSGD2",
          "usos": 1,
          "disc": 50.0,
          "pct": 56.2
        },
        {
          "code": "CMRE50BZL6R7",
          "usos": 1,
          "disc": 50.0,
          "pct": 55.7
        },
        {
          "code": "438168",
          "usos": 1,
          "disc": 127.96,
          "pct": 40.0
        },
        {
          "code": "CSC-AQB1-AOQ1",
          "usos": 1,
          "disc": 219.7,
          "pct": 52.4
        },
        {
          "code": "SP-CUFOPG4Y",
          "usos": 1,
          "disc": 184.85,
          "pct": 25.0
        },
        {
          "code": "SP-Q362TWTS",
          "usos": 1,
          "disc": 37.56,
          "pct": 20.0
        },
        {
          "code": "CMRE100K4218B",
          "usos": 1,
          "disc": 100.0,
          "pct": 76.4
        },
        {
          "code": "SP-6FOE3UUT",
          "usos": 1,
          "disc": 93.94,
          "pct": 20.0
        },
        {
          "code": "ECST21",
          "usos": 1,
          "disc": 4.49,
          "pct": 10.0
        },
        {
          "code": "CMRE302RA288",
          "usos": 1,
          "disc": 30.0,
          "pct": 45.8
        },
        {
          "code": "CMRE100K2CYNN",
          "usos": 1,
          "disc": 100.0,
          "pct": 77.0
        },
        {
          "code": "SP-WM2CEONQ",
          "usos": 1,
          "disc": 20.56,
          "pct": 20.0
        },
        {
          "code": "CMRE100IUTWB6",
          "usos": 1,
          "disc": 100.0,
          "pct": 47.2
        },
        {
          "code": "SP-D692X3SW",
          "usos": 1,
          "disc": 178.78,
          "pct": 25.0
        },
        {
          "code": "SP-Y3MYYAOB",
          "usos": 1,
          "disc": 60.56,
          "pct": 20.0
        },
        {
          "code": "SP-2EYBS7ET",
          "usos": 1,
          "disc": 96.43,
          "pct": 25.0
        },
        {
          "code": "CMRE50XIW3Y0",
          "usos": 1,
          "disc": 50.0,
          "pct": 65.9
        },
        {
          "code": "SP-YLCO5GU3",
          "usos": 1,
          "disc": 23.68,
          "pct": 10.0
        },
        {
          "code": "CMRE1008K2XPC",
          "usos": 1,
          "disc": 100.0,
          "pct": 62.2
        },
        {
          "code": "404293",
          "usos": 1,
          "disc": 205.2,
          "pct": 40.0
        },
        {
          "code": "SP-DMVPD7Q4",
          "usos": 1,
          "disc": 37.4,
          "pct": 20.0
        },
        {
          "code": "SP-ZXQLK5MC",
          "usos": 1,
          "disc": 83.8,
          "pct": 25.0
        },
        {
          "code": "CSM8WVNHX6",
          "usos": 1,
          "disc": 150.0,
          "pct": 76.6
        },
        {
          "code": "SP-DL2YZ2HQ",
          "usos": 1,
          "disc": 82.28,
          "pct": 25.0
        },
        {
          "code": "SP-KDKMWPHN",
          "usos": 1,
          "disc": 148.8,
          "pct": 25.0
        },
        {
          "code": "CMRE502FUB92",
          "usos": 1,
          "disc": 50.0,
          "pct": 41.7
        },
        {
          "code": "447410",
          "usos": 1,
          "disc": 61.92,
          "pct": 20.0
        },
        {
          "code": "CSM5VL1614",
          "usos": 1,
          "disc": 110.0,
          "pct": 48.5
        },
        {
          "code": "CMRE50AA6756",
          "usos": 1,
          "disc": 50.0,
          "pct": 50.5
        },
        {
          "code": "CSM52VBFHJ",
          "usos": 1,
          "disc": 110.0,
          "pct": 41.8
        },
        {
          "code": "CSM80D7WZK",
          "usos": 1,
          "disc": 150.0,
          "pct": 97.7
        },
        {
          "code": "CMRE30I8253Z",
          "usos": 1,
          "disc": 30.0,
          "pct": 28.8
        },
        {
          "code": "SP-XKZ6UOFC",
          "usos": 1,
          "disc": 84.95,
          "pct": 25.0
        },
        {
          "code": "CMRE50YNQ9KH",
          "usos": 1,
          "disc": 50.0,
          "pct": 62.6
        },
        {
          "code": "SP-TBERDFAL",
          "usos": 1,
          "disc": 33.7,
          "pct": 20.0
        },
        {
          "code": "CSM8T19D85",
          "usos": 1,
          "disc": 150.0,
          "pct": 57.1
        },
        {
          "code": "SP-2RUBXI5Z",
          "usos": 1,
          "disc": 21.75,
          "pct": 10.0
        },
        {
          "code": "WEB-TG7M-LR2W",
          "usos": 1,
          "disc": 18.44,
          "pct": 7.0
        },
        {
          "code": "WEB-YN4N-EP24",
          "usos": 1,
          "disc": 12.78,
          "pct": 10.0
        },
        {
          "code": "WEB-8EJ5-1ZYH",
          "usos": 1,
          "disc": 3.99,
          "pct": 10.0
        },
        {
          "code": "CSM52H0S5A",
          "usos": 1,
          "disc": 110.0,
          "pct": 52.5
        },
        {
          "code": "WEB-0LUQ-3T2E",
          "usos": 1,
          "disc": 8.82,
          "pct": 8.7
        },
        {
          "code": "CMRE307T1BP5",
          "usos": 1,
          "disc": 30.0,
          "pct": 44.5
        },
        {
          "code": "SP-CPF37ZBL",
          "usos": 1,
          "disc": 27.54,
          "pct": 20.0
        },
        {
          "code": "SP-GGBPEPCM",
          "usos": 1,
          "disc": 27.49,
          "pct": 10.0
        },
        {
          "code": "CMRE50N0TETO",
          "usos": 1,
          "disc": 50.0,
          "pct": 13.4
        },
        {
          "code": "WEB-F6YF-2DFR",
          "usos": 1,
          "disc": 32.76,
          "pct": 7.2
        },
        {
          "code": "WEB-7I0D-4J43",
          "usos": 1,
          "disc": 17.89,
          "pct": 7.3
        },
        {
          "code": "CMRE100KB0J15",
          "usos": 1,
          "disc": 100.0,
          "pct": 76.0
        },
        {
          "code": "CMRE50N7V1OJ",
          "usos": 1,
          "disc": 50.0,
          "pct": 45.1
        },
        {
          "code": "CSM83BQWA1",
          "usos": 1,
          "disc": 150.0,
          "pct": 29.9
        },
        {
          "code": "CSM5Z1RTTH",
          "usos": 1,
          "disc": 110.0,
          "pct": 37.9
        },
        {
          "code": "455103",
          "usos": 1,
          "disc": 100.44,
          "pct": 40.0
        },
        {
          "code": "SP-USIQ7L5T",
          "usos": 1,
          "disc": 54.98,
          "pct": 20.0
        },
        {
          "code": "WEB-QLFU-JBW3",
          "usos": 1,
          "disc": 2.8,
          "pct": 10.0
        },
        {
          "code": "CSM8HK5QY8",
          "usos": 1,
          "disc": 150.0,
          "pct": 46.9
        },
        {
          "code": "WEB-2ITT-DFGX",
          "usos": 1,
          "disc": 10.79,
          "pct": 6.5
        },
        {
          "code": "WEB-ZW9G-BQ82",
          "usos": 1,
          "disc": 17.73,
          "pct": 8.9
        },
        {
          "code": "CSM5J7S9TD",
          "usos": 1,
          "disc": 110.0,
          "pct": 76.0
        },
        {
          "code": "CSM54ZA1N2",
          "usos": 1,
          "disc": 110.0,
          "pct": 49.4
        },
        {
          "code": "CSM58RR1BV",
          "usos": 1,
          "disc": 110.0,
          "pct": 75.1
        },
        {
          "code": "CSM5EKMK5C",
          "usos": 1,
          "disc": 110.0,
          "pct": 33.8
        },
        {
          "code": "WEB-ODEM-NDJR",
          "usos": 1,
          "disc": 15.59,
          "pct": 10.0
        },
        {
          "code": "WEB-CDSD-826E",
          "usos": 1,
          "disc": 10.62,
          "pct": 7.1
        },
        {
          "code": "CMRE507U7JSJ",
          "usos": 1,
          "disc": 50.0,
          "pct": 33.4
        },
        {
          "code": "WEB-BV7K-TEYO",
          "usos": 1,
          "disc": 9.14,
          "pct": 8.2
        },
        {
          "code": "WEB-DU2R-UGOY",
          "usos": 1,
          "disc": 1.98,
          "pct": 6.3
        },
        {
          "code": "WEB-DTYQ-LCXP",
          "usos": 1,
          "disc": 10.17,
          "pct": 8.4
        },
        {
          "code": "WEB-3VNJ-3LAX",
          "usos": 1,
          "disc": 41.03,
          "pct": 6.6
        },
        {
          "code": "CMRE506EEJFO",
          "usos": 1,
          "disc": 50.0,
          "pct": 63.0
        },
        {
          "code": "SP-NXCEHZZ9",
          "usos": 1,
          "disc": 32.73,
          "pct": 25.0
        }
      ],
      "shipping_detail": [
        {
          "method": "Lima",
          "n": 7055,
          "pct": 49.7,
          "net": 1560016.37,
          "ticket": 221.12,
          "avg_items": 2.2
        },
        {
          "method": "Click & Collect",
          "n": 3982,
          "pct": 28.0,
          "net": 619948.31,
          "ticket": 155.69,
          "avg_items": 1.7
        },
        {
          "method": "Express",
          "n": 2362,
          "pct": 16.6,
          "net": 396858.23,
          "ticket": 168.02,
          "avg_items": 2.2
        },
        {
          "method": "Programado",
          "n": 571,
          "pct": 4.0,
          "net": 121478.34,
          "ticket": 212.75,
          "avg_items": 2.5
        },
        {
          "method": "Arequipa",
          "n": 85,
          "pct": 0.6,
          "net": 24527.85,
          "ticket": 288.56,
          "avg_items": 1.2
        },
        {
          "method": "Lima-La-Libertad",
          "n": 61,
          "pct": 0.4,
          "net": 18583.11,
          "ticket": 304.64,
          "avg_items": 1.3
        },
        {
          "method": "Piura",
          "n": 43,
          "pct": 0.3,
          "net": 9702.73,
          "ticket": 225.64,
          "avg_items": 1.2
        },
        {
          "method": "Lambayeque",
          "n": 36,
          "pct": 0.3,
          "net": 9093.31,
          "ticket": 252.59,
          "avg_items": 1.4
        }
      ],
      "daily": [
        {
          "date": "2026-05-01",
          "orders": 315,
          "net": 46720.45,
          "discount": 0.0,
          "ticket": 148.32
        },
        {
          "date": "2026-05-02",
          "orders": 394,
          "net": 57911.17,
          "discount": 0.0,
          "ticket": 146.98
        },
        {
          "date": "2026-05-03",
          "orders": 394,
          "net": 56355.91,
          "discount": 0.0,
          "ticket": 143.04
        },
        {
          "date": "2026-05-04",
          "orders": 544,
          "net": 78326.76,
          "discount": 0.0,
          "ticket": 143.98
        },
        {
          "date": "2026-05-05",
          "orders": 488,
          "net": 69278.96,
          "discount": 0.0,
          "ticket": 141.97
        },
        {
          "date": "2026-05-06",
          "orders": 505,
          "net": 66137.22,
          "discount": 0.0,
          "ticket": 130.96
        },
        {
          "date": "2026-05-07",
          "orders": 485,
          "net": 66672.29,
          "discount": 0.0,
          "ticket": 137.47
        },
        {
          "date": "2026-05-08",
          "orders": 490,
          "net": 67603.27,
          "discount": 0.0,
          "ticket": 137.97
        },
        {
          "date": "2026-05-09",
          "orders": 428,
          "net": 60446.03,
          "discount": 0.0,
          "ticket": 141.23
        },
        {
          "date": "2026-05-10",
          "orders": 324,
          "net": 48160.84,
          "discount": 0.0,
          "ticket": 148.64
        },
        {
          "date": "2026-05-11",
          "orders": 542,
          "net": 88270.71,
          "discount": 0.0,
          "ticket": 162.86
        },
        {
          "date": "2026-05-12",
          "orders": 504,
          "net": 81715.29,
          "discount": 0.0,
          "ticket": 162.13
        },
        {
          "date": "2026-05-13",
          "orders": 470,
          "net": 77748.09,
          "discount": 0.0,
          "ticket": 165.42
        },
        {
          "date": "2026-05-14",
          "orders": 495,
          "net": 80198.81,
          "discount": 0.0,
          "ticket": 162.02
        },
        {
          "date": "2026-05-15",
          "orders": 480,
          "net": 78281.69,
          "discount": 0.0,
          "ticket": 163.09
        },
        {
          "date": "2026-05-16",
          "orders": 450,
          "net": 73335.65,
          "discount": 0.0,
          "ticket": 162.97
        },
        {
          "date": "2026-05-17",
          "orders": 370,
          "net": 60819.8,
          "discount": 0.0,
          "ticket": 164.38
        },
        {
          "date": "2026-05-18",
          "orders": 489,
          "net": 76969.66,
          "discount": 0.0,
          "ticket": 157.4
        },
        {
          "date": "2026-05-19",
          "orders": 487,
          "net": 77841.8,
          "discount": 0.0,
          "ticket": 159.84
        },
        {
          "date": "2026-05-20",
          "orders": 472,
          "net": 75869.34,
          "discount": 0.0,
          "ticket": 160.74
        },
        {
          "date": "2026-05-21",
          "orders": 451,
          "net": 72045.28,
          "discount": 0.0,
          "ticket": 159.75
        },
        {
          "date": "2026-05-22",
          "orders": 448,
          "net": 65506.65,
          "discount": 0.0,
          "ticket": 146.22
        },
        {
          "date": "2026-05-23",
          "orders": 349,
          "net": 45339.27,
          "discount": 0.0,
          "ticket": 129.91
        },
        {
          "date": "2026-05-24",
          "orders": 319,
          "net": 46779.71,
          "discount": 0.0,
          "ticket": 146.64
        },
        {
          "date": "2026-05-25",
          "orders": 461,
          "net": 70280.11,
          "discount": 0.0,
          "ticket": 152.45
        },
        {
          "date": "2026-05-26",
          "orders": 528,
          "net": 78595.97,
          "discount": 0.0,
          "ticket": 148.86
        },
        {
          "date": "2026-05-27",
          "orders": 480,
          "net": 69950.61,
          "discount": 0.0,
          "ticket": 145.73
        },
        {
          "date": "2026-05-28",
          "orders": 505,
          "net": 74664.31,
          "discount": 0.0,
          "ticket": 147.85
        },
        {
          "date": "2026-05-29",
          "orders": 542,
          "net": 81709.57,
          "discount": 0.0,
          "ticket": 150.76
        },
        {
          "date": "2026-05-30",
          "orders": 436,
          "net": 62226.34,
          "discount": 0.0,
          "ticket": 142.72
        },
        {
          "date": "2026-05-31",
          "orders": 414,
          "net": 60302.17,
          "discount": 0.0,
          "ticket": 145.66
        },
        {
          "date": "2026-06-01",
          "orders": 148,
          "net": 23212.01,
          "discount": 0.0,
          "ticket": 156.84
        }
      ],
      "meta": {
        "store": "SuperPet Perú",
        "currency": "PEN",
        "symbol": "S/",
        "periodo": "01/05/2026 – 01/06/2026"
      }
    },
    "b": {
      "periodo": "01/05/2025 – 01/06/2025",
      "fecha_inicio": "2025-05-01",
      "fecha_fin": "2025-06-01",
      "kpis": {
        "orders": 14565,
        "net": 2402182.98,
        "bruta": 3389167.21,
        "discount": 596506.5,
        "discount_pct": 17.6,
        "ticket": 164.93,
        "avg_items": 2.0
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 9364,
          "pct": 64.3,
          "net": 1782622.42
        },
        {
          "m": "Gato",
          "n": 5909,
          "pct": 40.6,
          "net": 1052764.27
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 20634,
          "net": 2111688.27
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 3879,
          "net": 415020.84
        },
        {
          "cat": "Salud e higiene",
          "orders": 2471,
          "net": 231563.13
        },
        {
          "cat": "Accesorios",
          "orders": 1466,
          "net": 104366.34
        },
        {
          "cat": "Juguetes",
          "orders": 314,
          "net": 8484.9
        },
        {
          "cat": "Pet lovers",
          "orders": 52,
          "net": 907.87
        },
        {
          "cat": "Pet Lovers",
          "orders": 6,
          "net": 24.9
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 8369,
          "pct": 57.5,
          "pos_avg": 1.4,
          "anc_pct": 90.0,
          "add_pct": 20.1,
          "net": 1613743.3
        },
        {
          "sc": "Alimento húmedo",
          "n": 2668,
          "pct": 18.3,
          "pos_avg": 3.5,
          "anc_pct": 37.4,
          "add_pct": 82.4,
          "net": 198938.9
        },
        {
          "sc": "Snacks",
          "n": 1952,
          "pct": 13.4,
          "pos_avg": 3.7,
          "anc_pct": 28.4,
          "add_pct": 86.1,
          "net": 102276.47
        },
        {
          "sc": "Arena para gato",
          "n": 1704,
          "pct": 11.7,
          "pos_avg": 1.7,
          "anc_pct": 65.1,
          "add_pct": 37.1,
          "net": 189198.6
        },
        {
          "sc": "Antiparasitarios",
          "n": 1597,
          "pct": 11.0,
          "pos_avg": 1.5,
          "anc_pct": 80.6,
          "add_pct": 29.7,
          "net": 315064.31
        },
        {
          "sc": "Alimento medicado",
          "n": 917,
          "pct": 6.3,
          "pos_avg": 1.4,
          "anc_pct": 84.4,
          "add_pct": 26.6,
          "net": 168860.65
        },
        {
          "sc": "Pañales y control de orina",
          "n": 436,
          "pct": 3.0,
          "pos_avg": 1.6,
          "anc_pct": 69.7,
          "add_pct": 33.6,
          "net": 44819.58
        },
        {
          "sc": "Fármacos",
          "n": 425,
          "pct": 2.9,
          "pos_avg": 1.7,
          "anc_pct": 76.0,
          "add_pct": 35.7,
          "net": 24961.21
        },
        {
          "sc": "Alimento BARF",
          "n": 408,
          "pct": 2.8,
          "pos_avg": 2.4,
          "anc_pct": 62.5,
          "add_pct": 58.4,
          "net": 31654.09
        },
        {
          "sc": "Juguetes",
          "n": 303,
          "pct": 2.1,
          "pos_avg": 3.6,
          "anc_pct": 30.4,
          "add_pct": 81.9,
          "net": 12414.15
        },
        {
          "sc": "Areneros y accesorios",
          "n": 263,
          "pct": 1.8,
          "pos_avg": 2.8,
          "anc_pct": 22.8,
          "add_pct": 79.7,
          "net": 9623.7
        },
        {
          "sc": "Suplementos y vitaminas",
          "n": 261,
          "pct": 1.8,
          "pos_avg": 1.8,
          "anc_pct": 67.4,
          "add_pct": 38.7,
          "net": 19502.72
        },
        {
          "sc": "Platos y bebederos",
          "n": 207,
          "pct": 1.4,
          "pos_avg": 2.3,
          "anc_pct": 59.9,
          "add_pct": 51.8,
          "net": 13727.93
        },
        {
          "sc": "Camas y mantas",
          "n": 188,
          "pct": 1.3,
          "pos_avg": 1.8,
          "anc_pct": 67.6,
          "add_pct": 42.8,
          "net": 23486.48
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Alimento húmedo",
        "Snacks",
        "Arena para gato",
        "Antiparasitarios",
        "Alimento medicado"
      ],
      "cooc_matrix": [
        [
          null,
          18.0,
          12.7,
          7.5,
          3.3,
          1.6
        ],
        [
          56.5,
          null,
          19.4,
          17.4,
          3.5,
          5.3
        ],
        [
          54.3,
          26.5,
          null,
          12.9,
          7.0,
          3.9
        ],
        [
          37.0,
          27.2,
          14.7,
          null,
          2.8,
          4.5
        ],
        [
          17.1,
          5.8,
          8.5,
          3.0,
          null,
          1.6
        ],
        [
          14.2,
          15.4,
          8.3,
          8.3,
          2.7,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 7529,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 1125,
              "pct": 14.9
            },
            {
              "sc": "Snacks",
              "n": 797,
              "pct": 10.6
            },
            {
              "sc": "Arena para gato",
              "n": 364,
              "pct": 4.8
            },
            {
              "sc": "Antiparasitarios",
              "n": 167,
              "pct": 2.2
            },
            {
              "sc": "Juguetes",
              "n": 87,
              "pct": 1.2
            },
            {
              "sc": "Alimento BARF",
              "n": 74,
              "pct": 1.0
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 1287,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 85,
              "pct": 6.6
            },
            {
              "sc": "Snacks",
              "n": 62,
              "pct": 4.8
            },
            {
              "sc": "Alimento húmedo",
              "n": 35,
              "pct": 2.7
            },
            {
              "sc": "Alimento BARF",
              "n": 18,
              "pct": 1.4
            },
            {
              "sc": "Arena para gato",
              "n": 13,
              "pct": 1.0
            },
            {
              "sc": "Porta bolsas y bolsas recogefecas",
              "n": 12,
              "pct": 0.9
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 1110,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 214,
              "pct": 19.3
            },
            {
              "sc": "Alimento húmedo",
              "n": 197,
              "pct": 17.7
            },
            {
              "sc": "Areneros y accesorios",
              "n": 138,
              "pct": 12.4
            },
            {
              "sc": "Snacks",
              "n": 110,
              "pct": 9.9
            },
            {
              "sc": "Alimento medicado",
              "n": 23,
              "pct": 2.1
            },
            {
              "sc": "Antiparasitarios",
              "n": 22,
              "pct": 2.0
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 998,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 190,
              "pct": 19.0
            },
            {
              "sc": "Snacks",
              "n": 171,
              "pct": 17.1
            },
            {
              "sc": "Arena para gato",
              "n": 86,
              "pct": 8.6
            },
            {
              "sc": "Alimento medicado",
              "n": 27,
              "pct": 2.7
            },
            {
              "sc": "Juguetes",
              "n": 20,
              "pct": 2.0
            },
            {
              "sc": "Antiparasitarios",
              "n": 15,
              "pct": 1.5
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 774,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 90,
              "pct": 11.6
            },
            {
              "sc": "Alimento seco",
              "n": 65,
              "pct": 8.4
            },
            {
              "sc": "Snacks",
              "n": 51,
              "pct": 6.6
            },
            {
              "sc": "Arena para gato",
              "n": 42,
              "pct": 5.4
            },
            {
              "sc": "Antiparasitarios",
              "n": 18,
              "pct": 2.3
            },
            {
              "sc": "Fármacos",
              "n": 10,
              "pct": 1.3
            }
          ]
        },
        {
          "anchor": "Snacks",
          "n": 554,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 113,
              "pct": 20.4
            },
            {
              "sc": "Alimento húmedo",
              "n": 97,
              "pct": 17.5
            },
            {
              "sc": "Arena para gato",
              "n": 28,
              "pct": 5.1
            },
            {
              "sc": "Antiparasitarios",
              "n": 24,
              "pct": 4.3
            },
            {
              "sc": "Juguetes",
              "n": 21,
              "pct": 3.8
            },
            {
              "sc": "Pañales y control de orina",
              "n": 14,
              "pct": 2.5
            }
          ]
        }
      ],
      "hours": [
        204,
        77,
        49,
        32,
        26,
        42,
        148,
        310,
        519,
        857,
        1005,
        1145,
        1121,
        971,
        983,
        933,
        918,
        903,
        855,
        896,
        817,
        719,
        580,
        455
      ],
      "shipping": [
        {
          "method": "Lima",
          "n": 7241,
          "pct": 49.7
        },
        {
          "method": "Express",
          "n": 3613,
          "pct": 24.8
        },
        {
          "method": "Click & Collect",
          "n": 2988,
          "pct": 20.5
        },
        {
          "method": "Programado",
          "n": 638,
          "pct": 4.4
        },
        {
          "method": "Arequipa",
          "n": 29,
          "pct": 0.2
        },
        {
          "method": "Lima-La-Libertad",
          "n": 22,
          "pct": 0.2
        },
        {
          "method": "Lambayeque",
          "n": 18,
          "pct": 0.1
        },
        {
          "method": "Piura",
          "n": 12,
          "pct": 0.1
        }
      ],
      "promos": [
        {
          "id": "PBOMBA",
          "usos": 2872,
          "disc_net": 65867.94
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 1292,
          "disc_net": 17493.36
        },
        {
          "id": "REGALO-CATX-SNACK",
          "usos": 935,
          "disc_net": 7844.65
        },
        {
          "id": "10M2PERMAN",
          "usos": 544,
          "disc_net": 7612.77
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 429,
          "disc_net": 45684.13
        },
        {
          "id": "3x2HUM-MMPP",
          "usos": 403,
          "disc_net": 5929.68
        },
        {
          "id": "40PRODSELEC",
          "usos": 329,
          "disc_net": 18585.56
        },
        {
          "id": "5M1PERMAN",
          "usos": 316,
          "disc_net": 3417.49
        },
        {
          "id": "3x2ARENA",
          "usos": 313,
          "disc_net": 19968.12
        },
        {
          "id": "15PRODSELEC",
          "usos": 290,
          "disc_net": 3039.16
        }
      ],
      "coupons": [
        {
          "code": "PRIMERA10",
          "usos": 962,
          "disc": 18286.86,
          "pct": 10.0
        },
        {
          "code": "30DESCUENTO",
          "usos": 327,
          "disc": 73820.89,
          "pct": 29.8
        },
        {
          "code": "PET15",
          "usos": 252,
          "disc": 7819.51,
          "pct": 15.0
        },
        {
          "code": "CPC15PE2",
          "usos": 169,
          "disc": 5090.55,
          "pct": 15.0
        },
        {
          "code": "25DESCUENTO",
          "usos": 120,
          "disc": 18750.86,
          "pct": 24.9
        },
        {
          "code": "VUELVE15",
          "usos": 11,
          "disc": 165.0,
          "pct": 40.7
        },
        {
          "code": "JP4CPAJUL",
          "usos": 8,
          "disc": 120.0,
          "pct": 14.8
        },
        {
          "code": "SPN6FDC",
          "usos": 6,
          "disc": 90.0,
          "pct": 16.6
        },
        {
          "code": "SPAL10EVA",
          "usos": 5,
          "disc": 75.0,
          "pct": 14.2
        },
        {
          "code": "PRCP",
          "usos": 3,
          "disc": 75.66,
          "pct": 15.0
        }
      ],
      "products": [
        {
          "id": "AG000655",
          "name": "Catxtreme Cat Adult Steril Pate With Lamb 170 Gr",
          "orders": 787,
          "qty": 990.0,
          "net": 8306.1,
          "pos1_pct": 2,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000815",
          "name": "Salvaje Adulto Con Salmon 15Kg",
          "orders": 614,
          "qty": 678.0,
          "net": 100493.16,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000033",
          "name": "Canbo Adulto Cordero Razas Med/Gran Alimento Sec",
          "orders": 603,
          "qty": 649.0,
          "net": 133596.32,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000036",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 461,
          "qty": 526.0,
          "net": 55230.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000101",
          "name": "Bravecto 250mg para Perro 4.5 a 10kg 1 Tab.",
          "orders": 422,
          "qty": 520.0,
          "net": 84125.6,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000017",
          "name": "Canbo Cuidado De Esterilizados / Sterilized Care",
          "orders": 318,
          "qty": 348.0,
          "net": 53056.03,
          "pos1_pct": 86,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000489",
          "name": "Churu Sabor Atún con Salmón 60Gr",
          "orders": 293,
          "qty": 664.0,
          "net": 7258.51,
          "pos1_pct": 25,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000015",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 261,
          "qty": 359.0,
          "net": 22179.02,
          "pos1_pct": 55,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "HC000487",
          "name": "Arena para gato Tkpet aglomerante aroma talco 20",
          "orders": 258,
          "qty": 544.0,
          "net": 45851.72,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "PG000065",
          "name": "Catxtreme Cat Adult Snack With Salmon 60 g",
          "orders": 245,
          "qty": 282.0,
          "net": 2365.98,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000014",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 240,
          "qty": 355.0,
          "net": 11402.48,
          "pos1_pct": 45,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP000796",
          "name": "Dogxtreme Adulto Cordero Alimento Seco Perro",
          "orders": 221,
          "qty": 298.0,
          "net": 42906.76,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000019",
          "name": "Canbo Cuidado Del Tracto Urinario / Urinary Heal",
          "orders": 218,
          "qty": 236.0,
          "net": 35980.54,
          "pos1_pct": 88,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PG000068",
          "name": "Nath Cat Adult Snack Dental Care 60 g",
          "orders": 215,
          "qty": 237.0,
          "net": 2189.76,
          "pos1_pct": 1,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000486",
          "name": "Arena para gato Tkpet aglomerante aroma talco 10",
          "orders": 211,
          "qty": 559.0,
          "net": 30609.42,
          "pos1_pct": 71,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP000270",
          "name": "Mio Cane Premium Adulto 15 kg",
          "orders": 205,
          "qty": 214.0,
          "net": 33713.56,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000487",
          "name": "Churu Sabor Pollo 60Gr",
          "orders": 196,
          "qty": 419.0,
          "net": 4580.28,
          "pos1_pct": 12,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP000040",
          "name": "Canbo Cachorro Cordero Razas Pequeñas Alimento S",
          "orders": 195,
          "qty": 228.0,
          "net": 25098.55,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000561",
          "name": "Salvaje Esterilizado Gato 12kg",
          "orders": 183,
          "qty": 201.0,
          "net": 25533.19,
          "pos1_pct": 90,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000393",
          "name": "Gran Plus Menu Gato Adulto Castrado  Salmon Y Ar",
          "orders": 159,
          "qty": 173.0,
          "net": 32679.67,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PS000678",
          "name": "Mpets Basic Scoop Plastic",
          "orders": 157,
          "qty": 157.0,
          "net": 651.55,
          "pos1_pct": 0,
          "mascota": "Gato",
          "subcat": "Areneros y accesorios",
          "cat": "Salud e higiene"
        },
        {
          "id": "FF000102",
          "name": "Bravecto 500mg para Perro 10 a 20kg 1 Tab.",
          "orders": 142,
          "qty": 174.0,
          "net": 29919.3,
          "pos1_pct": 75,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000486",
          "name": "Churu Sabor Atún con Pollo 60Gr",
          "orders": 140,
          "qty": 262.0,
          "net": 2863.98,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000490",
          "name": "Churu Sabor Pollo con Camarón 60Gr",
          "orders": 137,
          "qty": 289.0,
          "net": 3159.14,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000247",
          "name": "Origens Filete Atún 85 g",
          "orders": 135,
          "qty": 660.0,
          "net": 4977.77,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000016",
          "name": "Canbo Cuidado De Esterilizados / Sterilized Care",
          "orders": 131,
          "qty": 132.0,
          "net": 9944.88,
          "pos1_pct": 75,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000249",
          "name": "Origens Filete Atún Con Camaron 85 g",
          "orders": 128,
          "qty": 577.0,
          "net": 4351.81,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000495",
          "name": "Catxtreme Adulto Esterilizado Salmón 6 Kg",
          "orders": 115,
          "qty": 162.0,
          "net": 19206.72,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000251",
          "name": "Origens Filete Atún Con Papaya 85 g",
          "orders": 113,
          "qty": 461.0,
          "net": 3476.89,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000797",
          "name": "Dogxtreme Adulto Senior/Light Alimento Seco Perr",
          "orders": 113,
          "qty": 150.0,
          "net": 21088.86,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000715",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 112,
          "qty": 197.0,
          "net": 6327.62,
          "pos1_pct": 58,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000485",
          "name": "Churu Sabor Atún 60Gr",
          "orders": 112,
          "qty": 256.0,
          "net": 2798.45,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP000034",
          "name": "Canbo Adulto Cordero Razas Med/Gran Alimento Sec",
          "orders": 110,
          "qty": 126.0,
          "net": 6075.72,
          "pos1_pct": 48,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000093",
          "name": "Hills PD c/d Multicare 1.8kg Cuidado urinario Mu",
          "orders": 109,
          "qty": 125.0,
          "net": 15275.15,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "AG000488",
          "name": "Churu Sabor Atún con Ostiones 60Gr",
          "orders": 108,
          "qty": 211.0,
          "net": 2306.47,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000674",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 107,
          "qty": 195.0,
          "net": 12592.56,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP000814",
          "name": "Salvaje Adulto Con Cordero 15 Kg",
          "orders": 100,
          "qty": 113.0,
          "net": 16269.84,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000250",
          "name": "Origens Filete Atún Con Corvina 85 g",
          "orders": 99,
          "qty": 362.0,
          "net": 2730.2,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000656",
          "name": "Catxtreme Cat Adult Steril Pate With Salmon 170 ",
          "orders": 94,
          "qty": 438.0,
          "net": 3674.82,
          "pos1_pct": 32,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000035",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 93,
          "qty": 93.0,
          "net": 4484.46,
          "pos1_pct": 75,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000330",
          "name": "Origens Filete De Atún Con Aceituna 85 g",
          "orders": 90,
          "qty": 383.0,
          "net": 2888.6,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000253",
          "name": "Origens Filete Atún Con Tilapia 85 g",
          "orders": 89,
          "qty": 302.0,
          "net": 2277.64,
          "pos1_pct": 4,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "PG000105",
          "name": "Churu Gato Pollo Con Salmón (4 Unidades)",
          "orders": 89,
          "qty": 151.0,
          "net": 1650.56,
          "pos1_pct": 6,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000411",
          "name": "Mpets Carbon Training Pads Pañales De Entrenamie",
          "orders": 88,
          "qty": 175.0,
          "net": 8883.68,
          "pos1_pct": 69,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000681",
          "name": "Leonardo Drink Salmón 0.040 Kg",
          "orders": 82,
          "qty": 441.0,
          "net": 2205.0,
          "pos1_pct": 18,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000217",
          "name": "Fancy Feast Al Horno Con Salmon En Salsa Y Otros",
          "orders": 81,
          "qty": 797.0,
          "net": 4660.39,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000037",
          "name": "Canbo Cachorro Cordero razas med/gran",
          "orders": 81,
          "qty": 85.0,
          "net": 18649.81,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000173",
          "name": "Nexgard 28.3mg  (4.1 a 10kg) 3 tabletas",
          "orders": 80,
          "qty": 102.0,
          "net": 18316.97,
          "pos1_pct": 70,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000229",
          "name": "Félix Pate Salmón 156gr",
          "orders": 79,
          "qty": 763.0,
          "net": 4461.49,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000252",
          "name": "Origens Filete Atún Con Piña 85 g",
          "orders": 78,
          "qty": 228.0,
          "net": 1719.51,
          "pos1_pct": 6,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000331",
          "name": "Origens Filete De Atún Con Durazno 85 g",
          "orders": 76,
          "qty": 265.0,
          "net": 1998.61,
          "pos1_pct": 11,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000349",
          "name": "Rambala Comida Congelada Premium para Perros Pol",
          "orders": 75,
          "qty": 297.0,
          "net": 4253.61,
          "pos1_pct": 55,
          "mascota": "Perro",
          "subcat": "Alimento BARF",
          "cat": "Alimentos"
        },
        {
          "id": "AP000798",
          "name": "Dogxtreme Adulto Salmón Alimento Seco Perro 12 K",
          "orders": 75,
          "qty": 104.0,
          "net": 17618.36,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000225",
          "name": "Fancy Feast Al Grill Con Atun Y Otros 85 g",
          "orders": 73,
          "qty": 460.0,
          "net": 2689.78,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000175",
          "name": "Nexgard 136mg (25.1 a 50kg) 3 tabletas",
          "orders": 73,
          "qty": 90.0,
          "net": 20662.07,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP000795",
          "name": "Dogxtreme Adulto Pollo Alimento Seco Perro",
          "orders": 72,
          "qty": 89.0,
          "net": 12512.67,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000174",
          "name": "Nexgard 68mg (10.1 a 25kg) 3 tabletas",
          "orders": 72,
          "qty": 78.0,
          "net": 15394.92,
          "pos1_pct": 78,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "FF000677",
          "name": "Rivolta 6% X 0.75 Ml (2.6kg A 7.5kg) 1 Pipeta",
          "orders": 69,
          "qty": 150.0,
          "net": 6088.98,
          "pos1_pct": 46,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000333",
          "name": "Origens Filete De Atún Con Manzana 85 g",
          "orders": 69,
          "qty": 202.0,
          "net": 1523.39,
          "pos1_pct": 4,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000218",
          "name": "Fancy Feast Paté Clásico Con Bacalao, Lenguado, ",
          "orders": 67,
          "qty": 414.0,
          "net": 2420.8,
          "pos1_pct": 18,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000675",
          "name": "Leonardo Quality Selection Ave",
          "orders": 66,
          "qty": 224.0,
          "net": 4157.36,
          "pos1_pct": 36,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000492",
          "name": "Catxtreme Adulto Esterilizado Pollo 2.5 Kg",
          "orders": 63,
          "qty": 90.0,
          "net": 4950.0,
          "pos1_pct": 75,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000643",
          "name": "Nexgard Spectra L X 3 Tab (15 30 Kg)",
          "orders": 63,
          "qty": 65.0,
          "net": 15143.03,
          "pos1_pct": 76,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000332",
          "name": "Origens Filete De Atún Con Melón 85 g",
          "orders": 62,
          "qty": 168.0,
          "net": 1266.97,
          "pos1_pct": 2,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000682",
          "name": "Leonardo Drink Pato 0.040 Kg",
          "orders": 62,
          "qty": 358.0,
          "net": 1790.0,
          "pos1_pct": 11,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000812",
          "name": "Salvaje Cachorro Con Pollo 15Kg",
          "orders": 61,
          "qty": 78.0,
          "net": 11230.58,
          "pos1_pct": 97,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PP000299",
          "name": "Dentitoy Snacks Deshidratados X500 G",
          "orders": 61,
          "qty": 126.0,
          "net": 2872.51,
          "pos1_pct": 30,
          "mascota": "Perro",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP001070",
          "name": "Hill's Science Diet Adult Small Bites, cordero y",
          "orders": 61,
          "qty": 65.0,
          "net": 15748.85,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PP000120",
          "name": "Barker Bites Pollo (100 g)",
          "orders": 60,
          "qty": 122.0,
          "net": 2264.31,
          "pos1_pct": 10,
          "mascota": "Perro Y Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000219",
          "name": "Fancy Feast Gravy Lovers A La Parrilla Sabor Fes",
          "orders": 60,
          "qty": 375.0,
          "net": 2192.73,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000743",
          "name": "Proteggo 3m 500mg para Perro 10 20 Kg (Cja X 1 T",
          "orders": 60,
          "qty": 73.0,
          "net": 9607.53,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "PG000106",
          "name": "Churu Gato Tuna/Seafood (4 Unidades)",
          "orders": 59,
          "qty": 81.0,
          "net": 885.37,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP000043",
          "name": "Canbo Enlatado Óptima Digestión 330 g",
          "orders": 59,
          "qty": 401.0,
          "net": 4383.73,
          "pos1_pct": 46,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000479",
          "name": "Bravery Chicken Adult Cat Sterilized Alimento Se",
          "orders": 59,
          "qty": 68.0,
          "net": 13536.73,
          "pos1_pct": 66,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000045",
          "name": "Canbo Enlatado Hipoalergenico 330 g",
          "orders": 58,
          "qty": 251.0,
          "net": 3169.41,
          "pos1_pct": 26,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000153",
          "name": "Ricocat Adultos Esterilizados Alimento Seco Gato",
          "orders": 58,
          "qty": 100.0,
          "net": 8042.23,
          "pos1_pct": 69,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000367",
          "name": "Ricocan Adulto Paté de Cordero 312 g",
          "orders": 56,
          "qty": 337.0,
          "net": 1685.0,
          "pos1_pct": 14,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP001366",
          "name": "Pro plan Piel Sensible Adulto Cordero Todas las ",
          "orders": 55,
          "qty": 89.0,
          "net": 27145.0,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP001144",
          "name": "Canbo Dog Food Senior Sb Pollo Todas Las Razas A",
          "orders": 54,
          "qty": 56.0,
          "net": 12006.94,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000248",
          "name": "Origens Filete Atún Con Calamar 85 g",
          "orders": 54,
          "qty": 153.0,
          "net": 1153.91,
          "pos1_pct": 0,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000493",
          "name": "Catxtreme Adulto Esterilizado Salmón 2.5 Kg",
          "orders": 54,
          "qty": 74.0,
          "net": 4383.56,
          "pos1_pct": 52,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP001410",
          "name": "Nath Veterinary Diets Perro Urinary Estruvita 40",
          "orders": 54,
          "qty": 67.0,
          "net": 1243.51,
          "pos1_pct": 4,
          "mascota": "Perro",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "AP000209",
          "name": "Hills Sd Adult Lamb & Rice 33 Lb Cordero Y Arroz",
          "orders": 53,
          "qty": 63.0,
          "net": 23934.87,
          "pos1_pct": 96,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000350",
          "name": "Rambala Comida Congelada Premium para Perros Res",
          "orders": 50,
          "qty": 141.0,
          "net": 2258.39,
          "pos1_pct": 42,
          "mascota": "Perro",
          "subcat": "Alimento BARF",
          "cat": "Alimentos"
        },
        {
          "id": "AG000434",
          "name": "ProPlan Adult 85gr (Adulto Pollo Y Arroz)",
          "orders": 50,
          "qty": 632.0,
          "net": 4552.49,
          "pos1_pct": 44,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000471",
          "name": "Mpets Puppy Training Pañal de entrenamiento (60X",
          "orders": 50,
          "qty": 82.0,
          "net": 5691.34,
          "pos1_pct": 68,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000654",
          "name": "Catxtreme Cat Adult Steril Pate With Beef 170 Gr",
          "orders": 49,
          "qty": 191.0,
          "net": 1602.49,
          "pos1_pct": 12,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000683",
          "name": "Leonardo Drink Ternera 0.040 Kg",
          "orders": 49,
          "qty": 294.0,
          "net": 1470.0,
          "pos1_pct": 12,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000098",
          "name": "Bravecto 1000mg para Perro 20 a 40kg 1 Tab.",
          "orders": 49,
          "qty": 66.0,
          "net": 14592.64,
          "pos1_pct": 65,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "FF000776",
          "name": "Nexgard Combo Gato L 0.9Ml (2.5-7.5 Kg)",
          "orders": 49,
          "qty": 104.0,
          "net": 6072.56,
          "pos1_pct": 59,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000069",
          "name": "Hills PD c/d Multi Stress Cuidado urinario Multi",
          "orders": 49,
          "qty": 56.0,
          "net": 6843.27,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "HC000017",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 48,
          "qty": 81.0,
          "net": 1572.04,
          "pos1_pct": 25,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "HC000803",
          "name": "Tkpet Arena aglomerante sin aroma",
          "orders": 48,
          "qty": 105.0,
          "net": 7109.83,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "HC000669",
          "name": "Pañales Macho",
          "orders": 48,
          "qty": 226.0,
          "net": 5535.09,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "PP000121",
          "name": "Barker Bites Bazo De Res (100 g)",
          "orders": 47,
          "qty": 80.0,
          "net": 1349.06,
          "pos1_pct": 6,
          "mascota": "Perro Y Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000228",
          "name": "Felix Original Paté de Pescado y Atún 156 g",
          "orders": 47,
          "qty": 312.0,
          "net": 1824.34,
          "pos1_pct": 2,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000671",
          "name": "Leonardo Quality Selection Pescado",
          "orders": 46,
          "qty": 160.0,
          "net": 2969.54,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000379",
          "name": "Gran Plus Menu Gato Adulto Carne Y Arroz",
          "orders": 46,
          "qty": 52.0,
          "net": 9338.14,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000100",
          "name": "Matisse Castrados Salmon Alimento Seco Gato",
          "orders": 46,
          "qty": 61.0,
          "net": 9868.58,
          "pos1_pct": 63,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP001071",
          "name": "Wellness Core Perro Healthy Weight Alimento Seco",
          "orders": 46,
          "qty": 70.0,
          "net": 17790.71,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 14565,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 6308,
          "pct": 43.3
        },
        {
          "pos": 3,
          "n": 3104,
          "pct": 21.3
        },
        {
          "pos": 4,
          "n": 1755,
          "pct": 12.0
        },
        {
          "pos": 5,
          "n": 1058,
          "pct": 7.3
        },
        {
          "pos": 6,
          "n": 651,
          "pct": 4.5
        },
        {
          "pos": 7,
          "n": 411,
          "pct": 2.8
        }
      ],
      "promos_all": [
        {
          "id": "PBOMBA",
          "usos": 2872,
          "disc_net": 65867.94,
          "ppu": 22.93
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 1292,
          "disc_net": 17493.36,
          "ppu": 13.54
        },
        {
          "id": "REGALO-CATX-SNACK",
          "usos": 935,
          "disc_net": 7844.65,
          "ppu": 8.39
        },
        {
          "id": "10M2PERMAN",
          "usos": 544,
          "disc_net": 7612.77,
          "ppu": 13.99
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 429,
          "disc_net": 45684.13,
          "ppu": 106.49
        },
        {
          "id": "3x2HUM-MMPP",
          "usos": 403,
          "disc_net": 5929.68,
          "ppu": 14.71
        },
        {
          "id": "40PRODSELEC",
          "usos": 329,
          "disc_net": 18585.56,
          "ppu": 56.49
        },
        {
          "id": "5M1PERMAN",
          "usos": 316,
          "disc_net": 3417.49,
          "ppu": 10.81
        },
        {
          "id": "3x2ARENA",
          "usos": 313,
          "disc_net": 19968.12,
          "ppu": 63.8
        },
        {
          "id": "15PRODSELEC",
          "usos": 290,
          "disc_net": 3039.16,
          "ppu": 10.48
        },
        {
          "id": "2DO50PRODSELEC",
          "usos": 238,
          "disc_net": 11089.94,
          "ppu": 46.6
        },
        {
          "id": "REGALO-NATH-SNACK",
          "usos": 175,
          "disc_net": 1617.0,
          "ppu": 9.24
        },
        {
          "id": "50PRODSELEC",
          "usos": 174,
          "disc_net": 19066.6,
          "ppu": 109.58
        },
        {
          "id": "2DO40PAÑALES",
          "usos": 170,
          "disc_net": 4025.45,
          "ppu": 23.68
        },
        {
          "id": "30DOGZI-CATZI",
          "usos": 161,
          "disc_net": 8225.62,
          "ppu": 51.09
        },
        {
          "id": "2DO30MMPP",
          "usos": 160,
          "disc_net": 5257.63,
          "ppu": 32.86
        },
        {
          "id": "ANTES-AHORA-SALV",
          "usos": 157,
          "disc_net": 4372.38,
          "ppu": 27.85
        },
        {
          "id": "2DO30PRODSELEC",
          "usos": 156,
          "disc_net": 5362.35,
          "ppu": 34.37
        },
        {
          "id": "REGALO-ARENA-PALA",
          "usos": 154,
          "disc_net": 639.1,
          "ppu": 4.15
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 149,
          "disc_net": 6211.51,
          "ppu": 41.69
        },
        {
          "id": "30PRODSELEC",
          "usos": 131,
          "disc_net": 5276.28,
          "ppu": 40.28
        },
        {
          "id": "40PRODSELEC-WEB",
          "usos": 130,
          "disc_net": 3509.03,
          "ppu": 26.99
        },
        {
          "id": "8M4HUM-SELEC",
          "usos": 129,
          "disc_net": 4269.58,
          "ppu": 33.1
        },
        {
          "id": "2x1PRODSELEC",
          "usos": 123,
          "disc_net": 4464.26,
          "ppu": 36.29
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 116,
          "disc_net": 4490.12,
          "ppu": 38.71
        },
        {
          "id": "2DO40PRODSELEC",
          "usos": 115,
          "disc_net": 6746.44,
          "ppu": 58.66
        },
        {
          "id": "50%PRODSELE-WEB",
          "usos": 113,
          "disc_net": 11848.53,
          "ppu": 104.85
        },
        {
          "id": "3x2ARENASELEC",
          "usos": 105,
          "disc_net": 5449.32,
          "ppu": 51.9
        },
        {
          "id": "CANBO-15M3KG",
          "usos": 94,
          "disc_net": 2202.21,
          "ppu": 23.43
        },
        {
          "id": "DCTO-FUNCIONARIO-MP",
          "usos": 88,
          "disc_net": 3722.16,
          "ppu": 42.3
        },
        {
          "id": "20PRODSELEC",
          "usos": 86,
          "disc_net": 2511.74,
          "ppu": 29.21
        },
        {
          "id": "10PRODSELEC",
          "usos": 82,
          "disc_net": 546.98,
          "ppu": 6.67
        },
        {
          "id": "20HILLS",
          "usos": 82,
          "disc_net": 3633.88,
          "ppu": 44.32
        },
        {
          "id": "20DOGXTREME",
          "usos": 82,
          "disc_net": 2431.37,
          "ppu": 29.65
        },
        {
          "id": "30PROTEGG",
          "usos": 79,
          "disc_net": 3149.71,
          "ppu": 39.87
        },
        {
          "id": "DCTO-FUNCIONARIO-MC",
          "usos": 79,
          "disc_net": 1455.99,
          "ppu": 18.43
        },
        {
          "id": "3x2PRODSELEC",
          "usos": 76,
          "disc_net": 3826.12,
          "ppu": 50.34
        },
        {
          "id": "10%PRODSELE",
          "usos": 68,
          "disc_net": 275.17,
          "ppu": 4.05
        },
        {
          "id": "3x2BOLSA-FECA",
          "usos": 62,
          "disc_net": 860.72,
          "ppu": 13.88
        },
        {
          "id": "2DO40PROPLAN",
          "usos": 62,
          "disc_net": 3289.22,
          "ppu": 53.05
        },
        {
          "id": "2DA50CATX",
          "usos": 60,
          "disc_net": 2447.41,
          "ppu": 40.79
        },
        {
          "id": "40%PRODSELE-WEB",
          "usos": 58,
          "disc_net": 4368.18,
          "ppu": 75.31
        },
        {
          "id": "PE-list-liquidacion50%",
          "usos": 56,
          "disc_net": 5425.56,
          "ppu": 96.88
        },
        {
          "id": "2DA40HILLS",
          "usos": 56,
          "disc_net": 2699.25,
          "ppu": 48.2
        },
        {
          "id": "20SIMPAR",
          "usos": 55,
          "disc_net": 2309.27,
          "ppu": 41.99
        },
        {
          "id": "REGALO-NATHDOG-STRUV",
          "usos": 52,
          "disc_net": 965.12,
          "ppu": 18.56
        },
        {
          "id": "2x1COLLAR-MPETS",
          "usos": 52,
          "disc_net": 2354.06,
          "ppu": 45.27
        },
        {
          "id": "4x3-TOALL-HUM",
          "usos": 51,
          "disc_net": 581.77,
          "ppu": 11.41
        },
        {
          "id": "2DO40MMPP",
          "usos": 49,
          "disc_net": 2927.27,
          "ppu": 59.74
        },
        {
          "id": "2DO30PROPLAN",
          "usos": 48,
          "disc_net": 2350.54,
          "ppu": 48.97
        },
        {
          "id": "5%PRODSELE",
          "usos": 48,
          "disc_net": 204.46,
          "ppu": 4.26
        },
        {
          "id": "45%PRODSELE-WEB",
          "usos": 46,
          "disc_net": 4431.77,
          "ppu": 96.34
        },
        {
          "id": "10M3ORIGENS",
          "usos": 43,
          "disc_net": 724.06,
          "ppu": 16.84
        },
        {
          "id": "combobaker",
          "usos": 42,
          "disc_net": 363.03,
          "ppu": 8.64
        },
        {
          "id": "PE-list-liquidacion70%",
          "usos": 42,
          "disc_net": 2111.69,
          "ppu": 50.28
        },
        {
          "id": "H-30PRODSELE-WEB",
          "usos": 38,
          "disc_net": 2515.68,
          "ppu": 66.2
        },
        {
          "id": "3x2HUMEDSELEC",
          "usos": 37,
          "disc_net": 776.17,
          "ppu": 20.98
        },
        {
          "id": "30BRAVEC",
          "usos": 37,
          "disc_net": 2666.7,
          "ppu": 72.07
        },
        {
          "id": "2DA30CONG",
          "usos": 37,
          "disc_net": 297.23,
          "ppu": 8.03
        },
        {
          "id": "4x3PRODSELEC",
          "usos": 36,
          "disc_net": 760.46,
          "ppu": 21.12
        },
        {
          "id": "5MIOCANE",
          "usos": 35,
          "disc_net": 122.1,
          "ppu": 3.49
        },
        {
          "id": "30%PRODSELE-WEB",
          "usos": 34,
          "disc_net": 1775.78,
          "ppu": 52.23
        },
        {
          "id": "2DO30PRODSELEC-WEB",
          "usos": 31,
          "disc_net": 301.28,
          "ppu": 9.72
        },
        {
          "id": "2DO50-PRODSELE",
          "usos": 30,
          "disc_net": 2176.59,
          "ppu": 72.55
        },
        {
          "id": "45PRODSELEC-WEB",
          "usos": 29,
          "disc_net": 3271.79,
          "ppu": 112.82
        },
        {
          "id": "REGALO-NATHDOG-HEPATIC",
          "usos": 28,
          "disc_net": 519.68,
          "ppu": 18.56
        },
        {
          "id": "REGALO-PAÑAL-TOALL",
          "usos": 28,
          "disc_net": 234.92,
          "ppu": 8.39
        },
        {
          "id": "2DO30TOOTOY",
          "usos": 27,
          "disc_net": 202.15,
          "ppu": 7.49
        },
        {
          "id": "2DO40PRODSELEC-WEB",
          "usos": 27,
          "disc_net": 1739.37,
          "ppu": 64.42
        },
        {
          "id": "PRECIOS-12-90",
          "usos": 25,
          "disc_net": 511.02,
          "ppu": 20.44
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 23,
          "disc_net": 64.38,
          "ppu": 2.8
        },
        {
          "id": "4x3-PRODSELEC-WEB",
          "usos": 21,
          "disc_net": 390.34,
          "ppu": 18.59
        },
        {
          "id": "4x12.90CATBAND",
          "usos": 19,
          "disc_net": 16.07,
          "ppu": 0.85
        },
        {
          "id": "H-40%PRODSELE-WEB",
          "usos": 19,
          "disc_net": 1756.52,
          "ppu": 92.45
        },
        {
          "id": "REGALO-DOGX-JUGUE",
          "usos": 16,
          "disc_net": 202.08,
          "ppu": 12.63
        },
        {
          "id": "2DO30SECOPROPLAN",
          "usos": 16,
          "disc_net": 1288.7,
          "ppu": 80.54
        },
        {
          "id": "10MIOGATTO",
          "usos": 15,
          "disc_net": 198.15,
          "ppu": 13.21
        },
        {
          "id": "4x3-PRODSELEC",
          "usos": 15,
          "disc_net": 340.59,
          "ppu": 22.71
        },
        {
          "id": "20NATHVET",
          "usos": 15,
          "disc_net": 330.66,
          "ppu": 22.04
        },
        {
          "id": "40BRAVEC",
          "usos": 14,
          "disc_net": 1023.15,
          "ppu": 73.08
        },
        {
          "id": "35%PRODSELEC",
          "usos": 14,
          "disc_net": 373.03,
          "ppu": 26.64
        },
        {
          "id": "PRECIOS-29-90",
          "usos": 14,
          "disc_net": 1008.45,
          "ppu": 72.03
        },
        {
          "id": "2x1SNACKSELEC",
          "usos": 13,
          "disc_net": 181.95,
          "ppu": 14.0
        },
        {
          "id": "3PELSOLID",
          "usos": 12,
          "disc_net": 26.4,
          "ppu": 2.2
        },
        {
          "id": "5M1BELC-LEON",
          "usos": 12,
          "disc_net": 168.32,
          "ppu": 14.03
        },
        {
          "id": "20ZOOVET",
          "usos": 12,
          "disc_net": 91.55,
          "ppu": 7.63
        },
        {
          "id": "PRECIOS-9-90",
          "usos": 12,
          "disc_net": 59.33,
          "ppu": 4.94
        },
        {
          "id": "3x2JUGUE-SELEC",
          "usos": 11,
          "disc_net": 231.26,
          "ppu": 21.02
        },
        {
          "id": "REGALO-NATHDOG-DIABET",
          "usos": 10,
          "disc_net": 185.6,
          "ppu": 18.56
        },
        {
          "id": "20BELCANDO",
          "usos": 9,
          "disc_net": 514.28,
          "ppu": 57.14
        },
        {
          "id": "10MIOCANE",
          "usos": 9,
          "disc_net": 59.52,
          "ppu": 6.61
        },
        {
          "id": "PE-list-liquidacion30%",
          "usos": 9,
          "disc_net": 333.84,
          "ppu": 37.09
        },
        {
          "id": "35PRODSELEC",
          "usos": 9,
          "disc_net": 226.71,
          "ppu": 25.19
        },
        {
          "id": "20LEONARDO",
          "usos": 8,
          "disc_net": 284.77,
          "ppu": 35.6
        },
        {
          "id": "2x1AREN-SELEC",
          "usos": 8,
          "disc_net": 592.38,
          "ppu": 74.05
        },
        {
          "id": "REGALO-CATX-JUGUE",
          "usos": 8,
          "disc_net": 101.04,
          "ppu": 12.63
        },
        {
          "id": "4M1HUMROYAL",
          "usos": 8,
          "disc_net": 82.95,
          "ppu": 10.37
        },
        {
          "id": "3x2FMPETS",
          "usos": 7,
          "disc_net": 57.89,
          "ppu": 8.27
        },
        {
          "id": "4x3YOGY",
          "usos": 6,
          "disc_net": 58.46,
          "ppu": 9.74
        },
        {
          "id": "10M2HUMLEO",
          "usos": 6,
          "disc_net": 110.0,
          "ppu": 18.33
        },
        {
          "id": "REGALO-NATHCAT-DIABET",
          "usos": 5,
          "disc_net": 71.6,
          "ppu": 14.32
        },
        {
          "id": "2DO30DENTITOY",
          "usos": 5,
          "disc_net": 21.49,
          "ppu": 4.3
        },
        {
          "id": "35FRONT",
          "usos": 5,
          "disc_net": 135.74,
          "ppu": 27.15
        },
        {
          "id": "2x1JUGUESELEC",
          "usos": 5,
          "disc_net": 65.58,
          "ppu": 13.12
        },
        {
          "id": "PRECIOS-6-90",
          "usos": 5,
          "disc_net": 19.5,
          "ppu": 3.9
        },
        {
          "id": "3x2AREN-SELEC",
          "usos": 5,
          "disc_net": 291.95,
          "ppu": 58.39
        },
        {
          "id": "2PELSOLID",
          "usos": 4,
          "disc_net": 9.92,
          "ppu": 2.48
        },
        {
          "id": "25ZOOVET",
          "usos": 4,
          "disc_net": 83.88,
          "ppu": 20.97
        },
        {
          "id": "2DO30OUTECH",
          "usos": 4,
          "disc_net": 60.41,
          "ppu": 15.1
        },
        {
          "id": "3x2SECO-BELCAN",
          "usos": 4,
          "disc_net": 462.36,
          "ppu": 115.59
        },
        {
          "id": "20ACEITE-TR",
          "usos": 3,
          "disc_net": 11.5,
          "ppu": 3.83
        },
        {
          "id": "20DOGX",
          "usos": 3,
          "disc_net": 84.36,
          "ppu": 28.12
        },
        {
          "id": "PBOMBA-TKPET-AGLOM",
          "usos": 3,
          "disc_net": 67.8,
          "ppu": 22.6
        },
        {
          "id": "3X2PLAYBITE",
          "usos": 2,
          "disc_net": 25.26,
          "ppu": 12.63
        },
        {
          "id": "10ROYALSECO",
          "usos": 1,
          "disc_net": 9.24,
          "ppu": 9.24
        },
        {
          "id": "15PROPLN",
          "usos": 1,
          "disc_net": 12.32,
          "ppu": 12.32
        }
      ],
      "coupons_all": [
        {
          "code": "PRIMERA10",
          "usos": 962,
          "disc": 18286.86,
          "pct": 10.0
        },
        {
          "code": "30DESCUENTO",
          "usos": 327,
          "disc": 73820.89,
          "pct": 29.8
        },
        {
          "code": "PET15",
          "usos": 252,
          "disc": 7819.51,
          "pct": 15.0
        },
        {
          "code": "CPC15PE2",
          "usos": 169,
          "disc": 5090.55,
          "pct": 15.0
        },
        {
          "code": "25DESCUENTO",
          "usos": 120,
          "disc": 18750.86,
          "pct": 24.9
        },
        {
          "code": "VUELVE15",
          "usos": 11,
          "disc": 165.0,
          "pct": 40.7
        },
        {
          "code": "JP4CPAJUL",
          "usos": 8,
          "disc": 120.0,
          "pct": 14.8
        },
        {
          "code": "SPN6FDC",
          "usos": 6,
          "disc": 90.0,
          "pct": 16.6
        },
        {
          "code": "SPAL10EVA",
          "usos": 5,
          "disc": 75.0,
          "pct": 14.2
        },
        {
          "code": "PRCP",
          "usos": 3,
          "disc": 75.66,
          "pct": 15.0
        },
        {
          "code": "JP3CPAJUL",
          "usos": 2,
          "disc": 30.0,
          "pct": 11.8
        },
        {
          "code": "SP-CZGIW5EM",
          "usos": 1,
          "disc": 28.84,
          "pct": 20.0
        },
        {
          "code": "SP-CV5X56VI",
          "usos": 1,
          "disc": 61.19,
          "pct": 15.0
        },
        {
          "code": "SP-NUR5XLGQ",
          "usos": 1,
          "disc": 21.62,
          "pct": 20.0
        },
        {
          "code": "SPPSOL6M1",
          "usos": 1,
          "disc": 15.0,
          "pct": 23.6
        },
        {
          "code": "SP-KCXODQOP",
          "usos": 1,
          "disc": 28.78,
          "pct": 20.0
        },
        {
          "code": "SP-S7GWFSKF",
          "usos": 1,
          "disc": 36.44,
          "pct": 15.0
        },
        {
          "code": "SP-U5A4W5OE",
          "usos": 1,
          "disc": 7.98,
          "pct": 20.0
        },
        {
          "code": "DOGXTREME10",
          "usos": 1,
          "disc": 16.59,
          "pct": 8.8
        },
        {
          "code": "SP-4LN9ZTGN",
          "usos": 1,
          "disc": 2.54,
          "pct": 15.0
        },
        {
          "code": "SP-TR5YB3P4",
          "usos": 1,
          "disc": 11.53,
          "pct": 10.0
        },
        {
          "code": "ECST21",
          "usos": 1,
          "disc": 10.81,
          "pct": 10.0
        },
        {
          "code": "SP-N6YKLKWX",
          "usos": 1,
          "disc": 26.99,
          "pct": 15.0
        },
        {
          "code": "SP-SEGP6GDL",
          "usos": 1,
          "disc": 18.75,
          "pct": 15.0
        },
        {
          "code": "SP-VALT4ZP7",
          "usos": 1,
          "disc": 21.72,
          "pct": 20.0
        },
        {
          "code": "SP-2EEANPFH",
          "usos": 1,
          "disc": 19.47,
          "pct": 15.0
        },
        {
          "code": "SP-QPV7FMMQ",
          "usos": 1,
          "disc": 25.46,
          "pct": 15.0
        },
        {
          "code": "SP-DXIM26YB",
          "usos": 1,
          "disc": 107.97,
          "pct": 15.0
        },
        {
          "code": "SP-9P2WVLBO",
          "usos": 1,
          "disc": 39.59,
          "pct": 10.0
        },
        {
          "code": "SP-GQ5YG51T",
          "usos": 1,
          "disc": 500.0,
          "pct": 48.0
        },
        {
          "code": "SP-HWTXGR7S",
          "usos": 1,
          "disc": 78.92,
          "pct": 15.0
        },
        {
          "code": "SP-HSXBVI3U",
          "usos": 1,
          "disc": 48.8,
          "pct": 10.0
        }
      ],
      "shipping_detail": [
        {
          "method": "Lima",
          "n": 7241,
          "pct": 49.7,
          "net": 1568816.42,
          "ticket": 216.66,
          "avg_items": 2.1
        },
        {
          "method": "Express",
          "n": 3613,
          "pct": 24.8,
          "net": 642711.41,
          "ticket": 177.89,
          "avg_items": 2.1
        },
        {
          "method": "Click & Collect",
          "n": 2988,
          "pct": 20.5,
          "net": 498525.25,
          "ticket": 166.84,
          "avg_items": 1.5
        },
        {
          "method": "Programado",
          "n": 638,
          "pct": 4.4,
          "net": 141577.6,
          "ticket": 221.91,
          "avg_items": 2.0
        },
        {
          "method": "Arequipa",
          "n": 29,
          "pct": 0.2,
          "net": 6585.54,
          "ticket": 227.09,
          "avg_items": 1.2
        },
        {
          "method": "Lima-La-Libertad",
          "n": 22,
          "pct": 0.2,
          "net": 4829.58,
          "ticket": 219.53,
          "avg_items": 1.1
        },
        {
          "method": "Lambayeque",
          "n": 18,
          "pct": 0.1,
          "net": 5230.43,
          "ticket": 290.58,
          "avg_items": 1.0
        },
        {
          "method": "Piura",
          "n": 12,
          "pct": 0.1,
          "net": 3178.31,
          "ticket": 264.86,
          "avg_items": 1.2
        }
      ],
      "daily": [
        {
          "date": "2025-05-01",
          "orders": 322,
          "net": 49413.19,
          "discount": 0.0,
          "ticket": 153.46
        },
        {
          "date": "2025-05-02",
          "orders": 465,
          "net": 76564.21,
          "discount": 0.0,
          "ticket": 164.65
        },
        {
          "date": "2025-05-03",
          "orders": 394,
          "net": 59816.45,
          "discount": 0.0,
          "ticket": 151.82
        },
        {
          "date": "2025-05-04",
          "orders": 322,
          "net": 47553.39,
          "discount": 0.0,
          "ticket": 147.68
        },
        {
          "date": "2025-05-05",
          "orders": 522,
          "net": 83412.39,
          "discount": 0.0,
          "ticket": 159.79
        },
        {
          "date": "2025-05-06",
          "orders": 503,
          "net": 86983.15,
          "discount": 0.0,
          "ticket": 172.93
        },
        {
          "date": "2025-05-07",
          "orders": 467,
          "net": 80678.39,
          "discount": 0.0,
          "ticket": 172.76
        },
        {
          "date": "2025-05-08",
          "orders": 473,
          "net": 80877.31,
          "discount": 0.0,
          "ticket": 170.99
        },
        {
          "date": "2025-05-09",
          "orders": 432,
          "net": 72990.4,
          "discount": 0.0,
          "ticket": 168.96
        },
        {
          "date": "2025-05-10",
          "orders": 399,
          "net": 63607.75,
          "discount": 0.0,
          "ticket": 159.42
        },
        {
          "date": "2025-05-11",
          "orders": 273,
          "net": 42300.74,
          "discount": 0.0,
          "ticket": 154.95
        },
        {
          "date": "2025-05-12",
          "orders": 527,
          "net": 85722.59,
          "discount": 0.0,
          "ticket": 162.66
        },
        {
          "date": "2025-05-13",
          "orders": 507,
          "net": 74431.53,
          "discount": 0.0,
          "ticket": 146.81
        },
        {
          "date": "2025-05-14",
          "orders": 511,
          "net": 80494.68,
          "discount": 0.0,
          "ticket": 157.52
        },
        {
          "date": "2025-05-15",
          "orders": 469,
          "net": 68321.04,
          "discount": 0.0,
          "ticket": 145.67
        },
        {
          "date": "2025-05-16",
          "orders": 539,
          "net": 80843.3,
          "discount": 0.0,
          "ticket": 149.99
        },
        {
          "date": "2025-05-17",
          "orders": 417,
          "net": 68340.72,
          "discount": 0.0,
          "ticket": 163.89
        },
        {
          "date": "2025-05-18",
          "orders": 374,
          "net": 55791.13,
          "discount": 0.0,
          "ticket": 149.17
        },
        {
          "date": "2025-05-19",
          "orders": 518,
          "net": 78525.89,
          "discount": 0.0,
          "ticket": 151.59
        },
        {
          "date": "2025-05-20",
          "orders": 627,
          "net": 128522.18,
          "discount": 0.0,
          "ticket": 204.98
        },
        {
          "date": "2025-05-21",
          "orders": 555,
          "net": 110645.64,
          "discount": 0.0,
          "ticket": 199.36
        },
        {
          "date": "2025-05-22",
          "orders": 515,
          "net": 96087.62,
          "discount": 0.0,
          "ticket": 186.58
        },
        {
          "date": "2025-05-23",
          "orders": 512,
          "net": 93651.3,
          "discount": 0.0,
          "ticket": 182.91
        },
        {
          "date": "2025-05-24",
          "orders": 375,
          "net": 58310.12,
          "discount": 0.0,
          "ticket": 155.49
        },
        {
          "date": "2025-05-25",
          "orders": 417,
          "net": 68813.91,
          "discount": 0.0,
          "ticket": 165.02
        },
        {
          "date": "2025-05-26",
          "orders": 545,
          "net": 92013.71,
          "discount": 0.0,
          "ticket": 168.83
        },
        {
          "date": "2025-05-27",
          "orders": 518,
          "net": 85417.9,
          "discount": 0.0,
          "ticket": 164.9
        },
        {
          "date": "2025-05-28",
          "orders": 528,
          "net": 87221.47,
          "discount": 0.0,
          "ticket": 165.19
        },
        {
          "date": "2025-05-29",
          "orders": 481,
          "net": 75749.08,
          "discount": 0.0,
          "ticket": 157.48
        },
        {
          "date": "2025-05-30",
          "orders": 497,
          "net": 75633.17,
          "discount": 0.0,
          "ticket": 152.18
        },
        {
          "date": "2025-05-31",
          "orders": 458,
          "net": 75757.95,
          "discount": 0.0,
          "ticket": 165.41
        },
        {
          "date": "2025-06-01",
          "orders": 103,
          "net": 17690.68,
          "discount": 0.0,
          "ticket": 171.75
        }
      ],
      "meta": {
        "store": "SuperPet Perú",
        "currency": "PEN",
        "symbol": "S/",
        "periodo": "01/05/2025 – 01/06/2025"
      }
    },
    "deltas": {
      "orders": -2.5,
      "net": -10.9,
      "ticket": -8.7,
      "discount_pct": 5.9,
      "avg_items": 5.0
    },
    "store": "SuperPet Perú",
    "symbol": "S/",
    "currency": "PEN"
  },
  "sz": {
    "a": {
      "periodo": "01/05/2026 – 01/06/2026",
      "fecha_inicio": "2026-05-01",
      "fecha_fin": "2026-06-01",
      "kpis": {
        "orders": 34737,
        "net": 1626490805.0,
        "bruta": 2507100570.0,
        "discount": 585296718.0,
        "discount_pct": 23.3,
        "ticket": 46823.01,
        "avg_items": 1.6
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 20774,
          "pct": 59.8,
          "net": 1291643238.0
        },
        {
          "m": "Gato",
          "n": 15574,
          "pct": 44.8,
          "net": 784265811.0
        },
        {
          "m": "Perro , Gato , Exoticos",
          "n": 4,
          "pct": 0.0,
          "net": 40304.0
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 41572,
          "net": 1725425051.0
        },
        {
          "cat": "Arena y accesorios",
          "orders": 3751,
          "net": 144267831.0
        },
        {
          "cat": "Accesorios",
          "orders": 3123,
          "net": 90424379.0
        },
        {
          "cat": "Farmacia",
          "orders": 2904,
          "net": 57462775.0
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 2331,
          "net": 55224756.0
        },
        {
          "cat": "Juguetes",
          "orders": 977,
          "net": 9195027.0
        },
        {
          "cat": "Sin categoría",
          "orders": 468,
          "net": 24504064.0
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 23341,
          "pct": 67.2,
          "pos_avg": 1.2,
          "anc_pct": 94.8,
          "add_pct": 15.0,
          "net": 1417695967.0
        },
        {
          "sc": "Arena para gato",
          "n": 3381,
          "pct": 9.7,
          "pos_avg": 1.5,
          "anc_pct": 71.1,
          "add_pct": 31.2,
          "net": 139485437.0
        },
        {
          "sc": "Snack y premios",
          "n": 3312,
          "pct": 9.5,
          "pos_avg": 3.4,
          "anc_pct": 33.2,
          "add_pct": 83.3,
          "net": 62935164.0
        },
        {
          "sc": "Antiparasitarios",
          "n": 3093,
          "pct": 8.9,
          "pos_avg": 1.6,
          "anc_pct": 76.0,
          "add_pct": 37.2,
          "net": 94649704.0
        },
        {
          "sc": "Alimento húmedo",
          "n": 2884,
          "pct": 8.3,
          "pos_avg": 3.0,
          "anc_pct": 47.1,
          "add_pct": 76.9,
          "net": 70908332.0
        },
        {
          "sc": "Alimento medicado",
          "n": 1817,
          "pct": 5.2,
          "pos_avg": 1.2,
          "anc_pct": 87.7,
          "add_pct": 15.1,
          "net": 116595734.0
        },
        {
          "sc": "Necesidades especiales",
          "n": 1085,
          "pct": 3.1,
          "pos_avg": 1.3,
          "anc_pct": 82.5,
          "add_pct": 18.6,
          "net": 54978160.0
        },
        {
          "sc": "Camas y mantas",
          "n": 792,
          "pct": 2.3,
          "pos_avg": 1.5,
          "anc_pct": 83.6,
          "add_pct": 32.2,
          "net": 45988788.0
        },
        {
          "sc": "Peluquería e higiene",
          "n": 608,
          "pct": 1.8,
          "pos_avg": 2.7,
          "anc_pct": 38.8,
          "add_pct": 70.4,
          "net": 8871042.0
        },
        {
          "sc": "Farmacia y salud",
          "n": 548,
          "pct": 1.6,
          "pos_avg": 1.8,
          "anc_pct": 65.0,
          "add_pct": 41.4,
          "net": 9835912.0
        },
        {
          "sc": "Sin subcategoría",
          "n": 366,
          "pct": 1.1,
          "pos_avg": 1.5,
          "anc_pct": 71.6,
          "add_pct": 28.6,
          "net": 21823117.0
        },
        {
          "sc": "Collares, arneses y correas",
          "n": 250,
          "pct": 0.7,
          "pos_avg": 2.3,
          "anc_pct": 64.0,
          "add_pct": 57.0,
          "net": 5951189.0
        },
        {
          "sc": "Sabanillas y pañales",
          "n": 236,
          "pct": 0.7,
          "pos_avg": 1.9,
          "anc_pct": 56.8,
          "add_pct": 44.9,
          "net": 8005421.0
        },
        {
          "sc": "Juguetes",
          "n": 233,
          "pct": 0.7,
          "pos_avg": 3.3,
          "anc_pct": 26.6,
          "add_pct": 83.2,
          "net": 2111416.0
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Arena para gato",
        "Snack y premios",
        "Antiparasitarios",
        "Alimento húmedo",
        "Alimento medicado"
      ],
      "cooc_matrix": [
        [
          null,
          4.7,
          7.0,
          2.7,
          5.3,
          1.0
        ],
        [
          32.6,
          null,
          9.5,
          4.1,
          8.4,
          2.5
        ],
        [
          49.1,
          9.7,
          null,
          8.3,
          20.9,
          2.6
        ],
        [
          20.7,
          4.5,
          8.9,
          null,
          5.8,
          1.6
        ],
        [
          42.6,
          9.8,
          24.0,
          6.2,
          null,
          4.6
        ],
        [
          12.2,
          4.7,
          4.8,
          2.7,
          7.3,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 22117,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 1328,
              "pct": 6.0
            },
            {
              "sc": "Alimento húmedo",
              "n": 928,
              "pct": 4.2
            },
            {
              "sc": "Arena para gato",
              "n": 700,
              "pct": 3.2
            },
            {
              "sc": "Antiparasitarios",
              "n": 442,
              "pct": 2.0
            },
            {
              "sc": "Peluquería e higiene",
              "n": 163,
              "pct": 0.7
            },
            {
              "sc": "Necesidades especiales",
              "n": 130,
              "pct": 0.6
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 2403,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 338,
              "pct": 14.1
            },
            {
              "sc": "Snack y premios",
              "n": 160,
              "pct": 6.7
            },
            {
              "sc": "Alimento húmedo",
              "n": 130,
              "pct": 5.4
            },
            {
              "sc": "Antiparasitarios",
              "n": 63,
              "pct": 2.6
            },
            {
              "sc": "Juguetes",
              "n": 31,
              "pct": 1.3
            },
            {
              "sc": "Alimento medicado",
              "n": 31,
              "pct": 1.3
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 2352,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 147,
              "pct": 6.2
            },
            {
              "sc": "Snack y premios",
              "n": 121,
              "pct": 5.1
            },
            {
              "sc": "Alimento húmedo",
              "n": 71,
              "pct": 3.0
            },
            {
              "sc": "Peluquería e higiene",
              "n": 39,
              "pct": 1.7
            },
            {
              "sc": "Arena para gato",
              "n": 33,
              "pct": 1.4
            },
            {
              "sc": "Farmacia y salud",
              "n": 25,
              "pct": 1.1
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 1593,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 92,
              "pct": 5.8
            },
            {
              "sc": "Alimento húmedo",
              "n": 82,
              "pct": 5.1
            },
            {
              "sc": "Snack y premios",
              "n": 59,
              "pct": 3.7
            },
            {
              "sc": "Arena para gato",
              "n": 45,
              "pct": 2.8
            },
            {
              "sc": "Antiparasitarios",
              "n": 31,
              "pct": 1.9
            },
            {
              "sc": "Peluquería e higiene",
              "n": 16,
              "pct": 1.0
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 1359,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 218,
              "pct": 16.0
            },
            {
              "sc": "Alimento seco",
              "n": 195,
              "pct": 14.3
            },
            {
              "sc": "Arena para gato",
              "n": 62,
              "pct": 4.6
            },
            {
              "sc": "Antiparasitarios",
              "n": 45,
              "pct": 3.3
            },
            {
              "sc": "Alimento medicado",
              "n": 24,
              "pct": 1.8
            },
            {
              "sc": "Peluquería e higiene",
              "n": 18,
              "pct": 1.3
            }
          ]
        },
        {
          "anchor": "Snack y premios",
          "n": 1101,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 158,
              "pct": 14.4
            },
            {
              "sc": "Alimento seco",
              "n": 147,
              "pct": 13.4
            },
            {
              "sc": "Arena para gato",
              "n": 36,
              "pct": 3.3
            },
            {
              "sc": "Antiparasitarios",
              "n": 35,
              "pct": 3.2
            },
            {
              "sc": "Peluquería e higiene",
              "n": 29,
              "pct": 2.6
            },
            {
              "sc": "Farmacia y salud",
              "n": 27,
              "pct": 2.5
            }
          ]
        }
      ],
      "hours": [
        610,
        270,
        101,
        68,
        68,
        59,
        156,
        404,
        906,
        1727,
        2356,
        2724,
        2742,
        2536,
        2420,
        2427,
        2312,
        2280,
        2021,
        1921,
        1799,
        1749,
        1694,
        1387
      ],
      "shipping": [
        {
          "method": "Click & Collect",
          "n": 18663,
          "pct": 53.7
        },
        {
          "method": "Santiago",
          "n": 6501,
          "pct": 18.7
        },
        {
          "method": "Programado",
          "n": 5464,
          "pct": 15.7
        },
        {
          "method": "Express",
          "n": 2937,
          "pct": 8.5
        },
        {
          "method": "Valparaiso",
          "n": 194,
          "pct": 0.6
        },
        {
          "method": "Antofagasta",
          "n": 142,
          "pct": 0.4
        },
        {
          "method": "Coquimbo",
          "n": 134,
          "pct": 0.4
        },
        {
          "method": "Bio_Bio",
          "n": 128,
          "pct": 0.4
        }
      ],
      "promos": [
        {
          "id": "PBOMBA",
          "usos": 4528,
          "disc_net": 87286142.0
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 2223,
          "disc_net": 20277299.0
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 2222,
          "disc_net": 16466569.0
        },
        {
          "id": "20%PRODSELEC-WEB",
          "usos": 2039,
          "disc_net": 24577106.0
        },
        {
          "id": "20BRAVERYSECO",
          "usos": 1790,
          "disc_net": 21039630.0
        },
        {
          "id": "4x3SNACKPERMA",
          "usos": 1290,
          "disc_net": 6898556.0
        },
        {
          "id": "2X1ARENASTKPET",
          "usos": 1103,
          "disc_net": 29186158.0
        },
        {
          "id": "20FOOD",
          "usos": 1015,
          "disc_net": 6128570.0
        },
        {
          "id": "15%PRODSELEC-WEB",
          "usos": 988,
          "disc_net": 6650877.0
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 904,
          "disc_net": 11379990.0
        }
      ],
      "coupons": [
        {
          "code": "SINIVA",
          "usos": 1537,
          "disc": 26798093.0,
          "pct": 19.0
        },
        {
          "code": "25ENTODO",
          "usos": 999,
          "disc": 57538295.0,
          "pct": 25.0
        },
        {
          "code": "PRIMERA10",
          "usos": 405,
          "disc": 1887170.0,
          "pct": 10.0
        },
        {
          "code": "533187",
          "usos": 375,
          "disc": 4788710.0,
          "pct": 20.0
        },
        {
          "code": "548742",
          "usos": 315,
          "disc": 4176320.0,
          "pct": 20.0
        },
        {
          "code": "522468",
          "usos": 177,
          "disc": 2713260.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 107,
          "disc": 780286.0,
          "pct": 15.0
        },
        {
          "code": "20ENTODO",
          "usos": 92,
          "disc": 2663448.0,
          "pct": 20.0
        },
        {
          "code": "512269",
          "usos": 78,
          "disc": 1114006.0,
          "pct": 20.0
        },
        {
          "code": "15ENTODO",
          "usos": 42,
          "disc": 716692.0,
          "pct": 15.0
        }
      ],
      "products": [
        {
          "id": "4136",
          "name": "Bravery salmón adult alimento para perro",
          "orders": 1458,
          "qty": 1702.0,
          "net": 105795558.0,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "917",
          "name": "Fit Formula Adulto alimento para perro",
          "orders": 1396,
          "qty": 1805.0,
          "net": 71274321.0,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4132",
          "name": "Bravery Chicken Adult alimento para perro",
          "orders": 1180,
          "qty": 1385.0,
          "net": 81483914.0,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "1066",
          "name": "Fit Formula Gato Adulto alimento para gato",
          "orders": 1167,
          "qty": 1342.0,
          "net": 36075778.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5",
          "name": "Royal Canin adulto Mini Adult alimento para perr",
          "orders": 1001,
          "qty": 1122.0,
          "net": 61275889.0,
          "pos1_pct": 96,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8656",
          "name": "Bravery Lamb Adult Large/Medium Breeds alimento ",
          "orders": 909,
          "qty": 1046.0,
          "net": 64926367.0,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6552",
          "name": "Dogxtreme Adult Salmón y arroz alimento para per",
          "orders": 894,
          "qty": 1217.0,
          "net": 43965342.0,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4985",
          "name": "Bravery Chicken Adult Cat alimento para gato",
          "orders": 853,
          "qty": 978.0,
          "net": 46378250.0,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14816",
          "name": "Nexgard combo l cat 2,5 - 7,5 kg 0.9 ml sol top",
          "orders": 813,
          "qty": 1652.0,
          "net": 23586100.0,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "10077",
          "name": "Arena para gatos Aglomerante",
          "orders": 811,
          "qty": 1796.0,
          "net": 48280828.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4986",
          "name": "Bravery Salmón Adult Cat alimento para gato",
          "orders": 688,
          "qty": 770.0,
          "net": 37327726.0,
          "pos1_pct": 86,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10202",
          "name": "Catxtreme Salmon Esterilizado alimento para gato",
          "orders": 569,
          "qty": 661.0,
          "net": 19435472.0,
          "pos1_pct": 88,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4987",
          "name": "Bravery Salmón Adult Cat Sterilized alimento par",
          "orders": 546,
          "qty": 616.0,
          "net": 32018352.0,
          "pos1_pct": 84,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "50",
          "name": "Royal Canin adulto Indoor alimento para gato",
          "orders": 546,
          "qty": 614.0,
          "net": 37660306.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7205",
          "name": "Salvaje adulto con salmón alimento para perros 1",
          "orders": 509,
          "qty": 788.0,
          "net": 26480740.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4134",
          "name": "Bravery Pork Adult alimento para perro",
          "orders": 443,
          "qty": 521.0,
          "net": 32286311.0,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7204",
          "name": "Salvaje adulto con pollo 15 KG alimento para per",
          "orders": 419,
          "qty": 607.0,
          "net": 20398235.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11577",
          "name": "True Origins Pure alimento seco libre de granos ",
          "orders": 374,
          "qty": 412.0,
          "net": 17307331.0,
          "pos1_pct": 90,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7299",
          "name": "Arena para gatos Aglomerante 10KG",
          "orders": 350,
          "qty": 726.0,
          "net": 13415754.0,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4140",
          "name": "Bravery Chicken Mini Adult alimento para perro",
          "orders": 324,
          "qty": 352.0,
          "net": 15628089.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7392",
          "name": "Bravery Cat Chicken Adult Sterilized alimento pa",
          "orders": 323,
          "qty": 363.0,
          "net": 18240719.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6470",
          "name": "Taste Of The Wild Canyon River Gato alimento par",
          "orders": 320,
          "qty": 358.0,
          "net": 16543180.0,
          "pos1_pct": 85,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16869",
          "name": "Royal Canin adulto Medium Adult alimento para pe",
          "orders": 299,
          "qty": 347.0,
          "net": 21866894.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6556",
          "name": "Dogxtreme Adult pollo y arroz alimento seco para",
          "orders": 288,
          "qty": 356.0,
          "net": 12860856.0,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4130",
          "name": "Bravery Chicken Puppy alimento para perro",
          "orders": 275,
          "qty": 303.0,
          "net": 18844453.0,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11588",
          "name": "True Origins Pure alimento seco libre de granos ",
          "orders": 271,
          "qty": 317.0,
          "net": 17312359.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13372",
          "name": "Ultra Odor Seal arena para gatos aglutinante y c",
          "orders": 245,
          "qty": 422.0,
          "net": 10280457.0,
          "pos1_pct": 66,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "11598",
          "name": "True Origins Wild Cat Adult Country Water alimen",
          "orders": 241,
          "qty": 282.0,
          "net": 11372461.0,
          "pos1_pct": 90,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6472",
          "name": "Taste Of The Wild Rocky Mountain Gato alimento p",
          "orders": 239,
          "qty": 286.0,
          "net": 13216062.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10254",
          "name": "Wellness core cat kitten 1.75 KG alimento para g",
          "orders": 238,
          "qty": 389.0,
          "net": 8822797.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13307",
          "name": "Arena aglomerante natural de bentonita para gato",
          "orders": 217,
          "qty": 460.0,
          "net": 12365908.0,
          "pos1_pct": 71,
          "mascota": "Sin mascota",
          "subcat": "Sin subcategoría",
          "cat": "Sin categoría"
        },
        {
          "id": "5806",
          "name": "Bravery Light Iberian Pork Adult Large/Medium",
          "orders": 216,
          "qty": 257.0,
          "net": 16010411.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "65",
          "name": "Royal Canin Alimento Seco Perro Adulto Hypoaller",
          "orders": 214,
          "qty": 250.0,
          "net": 22056750.0,
          "pos1_pct": 97,
          "mascota": "Perro",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "15599",
          "name": "Arena con carbón activo",
          "orders": 212,
          "qty": 463.0,
          "net": 9333889.0,
          "pos1_pct": 75,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "6565",
          "name": "Dogxtreme Senior Light pollo y arroz alimento pa",
          "orders": 207,
          "qty": 276.0,
          "net": 9970776.0,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "14069",
          "name": "Bravecto Plus de 250 MG para gatos desde 2.8 a 6",
          "orders": 195,
          "qty": 355.0,
          "net": 9543206.0,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "2995",
          "name": "Arena para gatos America Litter Ultra Scooping",
          "orders": 193,
          "qty": 334.0,
          "net": 7856014.0,
          "pos1_pct": 65,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "11584",
          "name": "True Origins Pure alimento seco libre de granos ",
          "orders": 189,
          "qty": 221.0,
          "net": 11141046.0,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "1502",
          "name": "Royal Canin Alimento Seco Gato Adulto Urinary Ca",
          "orders": 187,
          "qty": 215.0,
          "net": 13548651.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "7389",
          "name": "Bravery Dog Salmon Puppy Large/Medium Breeds ali",
          "orders": 181,
          "qty": 198.0,
          "net": 13520115.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "2054",
          "name": "Acana Heritage Free Run Poultry alimento para pe",
          "orders": 172,
          "qty": 217.0,
          "net": 16152831.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "15600",
          "name": "Arena con carbón activo",
          "orders": 166,
          "qty": 333.0,
          "net": 9511479.0,
          "pos1_pct": 70,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "1396",
          "name": "Fit formula senior 20 KG alimento para perro",
          "orders": 164,
          "qty": 219.0,
          "net": 9199794.0,
          "pos1_pct": 80,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4145",
          "name": "Bravery Salmon Mini Adult alimento para perro",
          "orders": 161,
          "qty": 180.0,
          "net": 8741298.0,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14667",
          "name": "Salvaje cat adult esterilizado",
          "orders": 161,
          "qty": 204.0,
          "net": 7198308.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10979",
          "name": "Arena para gatos Sanicat clumping 12 KG",
          "orders": 156,
          "qty": 275.0,
          "net": 3464087.0,
          "pos1_pct": 61,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "3136",
          "name": "Royal Canin Alimento Seco Gato Adulto Urinary S/",
          "orders": 151,
          "qty": 163.0,
          "net": 9997768.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "15598",
          "name": "Arena aglomerante bentonita y lavanda",
          "orders": 151,
          "qty": 298.0,
          "net": 8010956.0,
          "pos1_pct": 74,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "16789",
          "name": "Arena para gatos Aglomerante",
          "orders": 150,
          "qty": 296.0,
          "net": 2484920.0,
          "pos1_pct": 61,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "13365",
          "name": "Oreja de Cerdo Rahue",
          "orders": 149,
          "qty": 397.0,
          "net": 1331137.0,
          "pos1_pct": 27,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "12712",
          "name": "Simparica trio 10.1 - 20 kg antiparasitario para",
          "orders": 148,
          "qty": 167.0,
          "net": 4068302.0,
          "pos1_pct": 62,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "13374",
          "name": "Arena para gatos Clean Pawz 15 KG",
          "orders": 148,
          "qty": 261.0,
          "net": 4603707.0,
          "pos1_pct": 61,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "5965",
          "name": "Churu de atún con salmón 56 GR",
          "orders": 145,
          "qty": 316.0,
          "net": 847116.0,
          "pos1_pct": 15,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "6461",
          "name": "Taste Of The Wild Pacific Stream alimento para p",
          "orders": 142,
          "qty": 163.0,
          "net": 11093615.0,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "1065",
          "name": "Fit Formula Adulto Razas Pequeñas alimento para ",
          "orders": 141,
          "qty": 162.0,
          "net": 3810402.0,
          "pos1_pct": 77,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "9448",
          "name": "Leonardo quality selection ave lata",
          "orders": 138,
          "qty": 435.0,
          "net": 1824076.0,
          "pos1_pct": 35,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "16872",
          "name": "Royal Canin adulto Maxi adulto 5+ alimento para ",
          "orders": 136,
          "qty": 195.0,
          "net": 13107555.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4148",
          "name": "Bravery Chicken Adult Cat alimento para gato",
          "orders": 135,
          "qty": 142.0,
          "net": 2921501.0,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6554",
          "name": "Dogxtreme Puppy pollo y arroz alimento seco para",
          "orders": 135,
          "qty": 172.0,
          "net": 6213672.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6471",
          "name": "Taste Of The Wild Low Land Creek",
          "orders": 134,
          "qty": 151.0,
          "net": 6977710.0,
          "pos1_pct": 78,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5582",
          "name": "Desparasitante Nexgard Spectra 3comp para perros",
          "orders": 129,
          "qty": 147.0,
          "net": 4939935.0,
          "pos1_pct": 67,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "4127",
          "name": "Leonardo lata sabor conejo alimento húmedo para ",
          "orders": 129,
          "qty": 355.0,
          "net": 1488614.0,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "82",
          "name": "Royal Canin Alimento Seco Perro Adulto Hepatic",
          "orders": 125,
          "qty": 145.0,
          "net": 11818082.0,
          "pos1_pct": 95,
          "mascota": "Perro",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "4114",
          "name": "Leonardo Adult Duck alimento para gato",
          "orders": 123,
          "qty": 132.0,
          "net": 8096352.0,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8659",
          "name": "Bravery Lamb Mini Adult Small Breeds alimento pa",
          "orders": 122,
          "qty": 132.0,
          "net": 6331617.0,
          "pos1_pct": 80,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11570",
          "name": "True Origins Pure alimento seco libre de granos ",
          "orders": 121,
          "qty": 140.0,
          "net": 5881138.0,
          "pos1_pct": 85,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "556",
          "name": "Desparasitante Flovovermic",
          "orders": 118,
          "qty": 369.0,
          "net": 462004.0,
          "pos1_pct": 32,
          "mascota": "Sin mascota",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "4123",
          "name": "Leonardo Adult Senior alimento para gato",
          "orders": 118,
          "qty": 131.0,
          "net": 8035017.0,
          "pos1_pct": 85,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "9449",
          "name": "Leonardo quality selection pato lata",
          "orders": 117,
          "qty": 269.0,
          "net": 1127992.0,
          "pos1_pct": 15,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "7203",
          "name": "Salvaje cachorro con pollo 15 KG alimento para p",
          "orders": 116,
          "qty": 154.0,
          "net": 5175170.0,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4143",
          "name": "Bravery Pork Mini Adult alimento para perro",
          "orders": 115,
          "qty": 123.0,
          "net": 5739320.0,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4147",
          "name": "Bravery chicken kitten 2 KG alimento para gato",
          "orders": 114,
          "qty": 133.0,
          "net": 2939238.0,
          "pos1_pct": 67,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5651",
          "name": "Leonardo lata quality selection pescado alimento",
          "orders": 112,
          "qty": 297.0,
          "net": 1245401.0,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "5643",
          "name": "Leonardo lata quality selection ternera alimento",
          "orders": 112,
          "qty": 285.0,
          "net": 1195086.0,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "1689",
          "name": "Fit formula senior razas pequeñas 10 KG alimento",
          "orders": 112,
          "qty": 130.0,
          "net": 3276245.0,
          "pos1_pct": 73,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8258",
          "name": "Naturalistic carnemix sabor cordero con espinaca",
          "orders": 111,
          "qty": 201.0,
          "net": 572602.0,
          "pos1_pct": 16,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "11572",
          "name": "True Origins Pure alimento seco para gatos ester",
          "orders": 110,
          "qty": 125.0,
          "net": 5040986.0,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11903",
          "name": "Catxtreme alimento para gatos adultos esteriliza",
          "orders": 110,
          "qty": 130.0,
          "net": 3822405.0,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "14320",
          "name": "Alimento nomade perro adulto",
          "orders": 109,
          "qty": 141.0,
          "net": 5330772.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4120",
          "name": "Leonardo Adult Light alimento para gato",
          "orders": 108,
          "qty": 118.0,
          "net": 7237648.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5138",
          "name": "Belcando Finest Gf Senior",
          "orders": 108,
          "qty": 115.0,
          "net": 8696530.0,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8163",
          "name": "Revolution Plus Gato 2.5-5.0Kg",
          "orders": 107,
          "qty": 167.0,
          "net": 2664986.0,
          "pos1_pct": 63,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "10245",
          "name": "Wellness core cat original alimento para gatos 4",
          "orders": 107,
          "qty": 118.0,
          "net": 4659476.0,
          "pos1_pct": 84,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16511",
          "name": "Nt cremi box de recetas de mar mix 30 sachet 360",
          "orders": 105,
          "qty": 183.0,
          "net": 1690046.0,
          "pos1_pct": 24,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "4150",
          "name": "Bravery Salmón Adult Cat Sterilized alimento par",
          "orders": 105,
          "qty": 114.0,
          "net": 2565458.0,
          "pos1_pct": 57,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14318",
          "name": "Revolution plus desparasitante tópico para gatos",
          "orders": 104,
          "qty": 174.0,
          "net": 2776692.0,
          "pos1_pct": 62,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "2059",
          "name": "Acana Heritage Freshwater Fish alimento para per",
          "orders": 103,
          "qty": 120.0,
          "net": 9074638.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11716",
          "name": "Dogxtreme Puppy salmón y arroz alimento para per",
          "orders": 102,
          "qty": 122.0,
          "net": 4407372.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4937",
          "name": "Desparasitante Nexgard Spectra 1comp para perros",
          "orders": 101,
          "qty": 126.0,
          "net": 2010708.0,
          "pos1_pct": 69,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "198",
          "name": "Frontline p. gato 0.5 ML",
          "orders": 100,
          "qty": 217.0,
          "net": 1457001.0,
          "pos1_pct": 56,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "6454",
          "name": "Virbac ehliquantel 1 comprimido",
          "orders": 99,
          "qty": 354.0,
          "net": 383738.0,
          "pos1_pct": 40,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "4133",
          "name": "Bravery Chicken Adult alimento para perro",
          "orders": 99,
          "qty": 108.0,
          "net": 2600741.0,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14332",
          "name": "Bravery herring senior cat",
          "orders": 99,
          "qty": 113.0,
          "net": 6076349.0,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7150",
          "name": "Rahue Bully stick snack para perros",
          "orders": 98,
          "qty": 429.0,
          "net": 1690775.0,
          "pos1_pct": 36,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "14881",
          "name": "Churu para gatos variedad de sabores atún 60 tub",
          "orders": 98,
          "qty": 182.0,
          "net": 5657288.0,
          "pos1_pct": 43,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "10225",
          "name": "Wanpy Soft Beef Jerky Slices",
          "orders": 98,
          "qty": 215.0,
          "net": 1082228.0,
          "pos1_pct": 20,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "12710",
          "name": "Simparica trio 5.1 - 10 kg antiparasitario para ",
          "orders": 97,
          "qty": 112.0,
          "net": 2540261.0,
          "pos1_pct": 55,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "15653",
          "name": "Canigest combi probiótico en pasta",
          "orders": 97,
          "qty": 124.0,
          "net": 1562010.0,
          "pos1_pct": 82,
          "mascota": "Perro Y Gato",
          "subcat": "Farmacia y salud",
          "cat": "Farmacia"
        },
        {
          "id": "7092",
          "name": "Mebermic antiparasitario interno de amplio espec",
          "orders": 96,
          "qty": 218.0,
          "net": 364565.0,
          "pos1_pct": 36,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "5809",
          "name": "Bravery Light Iberian Pork Mini Adult Small Bree",
          "orders": 96,
          "qty": 101.0,
          "net": 4783172.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 34737,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 10344,
          "pct": 29.8
        },
        {
          "pos": 3,
          "n": 4353,
          "pct": 12.5
        },
        {
          "pos": 4,
          "n": 2330,
          "pct": 6.7
        },
        {
          "pos": 5,
          "n": 1312,
          "pct": 3.8
        },
        {
          "pos": 6,
          "n": 766,
          "pct": 2.2
        },
        {
          "pos": 7,
          "n": 461,
          "pct": 1.3
        }
      ],
      "promos_all": [
        {
          "id": "PBOMBA",
          "usos": 4528,
          "disc_net": 87286142.0,
          "ppu": 19276.97
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 2223,
          "disc_net": 20277299.0,
          "ppu": 9121.59
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 2222,
          "disc_net": 16466569.0,
          "ppu": 7410.7
        },
        {
          "id": "20%PRODSELEC-WEB",
          "usos": 2039,
          "disc_net": 24577106.0,
          "ppu": 12053.51
        },
        {
          "id": "20BRAVERYSECO",
          "usos": 1790,
          "disc_net": 21039630.0,
          "ppu": 11753.98
        },
        {
          "id": "4x3SNACKPERMA",
          "usos": 1290,
          "disc_net": 6898556.0,
          "ppu": 5347.72
        },
        {
          "id": "2X1ARENASTKPET",
          "usos": 1103,
          "disc_net": 29186158.0,
          "ppu": 26460.71
        },
        {
          "id": "20FOOD",
          "usos": 1015,
          "disc_net": 6128570.0,
          "ppu": 6038.0
        },
        {
          "id": "15%PRODSELEC-WEB",
          "usos": 988,
          "disc_net": 6650877.0,
          "ppu": 6731.66
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 904,
          "disc_net": 11379990.0,
          "ppu": 12588.48
        },
        {
          "id": "20PRODSELEC",
          "usos": 823,
          "disc_net": 5872539.0,
          "ppu": 7135.53
        },
        {
          "id": "30%PRODSELEC-WEB",
          "usos": 789,
          "disc_net": 10141192.0,
          "ppu": 12853.22
        },
        {
          "id": "30ANTIPARA",
          "usos": 785,
          "disc_net": 7051710.0,
          "ppu": 8983.07
        },
        {
          "id": "FIT-PERRO-36990",
          "usos": 741,
          "disc_net": 7562813.0,
          "ppu": 10206.23
        },
        {
          "id": "2X1TKPET",
          "usos": 722,
          "disc_net": 18277091.0,
          "ppu": 25314.53
        },
        {
          "id": "3x2SNACKS",
          "usos": 507,
          "disc_net": 2946141.0,
          "ppu": 5810.93
        },
        {
          "id": "SALVAJE-29990",
          "usos": 486,
          "disc_net": 5487277.0,
          "ppu": 11290.69
        },
        {
          "id": "FIT-PERRO-37990",
          "usos": 463,
          "disc_net": 4084020.0,
          "ppu": 8820.78
        },
        {
          "id": "20FOOD-WEB",
          "usos": 435,
          "disc_net": 2025616.0,
          "ppu": 4656.59
        },
        {
          "id": "2DA30ALIMENSECO",
          "usos": 405,
          "disc_net": 5375516.0,
          "ppu": 13272.88
        },
        {
          "id": "25%PRODSELEC-WEB",
          "usos": 382,
          "disc_net": 4599283.0,
          "ppu": 12040.01
        },
        {
          "id": "FIT-GATO-25990",
          "usos": 355,
          "disc_net": 1971422.0,
          "ppu": 5553.3
        },
        {
          "id": "302DAASECOPERMA",
          "usos": 350,
          "disc_net": 3068433.0,
          "ppu": 8766.95
        },
        {
          "id": "4x3HUM-SNACK",
          "usos": 338,
          "disc_net": 1530309.0,
          "ppu": 4527.54
        },
        {
          "id": "FIT-GATO-24990",
          "usos": 337,
          "disc_net": 2270488.0,
          "ppu": 6737.35
        },
        {
          "id": "4x3-HUMEDO",
          "usos": 325,
          "disc_net": 1911038.0,
          "ppu": 5880.12
        },
        {
          "id": "15FOOD-WEB",
          "usos": 315,
          "disc_net": 2809791.0,
          "ppu": 8919.97
        },
        {
          "id": "2DA40MMPP",
          "usos": 270,
          "disc_net": 3459857.0,
          "ppu": 12814.29
        },
        {
          "id": "15ALIMENTOSECO",
          "usos": 268,
          "disc_net": 2193565.0,
          "ppu": 8184.94
        },
        {
          "id": "BOMBA-BRAV-SALM-59990",
          "usos": 254,
          "disc_net": 3804959.0,
          "ppu": 14980.15
        },
        {
          "id": "30NONFOOD",
          "usos": 249,
          "disc_net": 2484779.0,
          "ppu": 9979.03
        },
        {
          "id": "12BRAVERYSECO",
          "usos": 227,
          "disc_net": 814084.0,
          "ppu": 3586.27
        },
        {
          "id": "5x4HUMSELEC",
          "usos": 210,
          "disc_net": 1208303.0,
          "ppu": 5753.82
        },
        {
          "id": "10M2PERMAN",
          "usos": 206,
          "disc_net": 1233426.0,
          "ppu": 5987.5
        },
        {
          "id": "10FOOD-WEB",
          "usos": 203,
          "disc_net": 1005119.0,
          "ppu": 4951.33
        },
        {
          "id": "5M1PERMA",
          "usos": 201,
          "disc_net": 1076801.0,
          "ppu": 5357.22
        },
        {
          "id": "BOMBA-BRAV-45990",
          "usos": 198,
          "disc_net": 2087388.0,
          "ppu": 10542.36
        },
        {
          "id": "4x3HUME-MMPP",
          "usos": 196,
          "disc_net": 784024.0,
          "ppu": 4000.12
        },
        {
          "id": "5x4PRODSELEC",
          "usos": 189,
          "disc_net": 1013760.0,
          "ppu": 5363.81
        },
        {
          "id": "30NONFOOD-WEB",
          "usos": 186,
          "disc_net": 1733661.0,
          "ppu": 9320.76
        },
        {
          "id": "FIT-GATO-23990",
          "usos": 172,
          "disc_net": 1317688.0,
          "ppu": 7660.98
        },
        {
          "id": "HUM-MMPP",
          "usos": 157,
          "disc_net": 1956810.0,
          "ppu": 12463.76
        },
        {
          "id": "50-VENCEPRONT",
          "usos": 134,
          "disc_net": 2859755.0,
          "ppu": 21341.46
        },
        {
          "id": "25BRAVER-CYB",
          "usos": 134,
          "disc_net": 2207307.0,
          "ppu": 16472.44
        },
        {
          "id": "2x1TOOTOY",
          "usos": 133,
          "disc_net": 867727.0,
          "ppu": 6524.26
        },
        {
          "id": "15PRODSELEC",
          "usos": 132,
          "disc_net": 138229.0,
          "ppu": 1047.19
        },
        {
          "id": "2X1CHURU-CYB",
          "usos": 127,
          "disc_net": 2335365.0,
          "ppu": 18388.7
        },
        {
          "id": "2x1CAMASLEEBY",
          "usos": 120,
          "disc_net": 4346018.0,
          "ppu": 36216.82
        },
        {
          "id": "5x4HUMED",
          "usos": 120,
          "disc_net": 383301.0,
          "ppu": 3194.18
        },
        {
          "id": "FIT-PERRO-34990",
          "usos": 116,
          "disc_net": 1502516.0,
          "ppu": 12952.72
        },
        {
          "id": "2x1CAMAS",
          "usos": 116,
          "disc_net": 4601527.0,
          "ppu": 39668.34
        },
        {
          "id": "30-VENCEPRONT",
          "usos": 112,
          "disc_net": 2055072.0,
          "ppu": 18348.86
        },
        {
          "id": "3x2TKPET",
          "usos": 112,
          "disc_net": 2523416.0,
          "ppu": 22530.5
        },
        {
          "id": "25FUNCIONARIO-MC",
          "usos": 106,
          "disc_net": 752628.0,
          "ppu": 7100.26
        },
        {
          "id": "2x1LEEBY",
          "usos": 101,
          "disc_net": 3794940.0,
          "ppu": 37573.66
        },
        {
          "id": "2DA40ALIMEN",
          "usos": 90,
          "disc_net": 1210754.0,
          "ppu": 13452.82
        },
        {
          "id": "3X2JUGUETES",
          "usos": 90,
          "disc_net": 529458.0,
          "ppu": 5882.87
        },
        {
          "id": "15FOOD",
          "usos": 85,
          "disc_net": 220202.0,
          "ppu": 2590.61
        },
        {
          "id": "BOMBA-BRAV-PORK-59990",
          "usos": 81,
          "disc_net": 1102491.0,
          "ppu": 13611.0
        },
        {
          "id": "2X1SNACKS",
          "usos": 78,
          "disc_net": 611459.0,
          "ppu": 7839.22
        },
        {
          "id": "LIQUI-TRUE",
          "usos": 78,
          "disc_net": 3115431.0,
          "ppu": 39941.42
        },
        {
          "id": "2x1PAÑASABA",
          "usos": 77,
          "disc_net": 1638789.0,
          "ppu": 21282.97
        },
        {
          "id": "3x2KIT-BELL",
          "usos": 76,
          "disc_net": 322008.0,
          "ppu": 4236.95
        },
        {
          "id": "RAHUE2490",
          "usos": 71,
          "disc_net": 147504.0,
          "ppu": 2077.52
        },
        {
          "id": "2DA50COLLAR",
          "usos": 70,
          "disc_net": 310610.0,
          "ppu": 4437.29
        },
        {
          "id": "2x1HUMSELEC",
          "usos": 70,
          "disc_net": 562603.0,
          "ppu": 8037.19
        },
        {
          "id": "30PRODSEL-CYB",
          "usos": 66,
          "disc_net": 806963.0,
          "ppu": 12226.71
        },
        {
          "id": "302DA-ARENAS",
          "usos": 57,
          "disc_net": 265557.0,
          "ppu": 4658.89
        },
        {
          "id": "2DA40PRODSELEC-ALIM",
          "usos": 55,
          "disc_net": 303663.0,
          "ppu": 5521.15
        },
        {
          "id": "3x2CHURU",
          "usos": 55,
          "disc_net": 509207.0,
          "ppu": 9258.31
        },
        {
          "id": "30CAMAS",
          "usos": 54,
          "disc_net": 720108.0,
          "ppu": 13335.33
        },
        {
          "id": "TRUE-3LATAS-GT",
          "usos": 54,
          "disc_net": 90656.0,
          "ppu": 1678.81
        },
        {
          "id": "25FOOD",
          "usos": 53,
          "disc_net": 47696.0,
          "ppu": 899.92
        },
        {
          "id": "502DA-PAÑALES",
          "usos": 52,
          "disc_net": 414475.0,
          "ppu": 7970.67
        },
        {
          "id": "3x2AMERICALIT",
          "usos": 51,
          "disc_net": 1167627.0,
          "ppu": 22894.65
        },
        {
          "id": "3x2JUGUE-SELEC",
          "usos": 50,
          "disc_net": 313006.0,
          "ppu": 6260.12
        },
        {
          "id": "2X1HUM-WEB",
          "usos": 47,
          "disc_net": 474297.0,
          "ppu": 10091.43
        },
        {
          "id": "70% LIQUIDACION",
          "usos": 42,
          "disc_net": 1527969.0,
          "ppu": 36380.21
        },
        {
          "id": "SALVAJE-ESTERIL-34990",
          "usos": 41,
          "disc_net": 241162.0,
          "ppu": 5882.0
        },
        {
          "id": "30PRODSELEC",
          "usos": 40,
          "disc_net": 296353.0,
          "ppu": 7408.82
        },
        {
          "id": "3x2TOOTOY",
          "usos": 39,
          "disc_net": 193790.0,
          "ppu": 4968.97
        },
        {
          "id": "30WELLNESS",
          "usos": 37,
          "disc_net": 528044.0,
          "ppu": 14271.46
        },
        {
          "id": "RAHUE1990",
          "usos": 37,
          "disc_net": 138737.0,
          "ppu": 3749.65
        },
        {
          "id": "4x3HUMSNACK-CYB",
          "usos": 37,
          "disc_net": 218169.0,
          "ppu": 5896.46
        },
        {
          "id": "3x2HIGIENE",
          "usos": 36,
          "disc_net": 162690.0,
          "ppu": 4519.17
        },
        {
          "id": "3x2NICECARE",
          "usos": 35,
          "disc_net": 434984.0,
          "ppu": 12428.11
        },
        {
          "id": "2x1ARENAS-CYB",
          "usos": 35,
          "disc_net": 972768.0,
          "ppu": 27793.37
        },
        {
          "id": "2x1JUGUE-GT",
          "usos": 33,
          "disc_net": 148289.0,
          "ppu": 4493.61
        },
        {
          "id": "2DA40OUTECH",
          "usos": 32,
          "disc_net": 231823.0,
          "ppu": 7244.47
        },
        {
          "id": "DESAFIO-ANTIPAR",
          "usos": 31,
          "disc_net": 125936.0,
          "ppu": 4062.45
        },
        {
          "id": "2X1COLLCOPECH",
          "usos": 30,
          "disc_net": 286305.0,
          "ppu": 9543.5
        },
        {
          "id": "402DAPLATOS",
          "usos": 30,
          "disc_net": 115515.0,
          "ppu": 3850.5
        },
        {
          "id": "3x2ARENASLITTER",
          "usos": 29,
          "disc_net": 690509.0,
          "ppu": 23810.66
        },
        {
          "id": "50% LIQUIDACION",
          "usos": 29,
          "disc_net": 341462.0,
          "ppu": 11774.55
        },
        {
          "id": "20PRODSEL-CYB",
          "usos": 29,
          "disc_net": 329857.0,
          "ppu": 11374.38
        },
        {
          "id": "25PRODSELEC",
          "usos": 28,
          "disc_net": 384606.0,
          "ppu": 13735.93
        },
        {
          "id": "30FUNCIONARIO-MP",
          "usos": 27,
          "disc_net": 270714.0,
          "ppu": 10026.44
        },
        {
          "id": "NATH-49990",
          "usos": 27,
          "disc_net": 357984.0,
          "ppu": 13258.67
        },
        {
          "id": "70LIQUI-CYB",
          "usos": 26,
          "disc_net": 264344.0,
          "ppu": 10167.08
        },
        {
          "id": "TRUE-2LATAS-PR",
          "usos": 25,
          "disc_net": 90612.0,
          "ppu": 3624.48
        },
        {
          "id": "402DATKPET",
          "usos": 24,
          "disc_net": 177408.0,
          "ppu": 7392.0
        },
        {
          "id": "25PRODSEL-CYB",
          "usos": 24,
          "disc_net": 131674.0,
          "ppu": 5486.42
        },
        {
          "id": "FIT-AREN-SANI",
          "usos": 23,
          "disc_net": 147052.0,
          "ppu": 6393.57
        },
        {
          "id": "4x3HUMED",
          "usos": 23,
          "disc_net": 193791.0,
          "ppu": 8425.7
        },
        {
          "id": "20ACCVIAJES",
          "usos": 21,
          "disc_net": 244502.0,
          "ppu": 11642.95
        },
        {
          "id": "LIQUI-ROYAL",
          "usos": 21,
          "disc_net": 1445373.0,
          "ppu": 68827.29
        },
        {
          "id": "20NATHWEB",
          "usos": 19,
          "disc_net": 258827.0,
          "ppu": 13622.47
        },
        {
          "id": "4X3FITFORM",
          "usos": 16,
          "disc_net": 70086.0,
          "ppu": 4380.38
        },
        {
          "id": "DOGX-29990",
          "usos": 16,
          "disc_net": 262182.0,
          "ppu": 16386.38
        },
        {
          "id": "H-30COOLPETS",
          "usos": 15,
          "disc_net": 173106.0,
          "ppu": 11540.4
        },
        {
          "id": "24LAT-30DCTO-CYB",
          "usos": 14,
          "disc_net": 110698.0,
          "ppu": 7907.0
        },
        {
          "id": "10MMPP-ENTEL",
          "usos": 13,
          "disc_net": 35117.0,
          "ppu": 2701.31
        },
        {
          "id": "2DA40ALIM-CYB",
          "usos": 12,
          "disc_net": 140463.0,
          "ppu": 11705.25
        },
        {
          "id": "3x2SNACKSELEC",
          "usos": 11,
          "disc_net": 54488.0,
          "ppu": 4953.45
        },
        {
          "id": "24990CATX-GT-CYB",
          "usos": 11,
          "disc_net": 134453.0,
          "ppu": 12223.0
        },
        {
          "id": "4x3HUMEDO",
          "usos": 10,
          "disc_net": 61545.0,
          "ppu": 6154.5
        },
        {
          "id": "3x2PAÑALES",
          "usos": 10,
          "disc_net": 195714.0,
          "ppu": 19571.4
        },
        {
          "id": "PBOMBA-CY",
          "usos": 10,
          "disc_net": 185037.0,
          "ppu": 18503.7
        },
        {
          "id": "402DANICECARE",
          "usos": 9,
          "disc_net": 27867.0,
          "ppu": 3096.33
        },
        {
          "id": "DESAFIO-ALIMENT",
          "usos": 9,
          "disc_net": 47572.0,
          "ppu": 5285.78
        },
        {
          "id": "2DA30OUTECH",
          "usos": 9,
          "disc_net": 48632.0,
          "ppu": 5403.56
        },
        {
          "id": "2x1TOOTOY-CYB",
          "usos": 9,
          "disc_net": 62108.0,
          "ppu": 6900.89
        },
        {
          "id": "2DA40COLLAR",
          "usos": 8,
          "disc_net": 43334.0,
          "ppu": 5416.75
        },
        {
          "id": "402DARASCAD",
          "usos": 8,
          "disc_net": 35267.0,
          "ppu": 4408.38
        },
        {
          "id": "30% LIQUIDACION",
          "usos": 8,
          "disc_net": 184754.0,
          "ppu": 23094.25
        },
        {
          "id": "DOGX39990",
          "usos": 8,
          "disc_net": 20168.0,
          "ppu": 2521.0
        },
        {
          "id": "2DA30ALIM-CYB",
          "usos": 8,
          "disc_net": 80399.0,
          "ppu": 10049.88
        },
        {
          "id": "2x1PRODSELEC",
          "usos": 7,
          "disc_net": 58740.0,
          "ppu": 8391.43
        },
        {
          "id": "402DANATURES",
          "usos": 7,
          "disc_net": 43336.0,
          "ppu": 6190.86
        },
        {
          "id": "25NONFOOD-WEB",
          "usos": 7,
          "disc_net": 35910.0,
          "ppu": 5130.0
        },
        {
          "id": "2DA50ARENAS-CYB",
          "usos": 7,
          "disc_net": 77689.0,
          "ppu": 11098.43
        },
        {
          "id": "2x1CAMAS-CYB",
          "usos": 7,
          "disc_net": 262965.0,
          "ppu": 37566.43
        },
        {
          "id": "2x1PLABEMPETS",
          "usos": 6,
          "disc_net": 98262.0,
          "ppu": 16377.0
        },
        {
          "id": "5x4HUMED-WEB",
          "usos": 6,
          "disc_net": 31520.0,
          "ppu": 5253.33
        },
        {
          "id": "NICECARE-2990",
          "usos": 5,
          "disc_net": 10085.0,
          "ppu": 2017.0
        },
        {
          "id": "402DAJUGSELEC",
          "usos": 5,
          "disc_net": 21161.0,
          "ppu": 4232.2
        },
        {
          "id": "2DA40SKOUT",
          "usos": 5,
          "disc_net": 34605.0,
          "ppu": 6921.0
        },
        {
          "id": "2x1HIGIENE-CYB",
          "usos": 5,
          "disc_net": 31051.0,
          "ppu": 6210.2
        },
        {
          "id": "ROYAL-URINAR-CYB",
          "usos": 5,
          "disc_net": 84035.0,
          "ppu": 16807.0
        },
        {
          "id": "2x1DOGZILLA",
          "usos": 4,
          "disc_net": 33546.0,
          "ppu": 8386.5
        },
        {
          "id": "H30-COOL",
          "usos": 4,
          "disc_net": 36974.0,
          "ppu": 9243.5
        },
        {
          "id": "302DANICECARE",
          "usos": 4,
          "disc_net": 14107.0,
          "ppu": 3526.75
        },
        {
          "id": "TRUE2490",
          "usos": 4,
          "disc_net": 8824.0,
          "ppu": 2206.0
        },
        {
          "id": "DESAFIO-SNACKS",
          "usos": 4,
          "disc_net": 2749.0,
          "ppu": 687.25
        },
        {
          "id": "502DAPLATOS",
          "usos": 4,
          "disc_net": 23512.0,
          "ppu": 5878.0
        },
        {
          "id": "402DAJUGUE",
          "usos": 4,
          "disc_net": 15113.0,
          "ppu": 3778.25
        },
        {
          "id": "TRUE19990",
          "usos": 3,
          "disc_net": 12606.0,
          "ppu": 4202.0
        },
        {
          "id": "302DASKOUT",
          "usos": 3,
          "disc_net": 15876.0,
          "ppu": 5292.0
        },
        {
          "id": "402DAMYZOO",
          "usos": 3,
          "disc_net": 9738.0,
          "ppu": 3246.0
        },
        {
          "id": "FIT-AREN-MICRO",
          "usos": 3,
          "disc_net": 23529.0,
          "ppu": 7843.0
        },
        {
          "id": "2DA40EZYDOG",
          "usos": 3,
          "disc_net": 45031.0,
          "ppu": 15010.33
        },
        {
          "id": "TRUEP20V2",
          "usos": 3,
          "disc_net": 9908.0,
          "ppu": 3302.67
        },
        {
          "id": "2x1CORREAS-CYB",
          "usos": 3,
          "disc_net": 16782.0,
          "ppu": 5594.0
        },
        {
          "id": "20ALIMSELEC-CYB",
          "usos": 3,
          "disc_net": 24196.0,
          "ppu": 8065.33
        },
        {
          "id": "2x1PAÑALES-CYB",
          "usos": 3,
          "disc_net": 56277.0,
          "ppu": 18759.0
        },
        {
          "id": "29990SALV-PR-CYB",
          "usos": 3,
          "disc_net": 33613.0,
          "ppu": 11204.33
        },
        {
          "id": "DOGXTR18KG-34990",
          "usos": 3,
          "disc_net": 33613.0,
          "ppu": 11204.33
        },
        {
          "id": "25PRODSELEC-CYB",
          "usos": 3,
          "disc_net": 33818.0,
          "ppu": 11272.67
        },
        {
          "id": "2DA50JUGUET",
          "usos": 2,
          "disc_net": 7975.0,
          "ppu": 3987.5
        },
        {
          "id": "CUNATEX-7990",
          "usos": 2,
          "disc_net": 5042.0,
          "ppu": 2521.0
        },
        {
          "id": "2DA50ECODOG",
          "usos": 2,
          "disc_net": 10495.0,
          "ppu": 5247.5
        },
        {
          "id": "70-VENCEPRONT",
          "usos": 2,
          "disc_net": 40571.0,
          "ppu": 20285.5
        },
        {
          "id": "2DA30MASCAN",
          "usos": 2,
          "disc_net": 4028.0,
          "ppu": 2014.0
        },
        {
          "id": "4x3HUMHILLS",
          "usos": 2,
          "disc_net": 8722.0,
          "ppu": 4361.0
        },
        {
          "id": "2DA30SKOUT",
          "usos": 2,
          "disc_net": 9827.0,
          "ppu": 4913.5
        },
        {
          "id": "DESAFIO-COLLARES",
          "usos": 2,
          "disc_net": 6297.0,
          "ppu": 3148.5
        },
        {
          "id": "H40CASAS-CYB",
          "usos": 2,
          "disc_net": 50420.0,
          "ppu": 25210.0
        },
        {
          "id": "2x1PRODSELEC-CYB",
          "usos": 2,
          "disc_net": 7538.0,
          "ppu": 3769.0
        },
        {
          "id": "25NONFOOD",
          "usos": 1,
          "disc_net": 3990.0,
          "ppu": 3990.0
        },
        {
          "id": "402DAHIGIEN",
          "usos": 1,
          "disc_net": 10750.0,
          "ppu": 10750.0
        },
        {
          "id": "BLOQUEAD-6990",
          "usos": 1,
          "disc_net": 2521.0,
          "ppu": 2521.0
        },
        {
          "id": "302DAMYZOO",
          "usos": 1,
          "disc_net": 4533.0,
          "ppu": 4533.0
        },
        {
          "id": "DESAFIO-CAMAS",
          "usos": 1,
          "disc_net": 1176.0,
          "ppu": 1176.0
        },
        {
          "id": "NATHP20V2",
          "usos": 1,
          "disc_net": 3864.0,
          "ppu": 3864.0
        },
        {
          "id": "3x2CREMI-CYB",
          "usos": 1,
          "disc_net": 2092.0,
          "ppu": 2092.0
        },
        {
          "id": "3x2NICECARE-CYB",
          "usos": 1,
          "disc_net": 9235.0,
          "ppu": 9235.0
        },
        {
          "id": "2DA50PELUQ-CYB",
          "usos": 1,
          "disc_net": 3777.0,
          "ppu": 3777.0
        },
        {
          "id": "2x1HUMCATX-CYB",
          "usos": 1,
          "disc_net": 3345.0,
          "ppu": 3345.0
        },
        {
          "id": "2DA50PLATO-CYB",
          "usos": 1,
          "disc_net": 3777.0,
          "ppu": 3777.0
        }
      ],
      "coupons_all": [
        {
          "code": "SINIVA",
          "usos": 1537,
          "disc": 26798093.0,
          "pct": 19.0
        },
        {
          "code": "25ENTODO",
          "usos": 999,
          "disc": 57538295.0,
          "pct": 25.0
        },
        {
          "code": "PRIMERA10",
          "usos": 405,
          "disc": 1887170.0,
          "pct": 10.0
        },
        {
          "code": "533187",
          "usos": 375,
          "disc": 4788710.0,
          "pct": 20.0
        },
        {
          "code": "548742",
          "usos": 315,
          "disc": 4176320.0,
          "pct": 20.0
        },
        {
          "code": "522468",
          "usos": 177,
          "disc": 2713260.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 107,
          "disc": 780286.0,
          "pct": 15.0
        },
        {
          "code": "20ENTODO",
          "usos": 92,
          "disc": 2663448.0,
          "pct": 20.0
        },
        {
          "code": "512269",
          "usos": 78,
          "disc": 1114006.0,
          "pct": 20.0
        },
        {
          "code": "15ENTODO",
          "usos": 42,
          "disc": 716692.0,
          "pct": 15.0
        },
        {
          "code": "AJUSTECSC",
          "usos": 6,
          "disc": 215645.0,
          "pct": 37.9
        },
        {
          "code": "10ENTODO",
          "usos": 5,
          "disc": 40489.0,
          "pct": 10.0
        },
        {
          "code": "CENW15UNGX2C",
          "usos": 2,
          "disc": 30000.0,
          "pct": 60.4
        },
        {
          "code": "SZ30-PGTM9YV6",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.6
        },
        {
          "code": "WCUM-WHT1-PE7G",
          "usos": 1,
          "disc": 3600.0,
          "pct": 6.8
        },
        {
          "code": "ENTNJ0P4F1",
          "usos": 1,
          "disc": 33236.0,
          "pct": 20.0
        },
        {
          "code": "ENTNR6NUPW",
          "usos": 1,
          "disc": 1398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-62FU-LTDE",
          "usos": 1,
          "disc": 6999.0,
          "pct": 5.0
        },
        {
          "code": "SZ30-F1720W2Y",
          "usos": 1,
          "disc": 30000.0,
          "pct": 48.3
        },
        {
          "code": "ENTNX0HMS4",
          "usos": 1,
          "disc": 17998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-16YE-5I2B",
          "usos": 1,
          "disc": 3199.0,
          "pct": 5.0
        },
        {
          "code": "ENTNNF3SOJ",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-A4UC5RMI",
          "usos": 1,
          "disc": 15000.0,
          "pct": 62.6
        },
        {
          "code": "ENTNM4P7Q2",
          "usos": 1,
          "disc": 7794.0,
          "pct": 20.0
        },
        {
          "code": "ENTN8EVB0S",
          "usos": 1,
          "disc": 9798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNZIG5DJ",
          "usos": 1,
          "disc": 17796.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-U260-L3YK",
          "usos": 1,
          "disc": 5398.0,
          "pct": 2.3
        },
        {
          "code": "WCUM-ZIRA-XK71",
          "usos": 1,
          "disc": 2198.0,
          "pct": 6.7
        },
        {
          "code": "ENTNABJ8UN",
          "usos": 1,
          "disc": 4194.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-S8G7I7FC",
          "usos": 1,
          "disc": 30000.0,
          "pct": 71.4
        },
        {
          "code": "ENTNSR6LGI",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-XT0U-9GWH",
          "usos": 1,
          "disc": 4299.0,
          "pct": 2.6
        },
        {
          "code": "ENTNF1FAD1",
          "usos": 1,
          "disc": 3998.0,
          "pct": 20.0
        },
        {
          "code": "CENW15LWG1EK",
          "usos": 1,
          "disc": 15000.0,
          "pct": 34.1
        },
        {
          "code": "SZ30-Y4GXZGEW",
          "usos": 1,
          "disc": 30000.0,
          "pct": 75.0
        },
        {
          "code": "CENW1541J0OA",
          "usos": 1,
          "disc": 15000.0,
          "pct": 40.6
        },
        {
          "code": "WCUM-JM4O-ADBZ",
          "usos": 1,
          "disc": 3199.0,
          "pct": 5.0
        },
        {
          "code": "SZ20-XK4ZJW86",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "SZ20-Y4HV34PN",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.7
        },
        {
          "code": "ENTNMT6R95",
          "usos": 1,
          "disc": 1996.0,
          "pct": 20.0
        },
        {
          "code": "ENTNQXOKY4",
          "usos": 1,
          "disc": 16596.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-PCY3-WJV4",
          "usos": 1,
          "disc": 8598.0,
          "pct": 5.0
        },
        {
          "code": "ENTN48X7II",
          "usos": 1,
          "disc": 11476.0,
          "pct": 20.0
        },
        {
          "code": "ENTNJ2K51K",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNT6OBRV",
          "usos": 1,
          "disc": 8798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-L2SY-LGQ9",
          "usos": 1,
          "disc": 8398.0,
          "pct": 5.4
        },
        {
          "code": "ENTNMLGKZ3",
          "usos": 1,
          "disc": 2598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-Q50I-03R7",
          "usos": 1,
          "disc": 1674.0,
          "pct": 7.5
        },
        {
          "code": "SZ10-H92UD12F",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "WCUM-LSKX-0PKX",
          "usos": 1,
          "disc": 9998.0,
          "pct": 5.0
        },
        {
          "code": "SZ30-KQXL06DM",
          "usos": 1,
          "disc": 30000.0,
          "pct": 40.0
        },
        {
          "code": "ENTNWY78G5",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNLG9HO0",
          "usos": 1,
          "disc": 16198.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-5ZUBSFYJ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 62.7
        },
        {
          "code": "ENTN9VIALT",
          "usos": 1,
          "disc": 14192.0,
          "pct": 20.0
        },
        {
          "code": "ENTN3GA3WK",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-A9Y06JOK",
          "usos": 1,
          "disc": 15000.0,
          "pct": 28.3
        },
        {
          "code": "ENTNFM6WZK",
          "usos": 1,
          "disc": 10598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-7VRK-HQI6",
          "usos": 1,
          "disc": 11999.0,
          "pct": 10.0
        },
        {
          "code": "SZ15-BQGOMWK8",
          "usos": 1,
          "disc": 15000.0,
          "pct": 19.7
        },
        {
          "code": "ENTN73HZ4F",
          "usos": 1,
          "disc": 18796.0,
          "pct": 20.0
        },
        {
          "code": "ENTNTSV90D",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTN9NFH0K",
          "usos": 1,
          "disc": 9194.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-24TA-IYGP",
          "usos": 1,
          "disc": 1297.0,
          "pct": 8.1
        },
        {
          "code": "ENTNDML1VU",
          "usos": 1,
          "disc": 16396.0,
          "pct": 20.0
        },
        {
          "code": "ENTNTEI0A7",
          "usos": 1,
          "disc": 6998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNXXE0Q1",
          "usos": 1,
          "disc": 5998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-2YUQGNFK",
          "usos": 1,
          "disc": 30000.0,
          "pct": 29.4
        },
        {
          "code": "SZ30-9739UL1M",
          "usos": 1,
          "disc": 30000.0,
          "pct": 55.6
        },
        {
          "code": "SZ30-QE3ERFMN",
          "usos": 1,
          "disc": 30000.0,
          "pct": 51.8
        },
        {
          "code": "WCUM-T2QW-HBNR",
          "usos": 1,
          "disc": 469.0,
          "pct": 1.3
        },
        {
          "code": "SZ20-TT4JCPSN",
          "usos": 1,
          "disc": 20000.0,
          "pct": 34.5
        },
        {
          "code": "ENTN28B32J",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-KAX6KRMQ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 33.3
        },
        {
          "code": "ENTNXKI7PV",
          "usos": 1,
          "disc": 2596.0,
          "pct": 20.0
        },
        {
          "code": "CENW15T6SWD0",
          "usos": 1,
          "disc": 15000.0,
          "pct": 45.4
        },
        {
          "code": "ENTNOAYDA7",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-XZM3-GRVV",
          "usos": 1,
          "disc": 8999.0,
          "pct": 10.0
        },
        {
          "code": "ENTN4YFXKM",
          "usos": 1,
          "disc": 14196.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-XYJXCKVX",
          "usos": 1,
          "disc": 30000.0,
          "pct": 51.3
        },
        {
          "code": "ENTNKQP1KJ",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNL5EGC6",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-LHSU7N8H",
          "usos": 1,
          "disc": 10000.0,
          "pct": 54.5
        },
        {
          "code": "WCUM-6ESZ-VPE6",
          "usos": 1,
          "disc": 897.0,
          "pct": 1.2
        },
        {
          "code": "ENTNDZLSE1",
          "usos": 1,
          "disc": 12998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNLPM1GY",
          "usos": 1,
          "disc": 23998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-NU97-BBR6",
          "usos": 1,
          "disc": 1199.0,
          "pct": 1.5
        },
        {
          "code": "SZ20-LJJFPTRU",
          "usos": 1,
          "disc": 20000.0,
          "pct": 66.7
        },
        {
          "code": "ENTN7GUJMG",
          "usos": 1,
          "disc": 2598.0,
          "pct": 20.0
        },
        {
          "code": "ENTN8PGFOX",
          "usos": 1,
          "disc": 7888.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-HH749IKG",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "SZ15-1A3SZCOK",
          "usos": 1,
          "disc": 15000.0,
          "pct": 57.7
        },
        {
          "code": "ENTNS08F50",
          "usos": 1,
          "disc": 16398.0,
          "pct": 20.0
        },
        {
          "code": "ENTN4Y65PG",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNMWS5O3",
          "usos": 1,
          "disc": 3796.0,
          "pct": 20.0
        },
        {
          "code": "ENTN5F4IP9",
          "usos": 1,
          "disc": 1398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNL3QP4Y",
          "usos": 1,
          "disc": 6398.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-M7HK6Y0M",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.9
        },
        {
          "code": "SZ10-2YK455ZN",
          "usos": 1,
          "disc": 10000.0,
          "pct": 32.3
        },
        {
          "code": "ENTN70TMU4",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "SZ-VNOIOI3M",
          "usos": 1,
          "disc": 18998.0,
          "pct": 25.0
        },
        {
          "code": "ENTND5RFHM",
          "usos": 1,
          "disc": 14996.0,
          "pct": 20.0
        },
        {
          "code": "ENTN78TVDH",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "SZ-XXSCNRKG",
          "usos": 1,
          "disc": 13497.0,
          "pct": 30.0
        },
        {
          "code": "WCUM-OWNM-F8FS",
          "usos": 1,
          "disc": 3999.0,
          "pct": 10.0
        },
        {
          "code": "ENTNWZVC1P",
          "usos": 1,
          "disc": 1196.0,
          "pct": 20.0
        },
        {
          "code": "ENTNUDRN19",
          "usos": 1,
          "disc": 6598.0,
          "pct": 20.0
        },
        {
          "code": "ENTN5FIGEW",
          "usos": 1,
          "disc": 20998.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-VI82KON1",
          "usos": 1,
          "disc": 20000.0,
          "pct": 32.6
        },
        {
          "code": "SZ10-OVBWSG0S",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "409767",
          "usos": 1,
          "disc": 10388.0,
          "pct": 20.0
        },
        {
          "code": "ENTNMEOT52",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-YVU8UD7X",
          "usos": 1,
          "disc": 15000.0,
          "pct": 20.3
        },
        {
          "code": "ENTNWVW22K",
          "usos": 1,
          "disc": 7602.0,
          "pct": 20.0
        },
        {
          "code": "ENTNFI5C0O",
          "usos": 1,
          "disc": 6572.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-PGOOEUXE",
          "usos": 1,
          "disc": 10000.0,
          "pct": 62.7
        },
        {
          "code": "ENTN3NET95",
          "usos": 1,
          "disc": 4998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-V3419HNL",
          "usos": 1,
          "disc": 30000.0,
          "pct": 42.9
        },
        {
          "code": "SZ20-MUO3LHWB",
          "usos": 1,
          "disc": 20000.0,
          "pct": 23.8
        },
        {
          "code": "ENTNAZJRG8",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNJK2X95",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN2IH63K",
          "usos": 1,
          "disc": 17396.0,
          "pct": 20.0
        },
        {
          "code": "ENTN9HDQ2B",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-O6LGVY1N",
          "usos": 1,
          "disc": 10000.0,
          "pct": 22.7
        },
        {
          "code": "ENTN1NABES",
          "usos": 1,
          "disc": 7586.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-ES62-P856",
          "usos": 1,
          "disc": 5097.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-AOUE-SXR4",
          "usos": 1,
          "disc": 6398.0,
          "pct": 6.7
        },
        {
          "code": "SZ10-CN17GINS",
          "usos": 1,
          "disc": 10000.0,
          "pct": 45.5
        },
        {
          "code": "WCUM-FBJ7-12YF",
          "usos": 1,
          "disc": 3297.0,
          "pct": 7.5
        },
        {
          "code": "ENTNG624ZX",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-R79T-HRG5",
          "usos": 1,
          "disc": 1499.0,
          "pct": 10.0
        },
        {
          "code": "SZ10-517EKQIN",
          "usos": 1,
          "disc": 10000.0,
          "pct": 34.5
        },
        {
          "code": "ENTNDI8Q2J",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNIBZY1M",
          "usos": 1,
          "disc": 5998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-W3QG-9DQB",
          "usos": 1,
          "disc": 13592.0,
          "pct": 9.6
        },
        {
          "code": "ENTN3O6682",
          "usos": 1,
          "disc": 8398.0,
          "pct": 20.0
        },
        {
          "code": "ENTN2U0J4V",
          "usos": 1,
          "disc": 16598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNQBYP5W",
          "usos": 1,
          "disc": 17198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNE0L7WY",
          "usos": 1,
          "disc": 12990.0,
          "pct": 20.0
        },
        {
          "code": "ENTNNUH8KV",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNA5TCI8",
          "usos": 1,
          "disc": 13398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNYTS5T1",
          "usos": 1,
          "disc": 25596.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-ITH5VLPT",
          "usos": 1,
          "disc": 10000.0,
          "pct": 27.8
        },
        {
          "code": "WCUM-ZDB8-M9HF",
          "usos": 1,
          "disc": 5499.0,
          "pct": 10.0
        },
        {
          "code": "SZ20-MEV1HFAW",
          "usos": 1,
          "disc": 20000.0,
          "pct": 60.7
        },
        {
          "code": "ENTNM1ZWFN",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTN2ZU505",
          "usos": 1,
          "disc": 19998.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-GTVLNE5E",
          "usos": 1,
          "disc": 20000.0,
          "pct": 34.5
        },
        {
          "code": "ENTNR2UOMO",
          "usos": 1,
          "disc": 1598.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-MRFNEWP8",
          "usos": 1,
          "disc": 15000.0,
          "pct": 30.6
        },
        {
          "code": "SZ20-B1V3OJ6S",
          "usos": 1,
          "disc": 20000.0,
          "pct": 34.5
        },
        {
          "code": "WCUM-PJ01-4VPJ",
          "usos": 1,
          "disc": 10446.0,
          "pct": 5.9
        },
        {
          "code": "ENTNH3ZQOD",
          "usos": 1,
          "disc": 16596.0,
          "pct": 20.0
        },
        {
          "code": "CENW15RNT5ZL",
          "usos": 1,
          "disc": 15000.0,
          "pct": 57.7
        },
        {
          "code": "SZ30-LCX4DOJN",
          "usos": 1,
          "disc": 30000.0,
          "pct": 41.1
        },
        {
          "code": "ENTN2R72CB",
          "usos": 1,
          "disc": 21988.0,
          "pct": 20.0
        },
        {
          "code": "ENTNCXRP9D",
          "usos": 1,
          "disc": 9598.0,
          "pct": 20.0
        },
        {
          "code": "CENW15HHT1WH",
          "usos": 1,
          "disc": 15000.0,
          "pct": 38.5
        },
        {
          "code": "SZ30-X1A7L71P",
          "usos": 1,
          "disc": 30000.0,
          "pct": 50.9
        },
        {
          "code": "SZ30-9RCFAHHR",
          "usos": 1,
          "disc": 30000.0,
          "pct": 39.5
        },
        {
          "code": "ENTNG1EOLR",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-E6ZE-2SR7",
          "usos": 1,
          "disc": 11197.0,
          "pct": 5.8
        },
        {
          "code": "SZ10-VZSHXGUS",
          "usos": 1,
          "disc": 10000.0,
          "pct": 46.5
        },
        {
          "code": "ENTNQWN5AU",
          "usos": 1,
          "disc": 12398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNU1M5ZD",
          "usos": 1,
          "disc": 13598.0,
          "pct": 20.0
        },
        {
          "code": "ENTN93O4OI",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "ENTN32UF7X",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-SE3GJV7W",
          "usos": 1,
          "disc": 15000.0,
          "pct": 55.6
        },
        {
          "code": "SZ15-LZT1L1S5",
          "usos": 1,
          "disc": 15000.0,
          "pct": 60.0
        },
        {
          "code": "ENTN2PIGUG",
          "usos": 1,
          "disc": 12798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNOVOU1R",
          "usos": 1,
          "disc": 4398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNS5SYGX",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNQEFA4G",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNW3ZI53",
          "usos": 1,
          "disc": 20468.0,
          "pct": 20.0
        },
        {
          "code": "ENTN0PDMBD",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "CENW15FN6EKZ",
          "usos": 1,
          "disc": 15000.0,
          "pct": 48.4
        },
        {
          "code": "CENW15VCLHK0",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.1
        },
        {
          "code": "SZ15-WGARKVI8",
          "usos": 1,
          "disc": 15000.0,
          "pct": 46.9
        },
        {
          "code": "CENW15Y9X978",
          "usos": 1,
          "disc": 15000.0,
          "pct": 53.6
        },
        {
          "code": "SZ10-FDDJLOQ2",
          "usos": 1,
          "disc": 10000.0,
          "pct": 34.5
        },
        {
          "code": "SZ15-V16IHUAD",
          "usos": 1,
          "disc": 15000.0,
          "pct": 23.4
        },
        {
          "code": "SZ10-9RYF2CDO",
          "usos": 1,
          "disc": 10000.0,
          "pct": 20.8
        },
        {
          "code": "SZ-HPCFIRFH",
          "usos": 1,
          "disc": 21890.0,
          "pct": 25.0
        },
        {
          "code": "ENTNWLDT2G",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-4HA8-N6H2",
          "usos": 1,
          "disc": 2999.0,
          "pct": 10.0
        },
        {
          "code": "ENTNBZRSG9",
          "usos": 1,
          "disc": 4998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNNMHO2G",
          "usos": 1,
          "disc": 6598.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-OSIPNZ1S",
          "usos": 1,
          "disc": 15000.0,
          "pct": 65.2
        },
        {
          "code": "ENTN4SXLKY",
          "usos": 1,
          "disc": 5398.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-1P0A6EQU",
          "usos": 1,
          "disc": 30000.0,
          "pct": 63.1
        },
        {
          "code": "WCUM-WC0T-EKPB",
          "usos": 1,
          "disc": 3199.0,
          "pct": 5.0
        },
        {
          "code": "ENTN91I7RF",
          "usos": 1,
          "disc": 4048.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-44YK59Q5",
          "usos": 1,
          "disc": 20000.0,
          "pct": 71.5
        },
        {
          "code": "SZ10-GKX5ZAEM",
          "usos": 1,
          "disc": 10000.0,
          "pct": 50.0
        },
        {
          "code": "ENTNFPW321",
          "usos": 1,
          "disc": 3194.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-8G02K33Z",
          "usos": 1,
          "disc": 10000.0,
          "pct": 62.5
        },
        {
          "code": "WCUM-D38J-EQDL",
          "usos": 1,
          "disc": 5899.0,
          "pct": 10.0
        },
        {
          "code": "ENTNO723MU",
          "usos": 1,
          "disc": 9998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN1AE7AA",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNTINW5H",
          "usos": 1,
          "disc": 23196.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-8MNZ-MDO1",
          "usos": 1,
          "disc": 6798.0,
          "pct": 4.8
        },
        {
          "code": "ENTN66K5GO",
          "usos": 1,
          "disc": 16598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNAWAX1M",
          "usos": 1,
          "disc": 6398.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-BQM01VEG",
          "usos": 1,
          "disc": 10000.0,
          "pct": 45.5
        },
        {
          "code": "ENTNHV9ICG",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-7FB8-0BQO",
          "usos": 1,
          "disc": 5299.0,
          "pct": 5.0
        },
        {
          "code": "ENTNT0ZTRG",
          "usos": 1,
          "disc": 9198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-5NXD-J086",
          "usos": 1,
          "disc": 596.0,
          "pct": 10.0
        },
        {
          "code": "ENTNX4VF8G",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-UDZ7WK1Q",
          "usos": 1,
          "disc": 15000.0,
          "pct": 25.9
        },
        {
          "code": "ENTNGDVV3B",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-M6J8-DN9J",
          "usos": 1,
          "disc": 1834.0,
          "pct": 5.9
        },
        {
          "code": "WCUM-N5GB-3RSQ",
          "usos": 1,
          "disc": 2399.0,
          "pct": 10.0
        },
        {
          "code": "SZ15-9EED21VH",
          "usos": 1,
          "disc": 15000.0,
          "pct": 48.4
        },
        {
          "code": "WCUM-E6XC-FKAY",
          "usos": 1,
          "disc": 5097.0,
          "pct": 10.0
        },
        {
          "code": "SZ20-Y7BUW0N8",
          "usos": 1,
          "disc": 20000.0,
          "pct": 69.0
        },
        {
          "code": "WCUM-TUJS-D4I7",
          "usos": 1,
          "disc": 3828.0,
          "pct": 7.5
        },
        {
          "code": "SZ10-DZB8G4HM",
          "usos": 1,
          "disc": 10000.0,
          "pct": 40.0
        },
        {
          "code": "WCUM-9XNS-S2AS",
          "usos": 1,
          "disc": 2461.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-7H8K-9RFR",
          "usos": 1,
          "disc": 838.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-R2RP-4MLD",
          "usos": 1,
          "disc": 5799.0,
          "pct": 10.0
        },
        {
          "code": "ENTNJ288Q8",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "ENTN6R1FN6",
          "usos": 1,
          "disc": 11398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-VAD7-TTUO",
          "usos": 1,
          "disc": 2899.0,
          "pct": 10.0
        },
        {
          "code": "SZ10-ZZFR9HVS",
          "usos": 1,
          "disc": 10000.0,
          "pct": 17.2
        },
        {
          "code": "WCUM-7M7P-LIQ4",
          "usos": 1,
          "disc": 7299.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-E6B7-6ZAU",
          "usos": 1,
          "disc": 2397.0,
          "pct": 10.0
        },
        {
          "code": "SZ10-NAKO3RCB",
          "usos": 1,
          "disc": 10000.0,
          "pct": 55.6
        },
        {
          "code": "ENTNMRI224",
          "usos": 1,
          "disc": 12798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-MQ8G-TPQZ",
          "usos": 1,
          "disc": 3199.0,
          "pct": 6.2
        },
        {
          "code": "SZ20-0F0RL33D",
          "usos": 1,
          "disc": 20000.0,
          "pct": 54.1
        },
        {
          "code": "ENTNWCN7SV",
          "usos": 1,
          "disc": 16198.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-T1C3FQI0",
          "usos": 1,
          "disc": 30000.0,
          "pct": 50.0
        },
        {
          "code": "ENTNUOADL0",
          "usos": 1,
          "disc": 16996.0,
          "pct": 20.0
        },
        {
          "code": "ENTNAX5NDD",
          "usos": 1,
          "disc": 6798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNKUA3SB",
          "usos": 1,
          "disc": 998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN1JIMRE",
          "usos": 1,
          "disc": 2198.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-FMVYAZWG",
          "usos": 1,
          "disc": 20000.0,
          "pct": 71.9
        },
        {
          "code": "SZ10-G9GNKL0E",
          "usos": 1,
          "disc": 10000.0,
          "pct": 34.5
        },
        {
          "code": "ENTND9FFWH",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNEB7G31",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-Q3AH4SL4",
          "usos": 1,
          "disc": 15000.0,
          "pct": 46.9
        },
        {
          "code": "ENTNN7L08V",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNOO52B1",
          "usos": 1,
          "disc": 5198.0,
          "pct": 20.0
        },
        {
          "code": "ENTN2KNHTK",
          "usos": 1,
          "disc": 7596.0,
          "pct": 20.0
        },
        {
          "code": "ENTNN3ZJX9",
          "usos": 1,
          "disc": 11398.0,
          "pct": 20.0
        },
        {
          "code": "ENTN7710GG",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "ENTN13WP53",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-M8W8-HZKT",
          "usos": 1,
          "disc": 1598.0,
          "pct": 2.9
        },
        {
          "code": "SZ30-HAG82YD8",
          "usos": 1,
          "disc": 30000.0,
          "pct": 63.4
        },
        {
          "code": "ENTNN2NORL",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "VUELVE10",
          "usos": 1,
          "disc": 4199.0,
          "pct": 10.0
        },
        {
          "code": "ENTN93TPK5",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-04PJ-6LNW",
          "usos": 1,
          "disc": 2799.0,
          "pct": 4.7
        },
        {
          "code": "SZ30-G31B0U9K",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.6
        },
        {
          "code": "ENTN1GJOBM",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-V85LHIKN",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.8
        },
        {
          "code": "SZ20-6M87GZTT",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "ENTN562EDX",
          "usos": 1,
          "disc": 13798.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-N6V15YCO",
          "usos": 1,
          "disc": 20000.0,
          "pct": 71.5
        },
        {
          "code": "WCUM-LIVZ-TE38",
          "usos": 1,
          "disc": 10155.0,
          "pct": 7.6
        },
        {
          "code": "ENTNG24BR6",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-XN0Z-63HA",
          "usos": 1,
          "disc": 3298.0,
          "pct": 5.2
        },
        {
          "code": "SZ-IZXLICRK",
          "usos": 1,
          "disc": 61764.0,
          "pct": 30.0
        },
        {
          "code": "WCUM-4CVW-PTM0",
          "usos": 1,
          "disc": 3297.0,
          "pct": 4.5
        },
        {
          "code": "ENTNX1W9LS",
          "usos": 1,
          "disc": 15996.0,
          "pct": 20.0
        },
        {
          "code": "ENTNN5CPE8",
          "usos": 1,
          "disc": 14382.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-IM0TO42H",
          "usos": 1,
          "disc": 15000.0,
          "pct": 71.8
        },
        {
          "code": "ENTN3T5HIV",
          "usos": 1,
          "disc": 6998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNG7MYXJ",
          "usos": 1,
          "disc": 1998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNKDLHV0",
          "usos": 1,
          "disc": 2998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-VJ8I0IWB",
          "usos": 1,
          "disc": 30000.0,
          "pct": 77.8
        },
        {
          "code": "WCUM-RL99-A9GF",
          "usos": 1,
          "disc": 4999.0,
          "pct": 4.4
        },
        {
          "code": "SZ20-AH2C708L",
          "usos": 1,
          "disc": 20000.0,
          "pct": 26.3
        },
        {
          "code": "ENTN56WR5E",
          "usos": 1,
          "disc": 4398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-YS6F-KVZD",
          "usos": 1,
          "disc": 1198.0,
          "pct": 10.0
        },
        {
          "code": "ENTN93A8K2",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNA3D2GM",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN8IQJPE",
          "usos": 1,
          "disc": 4798.0,
          "pct": 20.0
        },
        {
          "code": "ENTN34F89Q",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-1EP8-EZNN",
          "usos": 1,
          "disc": 1428.0,
          "pct": 10.0
        },
        {
          "code": "ENTN0K5RX7",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNBM17BR",
          "usos": 1,
          "disc": 6798.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-ZAW1PQZA",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.4
        },
        {
          "code": "ENTN82K89Z",
          "usos": 1,
          "disc": 16398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNKDA5Z7",
          "usos": 1,
          "disc": 14396.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-43B2-G2HX",
          "usos": 1,
          "disc": 9196.0,
          "pct": 5.0
        },
        {
          "code": "ENTNZ1OKYC",
          "usos": 1,
          "disc": 6798.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-A5KEUVDQ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 41.7
        },
        {
          "code": "ENTNIJ3UNS",
          "usos": 1,
          "disc": 4998.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-3WZ91WLG",
          "usos": 1,
          "disc": 20000.0,
          "pct": 31.3
        },
        {
          "code": "WCUM-WPNS-10RT",
          "usos": 1,
          "disc": 7499.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-W4RR-ES12",
          "usos": 1,
          "disc": 5988.0,
          "pct": 4.1
        },
        {
          "code": "ENTNC5G9GN",
          "usos": 1,
          "disc": 21996.0,
          "pct": 20.0
        },
        {
          "code": "ENTNC92ABJ",
          "usos": 1,
          "disc": 7592.0,
          "pct": 20.0
        },
        {
          "code": "ENTNSB4LMB",
          "usos": 1,
          "disc": 17998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-6V8P-9RV7",
          "usos": 1,
          "disc": 3199.0,
          "pct": 2.9
        },
        {
          "code": "WCUM-4417-WZIN",
          "usos": 1,
          "disc": 2899.0,
          "pct": 2.0
        },
        {
          "code": "WCUM-AGQS-0UCZ",
          "usos": 1,
          "disc": 3297.0,
          "pct": 7.5
        },
        {
          "code": "SZ15-A4QSRWHI",
          "usos": 1,
          "disc": 15000.0,
          "pct": 30.6
        },
        {
          "code": "ENTNL7GA5Y",
          "usos": 1,
          "disc": 21996.0,
          "pct": 20.0
        },
        {
          "code": "ENTNHK3YWF",
          "usos": 1,
          "disc": 15398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNP5FFO4",
          "usos": 1,
          "disc": 6598.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-R7L1T5JL",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.3
        },
        {
          "code": "ENTN6IF9FY",
          "usos": 1,
          "disc": 16798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNV8FU8Q",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-2CRY-EL8X",
          "usos": 1,
          "disc": 998.0,
          "pct": 1.8
        },
        {
          "code": "ENTNIGQ3DP",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-XCWYVQJO",
          "usos": 1,
          "disc": 15000.0,
          "pct": 33.3
        },
        {
          "code": "SZ30-VOEQPZQE",
          "usos": 1,
          "disc": 30000.0,
          "pct": 41.1
        },
        {
          "code": "ENTN3KDB13",
          "usos": 1,
          "disc": 6398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNWV0IOM",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNRDX5ZX",
          "usos": 1,
          "disc": 5598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-ZXLC-E5UG",
          "usos": 1,
          "disc": 10554.0,
          "pct": 8.4
        },
        {
          "code": "WCUM-CABL-VP89",
          "usos": 1,
          "disc": 3196.0,
          "pct": 8.0
        },
        {
          "code": "WCUM-KRLD-6BM5",
          "usos": 1,
          "disc": 3999.0,
          "pct": 5.0
        },
        {
          "code": "ENTNEOL8AS",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNN4XJI7",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "ENTND9RY03",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNZ4RF61",
          "usos": 1,
          "disc": 3272.0,
          "pct": 20.0
        },
        {
          "code": "ENTNTMORQ2",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-XGZ3GEDK",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.9
        },
        {
          "code": "ENTN301T96",
          "usos": 1,
          "disc": 4798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNK337MM",
          "usos": 1,
          "disc": 15996.0,
          "pct": 20.0
        },
        {
          "code": "ENTN193R63",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-ZZQG7FPK",
          "usos": 1,
          "disc": 15000.0,
          "pct": 23.2
        },
        {
          "code": "SZ30-SK5S4AFN",
          "usos": 1,
          "disc": 30000.0,
          "pct": 48.4
        },
        {
          "code": "WCUM-A8RH-A5B0",
          "usos": 1,
          "disc": 3634.0,
          "pct": 4.1
        },
        {
          "code": "ENTNHQGYX0",
          "usos": 1,
          "disc": 4196.0,
          "pct": 20.0
        },
        {
          "code": "ENTNMGV929",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNPK5GRA",
          "usos": 1,
          "disc": 13596.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-K5XLLYIG",
          "usos": 1,
          "disc": 15000.0,
          "pct": 68.5
        },
        {
          "code": "ENTNOCB6ET",
          "usos": 1,
          "disc": 12398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-8E4Q-D4GE",
          "usos": 1,
          "disc": 3069.0,
          "pct": 8.5
        },
        {
          "code": "ENTN8ILCNH",
          "usos": 1,
          "disc": 7196.0,
          "pct": 20.0
        },
        {
          "code": "ENTN6PY2QW",
          "usos": 1,
          "disc": 12396.0,
          "pct": 20.0
        },
        {
          "code": "ENTN025B2E",
          "usos": 1,
          "disc": 13598.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-YI0T79VV",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.8
        },
        {
          "code": "CENW156UIYGV",
          "usos": 1,
          "disc": 15000.0,
          "pct": 29.5
        },
        {
          "code": "ENTN3RPHGU",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "ENTN68PDJC",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNG925TO",
          "usos": 1,
          "disc": 4798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNP99JUW",
          "usos": 1,
          "disc": 2196.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-65XO-MK8I",
          "usos": 1,
          "disc": 3999.0,
          "pct": 10.0
        },
        {
          "code": "ENTNA3C1VS",
          "usos": 1,
          "disc": 14998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNDOGN04",
          "usos": 1,
          "disc": 1998.0,
          "pct": 20.0
        },
        {
          "code": "CENW102P1IN6",
          "usos": 1,
          "disc": 10000.0,
          "pct": 17.2
        },
        {
          "code": "SZ15-S48WFDV0",
          "usos": 1,
          "disc": 15000.0,
          "pct": 26.8
        },
        {
          "code": "ENTN1S2NEW",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-JZGLEOQ0",
          "usos": 1,
          "disc": 15000.0,
          "pct": 27.3
        },
        {
          "code": "SZ30-IJC8II3A",
          "usos": 1,
          "disc": 30000.0,
          "pct": 34.5
        },
        {
          "code": "ENTNPGS4EN",
          "usos": 1,
          "disc": 5398.0,
          "pct": 20.0
        },
        {
          "code": "ENTN4EWH33",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNF9DV6S",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNKSM1WT",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-IFQB-II7C",
          "usos": 1,
          "disc": 9599.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-BRI1-6E5V",
          "usos": 1,
          "disc": 5999.0,
          "pct": 10.0
        },
        {
          "code": "ENTNBU9BX9",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNET6CQL",
          "usos": 1,
          "disc": 7198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNI5TQ5X",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-D6DO-5P8X",
          "usos": 1,
          "disc": 10499.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-G5DT-QQYO",
          "usos": 1,
          "disc": 4299.0,
          "pct": 10.0
        },
        {
          "code": "SZ30-Y0983U2B",
          "usos": 1,
          "disc": 30000.0,
          "pct": 39.5
        },
        {
          "code": "WCUM-W1EI-2GLE",
          "usos": 1,
          "disc": 3438.0,
          "pct": 9.1
        },
        {
          "code": "ENTNN0ZRTX",
          "usos": 1,
          "disc": 6998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN4Z219A",
          "usos": 1,
          "disc": 12398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNK4S62I",
          "usos": 1,
          "disc": 638.0,
          "pct": 20.0
        },
        {
          "code": "ENTNVGCSZ0",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTN5WV4YN",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNNFFFS5",
          "usos": 1,
          "disc": 39188.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-IIMUWGSV",
          "usos": 1,
          "disc": 20000.0,
          "pct": 26.3
        },
        {
          "code": "ENTNYYQXF2",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNG4XOLQ",
          "usos": 1,
          "disc": 21192.0,
          "pct": 20.0
        },
        {
          "code": "ENTNN36DNY",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-VI29-RWDU",
          "usos": 1,
          "disc": 1017.0,
          "pct": 1.1
        },
        {
          "code": "SZ20-RJ9A7BP3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 34.5
        },
        {
          "code": "WCUM-SQM1-EHVS",
          "usos": 1,
          "disc": 897.0,
          "pct": 1.0
        },
        {
          "code": "ENTNB87UAJ",
          "usos": 1,
          "disc": 12798.0,
          "pct": 20.0
        },
        {
          "code": "ENTN9AM9IW",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-0T42-1RNI",
          "usos": 1,
          "disc": 5456.0,
          "pct": 9.3
        },
        {
          "code": "ENTNDGGY6I",
          "usos": 1,
          "disc": 12798.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-2ZU47LDG",
          "usos": 1,
          "disc": 10000.0,
          "pct": 45.5
        },
        {
          "code": "ENTN66WRV5",
          "usos": 1,
          "disc": 6588.0,
          "pct": 20.0
        },
        {
          "code": "ENTNYG7TRY",
          "usos": 1,
          "disc": 2454.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-HL10-A236",
          "usos": 1,
          "disc": 4799.0,
          "pct": 3.7
        },
        {
          "code": "SZ10-WA7EQ27M",
          "usos": 1,
          "disc": 10000.0,
          "pct": 16.7
        },
        {
          "code": "ENTNUE051P",
          "usos": 1,
          "disc": 16598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-2OIU-RRV3",
          "usos": 1,
          "disc": 5706.0,
          "pct": 4.3
        },
        {
          "code": "SZ10-PJMZI72B",
          "usos": 1,
          "disc": 10000.0,
          "pct": 31.3
        },
        {
          "code": "WCUM-XEAS-ZFA4",
          "usos": 1,
          "disc": 6079.0,
          "pct": 8.0
        },
        {
          "code": "ENTNYVEZ5A",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNULCYW6",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNKQV77L",
          "usos": 1,
          "disc": 12398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-3HRS-5JYV",
          "usos": 1,
          "disc": 3518.0,
          "pct": 8.0
        },
        {
          "code": "SZ15-23IF91Q3",
          "usos": 1,
          "disc": 15000.0,
          "pct": 39.6
        },
        {
          "code": "WCUM-FB31-MLET",
          "usos": 1,
          "disc": 5839.0,
          "pct": 8.0
        },
        {
          "code": "VUELVE15",
          "usos": 1,
          "disc": 11549.0,
          "pct": 15.0
        },
        {
          "code": "WCUM-74LM-9RG1",
          "usos": 1,
          "disc": 987.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-PE6L-PWS8",
          "usos": 1,
          "disc": 1599.0,
          "pct": 6.7
        },
        {
          "code": "CENW156AJL0R",
          "usos": 1,
          "disc": 15000.0,
          "pct": 65.2
        },
        {
          "code": "WCUM-ASU3-65N5",
          "usos": 1,
          "disc": 4999.0,
          "pct": 6.7
        },
        {
          "code": "SZ15-XWHTPWCM",
          "usos": 1,
          "disc": 15000.0,
          "pct": 68.2
        },
        {
          "code": "SZ20-OKG38KF7",
          "usos": 1,
          "disc": 20000.0,
          "pct": 34.5
        },
        {
          "code": "WCUM-HC0F-LKEI",
          "usos": 1,
          "disc": 7998.0,
          "pct": 6.9
        },
        {
          "code": "WCUM-A5IR-D9OT",
          "usos": 1,
          "disc": 3477.0,
          "pct": 5.8
        },
        {
          "code": "WCUM-D6LV-T4NQ",
          "usos": 1,
          "disc": 4798.0,
          "pct": 5.6
        },
        {
          "code": "ENTNNVY1EY",
          "usos": 1,
          "disc": 2998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-GUM94UB9",
          "usos": 1,
          "disc": 30000.0,
          "pct": 62.6
        },
        {
          "code": "ENTNQ8S164",
          "usos": 1,
          "disc": 3816.0,
          "pct": 20.0
        },
        {
          "code": "ENTNF8P8VY",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-IX3Z-88TR",
          "usos": 1,
          "disc": 3799.0,
          "pct": 8.1
        },
        {
          "code": "SZ15-QTE2W1MO",
          "usos": 1,
          "disc": 15000.0,
          "pct": 55.6
        },
        {
          "code": "SZ10-PKGWUNIF",
          "usos": 1,
          "disc": 10000.0,
          "pct": 51.1
        },
        {
          "code": "WCUM-7871-62M2",
          "usos": 1,
          "disc": 12408.0,
          "pct": 8.5
        },
        {
          "code": "ENTN31GZUR",
          "usos": 1,
          "disc": 10796.0,
          "pct": 20.0
        },
        {
          "code": "ENTNUVRAZ5",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-RCNA-2I8I",
          "usos": 1,
          "disc": 4198.0,
          "pct": 8.2
        },
        {
          "code": "ENTNXQDQT7",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-JLLG-9KZN",
          "usos": 1,
          "disc": 3033.0,
          "pct": 8.7
        },
        {
          "code": "ENTNULOEW1",
          "usos": 1,
          "disc": 598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-86NI-15KL",
          "usos": 1,
          "disc": 6878.0,
          "pct": 8.0
        },
        {
          "code": "WCUM-I1KU-CJY8",
          "usos": 1,
          "disc": 3678.0,
          "pct": 8.0
        },
        {
          "code": "SZ20-5J66PLQC",
          "usos": 1,
          "disc": 20000.0,
          "pct": 26.3
        },
        {
          "code": "SZ20-G0JAWWL9",
          "usos": 1,
          "disc": 20000.0,
          "pct": 23.8
        },
        {
          "code": "ENTN16BTMY",
          "usos": 1,
          "disc": 12798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNBEP089",
          "usos": 1,
          "disc": 9998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-ZJE3-S0LP",
          "usos": 1,
          "disc": 6234.0,
          "pct": 8.3
        },
        {
          "code": "WCUM-KST2-1ACF",
          "usos": 1,
          "disc": 10398.0,
          "pct": 8.0
        },
        {
          "code": "ENTNDOJ6WS",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-CAOK-WUE6",
          "usos": 1,
          "disc": 6998.0,
          "pct": 7.0
        },
        {
          "code": "SZ20-GQQKKOJF",
          "usos": 1,
          "disc": 20000.0,
          "pct": 66.9
        },
        {
          "code": "ENTNJWCK0S",
          "usos": 1,
          "disc": 11398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-HINR-R9ZX",
          "usos": 1,
          "disc": 3908.0,
          "pct": 8.5
        },
        {
          "code": "WCUM-B29K-EC4N",
          "usos": 1,
          "disc": 6398.0,
          "pct": 8.1
        },
        {
          "code": "ENTNNRN2CP",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-7UI9H41J",
          "usos": 1,
          "disc": 15000.0,
          "pct": 42.9
        },
        {
          "code": "WCUM-CR4F-KNOZ",
          "usos": 1,
          "disc": 3429.0,
          "pct": 7.0
        },
        {
          "code": "ENTNZ9YYVE",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-7BIR-Q59A",
          "usos": 1,
          "disc": 2599.0,
          "pct": 8.1
        },
        {
          "code": "WCUM-H9LM-ZLXV",
          "usos": 1,
          "disc": 2893.0,
          "pct": 6.4
        },
        {
          "code": "WCUM-OGGC-U49K",
          "usos": 1,
          "disc": 10878.0,
          "pct": 8.5
        },
        {
          "code": "ENTNWODDJ6",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "ENTN4JUGMW",
          "usos": 1,
          "disc": 998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN4HPGP0",
          "usos": 1,
          "disc": 12398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-5Q59-E8Y7",
          "usos": 1,
          "disc": 5255.0,
          "pct": 7.2
        },
        {
          "code": "SZ20-K8MND108",
          "usos": 1,
          "disc": 20000.0,
          "pct": 75.0
        },
        {
          "code": "WCUM-ZE8U-JH7W",
          "usos": 1,
          "disc": 6079.0,
          "pct": 8.0
        },
        {
          "code": "ENTN0TWK3A",
          "usos": 1,
          "disc": 12798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-AGY0-ZZG8",
          "usos": 1,
          "disc": 1299.0,
          "pct": 10.0
        },
        {
          "code": "ENTNRUME20",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-AJRFN7BH",
          "usos": 1,
          "disc": 10000.0,
          "pct": 50.0
        },
        {
          "code": "SZ20-NX5M6EJN",
          "usos": 1,
          "disc": 20000.0,
          "pct": 33.9
        },
        {
          "code": "SZ10-5BV4ADQR",
          "usos": 1,
          "disc": 10000.0,
          "pct": 34.5
        }
      ],
      "shipping_detail": [
        {
          "method": "Click & Collect",
          "n": 18663,
          "pct": 53.7,
          "net": 1024131950.0,
          "ticket": 54874.99,
          "avg_items": 1.4
        },
        {
          "method": "Santiago",
          "n": 6501,
          "pct": 18.7,
          "net": 449346207.0,
          "ticket": 69119.55,
          "avg_items": 1.9
        },
        {
          "method": "Programado",
          "n": 5464,
          "pct": 15.7,
          "net": 392337170.0,
          "ticket": 71804.02,
          "avg_items": 1.9
        },
        {
          "method": "Express",
          "n": 2937,
          "pct": 8.5,
          "net": 162976623.0,
          "ticket": 55490.85,
          "avg_items": 1.8
        },
        {
          "method": "Valparaiso",
          "n": 194,
          "pct": 0.6,
          "net": 12600878.0,
          "ticket": 64952.98,
          "avg_items": 1.2
        },
        {
          "method": "Antofagasta",
          "n": 142,
          "pct": 0.4,
          "net": 10143274.0,
          "ticket": 71431.51,
          "avg_items": 1.2
        },
        {
          "method": "Coquimbo",
          "n": 134,
          "pct": 0.4,
          "net": 8771771.0,
          "ticket": 65460.98,
          "avg_items": 1.5
        },
        {
          "method": "Bio_Bio",
          "n": 128,
          "pct": 0.4,
          "net": 8297531.0,
          "ticket": 64824.46,
          "avg_items": 1.2
        }
      ],
      "daily": [
        {
          "date": "2026-05-01",
          "orders": 1165,
          "net": 54694063.0,
          "discount": 0.0,
          "ticket": 46947.69
        },
        {
          "date": "2026-05-02",
          "orders": 2042,
          "net": 90502149.0,
          "discount": 0.0,
          "ticket": 44320.35
        },
        {
          "date": "2026-05-03",
          "orders": 1642,
          "net": 72936919.0,
          "discount": 0.0,
          "ticket": 44419.56
        },
        {
          "date": "2026-05-04",
          "orders": 1310,
          "net": 54079546.0,
          "discount": 0.0,
          "ticket": 41282.1
        },
        {
          "date": "2026-05-05",
          "orders": 1159,
          "net": 57347886.0,
          "discount": 0.0,
          "ticket": 49480.49
        },
        {
          "date": "2026-05-06",
          "orders": 1186,
          "net": 59661856.0,
          "discount": 0.0,
          "ticket": 50305.11
        },
        {
          "date": "2026-05-07",
          "orders": 1150,
          "net": 59247015.0,
          "discount": 0.0,
          "ticket": 51519.14
        },
        {
          "date": "2026-05-08",
          "orders": 1192,
          "net": 51400192.0,
          "discount": 0.0,
          "ticket": 43120.97
        },
        {
          "date": "2026-05-09",
          "orders": 901,
          "net": 36152538.0,
          "discount": 0.0,
          "ticket": 40124.9
        },
        {
          "date": "2026-05-10",
          "orders": 733,
          "net": 29976373.0,
          "discount": 0.0,
          "ticket": 40895.46
        },
        {
          "date": "2026-05-11",
          "orders": 1169,
          "net": 53767611.0,
          "discount": 0.0,
          "ticket": 45994.53
        },
        {
          "date": "2026-05-12",
          "orders": 1046,
          "net": 49357438.0,
          "discount": 0.0,
          "ticket": 47186.84
        },
        {
          "date": "2026-05-13",
          "orders": 1025,
          "net": 48352368.0,
          "discount": 0.0,
          "ticket": 47173.04
        },
        {
          "date": "2026-05-14",
          "orders": 1004,
          "net": 45667386.0,
          "discount": 0.0,
          "ticket": 45485.44
        },
        {
          "date": "2026-05-15",
          "orders": 1332,
          "net": 60965625.0,
          "discount": 0.0,
          "ticket": 45769.99
        },
        {
          "date": "2026-05-16",
          "orders": 985,
          "net": 47929715.0,
          "discount": 0.0,
          "ticket": 48659.61
        },
        {
          "date": "2026-05-17",
          "orders": 992,
          "net": 48152451.0,
          "discount": 0.0,
          "ticket": 48540.78
        },
        {
          "date": "2026-05-18",
          "orders": 909,
          "net": 38551502.0,
          "discount": 0.0,
          "ticket": 42410.89
        },
        {
          "date": "2026-05-19",
          "orders": 879,
          "net": 42183871.0,
          "discount": 0.0,
          "ticket": 47990.75
        },
        {
          "date": "2026-05-20",
          "orders": 892,
          "net": 44544800.0,
          "discount": 0.0,
          "ticket": 49938.12
        },
        {
          "date": "2026-05-21",
          "orders": 930,
          "net": 46790443.0,
          "discount": 0.0,
          "ticket": 50312.3
        },
        {
          "date": "2026-05-22",
          "orders": 1107,
          "net": 51145852.0,
          "discount": 0.0,
          "ticket": 46202.21
        },
        {
          "date": "2026-05-23",
          "orders": 910,
          "net": 42040959.0,
          "discount": 0.0,
          "ticket": 46198.86
        },
        {
          "date": "2026-05-24",
          "orders": 891,
          "net": 40452711.0,
          "discount": 0.0,
          "ticket": 45401.47
        },
        {
          "date": "2026-05-25",
          "orders": 1038,
          "net": 54334761.0,
          "discount": 0.0,
          "ticket": 52345.63
        },
        {
          "date": "2026-05-26",
          "orders": 958,
          "net": 51623275.0,
          "discount": 0.0,
          "ticket": 53886.51
        },
        {
          "date": "2026-05-27",
          "orders": 922,
          "net": 50663650.0,
          "discount": 0.0,
          "ticket": 54949.73
        },
        {
          "date": "2026-05-28",
          "orders": 996,
          "net": 49539579.0,
          "discount": 0.0,
          "ticket": 49738.53
        },
        {
          "date": "2026-05-29",
          "orders": 1455,
          "net": 66608620.0,
          "discount": 0.0,
          "ticket": 45779.12
        },
        {
          "date": "2026-05-30",
          "orders": 1213,
          "net": 52498362.0,
          "discount": 0.0,
          "ticket": 43279.77
        },
        {
          "date": "2026-05-31",
          "orders": 1068,
          "net": 48851196.0,
          "discount": 0.0,
          "ticket": 45740.82
        },
        {
          "date": "2026-06-01",
          "orders": 536,
          "net": 26470093.0,
          "discount": 0.0,
          "ticket": 49384.5
        }
      ],
      "meta": {
        "store": "SuperZoo Chile",
        "currency": "CLP",
        "symbol": "$",
        "periodo": "01/05/2026 – 01/06/2026"
      }
    },
    "b": {
      "periodo": "01/05/2025 – 01/06/2025",
      "fecha_inicio": "2025-05-01",
      "fecha_fin": "2025-06-01",
      "kpis": {
        "orders": 27133,
        "net": 1331152040.0,
        "bruta": 1927492540.0,
        "discount": 357607325.0,
        "discount_pct": 18.6,
        "ticket": 49060.26,
        "avg_items": 1.6
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 16484,
          "pct": 60.8,
          "net": 1013477104.0
        },
        {
          "m": "Gato",
          "n": 12005,
          "pct": 44.2,
          "net": 592904376.0
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 35271,
          "net": 1399921670.0
        },
        {
          "cat": "Arena y accesorios",
          "orders": 2718,
          "net": 110288009.0
        },
        {
          "cat": "Accesorios",
          "orders": 2325,
          "net": 49048225.0
        },
        {
          "cat": "Farmacia",
          "orders": 1693,
          "net": 30212804.0
        },
        {
          "cat": "Juguetes",
          "orders": 669,
          "net": 5907223.0
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 637,
          "net": 14435376.0
        },
        {
          "cat": "Sin categoría",
          "orders": 261,
          "net": 9780230.0
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 20390,
          "pct": 75.1,
          "pos_avg": 1.2,
          "anc_pct": 95.3,
          "add_pct": 14.6,
          "net": 1190451171.0
        },
        {
          "sc": "Snack y premios",
          "n": 2797,
          "pct": 10.3,
          "pos_avg": 3.6,
          "anc_pct": 29.3,
          "add_pct": 86.2,
          "net": 49119461.0
        },
        {
          "sc": "Arena para gato",
          "n": 2414,
          "pct": 8.9,
          "pos_avg": 1.5,
          "anc_pct": 72.1,
          "add_pct": 29.6,
          "net": 105532199.0
        },
        {
          "sc": "Alimento húmedo",
          "n": 1870,
          "pct": 6.9,
          "pos_avg": 3.2,
          "anc_pct": 45.0,
          "add_pct": 80.2,
          "net": 45970824.0
        },
        {
          "sc": "Alimento medicado",
          "n": 1338,
          "pct": 4.9,
          "pos_avg": 1.3,
          "anc_pct": 85.7,
          "add_pct": 17.7,
          "net": 77095860.0
        },
        {
          "sc": "Antiparasitarios",
          "n": 1126,
          "pct": 4.1,
          "pos_avg": 1.9,
          "anc_pct": 64.3,
          "add_pct": 47.0,
          "net": 34043920.0
        },
        {
          "sc": "Necesidades especiales",
          "n": 765,
          "pct": 2.8,
          "pos_avg": 1.3,
          "anc_pct": 80.1,
          "add_pct": 20.8,
          "net": 35107715.0
        },
        {
          "sc": "Peluquería e higiene",
          "n": 584,
          "pct": 2.2,
          "pos_avg": 2.8,
          "anc_pct": 35.1,
          "add_pct": 72.0,
          "net": 7689096.0
        },
        {
          "sc": "Collares, arneses y correas",
          "n": 419,
          "pct": 1.5,
          "pos_avg": 2.3,
          "anc_pct": 60.1,
          "add_pct": 57.8,
          "net": 7930633.0
        },
        {
          "sc": "Camas y mantas",
          "n": 417,
          "pct": 1.5,
          "pos_avg": 1.7,
          "anc_pct": 77.2,
          "add_pct": 35.5,
          "net": 20684553.0
        },
        {
          "sc": "Mordedores y flexibles",
          "n": 199,
          "pct": 0.7,
          "pos_avg": 3.3,
          "anc_pct": 33.2,
          "add_pct": 77.0,
          "net": 2850247.0
        },
        {
          "sc": "Sin subcategoría",
          "n": 194,
          "pct": 0.7,
          "pos_avg": 1.7,
          "anc_pct": 61.9,
          "add_pct": 38.1,
          "net": 8902806.0
        },
        {
          "sc": "Farmacia y salud",
          "n": 181,
          "pct": 0.7,
          "pos_avg": 2.0,
          "anc_pct": 56.9,
          "add_pct": 45.5,
          "net": 3249448.0
        },
        {
          "sc": "Areneros",
          "n": 159,
          "pct": 0.6,
          "pos_avg": 1.7,
          "anc_pct": 61.0,
          "add_pct": 40.5,
          "net": 4211143.0
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Snack y premios",
        "Arena para gato",
        "Alimento húmedo",
        "Alimento medicado",
        "Antiparasitarios"
      ],
      "cooc_matrix": [
        [
          null,
          7.9,
          3.9,
          4.3,
          0.9,
          1.9
        ],
        [
          57.2,
          null,
          8.9,
          16.6,
          3.1,
          5.0
        ],
        [
          32.9,
          10.3,
          null,
          9.3,
          2.5,
          1.8
        ],
        [
          46.5,
          24.9,
          12.0,
          null,
          5.8,
          3.3
        ],
        [
          14.0,
          6.4,
          4.6,
          8.1,
          null,
          1.8
        ],
        [
          34.5,
          12.4,
          3.8,
          5.4,
          2.1,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 19438,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 1339,
              "pct": 6.9
            },
            {
              "sc": "Alimento húmedo",
              "n": 657,
              "pct": 3.4
            },
            {
              "sc": "Arena para gato",
              "n": 492,
              "pct": 2.5
            },
            {
              "sc": "Antiparasitarios",
              "n": 286,
              "pct": 1.5
            },
            {
              "sc": "Peluquería e higiene",
              "n": 184,
              "pct": 0.9
            },
            {
              "sc": "Necesidades especiales",
              "n": 105,
              "pct": 0.5
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 1741,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 260,
              "pct": 14.9
            },
            {
              "sc": "Snack y premios",
              "n": 134,
              "pct": 7.7
            },
            {
              "sc": "Alimento húmedo",
              "n": 115,
              "pct": 6.6
            },
            {
              "sc": "Antiparasitarios",
              "n": 24,
              "pct": 1.4
            },
            {
              "sc": "Juguetes",
              "n": 21,
              "pct": 1.2
            },
            {
              "sc": "Areneros",
              "n": 20,
              "pct": 1.1
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 1147,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 70,
              "pct": 6.1
            },
            {
              "sc": "Alimento húmedo",
              "n": 62,
              "pct": 5.4
            },
            {
              "sc": "Snack y premios",
              "n": 53,
              "pct": 4.6
            },
            {
              "sc": "Arena para gato",
              "n": 34,
              "pct": 3.0
            },
            {
              "sc": "Necesidades especiales",
              "n": 15,
              "pct": 1.3
            },
            {
              "sc": "Antiparasitarios",
              "n": 14,
              "pct": 1.2
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 842,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 153,
              "pct": 18.2
            },
            {
              "sc": "Alimento seco",
              "n": 139,
              "pct": 16.5
            },
            {
              "sc": "Arena para gato",
              "n": 52,
              "pct": 6.2
            },
            {
              "sc": "Alimento medicado",
              "n": 24,
              "pct": 2.9
            },
            {
              "sc": "Juguetes",
              "n": 17,
              "pct": 2.0
            },
            {
              "sc": "Antiparasitarios",
              "n": 16,
              "pct": 1.9
            }
          ]
        },
        {
          "anchor": "Snack y premios",
          "n": 819,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 156,
              "pct": 19.0
            },
            {
              "sc": "Alimento húmedo",
              "n": 80,
              "pct": 9.8
            },
            {
              "sc": "Peluquería e higiene",
              "n": 43,
              "pct": 5.3
            },
            {
              "sc": "Arena para gato",
              "n": 22,
              "pct": 2.7
            },
            {
              "sc": "Mordedores y flexibles",
              "n": 22,
              "pct": 2.7
            },
            {
              "sc": "Antiparasitarios",
              "n": 20,
              "pct": 2.4
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 724,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 83,
              "pct": 11.5
            },
            {
              "sc": "Snack y premios",
              "n": 51,
              "pct": 7.0
            },
            {
              "sc": "Alimento húmedo",
              "n": 20,
              "pct": 2.8
            },
            {
              "sc": "Peluquería e higiene",
              "n": 14,
              "pct": 1.9
            },
            {
              "sc": "Dispensador, fuentes y platos",
              "n": 6,
              "pct": 0.8
            },
            {
              "sc": "Mordedores y flexibles",
              "n": 6,
              "pct": 0.8
            }
          ]
        }
      ],
      "hours": [
        542,
        235,
        128,
        67,
        39,
        67,
        142,
        341,
        783,
        1436,
        1985,
        2107,
        2044,
        1827,
        1835,
        1769,
        1549,
        1575,
        1556,
        1601,
        1543,
        1582,
        1399,
        981
      ],
      "shipping": [
        {
          "method": "Click & Collect",
          "n": 10545,
          "pct": 38.9
        },
        {
          "method": "Santiago",
          "n": 6897,
          "pct": 25.4
        },
        {
          "method": "Express",
          "n": 4554,
          "pct": 16.8
        },
        {
          "method": "Programado",
          "n": 3917,
          "pct": 14.4
        },
        {
          "method": "Valparaiso",
          "n": 219,
          "pct": 0.8
        },
        {
          "method": "Bio_Bio",
          "n": 164,
          "pct": 0.6
        },
        {
          "method": "Antofagasta",
          "n": 161,
          "pct": 0.6
        },
        {
          "method": "Tarapaca",
          "n": 102,
          "pct": 0.4
        }
      ],
      "promos": [
        {
          "id": "PBOMBAMAR",
          "usos": 9340,
          "disc_net": 79507255.0
        },
        {
          "id": "4x3SNACKPERMA",
          "usos": 1620,
          "disc_net": 7062936.0
        },
        {
          "id": "3x2ARENAS",
          "usos": 883,
          "disc_net": 17385825.0
        },
        {
          "id": "302DAASECOPERMA",
          "usos": 685,
          "disc_net": 6288547.0
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 662,
          "disc_net": 7170904.0
        },
        {
          "id": "2X1TKPET",
          "usos": 571,
          "disc_net": 14078693.0
        },
        {
          "id": "30PRODSELEC",
          "usos": 556,
          "disc_net": 4270625.0
        },
        {
          "id": "20PRODSELEC",
          "usos": 514,
          "disc_net": 4355428.0
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 412,
          "disc_net": 2398005.0
        },
        {
          "id": "4x3PRODSELEC",
          "usos": 387,
          "disc_net": 1694408.0
        }
      ],
      "coupons": [
        {
          "code": "SINIVA",
          "usos": 1543,
          "disc": 27316868.0,
          "pct": 19.0
        },
        {
          "code": "PRIMERA10",
          "usos": 1107,
          "disc": 5855712.0,
          "pct": 10.0
        },
        {
          "code": "25ENTODO",
          "usos": 821,
          "disc": 44179913.0,
          "pct": 25.0
        },
        {
          "code": "533187",
          "usos": 408,
          "disc": 4977444.0,
          "pct": 20.0
        },
        {
          "code": "548742",
          "usos": 387,
          "disc": 4970030.0,
          "pct": 20.0
        },
        {
          "code": "522468",
          "usos": 204,
          "disc": 3007108.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 153,
          "disc": 1177175.0,
          "pct": 15.0
        },
        {
          "code": "512269",
          "usos": 105,
          "disc": 1331876.0,
          "pct": 20.0
        },
        {
          "code": "25FUNCIONARIO",
          "usos": 50,
          "disc": 866198.0,
          "pct": 25.0
        },
        {
          "code": "450881",
          "usos": 41,
          "disc": 807502.0,
          "pct": 17.8
        }
      ],
      "products": [
        {
          "id": "4985",
          "name": "Bravery Chicken Adult Cat alimento para gato",
          "orders": 1716,
          "qty": 1893.0,
          "net": 78432876.0,
          "pos1_pct": 90,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4132",
          "name": "Bravery Chicken Adult alimento para perro",
          "orders": 1707,
          "qty": 2023.0,
          "net": 101590773.0,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4136",
          "name": "Bravery salmón adult alimento para perro",
          "orders": 1546,
          "qty": 1761.0,
          "net": 97109919.0,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4134",
          "name": "Bravery Pork Adult alimento para perro",
          "orders": 946,
          "qty": 1077.0,
          "net": 57707133.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4987",
          "name": "Bravery Salmón Adult Cat Sterilized alimento par",
          "orders": 895,
          "qty": 987.0,
          "net": 45197628.0,
          "pos1_pct": 88,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7204",
          "name": "Salvaje adulto con pollo 15 KG alimento para per",
          "orders": 808,
          "qty": 1085.0,
          "net": 34637743.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4986",
          "name": "Bravery Salmón Adult Cat alimento para gato",
          "orders": 662,
          "qty": 752.0,
          "net": 33120583.0,
          "pos1_pct": 88,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5",
          "name": "Royal Canin adulto Mini Adult alimento para perr",
          "orders": 614,
          "qty": 697.0,
          "net": 35137155.0,
          "pos1_pct": 94,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7205",
          "name": "Salvaje adulto con salmón 15 KG alimento para pe",
          "orders": 561,
          "qty": 825.0,
          "net": 26337498.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6552",
          "name": "Dogxtreme Adult Salmón y arroz alimento para per",
          "orders": 514,
          "qty": 714.0,
          "net": 23993970.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7392",
          "name": "Bravery Cat Chicken Adult Sterilized alimento pa",
          "orders": 476,
          "qty": 507.0,
          "net": 23428470.0,
          "pos1_pct": 85,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10077",
          "name": "Arena para gatos Aglomerante",
          "orders": 460,
          "qty": 1101.0,
          "net": 27747012.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "8656",
          "name": "Bravery Lamb Adult Large/Medium Breeds alimento ",
          "orders": 424,
          "qty": 506.0,
          "net": 28989085.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4150",
          "name": "Bravery Salmón Adult Cat Sterilized alimento par",
          "orders": 351,
          "qty": 371.0,
          "net": 6978423.0,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13374",
          "name": "Arena para gatos Clean Pawz 15 KG",
          "orders": 320,
          "qty": 862.0,
          "net": 13031449.0,
          "pos1_pct": 68,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4140",
          "name": "Bravery Chicken Mini Adult alimento para perro",
          "orders": 311,
          "qty": 361.0,
          "net": 13041486.0,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14667",
          "name": "Salvaje cat adult esterilizado",
          "orders": 301,
          "qty": 342.0,
          "net": 11492910.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7299",
          "name": "Arena para gatos Aglomerante 10KG",
          "orders": 298,
          "qty": 683.0,
          "net": 10325344.0,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "10979",
          "name": "Arena para gatos Sanicat clumping 12 KG",
          "orders": 291,
          "qty": 754.0,
          "net": 12032332.0,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "16439",
          "name": "Arena para gatos Aglomerante",
          "orders": 256,
          "qty": 517.0,
          "net": 6946929.0,
          "pos1_pct": 64,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "10202",
          "name": "Catxtreme Salmon Esterilizado alimento para gato",
          "orders": 253,
          "qty": 374.0,
          "net": 10996836.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6556",
          "name": "Dogxtreme Adult pollo y arroz alimento para perr",
          "orders": 249,
          "qty": 343.0,
          "net": 11526515.0,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6470",
          "name": "Taste Of The Wild Canyon River Gato alimento par",
          "orders": 232,
          "qty": 262.0,
          "net": 11838151.0,
          "pos1_pct": 92,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "1066",
          "name": "Fit Formula Gato Adulto alimento para gato",
          "orders": 229,
          "qty": 286.0,
          "net": 7928744.0,
          "pos1_pct": 74,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "917",
          "name": "Fit Formula Adulto alimento para perro",
          "orders": 229,
          "qty": 353.0,
          "net": 14532306.0,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "50",
          "name": "Royal Canin adulto Indoor alimento para gato",
          "orders": 225,
          "qty": 238.0,
          "net": 13597903.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11601",
          "name": "True Origins Wild Cat Adult Pacific alimento par",
          "orders": 210,
          "qty": 256.0,
          "net": 9678551.0,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7203",
          "name": "Salvaje cachorro con pollo 15 KG alimento para p",
          "orders": 203,
          "qty": 249.0,
          "net": 7949109.0,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "2054",
          "name": "Acana Heritage Free Run Poultry alimento para pe",
          "orders": 200,
          "qty": 234.0,
          "net": 15729042.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "22",
          "name": "Royal Canin adulto maxi adult 15 KG alimento par",
          "orders": 175,
          "qty": 232.0,
          "net": 16569451.0,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13372",
          "name": "Ultra Odor Seal arena para gatos aglutinante y c",
          "orders": 169,
          "qty": 411.0,
          "net": 9321766.0,
          "pos1_pct": 72,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4130",
          "name": "Bravery Chicken Puppy alimento para perro",
          "orders": 168,
          "qty": 198.0,
          "net": 11312556.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16414",
          "name": "Canino adulto 20 + 2 KG de regalo",
          "orders": 164,
          "qty": 249.0,
          "net": 10250832.0,
          "pos1_pct": 95,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5965",
          "name": "Churu de atún con salmón 56 GR",
          "orders": 162,
          "qty": 322.0,
          "net": 809081.0,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "4123",
          "name": "Leonardo Adult Senior alimento para gato",
          "orders": 159,
          "qty": 171.0,
          "net": 10057366.0,
          "pos1_pct": 91,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6565",
          "name": "Dogxtreme Senior Light pollo y arroz alimento pa",
          "orders": 158,
          "qty": 197.0,
          "net": 6620185.0,
          "pos1_pct": 80,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "2059",
          "name": "Acana Heritage Freshwater Fish alimento para per",
          "orders": 154,
          "qty": 177.0,
          "net": 12641344.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6467",
          "name": "Taste Of The Wild Wetlands Dry alimento para per",
          "orders": 145,
          "qty": 158.0,
          "net": 10355002.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "9449",
          "name": "Leonardo quality selection pato lata",
          "orders": 141,
          "qty": 335.0,
          "net": 1404746.0,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4114",
          "name": "Leonardo Adult Duck alimento para gato",
          "orders": 140,
          "qty": 152.0,
          "net": 8939880.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4143",
          "name": "Bravery Pork Mini Adult alimento para perro",
          "orders": 135,
          "qty": 146.0,
          "net": 5642462.0,
          "pos1_pct": 79,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5651",
          "name": "Leonardo lata quality selection pescado alimento",
          "orders": 134,
          "qty": 400.0,
          "net": 1677310.0,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4145",
          "name": "Bravery Salmon Mini Adult alimento para perro",
          "orders": 131,
          "qty": 143.0,
          "net": 6156762.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14816",
          "name": "Nexgard combo l cat 2,5 - 7,5 kg 0.9 ml sol top",
          "orders": 130,
          "qty": 243.0,
          "net": 3469385.0,
          "pos1_pct": 60,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "12205",
          "name": "True Origins Pure Cat adulto atun salmón aliment",
          "orders": 130,
          "qty": 514.0,
          "net": 1075509.0,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "13307",
          "name": "Arena aglomerante natural de bentonita para gato",
          "orders": 128,
          "qty": 301.0,
          "net": 7585698.0,
          "pos1_pct": 72,
          "mascota": "Sin mascota",
          "subcat": "Sin subcategoría",
          "cat": "Sin categoría"
        },
        {
          "id": "7150",
          "name": "Rahue Bully stick snack para perros",
          "orders": 125,
          "qty": 531.0,
          "net": 1914265.0,
          "pos1_pct": 38,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "9448",
          "name": "Leonardo quality selection ave lata",
          "orders": 120,
          "qty": 365.0,
          "net": 1530549.0,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "5643",
          "name": "Leonardo lata quality selection ternera alimento",
          "orders": 120,
          "qty": 350.0,
          "net": 1467650.0,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "2995",
          "name": "Arena para gatos America Litter Ultra Scooping",
          "orders": 119,
          "qty": 323.0,
          "net": 7325861.0,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4120",
          "name": "Leonardo Adult Light alimento para gato",
          "orders": 115,
          "qty": 127.0,
          "net": 7469505.0,
          "pos1_pct": 86,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "1502",
          "name": "Royal Canin Alimento Seco Gato Adulto Urinary Ca",
          "orders": 115,
          "qty": 125.0,
          "net": 7561998.0,
          "pos1_pct": 90,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "8710",
          "name": "Taste Of The Wild Sierra Mountain alimento para ",
          "orders": 114,
          "qty": 120.0,
          "net": 7864560.0,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11598",
          "name": "True Origins Wild Cat Adult Country Water alimen",
          "orders": 113,
          "qty": 135.0,
          "net": 5103925.0,
          "pos1_pct": 85,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8948",
          "name": "Churu Variedades Atún snack para gatos 20P",
          "orders": 112,
          "qty": 247.0,
          "net": 2488723.0,
          "pos1_pct": 28,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "1396",
          "name": "Fit formula senior 20 KG alimento para perro",
          "orders": 111,
          "qty": 148.0,
          "net": 6341630.0,
          "pos1_pct": 72,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4147",
          "name": "Bravery chicken kitten 2 KG alimento para gato",
          "orders": 107,
          "qty": 130.0,
          "net": 2327459.0,
          "pos1_pct": 64,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14069",
          "name": "Bravecto Plus de 250 MG para gatos desde 2.8 a 6",
          "orders": 106,
          "qty": 165.0,
          "net": 4435572.0,
          "pos1_pct": 74,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "5809",
          "name": "Bravery Light Iberian Pork Mini Adult Small Bree",
          "orders": 105,
          "qty": 123.0,
          "net": 4856917.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "4080",
          "name": "Belcando Finest Croc alimento para perro",
          "orders": 104,
          "qty": 111.0,
          "net": 7181374.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13365",
          "name": "Oreja de Cerdo Rahue",
          "orders": 103,
          "qty": 303.0,
          "net": 761317.0,
          "pos1_pct": 20,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "7141",
          "name": "Rahue Cordero patagonico en cubos snack para per",
          "orders": 102,
          "qty": 247.0,
          "net": 620624.0,
          "pos1_pct": 18,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "15600",
          "name": "Arena con carbón activo",
          "orders": 102,
          "qty": 193.0,
          "net": 5188301.0,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "3087",
          "name": "Acana Singles Pork & Squash alimento para perro",
          "orders": 100,
          "qty": 123.0,
          "net": 9301506.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8716",
          "name": "Taste Of The Wild Pine Forest alimento para perr",
          "orders": 98,
          "qty": 102.0,
          "net": 6684876.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11563",
          "name": "Nath Cat adulto esterilizado sabor pollo y arroz",
          "orders": 98,
          "qty": 120.0,
          "net": 6351957.0,
          "pos1_pct": 95,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4116",
          "name": "Leonardo Adult Salmon Gf alimento para gato",
          "orders": 97,
          "qty": 106.0,
          "net": 6857890.0,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16415",
          "name": "Royal Canin Alimento Seco Perro Adulto Hypoaller",
          "orders": 96,
          "qty": 116.0,
          "net": 9746902.0,
          "pos1_pct": 96,
          "mascota": "Perro",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "14",
          "name": "Royal Canin adulto Medium Adult alimento para pe",
          "orders": 95,
          "qty": 112.0,
          "net": 7999042.0,
          "pos1_pct": 89,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4127",
          "name": "Leonardo Quality selection sabor conejo alimento",
          "orders": 95,
          "qty": 243.0,
          "net": 1018962.0,
          "pos1_pct": 15,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4277",
          "name": "Churu de pollo 56GR",
          "orders": 95,
          "qty": 222.0,
          "net": 557811.0,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "11588",
          "name": "True Origins Pure Dog Adult Salmon Grain Free al",
          "orders": 92,
          "qty": 114.0,
          "net": 6225901.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11904",
          "name": "Catxtreme pollo esterilizado alimento para gato",
          "orders": 92,
          "qty": 106.0,
          "net": 4007528.0,
          "pos1_pct": 86,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10222",
          "name": "Wanpy Soft Lamb Jerky Slices",
          "orders": 92,
          "qty": 188.0,
          "net": 946322.0,
          "pos1_pct": 15,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "12206",
          "name": "True Origins Pure Cat adulto atun sardina alimen",
          "orders": 91,
          "qty": 405.0,
          "net": 847429.0,
          "pos1_pct": 25,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "6454",
          "name": "Virbac ehliquantel 1 comprimido",
          "orders": 91,
          "qty": 279.0,
          "net": 466572.0,
          "pos1_pct": 26,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "1065",
          "name": "Fit Formula Adulto Razas Pequeñas alimento para ",
          "orders": 90,
          "qty": 99.0,
          "net": 2411747.0,
          "pos1_pct": 80,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13364",
          "name": "Garra de Pollo Rahue 65 GR",
          "orders": 89,
          "qty": 210.0,
          "net": 527652.0,
          "pos1_pct": 15,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "5138",
          "name": "Belcando Finest Gf Senior",
          "orders": 87,
          "qty": 95.0,
          "net": 6784901.0,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11572",
          "name": "True origins cat adult sterelised salmón aliment",
          "orders": 83,
          "qty": 103.0,
          "net": 3980641.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "3136",
          "name": "Royal Canin Alimento Seco Gato Adulto Urinary S/",
          "orders": 82,
          "qty": 84.0,
          "net": 4940460.0,
          "pos1_pct": 88,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "10225",
          "name": "Wanpy Soft Beef Jerky Slices",
          "orders": 81,
          "qty": 190.0,
          "net": 956389.0,
          "pos1_pct": 17,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "5966",
          "name": "Churu de pollo con camarón 56GR",
          "orders": 81,
          "qty": 124.0,
          "net": 311586.0,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "14663",
          "name": "Salvaje cat kitten 1.5 KG",
          "orders": 79,
          "qty": 156.0,
          "net": 916344.0,
          "pos1_pct": 72,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10221",
          "name": "Wanpy Soft Duck Jerky Strips",
          "orders": 79,
          "qty": 189.0,
          "net": 951358.0,
          "pos1_pct": 23,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "12239",
          "name": "Arena aglomerante natural de bentonita para gato",
          "orders": 79,
          "qty": 170.0,
          "net": 2570001.0,
          "pos1_pct": 67,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "7140",
          "name": "Rahue hueso de Femur de cerdo snack para perros",
          "orders": 78,
          "qty": 156.0,
          "net": 523068.0,
          "pos1_pct": 19,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "9438",
          "name": "Churu de pollo con cangrejo 56 GR",
          "orders": 78,
          "qty": 109.0,
          "net": 273894.0,
          "pos1_pct": 6,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "4278",
          "name": "Churu de atún con ostiones 56 GR",
          "orders": 78,
          "qty": 128.0,
          "net": 321629.0,
          "pos1_pct": 4,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "1689",
          "name": "Fit formula senior razas pequeñas 10 KG alimento",
          "orders": 77,
          "qty": 90.0,
          "net": 2268172.0,
          "pos1_pct": 77,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4276",
          "name": "Churu de atún 56 GR",
          "orders": 76,
          "qty": 159.0,
          "net": 399512.0,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "15599",
          "name": "Arena con carbón activo",
          "orders": 76,
          "qty": 132.0,
          "net": 2217378.0,
          "pos1_pct": 61,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4159",
          "name": "Acana Heritage Puppy & Junior Formula alimento p",
          "orders": 76,
          "qty": 91.0,
          "net": 6116850.0,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6554",
          "name": "Dogxtreme Puppy pollo y arroz alimento para perr",
          "orders": 75,
          "qty": 97.0,
          "net": 3259685.0,
          "pos1_pct": 75,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11716",
          "name": "Dogxtreme Puppy salmón y arroz alimento para per",
          "orders": 73,
          "qty": 94.0,
          "net": 3158870.0,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "12204",
          "name": "True Origins Pure Cat adulto atun mejillones ali",
          "orders": 73,
          "qty": 313.0,
          "net": 654922.0,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "8659",
          "name": "Bravery Lamb Mini Adult Small Breeds alimento pa",
          "orders": 72,
          "qty": 80.0,
          "net": 3437971.0,
          "pos1_pct": 78,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13081",
          "name": "Vitakraft beef stick cordero 12GR",
          "orders": 71,
          "qty": 256.0,
          "net": 212985.0,
          "pos1_pct": 15,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "7303",
          "name": "Dogxtreme snack semihúmedo salmón 200 GR",
          "orders": 70,
          "qty": 137.0,
          "net": 459361.0,
          "pos1_pct": 13,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "12208",
          "name": "True Origins Pure Cat adulto pollo conejo alimen",
          "orders": 70,
          "qty": 271.0,
          "net": 567043.0,
          "pos1_pct": 19,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 27133,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 7883,
          "pct": 29.1
        },
        {
          "pos": 3,
          "n": 3467,
          "pct": 12.8
        },
        {
          "pos": 4,
          "n": 1962,
          "pct": 7.2
        },
        {
          "pos": 5,
          "n": 1175,
          "pct": 4.3
        },
        {
          "pos": 6,
          "n": 678,
          "pct": 2.5
        },
        {
          "pos": 7,
          "n": 422,
          "pct": 1.6
        }
      ],
      "promos_all": [
        {
          "id": "PBOMBAMAR",
          "usos": 9340,
          "disc_net": 79507255.0,
          "ppu": 8512.55
        },
        {
          "id": "4x3SNACKPERMA",
          "usos": 1620,
          "disc_net": 7062936.0,
          "ppu": 4359.84
        },
        {
          "id": "3x2ARENAS",
          "usos": 883,
          "disc_net": 17385825.0,
          "ppu": 19689.5
        },
        {
          "id": "302DAASECOPERMA",
          "usos": 685,
          "disc_net": 6288547.0,
          "ppu": 9180.36
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 662,
          "disc_net": 7170904.0,
          "ppu": 10832.18
        },
        {
          "id": "2X1TKPET",
          "usos": 571,
          "disc_net": 14078693.0,
          "ppu": 24656.2
        },
        {
          "id": "30PRODSELEC",
          "usos": 556,
          "disc_net": 4270625.0,
          "ppu": 7680.98
        },
        {
          "id": "20PRODSELEC",
          "usos": 514,
          "disc_net": 4355428.0,
          "ppu": 8473.6
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 412,
          "disc_net": 2398005.0,
          "ppu": 5820.4
        },
        {
          "id": "4x3PRODSELEC",
          "usos": 387,
          "disc_net": 1694408.0,
          "ppu": 4378.32
        },
        {
          "id": "30ANTIPAR",
          "usos": 351,
          "disc_net": 2766620.0,
          "ppu": 7882.11
        },
        {
          "id": "5M1PERMA",
          "usos": 315,
          "disc_net": 1418431.0,
          "ppu": 4502.96
        },
        {
          "id": "20ROYALGATO",
          "usos": 307,
          "disc_net": 2219219.0,
          "ppu": 7228.73
        },
        {
          "id": "25PRODSELEC-WEB",
          "usos": 305,
          "disc_net": 5053788.0,
          "ppu": 16569.8
        },
        {
          "id": "50COLLA-MPETS",
          "usos": 288,
          "disc_net": 1617069.0,
          "ppu": 5614.82
        },
        {
          "id": "20ROYAL",
          "usos": 279,
          "disc_net": 2635417.0,
          "ppu": 9445.94
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 274,
          "disc_net": 3758984.0,
          "ppu": 13718.92
        },
        {
          "id": "3X2PRODSELEC",
          "usos": 271,
          "disc_net": 2422745.0,
          "ppu": 8940.02
        },
        {
          "id": "4x3HUME-TRUE",
          "usos": 259,
          "disc_net": 694601.0,
          "ppu": 2681.86
        },
        {
          "id": "SALVAJE-6000",
          "usos": 251,
          "disc_net": 1552936.0,
          "ppu": 6187.0
        },
        {
          "id": "TKPET-6000",
          "usos": 247,
          "disc_net": 2505874.0,
          "ppu": 10145.24
        },
        {
          "id": "15%PRODSELE-WEB",
          "usos": 243,
          "disc_net": 1409453.0,
          "ppu": 5800.22
        },
        {
          "id": "3x2PRODSELEC-WEB",
          "usos": 230,
          "disc_net": 804518.0,
          "ppu": 3497.9
        },
        {
          "id": "2DA30PRODSELE-WEB",
          "usos": 229,
          "disc_net": 3764574.0,
          "ppu": 16439.19
        },
        {
          "id": "10M2PERMAN",
          "usos": 219,
          "disc_net": 1082547.0,
          "ppu": 4943.14
        },
        {
          "id": "SALVAJE-12KG-31990",
          "usos": 218,
          "disc_net": 1626945.0,
          "ppu": 7463.05
        },
        {
          "id": "20TRUESECO",
          "usos": 211,
          "disc_net": 1930180.0,
          "ppu": 9147.77
        },
        {
          "id": "SALVAJ-29990",
          "usos": 200,
          "disc_net": 1868939.0,
          "ppu": 9344.69
        },
        {
          "id": "LL6P5",
          "usos": 192,
          "disc_net": 642360.0,
          "ppu": 3345.62
        },
        {
          "id": "SALVAJE-29990",
          "usos": 157,
          "disc_net": 1492459.0,
          "ppu": 9506.11
        },
        {
          "id": "25PRODSELEC",
          "usos": 149,
          "disc_net": 572381.0,
          "ppu": 3841.48
        },
        {
          "id": "2X1SANICAT",
          "usos": 132,
          "disc_net": 2537322.0,
          "ppu": 19222.14
        },
        {
          "id": "SALVAJE-15KG-31990",
          "usos": 125,
          "disc_net": 695796.0,
          "ppu": 5566.37
        },
        {
          "id": "SALVAJE-8000",
          "usos": 117,
          "disc_net": 947923.0,
          "ppu": 8101.91
        },
        {
          "id": "2x1CAMAS",
          "usos": 109,
          "disc_net": 3901567.0,
          "ppu": 35794.19
        },
        {
          "id": "30NATH",
          "usos": 103,
          "disc_net": 1846084.0,
          "ppu": 17923.15
        },
        {
          "id": "3x2POUCH-NATH",
          "usos": 98,
          "disc_net": 322081.0,
          "ppu": 3286.54
        },
        {
          "id": "LIQUI-ROYAL",
          "usos": 95,
          "disc_net": 3133603.0,
          "ppu": 32985.29
        },
        {
          "id": "15PRODSELEC",
          "usos": 88,
          "disc_net": 531080.0,
          "ppu": 6035.0
        },
        {
          "id": "SALVAJE-POLLO",
          "usos": 87,
          "disc_net": 494116.0,
          "ppu": 5679.49
        },
        {
          "id": "2x54990CATX",
          "usos": 86,
          "disc_net": 1070739.0,
          "ppu": 12450.45
        },
        {
          "id": "20PLATOS",
          "usos": 83,
          "disc_net": 204367.0,
          "ppu": 2462.25
        },
        {
          "id": "30FIT-PERRO",
          "usos": 83,
          "disc_net": 1529423.0,
          "ppu": 18426.78
        },
        {
          "id": "CATX-10990",
          "usos": 66,
          "disc_net": 494116.0,
          "ppu": 7486.61
        },
        {
          "id": "3x2XTREME",
          "usos": 64,
          "disc_net": 195229.0,
          "ppu": 3050.45
        },
        {
          "id": "2x22990DOGX",
          "usos": 63,
          "disc_net": 311322.0,
          "ppu": 4941.62
        },
        {
          "id": "FITFORM-34990",
          "usos": 63,
          "disc_net": 1094125.0,
          "ppu": 17367.06
        },
        {
          "id": "2x49990CATX",
          "usos": 54,
          "disc_net": 856698.0,
          "ppu": 15864.78
        },
        {
          "id": "2DA30PRODSELEC-ALIM",
          "usos": 51,
          "disc_net": 753903.0,
          "ppu": 14782.41
        },
        {
          "id": "2DA40PRODSELEC",
          "usos": 51,
          "disc_net": 757459.0,
          "ppu": 14852.14
        },
        {
          "id": "15CAMAS",
          "usos": 51,
          "disc_net": 300198.0,
          "ppu": 5886.24
        },
        {
          "id": "25CAMAS",
          "usos": 50,
          "disc_net": 473852.0,
          "ppu": 9477.04
        },
        {
          "id": "15DINGO",
          "usos": 50,
          "disc_net": 49545.0,
          "ppu": 990.9
        },
        {
          "id": "2x9990SALVAJ",
          "usos": 48,
          "disc_net": 171000.0,
          "ppu": 3562.5
        },
        {
          "id": "30TKPET-CARB",
          "usos": 48,
          "disc_net": 369938.0,
          "ppu": 7707.04
        },
        {
          "id": "30SALVAJ",
          "usos": 46,
          "disc_net": 167395.0,
          "ppu": 3639.02
        },
        {
          "id": "2DA50PRODSELEC",
          "usos": 45,
          "disc_net": 297285.0,
          "ppu": 6606.33
        },
        {
          "id": "20VITALKRAFT",
          "usos": 44,
          "disc_net": 33710.0,
          "ppu": 766.14
        },
        {
          "id": "502DAPAÑALES",
          "usos": 43,
          "disc_net": 461986.0,
          "ppu": 10743.86
        },
        {
          "id": "LIQUIDACION",
          "usos": 42,
          "disc_net": 426051.0,
          "ppu": 10144.07
        },
        {
          "id": "25LEEBY",
          "usos": 39,
          "disc_net": 506657.0,
          "ppu": 12991.21
        },
        {
          "id": "4x3JUGUE-SELE",
          "usos": 37,
          "disc_net": 174479.0,
          "ppu": 4715.65
        },
        {
          "id": "4x3HUM-CATX",
          "usos": 36,
          "disc_net": 68555.0,
          "ppu": 1904.31
        },
        {
          "id": "20RAHUE",
          "usos": 35,
          "disc_net": 32728.0,
          "ppu": 935.09
        },
        {
          "id": "SALVAJ-31990",
          "usos": 34,
          "disc_net": 186554.0,
          "ppu": 5486.88
        },
        {
          "id": "20PLAYOL",
          "usos": 34,
          "disc_net": 98589.0,
          "ppu": 2899.68
        },
        {
          "id": "20CATZILL",
          "usos": 33,
          "disc_net": 241956.0,
          "ppu": 7332.0
        },
        {
          "id": "20JUGUETES",
          "usos": 30,
          "disc_net": 42642.0,
          "ppu": 1421.4
        },
        {
          "id": "4x3PRODSELEC-WEB",
          "usos": 30,
          "disc_net": 126574.0,
          "ppu": 4219.13
        },
        {
          "id": "20POESI",
          "usos": 29,
          "disc_net": 15949.0,
          "ppu": 549.97
        },
        {
          "id": "20BETTER",
          "usos": 29,
          "disc_net": 39946.0,
          "ppu": 1377.45
        },
        {
          "id": "30PETFOOD",
          "usos": 28,
          "disc_net": 25140.0,
          "ppu": 897.86
        },
        {
          "id": "TOOTOY-2990",
          "usos": 28,
          "disc_net": 23520.0,
          "ppu": 840.0
        },
        {
          "id": "10PRODSELEC-WEB",
          "usos": 27,
          "disc_net": 85017.0,
          "ppu": 3148.78
        },
        {
          "id": "30WUAF",
          "usos": 26,
          "disc_net": 62283.0,
          "ppu": 2395.5
        },
        {
          "id": "3x2TOALL",
          "usos": 26,
          "disc_net": 112380.0,
          "ppu": 4322.31
        },
        {
          "id": "30INDOM",
          "usos": 26,
          "disc_net": 39740.0,
          "ppu": 1528.46
        },
        {
          "id": "4x3HUM-APPLA",
          "usos": 26,
          "disc_net": 79504.0,
          "ppu": 3057.85
        },
        {
          "id": "20MASCAN",
          "usos": 23,
          "disc_net": 106158.0,
          "ppu": 4615.57
        },
        {
          "id": "20RASCAD",
          "usos": 23,
          "disc_net": 144156.0,
          "ppu": 6267.65
        },
        {
          "id": "3x2GALL-INDOM",
          "usos": 21,
          "disc_net": 47481.0,
          "ppu": 2261.0
        },
        {
          "id": "20PATAGON",
          "usos": 21,
          "disc_net": 24167.0,
          "ppu": 1150.81
        },
        {
          "id": "15ROPA",
          "usos": 21,
          "disc_net": 61996.0,
          "ppu": 2952.19
        },
        {
          "id": "3x2VITALKRAFT",
          "usos": 20,
          "disc_net": 47420.0,
          "ppu": 2371.0
        },
        {
          "id": "50% LIQUIDACION",
          "usos": 20,
          "disc_net": 264127.0,
          "ppu": 13206.35
        },
        {
          "id": "20COASTAL",
          "usos": 19,
          "disc_net": 53240.0,
          "ppu": 2802.11
        },
        {
          "id": "3x2TCATBAND",
          "usos": 18,
          "disc_net": 48594.0,
          "ppu": 2699.67
        },
        {
          "id": "TRUE-48990",
          "usos": 18,
          "disc_net": 95798.0,
          "ppu": 5322.11
        },
        {
          "id": "3x2KIT-BELL",
          "usos": 17,
          "disc_net": 88098.0,
          "ppu": 5182.24
        },
        {
          "id": "3x2FECA-TOALL",
          "usos": 17,
          "disc_net": 78843.0,
          "ppu": 4637.82
        },
        {
          "id": "15VIAJES",
          "usos": 16,
          "disc_net": 89484.0,
          "ppu": 5592.75
        },
        {
          "id": "15MAXMOLLY",
          "usos": 16,
          "disc_net": 36162.0,
          "ppu": 2260.12
        },
        {
          "id": "20CUNATEX",
          "usos": 15,
          "disc_net": 25017.0,
          "ppu": 1667.8
        },
        {
          "id": "15NATH",
          "usos": 15,
          "disc_net": 111539.0,
          "ppu": 7435.93
        },
        {
          "id": "4x3HUME-SELEC",
          "usos": 14,
          "disc_net": 66164.0,
          "ppu": 4726.0
        },
        {
          "id": "20CAMAS",
          "usos": 14,
          "disc_net": 87707.0,
          "ppu": 6264.79
        },
        {
          "id": "30CAMASMPETS",
          "usos": 13,
          "disc_net": 112904.0,
          "ppu": 8684.92
        },
        {
          "id": "20DRAGPHAR",
          "usos": 13,
          "disc_net": 23003.0,
          "ppu": 1769.46
        },
        {
          "id": "30%PRODSELE-WEB",
          "usos": 12,
          "disc_net": 77095.0,
          "ppu": 6424.58
        },
        {
          "id": "25JUGUE-MPETS",
          "usos": 12,
          "disc_net": 13848.0,
          "ppu": 1154.0
        },
        {
          "id": "3x2ORAL-MPETS",
          "usos": 11,
          "disc_net": 38564.0,
          "ppu": 3505.82
        },
        {
          "id": "30AREN-TKPET",
          "usos": 11,
          "disc_net": 123500.0,
          "ppu": 11227.27
        },
        {
          "id": "ARENA-26990",
          "usos": 11,
          "disc_net": 58826.0,
          "ppu": 5347.82
        },
        {
          "id": "15MANADA",
          "usos": 10,
          "disc_net": 10582.0,
          "ppu": 1058.2
        },
        {
          "id": "30TKPET-LAVAN",
          "usos": 9,
          "disc_net": 61989.0,
          "ppu": 6887.67
        },
        {
          "id": "15WELLNESS",
          "usos": 9,
          "disc_net": 28607.0,
          "ppu": 3178.56
        },
        {
          "id": "2x32990NATH",
          "usos": 8,
          "disc_net": 52866.0,
          "ppu": 6608.25
        },
        {
          "id": "15BOZAL",
          "usos": 8,
          "disc_net": 8945.0,
          "ppu": 1118.12
        },
        {
          "id": "3x2CREMY",
          "usos": 6,
          "disc_net": 16738.0,
          "ppu": 2789.67
        },
        {
          "id": "2DA40SKOUT",
          "usos": 5,
          "disc_net": 31580.0,
          "ppu": 6316.0
        },
        {
          "id": "25MYZOO",
          "usos": 5,
          "disc_net": 8815.0,
          "ppu": 1763.0
        },
        {
          "id": "25PETFOOD",
          "usos": 5,
          "disc_net": 8390.0,
          "ppu": 1678.0
        },
        {
          "id": "502DATROPICL",
          "usos": 5,
          "disc_net": 42415.0,
          "ppu": 8483.0
        },
        {
          "id": "502DASELEC",
          "usos": 5,
          "disc_net": 26869.0,
          "ppu": 5373.8
        },
        {
          "id": "502DAJUGPLAYOL",
          "usos": 4,
          "disc_net": 26034.0,
          "ppu": 6508.5
        },
        {
          "id": "15RASCAD",
          "usos": 4,
          "disc_net": 19912.0,
          "ppu": 4978.0
        },
        {
          "id": "502DATRAPER",
          "usos": 4,
          "disc_net": 8388.0,
          "ppu": 2097.0
        },
        {
          "id": "3x2TOOTOY",
          "usos": 3,
          "disc_net": 10059.0,
          "ppu": 3353.0
        },
        {
          "id": "20STAYHAPP",
          "usos": 3,
          "disc_net": 1458.0,
          "ppu": 486.0
        },
        {
          "id": "502DAPETFOOD",
          "usos": 2,
          "disc_net": 4194.0,
          "ppu": 2097.0
        },
        {
          "id": "30VORO",
          "usos": 2,
          "disc_net": 2516.0,
          "ppu": 1258.0
        },
        {
          "id": "502DAMPETSPLATO",
          "usos": 2,
          "disc_net": 6715.0,
          "ppu": 3357.5
        },
        {
          "id": "3x2RASCAD",
          "usos": 2,
          "disc_net": 20992.0,
          "ppu": 10496.0
        },
        {
          "id": "502DALICKIMAT",
          "usos": 1,
          "disc_net": 7979.0,
          "ppu": 7979.0
        },
        {
          "id": "10PRODSELEC",
          "usos": 1,
          "disc_net": 5882.0,
          "ppu": 5882.0
        },
        {
          "id": "SUNIHEP-19990",
          "usos": 1,
          "disc_net": 8403.0,
          "ppu": 8403.0
        },
        {
          "id": "2DA30PRODSELEC",
          "usos": 1,
          "disc_net": 1006.0,
          "ppu": 1006.0
        },
        {
          "id": "NATHP20V2",
          "usos": 1,
          "disc_net": 3360.0,
          "ppu": 3360.0
        },
        {
          "id": "DOGZI-46990",
          "usos": 1,
          "disc_net": 6723.0,
          "ppu": 6723.0
        },
        {
          "id": "20MANADA",
          "usos": 1,
          "disc_net": 5032.0,
          "ppu": 5032.0
        }
      ],
      "coupons_all": [
        {
          "code": "SINIVA",
          "usos": 1543,
          "disc": 27316868.0,
          "pct": 19.0
        },
        {
          "code": "PRIMERA10",
          "usos": 1107,
          "disc": 5855712.0,
          "pct": 10.0
        },
        {
          "code": "25ENTODO",
          "usos": 821,
          "disc": 44179913.0,
          "pct": 25.0
        },
        {
          "code": "533187",
          "usos": 408,
          "disc": 4977444.0,
          "pct": 20.0
        },
        {
          "code": "548742",
          "usos": 387,
          "disc": 4970030.0,
          "pct": 20.0
        },
        {
          "code": "522468",
          "usos": 204,
          "disc": 3007108.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 153,
          "disc": 1177175.0,
          "pct": 15.0
        },
        {
          "code": "512269",
          "usos": 105,
          "disc": 1331876.0,
          "pct": 20.0
        },
        {
          "code": "25FUNCIONARIO",
          "usos": 50,
          "disc": 866198.0,
          "pct": 25.0
        },
        {
          "code": "450881",
          "usos": 41,
          "disc": 807502.0,
          "pct": 17.8
        },
        {
          "code": "440612",
          "usos": 31,
          "disc": 423887.0,
          "pct": 18.0
        },
        {
          "code": "20ENTODO",
          "usos": 29,
          "disc": 805666.0,
          "pct": 20.0
        },
        {
          "code": "15ENTODO",
          "usos": 27,
          "disc": 473227.0,
          "pct": 15.0
        },
        {
          "code": "SZJORST21",
          "usos": 17,
          "disc": 72707.0,
          "pct": 10.0
        },
        {
          "code": "10ENTODO",
          "usos": 10,
          "disc": 83278.0,
          "pct": 10.0
        },
        {
          "code": "JCTRACPA14",
          "usos": 7,
          "disc": 29973.0,
          "pct": 10.0
        },
        {
          "code": "JCBNVDA14",
          "usos": 7,
          "disc": 48084.0,
          "pct": 10.0
        },
        {
          "code": "559779",
          "usos": 7,
          "disc": 86783.0,
          "pct": 18.9
        },
        {
          "code": "VUELVE10",
          "usos": 6,
          "disc": 26288.0,
          "pct": 10.0
        },
        {
          "code": "415281",
          "usos": 6,
          "disc": 92976.0,
          "pct": 18.1
        },
        {
          "code": "JCSNF14",
          "usos": 5,
          "disc": 35132.0,
          "pct": 9.0
        },
        {
          "code": "442174",
          "usos": 5,
          "disc": 91931.0,
          "pct": 18.1
        },
        {
          "code": "AJUSTECSC",
          "usos": 4,
          "disc": 80281.0,
          "pct": 27.5
        },
        {
          "code": "JCSDACPA14",
          "usos": 3,
          "disc": 13994.0,
          "pct": 10.0
        },
        {
          "code": "409767",
          "usos": 3,
          "disc": 25390.0,
          "pct": 20.0
        },
        {
          "code": "540477",
          "usos": 3,
          "disc": 104180.0,
          "pct": 17.4
        },
        {
          "code": "549162",
          "usos": 3,
          "disc": 72895.0,
          "pct": 17.1
        },
        {
          "code": "374827",
          "usos": 3,
          "disc": 28753.0,
          "pct": 17.6
        },
        {
          "code": "520387",
          "usos": 3,
          "disc": 36761.0,
          "pct": 16.9
        },
        {
          "code": "SZ10-V3MZQ4LX",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.3
        },
        {
          "code": "SZ10-SVCN4T5T",
          "usos": 1,
          "disc": 10000.0,
          "pct": 56.7
        },
        {
          "code": "SZ30-J6VKAORE",
          "usos": 1,
          "disc": 30000.0,
          "pct": 60.0
        },
        {
          "code": "SZ10-9XN99Z4X",
          "usos": 1,
          "disc": 10000.0,
          "pct": 59.0
        },
        {
          "code": "SZ30-BLCBMZ8V",
          "usos": 1,
          "disc": 30000.0,
          "pct": 69.8
        },
        {
          "code": "SZ30-N92CLN4J",
          "usos": 1,
          "disc": 30000.0,
          "pct": 29.1
        },
        {
          "code": "SZ10-7VPP6GNT",
          "usos": 1,
          "disc": 10000.0,
          "pct": 13.5
        },
        {
          "code": "SZ30-3MWNSGGI",
          "usos": 1,
          "disc": 30000.0,
          "pct": 73.2
        },
        {
          "code": "SZ15-9ZHNLNTZ",
          "usos": 1,
          "disc": 15000.0,
          "pct": 68.2
        },
        {
          "code": "SZ-MUK5PY9S",
          "usos": 1,
          "disc": 17498.0,
          "pct": 25.0
        },
        {
          "code": "SZ30-YXZ9IBLR",
          "usos": 1,
          "disc": 30000.0,
          "pct": 61.2
        },
        {
          "code": "SZ30-QPYLGRFA",
          "usos": 1,
          "disc": 30000.0,
          "pct": 77.0
        },
        {
          "code": "SZ30-PUESTOT3",
          "usos": 1,
          "disc": 30000.0,
          "pct": 57.7
        },
        {
          "code": "SZ30-EW4SX7R4",
          "usos": 1,
          "disc": 30000.0,
          "pct": 82.0
        },
        {
          "code": "SZ30-WL556PN5",
          "usos": 1,
          "disc": 30000.0,
          "pct": 50.0
        },
        {
          "code": "SZ-ANUBGV3G",
          "usos": 1,
          "disc": 13349.0,
          "pct": 15.0
        },
        {
          "code": "SZ-SM5CA5UC",
          "usos": 1,
          "disc": 4499.0,
          "pct": 15.0
        },
        {
          "code": "SZ30-GP6CGMPT",
          "usos": 1,
          "disc": 30000.0,
          "pct": 65.2
        },
        {
          "code": "SZ30-6JMDOT4B",
          "usos": 1,
          "disc": 30000.0,
          "pct": 57.7
        },
        {
          "code": "SZ15-66ZLVVCB",
          "usos": 1,
          "disc": 15000.0,
          "pct": 65.2
        },
        {
          "code": "SZ15-MZOBPL00",
          "usos": 1,
          "disc": 15000.0,
          "pct": 31.9
        },
        {
          "code": "SZ10-Y6DHM3P2",
          "usos": 1,
          "disc": 10000.0,
          "pct": 30.3
        },
        {
          "code": "SZ15-WC3NH92I",
          "usos": 1,
          "disc": 15000.0,
          "pct": 39.0
        },
        {
          "code": "SZ30-07Z7ABK4",
          "usos": 1,
          "disc": 30000.0,
          "pct": 45.5
        },
        {
          "code": "SZ10-9QAZG5FT",
          "usos": 1,
          "disc": 10000.0,
          "pct": 52.7
        },
        {
          "code": "SZ15-S8F2F85N",
          "usos": 1,
          "disc": 15000.0,
          "pct": 24.2
        },
        {
          "code": "SZ10-WEXCWCBX",
          "usos": 1,
          "disc": 10000.0,
          "pct": 30.3
        },
        {
          "code": "SZ20-KEFLWTI6",
          "usos": 1,
          "disc": 20000.0,
          "pct": 33.3
        },
        {
          "code": "SZ10-IGTWVLOA",
          "usos": 1,
          "disc": 10000.0,
          "pct": 36.8
        },
        {
          "code": "SZ10-VMORM72L",
          "usos": 1,
          "disc": 10000.0,
          "pct": 43.5
        },
        {
          "code": "SZ30-M6EO1DWK",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.0
        },
        {
          "code": "SZ15-KEDDKB0Z",
          "usos": 1,
          "disc": 15000.0,
          "pct": 62.5
        },
        {
          "code": "SZ15-GSNJ40K7",
          "usos": 1,
          "disc": 15000.0,
          "pct": 73.2
        },
        {
          "code": "SZ30-9RLUSYGH",
          "usos": 1,
          "disc": 30000.0,
          "pct": 65.2
        },
        {
          "code": "SZ10-11MD1QH7",
          "usos": 1,
          "disc": 10000.0,
          "pct": 40.0
        },
        {
          "code": "SZ20-JN4M3LNO",
          "usos": 1,
          "disc": 20000.0,
          "pct": 28.6
        },
        {
          "code": "SZ15-G3WIUP2S",
          "usos": 1,
          "disc": 15000.0,
          "pct": 22.7
        },
        {
          "code": "SZ15-VECSL7GX",
          "usos": 1,
          "disc": 15000.0,
          "pct": 21.7
        },
        {
          "code": "SZ10-3BEUWCQM",
          "usos": 1,
          "disc": 10000.0,
          "pct": 52.7
        },
        {
          "code": "SZ30-IGCFQBI2",
          "usos": 1,
          "disc": 30000.0,
          "pct": 45.5
        },
        {
          "code": "SZ15-DQITA8II",
          "usos": 1,
          "disc": 15000.0,
          "pct": 73.3
        },
        {
          "code": "SZ-HU9EOWIY",
          "usos": 1,
          "disc": 12120.0,
          "pct": 25.0
        },
        {
          "code": "VUELVE15",
          "usos": 1,
          "disc": 12749.0,
          "pct": 15.0
        },
        {
          "code": "SZ30-6KU3BHE3",
          "usos": 1,
          "disc": 30000.0,
          "pct": 65.2
        },
        {
          "code": "CLUB-UV3YILM",
          "usos": 1,
          "disc": 3199.0,
          "pct": 10.0
        },
        {
          "code": "CLUB-VSZ5FP1",
          "usos": 1,
          "disc": 2899.0,
          "pct": 10.0
        },
        {
          "code": "CLUB-5PAOSB7",
          "usos": 1,
          "disc": 2699.0,
          "pct": 10.0
        },
        {
          "code": "CLUB-R3INQY8",
          "usos": 1,
          "disc": 2199.0,
          "pct": 10.0
        },
        {
          "code": "SZ10-1RSD34Z3",
          "usos": 1,
          "disc": 10000.0,
          "pct": 52.7
        },
        {
          "code": "CLUB-VPRH9RN",
          "usos": 1,
          "disc": 2199.0,
          "pct": 10.0
        },
        {
          "code": "SZ10-44XRUPVS",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "SZ10-3EK8PNC1",
          "usos": 1,
          "disc": 10000.0,
          "pct": 41.7
        },
        {
          "code": "SZ30-CJ43AOFP",
          "usos": 1,
          "disc": 30000.0,
          "pct": 42.9
        },
        {
          "code": "SZ-S4FIHZ2P",
          "usos": 1,
          "disc": 13748.0,
          "pct": 25.0
        },
        {
          "code": "519716",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-JY4RFJE",
          "usos": 1,
          "disc": 2499.0,
          "pct": 10.0
        },
        {
          "code": "CLUB-N7E69SC",
          "usos": 1,
          "disc": 2299.0,
          "pct": 10.0
        },
        {
          "code": "CLUB-XDIVGCY",
          "usos": 1,
          "disc": 3199.0,
          "pct": 10.0
        },
        {
          "code": "CLUB-E1EDN9G",
          "usos": 1,
          "disc": 5999.0,
          "pct": 10.0
        },
        {
          "code": "CLUB-EINPGUH",
          "usos": 1,
          "disc": 7799.0,
          "pct": 10.0
        },
        {
          "code": "SUPER15ZOO",
          "usos": 1,
          "disc": 11999.0,
          "pct": 15.0
        },
        {
          "code": "SZ-EZHWOFID",
          "usos": 1,
          "disc": 6398.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-VO7LN7QN",
          "usos": 1,
          "disc": 20000.0,
          "pct": 41.7
        },
        {
          "code": "SZ15-NQP9Z2ZA",
          "usos": 1,
          "disc": 15000.0,
          "pct": 14.7
        },
        {
          "code": "SZ10-2HRBG5HP",
          "usos": 1,
          "disc": 10000.0,
          "pct": 14.3
        },
        {
          "code": "SZ20-SGDYUAXF",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.3
        },
        {
          "code": "SZ30-MMN2PHHC",
          "usos": 1,
          "disc": 30000.0,
          "pct": 38.5
        },
        {
          "code": "SZ30-6W14JPB1",
          "usos": 1,
          "disc": 30000.0,
          "pct": 49.2
        },
        {
          "code": "SZ10-7B7YJ0C9",
          "usos": 1,
          "disc": 10000.0,
          "pct": 19.6
        },
        {
          "code": "SZ10-QYUY7CIO",
          "usos": 1,
          "disc": 10000.0,
          "pct": 17.5
        },
        {
          "code": "SZ20-SYFWCYKO",
          "usos": 1,
          "disc": 20000.0,
          "pct": 77.7
        },
        {
          "code": "SZ10-5BZ9EKUU",
          "usos": 1,
          "disc": 10000.0,
          "pct": 17.9
        },
        {
          "code": "SZ15-87830JV3",
          "usos": 1,
          "disc": 15000.0,
          "pct": 46.9
        },
        {
          "code": "SZ15-T2KFAG4A",
          "usos": 1,
          "disc": 15000.0,
          "pct": 28.3
        },
        {
          "code": "SZ20-NKXPBXTJ",
          "usos": 1,
          "disc": 20000.0,
          "pct": 32.3
        },
        {
          "code": "SZ-SLAUB93C",
          "usos": 1,
          "disc": 17498.0,
          "pct": 25.0
        },
        {
          "code": "SZ30-J8W1QKRY",
          "usos": 1,
          "disc": 30000.0,
          "pct": 78.5
        },
        {
          "code": "SZ30-HZWSHTNG",
          "usos": 1,
          "disc": 30000.0,
          "pct": 81.1
        },
        {
          "code": "SZ10-8B8PVAN6",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "SZ10-NQGT4CPY",
          "usos": 1,
          "disc": 10000.0,
          "pct": 33.5
        },
        {
          "code": "SZ20-QXONSGR6",
          "usos": 1,
          "disc": 20000.0,
          "pct": 46.5
        },
        {
          "code": "SZ15-F1J2381Z",
          "usos": 1,
          "disc": 15000.0,
          "pct": 51.7
        },
        {
          "code": "SZ10-T2J3QWCV",
          "usos": 1,
          "disc": 10000.0,
          "pct": 35.8
        },
        {
          "code": "SZ20-NR5D69I0",
          "usos": 1,
          "disc": 20000.0,
          "pct": 29.0
        },
        {
          "code": "SZ20-7C0UOPGL",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "SZ30-EQ35Y8HK",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.0
        },
        {
          "code": "SZ30-S9883I34",
          "usos": 1,
          "disc": 30000.0,
          "pct": 37.5
        },
        {
          "code": "SZ15-YSOLIKLW",
          "usos": 1,
          "disc": 15000.0,
          "pct": 45.5
        },
        {
          "code": "SZ30-RROCDX57",
          "usos": 1,
          "disc": 30000.0,
          "pct": 51.7
        },
        {
          "code": "SZ20-C2MLEVSU",
          "usos": 1,
          "disc": 20000.0,
          "pct": 52.6
        },
        {
          "code": "SZ10-Z3NUG7OE",
          "usos": 1,
          "disc": 10000.0,
          "pct": 24.6
        },
        {
          "code": "SZ15-TXR7PAOB",
          "usos": 1,
          "disc": 15000.0,
          "pct": 28.9
        },
        {
          "code": "SZ20-5C4V8TWN",
          "usos": 1,
          "disc": 20000.0,
          "pct": 36.0
        },
        {
          "code": "SZ10-GF9RAV0X",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.3
        },
        {
          "code": "SZ10-G2KF5K58",
          "usos": 1,
          "disc": 10000.0,
          "pct": 18.5
        },
        {
          "code": "SZ-T5BXUPAK",
          "usos": 1,
          "disc": 13798.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-FBAGL202",
          "usos": 1,
          "disc": 15000.0,
          "pct": 28.9
        },
        {
          "code": "SZ10-AEVTP53Y",
          "usos": 1,
          "disc": 10000.0,
          "pct": 22.2
        },
        {
          "code": "SZ-B6W52USY",
          "usos": 1,
          "disc": 9198.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-59MZFON2",
          "usos": 1,
          "disc": 15000.0,
          "pct": 27.3
        },
        {
          "code": "SZ30-VGGC4WC4",
          "usos": 1,
          "disc": 30000.0,
          "pct": 43.5
        },
        {
          "code": "SZ20-BZG7C744",
          "usos": 1,
          "disc": 20000.0,
          "pct": 43.5
        },
        {
          "code": "SZ10-CG1O1AYS",
          "usos": 1,
          "disc": 10000.0,
          "pct": 43.5
        },
        {
          "code": "SZ15-ITT8S2JR",
          "usos": 1,
          "disc": 15000.0,
          "pct": 68.2
        },
        {
          "code": "SZ-FKXWEKWT",
          "usos": 1,
          "disc": 5999.0,
          "pct": 15.0
        },
        {
          "code": "SZ30-YC20M5CI",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.4
        },
        {
          "code": "SZ15-IHOTX246",
          "usos": 1,
          "disc": 15000.0,
          "pct": 23.4
        },
        {
          "code": "SZ30-3G53QK7S",
          "usos": 1,
          "disc": 30000.0,
          "pct": 45.5
        },
        {
          "code": "SZ10-H0Z7IBUT",
          "usos": 1,
          "disc": 10000.0,
          "pct": 58.9
        },
        {
          "code": "SZ15-2C7EHO9N",
          "usos": 1,
          "disc": 15000.0,
          "pct": 53.6
        },
        {
          "code": "CLUB-Y8IMUQU",
          "usos": 1,
          "disc": 4198.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-VMSHOLK",
          "usos": 1,
          "disc": 15996.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-6KUJTB9",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-5N8ZQ3Q",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-CMFG0RD",
          "usos": 1,
          "disc": 13198.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-M4D5UB0",
          "usos": 1,
          "disc": 7598.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-VL1AZONE",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.0
        },
        {
          "code": "CLUB-E8RNGHO",
          "usos": 1,
          "disc": 5398.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-T5489KZ",
          "usos": 1,
          "disc": 7960.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-OYOV4RC",
          "usos": 1,
          "disc": 11398.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-HDFY0FD",
          "usos": 1,
          "disc": 10990.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-UBMLPOM",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-VNO0B0FA",
          "usos": 1,
          "disc": 10000.0,
          "pct": 33.3
        },
        {
          "code": "SZ20-DMNROPS6",
          "usos": 1,
          "disc": 20000.0,
          "pct": 66.7
        },
        {
          "code": "CLUB-L81CG8X",
          "usos": 1,
          "disc": 7598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-0H7VE5Y",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "SZ-QRXODEKO",
          "usos": 1,
          "disc": 4949.0,
          "pct": 15.0
        },
        {
          "code": "CLUB-RSETQI5",
          "usos": 1,
          "disc": 2396.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-7638WWW",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-TGFEZF0K",
          "usos": 1,
          "disc": 30000.0,
          "pct": 41.7
        },
        {
          "code": "SZ30-NIL4UCWW",
          "usos": 1,
          "disc": 30000.0,
          "pct": 38.0
        },
        {
          "code": "CLUB-JZK44CD",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "SZ-YKXBUZEF",
          "usos": 1,
          "disc": 16998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-BLEG0ZP",
          "usos": 1,
          "disc": 7598.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-917U5CUC",
          "usos": 1,
          "disc": 15000.0,
          "pct": 60.1
        },
        {
          "code": "SZ30-MAAH3I2F",
          "usos": 1,
          "disc": 30000.0,
          "pct": 57.7
        },
        {
          "code": "SZ-HZP59ORA",
          "usos": 1,
          "disc": 12498.0,
          "pct": 25.0
        },
        {
          "code": "SZ10-JNPQLF5J",
          "usos": 1,
          "disc": 10000.0,
          "pct": 26.3
        },
        {
          "code": "SZ20-UZ0WTVW5",
          "usos": 1,
          "disc": 20000.0,
          "pct": 35.1
        },
        {
          "code": "SZ20-Z0EVQ6AL",
          "usos": 1,
          "disc": 20000.0,
          "pct": 54.8
        },
        {
          "code": "SZ30-4C9AM76I",
          "usos": 1,
          "disc": 30000.0,
          "pct": 54.6
        },
        {
          "code": "SZ-PNES3EZV",
          "usos": 1,
          "disc": 43745.0,
          "pct": 25.0
        },
        {
          "code": "SZ20-0OBOY0WO",
          "usos": 1,
          "disc": 20000.0,
          "pct": 31.3
        },
        {
          "code": "SZ20-CYPCIVAY",
          "usos": 1,
          "disc": 20000.0,
          "pct": 26.7
        },
        {
          "code": "SZ-QU6E6UXU",
          "usos": 1,
          "disc": 17248.0,
          "pct": 25.0
        },
        {
          "code": "SZ-GD9H4QTX",
          "usos": 1,
          "disc": 11492.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-23G2H11D",
          "usos": 1,
          "disc": 15000.0,
          "pct": 22.1
        },
        {
          "code": "SZ20-ZFCKB510",
          "usos": 1,
          "disc": 20000.0,
          "pct": 44.5
        },
        {
          "code": "SZ15-6KQ2F1FW",
          "usos": 1,
          "disc": 15000.0,
          "pct": 68.3
        },
        {
          "code": "SZ-FB5DH6HY",
          "usos": 1,
          "disc": 9498.0,
          "pct": 25.0
        },
        {
          "code": "SZ10-I7DVWF1D",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "SZ15-O5CZLYLQ",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.1
        },
        {
          "code": "SZ15-LABXWPAX",
          "usos": 1,
          "disc": 15000.0,
          "pct": 30.6
        },
        {
          "code": "SZ10-E5T6Z8B7",
          "usos": 1,
          "disc": 10000.0,
          "pct": 43.5
        },
        {
          "code": "SZ30-TS53CD4P",
          "usos": 1,
          "disc": 30000.0,
          "pct": 52.6
        },
        {
          "code": "SZ30-CT389VTN",
          "usos": 1,
          "disc": 30000.0,
          "pct": 57.7
        },
        {
          "code": "SZ15-OLVGET4Z",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "SZ10-LXQZQBD8",
          "usos": 1,
          "disc": 10000.0,
          "pct": 20.4
        },
        {
          "code": "SZ10-6PT8N4CC",
          "usos": 1,
          "disc": 10000.0,
          "pct": 21.7
        },
        {
          "code": "SZ20-THNF0AD3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 29.4
        },
        {
          "code": "SZ20-FVV8CJXO",
          "usos": 1,
          "disc": 20000.0,
          "pct": 26.7
        },
        {
          "code": "SZ15-9V8XXMJE",
          "usos": 1,
          "disc": 15000.0,
          "pct": 27.8
        },
        {
          "code": "SZ15-U3VBAWMN",
          "usos": 1,
          "disc": 15000.0,
          "pct": 53.6
        },
        {
          "code": "SZ15-0KUXNG42",
          "usos": 1,
          "disc": 15000.0,
          "pct": 53.6
        },
        {
          "code": "SZ-L363YCWH",
          "usos": 1,
          "disc": 9798.0,
          "pct": 20.0
        },
        {
          "code": "SZ-EU9LHHE6",
          "usos": 1,
          "disc": 5999.0,
          "pct": 15.0
        },
        {
          "code": "SZ10-QEYKCHZW",
          "usos": 1,
          "disc": 10000.0,
          "pct": 34.5
        },
        {
          "code": "SZ30-LMPEDMT3",
          "usos": 1,
          "disc": 30000.0,
          "pct": 31.3
        },
        {
          "code": "SZ30-2G87GV6M",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.5
        },
        {
          "code": "SZ20-L3DCVQ4M",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.1
        },
        {
          "code": "SZ15-W6ACRDGS",
          "usos": 1,
          "disc": 15000.0,
          "pct": 24.3
        },
        {
          "code": "CLUB-VJ2Q90G",
          "usos": 1,
          "disc": 4596.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-NR1LEBJ",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-SLGID3Z",
          "usos": 1,
          "disc": 9998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-9DNOR37",
          "usos": 1,
          "disc": 17998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-CMABRR5",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-STU86Q8",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-Y50YEDW",
          "usos": 1,
          "disc": 4998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-13QZ4BIL",
          "usos": 1,
          "disc": 15000.0,
          "pct": 39.5
        },
        {
          "code": "CLUB-RNWGAUN",
          "usos": 1,
          "disc": 20990.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-3CAFN45S",
          "usos": 1,
          "disc": 10000.0,
          "pct": 45.5
        },
        {
          "code": "SZ15-TSMGHPX2",
          "usos": 1,
          "disc": 15000.0,
          "pct": 54.5
        },
        {
          "code": "CLUB-C7E0GRS",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-LEP95T8X",
          "usos": 1,
          "disc": 30000.0,
          "pct": 42.3
        },
        {
          "code": "SZ20-BUNEUVV3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 25.3
        },
        {
          "code": "CLUB-PK60K9D",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-YM4J5BOE",
          "usos": 1,
          "disc": 10000.0,
          "pct": 35.7
        },
        {
          "code": "CLUB-ZKG9UN9",
          "usos": 1,
          "disc": 16998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-G5M79IK",
          "usos": 1,
          "disc": 5598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-C7DCBUO",
          "usos": 1,
          "disc": 7390.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-D3GGOUEQ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 26.3
        },
        {
          "code": "CLUB-WBDJRG1",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-9Q6H7D1S",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "CLUB-LA4MJ9D",
          "usos": 1,
          "disc": 4996.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-O0D3WY4",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-TXOTK6G",
          "usos": 1,
          "disc": 3998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-7OJHPP6",
          "usos": 1,
          "disc": 9598.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-NEDQ0XLG",
          "usos": 1,
          "disc": 10000.0,
          "pct": 19.6
        },
        {
          "code": "SZ30-ZDBKJU88",
          "usos": 1,
          "disc": 30000.0,
          "pct": 66.7
        },
        {
          "code": "CLUB-WL8TJX8",
          "usos": 1,
          "disc": 6598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-QF0WZT2",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-9Z2NVIH",
          "usos": 1,
          "disc": 3998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-H2AUWLS",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-6V84R7Z",
          "usos": 1,
          "disc": 2998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-VZ5MO6Y",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-N8665S8Y",
          "usos": 1,
          "disc": 15000.0,
          "pct": 62.5
        },
        {
          "code": "SZ10-QB5HRJDZ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 26.3
        },
        {
          "code": "SZ30-26UEDQTQ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 37.5
        },
        {
          "code": "SZ15-E6STG4CV",
          "usos": 1,
          "disc": 15000.0,
          "pct": 40.6
        },
        {
          "code": "SZ-4K3WUI2N",
          "usos": 1,
          "disc": 10049.0,
          "pct": 15.0
        },
        {
          "code": "SZ30-K2P6XXJM",
          "usos": 1,
          "disc": 30000.0,
          "pct": 40.6
        },
        {
          "code": "SZ20-DPO7BTMA",
          "usos": 1,
          "disc": 20000.0,
          "pct": 42.6
        },
        {
          "code": "SZ20-EMHWW4I4",
          "usos": 1,
          "disc": 20000.0,
          "pct": 25.6
        },
        {
          "code": "434503",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-74QBST46",
          "usos": 1,
          "disc": 10000.0,
          "pct": 16.7
        },
        {
          "code": "SZ15-GV4OO9FK",
          "usos": 1,
          "disc": 15000.0,
          "pct": 62.5
        },
        {
          "code": "SZ30-B7V4GWEO",
          "usos": 1,
          "disc": 30000.0,
          "pct": 37.5
        },
        {
          "code": "SZ-B7BPTQRP",
          "usos": 1,
          "disc": 33730.0,
          "pct": 25.0
        },
        {
          "code": "SZ15-PU98XFPC",
          "usos": 1,
          "disc": 15000.0,
          "pct": 60.0
        },
        {
          "code": "SZ15-CH7RWBBK",
          "usos": 1,
          "disc": 15000.0,
          "pct": 30.0
        },
        {
          "code": "SZ20-QSNFO6QR",
          "usos": 1,
          "disc": 20000.0,
          "pct": 63.7
        },
        {
          "code": "CLUB-TE3BZFO",
          "usos": 1,
          "disc": 3998.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-UCFM4FHL",
          "usos": 1,
          "disc": 20000.0,
          "pct": 64.5
        },
        {
          "code": "SZ10-SP6G3IQH",
          "usos": 1,
          "disc": 10000.0,
          "pct": 60.3
        },
        {
          "code": "SZ-DQVVHWLI",
          "usos": 1,
          "disc": 10499.0,
          "pct": 15.0
        },
        {
          "code": "SZ10-COYFRW33",
          "usos": 1,
          "disc": 10000.0,
          "pct": 50.0
        },
        {
          "code": "SZ20-74CQJP5E",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "SZ20-XFV416EX",
          "usos": 1,
          "disc": 20000.0,
          "pct": 31.8
        },
        {
          "code": "SZ30-GC15KTHU",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.2
        },
        {
          "code": "SZ-QA6CIMS3",
          "usos": 1,
          "disc": 10949.0,
          "pct": 15.0
        },
        {
          "code": "SZ15-39XN2FQU",
          "usos": 1,
          "disc": 15000.0,
          "pct": 33.3
        },
        {
          "code": "SZ10-BL8IS8IC",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "SZ30-U8IDF4NR",
          "usos": 1,
          "disc": 30000.0,
          "pct": 78.1
        },
        {
          "code": "SZ20-VH2ZVM38",
          "usos": 1,
          "disc": 20000.0,
          "pct": 33.3
        },
        {
          "code": "SZ20-6NID5ESX",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.8
        },
        {
          "code": "SZ10-LT7UIXPV",
          "usos": 1,
          "disc": 10000.0,
          "pct": 34.5
        },
        {
          "code": "SZ10-1OWOKSM2",
          "usos": 1,
          "disc": 10000.0,
          "pct": 16.1
        },
        {
          "code": "SZ30-9VCUYNEY",
          "usos": 1,
          "disc": 30000.0,
          "pct": 60.1
        },
        {
          "code": "SZ20-KIT1UCI0",
          "usos": 1,
          "disc": 20000.0,
          "pct": 44.5
        },
        {
          "code": "BCI059-W2UH",
          "usos": 1,
          "disc": 25000.0,
          "pct": 32.1
        },
        {
          "code": "SZ-Y59YTBRX",
          "usos": 1,
          "disc": 6449.0,
          "pct": 15.0
        },
        {
          "code": "SZ-GD24KQNI",
          "usos": 1,
          "disc": 20691.0,
          "pct": 15.0
        },
        {
          "code": "SZ30-96JHZQC0",
          "usos": 1,
          "disc": 30000.0,
          "pct": 53.6
        },
        {
          "code": "SZ-OAMR6M5Y",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-8UM8Z07Y",
          "usos": 1,
          "disc": 30000.0,
          "pct": 38.0
        },
        {
          "code": "SZ10-HF3IR5PZ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 16.1
        },
        {
          "code": "SZ30-TH5SWKIE",
          "usos": 1,
          "disc": 30000.0,
          "pct": 75.0
        },
        {
          "code": "CLUB-VAK0LML",
          "usos": 1,
          "disc": 13596.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-2TL3SJ1",
          "usos": 1,
          "disc": 20998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-UE4WLQA",
          "usos": 1,
          "disc": 5398.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-EUTGRF0",
          "usos": 1,
          "disc": 7598.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-6W537DV2",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "BCI037-OO9K",
          "usos": 1,
          "disc": 25000.0,
          "pct": 65.9
        },
        {
          "code": "CLUB-1XG24UP",
          "usos": 1,
          "disc": 16398.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-5DDPWOS",
          "usos": 1,
          "disc": 5198.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-VION9WN",
          "usos": 1,
          "disc": 8198.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-CYU4GK6K",
          "usos": 1,
          "disc": 30000.0,
          "pct": 37.5
        },
        {
          "code": "CLUB-MN0Z0QP",
          "usos": 1,
          "disc": 14594.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-2ZBNSWIX",
          "usos": 1,
          "disc": 30000.0,
          "pct": 37.5
        },
        {
          "code": "CLUB-MEVFC6A",
          "usos": 1,
          "disc": 4798.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-6CNTCUH",
          "usos": 1,
          "disc": 17998.0,
          "pct": 20.0
        },
        {
          "code": "525731",
          "usos": 1,
          "disc": 8084.0,
          "pct": 17.4
        },
        {
          "code": "CLUB-FX69O66",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-Z6BN1MFW",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "SZ10-QZW93VAW",
          "usos": 1,
          "disc": 10000.0,
          "pct": 26.3
        },
        {
          "code": "CLUB-8PK5N6R",
          "usos": 1,
          "disc": 6998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-6CW61QAU",
          "usos": 1,
          "disc": 10000.0,
          "pct": 32.5
        },
        {
          "code": "SZ10-WUW541TM",
          "usos": 1,
          "disc": 10000.0,
          "pct": 32.3
        },
        {
          "code": "CLUB-LWLWGDC",
          "usos": 1,
          "disc": 24996.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-CBMDLXL",
          "usos": 1,
          "disc": 5398.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-M9ULQRN",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-CEJJBB9S",
          "usos": 1,
          "disc": 15000.0,
          "pct": 24.2
        },
        {
          "code": "CLUB-PJ48A97",
          "usos": 1,
          "disc": 9998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-XAMS57R",
          "usos": 1,
          "disc": 3626.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-3UBGDOA",
          "usos": 1,
          "disc": 2596.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-7RJO1KWD",
          "usos": 1,
          "disc": 20000.0,
          "pct": 51.4
        },
        {
          "code": "CLUB-1L6TZ4U",
          "usos": 1,
          "disc": 8272.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-6GJWX5IH",
          "usos": 1,
          "disc": 10000.0,
          "pct": 55.6
        },
        {
          "code": "SZ15-4G4I42KH",
          "usos": 1,
          "disc": 15000.0,
          "pct": 60.0
        },
        {
          "code": "SZ30-R75DSQYA",
          "usos": 1,
          "disc": 30000.0,
          "pct": 66.8
        },
        {
          "code": "SZ10-4BWFSETE",
          "usos": 1,
          "disc": 10000.0,
          "pct": 55.6
        },
        {
          "code": "SZ15-VFDUYSCA",
          "usos": 1,
          "disc": 15000.0,
          "pct": 74.5
        },
        {
          "code": "BCI069-L5Z6",
          "usos": 1,
          "disc": 25000.0,
          "pct": 45.5
        },
        {
          "code": "SZ10-99JFIWCE",
          "usos": 1,
          "disc": 10000.0,
          "pct": 50.0
        },
        {
          "code": "CLUB-JHBE1E7",
          "usos": 1,
          "disc": 11950.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-P5WPBHIC",
          "usos": 1,
          "disc": 10000.0,
          "pct": 40.0
        },
        {
          "code": "SZ30-KIELK0Q6",
          "usos": 1,
          "disc": 30000.0,
          "pct": 48.4
        },
        {
          "code": "SZ30-LZANNXS4",
          "usos": 1,
          "disc": 30000.0,
          "pct": 65.3
        },
        {
          "code": "SZ20-GR92AH08",
          "usos": 1,
          "disc": 20000.0,
          "pct": 32.3
        },
        {
          "code": "SZ10-TCL2TN1A",
          "usos": 1,
          "disc": 10000.0,
          "pct": 63.1
        },
        {
          "code": "SZ30-OSTXYRHH",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.4
        },
        {
          "code": "SZ-EKNUKPZQ",
          "usos": 1,
          "disc": 7499.0,
          "pct": 15.0
        },
        {
          "code": "BCI079-36OA",
          "usos": 1,
          "disc": 25000.0,
          "pct": 73.6
        },
        {
          "code": "SZ10-NOU2HCXB",
          "usos": 1,
          "disc": 10000.0,
          "pct": 58.9
        },
        {
          "code": "SZ30-KVJXDJZT",
          "usos": 1,
          "disc": 30000.0,
          "pct": 66.7
        },
        {
          "code": "SZ15-Q4B4DMJ9",
          "usos": 1,
          "disc": 15000.0,
          "pct": 42.9
        },
        {
          "code": "SZ-5ETNN4LD",
          "usos": 1,
          "disc": 8999.0,
          "pct": 15.0
        },
        {
          "code": "BCI073-NI9R",
          "usos": 1,
          "disc": 25000.0,
          "pct": 86.3
        },
        {
          "code": "SZ10-1TRCL6YV",
          "usos": 1,
          "disc": 10000.0,
          "pct": 45.5
        },
        {
          "code": "SZ15-21J84XYJ",
          "usos": 1,
          "disc": 15000.0,
          "pct": 36.6
        },
        {
          "code": "BCI061-GGGV",
          "usos": 1,
          "disc": 25000.0,
          "pct": 75.8
        },
        {
          "code": "SZ-5IK4762Y",
          "usos": 1,
          "disc": 11399.0,
          "pct": 15.0
        },
        {
          "code": "SZ20-GK8H8ZL7",
          "usos": 1,
          "disc": 20000.0,
          "pct": 60.6
        },
        {
          "code": "SZ30-SZ1PYXSF",
          "usos": 1,
          "disc": 30000.0,
          "pct": 29.4
        },
        {
          "code": "SZ10-S27XFVVS",
          "usos": 1,
          "disc": 10000.0,
          "pct": 41.7
        },
        {
          "code": "BCI062-ELBS",
          "usos": 1,
          "disc": 25000.0,
          "pct": 89.4
        },
        {
          "code": "SZ-ABEFIUXC",
          "usos": 1,
          "disc": 18723.0,
          "pct": 25.0
        },
        {
          "code": "SZ10-ADGFSNZG",
          "usos": 1,
          "disc": 10000.0,
          "pct": 50.0
        }
      ],
      "shipping_detail": [
        {
          "method": "Click & Collect",
          "n": 10545,
          "pct": 38.9,
          "net": 590051457.0,
          "ticket": 55955.57,
          "avg_items": 1.4
        },
        {
          "method": "Santiago",
          "n": 6897,
          "pct": 25.4,
          "net": 443443676.0,
          "ticket": 64295.15,
          "avg_items": 1.8
        },
        {
          "method": "Express",
          "n": 4554,
          "pct": 16.8,
          "net": 257654841.0,
          "ticket": 56577.7,
          "avg_items": 1.7
        },
        {
          "method": "Programado",
          "n": 3917,
          "pct": 14.4,
          "net": 253559486.0,
          "ticket": 64733.08,
          "avg_items": 1.7
        },
        {
          "method": "Valparaiso",
          "n": 219,
          "pct": 0.8,
          "net": 12822307.0,
          "ticket": 58549.35,
          "avg_items": 1.1
        },
        {
          "method": "Bio_Bio",
          "n": 164,
          "pct": 0.6,
          "net": 10066658.0,
          "ticket": 61382.06,
          "avg_items": 1.2
        },
        {
          "method": "Antofagasta",
          "n": 161,
          "pct": 0.6,
          "net": 10345784.0,
          "ticket": 64259.53,
          "avg_items": 1.2
        },
        {
          "method": "Tarapaca",
          "n": 102,
          "pct": 0.4,
          "net": 6640229.0,
          "ticket": 65100.28,
          "avg_items": 1.2
        }
      ],
      "daily": [
        {
          "date": "2025-05-01",
          "orders": 594,
          "net": 26807057.0,
          "discount": 0.0,
          "ticket": 45129.73
        },
        {
          "date": "2025-05-02",
          "orders": 1429,
          "net": 63626413.0,
          "discount": 0.0,
          "ticket": 44525.13
        },
        {
          "date": "2025-05-03",
          "orders": 1017,
          "net": 44863048.0,
          "discount": 0.0,
          "ticket": 44113.12
        },
        {
          "date": "2025-05-04",
          "orders": 957,
          "net": 44146883.0,
          "discount": 0.0,
          "ticket": 46130.49
        },
        {
          "date": "2025-05-05",
          "orders": 1130,
          "net": 50989824.0,
          "discount": 0.0,
          "ticket": 45123.74
        },
        {
          "date": "2025-05-06",
          "orders": 1151,
          "net": 66088023.0,
          "discount": 0.0,
          "ticket": 57417.92
        },
        {
          "date": "2025-05-07",
          "orders": 1039,
          "net": 56233867.0,
          "discount": 0.0,
          "ticket": 54123.07
        },
        {
          "date": "2025-05-08",
          "orders": 886,
          "net": 49339638.0,
          "discount": 0.0,
          "ticket": 55688.08
        },
        {
          "date": "2025-05-09",
          "orders": 955,
          "net": 44722865.0,
          "discount": 0.0,
          "ticket": 46830.23
        },
        {
          "date": "2025-05-10",
          "orders": 691,
          "net": 30053439.0,
          "discount": 0.0,
          "ticket": 43492.68
        },
        {
          "date": "2025-05-11",
          "orders": 535,
          "net": 23900829.0,
          "discount": 0.0,
          "ticket": 44674.45
        },
        {
          "date": "2025-05-12",
          "orders": 914,
          "net": 45566679.0,
          "discount": 0.0,
          "ticket": 49854.13
        },
        {
          "date": "2025-05-13",
          "orders": 825,
          "net": 41403719.0,
          "discount": 0.0,
          "ticket": 50186.33
        },
        {
          "date": "2025-05-14",
          "orders": 867,
          "net": 43797133.0,
          "discount": 0.0,
          "ticket": 50515.72
        },
        {
          "date": "2025-05-15",
          "orders": 817,
          "net": 38201817.0,
          "discount": 0.0,
          "ticket": 46758.65
        },
        {
          "date": "2025-05-16",
          "orders": 924,
          "net": 43422469.0,
          "discount": 0.0,
          "ticket": 46994.01
        },
        {
          "date": "2025-05-17",
          "orders": 809,
          "net": 38545751.0,
          "discount": 0.0,
          "ticket": 47646.17
        },
        {
          "date": "2025-05-18",
          "orders": 667,
          "net": 33204034.0,
          "discount": 0.0,
          "ticket": 49781.16
        },
        {
          "date": "2025-05-19",
          "orders": 927,
          "net": 43466414.0,
          "discount": 0.0,
          "ticket": 46889.34
        },
        {
          "date": "2025-05-20",
          "orders": 834,
          "net": 48363444.0,
          "discount": 0.0,
          "ticket": 57989.74
        },
        {
          "date": "2025-05-21",
          "orders": 677,
          "net": 39355290.0,
          "discount": 0.0,
          "ticket": 58131.89
        },
        {
          "date": "2025-05-22",
          "orders": 857,
          "net": 50367365.0,
          "discount": 0.0,
          "ticket": 58771.72
        },
        {
          "date": "2025-05-23",
          "orders": 922,
          "net": 44540059.0,
          "discount": 0.0,
          "ticket": 48308.09
        },
        {
          "date": "2025-05-24",
          "orders": 610,
          "net": 27093643.0,
          "discount": 0.0,
          "ticket": 44415.81
        },
        {
          "date": "2025-05-25",
          "orders": 638,
          "net": 29355957.0,
          "discount": 0.0,
          "ticket": 46012.47
        },
        {
          "date": "2025-05-26",
          "orders": 887,
          "net": 42635106.0,
          "discount": 0.0,
          "ticket": 48066.64
        },
        {
          "date": "2025-05-27",
          "orders": 785,
          "net": 39279932.0,
          "discount": 0.0,
          "ticket": 50038.13
        },
        {
          "date": "2025-05-28",
          "orders": 879,
          "net": 41789663.0,
          "discount": 0.0,
          "ticket": 47542.28
        },
        {
          "date": "2025-05-29",
          "orders": 862,
          "net": 41405114.0,
          "discount": 0.0,
          "ticket": 48033.77
        },
        {
          "date": "2025-05-30",
          "orders": 1119,
          "net": 53263601.0,
          "discount": 0.0,
          "ticket": 47599.29
        },
        {
          "date": "2025-05-31",
          "orders": 807,
          "net": 39661233.0,
          "discount": 0.0,
          "ticket": 49146.51
        },
        {
          "date": "2025-06-01",
          "orders": 122,
          "net": 5661731.0,
          "discount": 0.0,
          "ticket": 46407.63
        }
      ],
      "meta": {
        "store": "SuperZoo Chile",
        "currency": "CLP",
        "symbol": "$",
        "periodo": "01/05/2025 – 01/06/2025"
      }
    },
    "deltas": {
      "orders": 28.0,
      "net": 22.2,
      "ticket": -4.6,
      "discount_pct": 4.7,
      "avg_items": 0.0
    },
    "store": "SuperZoo Chile",
    "symbol": "$",
    "currency": "CLP"
  }
};
