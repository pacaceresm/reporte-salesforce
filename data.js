const DASH_DATA = {
  "sp": {
    "a": {
      "periodo": "01/06/2026 – 15/06/2026",
      "fecha_inicio": "2026-06-01",
      "fecha_fin": "2026-06-15",
      "kpis": {
        "orders": 9203,
        "net": 1437425.31,
        "bruta": 2355543.45,
        "discount": 677410.16,
        "discount_pct": 28.8,
        "ticket": 156.19,
        "avg_items": 2.1
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 5831,
          "pct": 63.4,
          "net": 1209914.27
        },
        {
          "m": "Gato",
          "n": 3927,
          "pct": 42.7,
          "net": 769368.88
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 14040,
          "net": 1510814.34
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 2538,
          "net": 273433.8
        },
        {
          "cat": "Salud e higiene",
          "orders": 1195,
          "net": 125879.13
        },
        {
          "cat": "Accesorios",
          "orders": 729,
          "net": 46290.69
        },
        {
          "cat": "Juguetes",
          "orders": 382,
          "net": 14374.94
        },
        {
          "cat": "Arena y accesorios",
          "orders": 153,
          "net": 24616.99
        },
        {
          "cat": "Pet lovers",
          "orders": 11,
          "net": 339.47
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 4258,
          "pct": 46.3,
          "pos_avg": 1.5,
          "anc_pct": 88.0,
          "add_pct": 24.1,
          "net": 851827.08
        },
        {
          "sc": "Alimento húmedo",
          "n": 2239,
          "pct": 24.3,
          "pos_avg": 3.5,
          "anc_pct": 48.5,
          "add_pct": 78.5,
          "net": 234744.91
        },
        {
          "sc": "Snacks",
          "n": 1066,
          "pct": 11.6,
          "pos_avg": 4.0,
          "anc_pct": 30.7,
          "add_pct": 86.1,
          "net": 65727.86
        },
        {
          "sc": "Antiparasitarios",
          "n": 1055,
          "pct": 11.5,
          "pos_avg": 1.5,
          "anc_pct": 83.8,
          "add_pct": 29.2,
          "net": 199937.69
        },
        {
          "sc": "Arena para gato",
          "n": 963,
          "pct": 10.5,
          "pos_avg": 1.6,
          "anc_pct": 67.8,
          "add_pct": 35.5,
          "net": 123119.05
        },
        {
          "sc": "Alimento natural",
          "n": 580,
          "pct": 6.3,
          "pos_avg": 1.3,
          "anc_pct": 86.0,
          "add_pct": 21.3,
          "net": 187579.66
        },
        {
          "sc": "Alimento medicado",
          "n": 545,
          "pct": 5.9,
          "pos_avg": 1.4,
          "anc_pct": 81.8,
          "add_pct": 23.1,
          "net": 103305.37
        },
        {
          "sc": "Pañales y control de orina",
          "n": 303,
          "pct": 3.3,
          "pos_avg": 1.5,
          "anc_pct": 75.6,
          "add_pct": 29.5,
          "net": 39551.55
        },
        {
          "sc": "Fármacos",
          "n": 280,
          "pct": 3.0,
          "pos_avg": 1.7,
          "anc_pct": 71.8,
          "add_pct": 39.3,
          "net": 16938.99
        },
        {
          "sc": "Juguetes",
          "n": 240,
          "pct": 2.6,
          "pos_avg": 3.2,
          "anc_pct": 40.0,
          "add_pct": 75.9,
          "net": 12896.81
        },
        {
          "sc": "Dietas veterinarias",
          "n": 230,
          "pct": 2.5,
          "pos_avg": 1.4,
          "anc_pct": 77.8,
          "add_pct": 27.5,
          "net": 54135.14
        },
        {
          "sc": "Alimento BARF",
          "n": 175,
          "pct": 1.9,
          "pos_avg": 2.4,
          "anc_pct": 62.9,
          "add_pct": 59.4,
          "net": 15076.17
        },
        {
          "sc": "Suplementos y vitaminas",
          "n": 174,
          "pct": 1.9,
          "pos_avg": 1.8,
          "anc_pct": 69.5,
          "add_pct": 35.3,
          "net": 12065.85
        },
        {
          "sc": "Platos y bebederos",
          "n": 114,
          "pct": 1.2,
          "pos_avg": 2.7,
          "anc_pct": 42.1,
          "add_pct": 66.9,
          "net": 6552.85
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Alimento húmedo",
        "Snacks",
        "Antiparasitarios",
        "Arena para gato",
        "Alimento natural"
      ],
      "cooc_matrix": [
        [
          null,
          18.4,
          9.2,
          3.5,
          7.2,
          1.7
        ],
        [
          34.9,
          null,
          16.4,
          10.8,
          11.1,
          3.7
        ],
        [
          36.8,
          34.5,
          null,
          6.1,
          11.3,
          4.0
        ],
        [
          14.0,
          22.9,
          6.2,
          null,
          1.5,
          0.9
        ],
        [
          32.0,
          25.9,
          12.5,
          1.7,
          null,
          1.1
        ],
        [
          12.8,
          14.3,
          7.4,
          1.6,
          1.9,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 3747,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 541,
              "pct": 14.4
            },
            {
              "sc": "Snacks",
              "n": 297,
              "pct": 7.9
            },
            {
              "sc": "Arena para gato",
              "n": 180,
              "pct": 4.8
            },
            {
              "sc": "Antiparasitarios",
              "n": 91,
              "pct": 2.4
            },
            {
              "sc": "Juguetes",
              "n": 32,
              "pct": 0.9
            },
            {
              "sc": "Pañales y control de orina",
              "n": 26,
              "pct": 0.7
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 1085,
          "addons": [
            {
              "sc": "Snacks",
              "n": 134,
              "pct": 12.4
            },
            {
              "sc": "Alimento seco",
              "n": 132,
              "pct": 12.2
            },
            {
              "sc": "Arena para gato",
              "n": 66,
              "pct": 6.1
            },
            {
              "sc": "Alimento medicado",
              "n": 24,
              "pct": 2.2
            },
            {
              "sc": "Antiparasitarios",
              "n": 14,
              "pct": 1.3
            },
            {
              "sc": "Alimento natural",
              "n": 12,
              "pct": 1.1
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 884,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 185,
              "pct": 20.9
            },
            {
              "sc": "Alimento seco",
              "n": 48,
              "pct": 5.4
            },
            {
              "sc": "Snacks",
              "n": 39,
              "pct": 4.4
            },
            {
              "sc": "Shampoo",
              "n": 12,
              "pct": 1.4
            },
            {
              "sc": "Juguetes",
              "n": 9,
              "pct": 1.0
            },
            {
              "sc": "Fármacos",
              "n": 8,
              "pct": 0.9
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 653,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 119,
              "pct": 18.2
            },
            {
              "sc": "Alimento seco",
              "n": 98,
              "pct": 15.0
            },
            {
              "sc": "Snacks",
              "n": 76,
              "pct": 11.6
            },
            {
              "sc": "Areneros y accesorios",
              "n": 15,
              "pct": 2.3
            },
            {
              "sc": "Alimento medicado",
              "n": 11,
              "pct": 1.7
            },
            {
              "sc": "Antiparasitarios",
              "n": 10,
              "pct": 1.5
            }
          ]
        },
        {
          "anchor": "Alimento natural",
          "n": 499,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 57,
              "pct": 11.4
            },
            {
              "sc": "Alimento seco",
              "n": 44,
              "pct": 8.8
            },
            {
              "sc": "Snacks",
              "n": 30,
              "pct": 6.0
            },
            {
              "sc": "Dietas veterinarias",
              "n": 20,
              "pct": 4.0
            },
            {
              "sc": "Alimento BARF",
              "n": 7,
              "pct": 1.4
            },
            {
              "sc": "Arena para gato",
              "n": 7,
              "pct": 1.4
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 446,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 48,
              "pct": 10.8
            },
            {
              "sc": "Alimento seco",
              "n": 40,
              "pct": 9.0
            },
            {
              "sc": "Snacks",
              "n": 30,
              "pct": 6.7
            },
            {
              "sc": "Arena para gato",
              "n": 14,
              "pct": 3.1
            },
            {
              "sc": "Fármacos",
              "n": 6,
              "pct": 1.3
            },
            {
              "sc": "Antiparasitarios",
              "n": 5,
              "pct": 1.1
            }
          ]
        }
      ],
      "hours": [
        127,
        60,
        40,
        16,
        16,
        35,
        84,
        154,
        342,
        526,
        637,
        724,
        685,
        609,
        658,
        613,
        547,
        566,
        550,
        518,
        522,
        454,
        411,
        309
      ],
      "shipping": [
        {
          "method": "Lima",
          "n": 4652,
          "pct": 50.5
        },
        {
          "method": "Click & Collect",
          "n": 2768,
          "pct": 30.1
        },
        {
          "method": "Express",
          "n": 1362,
          "pct": 14.8
        },
        {
          "method": "Programado",
          "n": 318,
          "pct": 3.5
        },
        {
          "method": "Arequipa",
          "n": 93,
          "pct": 1.0
        },
        {
          "method": "Lima-La-Libertad",
          "n": 88,
          "pct": 1.0
        },
        {
          "method": "Lambayeque",
          "n": 50,
          "pct": 0.5
        },
        {
          "method": "Piura",
          "n": 38,
          "pct": 0.4
        }
      ],
      "promos": [
        {
          "id": "PRECIOSBOMBA",
          "usos": 1161,
          "disc_net": 44615.99
        },
        {
          "id": "8M4HUMSELEC-WEB",
          "usos": 1040,
          "disc_net": 34717.66
        },
        {
          "id": "70-LIQUI-ALIM",
          "usos": 719,
          "disc_net": 139978.39
        },
        {
          "id": "PBOMBA",
          "usos": 596,
          "disc_net": 25606.68
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 516,
          "disc_net": 6912.08
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 504,
          "disc_net": 44775.19
        },
        {
          "id": "2x1HUMSELEC-WEB",
          "usos": 493,
          "disc_net": 11040.73
        },
        {
          "id": "50-LIQUI-ALIM",
          "usos": 398,
          "disc_net": 38228.96
        },
        {
          "id": "4x3SNACKSELEC",
          "usos": 394,
          "disc_net": 5291.31
        },
        {
          "id": "2x1TKPET",
          "usos": 331,
          "disc_net": 26894.76
        }
      ],
      "coupons": [
        {
          "code": "PRIMERA10",
          "usos": 412,
          "disc": 7066.55,
          "pct": 10.0
        },
        {
          "code": "30DESCUENTO",
          "usos": 290,
          "disc": 66936.29,
          "pct": 30.0
        },
        {
          "code": "15DESCUENTO",
          "usos": 42,
          "disc": 2212.5,
          "pct": 15.0
        },
        {
          "code": "PET15",
          "usos": 40,
          "disc": 1056.07,
          "pct": 15.0
        },
        {
          "code": "20DESCUENTO",
          "usos": 30,
          "disc": 2573.5,
          "pct": 20.0
        },
        {
          "code": "CPC15PE2",
          "usos": 9,
          "disc": 358.81,
          "pct": 15.0
        },
        {
          "code": "CSM5RI870Q",
          "usos": 8,
          "disc": 880.0,
          "pct": 92.4
        },
        {
          "code": "455170",
          "usos": 4,
          "disc": 377.44,
          "pct": 40.0
        },
        {
          "code": "414791",
          "usos": 4,
          "disc": 376.6,
          "pct": 40.0
        },
        {
          "code": "447409",
          "usos": 4,
          "disc": 324.22,
          "pct": 20.0
        }
      ],
      "products": [
        {
          "id": "AP000033",
          "name": "Canbo Adulto Cordero Razas Med/Gran Alimento Sec",
          "orders": 461,
          "qty": 531.0,
          "net": 109305.83,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000813",
          "name": "Salvaje Adulto Con Pollo 15 Kg",
          "orders": 338,
          "qty": 406.0,
          "net": 56737.97,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "JULAP001181",
          "name": "True Origins Pure Dog Adult Chicken Gf 12 Kg",
          "orders": 255,
          "qty": 440.0,
          "net": 100641.06,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "AG000017",
          "name": "Canbo Cuidado De Esterilizados / Sterilized Care",
          "orders": 246,
          "qty": 270.0,
          "net": 41164.17,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000655",
          "name": "Catxtreme Cat Adult Steril Pate With Lamb 170 Gr",
          "orders": 187,
          "qty": 448.0,
          "net": 3758.72,
          "pos1_pct": 18,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000101",
          "name": "Bravecto 250mg para Perro 4.5 a 10kg 1 Tab.",
          "orders": 174,
          "qty": 222.0,
          "net": 35915.16,
          "pos1_pct": 79,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP000036",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 173,
          "qty": 219.0,
          "net": 22995.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000487",
          "name": "Arena para gato Tkpet aglomerante aroma talco",
          "orders": 172,
          "qty": 420.0,
          "net": 31998.26,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP001298",
          "name": "True Origins Pure Dog Lamb Peas 185 Gr",
          "orders": 170,
          "qty": 194.0,
          "net": 2120.47,
          "pos1_pct": 2,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000743",
          "name": "Proteggo 3m 500mg para Perro 10 20 Kg (Cja X 1 T",
          "orders": 170,
          "qty": 209.0,
          "net": 28321.58,
          "pos1_pct": 79,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000489",
          "name": "Churu Sabor Atún con Salmón 60Gr",
          "orders": 169,
          "qty": 438.0,
          "net": 4788.07,
          "pos1_pct": 13,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000561",
          "name": "Salvaje Esterilizado Gato 12kg",
          "orders": 161,
          "qty": 179.0,
          "net": 22738.5,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AGOAG000563",
          "name": "True Origins Pure Cat Adult Chicken Poultry 2 Kg",
          "orders": 136,
          "qty": 266.0,
          "net": 15757.15,
          "pos1_pct": 68,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000393",
          "name": "Gran Plus Menu Gato Adulto Castrado  Salmon Y Ar",
          "orders": 134,
          "qty": 146.0,
          "net": 27579.38,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000796",
          "name": "Dogxtreme Adulto Cordero Alimento Seco Perro",
          "orders": 131,
          "qty": 146.0,
          "net": 21021.22,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000486",
          "name": "Arena para gato Tkpet aglomerante aroma talco",
          "orders": 125,
          "qty": 293.0,
          "net": 13632.14,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "JULAG000749",
          "name": "Nath Veterinary Diets Gato Estruvita 2Kg",
          "orders": 120,
          "qty": 241.0,
          "net": 20811.98,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Dietas veterinarias",
          "cat": "Alimentos"
        },
        {
          "id": "AP000270",
          "name": "Mio Cane Premium Adulto 15 kg",
          "orders": 110,
          "qty": 125.0,
          "net": 18209.97,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000495",
          "name": "Catxtreme Adulto Esterilizado Salmón 6 Kg",
          "orders": 101,
          "qty": 130.0,
          "net": 14641.67,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP001472",
          "name": "Dogxtreme Adulto Pescado Con Calabaza 400Gr",
          "orders": 99,
          "qty": 143.0,
          "net": 1563.08,
          "pos1_pct": 7,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000654",
          "name": "Catxtreme Cat Adult Steril Pate With Beef 170 Gr",
          "orders": 95,
          "qty": 324.0,
          "net": 2718.36,
          "pos1_pct": 16,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000742",
          "name": "Proteggo 3m 250 Mg para Perro 4.5 10 Kg (Cja X 1",
          "orders": 95,
          "qty": 115.0,
          "net": 14998.48,
          "pos1_pct": 71,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "JULAG000573",
          "name": "True Origins Pure Cat Kitten Chicken Poultry 2 K",
          "orders": 94,
          "qty": 225.0,
          "net": 15235.04,
          "pos1_pct": 67,
          "mascota": "Gato",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "AG000657",
          "name": "Catxtreme Cat Adult Steril Pate With Sardine 170",
          "orders": 92,
          "qty": 324.0,
          "net": 2718.36,
          "pos1_pct": 16,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000330",
          "name": "Origens Filete De Atún Con Aceituna 85 g",
          "orders": 91,
          "qty": 434.0,
          "net": 3273.25,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000675",
          "name": "Leonardo Quality Selection Ave",
          "orders": 90,
          "qty": 661.0,
          "net": 12267.8,
          "pos1_pct": 57,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000102",
          "name": "Bravecto 500mg para Perro 10 a 20kg 1 Tab.",
          "orders": 89,
          "qty": 103.0,
          "net": 17710.85,
          "pos1_pct": 79,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "PG000105",
          "name": "Churu Gato Pollo Con Salmón (4 Unidades)",
          "orders": 87,
          "qty": 169.0,
          "net": 1847.39,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "JULAP001189",
          "name": "True Origins Pure Dog Puppy Chicken 3KG Liquidac",
          "orders": 87,
          "qty": 261.0,
          "net": 17672.71,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "HC000015",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 86,
          "qty": 112.0,
          "net": 6919.36,
          "pos1_pct": 48,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000247",
          "name": "Origens Filete Atún 85 g",
          "orders": 85,
          "qty": 602.0,
          "net": 4540.47,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000681",
          "name": "Leonardo Drink Salmón 0.040 Kg",
          "orders": 84,
          "qty": 512.0,
          "net": 2560.0,
          "pos1_pct": 24,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000249",
          "name": "Origens Filete Atún Con Camaron 85 g",
          "orders": 82,
          "qty": 382.0,
          "net": 2881.09,
          "pos1_pct": 18,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000250",
          "name": "Origens Filete Atún Con Corvina 85 g",
          "orders": 79,
          "qty": 383.0,
          "net": 2888.65,
          "pos1_pct": 14,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "PG000104",
          "name": "Churu Gato Atún Con Cangrejo (4 Unidades)",
          "orders": 78,
          "qty": 128.0,
          "net": 1399.16,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "FF000744",
          "name": "Proteggo 3m 1000mg para Perro 20 40 Kg (Cja X 1 ",
          "orders": 72,
          "qty": 86.0,
          "net": 15006.14,
          "pos1_pct": 65,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000253",
          "name": "Origens Filete Atún Con Tilapia 85 g",
          "orders": 72,
          "qty": 246.0,
          "net": 1855.32,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000755",
          "name": "Proteggo m 100 mg para Perro 4,5 10Kg (1tab x ca",
          "orders": 70,
          "qty": 93.0,
          "net": 4878.72,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000251",
          "name": "Origens Filete Atún Con Papaya 85 g",
          "orders": 70,
          "qty": 296.0,
          "net": 2232.43,
          "pos1_pct": 13,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000614",
          "name": "True Origins Wild Cat Adult Country Water Alimen",
          "orders": 69,
          "qty": 75.0,
          "net": 1264.54,
          "pos1_pct": 6,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000014",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 69,
          "qty": 98.0,
          "net": 3147.74,
          "pos1_pct": 38,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000673",
          "name": "Leonardo Quality Selection Pato",
          "orders": 68,
          "qty": 405.0,
          "net": 7859.71,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000936",
          "name": "Tkpet Arena Con Carbón Activado",
          "orders": 67,
          "qty": 144.0,
          "net": 12191.05,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "AG000331",
          "name": "Origens Filete De Atún Con Durazno 85 g",
          "orders": 64,
          "qty": 271.0,
          "net": 2043.88,
          "pos1_pct": 12,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000487",
          "name": "Churu Sabor Pollo 60Gr",
          "orders": 62,
          "qty": 168.0,
          "net": 1836.5,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP001248",
          "name": "True Origins Wild Dog Country Water Adult Alimen",
          "orders": 61,
          "qty": 61.0,
          "net": 1390.8,
          "pos1_pct": 0,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000490",
          "name": "Churu Sabor Pollo con Camarón 60Gr",
          "orders": 61,
          "qty": 98.0,
          "net": 1071.22,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP001366",
          "name": "Pro plan Piel Sensible Adulto Cordero Todas las ",
          "orders": 61,
          "qty": 70.0,
          "net": 21350.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000659",
          "name": "Catxtreme Kitten Tuna 170 Gr",
          "orders": 60,
          "qty": 206.0,
          "net": 1728.34,
          "pos1_pct": 25,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000098",
          "name": "Bravecto 1000mg para Perro 20 a 40kg 1 Tab.",
          "orders": 60,
          "qty": 74.0,
          "net": 16361.43,
          "pos1_pct": 72,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "PG000106",
          "name": "Churu Gato Tuna/Seafood (4 Unidades)",
          "orders": 58,
          "qty": 88.0,
          "net": 961.92,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AGOAP001191",
          "name": "True Origins Pure Dog Puppy Salmon Gf 12 Kg",
          "orders": 58,
          "qty": 68.0,
          "net": 17224.98,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "AG000656",
          "name": "Catxtreme Cat Adult Steril Pate With Salmon 170 ",
          "orders": 58,
          "qty": 208.0,
          "net": 1745.12,
          "pos1_pct": 33,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000649",
          "name": "True Origins Pure Cat Adult Atun Sardina 85 Gr",
          "orders": 54,
          "qty": 232.0,
          "net": 2536.17,
          "pos1_pct": 31,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000671",
          "name": "Leonardo Quality Selection Pescado",
          "orders": 54,
          "qty": 279.0,
          "net": 5414.46,
          "pos1_pct": 28,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000035",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 54,
          "qty": 66.0,
          "net": 3182.52,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000682",
          "name": "Leonardo Drink Pato 0.040 Kg",
          "orders": 53,
          "qty": 312.0,
          "net": 1560.0,
          "pos1_pct": 11,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000674",
          "name": "Leonardo Quality Selection Ave",
          "orders": 53,
          "qty": 305.0,
          "net": 3592.88,
          "pos1_pct": 51,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP001476",
          "name": "Dogxtreme Adulto Salmon 400Gr",
          "orders": 52,
          "qty": 159.0,
          "net": 1738.2,
          "pos1_pct": 31,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP001299",
          "name": "True Origins Pure Dog Puppy Chicken Carrot 185 G",
          "orders": 52,
          "qty": 66.0,
          "net": 721.41,
          "pos1_pct": 2,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000804",
          "name": "Tkpet Arena Con Carbón Activado",
          "orders": 51,
          "qty": 116.0,
          "net": 6380.0,
          "pos1_pct": 69,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000333",
          "name": "Origens Filete De Atún Con Manzana 85 g",
          "orders": 51,
          "qty": 145.0,
          "net": 1093.55,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AGOAP001181",
          "name": "True Origins Pure Dog Adult Chicken Gf 12 Kg",
          "orders": 51,
          "qty": 54.0,
          "net": 12351.42,
          "pos1_pct": 76,
          "mascota": "Perro",
          "subcat": "Alimento natural",
          "cat": "Alimentos"
        },
        {
          "id": "AP000043",
          "name": "Canbo Enlatado Óptima Digestión 330 g",
          "orders": 50,
          "qty": 361.0,
          "net": 3946.5,
          "pos1_pct": 52,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "JULAG000745",
          "name": "Nath Cat Vetdiet Gastrointestinal 2 Kg",
          "orders": 50,
          "qty": 86.0,
          "net": 8665.56,
          "pos1_pct": 56,
          "mascota": "Gato",
          "subcat": "Dietas veterinarias",
          "cat": "Alimentos"
        },
        {
          "id": "AG000486",
          "name": "Churu Sabor Atún con Pollo 60Gr",
          "orders": 50,
          "qty": 91.0,
          "net": 994.71,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000019",
          "name": "Canbo Cuidado Del Tracto Urinario / Urinary Heal",
          "orders": 49,
          "qty": 55.0,
          "net": 8385.29,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000934",
          "name": "Tkpet Arena Aglomerante Aroma Lavanda",
          "orders": 49,
          "qty": 120.0,
          "net": 9142.33,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "AG000230",
          "name": "Félix Pate de Pavo y Menudencias 156gr",
          "orders": 48,
          "qty": 519.0,
          "net": 3034.82,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000683",
          "name": "Leonardo Drink Ternera 0.040 Kg",
          "orders": 48,
          "qty": 314.0,
          "net": 1570.0,
          "pos1_pct": 6,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000228",
          "name": "Felix Original Paté de Pescado y Atún 156 g",
          "orders": 46,
          "qty": 542.0,
          "net": 3169.3,
          "pos1_pct": 13,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000677",
          "name": "Rivolta 6% X 0.75 Ml (2.6kg A 7.5kg) 1 Pipeta",
          "orders": 46,
          "qty": 136.0,
          "net": 5751.09,
          "pos1_pct": 63,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000869",
          "name": "Leonardo Rico En Conejo 400Gr",
          "orders": 44,
          "qty": 233.0,
          "net": 4324.38,
          "pos1_pct": 27,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000229",
          "name": "Félix Pate Salmón 156gr",
          "orders": 44,
          "qty": 451.0,
          "net": 2637.2,
          "pos1_pct": 32,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000252",
          "name": "Origens Filete Atún Con Piña 85 g",
          "orders": 44,
          "qty": 126.0,
          "net": 950.24,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000219",
          "name": "Fancy Feast Gravy Lovers A La Parrilla Sabor Fes",
          "orders": 43,
          "qty": 325.0,
          "net": 1900.39,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000259",
          "name": "Ricocat Adulto Paté Sardina Pollo 330 g",
          "orders": 43,
          "qty": 494.0,
          "net": 2888.64,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000798",
          "name": "Dogxtreme Adulto Salmón Alimento Seco Perro",
          "orders": 43,
          "qty": 63.0,
          "net": 10672.67,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000069",
          "name": "Hills PD c/d Multi Stress Cuidado urinario Multi",
          "orders": 42,
          "qty": 61.0,
          "net": 7645.73,
          "pos1_pct": 69,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "AG000658",
          "name": "Catxtreme Kitten Chicken 170 Gr",
          "orders": 42,
          "qty": 143.0,
          "net": 1199.77,
          "pos1_pct": 24,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000485",
          "name": "Churu Sabor Atún 60Gr",
          "orders": 41,
          "qty": 78.0,
          "net": 852.63,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000670",
          "name": "Leonardo Quality Selection Pescado",
          "orders": 41,
          "qty": 227.0,
          "net": 2674.03,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000093",
          "name": "Hills PD c/d Multicare 1.8kg Cuidado urinario Mu",
          "orders": 40,
          "qty": 53.0,
          "net": 6643.01,
          "pos1_pct": 90,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "HC000802",
          "name": "Tkpet Arena aglomerante sin aroma",
          "orders": 40,
          "qty": 101.0,
          "net": 4699.11,
          "pos1_pct": 65,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "PG000058",
          "name": "Cremi Creamy Treats Receta De Salmon Y Atun 60 G",
          "orders": 40,
          "qty": 79.0,
          "net": 662.81,
          "pos1_pct": 18,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP000797",
          "name": "Dogxtreme Adulto Senior/Light Alimento Seco Perr",
          "orders": 40,
          "qty": 50.0,
          "net": 7623.0,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PP000432",
          "name": "Churu Perro Chicken/Vegetal (4 Unidades)",
          "orders": 39,
          "qty": 46.0,
          "net": 541.88,
          "pos1_pct": 0,
          "mascota": "Perro",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP000349",
          "name": "Rambala Congelado Pollo Y Pavo 800 g",
          "orders": 39,
          "qty": 172.0,
          "net": 2609.2,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Alimento BARF",
          "cat": "Alimentos"
        },
        {
          "id": "HC000898",
          "name": "Nice Care Carbon Pads",
          "orders": 39,
          "qty": 88.0,
          "net": 4467.2,
          "pos1_pct": 62,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000225",
          "name": "Fancy Feast Al Grill Con Atun Y Otros 85 g",
          "orders": 39,
          "qty": 283.0,
          "net": 1654.81,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000248",
          "name": "Origens Filete Atún Con Calamar 85 g",
          "orders": 39,
          "qty": 127.0,
          "net": 957.79,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000922",
          "name": "Nice Care Pañal Para Perro Macho 12 Pcs",
          "orders": 39,
          "qty": 172.0,
          "net": 4212.53,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "JULAP001391",
          "name": "Nath Gf Veterinary Diets Dog Gastrointest 12 Kg",
          "orders": 39,
          "qty": 44.0,
          "net": 14575.88,
          "pos1_pct": 79,
          "mascota": "Perro",
          "subcat": "Dietas veterinarias",
          "cat": "Alimentos"
        },
        {
          "id": "AG000648",
          "name": "True Origins Pure Cat Adult Atun Salmon 85 Gr",
          "orders": 38,
          "qty": 196.0,
          "net": 2142.74,
          "pos1_pct": 29,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000715",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 37,
          "qty": 58.0,
          "net": 1916.91,
          "pos1_pct": 51,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000647",
          "name": "True Origins Pure Cat Adult Atun Mejillones 85 G",
          "orders": 37,
          "qty": 180.0,
          "net": 1967.76,
          "pos1_pct": 19,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000040",
          "name": "Canbo Cachorro Cordero Razas Pequeñas Alimento S",
          "orders": 37,
          "qty": 52.0,
          "net": 5724.29,
          "pos1_pct": 59,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000669",
          "name": "Leonardo Quality Selection Kitten",
          "orders": 37,
          "qty": 299.0,
          "net": 5802.59,
          "pos1_pct": 57,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000257",
          "name": "Ricocat Adulto Paté Pavo Hígado 330 g",
          "orders": 36,
          "qty": 339.0,
          "net": 1982.26,
          "pos1_pct": 31,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000674",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 35,
          "qty": 43.0,
          "net": 2776.88,
          "pos1_pct": 74,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 9203,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 4142,
          "pct": 45.0
        },
        {
          "pos": 3,
          "n": 2129,
          "pct": 23.1
        },
        {
          "pos": 4,
          "n": 1219,
          "pct": 13.2
        },
        {
          "pos": 5,
          "n": 758,
          "pct": 8.2
        },
        {
          "pos": 6,
          "n": 480,
          "pct": 5.2
        },
        {
          "pos": 7,
          "n": 306,
          "pct": 3.3
        }
      ],
      "promos_all": [
        {
          "id": "PRECIOSBOMBA",
          "usos": 1161,
          "disc_net": 44615.99,
          "ppu": 38.43
        },
        {
          "id": "8M4HUMSELEC-WEB",
          "usos": 1040,
          "disc_net": 34717.66,
          "ppu": 33.38
        },
        {
          "id": "70-LIQUI-ALIM",
          "usos": 719,
          "disc_net": 139978.39,
          "ppu": 194.68
        },
        {
          "id": "PBOMBA",
          "usos": 596,
          "disc_net": 25606.68,
          "ppu": 42.96
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 516,
          "disc_net": 6912.08,
          "ppu": 13.4
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 504,
          "disc_net": 44775.19,
          "ppu": 88.84
        },
        {
          "id": "2x1HUMSELEC-WEB",
          "usos": 493,
          "disc_net": 11040.73,
          "ppu": 22.39
        },
        {
          "id": "50-LIQUI-ALIM",
          "usos": 398,
          "disc_net": 38228.96,
          "ppu": 96.05
        },
        {
          "id": "4x3SNACKSELEC",
          "usos": 394,
          "disc_net": 5291.31,
          "ppu": 13.43
        },
        {
          "id": "2x1TKPET",
          "usos": 331,
          "disc_net": 26894.76,
          "ppu": 81.25
        },
        {
          "id": "2DO30PRODSELEC-WEB",
          "usos": 277,
          "disc_net": 9422.07,
          "ppu": 34.01
        },
        {
          "id": "20PRODSELEC",
          "usos": 258,
          "disc_net": 4949.69,
          "ppu": 19.18
        },
        {
          "id": "3x2HUM-MMPP",
          "usos": 228,
          "disc_net": 3945.64,
          "ppu": 17.31
        },
        {
          "id": "40PRODSELEC",
          "usos": 224,
          "disc_net": 14394.31,
          "ppu": 64.26
        },
        {
          "id": "REGAL-TRUE",
          "usos": 194,
          "disc_net": 2120.42,
          "ppu": 10.93
        },
        {
          "id": "2x1PAÑALES",
          "usos": 185,
          "disc_net": 12739.34,
          "ppu": 68.86
        },
        {
          "id": "10M2HUMSELEC",
          "usos": 170,
          "disc_net": 2386.36,
          "ppu": 14.04
        },
        {
          "id": "3x2HUMESELEC-WEB",
          "usos": 157,
          "disc_net": 2790.58,
          "ppu": 17.77
        },
        {
          "id": "10PRODSELEC",
          "usos": 143,
          "disc_net": 2828.97,
          "ppu": 19.78
        },
        {
          "id": "3x2AREN-TKPET",
          "usos": 140,
          "disc_net": 8636.83,
          "ppu": 61.69
        },
        {
          "id": "2DO40PRODSELEC-WEB",
          "usos": 118,
          "disc_net": 6052.18,
          "ppu": 51.29
        },
        {
          "id": "2X1JUGUET-PR",
          "usos": 102,
          "disc_net": 2846.32,
          "ppu": 27.91
        },
        {
          "id": "5M1HUMESELEC-WEB",
          "usos": 98,
          "disc_net": 1450.48,
          "ppu": 14.8
        },
        {
          "id": "30PRODSELEC",
          "usos": 96,
          "disc_net": 4092.11,
          "ppu": 42.63
        },
        {
          "id": "REGALO-CATXT",
          "usos": 85,
          "disc_net": 713.15,
          "ppu": 8.39
        },
        {
          "id": "5M1HUMSELEC",
          "usos": 76,
          "disc_net": 886.33,
          "ppu": 11.66
        },
        {
          "id": "15PRODSELEC",
          "usos": 72,
          "disc_net": 1511.86,
          "ppu": 21.0
        },
        {
          "id": "35NEXGARD-SP",
          "usos": 68,
          "disc_net": 5143.08,
          "ppu": 75.63
        },
        {
          "id": "REGALO-DOGXT",
          "usos": 64,
          "disc_net": 699.52,
          "ppu": 10.93
        },
        {
          "id": "DOGX14440",
          "usos": 61,
          "disc_net": 1469.48,
          "ppu": 24.09
        },
        {
          "id": "REG-BRAVLEO-TRUE",
          "usos": 60,
          "disc_net": 1011.6,
          "ppu": 16.86
        },
        {
          "id": "REG-BRAVBELC-TRUE",
          "usos": 60,
          "disc_net": 1368.0,
          "ppu": 22.8
        },
        {
          "id": "COLLAR-9-90",
          "usos": 58,
          "disc_net": 1185.62,
          "ppu": 20.44
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 55,
          "disc_net": 579.82,
          "ppu": 10.54
        },
        {
          "id": "2DA50PAÑALES",
          "usos": 53,
          "disc_net": 1414.93,
          "ppu": 26.7
        },
        {
          "id": "40PROTEGG",
          "usos": 53,
          "disc_net": 1885.68,
          "ppu": 35.58
        },
        {
          "id": "2DA30-MMPP",
          "usos": 50,
          "disc_net": 1601.69,
          "ppu": 32.03
        },
        {
          "id": "35NEXGARD",
          "usos": 49,
          "disc_net": 2607.96,
          "ppu": 53.22
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 46,
          "disc_net": 1258.46,
          "ppu": 27.36
        },
        {
          "id": "4x3BARKER",
          "usos": 41,
          "disc_net": 930.86,
          "ppu": 22.7
        },
        {
          "id": "2x1SNACKSELEC",
          "usos": 41,
          "disc_net": 676.47,
          "ppu": 16.5
        },
        {
          "id": "3x2HIGIENE",
          "usos": 39,
          "disc_net": 543.77,
          "ppu": 13.94
        },
        {
          "id": "30PLATOS",
          "usos": 39,
          "disc_net": 437.49,
          "ppu": 11.22
        },
        {
          "id": "2x1COLLAR",
          "usos": 39,
          "disc_net": 1221.28,
          "ppu": 31.31
        },
        {
          "id": "3x2RIVOLTA",
          "usos": 38,
          "disc_net": 1850.65,
          "ppu": 48.7
        },
        {
          "id": "REGCHURU-NICECAR",
          "usos": 32,
          "disc_net": 376.96,
          "ppu": 11.78
        },
        {
          "id": "3x2JUGUE-SELEC",
          "usos": 30,
          "disc_net": 811.02,
          "ppu": 27.03
        },
        {
          "id": "2DO25PRODSELEC",
          "usos": 27,
          "disc_net": 638.48,
          "ppu": 23.65
        },
        {
          "id": "10M2PERMAN",
          "usos": 24,
          "disc_net": 449.25,
          "ppu": 18.72
        },
        {
          "id": "COLLAR-19-90",
          "usos": 22,
          "disc_net": 594.06,
          "ppu": 27.0
        },
        {
          "id": "4x3HUM-MMPP",
          "usos": 21,
          "disc_net": 248.95,
          "ppu": 11.85
        },
        {
          "id": "2DO50TKPET",
          "usos": 20,
          "disc_net": 653.77,
          "ppu": 32.69
        },
        {
          "id": "2x1JUGUE-PERM",
          "usos": 19,
          "disc_net": 83.72,
          "ppu": 4.41
        },
        {
          "id": "DCTO-FUNCIONARIO-MP",
          "usos": 19,
          "disc_net": 575.56,
          "ppu": 30.29
        },
        {
          "id": "REG-HILLS-GT",
          "usos": 18,
          "disc_net": 364.5,
          "ppu": 20.25
        },
        {
          "id": "20HILLS",
          "usos": 18,
          "disc_net": 1214.53,
          "ppu": 67.47
        },
        {
          "id": "DCTO-FUNCIONARIO-MC",
          "usos": 17,
          "disc_net": 450.0,
          "ppu": 26.47
        },
        {
          "id": "PBOMB-NCCAR60X90",
          "usos": 16,
          "disc_net": 525.44,
          "ppu": 32.84
        },
        {
          "id": "PE-list-liquidacion20%",
          "usos": 16,
          "disc_net": 172.55,
          "ppu": 10.78
        },
        {
          "id": "PE-list-liquidacion70%",
          "usos": 15,
          "disc_net": 296.01,
          "ppu": 19.73
        },
        {
          "id": "5590BALDEBARKER",
          "usos": 15,
          "disc_net": 76.2,
          "ppu": 5.08
        },
        {
          "id": "5M1PERMAN",
          "usos": 15,
          "disc_net": 149.57,
          "ppu": 9.97
        },
        {
          "id": "3x1690BARKER",
          "usos": 14,
          "disc_net": 80.69,
          "ppu": 5.76
        },
        {
          "id": "15BEXTER",
          "usos": 14,
          "disc_net": 67.0,
          "ppu": 4.79
        },
        {
          "id": "2x1HUMEDSELEC",
          "usos": 14,
          "disc_net": 143.59,
          "ppu": 10.26
        },
        {
          "id": "REG-DOGXHUM",
          "usos": 14,
          "disc_net": 153.02,
          "ppu": 10.93
        },
        {
          "id": "15DOGX",
          "usos": 13,
          "disc_net": 207.86,
          "ppu": 15.99
        },
        {
          "id": "PBOMB-NC60X60",
          "usos": 12,
          "disc_net": 372.9,
          "ppu": 31.07
        },
        {
          "id": "PBOMB-NC60X90",
          "usos": 11,
          "disc_net": 254.22,
          "ppu": 23.11
        },
        {
          "id": "10M2ROYAL",
          "usos": 11,
          "disc_net": 211.15,
          "ppu": 19.2
        },
        {
          "id": "20NEXGARD",
          "usos": 10,
          "disc_net": 158.1,
          "ppu": 15.81
        },
        {
          "id": "REGAL-PARPETS",
          "usos": 10,
          "disc_net": 92.4,
          "ppu": 9.24
        },
        {
          "id": "4x3ORIGENS",
          "usos": 10,
          "disc_net": 73.36,
          "ppu": 7.34
        },
        {
          "id": "AREN-30LITER",
          "usos": 10,
          "disc_net": 243.81,
          "ppu": 24.38
        },
        {
          "id": "10PRODSELEC-WEB",
          "usos": 10,
          "disc_net": 112.2,
          "ppu": 11.22
        },
        {
          "id": "3x2HIGIENESEL",
          "usos": 9,
          "disc_net": 127.88,
          "ppu": 14.21
        },
        {
          "id": "2x1090YOGY",
          "usos": 9,
          "disc_net": 31.98,
          "ppu": 3.55
        },
        {
          "id": "5PRODSELEC-WEB",
          "usos": 8,
          "disc_net": 51.72,
          "ppu": 6.46
        },
        {
          "id": "5PROPLN",
          "usos": 8,
          "disc_net": 128.97,
          "ppu": 16.12
        },
        {
          "id": "3x2TODOJUGUE",
          "usos": 8,
          "disc_net": 151.86,
          "ppu": 18.98
        },
        {
          "id": "REGCORREA-NICECAR",
          "usos": 7,
          "disc_net": 58.73,
          "ppu": 8.39
        },
        {
          "id": "3200PARPETS",
          "usos": 7,
          "disc_net": 27.12,
          "ppu": 3.87
        },
        {
          "id": "2DA50JUGUET",
          "usos": 7,
          "disc_net": 129.79,
          "ppu": 18.54
        },
        {
          "id": "REG-BRAVKITT-TRUE",
          "usos": 7,
          "disc_net": 118.02,
          "ppu": 16.86
        },
        {
          "id": "REG-LEOKITT-TRUE",
          "usos": 6,
          "disc_net": 101.16,
          "ppu": 16.86
        },
        {
          "id": "30BRAVEC",
          "usos": 6,
          "disc_net": 376.11,
          "ppu": 62.69
        },
        {
          "id": "REGALO-NATH",
          "usos": 6,
          "disc_net": 40.14,
          "ppu": 6.69
        },
        {
          "id": "40BRAVEC",
          "usos": 6,
          "disc_net": 457.04,
          "ppu": 76.17
        },
        {
          "id": "2DO15PROPLN",
          "usos": 6,
          "disc_net": 65.66,
          "ppu": 10.94
        },
        {
          "id": "PR-NEXGARD1",
          "usos": 5,
          "disc_net": 421.02,
          "ppu": 84.2
        },
        {
          "id": "20CORREAS",
          "usos": 5,
          "disc_net": 30.43,
          "ppu": 6.09
        },
        {
          "id": "REGAL-NICECARE",
          "usos": 4,
          "disc_net": 43.72,
          "ppu": 10.93
        },
        {
          "id": "20DOGZ-CATZ",
          "usos": 4,
          "disc_net": 136.7,
          "ppu": 34.17
        },
        {
          "id": "20ARENEROS",
          "usos": 3,
          "disc_net": 47.41,
          "ppu": 15.8
        },
        {
          "id": "2x1PETLOVERS",
          "usos": 3,
          "disc_net": 73.47,
          "ppu": 24.49
        },
        {
          "id": "3x2PETLOVERS",
          "usos": 2,
          "disc_net": 48.13,
          "ppu": 24.07
        },
        {
          "id": "REG-BRAVHERR-TRUE",
          "usos": 2,
          "disc_net": 42.2,
          "ppu": 21.1
        },
        {
          "id": "PE-list-liquidacion30%",
          "usos": 2,
          "disc_net": 129.11,
          "ppu": 64.55
        },
        {
          "id": "REG-BELCAPUPP-TRUE",
          "usos": 2,
          "disc_net": 45.6,
          "ppu": 22.8
        },
        {
          "id": "2PELSOLID",
          "usos": 2,
          "disc_net": 6.62,
          "ppu": 3.31
        },
        {
          "id": "2DO30MMPP",
          "usos": 2,
          "disc_net": 64.27,
          "ppu": 32.13
        },
        {
          "id": "10ROYALSECO",
          "usos": 2,
          "disc_net": 21.53,
          "ppu": 10.77
        },
        {
          "id": "20NATHVET",
          "usos": 2,
          "disc_net": 83.35,
          "ppu": 41.67
        },
        {
          "id": "4x6590-HANT",
          "usos": 2,
          "disc_net": 9.66,
          "ppu": 4.83
        },
        {
          "id": "REG-BRAVSALM-TRUE",
          "usos": 1,
          "disc_net": 21.1,
          "ppu": 21.1
        },
        {
          "id": "COLLAR-14-90",
          "usos": 1,
          "disc_net": 46.61,
          "ppu": 46.61
        },
        {
          "id": "3x2SNACKSELEC-WEB",
          "usos": 1,
          "disc_net": 21.1,
          "ppu": 21.1
        },
        {
          "id": "DESAFIO-SNACK",
          "usos": 1,
          "disc_net": 1.85,
          "ppu": 1.85
        },
        {
          "id": "REG-BRAVCHIK-TRUE",
          "usos": 1,
          "disc_net": 21.1,
          "ppu": 21.1
        },
        {
          "id": "BOLGRANELMPETSNICE",
          "usos": 1,
          "disc_net": 4.75,
          "ppu": 4.75
        },
        {
          "id": "PE-list-liquidacion50%",
          "usos": 1,
          "disc_net": 12.67,
          "ppu": 12.67
        },
        {
          "id": "3PELSOLID",
          "usos": 1,
          "disc_net": 6.61,
          "ppu": 6.61
        },
        {
          "id": "4x7390-RAMBAL",
          "usos": 1,
          "disc_net": 4.83,
          "ppu": 4.83
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 1,
          "disc_net": 18.53,
          "ppu": 18.53
        }
      ],
      "coupons_all": [
        {
          "code": "PRIMERA10",
          "usos": 412,
          "disc": 7066.55,
          "pct": 10.0
        },
        {
          "code": "30DESCUENTO",
          "usos": 290,
          "disc": 66936.29,
          "pct": 30.0
        },
        {
          "code": "15DESCUENTO",
          "usos": 42,
          "disc": 2212.5,
          "pct": 15.0
        },
        {
          "code": "PET15",
          "usos": 40,
          "disc": 1056.07,
          "pct": 15.0
        },
        {
          "code": "20DESCUENTO",
          "usos": 30,
          "disc": 2573.5,
          "pct": 20.0
        },
        {
          "code": "CPC15PE2",
          "usos": 9,
          "disc": 358.81,
          "pct": 15.0
        },
        {
          "code": "CSM5RI870Q",
          "usos": 8,
          "disc": 880.0,
          "pct": 92.4
        },
        {
          "code": "455170",
          "usos": 4,
          "disc": 377.44,
          "pct": 40.0
        },
        {
          "code": "414791",
          "usos": 4,
          "disc": 376.6,
          "pct": 40.0
        },
        {
          "code": "447409",
          "usos": 4,
          "disc": 324.22,
          "pct": 20.0
        },
        {
          "code": "455103",
          "usos": 4,
          "disc": 619.48,
          "pct": 40.0
        },
        {
          "code": "511578",
          "usos": 3,
          "disc": 852.88,
          "pct": 40.0
        },
        {
          "code": "CSM8KB7NTO",
          "usos": 3,
          "disc": 450.0,
          "pct": 74.4
        },
        {
          "code": "CSM8F5HBLT",
          "usos": 2,
          "disc": 262.8,
          "pct": 100.0
        },
        {
          "code": "491914",
          "usos": 2,
          "disc": 254.64,
          "pct": 40.0
        },
        {
          "code": "407876",
          "usos": 2,
          "disc": 156.52,
          "pct": 20.0
        },
        {
          "code": "WEB-CZER-8YIS",
          "usos": 1,
          "disc": 33.95,
          "pct": 7.9
        },
        {
          "code": "WEB-7LC0-03WZ",
          "usos": 1,
          "disc": 3.96,
          "pct": 5.0
        },
        {
          "code": "SP-2M47GVVB",
          "usos": 1,
          "disc": 60.23,
          "pct": 25.0
        },
        {
          "code": "WEB-QDAW-JKIS",
          "usos": 1,
          "disc": 11.15,
          "pct": 8.4
        },
        {
          "code": "WEB-RVHG-MAWT",
          "usos": 1,
          "disc": 19.89,
          "pct": 4.5
        },
        {
          "code": "SP-OCCM9SIL",
          "usos": 1,
          "disc": 13.09,
          "pct": 10.0
        },
        {
          "code": "WEB-2K6Z-8PU4",
          "usos": 1,
          "disc": 16.19,
          "pct": 3.0
        },
        {
          "code": "PRIMERA1599",
          "usos": 1,
          "disc": 24.41,
          "pct": 15.0
        },
        {
          "code": "WEB-B0PN-MV9L",
          "usos": 1,
          "disc": 6.87,
          "pct": 10.0
        },
        {
          "code": "WEB-NYJW-7762",
          "usos": 1,
          "disc": 13.48,
          "pct": 7.9
        },
        {
          "code": "CSC-91ZX-K7PL",
          "usos": 1,
          "disc": 108.6,
          "pct": 40.5
        },
        {
          "code": "SP-MYIODPM6",
          "usos": 1,
          "disc": 32.95,
          "pct": 25.0
        },
        {
          "code": "WEB-TP4V-SDP5",
          "usos": 1,
          "disc": 23.39,
          "pct": 10.0
        },
        {
          "code": "SP-U7FCT323",
          "usos": 1,
          "disc": 20.96,
          "pct": 10.0
        },
        {
          "code": "CSC-36DF-T8RW",
          "usos": 1,
          "disc": 114.75,
          "pct": 30.0
        },
        {
          "code": "CSM5LBBK0P",
          "usos": 1,
          "disc": 110.0,
          "pct": 44.2
        },
        {
          "code": "CMRE50SN5453",
          "usos": 1,
          "disc": 50.0,
          "pct": 13.1
        },
        {
          "code": "WEB-8EBK-8QIB",
          "usos": 1,
          "disc": 23.69,
          "pct": 7.8
        },
        {
          "code": "CSC-28YU-N4MK",
          "usos": 1,
          "disc": 205.44,
          "pct": 30.0
        },
        {
          "code": "CSC-74HJ-C5VN",
          "usos": 1,
          "disc": 71.34,
          "pct": 30.0
        },
        {
          "code": "WEB-BFES-KAZD",
          "usos": 1,
          "disc": 12.35,
          "pct": 6.0
        },
        {
          "code": "WEB-4W7Z-F5Y7",
          "usos": 1,
          "disc": 24.57,
          "pct": 8.3
        },
        {
          "code": "CSC-63WE-Q1TZ",
          "usos": 1,
          "disc": 427.23,
          "pct": 30.0
        },
        {
          "code": "CMRE1007T4LF9",
          "usos": 1,
          "disc": 100.0,
          "pct": 58.8
        },
        {
          "code": "WEB-6G0I-8A7P",
          "usos": 1,
          "disc": 47.56,
          "pct": 9.0
        },
        {
          "code": "SP-T77YTY3L",
          "usos": 1,
          "disc": 40.35,
          "pct": 15.0
        },
        {
          "code": "WEB-RFXL-NZDM",
          "usos": 1,
          "disc": 10.79,
          "pct": 6.5
        },
        {
          "code": "WEB-CEC9-UF08",
          "usos": 1,
          "disc": 39.33,
          "pct": 4.7
        },
        {
          "code": "WEB-RBSD-MLMY",
          "usos": 1,
          "disc": 24.68,
          "pct": 7.6
        },
        {
          "code": "CMRE100S624X4",
          "usos": 1,
          "disc": 100.0,
          "pct": 66.7
        },
        {
          "code": "WEB-NE44-I2TF",
          "usos": 1,
          "disc": 18.49,
          "pct": 8.3
        },
        {
          "code": "CMRE1003WCCGP",
          "usos": 1,
          "disc": 100.0,
          "pct": 62.7
        },
        {
          "code": "CMRE50ERIQ83",
          "usos": 1,
          "disc": 50.0,
          "pct": 65.6
        },
        {
          "code": "WEB-12H5-VNPE",
          "usos": 1,
          "disc": 27.36,
          "pct": 9.3
        },
        {
          "code": "WEB-GDFK-1ZWB",
          "usos": 1,
          "disc": 5.69,
          "pct": 9.3
        },
        {
          "code": "CMRE70116DIW",
          "usos": 1,
          "disc": 70.0,
          "pct": 72.2
        },
        {
          "code": "CMRE302D6EP3",
          "usos": 1,
          "disc": 30.0,
          "pct": 29.4
        },
        {
          "code": "SPN6FDC",
          "usos": 1,
          "disc": 15.0,
          "pct": 10.1
        },
        {
          "code": "SP-32ZS2VRS",
          "usos": 1,
          "disc": 23.98,
          "pct": 20.0
        },
        {
          "code": "SP-KK6QUU54",
          "usos": 1,
          "disc": 22.3,
          "pct": 20.0
        },
        {
          "code": "CSC-50IO-L9XC",
          "usos": 1,
          "disc": 220.2,
          "pct": 30.0
        },
        {
          "code": "CSM58FBATL",
          "usos": 1,
          "disc": 15.0,
          "pct": 13.2
        },
        {
          "code": "WEB-6GMP-W4QN",
          "usos": 1,
          "disc": 70.76,
          "pct": 8.3
        },
        {
          "code": "WEB-Q0IJ-YCBL",
          "usos": 1,
          "disc": 13.38,
          "pct": 7.8
        },
        {
          "code": "SUPERPET10",
          "usos": 1,
          "disc": 13.9,
          "pct": 10.0
        },
        {
          "code": "SP-AGLTRERE",
          "usos": 1,
          "disc": 29.98,
          "pct": 25.0
        },
        {
          "code": "CMRE100WFKR53",
          "usos": 1,
          "disc": 100.0,
          "pct": 50.1
        },
        {
          "code": "WEB-LGBR-385Z",
          "usos": 1,
          "disc": 50.22,
          "pct": 9.1
        },
        {
          "code": "CMRE70ZE5923",
          "usos": 1,
          "disc": 70.0,
          "pct": 73.3
        },
        {
          "code": "CSM5K5J597",
          "usos": 1,
          "disc": 15.0,
          "pct": 4.7
        },
        {
          "code": "CMRE30LQ95D3",
          "usos": 1,
          "disc": 30.0,
          "pct": 51.2
        },
        {
          "code": "WEB-LZI1-GF10",
          "usos": 1,
          "disc": 11.85,
          "pct": 7.3
        },
        {
          "code": "CSC-14PA-R6BG",
          "usos": 1,
          "disc": 264.69,
          "pct": 30.0
        },
        {
          "code": "SP-TEIGIVA5",
          "usos": 1,
          "disc": 9.14,
          "pct": 20.0
        },
        {
          "code": "WEB-0LV2-BKPY",
          "usos": 1,
          "disc": 38.6,
          "pct": 7.2
        },
        {
          "code": "CMRE1001M7JBI",
          "usos": 1,
          "disc": 100.0,
          "pct": 55.6
        },
        {
          "code": "WEB-7DT3-74IU",
          "usos": 1,
          "disc": 18.96,
          "pct": 7.0
        },
        {
          "code": "WEB-UAE9-SMPX",
          "usos": 1,
          "disc": 18.49,
          "pct": 8.3
        },
        {
          "code": "CMRE301QQ5AM",
          "usos": 1,
          "disc": 30.0,
          "pct": 27.8
        },
        {
          "code": "CMRE100AJ8PTN",
          "usos": 1,
          "disc": 100.0,
          "pct": 79.4
        },
        {
          "code": "CMRE1002ILMMR",
          "usos": 1,
          "disc": 100.0,
          "pct": 77.7
        },
        {
          "code": "WEB-M07F-GIPV",
          "usos": 1,
          "disc": 31.7,
          "pct": 6.8
        },
        {
          "code": "CMRE30SVEWU5",
          "usos": 1,
          "disc": 30.0,
          "pct": 33.4
        },
        {
          "code": "SP-RAHLSK5V",
          "usos": 1,
          "disc": 123.08,
          "pct": 25.0
        },
        {
          "code": "SP-HEQXVHDD",
          "usos": 1,
          "disc": 8.36,
          "pct": 20.0
        },
        {
          "code": "CSM87O0BPA",
          "usos": 1,
          "disc": 20.0,
          "pct": 3.2
        },
        {
          "code": "VUELVE15",
          "usos": 1,
          "disc": 15.0,
          "pct": 44.2
        },
        {
          "code": "CSM8MTJ9M9",
          "usos": 1,
          "disc": 20.0,
          "pct": 13.2
        },
        {
          "code": "SP-66TSYK49",
          "usos": 1,
          "disc": 35.98,
          "pct": 20.0
        },
        {
          "code": "WEB-XJ8Z-CNZR",
          "usos": 1,
          "disc": 20.46,
          "pct": 7.9
        },
        {
          "code": "CMRE70EILD7R",
          "usos": 1,
          "disc": 70.0,
          "pct": 47.3
        },
        {
          "code": "CMRE100QOQI5F",
          "usos": 1,
          "disc": 100.0,
          "pct": 67.6
        },
        {
          "code": "WEB-DUP0-1D0J",
          "usos": 1,
          "disc": 6.56,
          "pct": 6.5
        },
        {
          "code": "CSM54DYQWJ",
          "usos": 1,
          "disc": 15.0,
          "pct": 12.8
        },
        {
          "code": "CMRE100JIOGN6",
          "usos": 1,
          "disc": 100.0,
          "pct": 51.7
        }
      ],
      "shipping_detail": [
        {
          "method": "Lima",
          "n": 4652,
          "pct": 50.5,
          "net": 860849.91,
          "ticket": 185.05,
          "avg_items": 2.2
        },
        {
          "method": "Click & Collect",
          "n": 2768,
          "pct": 30.1,
          "net": 343669.31,
          "ticket": 124.16,
          "avg_items": 1.7
        },
        {
          "method": "Express",
          "n": 1362,
          "pct": 14.8,
          "net": 191086.53,
          "ticket": 140.3,
          "avg_items": 2.1
        },
        {
          "method": "Programado",
          "n": 318,
          "pct": 3.5,
          "net": 51278.89,
          "ticket": 161.25,
          "avg_items": 2.6
        },
        {
          "method": "Arequipa",
          "n": 93,
          "pct": 1.0,
          "net": 17215.61,
          "ticket": 185.11,
          "avg_items": 1.0
        },
        {
          "method": "Lima-La-Libertad",
          "n": 88,
          "pct": 1.0,
          "net": 15839.59,
          "ticket": 180.0,
          "avg_items": 0.8
        },
        {
          "method": "Lambayeque",
          "n": 50,
          "pct": 0.5,
          "net": 8897.01,
          "ticket": 177.94,
          "avg_items": 0.8
        },
        {
          "method": "Piura",
          "n": 38,
          "pct": 0.4,
          "net": 7462.37,
          "ticket": 196.38,
          "avg_items": 1.0
        }
      ],
      "daily": [
        {
          "date": "2026-06-01",
          "orders": 611,
          "net": 113077.67,
          "discount": 0.0,
          "ticket": 185.07
        },
        {
          "date": "2026-06-02",
          "orders": 712,
          "net": 134539.52,
          "discount": 0.0,
          "ticket": 188.96
        },
        {
          "date": "2026-06-03",
          "orders": 754,
          "net": 148373.81,
          "discount": 0.0,
          "ticket": 196.78
        },
        {
          "date": "2026-06-04",
          "orders": 628,
          "net": 94083.3,
          "discount": 0.0,
          "ticket": 149.81
        },
        {
          "date": "2026-06-05",
          "orders": 477,
          "net": 64100.2,
          "discount": 0.0,
          "ticket": 134.38
        },
        {
          "date": "2026-06-06",
          "orders": 490,
          "net": 71626.82,
          "discount": 0.0,
          "ticket": 146.18
        },
        {
          "date": "2026-06-07",
          "orders": 489,
          "net": 67279.02,
          "discount": 0.0,
          "ticket": 137.58
        },
        {
          "date": "2026-06-08",
          "orders": 657,
          "net": 96352.83,
          "discount": 0.0,
          "ticket": 146.66
        },
        {
          "date": "2026-06-09",
          "orders": 658,
          "net": 98528.84,
          "discount": 0.0,
          "ticket": 149.74
        },
        {
          "date": "2026-06-10",
          "orders": 684,
          "net": 99910.41,
          "discount": 0.0,
          "ticket": 146.07
        },
        {
          "date": "2026-06-11",
          "orders": 692,
          "net": 107892.66,
          "discount": 0.0,
          "ticket": 155.91
        },
        {
          "date": "2026-06-12",
          "orders": 624,
          "net": 93351.05,
          "discount": 0.0,
          "ticket": 149.6
        },
        {
          "date": "2026-06-13",
          "orders": 539,
          "net": 79124.98,
          "discount": 0.0,
          "ticket": 146.8
        },
        {
          "date": "2026-06-14",
          "orders": 639,
          "net": 92298.49,
          "discount": 0.0,
          "ticket": 144.44
        },
        {
          "date": "2026-06-15",
          "orders": 549,
          "net": 76885.71,
          "discount": 0.0,
          "ticket": 140.05
        }
      ],
      "meta": {
        "store": "SuperPet Perú",
        "currency": "PEN",
        "symbol": "S/",
        "periodo": "01/06/2026 – 15/06/2026"
      }
    },
    "b": {
      "periodo": "01/06/2025 – 15/06/2025",
      "fecha_inicio": "2025-06-01",
      "fecha_fin": "2025-06-15",
      "kpis": {
        "orders": 7978,
        "net": 1224930.45,
        "bruta": 1804888.13,
        "discount": 379932.32,
        "discount_pct": 21.1,
        "ticket": 153.54,
        "avg_items": 1.9
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 5339,
          "pct": 66.9,
          "net": 981847.97
        },
        {
          "m": "Gato",
          "n": 2938,
          "pct": 36.8,
          "net": 520691.85
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 9431,
          "net": 991911.38
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 2655,
          "net": 311649.63
        },
        {
          "cat": "Accesorios",
          "orders": 1378,
          "net": 90544.44
        },
        {
          "cat": "Salud e higiene",
          "orders": 1210,
          "net": 127996.74
        },
        {
          "cat": "Pet lovers",
          "orders": 162,
          "net": 3913.79
        },
        {
          "cat": "Juguetes",
          "orders": 113,
          "net": 3503.48
        },
        {
          "cat": "Sin categoría",
          "orders": 1,
          "net": 47.29
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 4058,
          "pct": 50.9,
          "pos_avg": 1.3,
          "anc_pct": 90.2,
          "add_pct": 18.7,
          "net": 754414.65
        },
        {
          "sc": "Antiparasitarios",
          "n": 1339,
          "pct": 16.8,
          "pos_avg": 1.4,
          "anc_pct": 85.4,
          "add_pct": 26.9,
          "net": 260581.26
        },
        {
          "sc": "Alimento húmedo",
          "n": 1030,
          "pct": 12.9,
          "pos_avg": 3.4,
          "anc_pct": 48.3,
          "add_pct": 79.3,
          "net": 93491.31
        },
        {
          "sc": "Arena para gato",
          "n": 886,
          "pct": 11.1,
          "pos_avg": 1.8,
          "anc_pct": 66.5,
          "add_pct": 36.9,
          "net": 104317.81
        },
        {
          "sc": "Snacks",
          "n": 830,
          "pct": 10.4,
          "pos_avg": 3.8,
          "anc_pct": 30.8,
          "add_pct": 85.9,
          "net": 48990.6
        },
        {
          "sc": "Alimento medicado",
          "n": 471,
          "pct": 5.9,
          "pos_avg": 1.5,
          "anc_pct": 82.4,
          "add_pct": 23.2,
          "net": 84002.49
        },
        {
          "sc": "Fármacos",
          "n": 233,
          "pct": 2.9,
          "pos_avg": 1.6,
          "anc_pct": 75.5,
          "add_pct": 35.8,
          "net": 14489.81
        },
        {
          "sc": "Correas y arneses",
          "n": 210,
          "pct": 2.6,
          "pos_avg": 3.0,
          "anc_pct": 61.0,
          "add_pct": 65.4,
          "net": 21794.47
        },
        {
          "sc": "Collares y bandanas",
          "n": 194,
          "pct": 2.4,
          "pos_avg": 3.3,
          "anc_pct": 53.6,
          "add_pct": 65.7,
          "net": 14362.01
        },
        {
          "sc": "Pañales y control de orina",
          "n": 178,
          "pct": 2.2,
          "pos_avg": 1.7,
          "anc_pct": 67.4,
          "add_pct": 36.8,
          "net": 16437.51
        },
        {
          "sc": "Alimento BARF",
          "n": 175,
          "pct": 2.2,
          "pos_avg": 2.3,
          "anc_pct": 54.9,
          "add_pct": 61.0,
          "net": 12845.29
        },
        {
          "sc": "Juguetes",
          "n": 158,
          "pct": 2.0,
          "pos_avg": 3.3,
          "anc_pct": 39.2,
          "add_pct": 75.4,
          "net": 6553.26
        },
        {
          "sc": "Camas y mantas",
          "n": 157,
          "pct": 2.0,
          "pos_avg": 1.6,
          "anc_pct": 72.6,
          "add_pct": 36.0,
          "net": 18457.32
        },
        {
          "sc": "Suplementos y vitaminas",
          "n": 134,
          "pct": 1.7,
          "pos_avg": 1.6,
          "anc_pct": 70.1,
          "add_pct": 34.3,
          "net": 11057.92
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Antiparasitarios",
        "Alimento húmedo",
        "Arena para gato",
        "Snacks",
        "Alimento medicado"
      ],
      "cooc_matrix": [
        [
          null,
          4.7,
          10.4,
          7.1,
          8.9,
          1.3
        ],
        [
          14.3,
          null,
          3.4,
          2.0,
          6.5,
          1.2
        ],
        [
          41.2,
          4.5,
          null,
          19.4,
          19.7,
          6.4
        ],
        [
          32.7,
          3.0,
          22.6,
          null,
          12.9,
          4.3
        ],
        [
          43.4,
          10.5,
          24.5,
          13.7,
          null,
          3.4
        ],
        [
          11.0,
          3.4,
          14.0,
          8.1,
          5.9,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 3662,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 300,
              "pct": 8.2
            },
            {
              "sc": "Snacks",
              "n": 279,
              "pct": 7.6
            },
            {
              "sc": "Arena para gato",
              "n": 158,
              "pct": 4.3
            },
            {
              "sc": "Antiparasitarios",
              "n": 111,
              "pct": 3.0
            },
            {
              "sc": "Alimento BARF",
              "n": 43,
              "pct": 1.2
            },
            {
              "sc": "Juguetes",
              "n": 27,
              "pct": 0.7
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 1143,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 66,
              "pct": 5.8
            },
            {
              "sc": "Snacks",
              "n": 48,
              "pct": 4.2
            },
            {
              "sc": "Alimento húmedo",
              "n": 21,
              "pct": 1.8
            },
            {
              "sc": "Shampoo",
              "n": 12,
              "pct": 1.0
            },
            {
              "sc": "Arena para gato",
              "n": 11,
              "pct": 1.0
            },
            {
              "sc": "Juguetes",
              "n": 11,
              "pct": 1.0
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 589,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 97,
              "pct": 16.5
            },
            {
              "sc": "Alimento húmedo",
              "n": 80,
              "pct": 13.6
            },
            {
              "sc": "Snacks",
              "n": 51,
              "pct": 8.7
            },
            {
              "sc": "Areneros y accesorios",
              "n": 14,
              "pct": 2.4
            },
            {
              "sc": "Alimento medicado",
              "n": 13,
              "pct": 2.2
            },
            {
              "sc": "Juguetes",
              "n": 8,
              "pct": 1.4
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 498,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 85,
              "pct": 17.1
            },
            {
              "sc": "Snacks",
              "n": 69,
              "pct": 13.9
            },
            {
              "sc": "Arena para gato",
              "n": 65,
              "pct": 13.1
            },
            {
              "sc": "Alimento medicado",
              "n": 16,
              "pct": 3.2
            },
            {
              "sc": "Alimento BARF",
              "n": 7,
              "pct": 1.4
            },
            {
              "sc": "Antiparasitarios",
              "n": 7,
              "pct": 1.4
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 388,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 39,
              "pct": 10.1
            },
            {
              "sc": "Alimento seco",
              "n": 21,
              "pct": 5.4
            },
            {
              "sc": "Arena para gato",
              "n": 18,
              "pct": 4.6
            },
            {
              "sc": "Snacks",
              "n": 17,
              "pct": 4.4
            },
            {
              "sc": "Antiparasitarios",
              "n": 7,
              "pct": 1.8
            },
            {
              "sc": "Fármacos",
              "n": 4,
              "pct": 1.0
            }
          ]
        },
        {
          "anchor": "Snacks",
          "n": 256,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 37,
              "pct": 14.5
            },
            {
              "sc": "Alimento húmedo",
              "n": 37,
              "pct": 14.5
            },
            {
              "sc": "Arena para gato",
              "n": 19,
              "pct": 7.4
            },
            {
              "sc": "Juguetes",
              "n": 14,
              "pct": 5.5
            },
            {
              "sc": "Alimento BARF",
              "n": 11,
              "pct": 4.3
            },
            {
              "sc": "Antiparasitarios",
              "n": 10,
              "pct": 3.9
            }
          ]
        }
      ],
      "hours": [
        103,
        48,
        33,
        18,
        11,
        24,
        48,
        143,
        257,
        390,
        573,
        645,
        576,
        522,
        568,
        513,
        487,
        504,
        508,
        473,
        486,
        433,
        337,
        278
      ],
      "shipping": [
        {
          "method": "Lima",
          "n": 3842,
          "pct": 48.2
        },
        {
          "method": "Click & Collect",
          "n": 2054,
          "pct": 25.7
        },
        {
          "method": "Express",
          "n": 1719,
          "pct": 21.5
        },
        {
          "method": "Programado",
          "n": 382,
          "pct": 4.8
        },
        {
          "method": "Arequipa",
          "n": 30,
          "pct": 0.4
        },
        {
          "method": "Lima-La-Libertad",
          "n": 28,
          "pct": 0.4
        },
        {
          "method": "Lambayeque",
          "n": 20,
          "pct": 0.3
        },
        {
          "method": "Piura",
          "n": 15,
          "pct": 0.2
        }
      ],
      "promos": [
        {
          "id": "PBOMBA",
          "usos": 1653,
          "disc_net": 37504.07
        },
        {
          "id": "50%SELEC-WEB",
          "usos": 781,
          "disc_net": 67686.54
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 653,
          "disc_net": 8904.53
        },
        {
          "id": "COLLAR-9-90",
          "usos": 490,
          "disc_net": 23259.02
        },
        {
          "id": "10M2PERMAN",
          "usos": 267,
          "disc_net": 3796.65
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 221,
          "disc_net": 22553.25
        },
        {
          "id": "2DO30MMPP",
          "usos": 217,
          "disc_net": 7312.41
        },
        {
          "id": "3x2ARENA",
          "usos": 214,
          "disc_net": 13926.09
        },
        {
          "id": "20%PRODSELE",
          "usos": 185,
          "disc_net": 2885.1
        },
        {
          "id": "40%PRODSELE",
          "usos": 185,
          "disc_net": 7635.44
        }
      ],
      "coupons": [
        {
          "code": "PRIMERA10",
          "usos": 402,
          "disc": 7660.3,
          "pct": 10.0
        },
        {
          "code": "30DESCUENTO",
          "usos": 220,
          "disc": 48974.09,
          "pct": 29.9
        },
        {
          "code": "CPC15PE2",
          "usos": 171,
          "disc": 4505.33,
          "pct": 15.0
        },
        {
          "code": "PET15",
          "usos": 119,
          "disc": 3277.22,
          "pct": 15.0
        },
        {
          "code": "VUELVE15",
          "usos": 5,
          "disc": 75.0,
          "pct": 21.7
        },
        {
          "code": "SPPSOL6M1",
          "usos": 3,
          "disc": 45.0,
          "pct": 18.3
        },
        {
          "code": "JP4CPAJUL",
          "usos": 2,
          "disc": 30.0,
          "pct": 14.3
        },
        {
          "code": "SPN6FDC",
          "usos": 2,
          "disc": 30.0,
          "pct": 12.4
        },
        {
          "code": "SP-4BCYZKTY",
          "usos": 1,
          "disc": 17.7,
          "pct": 15.0
        },
        {
          "code": "SP-P4MC46QT",
          "usos": 1,
          "disc": 40.52,
          "pct": 10.0
        }
      ],
      "products": [
        {
          "id": "FF000101",
          "name": "Bravecto 250mg para Perro 4.5 a 10kg 1 Tab.",
          "orders": 341,
          "qty": 403.0,
          "net": 65197.34,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP000815",
          "name": "Salvaje Adulto Con Salmon 15Kg",
          "orders": 336,
          "qty": 365.0,
          "net": 54100.3,
          "pos1_pct": 95,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000033",
          "name": "Canbo Adulto Cordero Razas Med/Gran Alimento Sec",
          "orders": 308,
          "qty": 332.0,
          "net": 68342.0,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000017",
          "name": "Canbo Cuidado De Esterilizados / Sterilized Care",
          "orders": 209,
          "qty": 214.0,
          "net": 32626.44,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000036",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 205,
          "qty": 226.0,
          "net": 23730.0,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000743",
          "name": "Proteggo 3m 500mg para Perro 10 20 Kg (Cja X 1 T",
          "orders": 196,
          "qty": 248.0,
          "net": 32639.28,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000489",
          "name": "Churu Sabor Atún con Salmón 60Gr",
          "orders": 144,
          "qty": 310.0,
          "net": 3388.78,
          "pos1_pct": 19,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000019",
          "name": "Canbo Cuidado Del Tracto Urinario / Urinary Heal",
          "orders": 135,
          "qty": 138.0,
          "net": 21039.47,
          "pos1_pct": 91,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000102",
          "name": "Bravecto 500mg para Perro 10 a 20kg 1 Tab.",
          "orders": 135,
          "qty": 159.0,
          "net": 27340.05,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "HC000487",
          "name": "Arena para gato Tkpet aglomerante aroma talco 20",
          "orders": 132,
          "qty": 329.0,
          "net": 25065.52,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "FF000742",
          "name": "Proteggo 3m 250 Mg para Perro 4.5 10 Kg (Cja X 1",
          "orders": 130,
          "qty": 179.0,
          "net": 22618.02,
          "pos1_pct": 72,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "HC000015",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 127,
          "qty": 163.0,
          "net": 10070.14,
          "pos1_pct": 60,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP000040",
          "name": "Canbo Cachorro Cordero Razas Pequeñas Alimento S",
          "orders": 117,
          "qty": 132.0,
          "net": 14530.71,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000014",
          "name": "Arena Para Gato Klinkat Arena Para Gatos",
          "orders": 108,
          "qty": 141.0,
          "net": 4528.88,
          "pos1_pct": 32,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "FF000744",
          "name": "Proteggo 3m 1000mg para Perro 20 40 Kg (Cja X 1 ",
          "orders": 105,
          "qty": 120.0,
          "net": 20329.06,
          "pos1_pct": 72,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "HC000486",
          "name": "Arena para gato Tkpet aglomerante aroma talco 10",
          "orders": 101,
          "qty": 255.0,
          "net": 12944.59,
          "pos1_pct": 67,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP000796",
          "name": "Dogxtreme Adulto Cordero Alimento Seco Perro",
          "orders": 98,
          "qty": 147.0,
          "net": 21165.49,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000487",
          "name": "Churu Sabor Pollo 60Gr",
          "orders": 94,
          "qty": 209.0,
          "net": 2284.68,
          "pos1_pct": 13,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000393",
          "name": "Gran Plus Menu Gato Adulto Castrado  Salmon Y Ar",
          "orders": 90,
          "qty": 109.0,
          "net": 20590.07,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000016",
          "name": "Canbo Cuidado De Esterilizados / Sterilized Care",
          "orders": 90,
          "qty": 93.0,
          "net": 7006.62,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000270",
          "name": "Mio Cane Premium Adulto 15 kg",
          "orders": 88,
          "qty": 90.0,
          "net": 14178.6,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000490",
          "name": "Churu Sabor Pollo con Camarón 60Gr",
          "orders": 87,
          "qty": 138.0,
          "net": 1508.47,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000674",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 74,
          "qty": 159.0,
          "net": 10267.77,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000486",
          "name": "Churu Sabor Atún con Pollo 60Gr",
          "orders": 72,
          "qty": 114.0,
          "net": 1246.14,
          "pos1_pct": 1,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000485",
          "name": "Churu Sabor Atún 60Gr",
          "orders": 70,
          "qty": 135.0,
          "net": 1475.72,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "HC000715",
          "name": "Arena Para Gato Origens Super Premium 100% Natur",
          "orders": 69,
          "qty": 178.0,
          "net": 5723.81,
          "pos1_pct": 59,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "FF000755",
          "name": "Proteggo m 100 mg para Perro 4,5 10Kg (1tab x ca",
          "orders": 63,
          "qty": 105.0,
          "net": 5303.52,
          "pos1_pct": 75,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000495",
          "name": "Catxtreme Adulto Esterilizado Salmón 6 Kg",
          "orders": 62,
          "qty": 93.0,
          "net": 11026.08,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000677",
          "name": "Rivolta 6% X 0.75 Ml (2.6kg A 7.5kg) 1 Pipeta",
          "orders": 58,
          "qty": 164.0,
          "net": 6657.28,
          "pos1_pct": 50,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000247",
          "name": "Origens Filete Atún 85 g",
          "orders": 57,
          "qty": 255.0,
          "net": 1923.23,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000249",
          "name": "Origens Filete Atún Con Camaron 85 g",
          "orders": 54,
          "qty": 195.0,
          "net": 1470.68,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000250",
          "name": "Origens Filete Atún Con Corvina 85 g",
          "orders": 52,
          "qty": 210.0,
          "net": 1583.83,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000251",
          "name": "Origens Filete Atún Con Papaya 85 g",
          "orders": 51,
          "qty": 195.0,
          "net": 1470.7,
          "pos1_pct": 31,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000217",
          "name": "Fancy Feast Al Horno Con Salmon En Salsa Y Otros",
          "orders": 50,
          "qty": 398.0,
          "net": 2327.23,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000330",
          "name": "Origens Filete De Atún Con Aceituna 85 g",
          "orders": 50,
          "qty": 203.0,
          "net": 1531.04,
          "pos1_pct": 6,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000797",
          "name": "Dogxtreme Adulto Senior/Light Alimento Seco Perr",
          "orders": 50,
          "qty": 74.0,
          "net": 10403.88,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000812",
          "name": "Salvaje Cachorro Con Pollo 15Kg",
          "orders": 48,
          "qty": 55.0,
          "net": 7918.95,
          "pos1_pct": 94,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000756",
          "name": "Proteggo m 200 mg para Perro 10 20Kg (1tab x caj",
          "orders": 48,
          "qty": 61.0,
          "net": 3706.47,
          "pos1_pct": 65,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000331",
          "name": "Origens Filete De Atún Con Durazno 85 g",
          "orders": 46,
          "qty": 200.0,
          "net": 1508.39,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000333",
          "name": "Origens Filete De Atún Con Manzana 85 g",
          "orders": 45,
          "qty": 158.0,
          "net": 1191.6,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000349",
          "name": "Rambala Comida Congelada Premium para Perros Pol",
          "orders": 44,
          "qty": 142.0,
          "net": 2033.67,
          "pos1_pct": 52,
          "mascota": "Perro",
          "subcat": "Alimento BARF",
          "cat": "Alimentos"
        },
        {
          "id": "AG000488",
          "name": "Churu Sabor Atún con Ostiones 60Gr",
          "orders": 44,
          "qty": 73.0,
          "net": 797.97,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "FF000175",
          "name": "Nexgard 136mg (25.1 a 50kg) 3 tabletas",
          "orders": 43,
          "qty": 53.0,
          "net": 12167.67,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "HC000743",
          "name": "Arena Orgánica De Soya 100% Biodegradable 4 Kg v",
          "orders": 43,
          "qty": 109.0,
          "net": 5533.16,
          "pos1_pct": 60,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AP000814",
          "name": "Salvaje Adulto Con Cordero 15 Kg",
          "orders": 41,
          "qty": 41.0,
          "net": 5903.18,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "MD003134",
          "name": "Flex Shock Correa Amortiguadora  Rojo Y Negro 2.",
          "orders": 41,
          "qty": 44.0,
          "net": 2979.24,
          "pos1_pct": 68,
          "mascota": "Perro",
          "subcat": "Collares y bandanas",
          "cat": "Accesorios"
        },
        {
          "id": "AG000252",
          "name": "Origens Filete Atún Con Piña 85 g",
          "orders": 40,
          "qty": 132.0,
          "net": 995.53,
          "pos1_pct": 5,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000656",
          "name": "Catxtreme Cat Adult Steril Pate With Salmon 170 ",
          "orders": 40,
          "qty": 196.0,
          "net": 1644.44,
          "pos1_pct": 48,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000153",
          "name": "Ricocat Adultos Esterilizados Alimento Seco Gato",
          "orders": 39,
          "qty": 66.0,
          "net": 5307.87,
          "pos1_pct": 62,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000034",
          "name": "Canbo Adulto Cordero Razas Med/Gran Alimento Sec",
          "orders": 39,
          "qty": 41.0,
          "net": 1977.02,
          "pos1_pct": 59,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP000037",
          "name": "Canbo Cachorro Cordero razas med/gran",
          "orders": 39,
          "qty": 40.0,
          "net": 8776.39,
          "pos1_pct": 77,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000093",
          "name": "Hills PD c/d Multicare 1.8kg Cuidado urinario Mu",
          "orders": 39,
          "qty": 51.0,
          "net": 6232.29,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "AG000253",
          "name": "Origens Filete Atún Con Tilapia 85 g",
          "orders": 39,
          "qty": 114.0,
          "net": 859.77,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000681",
          "name": "Leonardo Drink Salmón 0.040 Kg",
          "orders": 38,
          "qty": 233.0,
          "net": 1165.0,
          "pos1_pct": 16,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000043",
          "name": "Canbo Enlatado Óptima Digestión 330 g",
          "orders": 38,
          "qty": 201.0,
          "net": 2197.32,
          "pos1_pct": 47,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000379",
          "name": "Gran Plus Menu Gato Adulto Carne Y Arroz",
          "orders": 38,
          "qty": 48.0,
          "net": 8619.77,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "HC000411",
          "name": "Mpets Carbon Training Pads Pañales De Entrenamie",
          "orders": 38,
          "qty": 59.0,
          "net": 2995.02,
          "pos1_pct": 55,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP000395",
          "name": "Ricocan Cordero Y Cereales Adultos Razas Pequeña",
          "orders": 37,
          "qty": 49.0,
          "net": 5269.49,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PP000120",
          "name": "Barker Bites Pollo (100 g)",
          "orders": 36,
          "qty": 84.0,
          "net": 1559.04,
          "pos1_pct": 28,
          "mascota": "Perro Y Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "PG000105",
          "name": "Churu Gato Pollo Con Salmón (4 Unidades)",
          "orders": 36,
          "qty": 60.0,
          "net": 655.87,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AP000035",
          "name": "Canbo Adulto Cordero razas pequeñas",
          "orders": 35,
          "qty": 35.0,
          "net": 1687.7,
          "pos1_pct": 69,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000174",
          "name": "Nexgard 68mg (10.1 a 25kg) 3 tabletas",
          "orders": 35,
          "qty": 39.0,
          "net": 7697.47,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000655",
          "name": "Catxtreme Cat Adult Steril Pate With Lamb 170 Gr",
          "orders": 35,
          "qty": 126.0,
          "net": 1057.14,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000332",
          "name": "Origens Filete De Atún Con Melón 85 g",
          "orders": 35,
          "qty": 113.0,
          "net": 852.2,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000795",
          "name": "Dogxtreme Adulto Pollo Alimento Seco Perro",
          "orders": 33,
          "qty": 51.0,
          "net": 7170.27,
          "pos1_pct": 97,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000492",
          "name": "Catxtreme Adulto Esterilizado Pollo 2.5 Kg",
          "orders": 33,
          "qty": 45.0,
          "net": 2475.0,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000229",
          "name": "Félix Pate Salmón 156gr",
          "orders": 32,
          "qty": 171.0,
          "net": 999.9,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000798",
          "name": "Dogxtreme Adulto Salmón Alimento Seco Perro 12 K",
          "orders": 32,
          "qty": 52.0,
          "net": 8809.15,
          "pos1_pct": 94,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000671",
          "name": "Leonardo Quality Selection Pescado",
          "orders": 32,
          "qty": 105.0,
          "net": 1948.78,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000248",
          "name": "Origens Filete Atún Con Calamar 85 g",
          "orders": 32,
          "qty": 90.0,
          "net": 678.72,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000683",
          "name": "Leonardo Drink Ternera 0.040 Kg",
          "orders": 31,
          "qty": 153.0,
          "net": 765.0,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "FF000757",
          "name": "Proteggo m 400 mg para Perro 20 40Kg (1tab x caj",
          "orders": 31,
          "qty": 49.0,
          "net": 3807.82,
          "pos1_pct": 71,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000225",
          "name": "Fancy Feast Al Grill Con Atun Y Otros 85 g",
          "orders": 31,
          "qty": 171.0,
          "net": 999.87,
          "pos1_pct": 3,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000561",
          "name": "Salvaje Esterilizado Gato 12kg",
          "orders": 31,
          "qty": 32.0,
          "net": 4064.97,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000219",
          "name": "Fancy Feast Gravy Lovers A La Parrilla Sabor Fes",
          "orders": 30,
          "qty": 162.0,
          "net": 947.24,
          "pos1_pct": 13,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000673",
          "name": "Leonardo Quality Selection Pato",
          "orders": 30,
          "qty": 117.0,
          "net": 2171.48,
          "pos1_pct": 27,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000018",
          "name": "Canbo Cuidado Del Tracto Urinario / Urinary Heal",
          "orders": 29,
          "qty": 29.0,
          "net": 2184.86,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AG000218",
          "name": "Fancy Feast Paté Clásico Con Bacalao, Lenguado, ",
          "orders": 29,
          "qty": 222.0,
          "net": 1298.11,
          "pos1_pct": 28,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AG000675",
          "name": "Leonardo Quality Selection Ave",
          "orders": 28,
          "qty": 139.0,
          "net": 2579.77,
          "pos1_pct": 54,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "PP000121",
          "name": "Barker Bites Bazo De Res (100 g)",
          "orders": 28,
          "qty": 68.0,
          "net": 1146.75,
          "pos1_pct": 25,
          "mascota": "Perro Y Gato",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000069",
          "name": "Hills PD c/d Multi Stress Cuidado urinario Multi",
          "orders": 28,
          "qty": 36.0,
          "net": 4399.27,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "AP001366",
          "name": "Pro plan Piel Sensible Adulto Cordero Todas las ",
          "orders": 27,
          "qty": 41.0,
          "net": 12505.0,
          "pos1_pct": 93,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PP000299",
          "name": "Dentitoy Snacks Deshidratados X500 G",
          "orders": 26,
          "qty": 52.0,
          "net": 1185.49,
          "pos1_pct": 35,
          "mascota": "Perro",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000391",
          "name": "Gran Plus Menu Gato Adulto Castrado  Salmon Y Ar",
          "orders": 26,
          "qty": 26.0,
          "net": 1782.56,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "FF000098",
          "name": "Bravecto 1000mg para Perro 20 a 40kg 1 Tab.",
          "orders": 26,
          "qty": 44.0,
          "net": 9728.42,
          "pos1_pct": 62,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AG000654",
          "name": "Catxtreme Cat Adult Steril Pate With Beef 170 Gr",
          "orders": 26,
          "qty": 92.0,
          "net": 771.88,
          "pos1_pct": 4,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000367",
          "name": "Ricocan Adulto Paté de Cordero 312 g",
          "orders": 26,
          "qty": 121.0,
          "net": 605.0,
          "pos1_pct": 15,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP001070",
          "name": "Hill's Science Diet Adult Small Bites, cordero y",
          "orders": 26,
          "qty": 27.0,
          "net": 6541.83,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "AP001125",
          "name": "Nath Dog Adult Mini Alimento Seco Perro",
          "orders": 25,
          "qty": 32.0,
          "net": 4770.24,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PS000823",
          "name": "Zapatos para mascotas colores surtidos",
          "orders": 25,
          "qty": 31.0,
          "net": 417.63,
          "pos1_pct": 72,
          "mascota": "Perro",
          "subcat": "Accesorios para paseo",
          "cat": "Accesorios"
        },
        {
          "id": "AG000245",
          "name": "Hills PD i/d Digestive Care 5.5 oz 156gr",
          "orders": 25,
          "qty": 60.0,
          "net": 1276.23,
          "pos1_pct": 48,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "AP000041",
          "name": "Canbo Dog Paté Flexibilidad y Movilidad 330g",
          "orders": 24,
          "qty": 110.0,
          "net": 1202.51,
          "pos1_pct": 12,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "MD008179",
          "name": "Mpets pañal de entrenamiento cachorro 90x60 cm  ",
          "orders": 24,
          "qty": 48.0,
          "net": 2518.06,
          "pos1_pct": 62,
          "mascota": "Perro",
          "subcat": "Pañales y control de orina",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "FF000741",
          "name": "Proteggo 3m 112.5 Mg para Perro 2 4.5 Kg (Cja X ",
          "orders": 24,
          "qty": 32.0,
          "net": 3753.27,
          "pos1_pct": 79,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "AP000045",
          "name": "Canbo Enlatado Hipoalergenico 330 g",
          "orders": 24,
          "qty": 109.0,
          "net": 1376.32,
          "pos1_pct": 25,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "HC000745",
          "name": "Arena Orgánica De Soya 100% Biodegradable 4 Kg v",
          "orders": 24,
          "qty": 57.0,
          "net": 2893.49,
          "pos1_pct": 58,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "HC000803",
          "name": "Tkpet Arena aglomerante sin aroma",
          "orders": 23,
          "qty": 62.0,
          "net": 4198.2,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Salud e higiene"
        },
        {
          "id": "AG000493",
          "name": "Catxtreme Adulto Esterilizado Salmón 2.5 Kg",
          "orders": 23,
          "qty": 27.0,
          "net": 1599.44,
          "pos1_pct": 57,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "PP000210",
          "name": "Barker Bites Hígado De Res (100 g)",
          "orders": 23,
          "qty": 45.0,
          "net": 758.86,
          "pos1_pct": 4,
          "mascota": "Perro",
          "subcat": "Snacks",
          "cat": "Alimentos"
        },
        {
          "id": "AG000479",
          "name": "Bravery Chicken Adult Cat Sterilized Alimento Se",
          "orders": 23,
          "qty": 28.0,
          "net": 5573.95,
          "pos1_pct": 91,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 7978,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 3071,
          "pct": 38.5
        },
        {
          "pos": 3,
          "n": 1494,
          "pct": 18.7
        },
        {
          "pos": 4,
          "n": 843,
          "pct": 10.6
        },
        {
          "pos": 5,
          "n": 501,
          "pct": 6.3
        },
        {
          "pos": 6,
          "n": 329,
          "pct": 4.1
        },
        {
          "pos": 7,
          "n": 223,
          "pct": 2.8
        }
      ],
      "promos_all": [
        {
          "id": "PBOMBA",
          "usos": 1653,
          "disc_net": 37504.07,
          "ppu": 22.69
        },
        {
          "id": "50%SELEC-WEB",
          "usos": 781,
          "disc_net": 67686.54,
          "ppu": 86.67
        },
        {
          "id": "4x3SNACKPERMAN",
          "usos": 653,
          "disc_net": 8904.53,
          "ppu": 13.64
        },
        {
          "id": "COLLAR-9-90",
          "usos": 490,
          "disc_net": 23259.02,
          "ppu": 47.47
        },
        {
          "id": "10M2PERMAN",
          "usos": 267,
          "disc_net": 3796.65,
          "ppu": 14.22
        },
        {
          "id": "50PRODSELEC-WEB",
          "usos": 221,
          "disc_net": 22553.25,
          "ppu": 102.05
        },
        {
          "id": "2DO30MMPP",
          "usos": 217,
          "disc_net": 7312.41,
          "ppu": 33.7
        },
        {
          "id": "3x2ARENA",
          "usos": 214,
          "disc_net": 13926.09,
          "ppu": 65.08
        },
        {
          "id": "20%PRODSELE",
          "usos": 185,
          "disc_net": 2885.1,
          "ppu": 15.6
        },
        {
          "id": "40%PRODSELE",
          "usos": 185,
          "disc_net": 7635.44,
          "ppu": 41.27
        },
        {
          "id": "5M1PERMAN",
          "usos": 147,
          "disc_net": 1533.85,
          "ppu": 10.43
        },
        {
          "id": "3x2ARENASELEC",
          "usos": 130,
          "disc_net": 6386.99,
          "ppu": 49.13
        },
        {
          "id": "2X1PRODSELE",
          "usos": 110,
          "disc_net": 2416.9,
          "ppu": 21.97
        },
        {
          "id": "15PROPLN-3KG",
          "usos": 109,
          "disc_net": 1820.54,
          "ppu": 16.7
        },
        {
          "id": "3x2HUM-MMPP",
          "usos": 105,
          "disc_net": 1411.6,
          "ppu": 13.44
        },
        {
          "id": "10PRODSELEC",
          "usos": 90,
          "disc_net": 483.42,
          "ppu": 5.37
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 87,
          "disc_net": 2333.05,
          "ppu": 26.82
        },
        {
          "id": "2DO40DOGX",
          "usos": 83,
          "disc_net": 4466.37,
          "ppu": 53.81
        },
        {
          "id": "8M4-HUM-SELEC",
          "usos": 81,
          "disc_net": 2640.7,
          "ppu": 32.6
        },
        {
          "id": "30DOGZI-CATZI",
          "usos": 79,
          "disc_net": 4152.21,
          "ppu": 52.56
        },
        {
          "id": "15PROPLN",
          "usos": 69,
          "disc_net": 2971.16,
          "ppu": 43.06
        },
        {
          "id": "45PRODSELEC-WEB",
          "usos": 50,
          "disc_net": 4790.85,
          "ppu": 95.82
        },
        {
          "id": "3x2AREN-SELEC",
          "usos": 43,
          "disc_net": 2348.72,
          "ppu": 54.62
        },
        {
          "id": "4x3BARKER",
          "usos": 43,
          "disc_net": 902.09,
          "ppu": 20.98
        },
        {
          "id": "3X2RIV-VANT",
          "usos": 43,
          "disc_net": 1911.81,
          "ppu": 44.46
        },
        {
          "id": "40PRODSELEC-WEB",
          "usos": 40,
          "disc_net": 3563.26,
          "ppu": 89.08
        },
        {
          "id": "5PRODSELEC",
          "usos": 39,
          "disc_net": 122.55,
          "ppu": 3.14
        },
        {
          "id": "COLLAR-6-90",
          "usos": 38,
          "disc_net": 639.84,
          "ppu": 16.84
        },
        {
          "id": "20HILLS",
          "usos": 37,
          "disc_net": 1418.42,
          "ppu": 38.34
        },
        {
          "id": "PE-list-liquidacion50%",
          "usos": 36,
          "disc_net": 4082.95,
          "ppu": 113.42
        },
        {
          "id": "JUGUET-6-90",
          "usos": 36,
          "disc_net": 109.27,
          "ppu": 3.04
        },
        {
          "id": "20NATHVET",
          "usos": 34,
          "disc_net": 709.68,
          "ppu": 20.87
        },
        {
          "id": "DCTO-FUNCIONARIO-MP",
          "usos": 33,
          "disc_net": 1242.16,
          "ppu": 37.64
        },
        {
          "id": "15%PRODSELE",
          "usos": 32,
          "disc_net": 408.58,
          "ppu": 12.77
        },
        {
          "id": "15PRODSELEC",
          "usos": 30,
          "disc_net": 286.63,
          "ppu": 9.55
        },
        {
          "id": "DCTO-FUNCIONARIO-MC",
          "usos": 30,
          "disc_net": 547.66,
          "ppu": 18.26
        },
        {
          "id": "3x2BOLSA-FECA",
          "usos": 26,
          "disc_net": 357.93,
          "ppu": 13.77
        },
        {
          "id": "8M4HUM-SELEC",
          "usos": 24,
          "disc_net": 658.64,
          "ppu": 27.44
        },
        {
          "id": "2x1PRODSELEC",
          "usos": 24,
          "disc_net": 1220.49,
          "ppu": 50.85
        },
        {
          "id": "5MIOCANE",
          "usos": 23,
          "disc_net": 77.99,
          "ppu": 3.39
        },
        {
          "id": "JUGUET-9-90",
          "usos": 23,
          "disc_net": 117.8,
          "ppu": 5.12
        },
        {
          "id": "50%PRODSELE-WEB",
          "usos": 22,
          "disc_net": 2426.7,
          "ppu": 110.3
        },
        {
          "id": "40PRODSELEC",
          "usos": 22,
          "disc_net": 650.27,
          "ppu": 29.56
        },
        {
          "id": "20PRODSELEC",
          "usos": 22,
          "disc_net": 382.4,
          "ppu": 17.38
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 21,
          "disc_net": 679.02,
          "ppu": 32.33
        },
        {
          "id": "2DO40PAÑALES",
          "usos": 20,
          "disc_net": 440.59,
          "ppu": 22.03
        },
        {
          "id": "PE-list-liquidacion70%",
          "usos": 19,
          "disc_net": 740.29,
          "ppu": 38.96
        },
        {
          "id": "4x3-TOALL-HUM",
          "usos": 18,
          "disc_net": 190.81,
          "ppu": 10.6
        },
        {
          "id": "JUGUET-12-90",
          "usos": 17,
          "disc_net": 293.2,
          "ppu": 17.25
        },
        {
          "id": "30%SELEC-WEB",
          "usos": 17,
          "disc_net": 2164.48,
          "ppu": 127.32
        },
        {
          "id": "JUGUET-29-90",
          "usos": 16,
          "disc_net": 1008.44,
          "ppu": 63.03
        },
        {
          "id": "20ACEITE-TR",
          "usos": 15,
          "disc_net": 84.32,
          "ppu": 5.62
        },
        {
          "id": "combobaker",
          "usos": 13,
          "disc_net": 128.58,
          "ppu": 9.89
        },
        {
          "id": "30%PRODSELE",
          "usos": 12,
          "disc_net": 600.97,
          "ppu": 50.08
        },
        {
          "id": "2DO50-PRODSELE",
          "usos": 10,
          "disc_net": 656.77,
          "ppu": 65.68
        },
        {
          "id": "CANBO-15M3KG",
          "usos": 10,
          "disc_net": 215.9,
          "ppu": 21.59
        },
        {
          "id": "2DO30TOOTOY",
          "usos": 10,
          "disc_net": 80.26,
          "ppu": 8.03
        },
        {
          "id": "10%PRODSELE",
          "usos": 10,
          "disc_net": 37.93,
          "ppu": 3.79
        },
        {
          "id": "25PRODSELEC",
          "usos": 10,
          "disc_net": 501.96,
          "ppu": 50.2
        },
        {
          "id": "30PRODSELEC",
          "usos": 9,
          "disc_net": 454.79,
          "ppu": 50.53
        },
        {
          "id": "PRECIOS-9-90",
          "usos": 9,
          "disc_net": 41.54,
          "ppu": 4.62
        },
        {
          "id": "50PRODSELEC",
          "usos": 8,
          "disc_net": 838.64,
          "ppu": 104.83
        },
        {
          "id": "2DO40PRODSELEC",
          "usos": 7,
          "disc_net": 430.58,
          "ppu": 61.51
        },
        {
          "id": "45%PRODSELE-WEB",
          "usos": 7,
          "disc_net": 686.54,
          "ppu": 98.08
        },
        {
          "id": "PE-list-liquidacion30%",
          "usos": 7,
          "disc_net": 71.26,
          "ppu": 10.18
        },
        {
          "id": "H-30PRODSELE-WEB",
          "usos": 6,
          "disc_net": 272.11,
          "ppu": 45.35
        },
        {
          "id": "3x2JUGUE-SELEC",
          "usos": 6,
          "disc_net": 160.5,
          "ppu": 26.75
        },
        {
          "id": "2DO40PROPLAN",
          "usos": 5,
          "disc_net": 424.87,
          "ppu": 84.97
        },
        {
          "id": "PBOMBA-TKPET-AGLOM",
          "usos": 4,
          "disc_net": 67.8,
          "ppu": 16.95
        },
        {
          "id": "REGALO-ARENA-PALA",
          "usos": 4,
          "disc_net": 16.6,
          "ppu": 4.15
        },
        {
          "id": "30%PRODSELE-WEB",
          "usos": 4,
          "disc_net": 181.65,
          "ppu": 45.41
        },
        {
          "id": "10MIOGATTO",
          "usos": 4,
          "disc_net": 52.84,
          "ppu": 13.21
        },
        {
          "id": "4x12.90CATBAND",
          "usos": 4,
          "disc_net": 2.3,
          "ppu": 0.57
        },
        {
          "id": "4x3YOGY",
          "usos": 3,
          "disc_net": 29.23,
          "ppu": 9.74
        },
        {
          "id": "2x1SNACKSELEC",
          "usos": 3,
          "disc_net": 70.84,
          "ppu": 23.61
        },
        {
          "id": "10PRODSELEC-WEB",
          "usos": 2,
          "disc_net": 11.08,
          "ppu": 5.54
        },
        {
          "id": "PRECIOS-6-90",
          "usos": 2,
          "disc_net": 5.08,
          "ppu": 2.54
        },
        {
          "id": "PRECIOS-12-90",
          "usos": 2,
          "disc_net": 45.76,
          "ppu": 22.88
        },
        {
          "id": "REGALO-TRUE-GAT",
          "usos": 2,
          "disc_net": 21.86,
          "ppu": 10.93
        },
        {
          "id": "4M1HUMROYAL",
          "usos": 1,
          "disc_net": 7.54,
          "ppu": 7.54
        },
        {
          "id": "40%PRODSELE-WEB",
          "usos": 1,
          "disc_net": 13.53,
          "ppu": 13.53
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 1,
          "disc_net": 2.17,
          "ppu": 2.17
        },
        {
          "id": "3x2SECO-BELCAN",
          "usos": 1,
          "disc_net": 110.08,
          "ppu": 110.08
        },
        {
          "id": "4x3-PRODSELEC",
          "usos": 1,
          "disc_net": 45.51,
          "ppu": 45.51
        },
        {
          "id": "30PROTEGG",
          "usos": 1,
          "disc_net": 78.97,
          "ppu": 78.97
        },
        {
          "id": "3x2FMPETS",
          "usos": 1,
          "disc_net": 12.63,
          "ppu": 12.63
        },
        {
          "id": "5x9.90FECAS",
          "usos": 1,
          "disc_net": 3.9,
          "ppu": 3.9
        },
        {
          "id": "3PELSOLID",
          "usos": 1,
          "disc_net": 6.61,
          "ppu": 6.61
        },
        {
          "id": "REGALO-TRUE-PER",
          "usos": 1,
          "disc_net": 10.93,
          "ppu": 10.93
        },
        {
          "id": "REGALO-CATX-HUM",
          "usos": 1,
          "disc_net": 8.39,
          "ppu": 8.39
        }
      ],
      "coupons_all": [
        {
          "code": "PRIMERA10",
          "usos": 402,
          "disc": 7660.3,
          "pct": 10.0
        },
        {
          "code": "30DESCUENTO",
          "usos": 220,
          "disc": 48974.09,
          "pct": 29.9
        },
        {
          "code": "CPC15PE2",
          "usos": 171,
          "disc": 4505.33,
          "pct": 15.0
        },
        {
          "code": "PET15",
          "usos": 119,
          "disc": 3277.22,
          "pct": 15.0
        },
        {
          "code": "VUELVE15",
          "usos": 5,
          "disc": 75.0,
          "pct": 21.7
        },
        {
          "code": "SPPSOL6M1",
          "usos": 3,
          "disc": 45.0,
          "pct": 18.3
        },
        {
          "code": "JP4CPAJUL",
          "usos": 2,
          "disc": 30.0,
          "pct": 14.3
        },
        {
          "code": "SPN6FDC",
          "usos": 2,
          "disc": 30.0,
          "pct": 12.4
        },
        {
          "code": "SP-4BCYZKTY",
          "usos": 1,
          "disc": 17.7,
          "pct": 15.0
        },
        {
          "code": "SP-P4MC46QT",
          "usos": 1,
          "disc": 40.52,
          "pct": 10.0
        },
        {
          "code": "SP-6BRY7722",
          "usos": 1,
          "disc": 78.5,
          "pct": 15.0
        },
        {
          "code": "PRCP",
          "usos": 1,
          "disc": 17.57,
          "pct": 15.0
        },
        {
          "code": "SP-NTOPQXNC",
          "usos": 1,
          "disc": 11.25,
          "pct": 15.0
        },
        {
          "code": "SPAL10EVA",
          "usos": 1,
          "disc": 15.0,
          "pct": 18.2
        },
        {
          "code": "JP3CPAJUL",
          "usos": 1,
          "disc": 15.0,
          "pct": 23.3
        }
      ],
      "shipping_detail": [
        {
          "method": "Lima",
          "n": 3842,
          "pct": 48.2,
          "net": 692751.8,
          "ticket": 180.31,
          "avg_items": 2.0
        },
        {
          "method": "Click & Collect",
          "n": 2054,
          "pct": 25.7,
          "net": 233922.43,
          "ticket": 113.89,
          "avg_items": 1.5
        },
        {
          "method": "Express",
          "n": 1719,
          "pct": 21.5,
          "net": 257389.02,
          "ticket": 149.73,
          "avg_items": 2.0
        },
        {
          "method": "Programado",
          "n": 382,
          "pct": 4.8,
          "net": 62547.54,
          "ticket": 163.74,
          "avg_items": 1.9
        },
        {
          "method": "Arequipa",
          "n": 30,
          "pct": 0.4,
          "net": 6758.85,
          "ticket": 225.29,
          "avg_items": 0.7
        },
        {
          "method": "Lima-La-Libertad",
          "n": 28,
          "pct": 0.4,
          "net": 4393.42,
          "ticket": 156.91,
          "avg_items": 0.6
        },
        {
          "method": "Lambayeque",
          "n": 20,
          "pct": 0.3,
          "net": 2301.17,
          "ticket": 115.06,
          "avg_items": 0.7
        },
        {
          "method": "Piura",
          "n": 15,
          "pct": 0.2,
          "net": 1937.8,
          "ticket": 129.19,
          "avg_items": 0.6
        }
      ],
      "daily": [
        {
          "date": "2025-06-01",
          "orders": 453,
          "net": 70332.84,
          "discount": 0.0,
          "ticket": 155.26
        },
        {
          "date": "2025-06-02",
          "orders": 654,
          "net": 95699.78,
          "discount": 0.0,
          "ticket": 146.33
        },
        {
          "date": "2025-06-03",
          "orders": 652,
          "net": 123147.38,
          "discount": 0.0,
          "ticket": 188.88
        },
        {
          "date": "2025-06-04",
          "orders": 596,
          "net": 99204.43,
          "discount": 0.0,
          "ticket": 166.45
        },
        {
          "date": "2025-06-05",
          "orders": 552,
          "net": 97792.11,
          "discount": 0.0,
          "ticket": 177.16
        },
        {
          "date": "2025-06-06",
          "orders": 476,
          "net": 69515.1,
          "discount": 0.0,
          "ticket": 146.04
        },
        {
          "date": "2025-06-07",
          "orders": 445,
          "net": 63204.19,
          "discount": 0.0,
          "ticket": 142.03
        },
        {
          "date": "2025-06-08",
          "orders": 435,
          "net": 66701.12,
          "discount": 0.0,
          "ticket": 153.34
        },
        {
          "date": "2025-06-09",
          "orders": 546,
          "net": 84791.35,
          "discount": 0.0,
          "ticket": 155.3
        },
        {
          "date": "2025-06-10",
          "orders": 586,
          "net": 82991.8,
          "discount": 0.0,
          "ticket": 141.62
        },
        {
          "date": "2025-06-11",
          "orders": 565,
          "net": 84030.79,
          "discount": 0.0,
          "ticket": 148.73
        },
        {
          "date": "2025-06-12",
          "orders": 561,
          "net": 80679.68,
          "discount": 0.0,
          "ticket": 143.81
        },
        {
          "date": "2025-06-13",
          "orders": 551,
          "net": 77777.66,
          "discount": 0.0,
          "ticket": 141.16
        },
        {
          "date": "2025-06-14",
          "orders": 434,
          "net": 60188.92,
          "discount": 0.0,
          "ticket": 138.68
        },
        {
          "date": "2025-06-15",
          "orders": 472,
          "net": 68873.3,
          "discount": 0.0,
          "ticket": 145.92
        }
      ],
      "meta": {
        "store": "SuperPet Perú",
        "currency": "PEN",
        "symbol": "S/",
        "periodo": "01/06/2025 – 15/06/2025"
      }
    },
    "deltas": {
      "orders": 15.4,
      "net": 17.3,
      "ticket": 1.7,
      "discount_pct": 7.7,
      "avg_items": 10.5
    },
    "store": "SuperPet Perú",
    "symbol": "S/",
    "currency": "PEN"
  },
  "sz": {
    "a": {
      "periodo": "01/06/2026 – 15/06/2026",
      "fecha_inicio": "2026-06-01",
      "fecha_fin": "2026-06-15",
      "kpis": {
        "orders": 27820,
        "net": 1357524154.0,
        "bruta": 2228877570.0,
        "discount": 621649962.0,
        "discount_pct": 27.9,
        "ticket": 48796.7,
        "avg_items": 1.7
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 15816,
          "pct": 56.9,
          "net": 1074044902.0
        },
        {
          "m": "Gato",
          "n": 13722,
          "pct": 49.3,
          "net": 780194339.0
        },
        {
          "m": "Peces",
          "n": 1,
          "pct": 0.0,
          "net": 218479.0
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 35941,
          "net": 1519219860.0
        },
        {
          "cat": "Accesorios",
          "orders": 2980,
          "net": 83964556.0
        },
        {
          "cat": "Arena y accesorios",
          "orders": 2842,
          "net": 118271039.0
        },
        {
          "cat": "Farmacia",
          "orders": 2737,
          "net": 60687344.0
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 2243,
          "net": 63419616.0
        },
        {
          "cat": "Juguetes",
          "orders": 1370,
          "net": 12376183.0
        },
        {
          "cat": "Sin categoría",
          "orders": 381,
          "net": 14737056.0
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 17620,
          "pct": 63.3,
          "pos_avg": 1.3,
          "anc_pct": 93.3,
          "add_pct": 18.1,
          "net": 1200207284.0
        },
        {
          "sc": "Snack y premios",
          "n": 4300,
          "pct": 15.5,
          "pos_avg": 3.0,
          "anc_pct": 50.1,
          "add_pct": 74.0,
          "net": 115908049.0
        },
        {
          "sc": "Antiparasitarios",
          "n": 2915,
          "pct": 10.5,
          "pos_avg": 1.7,
          "anc_pct": 72.3,
          "add_pct": 40.8,
          "net": 104925042.0
        },
        {
          "sc": "Alimento húmedo",
          "n": 2581,
          "pct": 9.3,
          "pos_avg": 3.1,
          "anc_pct": 46.9,
          "add_pct": 77.7,
          "net": 69913162.0
        },
        {
          "sc": "Arena para gato",
          "n": 2564,
          "pct": 9.2,
          "pos_avg": 1.6,
          "anc_pct": 66.6,
          "add_pct": 35.6,
          "net": 115014017.0
        },
        {
          "sc": "Alimento medicado",
          "n": 1258,
          "pct": 4.5,
          "pos_avg": 1.3,
          "anc_pct": 85.7,
          "add_pct": 17.8,
          "net": 87206354.0
        },
        {
          "sc": "Necesidades especiales",
          "n": 751,
          "pct": 2.7,
          "pos_avg": 1.3,
          "anc_pct": 79.4,
          "add_pct": 21.8,
          "net": 43750582.0
        },
        {
          "sc": "Farmacia y salud",
          "n": 589,
          "pct": 2.1,
          "pos_avg": 2.1,
          "anc_pct": 58.2,
          "add_pct": 48.8,
          "net": 11513712.0
        },
        {
          "sc": "Camas y mantas",
          "n": 584,
          "pct": 2.1,
          "pos_avg": 1.8,
          "anc_pct": 74.7,
          "add_pct": 42.9,
          "net": 41864906.0
        },
        {
          "sc": "Peluquería e higiene",
          "n": 528,
          "pct": 1.9,
          "pos_avg": 2.9,
          "anc_pct": 39.0,
          "add_pct": 70.9,
          "net": 8533501.0
        },
        {
          "sc": "Collares, arneses y correas",
          "n": 291,
          "pct": 1.0,
          "pos_avg": 2.3,
          "anc_pct": 61.2,
          "add_pct": 58.8,
          "net": 7583304.0
        },
        {
          "sc": "Sin subcategoría",
          "n": 289,
          "pct": 1.0,
          "pos_avg": 1.8,
          "anc_pct": 57.8,
          "add_pct": 42.4,
          "net": 12866746.0
        },
        {
          "sc": "Mordedores y flexibles",
          "n": 268,
          "pct": 1.0,
          "pos_avg": 2.9,
          "anc_pct": 37.3,
          "add_pct": 77.2,
          "net": 3940984.0
        },
        {
          "sc": "Sabanillas y pañales",
          "n": 235,
          "pct": 0.8,
          "pos_avg": 2.0,
          "anc_pct": 59.6,
          "add_pct": 44.7,
          "net": 9993662.0
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Snack y premios",
        "Antiparasitarios",
        "Alimento húmedo",
        "Arena para gato",
        "Alimento medicado"
      ],
      "cooc_matrix": [
        [
          null,
          9.4,
          3.9,
          5.7,
          5.3,
          0.9
        ],
        [
          38.3,
          null,
          8.4,
          16.9,
          7.8,
          2.4
        ],
        [
          23.8,
          12.5,
          null,
          6.6,
          4.4,
          1.6
        ],
        [
          38.8,
          28.1,
          7.4,
          null,
          10.7,
          4.1
        ],
        [
          36.5,
          13.1,
          5.0,
          10.8,
          null,
          2.8
        ],
        [
          13.2,
          8.1,
          3.7,
          8.4,
          5.6,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 16436,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 1231,
              "pct": 7.5
            },
            {
              "sc": "Alimento húmedo",
              "n": 739,
              "pct": 4.5
            },
            {
              "sc": "Arena para gato",
              "n": 596,
              "pct": 3.6
            },
            {
              "sc": "Antiparasitarios",
              "n": 466,
              "pct": 2.8
            },
            {
              "sc": "Peluquería e higiene",
              "n": 121,
              "pct": 0.7
            },
            {
              "sc": "Farmacia y salud",
              "n": 110,
              "pct": 0.7
            }
          ]
        },
        {
          "anchor": "Snack y premios",
          "n": 2156,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 281,
              "pct": 13.0
            },
            {
              "sc": "Alimento húmedo",
              "n": 229,
              "pct": 10.6
            },
            {
              "sc": "Antiparasitarios",
              "n": 85,
              "pct": 3.9
            },
            {
              "sc": "Arena para gato",
              "n": 79,
              "pct": 3.7
            },
            {
              "sc": "Peluquería e higiene",
              "n": 42,
              "pct": 1.9
            },
            {
              "sc": "Mordedores y flexibles",
              "n": 32,
              "pct": 1.5
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 2109,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 165,
              "pct": 7.8
            },
            {
              "sc": "Snack y premios",
              "n": 143,
              "pct": 6.8
            },
            {
              "sc": "Alimento húmedo",
              "n": 68,
              "pct": 3.2
            },
            {
              "sc": "Arena para gato",
              "n": 32,
              "pct": 1.5
            },
            {
              "sc": "Peluquería e higiene",
              "n": 30,
              "pct": 1.4
            },
            {
              "sc": "Farmacia y salud",
              "n": 27,
              "pct": 1.3
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 1707,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 269,
              "pct": 15.8
            },
            {
              "sc": "Snack y premios",
              "n": 137,
              "pct": 8.0
            },
            {
              "sc": "Alimento húmedo",
              "n": 116,
              "pct": 6.8
            },
            {
              "sc": "Antiparasitarios",
              "n": 49,
              "pct": 2.9
            },
            {
              "sc": "Peluquería e higiene",
              "n": 20,
              "pct": 1.2
            },
            {
              "sc": "Juguetes",
              "n": 19,
              "pct": 1.1
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 1210,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 225,
              "pct": 18.6
            },
            {
              "sc": "Alimento seco",
              "n": 145,
              "pct": 12.0
            },
            {
              "sc": "Arena para gato",
              "n": 55,
              "pct": 4.5
            },
            {
              "sc": "Antiparasitarios",
              "n": 51,
              "pct": 4.2
            },
            {
              "sc": "Alimento medicado",
              "n": 27,
              "pct": 2.2
            },
            {
              "sc": "Sin subcategoría",
              "n": 24,
              "pct": 2.0
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 1078,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 70,
              "pct": 6.5
            },
            {
              "sc": "Snack y premios",
              "n": 61,
              "pct": 5.7
            },
            {
              "sc": "Alimento húmedo",
              "n": 61,
              "pct": 5.7
            },
            {
              "sc": "Arena para gato",
              "n": 34,
              "pct": 3.2
            },
            {
              "sc": "Antiparasitarios",
              "n": 27,
              "pct": 2.5
            },
            {
              "sc": "Peluquería e higiene",
              "n": 13,
              "pct": 1.2
            }
          ]
        }
      ],
      "hours": [
        1003,
        406,
        174,
        69,
        68,
        63,
        166,
        398,
        770,
        1339,
        1601,
        1859,
        1867,
        1763,
        1710,
        1604,
        1601,
        1567,
        1530,
        1632,
        1596,
        1843,
        1877,
        1314
      ],
      "shipping": [
        {
          "method": "Click & Collect",
          "n": 13826,
          "pct": 49.7
        },
        {
          "method": "Santiago",
          "n": 5798,
          "pct": 20.8
        },
        {
          "method": "Programado",
          "n": 5618,
          "pct": 20.2
        },
        {
          "method": "Express",
          "n": 1283,
          "pct": 4.6
        },
        {
          "method": "Valparaiso",
          "n": 417,
          "pct": 1.5
        },
        {
          "method": "Bio_Bio",
          "n": 348,
          "pct": 1.3
        },
        {
          "method": "Santiago",
          "n": 289,
          "pct": 1.0
        },
        {
          "method": "Antofagasta",
          "n": 241,
          "pct": 0.9
        }
      ],
      "promos": [
        {
          "id": "25BRAVER-CYB",
          "usos": 4082,
          "disc_net": 68074937.0
        },
        {
          "id": "PBOMBA-CY",
          "usos": 3782,
          "disc_net": 58954911.0
        },
        {
          "id": "30PRODSEL-CYB",
          "usos": 2755,
          "disc_net": 28508052.0
        },
        {
          "id": "4x3HUMSNACK-CYB",
          "usos": 2150,
          "disc_net": 11241675.0
        },
        {
          "id": "2X1CHURU-CYB",
          "usos": 1752,
          "disc_net": 33773336.0
        },
        {
          "id": "20PRODSEL-CYB",
          "usos": 1242,
          "disc_net": 12500497.0
        },
        {
          "id": "PBOMBA",
          "usos": 1177,
          "disc_net": 22438905.0
        },
        {
          "id": "2x1ARENAS-CYB",
          "usos": 1111,
          "disc_net": 31668251.0
        },
        {
          "id": "BOMBAS-ADIC",
          "usos": 928,
          "disc_net": 16202468.0
        },
        {
          "id": "25PRODSEL-CYB",
          "usos": 766,
          "disc_net": 4033870.0
        }
      ],
      "coupons": [
        {
          "code": "30ENTODO",
          "usos": 1075,
          "disc": 75114817.0,
          "pct": 29.8
        },
        {
          "code": "25ENTODO",
          "usos": 246,
          "disc": 14262155.0,
          "pct": 24.9
        },
        {
          "code": "PRIMERA10",
          "usos": 163,
          "disc": 759310.0,
          "pct": 10.0
        },
        {
          "code": "533187",
          "usos": 146,
          "disc": 1753748.0,
          "pct": 20.0
        },
        {
          "code": "548742",
          "usos": 105,
          "disc": 1409252.0,
          "pct": 20.0
        },
        {
          "code": "522468",
          "usos": 70,
          "disc": 1062524.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 58,
          "disc": 375583.0,
          "pct": 15.0
        },
        {
          "code": "20ENTODO",
          "usos": 40,
          "disc": 1171374.0,
          "pct": 20.0
        },
        {
          "code": "15ENTODO",
          "usos": 27,
          "disc": 469018.0,
          "pct": 15.0
        },
        {
          "code": "512269",
          "usos": 22,
          "disc": 299678.0,
          "pct": 20.0
        }
      ],
      "products": [
        {
          "id": "1066",
          "name": "Fit Formula Gato Adulto alimento para gato",
          "orders": 1290,
          "qty": 1786.0,
          "net": 48155304.0,
          "pos1_pct": 86,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4985",
          "name": "Bravery Chicken Adult Cat alimento para gato",
          "orders": 1213,
          "qty": 1465.0,
          "net": 71390917.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4136",
          "name": "Bravery salmón adult alimento para perro",
          "orders": 1143,
          "qty": 1448.0,
          "net": 92464957.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4132",
          "name": "Bravery Chicken Adult alimento para perro",
          "orders": 1047,
          "qty": 1402.0,
          "net": 85993104.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8656",
          "name": "Bravery Lamb Adult Large/Medium Breeds alimento ",
          "orders": 798,
          "qty": 995.0,
          "net": 63537726.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7204",
          "name": "Salvaje adulto con pollo 15 KG alimento para per",
          "orders": 691,
          "qty": 1051.0,
          "net": 35318857.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4987",
          "name": "Bravery Salmón Adult Cat Sterilized alimento par",
          "orders": 690,
          "qty": 810.0,
          "net": 43556133.0,
          "pos1_pct": 84,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5",
          "name": "Royal Canin adulto Mini Adult alimento para perr",
          "orders": 600,
          "qty": 742.0,
          "net": 40522958.0,
          "pos1_pct": 95,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14816",
          "name": "Nexgard combo l cat 2,5 - 7,5 kg 0.9 ml sol top",
          "orders": 588,
          "qty": 1237.0,
          "net": 17661020.0,
          "pos1_pct": 71,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "4986",
          "name": "Bravery Salmón Adult Cat alimento para gato",
          "orders": 583,
          "qty": 698.0,
          "net": 36360308.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7392",
          "name": "Bravery Cat Chicken Adult Sterilized alimento pa",
          "orders": 572,
          "qty": 662.0,
          "net": 33372729.0,
          "pos1_pct": 85,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10077",
          "name": "Arena para gatos Aglomerante",
          "orders": 570,
          "qty": 1232.0,
          "net": 33119130.0,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "10202",
          "name": "Catxtreme Salmon Esterilizado alimento para gato",
          "orders": 561,
          "qty": 716.0,
          "net": 21052676.0,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6552",
          "name": "Dogxtreme Adult Salmón y arroz alimento para per",
          "orders": 537,
          "qty": 720.0,
          "net": 26010720.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7303",
          "name": "Dogxtreme snack semihúmedo salmón 200 GR",
          "orders": 452,
          "qty": 1076.0,
          "net": 3607824.0,
          "pos1_pct": 33,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "917",
          "name": "Fit Formula Adulto alimento para perro",
          "orders": 442,
          "qty": 640.0,
          "net": 25271810.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14069",
          "name": "Bravecto Plus de 250 MG para gatos desde 2.8 a 6",
          "orders": 441,
          "qty": 786.0,
          "net": 21129474.0,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "7205",
          "name": "Salvaje adulto con salmón alimento para perros 1",
          "orders": 436,
          "qty": 646.0,
          "net": 21708830.0,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "15600",
          "name": "Arena con carbón activo",
          "orders": 362,
          "qty": 773.0,
          "net": 22079199.0,
          "pos1_pct": 73,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4134",
          "name": "Bravery Pork Adult alimento para perro",
          "orders": 330,
          "qty": 400.0,
          "net": 25542803.0,
          "pos1_pct": 77,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "50",
          "name": "Royal Canin adulto Indoor alimento para gato",
          "orders": 330,
          "qty": 372.0,
          "net": 22816993.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16441",
          "name": "Dogxtreme Adult pollo y arroz alimento seco para",
          "orders": 311,
          "qty": 440.0,
          "net": 16634985.0,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14882",
          "name": "Churu para gatos variedad de sabores pollo 60 tu",
          "orders": 290,
          "qty": 591.0,
          "net": 18370644.0,
          "pos1_pct": 72,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "7299",
          "name": "Arena para gatos Aglomerante",
          "orders": 279,
          "qty": 507.0,
          "net": 9368853.0,
          "pos1_pct": 65,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "5965",
          "name": "Churu de atún con salmón 56 GR",
          "orders": 276,
          "qty": 757.0,
          "net": 2029279.0,
          "pos1_pct": 33,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "65",
          "name": "Royal Canin Alimento Seco Perro Adulto Hypoaller",
          "orders": 260,
          "qty": 317.0,
          "net": 27967959.0,
          "pos1_pct": 96,
          "mascota": "Perro",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "11598",
          "name": "True Origins Wild Cat Adult Country Water alimen",
          "orders": 257,
          "qty": 324.0,
          "net": 13066223.0,
          "pos1_pct": 88,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11572",
          "name": "True Origins Pure alimento seco para gatos ester",
          "orders": 248,
          "qty": 287.0,
          "net": 11574107.0,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5806",
          "name": "Bravery Light Iberian Pork Adult Large/Medium",
          "orders": 221,
          "qty": 278.0,
          "net": 17752248.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "11584",
          "name": "True Origins Pure alimento seco libre de granos ",
          "orders": 217,
          "qty": 264.0,
          "net": 13308760.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "15598",
          "name": "Arena aglomerante bentonita y lavanda",
          "orders": 214,
          "qty": 443.0,
          "net": 11908908.0,
          "pos1_pct": 71,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4130",
          "name": "Bravery Chicken Puppy alimento para perro",
          "orders": 198,
          "qty": 232.0,
          "net": 14814824.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11588",
          "name": "True Origins Pure alimento seco libre de granos ",
          "orders": 191,
          "qty": 242.0,
          "net": 13216390.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8949",
          "name": "Churu variedades atún snack para gatos 50p 700 G",
          "orders": 190,
          "qty": 354.0,
          "net": 10408784.0,
          "pos1_pct": 63,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "13365",
          "name": "Oreja de Cerdo Rahue",
          "orders": 183,
          "qty": 508.0,
          "net": 1703315.0,
          "pos1_pct": 32,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "7302",
          "name": "Dogxtreme snack semihúmedo pollo 200 GR",
          "orders": 180,
          "qty": 375.0,
          "net": 1257374.0,
          "pos1_pct": 25,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "4276",
          "name": "Churu de atún 56 GR",
          "orders": 160,
          "qty": 418.0,
          "net": 1120527.0,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "1689",
          "name": "Fit formula senior razas pequeñas 10 KG alimento",
          "orders": 159,
          "qty": 185.0,
          "net": 4702685.0,
          "pos1_pct": 72,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14667",
          "name": "Salvaje cat adult esterilizado",
          "orders": 158,
          "qty": 204.0,
          "net": 7198304.0,
          "pos1_pct": 75,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8948",
          "name": "Churu Variedades Atún snack para gatos 20P",
          "orders": 155,
          "qty": 351.0,
          "net": 4421410.0,
          "pos1_pct": 61,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "6565",
          "name": "Dogxtreme Senior Light pollo y arroz alimento pa",
          "orders": 155,
          "qty": 219.0,
          "net": 7911594.0,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "2054",
          "name": "Acana Heritage Free Run Poultry alimento para pe",
          "orders": 150,
          "qty": 205.0,
          "net": 14985703.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14332",
          "name": "Bravery herring senior cat",
          "orders": 148,
          "qty": 163.0,
          "net": 8764999.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14881",
          "name": "Churu para gatos variedad de sabores atún 60 tub",
          "orders": 147,
          "qty": 266.0,
          "net": 8268344.0,
          "pos1_pct": 66,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "198",
          "name": "Frontline p. gato 0.5 ML",
          "orders": 147,
          "qty": 397.0,
          "net": 2665579.0,
          "pos1_pct": 67,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "7389",
          "name": "Bravery Dog Salmon Puppy Large/Medium Breeds ali",
          "orders": 146,
          "qty": 181.0,
          "net": 12622788.0,
          "pos1_pct": 80,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "12712",
          "name": "Simparica trio 10.1 - 20 kg antiparasitario para",
          "orders": 146,
          "qty": 194.0,
          "net": 4726072.0,
          "pos1_pct": 58,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "12710",
          "name": "Simparica trio 5.1 - 10 kg antiparasitario para ",
          "orders": 144,
          "qty": 169.0,
          "net": 3833067.0,
          "pos1_pct": 59,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "13372",
          "name": "Ultra Odor Seal arena para gatos aglutinante y c",
          "orders": 141,
          "qty": 272.0,
          "net": 6626298.0,
          "pos1_pct": 54,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4127",
          "name": "Leonardo lata sabor conejo alimento húmedo para ",
          "orders": 140,
          "qty": 516.0,
          "net": 2163722.0,
          "pos1_pct": 18,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "1396",
          "name": "Fit formula senior 20 KG alimento para perro",
          "orders": 133,
          "qty": 175.0,
          "net": 7443869.0,
          "pos1_pct": 68,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13444",
          "name": "Churu variedades atún y pollo 50p para gato",
          "orders": 130,
          "qty": 220.0,
          "net": 6468738.0,
          "pos1_pct": 66,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "14877",
          "name": "Churu para gatos atún/cangrejo 56 GR",
          "orders": 129,
          "qty": 213.0,
          "net": 571001.0,
          "pos1_pct": 13,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "11570",
          "name": "True Origins Pure alimento seco libre de granos ",
          "orders": 129,
          "qty": 148.0,
          "net": 6217198.0,
          "pos1_pct": 78,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "9448",
          "name": "Leonardo quality selection ave lata",
          "orders": 129,
          "qty": 436.0,
          "net": 1828263.0,
          "pos1_pct": 34,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4123",
          "name": "Leonardo Adult Senior alimento para gato",
          "orders": 127,
          "qty": 148.0,
          "net": 9077728.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13307",
          "name": "Arena aglomerante natural de bentonita para gato",
          "orders": 126,
          "qty": 253.0,
          "net": 6801247.0,
          "pos1_pct": 68,
          "mascota": "Sin mascota",
          "subcat": "Sin subcategoría",
          "cat": "Sin categoría"
        },
        {
          "id": "14066",
          "name": "Churu para gato sabor pollo/salmón 56 GR",
          "orders": 125,
          "qty": 220.0,
          "net": 589759.0,
          "pos1_pct": 17,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "9449",
          "name": "Leonardo quality selection pato lata",
          "orders": 125,
          "qty": 413.0,
          "net": 1731815.0,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "5582",
          "name": "Desparasitante Nexgard Spectra 3comp para perros",
          "orders": 125,
          "qty": 155.0,
          "net": 5208775.0,
          "pos1_pct": 63,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "3136",
          "name": "Royal Canin Alimento Seco Gato Adulto Urinary S/",
          "orders": 124,
          "qty": 142.0,
          "net": 8709712.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "1065",
          "name": "Fit Formula Adulto Razas Pequeñas alimento para ",
          "orders": 118,
          "qty": 137.0,
          "net": 3252634.0,
          "pos1_pct": 73,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10254",
          "name": "Wellness core cat kitten 1.75 KG alimento para g",
          "orders": 116,
          "qty": 182.0,
          "net": 4127892.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4120",
          "name": "Leonardo Adult Light alimento para gato",
          "orders": 115,
          "qty": 142.0,
          "net": 8709715.0,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8163",
          "name": "Revolution Plus Gato 2.5-5.0Kg",
          "orders": 115,
          "qty": 206.0,
          "net": 3287348.0,
          "pos1_pct": 49,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "5643",
          "name": "Leonardo lata quality selection ternera alimento",
          "orders": 114,
          "qty": 300.0,
          "net": 1257981.0,
          "pos1_pct": 12,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "12401",
          "name": "Bravery herring adult large/medium breeds alimen",
          "orders": 113,
          "qty": 125.0,
          "net": 7982127.0,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7141",
          "name": "Rahue Cordero patagonico en cubos snack para per",
          "orders": 113,
          "qty": 254.0,
          "net": 744939.0,
          "pos1_pct": 22,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "14318",
          "name": "Revolution plus desparasitante tópico para gatos",
          "orders": 113,
          "qty": 187.0,
          "net": 2984146.0,
          "pos1_pct": 56,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "8258",
          "name": "Naturalistic carnemix sabor cordero con espinaca",
          "orders": 112,
          "qty": 260.0,
          "net": 740678.0,
          "pos1_pct": 11,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "5651",
          "name": "Leonardo lata quality selection pescado alimento",
          "orders": 111,
          "qty": 374.0,
          "net": 1568278.0,
          "pos1_pct": 18,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "16274",
          "name": "Catit go natural! Arena con olor a Vainilla 5.6 ",
          "orders": 111,
          "qty": 187.0,
          "net": 3455573.0,
          "pos1_pct": 70,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "12398",
          "name": "Bravery herring adult cat sterilized",
          "orders": 109,
          "qty": 121.0,
          "net": 6506533.0,
          "pos1_pct": 64,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4140",
          "name": "Bravery Chicken Mini Adult alimento para perro",
          "orders": 108,
          "qty": 137.0,
          "net": 6330770.0,
          "pos1_pct": 72,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7150",
          "name": "Rahue Bully stick snack para perros",
          "orders": 107,
          "qty": 491.0,
          "net": 1935130.0,
          "pos1_pct": 35,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "13364",
          "name": "Garra de Pollo Rahue 65 GR",
          "orders": 104,
          "qty": 225.0,
          "net": 622064.0,
          "pos1_pct": 10,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "13445",
          "name": "Churu variedades pollo 50p para gato",
          "orders": 103,
          "qty": 168.0,
          "net": 4939755.0,
          "pos1_pct": 50,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "14320",
          "name": "Alimento nomade perro adulto",
          "orders": 102,
          "qty": 152.0,
          "net": 5746633.0,
          "pos1_pct": 76,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16869",
          "name": "Royal Canin adulto Medium Adult alimento para pe",
          "orders": 102,
          "qty": 122.0,
          "net": 7688070.0,
          "pos1_pct": 84,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16787",
          "name": "Rahue Bully stick vacuno 15cm para perros",
          "orders": 101,
          "qty": 363.0,
          "net": 912082.0,
          "pos1_pct": 22,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "16514",
          "name": "Nt cremi box the whole recipes 30 sachet 360GR",
          "orders": 101,
          "qty": 169.0,
          "net": 1560748.0,
          "pos1_pct": 33,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "7203",
          "name": "Salvaje cachorro con pollo 15 KG alimento para p",
          "orders": 101,
          "qty": 146.0,
          "net": 4906330.0,
          "pos1_pct": 79,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "16275",
          "name": "Catit go natural! Arena con olor a Lavanda 5.6 K",
          "orders": 99,
          "qty": 148.0,
          "net": 2734892.0,
          "pos1_pct": 71,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "10245",
          "name": "Wellness core cat original alimento para gatos 4",
          "orders": 98,
          "qty": 119.0,
          "net": 4698972.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4114",
          "name": "Leonardo Adult Duck alimento para gato",
          "orders": 96,
          "qty": 107.0,
          "net": 6562953.0,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "12714",
          "name": "Simparica trio 20.1 - 40 kg antiparasitario para",
          "orders": 96,
          "qty": 115.0,
          "net": 4251105.0,
          "pos1_pct": 52,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "11903",
          "name": "Catxtreme alimento para gatos adultos esteriliza",
          "orders": 95,
          "qty": 130.0,
          "net": 3822423.0,
          "pos1_pct": 74,
          "mascota": "Gato",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "11915",
          "name": "Dogxtreme lata de carne con calabaza 400GR alime",
          "orders": 95,
          "qty": 347.0,
          "net": 959354.0,
          "pos1_pct": 26,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "14070",
          "name": "Bravecto Plus de 500 MG para gatos desde 6.25 a ",
          "orders": 94,
          "qty": 132.0,
          "net": 3992182.0,
          "pos1_pct": 53,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "6470",
          "name": "Taste Of The Wild Canyon River Gato alimento par",
          "orders": 94,
          "qty": 132.0,
          "net": 6099721.0,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7092",
          "name": "Mebermic antiparasitario interno de amplio espec",
          "orders": 93,
          "qty": 248.0,
          "net": 414735.0,
          "pos1_pct": 20,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "3955",
          "name": "Simparica antiparasitario oral masticable para p",
          "orders": 89,
          "qty": 114.0,
          "net": 2585617.0,
          "pos1_pct": 62,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "10225",
          "name": "Wanpy Soft Beef Jerky Slices",
          "orders": 89,
          "qty": 210.0,
          "net": 1057061.0,
          "pos1_pct": 25,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "15599",
          "name": "Arena con carbón activo",
          "orders": 87,
          "qty": 175.0,
          "net": 3527921.0,
          "pos1_pct": 71,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "556",
          "name": "Desparasitante Flovovermic",
          "orders": 85,
          "qty": 305.0,
          "net": 381881.0,
          "pos1_pct": 32,
          "mascota": "Sin mascota",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "10222",
          "name": "Wanpy Soft Lamb Jerky Slices",
          "orders": 85,
          "qty": 171.0,
          "net": 860753.0,
          "pos1_pct": 20,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "10979",
          "name": "Arena para gatos Sanicat clumping 12 KG",
          "orders": 84,
          "qty": 165.0,
          "net": 2078449.0,
          "pos1_pct": 50,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "11612",
          "name": "True Origins Wild Dog Adult Pacific alimento par",
          "orders": 84,
          "qty": 94.0,
          "net": 5923597.0,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14065",
          "name": "Churu para gato sabor pollo/carne 56 GR",
          "orders": 82,
          "qty": 142.0,
          "net": 380665.0,
          "pos1_pct": 12,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "10734",
          "name": "Orijen Small Breed alimento para perro",
          "orders": 82,
          "qty": 104.0,
          "net": 5767214.0,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 27820,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 9842,
          "pct": 35.4
        },
        {
          "pos": 3,
          "n": 4684,
          "pct": 16.8
        },
        {
          "pos": 4,
          "n": 2574,
          "pct": 9.3
        },
        {
          "pos": 5,
          "n": 1418,
          "pct": 5.1
        },
        {
          "pos": 6,
          "n": 797,
          "pct": 2.9
        },
        {
          "pos": 7,
          "n": 476,
          "pct": 1.7
        }
      ],
      "promos_all": [
        {
          "id": "25BRAVER-CYB",
          "usos": 4082,
          "disc_net": 68074937.0,
          "ppu": 16676.86
        },
        {
          "id": "PBOMBA-CY",
          "usos": 3782,
          "disc_net": 58954911.0,
          "ppu": 15588.29
        },
        {
          "id": "30PRODSEL-CYB",
          "usos": 2755,
          "disc_net": 28508052.0,
          "ppu": 10347.75
        },
        {
          "id": "4x3HUMSNACK-CYB",
          "usos": 2150,
          "disc_net": 11241675.0,
          "ppu": 5228.69
        },
        {
          "id": "2X1CHURU-CYB",
          "usos": 1752,
          "disc_net": 33773336.0,
          "ppu": 19277.02
        },
        {
          "id": "20PRODSEL-CYB",
          "usos": 1242,
          "disc_net": 12500497.0,
          "ppu": 10064.81
        },
        {
          "id": "PBOMBA",
          "usos": 1177,
          "disc_net": 22438905.0,
          "ppu": 19064.49
        },
        {
          "id": "2x1ARENAS-CYB",
          "usos": 1111,
          "disc_net": 31668251.0,
          "ppu": 28504.28
        },
        {
          "id": "BOMBAS-ADIC",
          "usos": 928,
          "disc_net": 16202468.0,
          "ppu": 17459.56
        },
        {
          "id": "25PRODSEL-CYB",
          "usos": 766,
          "disc_net": 4033870.0,
          "ppu": 5266.15
        },
        {
          "id": "25PRODSELEC-CYB",
          "usos": 694,
          "disc_net": 9384379.0,
          "ppu": 13522.16
        },
        {
          "id": "70LIQUI-CYB",
          "usos": 682,
          "disc_net": 3870917.0,
          "ppu": 5675.83
        },
        {
          "id": "29990SALV-PR-CYB",
          "usos": 624,
          "disc_net": 6983062.0,
          "ppu": 11190.8
        },
        {
          "id": "40PRODSEL-CYB",
          "usos": 617,
          "disc_net": 6946089.0,
          "ppu": 11257.84
        },
        {
          "id": "20BRAVERYSECO",
          "usos": 615,
          "disc_net": 7860558.0,
          "ppu": 12781.4
        },
        {
          "id": "2x1TOOTOY-CYB",
          "usos": 549,
          "disc_net": 3264825.0,
          "ppu": 5946.86
        },
        {
          "id": "20PRODSELEC",
          "usos": 516,
          "disc_net": 4948844.0,
          "ppu": 9590.78
        },
        {
          "id": "3x2HUMSNACK-CYB",
          "usos": 450,
          "disc_net": 2321992.0,
          "ppu": 5159.98
        },
        {
          "id": "2X1TKPET",
          "usos": 437,
          "disc_net": 11488390.0,
          "ppu": 26289.22
        },
        {
          "id": "2DA30ALIM-CYB",
          "usos": 387,
          "disc_net": 4566528.0,
          "ppu": 11799.81
        },
        {
          "id": "2x1CAMAS-CYB",
          "usos": 367,
          "disc_net": 14078369.0,
          "ppu": 38360.68
        },
        {
          "id": "24LAT-30DCTO-CYB",
          "usos": 350,
          "disc_net": 3652981.0,
          "ppu": 10437.09
        },
        {
          "id": "15PRODSELWEB-CYB",
          "usos": 337,
          "disc_net": 3119284.0,
          "ppu": 9256.04
        },
        {
          "id": "3x2SNACK-CYB",
          "usos": 306,
          "disc_net": 1501989.0,
          "ppu": 4908.46
        },
        {
          "id": "SUPERPRECIOS",
          "usos": 275,
          "disc_net": 818390.0,
          "ppu": 2975.96
        },
        {
          "id": "23990CATX-GT-CYB",
          "usos": 273,
          "disc_net": 3216846.0,
          "ppu": 11783.32
        },
        {
          "id": "2DA40ALIM-CYB",
          "usos": 260,
          "disc_net": 2455185.0,
          "ppu": 9443.02
        },
        {
          "id": "25BRAVERYSECO",
          "usos": 259,
          "disc_net": 4786939.0,
          "ppu": 18482.39
        },
        {
          "id": "2x1HIGIENE-CYB",
          "usos": 247,
          "disc_net": 2527085.0,
          "ppu": 10231.11
        },
        {
          "id": "25PRODSELWEB-CYB",
          "usos": 247,
          "disc_net": 2897642.0,
          "ppu": 11731.34
        },
        {
          "id": "4x3SNACKPERMA",
          "usos": 243,
          "disc_net": 1254269.0,
          "ppu": 5161.6
        },
        {
          "id": "SALVAJE-29990",
          "usos": 210,
          "disc_net": 2193222.0,
          "ppu": 10443.91
        },
        {
          "id": "25PRODSELEC-WEB",
          "usos": 207,
          "disc_net": 2864758.0,
          "ppu": 13839.41
        },
        {
          "id": "4x3HUM-SNACK",
          "usos": 192,
          "disc_net": 892230.0,
          "ppu": 4647.03
        },
        {
          "id": "15FOOD",
          "usos": 187,
          "disc_net": 1144270.0,
          "ppu": 6119.09
        },
        {
          "id": "30PRODSELWEB-CYB",
          "usos": 184,
          "disc_net": 1782591.0,
          "ppu": 9687.99
        },
        {
          "id": "15PRODSEL-CYB",
          "usos": 180,
          "disc_net": 1732260.0,
          "ppu": 9623.67
        },
        {
          "id": "5x4HUMED",
          "usos": 165,
          "disc_net": 705456.0,
          "ppu": 4275.49
        },
        {
          "id": "2DA50ARENAS-CYB",
          "usos": 156,
          "disc_net": 1776158.0,
          "ppu": 11385.63
        },
        {
          "id": "2x1CORREAS-CYB",
          "usos": 153,
          "disc_net": 1512124.0,
          "ppu": 9883.16
        },
        {
          "id": "20NONFOOD",
          "usos": 148,
          "disc_net": 716429.0,
          "ppu": 4840.74
        },
        {
          "id": "DOGXTR18KG-34990",
          "usos": 140,
          "disc_net": 1613421.0,
          "ppu": 11524.44
        },
        {
          "id": "24990CATX-GT-CYB",
          "usos": 121,
          "disc_net": 1226860.0,
          "ppu": 10139.34
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 112,
          "disc_net": 1213922.0,
          "ppu": 10838.59
        },
        {
          "id": "ROYAL-URINAR-CYB",
          "usos": 106,
          "disc_net": 1868928.0,
          "ppu": 17631.4
        },
        {
          "id": "20ALIMSELEC-CYB",
          "usos": 104,
          "disc_net": 904767.0,
          "ppu": 8699.68
        },
        {
          "id": "2x1PAÑALES-CYB",
          "usos": 100,
          "disc_net": 2104083.0,
          "ppu": 21040.83
        },
        {
          "id": "30NONFOOD",
          "usos": 95,
          "disc_net": 857904.0,
          "ppu": 9030.57
        },
        {
          "id": "25NONFOOD",
          "usos": 95,
          "disc_net": 685473.0,
          "ppu": 7215.51
        },
        {
          "id": "SALVTKPET39990",
          "usos": 94,
          "disc_net": 947520.0,
          "ppu": 10080.0
        },
        {
          "id": "2x1HUMCATX-CYB",
          "usos": 89,
          "disc_net": 404690.0,
          "ppu": 4547.08
        },
        {
          "id": "2x1PRODSELEC-CYB",
          "usos": 85,
          "disc_net": 485044.0,
          "ppu": 5706.4
        },
        {
          "id": "302DAASECOPERMA",
          "usos": 83,
          "disc_net": 561468.0,
          "ppu": 6764.67
        },
        {
          "id": "402DA-ARENAS",
          "usos": 74,
          "disc_net": 521716.0,
          "ppu": 7050.22
        },
        {
          "id": "3x2STAYHAPP-CYB",
          "usos": 67,
          "disc_net": 813713.0,
          "ppu": 12144.97
        },
        {
          "id": "TKPET20KG-19990",
          "usos": 65,
          "disc_net": 684037.0,
          "ppu": 10523.65
        },
        {
          "id": "20PRODSELWEB-CYB",
          "usos": 62,
          "disc_net": 666612.0,
          "ppu": 10751.81
        },
        {
          "id": "19990LEEBY-CYB",
          "usos": 58,
          "disc_net": 1789910.0,
          "ppu": 30860.52
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 58,
          "disc_net": 487754.0,
          "ppu": 8409.55
        },
        {
          "id": "DOGXT-34990",
          "usos": 57,
          "disc_net": 638639.0,
          "ppu": 11204.19
        },
        {
          "id": "2x1JUGUESELEC",
          "usos": 56,
          "disc_net": 409592.0,
          "ppu": 7314.14
        },
        {
          "id": "2x1CAMAS",
          "usos": 55,
          "disc_net": 2341519.0,
          "ppu": 42573.07
        },
        {
          "id": "2x1HUMNATH-CYB",
          "usos": 50,
          "disc_net": 240806.0,
          "ppu": 4816.12
        },
        {
          "id": "5M1PERMA",
          "usos": 49,
          "disc_net": 267218.0,
          "ppu": 5453.43
        },
        {
          "id": "3x2CHURU",
          "usos": 47,
          "disc_net": 414745.0,
          "ppu": 8824.36
        },
        {
          "id": "12LAT-20DCTO-CYB",
          "usos": 45,
          "disc_net": 153970.0,
          "ppu": 3421.56
        },
        {
          "id": "BRAVER54990",
          "usos": 45,
          "disc_net": 726048.0,
          "ppu": 16134.4
        },
        {
          "id": "70% LIQUIDACION",
          "usos": 44,
          "disc_net": 934808.0,
          "ppu": 21245.64
        },
        {
          "id": "15BOMBA",
          "usos": 43,
          "disc_net": 617846.0,
          "ppu": 14368.51
        },
        {
          "id": "3x2CREMI-CYB",
          "usos": 39,
          "disc_net": 115071.0,
          "ppu": 2950.54
        },
        {
          "id": "10M2PERMAN",
          "usos": 39,
          "disc_net": 192385.0,
          "ppu": 4932.95
        },
        {
          "id": "ACANA69590",
          "usos": 37,
          "disc_net": 599502.0,
          "ppu": 16202.76
        },
        {
          "id": "25FUNCIONARIO-MC",
          "usos": 35,
          "disc_net": 270967.0,
          "ppu": 7741.91
        },
        {
          "id": "DESAFIO-SNACKS",
          "usos": 33,
          "disc_net": 19214.0,
          "ppu": 582.24
        },
        {
          "id": "ROYAL-HEPATIC-CYB",
          "usos": 32,
          "disc_net": 822857.0,
          "ppu": 25714.28
        },
        {
          "id": "2DA50PLATO-CYB",
          "usos": 29,
          "disc_net": 99026.0,
          "ppu": 3414.69
        },
        {
          "id": "H40CASAS-CYB",
          "usos": 29,
          "disc_net": 443698.0,
          "ppu": 15299.93
        },
        {
          "id": "2x1BEWI-CYB",
          "usos": 28,
          "disc_net": 184503.0,
          "ppu": 6589.39
        },
        {
          "id": "CHAMPI17990",
          "usos": 28,
          "disc_net": 642855.0,
          "ppu": 22959.11
        },
        {
          "id": "RAHUE3490-CYB",
          "usos": 27,
          "disc_net": 114961.0,
          "ppu": 4257.81
        },
        {
          "id": "CHAMPI14990",
          "usos": 27,
          "disc_net": 408402.0,
          "ppu": 15126.0
        },
        {
          "id": "3x2PELUQUER-CYB",
          "usos": 25,
          "disc_net": 150191.0,
          "ppu": 6007.64
        },
        {
          "id": "202DABRAVERY",
          "usos": 25,
          "disc_net": 125329.0,
          "ppu": 5013.16
        },
        {
          "id": "NOMADE39990",
          "usos": 24,
          "disc_net": 113451.0,
          "ppu": 4727.12
        },
        {
          "id": "2DA40KONG-CYB",
          "usos": 23,
          "disc_net": 89001.0,
          "ppu": 3869.61
        },
        {
          "id": "20FOOD",
          "usos": 22,
          "disc_net": 18237.0,
          "ppu": 828.95
        },
        {
          "id": "2DA50PELUQ-CYB",
          "usos": 21,
          "disc_net": 129736.0,
          "ppu": 6177.9
        },
        {
          "id": "ROYAL-MAXADULT-CYB",
          "usos": 20,
          "disc_net": 415965.0,
          "ppu": 20798.25
        },
        {
          "id": "2DA40PRODSELE-WEB",
          "usos": 18,
          "disc_net": 69180.0,
          "ppu": 3843.33
        },
        {
          "id": "3X2JUGUETES",
          "usos": 16,
          "disc_net": 79697.0,
          "ppu": 4981.06
        },
        {
          "id": "3x2NICECARE-CYB",
          "usos": 15,
          "disc_net": 120039.0,
          "ppu": 8002.6
        },
        {
          "id": "3x2PAÑAL-CYB",
          "usos": 14,
          "disc_net": 285544.0,
          "ppu": 20396.0
        },
        {
          "id": "502DA-PAÑALES",
          "usos": 14,
          "disc_net": 123878.0,
          "ppu": 8848.43
        },
        {
          "id": "2x1AMERLITTER",
          "usos": 14,
          "disc_net": 386417.0,
          "ppu": 27601.21
        },
        {
          "id": "ACANA71990",
          "usos": 13,
          "disc_net": 242016.0,
          "ppu": 18616.62
        },
        {
          "id": "3x2RASCAD-CYB",
          "usos": 12,
          "disc_net": 89815.0,
          "ppu": 7484.58
        },
        {
          "id": "3x2SNACKS",
          "usos": 12,
          "disc_net": 114147.0,
          "ppu": 9512.25
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 12,
          "disc_net": 38284.0,
          "ppu": 3190.33
        },
        {
          "id": "30FUNCIONARIO-MP",
          "usos": 11,
          "disc_net": 105855.0,
          "ppu": 9623.18
        },
        {
          "id": "DESAFIO-ANTIPAR",
          "usos": 11,
          "disc_net": 54917.0,
          "ppu": 4992.45
        },
        {
          "id": "2x1HUMDOGZ-CYB",
          "usos": 11,
          "disc_net": 105645.0,
          "ppu": 9604.09
        },
        {
          "id": "ORIJEN95990",
          "usos": 11,
          "disc_net": 221848.0,
          "ppu": 20168.0
        },
        {
          "id": "2DA50COLLAR",
          "usos": 10,
          "disc_net": 36927.0,
          "ppu": 3692.7
        },
        {
          "id": "NOMADE28990",
          "usos": 10,
          "disc_net": 25210.0,
          "ppu": 2521.0
        },
        {
          "id": "2DA40SKOUT-CYB",
          "usos": 9,
          "disc_net": 67530.0,
          "ppu": 7503.33
        },
        {
          "id": "12RECOVERY",
          "usos": 9,
          "disc_net": 156125.0,
          "ppu": 17347.22
        },
        {
          "id": "3x2HIGIENE-CYB",
          "usos": 9,
          "disc_net": 30178.0,
          "ppu": 3353.11
        },
        {
          "id": "15FOOD-WEB",
          "usos": 9,
          "disc_net": 43227.0,
          "ppu": 4803.0
        },
        {
          "id": "10MMPP-ENTEL",
          "usos": 8,
          "disc_net": 15077.0,
          "ppu": 1884.62
        },
        {
          "id": "3x2JUGUET-CYB",
          "usos": 8,
          "disc_net": 111688.0,
          "ppu": 13961.0
        },
        {
          "id": "2DA30JUGUET-CYB",
          "usos": 8,
          "disc_net": 20399.0,
          "ppu": 2549.88
        },
        {
          "id": "2x1BEWI",
          "usos": 8,
          "disc_net": 113221.0,
          "ppu": 14152.62
        },
        {
          "id": "2DO50HIGIEN",
          "usos": 8,
          "disc_net": 24753.0,
          "ppu": 3094.12
        },
        {
          "id": "H-35COOLPETS",
          "usos": 8,
          "disc_net": 106722.0,
          "ppu": 13340.25
        },
        {
          "id": "3x2TRAPER",
          "usos": 8,
          "disc_net": 33544.0,
          "ppu": 4193.0
        },
        {
          "id": "3x2TOALL-CYB",
          "usos": 7,
          "disc_net": 45321.0,
          "ppu": 6474.43
        },
        {
          "id": "2x1THECATBAN-CYB",
          "usos": 7,
          "disc_net": 30698.0,
          "ppu": 4385.43
        },
        {
          "id": "12GASTROINT",
          "usos": 7,
          "disc_net": 148764.0,
          "ppu": 21252.0
        },
        {
          "id": "3x2PELUQUE",
          "usos": 7,
          "disc_net": 28513.0,
          "ppu": 4073.29
        },
        {
          "id": "3x2NICECARE",
          "usos": 7,
          "disc_net": 128504.0,
          "ppu": 18357.71
        },
        {
          "id": "20BOMBA",
          "usos": 7,
          "disc_net": 178140.0,
          "ppu": 25448.57
        },
        {
          "id": "3x2JUGUE-SELEC",
          "usos": 7,
          "disc_net": 25991.0,
          "ppu": 3713.0
        },
        {
          "id": "2DA50JUGUE-CYB",
          "usos": 6,
          "disc_net": 26444.0,
          "ppu": 4407.33
        },
        {
          "id": "DESAFIO-ALIMENT",
          "usos": 6,
          "disc_net": 30144.0,
          "ppu": 5024.0
        },
        {
          "id": "30LIQUI-CYB",
          "usos": 5,
          "disc_net": 17129.0,
          "ppu": 3425.8
        },
        {
          "id": "2DA30ARENAS-CYB",
          "usos": 5,
          "disc_net": 42841.0,
          "ppu": 8568.2
        },
        {
          "id": "20NONFOOD-WEB",
          "usos": 5,
          "disc_net": 19655.0,
          "ppu": 3931.0
        },
        {
          "id": "302DAZEEDOG",
          "usos": 5,
          "disc_net": 20912.0,
          "ppu": 4182.4
        },
        {
          "id": "402DANATURES",
          "usos": 5,
          "disc_net": 19479.0,
          "ppu": 3895.8
        },
        {
          "id": "2DA50ECODOG",
          "usos": 5,
          "disc_net": 28125.0,
          "ppu": 5625.0
        },
        {
          "id": "ACANA84990",
          "usos": 5,
          "disc_net": 75630.0,
          "ppu": 15126.0
        },
        {
          "id": "3x2FELIWAY-CYB",
          "usos": 4,
          "disc_net": 73915.0,
          "ppu": 18478.75
        },
        {
          "id": "2x1JUGUE-GT",
          "usos": 4,
          "disc_net": 22822.0,
          "ppu": 5705.5
        },
        {
          "id": "2DA40SKOUT",
          "usos": 4,
          "disc_net": 27548.0,
          "ppu": 6887.0
        },
        {
          "id": "19990LEEBY",
          "usos": 4,
          "disc_net": 50420.0,
          "ppu": 12605.0
        },
        {
          "id": "3x2TKPET",
          "usos": 4,
          "disc_net": 43656.0,
          "ppu": 10914.0
        },
        {
          "id": "3x2RASCAD",
          "usos": 3,
          "disc_net": 15941.0,
          "ppu": 5313.67
        },
        {
          "id": "50% LIQUIDACION",
          "usos": 3,
          "disc_net": 54609.0,
          "ppu": 18203.0
        },
        {
          "id": "10NONFOOD",
          "usos": 3,
          "disc_net": 4788.0,
          "ppu": 1596.0
        },
        {
          "id": "3LATA-REGDOGX",
          "usos": 3,
          "disc_net": 24882.0,
          "ppu": 8294.0
        },
        {
          "id": "10PRODSELEC-WEB",
          "usos": 3,
          "disc_net": 12686.0,
          "ppu": 4228.67
        },
        {
          "id": "29990LEEBY-CYB",
          "usos": 2,
          "disc_net": 33614.0,
          "ppu": 16807.0
        },
        {
          "id": "2DA30PEPOLLI-CYB",
          "usos": 2,
          "disc_net": 18902.0,
          "ppu": 9451.0
        },
        {
          "id": "3x2EZYDOG-CYB",
          "usos": 2,
          "disc_net": 38639.0,
          "ppu": 19319.5
        },
        {
          "id": "MONGE59990",
          "usos": 2,
          "disc_net": 25210.0,
          "ppu": 12605.0
        },
        {
          "id": "LIQUI-TRUE",
          "usos": 2,
          "disc_net": 82294.0,
          "ppu": 41147.0
        },
        {
          "id": "402DAJUGUE",
          "usos": 2,
          "disc_net": 8397.0,
          "ppu": 4198.5
        },
        {
          "id": "402DAMYZOO",
          "usos": 2,
          "disc_net": 7052.0,
          "ppu": 3526.0
        },
        {
          "id": "DOGX39990",
          "usos": 2,
          "disc_net": 5042.0,
          "ppu": 2521.0
        },
        {
          "id": "NATH-49990",
          "usos": 2,
          "disc_net": 8404.0,
          "ppu": 4202.0
        },
        {
          "id": "DESAFIO-COLLARES",
          "usos": 1,
          "disc_net": 5039.0,
          "ppu": 5039.0
        },
        {
          "id": "MONGE13990",
          "usos": 1,
          "disc_net": 5042.0,
          "ppu": 5042.0
        },
        {
          "id": "2DA30MASCAN-CYB",
          "usos": 1,
          "disc_net": 2518.0,
          "ppu": 2518.0
        },
        {
          "id": "NOMADE24990",
          "usos": 1,
          "disc_net": 1681.0,
          "ppu": 1681.0
        },
        {
          "id": "2DA40EZYDOG",
          "usos": 1,
          "disc_net": 23526.0,
          "ppu": 23526.0
        },
        {
          "id": "5x4SNACKS",
          "usos": 1,
          "disc_net": 2092.0,
          "ppu": 2092.0
        },
        {
          "id": "3x2HIGIENE",
          "usos": 1,
          "disc_net": 2513.0,
          "ppu": 2513.0
        },
        {
          "id": "2x29990TRUE",
          "usos": 1,
          "disc_net": 11756.0,
          "ppu": 11756.0
        },
        {
          "id": "30FOOD",
          "usos": 1,
          "disc_net": 17897.0,
          "ppu": 17897.0
        }
      ],
      "coupons_all": [
        {
          "code": "30ENTODO",
          "usos": 1075,
          "disc": 75114817.0,
          "pct": 29.8
        },
        {
          "code": "25ENTODO",
          "usos": 246,
          "disc": 14262155.0,
          "pct": 24.9
        },
        {
          "code": "PRIMERA10",
          "usos": 163,
          "disc": 759310.0,
          "pct": 10.0
        },
        {
          "code": "533187",
          "usos": 146,
          "disc": 1753748.0,
          "pct": 20.0
        },
        {
          "code": "548742",
          "usos": 105,
          "disc": 1409252.0,
          "pct": 20.0
        },
        {
          "code": "522468",
          "usos": 70,
          "disc": 1062524.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 58,
          "disc": 375583.0,
          "pct": 15.0
        },
        {
          "code": "20ENTODO",
          "usos": 40,
          "disc": 1171374.0,
          "pct": 20.0
        },
        {
          "code": "15ENTODO",
          "usos": 27,
          "disc": 469018.0,
          "pct": 15.0
        },
        {
          "code": "512269",
          "usos": 22,
          "disc": 299678.0,
          "pct": 20.0
        },
        {
          "code": "VUELVE10",
          "usos": 5,
          "disc": 31986.0,
          "pct": 10.0
        },
        {
          "code": "AJUSTECSC",
          "usos": 3,
          "disc": 37986.0,
          "pct": 28.1
        },
        {
          "code": "10ENTODO",
          "usos": 2,
          "disc": 9797.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-EU71-OKAT",
          "usos": 1,
          "disc": 1499.0,
          "pct": 5.0
        },
        {
          "code": "WCUM-X25E-1SPF",
          "usos": 1,
          "disc": 4799.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-IKDL-4BXH",
          "usos": 1,
          "disc": 11398.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-1RS2-CCXX",
          "usos": 1,
          "disc": 8526.0,
          "pct": 7.6
        },
        {
          "code": "WCUM-53VL-FZ1P",
          "usos": 1,
          "disc": 6347.0,
          "pct": 7.1
        },
        {
          "code": "WCUM-X8C2-L3TG",
          "usos": 1,
          "disc": 5199.0,
          "pct": 7.7
        },
        {
          "code": "WCUM-LW07-8AHJ",
          "usos": 1,
          "disc": 7405.0,
          "pct": 5.8
        },
        {
          "code": "SZ10-NXCBTJWY",
          "usos": 1,
          "disc": 10000.0,
          "pct": 62.5
        },
        {
          "code": "CENW10DORT3L",
          "usos": 1,
          "disc": 10000.0,
          "pct": 58.9
        },
        {
          "code": "WCUM-8W6W-O68T",
          "usos": 1,
          "disc": 10783.0,
          "pct": 7.1
        },
        {
          "code": "WCUM-92RH-CHJ4",
          "usos": 1,
          "disc": 6498.0,
          "pct": 7.7
        },
        {
          "code": "WCUM-89SV-2GRN",
          "usos": 1,
          "disc": 4256.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-0M47-44TR",
          "usos": 1,
          "disc": 8566.0,
          "pct": 7.5
        },
        {
          "code": "ENTNDY2D4V",
          "usos": 1,
          "disc": 10796.0,
          "pct": 20.0
        },
        {
          "code": "ENTNJ1AX08",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-0P3O-48VN",
          "usos": 1,
          "disc": 1199.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-6XVK-1IKM",
          "usos": 1,
          "disc": 4098.0,
          "pct": 5.0
        },
        {
          "code": "SZ20-JINKIR3P",
          "usos": 1,
          "disc": 20000.0,
          "pct": 60.6
        },
        {
          "code": "WCUM-1I2T-NMR7",
          "usos": 1,
          "disc": 17098.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-40A7-PWEB",
          "usos": 1,
          "disc": 6428.0,
          "pct": 5.7
        },
        {
          "code": "WCUM-LZSW-EP6B",
          "usos": 1,
          "disc": 6158.0,
          "pct": 7.8
        },
        {
          "code": "WCUM-CK8C-41D9",
          "usos": 1,
          "disc": 5624.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-OR49-230H",
          "usos": 1,
          "disc": 7415.0,
          "pct": 7.9
        },
        {
          "code": "WCUM-PSH6-5W78",
          "usos": 1,
          "disc": 7398.0,
          "pct": 5.0
        },
        {
          "code": "WCUM-XPAO-7A8O",
          "usos": 1,
          "disc": 4759.0,
          "pct": 7.0
        },
        {
          "code": "WCUM-OCKT-E91E",
          "usos": 1,
          "disc": 5839.0,
          "pct": 8.0
        },
        {
          "code": "WCUM-7654-NPY2",
          "usos": 1,
          "disc": 1365.0,
          "pct": 8.3
        },
        {
          "code": "WCUM-2933-9V02",
          "usos": 1,
          "disc": 7898.0,
          "pct": 8.1
        },
        {
          "code": "SZ10-RT987VSR",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "WCUM-86YL-C491",
          "usos": 1,
          "disc": 7470.0,
          "pct": 7.1
        },
        {
          "code": "WCUM-ENHI-OP72",
          "usos": 1,
          "disc": 10497.0,
          "pct": 5.0
        },
        {
          "code": "WCUM-2K7V-F184",
          "usos": 1,
          "disc": 8748.0,
          "pct": 8.0
        },
        {
          "code": "WCUM-OGYR-H02G",
          "usos": 1,
          "disc": 5495.0,
          "pct": 7.3
        },
        {
          "code": "WCUM-72UH-BITU",
          "usos": 1,
          "disc": 5699.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-V2JD-MU21",
          "usos": 1,
          "disc": 4799.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-2UTX-LLWC",
          "usos": 1,
          "disc": 6898.0,
          "pct": 5.0
        },
        {
          "code": "WCUM-ZHP8-HW91",
          "usos": 1,
          "disc": 4499.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-ZXXI-BI9J",
          "usos": 1,
          "disc": 1856.0,
          "pct": 8.7
        },
        {
          "code": "WCUM-04T0-DPRF",
          "usos": 1,
          "disc": 2999.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-TOFG-F9UU",
          "usos": 1,
          "disc": 5496.0,
          "pct": 7.1
        },
        {
          "code": "WCUM-IS5I-4JU2",
          "usos": 1,
          "disc": 3499.0,
          "pct": 5.0
        },
        {
          "code": "ENTNVLDJ1M",
          "usos": 1,
          "disc": 4398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-PYF6-UX66",
          "usos": 1,
          "disc": 9517.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-TZQN-II30",
          "usos": 1,
          "disc": 3999.0,
          "pct": 6.9
        },
        {
          "code": "SZ10-JQPX4WYX",
          "usos": 1,
          "disc": 10000.0,
          "pct": 52.7
        },
        {
          "code": "WCUM-MW5J-WOHS",
          "usos": 1,
          "disc": 4999.0,
          "pct": 6.8
        },
        {
          "code": "ENTNY65KBZ",
          "usos": 1,
          "disc": 16798.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-9WK4A4MU",
          "usos": 1,
          "disc": 10000.0,
          "pct": 53.9
        },
        {
          "code": "ENTN6JH4K9",
          "usos": 1,
          "disc": 7198.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-2L8K1BNL",
          "usos": 1,
          "disc": 10000.0,
          "pct": 28.6
        },
        {
          "code": "WCUM-7BQC-Q9N6",
          "usos": 1,
          "disc": 4249.0,
          "pct": 8.5
        },
        {
          "code": "ENTNYD7ODA",
          "usos": 1,
          "disc": 9998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNZW8MWZ",
          "usos": 1,
          "disc": 21996.0,
          "pct": 20.0
        },
        {
          "code": "CENW108PAQAQ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 62.7
        },
        {
          "code": "SZ30-O6RDIZB7",
          "usos": 1,
          "disc": 30000.0,
          "pct": 39.5
        },
        {
          "code": "WCUM-JJBL-54TO",
          "usos": 1,
          "disc": 5699.0,
          "pct": 7.5
        },
        {
          "code": "ENTNJVWZG3",
          "usos": 1,
          "disc": 2998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-J9IBMA05",
          "usos": 1,
          "disc": 10000.0,
          "pct": 65.9
        },
        {
          "code": "WCUM-XG1X-37ZQ",
          "usos": 1,
          "disc": 4349.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-77T3-Q005",
          "usos": 1,
          "disc": 749.0,
          "pct": 7.5
        },
        {
          "code": "SZ30-JN1G5ONF",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.2
        },
        {
          "code": "SZ20-EHSCWK87",
          "usos": 1,
          "disc": 20000.0,
          "pct": 36.4
        },
        {
          "code": "SZ30-3YMMYSYS",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.6
        },
        {
          "code": "WCUM-EA0L-5W4T",
          "usos": 1,
          "disc": 5699.0,
          "pct": 7.5
        },
        {
          "code": "ENTNVVP3UC",
          "usos": 1,
          "disc": 18598.0,
          "pct": 20.0
        },
        {
          "code": "ENTN96L09L",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-TW1Y-LEQE",
          "usos": 1,
          "disc": 1139.0,
          "pct": 6.0
        },
        {
          "code": "WCUM-N40W-RE88",
          "usos": 1,
          "disc": 4349.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-3504-KR3G",
          "usos": 1,
          "disc": 10948.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-7KTQ-P0NF",
          "usos": 1,
          "disc": 2199.0,
          "pct": 10.0
        },
        {
          "code": "CENW1003XYGA",
          "usos": 1,
          "disc": 10000.0,
          "pct": 43.5
        },
        {
          "code": "WCUM-PH31-SOSL",
          "usos": 1,
          "disc": 5445.0,
          "pct": 7.6
        },
        {
          "code": "ENTN5HMOZR",
          "usos": 1,
          "disc": 14796.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-EFOS-UM76",
          "usos": 1,
          "disc": 674.0,
          "pct": 7.5
        },
        {
          "code": "ENTNTKT265",
          "usos": 1,
          "disc": 2198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-YO7S-UIAR",
          "usos": 1,
          "disc": 5699.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-AHQ4-7I0V",
          "usos": 1,
          "disc": 2239.0,
          "pct": 7.0
        },
        {
          "code": "ENTNKLR8GH",
          "usos": 1,
          "disc": 13996.0,
          "pct": 20.0
        },
        {
          "code": "ENTN6OAFBI",
          "usos": 1,
          "disc": 8796.0,
          "pct": 20.0
        },
        {
          "code": "ENTNRJPZK1",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-Z1EF-DXLG",
          "usos": 1,
          "disc": 8194.0,
          "pct": 6.9
        },
        {
          "code": "SZ30-VWZ82LEJ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 41.1
        },
        {
          "code": "WCUM-YQS7-L834",
          "usos": 1,
          "disc": 7877.0,
          "pct": 6.9
        },
        {
          "code": "WCUM-57D2-NHVB",
          "usos": 1,
          "disc": 3998.0,
          "pct": 5.7
        },
        {
          "code": "ENTN6IHZP8",
          "usos": 1,
          "disc": 2998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-OBF5-BYJS",
          "usos": 1,
          "disc": 9298.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-K98H-VVYD",
          "usos": 1,
          "disc": 3596.0,
          "pct": 6.7
        },
        {
          "code": "SZ15-EEB54TX3",
          "usos": 1,
          "disc": 15000.0,
          "pct": 31.9
        },
        {
          "code": "WCUM-QH1A-9I9S",
          "usos": 1,
          "disc": 8076.0,
          "pct": 7.7
        },
        {
          "code": "ENTN81A0F6",
          "usos": 1,
          "disc": 8192.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-0IBB-VK27",
          "usos": 1,
          "disc": 4349.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-IN8U-HJ0K",
          "usos": 1,
          "disc": 2399.0,
          "pct": 8.0
        },
        {
          "code": "WCUM-J7AS-T9YL",
          "usos": 1,
          "disc": 4799.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-7JRX-VUET",
          "usos": 1,
          "disc": 7797.0,
          "pct": 5.9
        },
        {
          "code": "WCUM-2SFV-WGHQ",
          "usos": 1,
          "disc": 9420.0,
          "pct": 8.3
        },
        {
          "code": "WCUM-HP9P-BDVL",
          "usos": 1,
          "disc": 4349.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-Z991-G396",
          "usos": 1,
          "disc": 5699.0,
          "pct": 7.5
        },
        {
          "code": "SZ15-8I9CY8YG",
          "usos": 1,
          "disc": 15000.0,
          "pct": 62.6
        },
        {
          "code": "WCUM-4OSY-VKXD",
          "usos": 1,
          "disc": 4698.0,
          "pct": 6.6
        },
        {
          "code": "WCUM-B2QW-ZBEE",
          "usos": 1,
          "disc": 10948.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-D6TM-2AGN",
          "usos": 1,
          "disc": 6238.0,
          "pct": 7.9
        },
        {
          "code": "SZ15-K41CKL2Y",
          "usos": 1,
          "disc": 15000.0,
          "pct": 55.6
        },
        {
          "code": "SZ30-XFE19WNL",
          "usos": 1,
          "disc": 30000.0,
          "pct": 51.7
        },
        {
          "code": "ENTN9960JA",
          "usos": 1,
          "disc": 1598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-77EX-6F80",
          "usos": 1,
          "disc": 9858.0,
          "pct": 8.5
        },
        {
          "code": "ENTN71FCXY",
          "usos": 1,
          "disc": 4998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-54CH-7YHQ",
          "usos": 1,
          "disc": 3499.0,
          "pct": 7.0
        },
        {
          "code": "ENTNOP9UDJ",
          "usos": 1,
          "disc": 10796.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-Q6O6-K3BN",
          "usos": 1,
          "disc": 5699.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-SQ1E-3TL9",
          "usos": 1,
          "disc": 8018.0,
          "pct": 6.6
        },
        {
          "code": "WCUM-VSMO-PLX0",
          "usos": 1,
          "disc": 3408.0,
          "pct": 7.3
        },
        {
          "code": "CENW10EG05PQ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 35.7
        },
        {
          "code": "WCUM-R2M9-N1MP",
          "usos": 1,
          "disc": 11897.0,
          "pct": 8.6
        },
        {
          "code": "WCUM-OYLE-W4GL",
          "usos": 1,
          "disc": 4698.0,
          "pct": 6.5
        },
        {
          "code": "SZ30-9C6P2C4Y",
          "usos": 1,
          "disc": 30000.0,
          "pct": 51.7
        },
        {
          "code": "ENTNU3EPAD",
          "usos": 1,
          "disc": 13196.0,
          "pct": 20.0
        },
        {
          "code": "ENTNQ3GR89",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-IVB0-NUJ2",
          "usos": 1,
          "disc": 11698.0,
          "pct": 8.9
        },
        {
          "code": "ENTNVUYRQ7",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNHDK31D",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-N5ZQ-0UFU",
          "usos": 1,
          "disc": 3732.0,
          "pct": 7.2
        },
        {
          "code": "WCUM-9DH3-8L5J",
          "usos": 1,
          "disc": 4349.0,
          "pct": 7.5
        },
        {
          "code": "WCUM-KKS2-P69N",
          "usos": 1,
          "disc": 4828.0,
          "pct": 7.0
        },
        {
          "code": "SZ15-5JOXBHW1",
          "usos": 1,
          "disc": 15000.0,
          "pct": 25.4
        },
        {
          "code": "ENTNE3XB38",
          "usos": 1,
          "disc": 6198.0,
          "pct": 20.0
        },
        {
          "code": "CENW15JCD16Y",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "ENTNKOXY97",
          "usos": 1,
          "disc": 18796.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-U0JR-VIXZ",
          "usos": 1,
          "disc": 2899.0,
          "pct": 10.0
        },
        {
          "code": "CENW103K21Q4",
          "usos": 1,
          "disc": 10000.0,
          "pct": 59.6
        },
        {
          "code": "ENTNF1IKOO",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-42QY-DIWT",
          "usos": 1,
          "disc": 11217.0,
          "pct": 7.3
        },
        {
          "code": "SZ10-F68HOXWL",
          "usos": 1,
          "disc": 10000.0,
          "pct": 49.6
        },
        {
          "code": "SZ15-3QSYPCCD",
          "usos": 1,
          "disc": 15000.0,
          "pct": 27.3
        },
        {
          "code": "ENTNL5CSAY",
          "usos": 1,
          "disc": 12798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-1A11-T6G2",
          "usos": 1,
          "disc": 4798.0,
          "pct": 6.9
        },
        {
          "code": "SZ10-OAYVSNQ3",
          "usos": 1,
          "disc": 10000.0,
          "pct": 29.4
        },
        {
          "code": "WCUM-2U1U-V5CS",
          "usos": 1,
          "disc": 5024.0,
          "pct": 7.5
        },
        {
          "code": "ENTNCHPB1F",
          "usos": 1,
          "disc": 16596.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-1MATCTNO",
          "usos": 1,
          "disc": 20000.0,
          "pct": 44.5
        },
        {
          "code": "ENTNJ2F3DE",
          "usos": 1,
          "disc": 4998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNLBQ1UN",
          "usos": 1,
          "disc": 11598.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-T6LYKOKP",
          "usos": 1,
          "disc": 30000.0,
          "pct": 57.7
        },
        {
          "code": "WCUM-OPAT-P2M1",
          "usos": 1,
          "disc": 4499.0,
          "pct": 7.5
        },
        {
          "code": "SZ10-CL7FDNQZ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 50.1
        },
        {
          "code": "SZ20-RUABXQ49",
          "usos": 1,
          "disc": 20000.0,
          "pct": 78.5
        },
        {
          "code": "SZ20-2S7TK18T",
          "usos": 1,
          "disc": 20000.0,
          "pct": 77.0
        },
        {
          "code": "ENTNUJJ8CK",
          "usos": 1,
          "disc": 4798.0,
          "pct": 20.0
        },
        {
          "code": "ENTN5OTD1N",
          "usos": 1,
          "disc": 7474.0,
          "pct": 20.0
        },
        {
          "code": "ENTNLQQ6GD",
          "usos": 1,
          "disc": 43130.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-4TC0U1VF",
          "usos": 1,
          "disc": 30000.0,
          "pct": 48.4
        },
        {
          "code": "ENTN1SWCC4",
          "usos": 1,
          "disc": 4798.0,
          "pct": 20.0
        },
        {
          "code": "ENTNE5H1W7",
          "usos": 1,
          "disc": 20998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN6LRULG",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-1ZC2-YD0S",
          "usos": 1,
          "disc": 7999.0,
          "pct": 7.6
        },
        {
          "code": "ENTNP8V3ZN",
          "usos": 1,
          "disc": 51194.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-9KY4LYA0",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "WCUM-Q7R9-1GZ2",
          "usos": 1,
          "disc": 6798.0,
          "pct": 6.1
        },
        {
          "code": "WCUM-OO7F-KA5K",
          "usos": 1,
          "disc": 8556.0,
          "pct": 7.6
        },
        {
          "code": "ENTN7V0FYQ",
          "usos": 1,
          "disc": 13398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNCDRZO2",
          "usos": 1,
          "disc": 2472.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-738M-MHNQ",
          "usos": 1,
          "disc": 4199.0,
          "pct": 5.0
        },
        {
          "code": "SZ30-2B77ELKC",
          "usos": 1,
          "disc": 30000.0,
          "pct": 68.2
        },
        {
          "code": "WCUM-NR05-0VMH",
          "usos": 1,
          "disc": 5499.0,
          "pct": 10.0
        },
        {
          "code": "CENW151KS87Z",
          "usos": 1,
          "disc": 15000.0,
          "pct": 18.5
        },
        {
          "code": "ENTNMUS3X2",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNOR6XA2",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-DLT2-9J2F",
          "usos": 1,
          "disc": 8975.0,
          "pct": 7.4
        },
        {
          "code": "WCUM-0T7V-6MOA",
          "usos": 1,
          "disc": 12288.0,
          "pct": 7.4
        },
        {
          "code": "SZ20-4M1I1A4Y",
          "usos": 1,
          "disc": 20000.0,
          "pct": 24.2
        },
        {
          "code": "CENW15BXY0GP",
          "usos": 1,
          "disc": 15000.0,
          "pct": 66.8
        },
        {
          "code": "WCUM-KLAQ-Z97H",
          "usos": 1,
          "disc": 3597.0,
          "pct": 8.8
        },
        {
          "code": "SZ15-PW61ECAI",
          "usos": 1,
          "disc": 15000.0,
          "pct": 30.0
        },
        {
          "code": "ENTNWA7EKV",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-T66Q-N64R",
          "usos": 1,
          "disc": 4799.0,
          "pct": 8.0
        },
        {
          "code": "ENTNUHZ6NV",
          "usos": 1,
          "disc": 17398.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-J2PAKJY2",
          "usos": 1,
          "disc": 20000.0,
          "pct": 78.5
        },
        {
          "code": "ENTNE9ZV6B",
          "usos": 1,
          "disc": 5796.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-MD4VLTNQ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 40.0
        },
        {
          "code": "WCUM-SK9M-88PL",
          "usos": 1,
          "disc": 2398.0,
          "pct": 6.7
        },
        {
          "code": "ENTNLRLPI2",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-09GH-MV4U",
          "usos": 1,
          "disc": 12158.0,
          "pct": 8.0
        },
        {
          "code": "ENTNG587B8",
          "usos": 1,
          "disc": 6942.0,
          "pct": 20.0
        },
        {
          "code": "ENTNZC5BTV",
          "usos": 1,
          "disc": 5908.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-6IG3-RZ6M",
          "usos": 1,
          "disc": 578.0,
          "pct": 10.0
        },
        {
          "code": "SZ10-YQ01B4OP",
          "usos": 1,
          "disc": 10000.0,
          "pct": 17.5
        },
        {
          "code": "ENTN3AHQ0F",
          "usos": 1,
          "disc": 19998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNURH5R4",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-X4GB-B664",
          "usos": 1,
          "disc": 3999.0,
          "pct": 6.2
        },
        {
          "code": "WEB-A170-I4KM",
          "usos": 1,
          "disc": 5000.0,
          "pct": 12.6
        },
        {
          "code": "ENTN9ZJTI2",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "ENTN7RPF2W",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNPX7CTM",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNSMCL4K",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNPJTBW3",
          "usos": 1,
          "disc": 3998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN1IOETJ",
          "usos": 1,
          "disc": 1198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-0J46-IN3Z",
          "usos": 1,
          "disc": 3036.0,
          "pct": 7.8
        },
        {
          "code": "SZ15-I2TL82TM",
          "usos": 1,
          "disc": 15000.0,
          "pct": 25.4
        },
        {
          "code": "ENTNLE2LLP",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-3U5FQVH0",
          "usos": 1,
          "disc": 30000.0,
          "pct": 68.2
        },
        {
          "code": "ENTN2SE0JS",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-RYT3-QJLW",
          "usos": 1,
          "disc": 1999.0,
          "pct": 10.0
        },
        {
          "code": "ENTNTW21L9",
          "usos": 1,
          "disc": 15806.0,
          "pct": 20.0
        },
        {
          "code": "ENTNS29PL6",
          "usos": 1,
          "disc": 6598.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-OUKW-4R5B",
          "usos": 1,
          "disc": 5119.0,
          "pct": 8.0
        },
        {
          "code": "WCUM-SKCI-SA86",
          "usos": 1,
          "disc": 8718.0,
          "pct": 8.2
        },
        {
          "code": "ENTNM6KKJZ",
          "usos": 1,
          "disc": 1258.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-C4WD3D0J",
          "usos": 1,
          "disc": 15000.0,
          "pct": 42.9
        },
        {
          "code": "SZ30-UE6MOPTN",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.4
        },
        {
          "code": "ENTN7RVUNT",
          "usos": 1,
          "disc": 17198.0,
          "pct": 20.0
        },
        {
          "code": "ENTN2FGC0A",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-I59B-E1EY",
          "usos": 1,
          "disc": 1599.0,
          "pct": 10.0
        },
        {
          "code": "ENTN8BY4JQ",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-PE84GIA9",
          "usos": 1,
          "disc": 15000.0,
          "pct": 18.5
        },
        {
          "code": "WEB-9ZFW-8FCX",
          "usos": 1,
          "disc": 5000.0,
          "pct": 2.8
        },
        {
          "code": "ENTN897KF4",
          "usos": 1,
          "disc": 2998.0,
          "pct": 20.0
        },
        {
          "code": "WEB-9FY4-5JA1",
          "usos": 1,
          "disc": 5000.0,
          "pct": 6.2
        },
        {
          "code": "ENTN6Z2WXI",
          "usos": 1,
          "disc": 11196.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-ANWNKHMV",
          "usos": 1,
          "disc": 10000.0,
          "pct": 17.2
        },
        {
          "code": "ENTN9XF2FA",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-0FVL-0CPU",
          "usos": 1,
          "disc": 11798.0,
          "pct": 10.0
        },
        {
          "code": "ENTNZQQ03G",
          "usos": 1,
          "disc": 15996.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-KZM4Z44B",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "WCUM-6RO3-LSCK",
          "usos": 1,
          "disc": 3806.0,
          "pct": 6.6
        },
        {
          "code": "ENTNGIOP4V",
          "usos": 1,
          "disc": 5998.0,
          "pct": 20.0
        },
        {
          "code": "WEB-XL5B-ZRMD",
          "usos": 1,
          "disc": 5000.0,
          "pct": 8.6
        },
        {
          "code": "SZ20-IA7GK30T",
          "usos": 1,
          "disc": 20000.0,
          "pct": 66.7
        },
        {
          "code": "ENTNF5ZFT2",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNS2LZZW",
          "usos": 1,
          "disc": 18512.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-3FJS-6AWP",
          "usos": 1,
          "disc": 15307.0,
          "pct": 8.9
        },
        {
          "code": "CENW15C02B6F",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "WCUM-OTMU-8Q5F",
          "usos": 1,
          "disc": 3297.0,
          "pct": 6.5
        },
        {
          "code": "WCUM-VYDZ-60QF",
          "usos": 1,
          "disc": 5799.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-KVSH-4JN7",
          "usos": 1,
          "disc": 5999.0,
          "pct": 10.0
        },
        {
          "code": "WEB-YAWI-GWCO",
          "usos": 1,
          "disc": 10000.0,
          "pct": 5.9
        },
        {
          "code": "ENTNUYU9X7",
          "usos": 1,
          "disc": 3190.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-R21A-L1TD",
          "usos": 1,
          "disc": 3199.0,
          "pct": 5.0
        },
        {
          "code": "ENTNY3845S",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNOW11PE",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-L2YRL81N",
          "usos": 1,
          "disc": 10000.0,
          "pct": 12.0
        },
        {
          "code": "WCUM-5LKN-IDMF",
          "usos": 1,
          "disc": 5398.0,
          "pct": 8.4
        },
        {
          "code": "ENTN57M8T5",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "WEB-DRJP-4FB4",
          "usos": 1,
          "disc": 5000.0,
          "pct": 14.3
        },
        {
          "code": "SZ30-A6V8Y6X3",
          "usos": 1,
          "disc": 30000.0,
          "pct": 85.2
        },
        {
          "code": "CENW15LNEVR4",
          "usos": 1,
          "disc": 15000.0,
          "pct": 34.9
        },
        {
          "code": "WCUM-83OQ-3PNR",
          "usos": 1,
          "disc": 2699.0,
          "pct": 10.0
        },
        {
          "code": "SZ30-7UD22AL4",
          "usos": 1,
          "disc": 30000.0,
          "pct": 39.5
        },
        {
          "code": "ENTNVG33ZP",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNZYT6I8",
          "usos": 1,
          "disc": 1598.0,
          "pct": 20.0
        },
        {
          "code": "ENTNKL4XKI",
          "usos": 1,
          "disc": 6788.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-VTB0-N005",
          "usos": 1,
          "disc": 3548.0,
          "pct": 7.8
        },
        {
          "code": "WCUM-SIT9-5DQT",
          "usos": 1,
          "disc": 8206.0,
          "pct": 8.6
        },
        {
          "code": "WCUM-7CK8-VTVP",
          "usos": 1,
          "disc": 3999.0,
          "pct": 6.2
        },
        {
          "code": "ENTNJ71KXP",
          "usos": 1,
          "disc": 3198.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-O5IKZJU8",
          "usos": 1,
          "disc": 30000.0,
          "pct": 28.9
        },
        {
          "code": "WCUM-5Q6I-VFAQ",
          "usos": 1,
          "disc": 3834.0,
          "pct": 7.7
        },
        {
          "code": "ENTN6N5BJZ",
          "usos": 1,
          "disc": 6396.0,
          "pct": 20.0
        },
        {
          "code": "ENTN8O0XCF",
          "usos": 1,
          "disc": 14998.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-Q73D-4A8T",
          "usos": 1,
          "disc": 8437.0,
          "pct": 9.0
        },
        {
          "code": "ENTNFR5DJ7",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "ENTN3FP95N",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "ENTNNRYAN3",
          "usos": 1,
          "disc": 15198.0,
          "pct": 20.0
        },
        {
          "code": "WEB-EPDD-W9GQ",
          "usos": 1,
          "disc": 5000.0,
          "pct": 7.0
        },
        {
          "code": "SZ-52SSCZS4",
          "usos": 1,
          "disc": 11399.0,
          "pct": 15.0
        },
        {
          "code": "ENTNI8UPD5",
          "usos": 1,
          "disc": 4198.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-23CBUIL4",
          "usos": 1,
          "disc": 20000.0,
          "pct": 36.4
        },
        {
          "code": "WCUM-85QH-CTX1",
          "usos": 1,
          "disc": 3999.0,
          "pct": 8.9
        },
        {
          "code": "SZ30-B6EJ4H2V",
          "usos": 1,
          "disc": 30000.0,
          "pct": 69.8
        },
        {
          "code": "WCUM-59IV-JTM7",
          "usos": 1,
          "disc": 11598.0,
          "pct": 9.7
        },
        {
          "code": "SZ30-AN8VB8YJ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 25.1
        },
        {
          "code": "CENW15OCC9M1",
          "usos": 1,
          "disc": 15000.0,
          "pct": 74.4
        },
        {
          "code": "WCUM-48HR-LQ3W",
          "usos": 1,
          "disc": 4399.0,
          "pct": 8.0
        },
        {
          "code": "CENW109EZ79L",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "WCUM-1O5D-EJ5W",
          "usos": 1,
          "disc": 6998.0,
          "pct": 8.4
        },
        {
          "code": "WCUM-HS6A-KYA9",
          "usos": 1,
          "disc": 3448.0,
          "pct": 8.2
        },
        {
          "code": "WCUM-2F3R-X54G",
          "usos": 1,
          "disc": 3425.0,
          "pct": 7.3
        },
        {
          "code": "ENTNZU5RUS",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-V841477G",
          "usos": 1,
          "disc": 10000.0,
          "pct": 35.7
        },
        {
          "code": "SZ-SOQXA7FB",
          "usos": 1,
          "disc": 36495.0,
          "pct": 25.0
        },
        {
          "code": "WCUM-7E37-HPQJ",
          "usos": 1,
          "disc": 2999.0,
          "pct": 10.0
        },
        {
          "code": "WCUM-2AOQ-RZXO",
          "usos": 1,
          "disc": 5398.0,
          "pct": 8.4
        },
        {
          "code": "ENTNDCDE3N",
          "usos": 1,
          "disc": 6396.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-BDRFI3D6",
          "usos": 1,
          "disc": 20000.0,
          "pct": 33.3
        },
        {
          "code": "ENTNX46UWV",
          "usos": 1,
          "disc": 1398.0,
          "pct": 20.0
        },
        {
          "code": "ENTNW3VXV8",
          "usos": 1,
          "disc": 17398.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-4UDL-CYYR",
          "usos": 1,
          "disc": 1999.0,
          "pct": 5.7
        },
        {
          "code": "WCUM-CC8F-JPOJ",
          "usos": 1,
          "disc": 5699.0,
          "pct": 7.5
        },
        {
          "code": "WEB-KW11-IQY5",
          "usos": 1,
          "disc": 5000.0,
          "pct": 11.8
        },
        {
          "code": "ENTN54A4VG",
          "usos": 1,
          "disc": 17196.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-BERSMOG6",
          "usos": 1,
          "disc": 30000.0,
          "pct": 42.9
        },
        {
          "code": "WCUM-8IMD-IE3W",
          "usos": 1,
          "disc": 3542.0,
          "pct": 8.7
        },
        {
          "code": "ENTNRPT27S",
          "usos": 1,
          "disc": 10998.0,
          "pct": 20.0
        },
        {
          "code": "ENTNYU5BRD",
          "usos": 1,
          "disc": 11798.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-USZ4-KR6I",
          "usos": 1,
          "disc": 4499.0,
          "pct": 7.5
        },
        {
          "code": "ENTN051H66",
          "usos": 1,
          "disc": 4794.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-DQ7O-ZV68",
          "usos": 1,
          "disc": 8099.0,
          "pct": 10.0
        },
        {
          "code": "ENTNK17M14",
          "usos": 1,
          "disc": 19794.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-U7ZS-RLFI",
          "usos": 1,
          "disc": 17395.0,
          "pct": 7.7
        },
        {
          "code": "WCUM-W53T-0A5K",
          "usos": 1,
          "disc": 8994.0,
          "pct": 8.1
        },
        {
          "code": "WCUM-IOFN-7O6R",
          "usos": 1,
          "disc": 5699.0,
          "pct": 10.0
        },
        {
          "code": "ENTND7QTV9",
          "usos": 1,
          "disc": 16198.0,
          "pct": 20.0
        },
        {
          "code": "WCUM-1GY5-EMZF",
          "usos": 1,
          "disc": 4396.0,
          "pct": 6.5
        },
        {
          "code": "WCUM-9VQK-33DA",
          "usos": 1,
          "disc": 3598.0,
          "pct": 8.6
        }
      ],
      "shipping_detail": [
        {
          "method": "Click & Collect",
          "n": 13826,
          "pct": 49.7,
          "net": 612778103.0,
          "ticket": 44320.71,
          "avg_items": 1.6
        },
        {
          "method": "Santiago",
          "n": 5798,
          "pct": 20.8,
          "net": 340837277.0,
          "ticket": 58785.32,
          "avg_items": 2.0
        },
        {
          "method": "Programado",
          "n": 5618,
          "pct": 20.2,
          "net": 309411687.0,
          "ticket": 55075.06,
          "avg_items": 2.0
        },
        {
          "method": "Express",
          "n": 1283,
          "pct": 4.6,
          "net": 54541325.0,
          "ticket": 42510.78,
          "avg_items": 1.8
        },
        {
          "method": "Valparaiso",
          "n": 417,
          "pct": 1.5,
          "net": 20034244.0,
          "ticket": 48043.75,
          "avg_items": 0.7
        },
        {
          "method": "Bio_Bio",
          "n": 348,
          "pct": 1.3,
          "net": 18130044.0,
          "ticket": 52097.83,
          "avg_items": 0.8
        },
        {
          "method": "Santiago",
          "n": 289,
          "pct": 1.0,
          "net": 14299874.0,
          "ticket": 49480.53,
          "avg_items": 0.6
        },
        {
          "method": "Antofagasta",
          "n": 241,
          "pct": 0.9,
          "net": 11734301.0,
          "ticket": 48690.05,
          "avg_items": 0.6
        }
      ],
      "daily": [
        {
          "date": "2026-06-01",
          "orders": 7115,
          "net": 378922350.0,
          "discount": 0.0,
          "ticket": 53256.83
        },
        {
          "date": "2026-06-02",
          "orders": 4456,
          "net": 236401037.0,
          "discount": 0.0,
          "ticket": 53052.3
        },
        {
          "date": "2026-06-03",
          "orders": 5175,
          "net": 267197098.0,
          "discount": 0.0,
          "ticket": 51632.29
        },
        {
          "date": "2026-06-04",
          "orders": 1334,
          "net": 52933763.0,
          "discount": 0.0,
          "ticket": 39680.48
        },
        {
          "date": "2026-06-05",
          "orders": 1200,
          "net": 49630787.0,
          "discount": 0.0,
          "ticket": 41358.99
        },
        {
          "date": "2026-06-06",
          "orders": 912,
          "net": 37515900.0,
          "discount": 0.0,
          "ticket": 41135.86
        },
        {
          "date": "2026-06-07",
          "orders": 1066,
          "net": 42493601.0,
          "discount": 0.0,
          "ticket": 39862.67
        },
        {
          "date": "2026-06-08",
          "orders": 767,
          "net": 33015706.0,
          "discount": 0.0,
          "ticket": 43045.25
        },
        {
          "date": "2026-06-09",
          "orders": 845,
          "net": 40294727.0,
          "discount": 0.0,
          "ticket": 47686.07
        },
        {
          "date": "2026-06-10",
          "orders": 882,
          "net": 42247644.0,
          "discount": 0.0,
          "ticket": 47899.82
        },
        {
          "date": "2026-06-11",
          "orders": 702,
          "net": 34212789.0,
          "discount": 0.0,
          "ticket": 48736.17
        },
        {
          "date": "2026-06-12",
          "orders": 869,
          "net": 36650403.0,
          "discount": 0.0,
          "ticket": 42175.38
        },
        {
          "date": "2026-06-13",
          "orders": 613,
          "net": 24063224.0,
          "discount": 0.0,
          "ticket": 39254.85
        },
        {
          "date": "2026-06-14",
          "orders": 631,
          "net": 25154338.0,
          "discount": 0.0,
          "ticket": 39864.24
        },
        {
          "date": "2026-06-15",
          "orders": 1253,
          "net": 56790787.0,
          "discount": 0.0,
          "ticket": 45323.85
        }
      ],
      "meta": {
        "store": "SuperZoo Chile",
        "currency": "CLP",
        "symbol": "$",
        "periodo": "01/06/2026 – 15/06/2026"
      }
    },
    "b": {
      "periodo": "01/06/2025 – 15/06/2025",
      "fecha_inicio": "2025-06-01",
      "fecha_fin": "2025-06-15",
      "kpis": {
        "orders": 25792,
        "net": 1284344211.0,
        "bruta": 2077413460.0,
        "discount": 556769996.0,
        "discount_pct": 26.8,
        "ticket": 49796.22,
        "avg_items": 1.8
      },
      "mascota": [
        {
          "m": "Perro",
          "n": 14803,
          "pct": 57.4,
          "net": 1014638963.0
        },
        {
          "m": "Gato",
          "n": 12873,
          "pct": 49.9,
          "net": 721046737.0
        },
        {
          "m": "Peces",
          "n": 1,
          "pct": 0.0,
          "net": 218479.0
        }
      ],
      "categories": [
        {
          "cat": "Alimentos",
          "orders": 37639,
          "net": 1467294334.0
        },
        {
          "cat": "Arena y accesorios",
          "orders": 2974,
          "net": 124297097.0
        },
        {
          "cat": "Accesorios",
          "orders": 2803,
          "net": 70723995.0
        },
        {
          "cat": "Farmacia",
          "orders": 1891,
          "net": 40813787.0
        },
        {
          "cat": "Farmacia e higiene",
          "orders": 1010,
          "net": 27066307.0
        },
        {
          "cat": "Juguetes",
          "orders": 832,
          "net": 7893406.0
        },
        {
          "cat": "Sin categoría",
          "orders": 259,
          "net": 7549086.0
        }
      ],
      "presence": [
        {
          "sc": "Alimento seco",
          "n": 18061,
          "pct": 70.0,
          "pos_avg": 1.3,
          "anc_pct": 93.7,
          "add_pct": 19.2,
          "net": 1204171456.0
        },
        {
          "sc": "Snack y premios",
          "n": 3886,
          "pct": 15.1,
          "pos_avg": 3.5,
          "anc_pct": 41.9,
          "add_pct": 81.1,
          "net": 90896154.0
        },
        {
          "sc": "Alimento húmedo",
          "n": 2721,
          "pct": 10.5,
          "pos_avg": 3.3,
          "anc_pct": 46.3,
          "add_pct": 79.6,
          "net": 66690161.0
        },
        {
          "sc": "Arena para gato",
          "n": 2553,
          "pct": 9.9,
          "pos_avg": 1.6,
          "anc_pct": 66.1,
          "add_pct": 36.2,
          "net": 117134766.0
        },
        {
          "sc": "Antiparasitarios",
          "n": 1572,
          "pct": 6.1,
          "pos_avg": 2.1,
          "anc_pct": 57.5,
          "add_pct": 55.4,
          "net": 57184874.0
        },
        {
          "sc": "Alimento medicado",
          "n": 1110,
          "pct": 4.3,
          "pos_avg": 1.4,
          "anc_pct": 82.3,
          "add_pct": 20.8,
          "net": 66295369.0
        },
        {
          "sc": "Necesidades especiales",
          "n": 685,
          "pct": 2.7,
          "pos_avg": 1.3,
          "anc_pct": 80.9,
          "add_pct": 20.1,
          "net": 36784075.0
        },
        {
          "sc": "Camas y mantas",
          "n": 580,
          "pct": 2.2,
          "pos_avg": 1.8,
          "anc_pct": 75.2,
          "add_pct": 41.0,
          "net": 34192171.0
        },
        {
          "sc": "Peluquería e higiene",
          "n": 530,
          "pct": 2.1,
          "pos_avg": 2.7,
          "anc_pct": 30.8,
          "add_pct": 76.4,
          "net": 7717548.0
        },
        {
          "sc": "Collares, arneses y correas",
          "n": 469,
          "pct": 1.8,
          "pos_avg": 2.4,
          "anc_pct": 61.8,
          "add_pct": 58.6,
          "net": 11514580.0
        },
        {
          "sc": "Juguetes",
          "n": 221,
          "pct": 0.9,
          "pos_avg": 3.6,
          "anc_pct": 19.0,
          "add_pct": 88.4,
          "net": 1937594.0
        },
        {
          "sc": "Areneros",
          "n": 212,
          "pct": 0.8,
          "pos_avg": 1.8,
          "anc_pct": 61.8,
          "add_pct": 40.5,
          "net": 6181183.0
        },
        {
          "sc": "Mordedores y flexibles",
          "n": 210,
          "pct": 0.8,
          "pos_avg": 3.0,
          "anc_pct": 36.7,
          "add_pct": 74.3,
          "net": 3235621.0
        },
        {
          "sc": "Sin subcategoría",
          "n": 173,
          "pct": 0.7,
          "pos_avg": 2.1,
          "anc_pct": 45.1,
          "add_pct": 54.9,
          "net": 6097668.0
        }
      ],
      "cooc_labels": [
        "Alimento seco",
        "Snack y premios",
        "Alimento húmedo",
        "Arena para gato",
        "Antiparasitarios",
        "Alimento medicado"
      ],
      "cooc_matrix": [
        [
          null,
          9.1,
          6.3,
          5.3,
          3.3,
          1.1
        ],
        [
          42.3,
          null,
          22.6,
          10.5,
          7.8,
          2.6
        ],
        [
          41.7,
          32.2,
          null,
          10.3,
          6.1,
          4.6
        ],
        [
          37.6,
          15.9,
          10.9,
          null,
          4.2,
          2.7
        ],
        [
          38.4,
          19.3,
          10.6,
          6.7,
          null,
          2.0
        ],
        [
          17.1,
          9.2,
          11.3,
          6.1,
          2.9,
          null
        ]
      ],
      "crosssell": [
        {
          "anchor": "Alimento seco",
          "n": 16915,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 1260,
              "pct": 7.4
            },
            {
              "sc": "Alimento húmedo",
              "n": 833,
              "pct": 4.9
            },
            {
              "sc": "Arena para gato",
              "n": 620,
              "pct": 3.7
            },
            {
              "sc": "Antiparasitarios",
              "n": 414,
              "pct": 2.4
            },
            {
              "sc": "Peluquería e higiene",
              "n": 169,
              "pct": 1.0
            },
            {
              "sc": "Alimento medicado",
              "n": 96,
              "pct": 0.6
            }
          ]
        },
        {
          "anchor": "Arena para gato",
          "n": 1688,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 279,
              "pct": 16.5
            },
            {
              "sc": "Snack y premios",
              "n": 216,
              "pct": 12.8
            },
            {
              "sc": "Alimento húmedo",
              "n": 141,
              "pct": 8.4
            },
            {
              "sc": "Antiparasitarios",
              "n": 51,
              "pct": 3.0
            },
            {
              "sc": "Juguetes",
              "n": 32,
              "pct": 1.9
            },
            {
              "sc": "Accesorios para arena",
              "n": 26,
              "pct": 1.5
            }
          ]
        },
        {
          "anchor": "Snack y premios",
          "n": 1628,
          "addons": [
            {
              "sc": "Alimento húmedo",
              "n": 262,
              "pct": 16.1
            },
            {
              "sc": "Alimento seco",
              "n": 217,
              "pct": 13.3
            },
            {
              "sc": "Antiparasitarios",
              "n": 64,
              "pct": 3.9
            },
            {
              "sc": "Arena para gato",
              "n": 63,
              "pct": 3.9
            },
            {
              "sc": "Peluquería e higiene",
              "n": 45,
              "pct": 2.8
            },
            {
              "sc": "Collares, arneses y correas",
              "n": 21,
              "pct": 1.3
            }
          ]
        },
        {
          "anchor": "Alimento húmedo",
          "n": 1261,
          "addons": [
            {
              "sc": "Snack y premios",
              "n": 293,
              "pct": 23.2
            },
            {
              "sc": "Alimento seco",
              "n": 194,
              "pct": 15.4
            },
            {
              "sc": "Arena para gato",
              "n": 56,
              "pct": 4.4
            },
            {
              "sc": "Antiparasitarios",
              "n": 42,
              "pct": 3.3
            },
            {
              "sc": "Alimento medicado",
              "n": 33,
              "pct": 2.6
            },
            {
              "sc": "Sin subcategoría",
              "n": 26,
              "pct": 2.1
            }
          ]
        },
        {
          "anchor": "Alimento medicado",
          "n": 913,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 73,
              "pct": 8.0
            },
            {
              "sc": "Alimento húmedo",
              "n": 56,
              "pct": 6.1
            },
            {
              "sc": "Snack y premios",
              "n": 53,
              "pct": 5.8
            },
            {
              "sc": "Arena para gato",
              "n": 32,
              "pct": 3.5
            },
            {
              "sc": "Antiparasitarios",
              "n": 18,
              "pct": 2.0
            },
            {
              "sc": "Peluquería e higiene",
              "n": 12,
              "pct": 1.3
            }
          ]
        },
        {
          "anchor": "Antiparasitarios",
          "n": 904,
          "addons": [
            {
              "sc": "Alimento seco",
              "n": 140,
              "pct": 15.5
            },
            {
              "sc": "Snack y premios",
              "n": 104,
              "pct": 11.5
            },
            {
              "sc": "Alimento húmedo",
              "n": 56,
              "pct": 6.2
            },
            {
              "sc": "Peluquería e higiene",
              "n": 24,
              "pct": 2.7
            },
            {
              "sc": "Arena para gato",
              "n": 20,
              "pct": 2.2
            },
            {
              "sc": "Collares, arneses y correas",
              "n": 14,
              "pct": 1.5
            }
          ]
        }
      ],
      "hours": [
        1220,
        482,
        187,
        85,
        55,
        71,
        209,
        423,
        834,
        1443,
        1546,
        1649,
        1735,
        1558,
        1544,
        1570,
        1318,
        1382,
        1352,
        1245,
        1354,
        1487,
        1604,
        1439
      ],
      "shipping": [
        {
          "method": "Click & Collect",
          "n": 11774,
          "pct": 45.6
        },
        {
          "method": "Santiago",
          "n": 6436,
          "pct": 25.0
        },
        {
          "method": "Programado",
          "n": 4197,
          "pct": 16.3
        },
        {
          "method": "Express",
          "n": 1069,
          "pct": 4.1
        },
        {
          "method": "Santiago",
          "n": 678,
          "pct": 2.6
        },
        {
          "method": "Valparaiso",
          "n": 531,
          "pct": 2.1
        },
        {
          "method": "Bio_Bio",
          "n": 451,
          "pct": 1.7
        },
        {
          "method": "Antofagasta",
          "n": 393,
          "pct": 1.5
        }
      ],
      "promos": [
        {
          "id": "3x2HUM-SNACK-CYB",
          "usos": 7857,
          "disc_net": 38025253.0
        },
        {
          "id": "BOMB-BRAV-CYB",
          "usos": 4897,
          "disc_net": 97192499.0
        },
        {
          "id": "30PRODSEL-WEB-CYB",
          "usos": 4890,
          "disc_net": 81655061.0
        },
        {
          "id": "30PRODSEL-CYB",
          "usos": 2266,
          "disc_net": 18587005.0
        },
        {
          "id": "PBOMBAMAR",
          "usos": 1964,
          "disc_net": 16215333.0
        },
        {
          "id": "BOMB-FIT-CYB",
          "usos": 1708,
          "disc_net": 25661143.0
        },
        {
          "id": "2x1ARENAS-CYB",
          "usos": 1692,
          "disc_net": 42990465.0
        },
        {
          "id": "BOMB-CHURU-CYB",
          "usos": 1271,
          "disc_net": 8983774.0
        },
        {
          "id": "25PRODSEL-WEB-CYB",
          "usos": 1258,
          "disc_net": 17498761.0
        },
        {
          "id": "2DA30PRODSEL-CYB",
          "usos": 983,
          "disc_net": 12340686.0
        }
      ],
      "coupons": [
        {
          "code": "25ENTODO",
          "usos": 507,
          "disc": 27514745.0,
          "pct": 25.0
        },
        {
          "code": "PRIMERA10",
          "usos": 450,
          "disc": 2277397.0,
          "pct": 10.0
        },
        {
          "code": "548742",
          "usos": 94,
          "disc": 1197142.0,
          "pct": 20.0
        },
        {
          "code": "533187",
          "usos": 93,
          "disc": 1111392.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 81,
          "disc": 601845.0,
          "pct": 15.0
        },
        {
          "code": "522468",
          "usos": 53,
          "disc": 804082.0,
          "pct": 20.0
        },
        {
          "code": "15ENTODO",
          "usos": 27,
          "disc": 467524.0,
          "pct": 15.0
        },
        {
          "code": "20ENTODO",
          "usos": 27,
          "disc": 750306.0,
          "pct": 20.0
        },
        {
          "code": "450881",
          "usos": 26,
          "disc": 472289.0,
          "pct": 16.5
        },
        {
          "code": "25FUNCIONARIO",
          "usos": 21,
          "disc": 372571.0,
          "pct": 25.0
        }
      ],
      "products": [
        {
          "id": "4132",
          "name": "Bravery Chicken Adult alimento para perro",
          "orders": 1487,
          "qty": 2179.0,
          "net": 103178050.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4985",
          "name": "Bravery Chicken Adult Cat alimento para gato",
          "orders": 1225,
          "qty": 1672.0,
          "net": 64318817.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4136",
          "name": "Bravery salmón adult alimento para perro",
          "orders": 1217,
          "qty": 1787.0,
          "net": 91097847.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "917",
          "name": "Fit Formula Adulto alimento para perro",
          "orders": 1122,
          "qty": 1656.0,
          "net": 68174208.0,
          "pos1_pct": 91,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "1066",
          "name": "Fit Formula Gato Adulto alimento para gato",
          "orders": 1029,
          "qty": 1408.0,
          "net": 39033707.0,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4987",
          "name": "Bravery Salmón Adult Cat Sterilized alimento par",
          "orders": 977,
          "qty": 1346.0,
          "net": 57042222.0,
          "pos1_pct": 86,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7205",
          "name": "Salvaje adulto con salmón 15 KG alimento para pe",
          "orders": 771,
          "qty": 1167.0,
          "net": 37255593.0,
          "pos1_pct": 86,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10077",
          "name": "Arena para gatos Aglomerante",
          "orders": 718,
          "qty": 1692.0,
          "net": 42641143.0,
          "pos1_pct": 72,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4134",
          "name": "Bravery Pork Adult alimento para perro",
          "orders": 629,
          "qty": 854.0,
          "net": 43569427.0,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8656",
          "name": "Bravery Lamb Adult Large/Medium Breeds alimento ",
          "orders": 541,
          "qty": 778.0,
          "net": 42524397.0,
          "pos1_pct": 78,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7392",
          "name": "Bravery Cat Chicken Adult Sterilized alimento pa",
          "orders": 537,
          "qty": 680.0,
          "net": 31422800.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6552",
          "name": "Dogxtreme Adult Salmón y arroz alimento para per",
          "orders": 537,
          "qty": 852.0,
          "net": 28631460.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "8948",
          "name": "Churu Variedades Atún snack para gatos 20P",
          "orders": 515,
          "qty": 1618.0,
          "net": 16302410.0,
          "pos1_pct": 59,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "4986",
          "name": "Bravery Salmón Adult Cat alimento para gato",
          "orders": 446,
          "qty": 622.0,
          "net": 25386383.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6556",
          "name": "Dogxtreme Adult pollo y arroz alimento para perr",
          "orders": 387,
          "qty": 544.0,
          "net": 18281120.0,
          "pos1_pct": 74,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10202",
          "name": "Catxtreme Salmon Esterilizado alimento para gato",
          "orders": 379,
          "qty": 497.0,
          "net": 14613393.0,
          "pos1_pct": 79,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5965",
          "name": "Churu de atún con salmón 56 GR",
          "orders": 301,
          "qty": 703.0,
          "net": 1766405.0,
          "pos1_pct": 21,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "5",
          "name": "Royal Canin adulto Mini Adult alimento para perr",
          "orders": 292,
          "qty": 327.0,
          "net": 16484720.0,
          "pos1_pct": 92,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7299",
          "name": "Arena para gatos Aglomerante 10KG",
          "orders": 288,
          "qty": 615.0,
          "net": 9297320.0,
          "pos1_pct": 70,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "15600",
          "name": "Arena con carbón activo",
          "orders": 280,
          "qty": 627.0,
          "net": 16855277.0,
          "pos1_pct": 68,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "14816",
          "name": "Nexgard combo l cat 2,5 - 7,5 kg 0.9 ml sol top",
          "orders": 271,
          "qty": 560.0,
          "net": 7995305.0,
          "pos1_pct": 54,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "4114",
          "name": "Leonardo Adult Duck alimento para gato",
          "orders": 255,
          "qty": 299.0,
          "net": 17585688.0,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4127",
          "name": "Leonardo Quality selection sabor conejo alimento",
          "orders": 241,
          "qty": 805.0,
          "net": 3375606.0,
          "pos1_pct": 36,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "15598",
          "name": "Arena aglomerante bentonita y lavanda",
          "orders": 236,
          "qty": 516.0,
          "net": 13004015.0,
          "pos1_pct": 65,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "11601",
          "name": "True Origins Wild Cat Adult Pacific alimento par",
          "orders": 214,
          "qty": 277.0,
          "net": 10472495.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13364",
          "name": "Garra de Pollo Rahue 65 GR",
          "orders": 208,
          "qty": 517.0,
          "net": 1299053.0,
          "pos1_pct": 24,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "7204",
          "name": "Salvaje adulto con pollo 15 KG alimento para per",
          "orders": 207,
          "qty": 357.0,
          "net": 11396986.0,
          "pos1_pct": 85,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4120",
          "name": "Leonardo Adult Light alimento para gato",
          "orders": 204,
          "qty": 238.0,
          "net": 13997972.0,
          "pos1_pct": 83,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6565",
          "name": "Dogxtreme Senior Light pollo y arroz alimento pa",
          "orders": 202,
          "qty": 310.0,
          "net": 10417550.0,
          "pos1_pct": 80,
          "mascota": "Perro",
          "subcat": "Necesidades especiales",
          "cat": "Alimentos"
        },
        {
          "id": "9448",
          "name": "Leonardo quality selection ave lata",
          "orders": 198,
          "qty": 622.0,
          "net": 2608231.0,
          "pos1_pct": 26,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "9449",
          "name": "Leonardo quality selection pato lata",
          "orders": 195,
          "qty": 599.0,
          "net": 2511788.0,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "6470",
          "name": "Taste Of The Wild Canyon River Gato alimento par",
          "orders": 191,
          "qty": 262.0,
          "net": 11666657.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14069",
          "name": "Bravecto Plus de 250 MG para gatos desde 2.8 a 6",
          "orders": 190,
          "qty": 319.0,
          "net": 8575445.0,
          "pos1_pct": 68,
          "mascota": "Gato",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia e higiene"
        },
        {
          "id": "5651",
          "name": "Leonardo lata quality selection pescado alimento",
          "orders": 189,
          "qty": 607.0,
          "net": 2545325.0,
          "pos1_pct": 23,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4277",
          "name": "Churu de pollo 56GR",
          "orders": 187,
          "qty": 437.0,
          "net": 1098036.0,
          "pos1_pct": 22,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "4080",
          "name": "Belcando Finest Croc alimento para perro",
          "orders": 176,
          "qty": 210.0,
          "net": 13586398.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5966",
          "name": "Churu de pollo con camarón 56GR",
          "orders": 176,
          "qty": 315.0,
          "net": 791502.0,
          "pos1_pct": 8,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "15597",
          "name": "Arena aglomerante bentonita y lavanda",
          "orders": 174,
          "qty": 356.0,
          "net": 5381854.0,
          "pos1_pct": 55,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4140",
          "name": "Bravery Chicken Mini Adult alimento para perro",
          "orders": 169,
          "qty": 218.0,
          "net": 7909910.0,
          "pos1_pct": 73,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4150",
          "name": "Bravery Salmón Adult Cat Sterilized alimento par",
          "orders": 160,
          "qty": 217.0,
          "net": 3735977.0,
          "pos1_pct": 72,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6472",
          "name": "Taste Of The Wild Rocky Mountain Gato alimento p",
          "orders": 160,
          "qty": 197.0,
          "net": 8937858.0,
          "pos1_pct": 78,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "5643",
          "name": "Leonardo lata quality selection ternera alimento",
          "orders": 159,
          "qty": 490.0,
          "net": 2054710.0,
          "pos1_pct": 11,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "12239",
          "name": "Arena aglomerante natural de bentonita para gato",
          "orders": 157,
          "qty": 336.0,
          "net": 5079506.0,
          "pos1_pct": 59,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "9438",
          "name": "Churu de pollo con cangrejo 56 GR",
          "orders": 152,
          "qty": 271.0,
          "net": 680946.0,
          "pos1_pct": 11,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "50",
          "name": "Royal Canin adulto Indoor alimento para gato",
          "orders": 150,
          "qty": 166.0,
          "net": 9484257.0,
          "pos1_pct": 78,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4125",
          "name": "Leonardo lata quality selection higado alimento ",
          "orders": 141,
          "qty": 365.0,
          "net": 1530554.0,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "11904",
          "name": "Catxtreme pollo esterilizado alimento para gato",
          "orders": 141,
          "qty": 168.0,
          "net": 6351552.0,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14877",
          "name": "Churu para gatos atún/cangrejo 56 GR",
          "orders": 140,
          "qty": 236.0,
          "net": 593003.0,
          "pos1_pct": 7,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "1502",
          "name": "Royal Canin Alimento Seco Gato Adulto Urinary Ca",
          "orders": 139,
          "qty": 166.0,
          "net": 10042331.0,
          "pos1_pct": 85,
          "mascota": "Gato",
          "subcat": "Alimento medicado",
          "cat": "Alimentos"
        },
        {
          "id": "7150",
          "name": "Rahue Bully stick snack para perros",
          "orders": 137,
          "qty": 634.0,
          "net": 2285580.0,
          "pos1_pct": 41,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "22",
          "name": "Royal Canin adulto maxi adult 15 KG alimento par",
          "orders": 135,
          "qty": 188.0,
          "net": 13426970.0,
          "pos1_pct": 87,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13374",
          "name": "Arena para gatos Clean Pawz 15 KG",
          "orders": 134,
          "qty": 290.0,
          "net": 4384139.0,
          "pos1_pct": 50,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4278",
          "name": "Churu de atún con ostiones 56 GR",
          "orders": 134,
          "qty": 277.0,
          "net": 696014.0,
          "pos1_pct": 12,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "11416",
          "name": "Leonardo drink pollo y pato 40 GR",
          "orders": 127,
          "qty": 506.0,
          "net": 846182.0,
          "pos1_pct": 24,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4276",
          "name": "Churu de atún 56 GR",
          "orders": 127,
          "qty": 328.0,
          "net": 824154.0,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "10222",
          "name": "Wanpy Soft Lamb Jerky Slices",
          "orders": 125,
          "qty": 265.0,
          "net": 1333928.0,
          "pos1_pct": 26,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "5138",
          "name": "Belcando Finest Gf Senior",
          "orders": 125,
          "qty": 140.0,
          "net": 9998801.0,
          "pos1_pct": 88,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11588",
          "name": "True Origins Pure Dog Adult Salmon Grain Free al",
          "orders": 124,
          "qty": 164.0,
          "net": 8956565.0,
          "pos1_pct": 77,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6554",
          "name": "Dogxtreme Puppy pollo y arroz alimento para perr",
          "orders": 122,
          "qty": 161.0,
          "net": 5410405.0,
          "pos1_pct": 73,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14882",
          "name": "Churu para gatos variedad de sabores pollo 60 tu",
          "orders": 121,
          "qty": 302.0,
          "net": 8372258.0,
          "pos1_pct": 60,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "11598",
          "name": "True Origins Wild Cat Adult Country Water alimen",
          "orders": 119,
          "qty": 137.0,
          "net": 5179546.0,
          "pos1_pct": 69,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4147",
          "name": "Bravery chicken kitten 2 KG alimento para gato",
          "orders": 115,
          "qty": 179.0,
          "net": 3006902.0,
          "pos1_pct": 71,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11716",
          "name": "Dogxtreme Puppy salmón y arroz alimento para per",
          "orders": 115,
          "qty": 152.0,
          "net": 5107960.0,
          "pos1_pct": 75,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "15599",
          "name": "Arena con carbón activo",
          "orders": 114,
          "qty": 229.0,
          "net": 3846843.0,
          "pos1_pct": 60,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "14667",
          "name": "Salvaje cat adult esterilizado",
          "orders": 113,
          "qty": 168.0,
          "net": 5645640.0,
          "pos1_pct": 76,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4082",
          "name": "Belcando Finest Gf Salmon alimento para perro",
          "orders": 110,
          "qty": 135.0,
          "net": 9641704.0,
          "pos1_pct": 90,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "6454",
          "name": "Virbac ehliquantel 1 comprimido",
          "orders": 109,
          "qty": 400.0,
          "net": 668919.0,
          "pos1_pct": 24,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "11414",
          "name": "Leonardo drink pollo y salmón 40 GR alimento par",
          "orders": 108,
          "qty": 412.0,
          "net": 688988.0,
          "pos1_pct": 9,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4116",
          "name": "Leonardo Adult Salmon Gf alimento para gato",
          "orders": 108,
          "qty": 136.0,
          "net": 8798815.0,
          "pos1_pct": 81,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11572",
          "name": "True origins cat adult sterelised salmón aliment",
          "orders": 106,
          "qty": 125.0,
          "net": 4830875.0,
          "pos1_pct": 76,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "10225",
          "name": "Wanpy Soft Beef Jerky Slices",
          "orders": 104,
          "qty": 209.0,
          "net": 1052045.0,
          "pos1_pct": 14,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "10221",
          "name": "Wanpy Soft Duck Jerky Strips",
          "orders": 102,
          "qty": 195.0,
          "net": 981574.0,
          "pos1_pct": 18,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "7404",
          "name": "Poo 100% bolsas compostable 60 unid verdes 1 un.",
          "orders": 102,
          "qty": 217.0,
          "net": 1274658.0,
          "pos1_pct": 14,
          "mascota": "Perro",
          "subcat": "Peluquería e higiene",
          "cat": "Farmacia"
        },
        {
          "id": "11563",
          "name": "Nath Cat adulto esterilizado sabor pollo y arroz",
          "orders": 100,
          "qty": 113.0,
          "net": 5981428.0,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "9446",
          "name": "Leonardo quality selection ave lata 200 GR",
          "orders": 98,
          "qty": 237.0,
          "net": 695071.0,
          "pos1_pct": 20,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "3955",
          "name": "Simparica antiparasitario oral masticable para p",
          "orders": 97,
          "qty": 109.0,
          "net": 2472218.0,
          "pos1_pct": 44,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "6471",
          "name": "Taste Of The Wild Low Land Creek",
          "orders": 97,
          "qty": 118.0,
          "net": 5353641.0,
          "pos1_pct": 77,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7295",
          "name": "Belcando cerdo iberico y arroz 12.5 KG alimento ",
          "orders": 96,
          "qty": 120.0,
          "net": 6956997.0,
          "pos1_pct": 82,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7141",
          "name": "Rahue Cordero patagonico en cubos snack para per",
          "orders": 95,
          "qty": 199.0,
          "net": 500029.0,
          "pos1_pct": 21,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "8054",
          "name": "Churu perro 4p pollo con vegetales 56GR",
          "orders": 95,
          "qty": 208.0,
          "net": 522635.0,
          "pos1_pct": 21,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "13081",
          "name": "Vitakraft beef stick cordero 12GR",
          "orders": 94,
          "qty": 357.0,
          "net": 297016.0,
          "pos1_pct": 11,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "12205",
          "name": "True Origins Pure Cat adulto atun salmón aliment",
          "orders": 94,
          "qty": 323.0,
          "net": 675839.0,
          "pos1_pct": 31,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "5655",
          "name": "Leonardo lata quality selection pescado alimento",
          "orders": 94,
          "qty": 249.0,
          "net": 730262.0,
          "pos1_pct": 17,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "11579",
          "name": "True Origins Pure Dog Adult Chicken alimento par",
          "orders": 93,
          "qty": 121.0,
          "net": 5591410.0,
          "pos1_pct": 76,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14326",
          "name": "Alimento nomade gato adulto",
          "orders": 91,
          "qty": 129.0,
          "net": 3251033.0,
          "pos1_pct": 80,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "12692",
          "name": "Pacific stream salmon 390gr",
          "orders": 90,
          "qty": 288.0,
          "net": 965660.0,
          "pos1_pct": 31,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "11559",
          "name": "Nath Kitten sabor pollo y arroz alimento para ga",
          "orders": 89,
          "qty": 118.0,
          "net": 3172104.0,
          "pos1_pct": 87,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "556",
          "name": "Desparasitante Flovovermic",
          "orders": 89,
          "qty": 253.0,
          "net": 635693.0,
          "pos1_pct": 28,
          "mascota": "Sin mascota",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        },
        {
          "id": "11612",
          "name": "True Origins Wild Dog Adult Pacific alimento par",
          "orders": 87,
          "qty": 107.0,
          "net": 6742815.0,
          "pos1_pct": 83,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "11287",
          "name": "Vitakraft snack cat stick conejo y pato 18 GR",
          "orders": 86,
          "qty": 221.0,
          "net": 369579.0,
          "pos1_pct": 17,
          "mascota": "Gato",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "2054",
          "name": "Acana Heritage Free Run Poultry alimento para pe",
          "orders": 84,
          "qty": 115.0,
          "net": 7730099.0,
          "pos1_pct": 81,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "4094",
          "name": "Belcando Super Premium De Ternera 800Gr Latas",
          "orders": 84,
          "qty": 315.0,
          "net": 2115010.0,
          "pos1_pct": 40,
          "mascota": "Perro",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4733",
          "name": "Fellini Mix de atún y salmón alimento húmedo par",
          "orders": 84,
          "qty": 355.0,
          "net": 295349.0,
          "pos1_pct": 10,
          "mascota": "Gato",
          "subcat": "Alimento húmedo",
          "cat": "Alimentos"
        },
        {
          "id": "4123",
          "name": "Leonardo Adult Senior alimento para gato",
          "orders": 83,
          "qty": 109.0,
          "net": 6410837.0,
          "pos1_pct": 89,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "7302",
          "name": "Dogxtreme snack semihúmedo pollo 200 GR",
          "orders": 83,
          "qty": 177.0,
          "net": 593480.0,
          "pos1_pct": 12,
          "mascota": "Perro",
          "subcat": "Snack y premios",
          "cat": "Alimentos"
        },
        {
          "id": "11577",
          "name": "True Origins Cat Adult Sterelised Salmon Grain F",
          "orders": 83,
          "qty": 101.0,
          "net": 4412589.0,
          "pos1_pct": 82,
          "mascota": "Gato",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "13372",
          "name": "Ultra Odor Seal arena para gatos aglutinante y c",
          "orders": 82,
          "qty": 152.0,
          "net": 3447473.0,
          "pos1_pct": 57,
          "mascota": "Gato",
          "subcat": "Arena para gato",
          "cat": "Arena y accesorios"
        },
        {
          "id": "4143",
          "name": "Bravery Pork Mini Adult alimento para perro",
          "orders": 81,
          "qty": 109.0,
          "net": 4224285.0,
          "pos1_pct": 67,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "14320",
          "name": "Alimento nomade perro adulto",
          "orders": 80,
          "qty": 115.0,
          "net": 3864575.0,
          "pos1_pct": 70,
          "mascota": "Perro",
          "subcat": "Alimento seco",
          "cat": "Alimentos"
        },
        {
          "id": "1136",
          "name": "Desparasitante Bravecto para perros 4,5 KG a 10 ",
          "orders": 79,
          "qty": 99.0,
          "net": 2578158.0,
          "pos1_pct": 46,
          "mascota": "Perro",
          "subcat": "Antiparasitarios",
          "cat": "Farmacia"
        }
      ],
      "conversion": [
        {
          "pos": 1,
          "n": 25792,
          "pct": 100.0
        },
        {
          "pos": 2,
          "n": 9631,
          "pct": 37.3
        },
        {
          "pos": 3,
          "n": 4775,
          "pct": 18.5
        },
        {
          "pos": 4,
          "n": 2746,
          "pct": 10.6
        },
        {
          "pos": 5,
          "n": 1594,
          "pct": 6.2
        },
        {
          "pos": 6,
          "n": 946,
          "pct": 3.7
        },
        {
          "pos": 7,
          "n": 622,
          "pct": 2.4
        }
      ],
      "promos_all": [
        {
          "id": "3x2HUM-SNACK-CYB",
          "usos": 7857,
          "disc_net": 38025253.0,
          "ppu": 4839.67
        },
        {
          "id": "BOMB-BRAV-CYB",
          "usos": 4897,
          "disc_net": 97192499.0,
          "ppu": 19847.36
        },
        {
          "id": "30PRODSEL-WEB-CYB",
          "usos": 4890,
          "disc_net": 81655061.0,
          "ppu": 16698.38
        },
        {
          "id": "30PRODSEL-CYB",
          "usos": 2266,
          "disc_net": 18587005.0,
          "ppu": 8202.56
        },
        {
          "id": "PBOMBAMAR",
          "usos": 1964,
          "disc_net": 16215333.0,
          "ppu": 8256.28
        },
        {
          "id": "BOMB-FIT-CYB",
          "usos": 1708,
          "disc_net": 25661143.0,
          "ppu": 15024.09
        },
        {
          "id": "2x1ARENAS-CYB",
          "usos": 1692,
          "disc_net": 42990465.0,
          "ppu": 25408.08
        },
        {
          "id": "BOMB-CHURU-CYB",
          "usos": 1271,
          "disc_net": 8983774.0,
          "ppu": 7068.27
        },
        {
          "id": "25PRODSEL-WEB-CYB",
          "usos": 1258,
          "disc_net": 17498761.0,
          "ppu": 13909.98
        },
        {
          "id": "2DA30PRODSEL-CYB",
          "usos": 983,
          "disc_net": 12340686.0,
          "ppu": 12554.11
        },
        {
          "id": "20PRODSEL-CYB",
          "usos": 686,
          "disc_net": 4346783.0,
          "ppu": 6336.42
        },
        {
          "id": "29990SALV-CYB",
          "usos": 660,
          "disc_net": 6379907.0,
          "ppu": 9666.53
        },
        {
          "id": "20PRODSELEC-WEB",
          "usos": 449,
          "disc_net": 3997117.0,
          "ppu": 8902.27
        },
        {
          "id": "2DA30ALIM-PRODSEL-CYB",
          "usos": 399,
          "disc_net": 4943703.0,
          "ppu": 12390.23
        },
        {
          "id": "4x3SNACKPERMA",
          "usos": 358,
          "disc_net": 1503784.0,
          "ppu": 4200.51
        },
        {
          "id": "2x1CAMAS-CYB",
          "usos": 348,
          "disc_net": 11265934.0,
          "ppu": 32373.37
        },
        {
          "id": "30FIT",
          "usos": 331,
          "disc_net": 4649637.0,
          "ppu": 14047.24
        },
        {
          "id": "2DA50PRODSEL-CYB",
          "usos": 329,
          "disc_net": 1454471.0,
          "ppu": 4420.88
        },
        {
          "id": "3x2ARENAS",
          "usos": 291,
          "disc_net": 5779858.0,
          "ppu": 19862.05
        },
        {
          "id": "2DA40ALIM-PRODSEL-CYB",
          "usos": 271,
          "disc_net": 3012478.0,
          "ppu": 11116.15
        },
        {
          "id": "2x1JUGUET-CYB",
          "usos": 234,
          "disc_net": 887928.0,
          "ppu": 3794.56
        },
        {
          "id": "20PRODSEL-WEB-CYB",
          "usos": 232,
          "disc_net": 2265257.0,
          "ppu": 9764.04
        },
        {
          "id": "50PRODSEL-CYB",
          "usos": 205,
          "disc_net": 1156156.0,
          "ppu": 5639.79
        },
        {
          "id": "302DAASECOPERMA",
          "usos": 197,
          "disc_net": 1805136.0,
          "ppu": 9163.13
        },
        {
          "id": "2DA50PELUQ-CYB",
          "usos": 193,
          "disc_net": 845393.0,
          "ppu": 4380.27
        },
        {
          "id": "25PRODSEL-CYB",
          "usos": 176,
          "disc_net": 1193501.0,
          "ppu": 6781.26
        },
        {
          "id": "24LAT-30DCTO-CYB",
          "usos": 157,
          "disc_net": 1416325.0,
          "ppu": 9021.18
        },
        {
          "id": "30TKPET",
          "usos": 153,
          "disc_net": 1590700.0,
          "ppu": 10396.73
        },
        {
          "id": "3x2HUM-SNACK",
          "usos": 147,
          "disc_net": 530687.0,
          "ppu": 3610.12
        },
        {
          "id": "3x2TOALL-CYB",
          "usos": 130,
          "disc_net": 751818.0,
          "ppu": 5783.22
        },
        {
          "id": "2DA40PRODSEL-CYB",
          "usos": 106,
          "disc_net": 716937.0,
          "ppu": 6763.56
        },
        {
          "id": "3x2PAÑAL-CYB",
          "usos": 101,
          "disc_net": 1768012.0,
          "ppu": 17505.07
        },
        {
          "id": "4x3HUMED",
          "usos": 99,
          "disc_net": 457831.0,
          "ppu": 4624.56
        },
        {
          "id": "BOMB-AMER-CYB",
          "usos": 72,
          "disc_net": 548151.0,
          "ppu": 7613.21
        },
        {
          "id": "BOMB-ROY-MINI-CYB",
          "usos": 62,
          "disc_net": 1226901.0,
          "ppu": 19788.73
        },
        {
          "id": "30PRODSELEC-WEB",
          "usos": 60,
          "disc_net": 824689.0,
          "ppu": 13744.82
        },
        {
          "id": "70LIQUI-CYB",
          "usos": 59,
          "disc_net": 570153.0,
          "ppu": 9663.61
        },
        {
          "id": "10M2PERMAN",
          "usos": 58,
          "disc_net": 294808.0,
          "ppu": 5082.9
        },
        {
          "id": "5M1PERMA",
          "usos": 57,
          "disc_net": 263137.0,
          "ppu": 4616.44
        },
        {
          "id": "50COLLA-MPETS",
          "usos": 57,
          "disc_net": 286702.0,
          "ppu": 5029.86
        },
        {
          "id": "BOMB-ROY-URIN-CYB",
          "usos": 45,
          "disc_net": 1127719.0,
          "ppu": 25060.42
        },
        {
          "id": "2x9990SALVA",
          "usos": 41,
          "disc_net": 140826.0,
          "ppu": 3434.78
        },
        {
          "id": "50LIQUI-CYB",
          "usos": 40,
          "disc_net": 631770.0,
          "ppu": 15794.25
        },
        {
          "id": "2DA30PRODSELE-WEB",
          "usos": 31,
          "disc_net": 574677.0,
          "ppu": 18537.97
        },
        {
          "id": "BOMB-ROY-MAX-CYB",
          "usos": 31,
          "disc_net": 1197476.0,
          "ppu": 38628.26
        },
        {
          "id": "25NONFOOD",
          "usos": 31,
          "disc_net": 234181.0,
          "ppu": 7554.23
        },
        {
          "id": "502DA-JUGUE",
          "usos": 30,
          "disc_net": 64156.0,
          "ppu": 2138.53
        },
        {
          "id": "20NONFOOD",
          "usos": 28,
          "disc_net": 30883.0,
          "ppu": 1102.96
        },
        {
          "id": "502DANEXGARD",
          "usos": 28,
          "disc_net": 267919.0,
          "ppu": 9568.54
        },
        {
          "id": "3x2SNACKS-CYB",
          "usos": 26,
          "disc_net": 123460.0,
          "ppu": 4748.46
        },
        {
          "id": "AREN-9990-CYB",
          "usos": 21,
          "disc_net": 105882.0,
          "ppu": 5042.0
        },
        {
          "id": "502DAHIGIENE",
          "usos": 21,
          "disc_net": 88988.0,
          "ppu": 4237.52
        },
        {
          "id": "3x2PRODSELEC-WEB",
          "usos": 19,
          "disc_net": 58580.0,
          "ppu": 3083.16
        },
        {
          "id": "20FOOD",
          "usos": 19,
          "disc_net": 41737.0,
          "ppu": 2196.68
        },
        {
          "id": "3x2WELLNESS-CYB",
          "usos": 17,
          "disc_net": 403212.0,
          "ppu": 23718.35
        },
        {
          "id": "2x16990RASC-CYB",
          "usos": 17,
          "disc_net": 129281.0,
          "ppu": 7604.76
        },
        {
          "id": "2x9990SALV-CYB",
          "usos": 16,
          "disc_net": 57001.0,
          "ppu": 3562.56
        },
        {
          "id": "DOGX-34990",
          "usos": 16,
          "disc_net": 79835.0,
          "ppu": 4989.69
        },
        {
          "id": "15FOOD",
          "usos": 15,
          "disc_net": 8861.0,
          "ppu": 590.73
        },
        {
          "id": "SALVAJE-12KG-31990",
          "usos": 14,
          "disc_net": 100844.0,
          "ppu": 7203.14
        },
        {
          "id": "BOMB-SANIC-CYB",
          "usos": 13,
          "disc_net": 87140.0,
          "ppu": 6703.08
        },
        {
          "id": "502DA-ALFOMB",
          "usos": 13,
          "disc_net": 138585.0,
          "ppu": 10660.38
        },
        {
          "id": "2x22990DOGX",
          "usos": 12,
          "disc_net": 64614.0,
          "ppu": 5384.5
        },
        {
          "id": "JUGUE-1990-CYB",
          "usos": 12,
          "disc_net": 23532.0,
          "ppu": 1961.0
        },
        {
          "id": "TKPET-6000",
          "usos": 11,
          "disc_net": 105882.0,
          "ppu": 9625.64
        },
        {
          "id": "TOOTOY-2990",
          "usos": 11,
          "disc_net": 10081.0,
          "ppu": 916.45
        },
        {
          "id": "40LIQUI-CYB",
          "usos": 11,
          "disc_net": 51055.0,
          "ppu": 4641.36
        },
        {
          "id": "2X1SNACKS",
          "usos": 11,
          "disc_net": 23410.0,
          "ppu": 2128.18
        },
        {
          "id": "SALVAJE-15KG-31990",
          "usos": 10,
          "disc_net": 50420.0,
          "ppu": 5042.0
        },
        {
          "id": "4x3HUM-CATX",
          "usos": 10,
          "disc_net": 21739.0,
          "ppu": 2173.9
        },
        {
          "id": "3x2KIT-BELL",
          "usos": 10,
          "disc_net": 46137.0,
          "ppu": 4613.7
        },
        {
          "id": "3x2HUMED-CYB",
          "usos": 10,
          "disc_net": 46504.0,
          "ppu": 4650.4
        },
        {
          "id": "LIQUI-ROYAL",
          "usos": 10,
          "disc_net": 305041.0,
          "ppu": 30504.1
        },
        {
          "id": "25FOOD",
          "usos": 10,
          "disc_net": 11052.0,
          "ppu": 1105.2
        },
        {
          "id": "30% LIQUIDACION",
          "usos": 9,
          "disc_net": 22412.0,
          "ppu": 2490.22
        },
        {
          "id": "2x54990CATX",
          "usos": 8,
          "disc_net": 88178.0,
          "ppu": 11022.25
        },
        {
          "id": "LIQUIDACION",
          "usos": 7,
          "disc_net": 92437.0,
          "ppu": 13205.29
        },
        {
          "id": "30LIQUI-CYB",
          "usos": 7,
          "disc_net": 61748.0,
          "ppu": 8821.14
        },
        {
          "id": "4x3HUME-TRUE",
          "usos": 6,
          "disc_net": 18830.0,
          "ppu": 3138.33
        },
        {
          "id": "15NONFOOD",
          "usos": 6,
          "disc_net": 52936.0,
          "ppu": 8822.67
        },
        {
          "id": "3x2POUCH-NATH",
          "usos": 5,
          "disc_net": 35571.0,
          "ppu": 7114.2
        },
        {
          "id": "15PRODSELEC-WEB",
          "usos": 5,
          "disc_net": 24953.0,
          "ppu": 4990.6
        },
        {
          "id": "3x2BIOPETS-CYB",
          "usos": 5,
          "disc_net": 75579.0,
          "ppu": 15115.8
        },
        {
          "id": "NATHVET-28990",
          "usos": 5,
          "disc_net": 25210.0,
          "ppu": 5042.0
        },
        {
          "id": "70% LIQUIDACION",
          "usos": 5,
          "disc_net": 38753.0,
          "ppu": 7750.6
        },
        {
          "id": "TRUE-48990",
          "usos": 4,
          "disc_net": 20168.0,
          "ppu": 5042.0
        },
        {
          "id": "4x3PRODSELEC-WEB",
          "usos": 4,
          "disc_net": 15092.0,
          "ppu": 3773.0
        },
        {
          "id": "402DA-PLATOS",
          "usos": 4,
          "disc_net": 18138.0,
          "ppu": 4534.5
        },
        {
          "id": "NATH-36990",
          "usos": 4,
          "disc_net": 30252.0,
          "ppu": 7563.0
        },
        {
          "id": "50% LIQUIDACION",
          "usos": 4,
          "disc_net": 16370.0,
          "ppu": 4092.5
        },
        {
          "id": "20CATZILL",
          "usos": 3,
          "disc_net": 20163.0,
          "ppu": 6721.0
        },
        {
          "id": "3x2XTREME",
          "usos": 3,
          "disc_net": 6697.0,
          "ppu": 2232.33
        },
        {
          "id": "3x2TCATBAND",
          "usos": 2,
          "disc_net": 5026.0,
          "ppu": 2513.0
        },
        {
          "id": "20PLATOS",
          "usos": 2,
          "disc_net": 5039.0,
          "ppu": 2519.5
        },
        {
          "id": "LITT-REP-35990",
          "usos": 2,
          "disc_net": 5034.0,
          "ppu": 2517.0
        },
        {
          "id": "20RASCAD",
          "usos": 2,
          "disc_net": 23526.0,
          "ppu": 11763.0
        },
        {
          "id": "30INDOM",
          "usos": 2,
          "disc_net": 3018.0,
          "ppu": 1509.0
        },
        {
          "id": "502DAPAÑALES",
          "usos": 2,
          "disc_net": 24781.0,
          "ppu": 12390.5
        },
        {
          "id": "4x3HUM-APPLA",
          "usos": 2,
          "disc_net": 4184.0,
          "ppu": 2092.0
        },
        {
          "id": "20PLAYOL",
          "usos": 2,
          "disc_net": 5039.0,
          "ppu": 2519.5
        },
        {
          "id": "20MASCAN",
          "usos": 2,
          "disc_net": 4366.0,
          "ppu": 2183.0
        },
        {
          "id": "20CUNATEX",
          "usos": 2,
          "disc_net": 3694.0,
          "ppu": 1847.0
        },
        {
          "id": "CATX-10990",
          "usos": 2,
          "disc_net": 10084.0,
          "ppu": 5042.0
        },
        {
          "id": "20PATAGON",
          "usos": 2,
          "disc_net": 3020.0,
          "ppu": 1510.0
        },
        {
          "id": "2x64990CATZ",
          "usos": 2,
          "disc_net": 25194.0,
          "ppu": 12597.0
        },
        {
          "id": "CATX-12990",
          "usos": 2,
          "disc_net": 6722.0,
          "ppu": 3361.0
        },
        {
          "id": "25CAMAS",
          "usos": 1,
          "disc_net": 4620.0,
          "ppu": 4620.0
        },
        {
          "id": "3x2TOALL",
          "usos": 1,
          "disc_net": 3353.0,
          "ppu": 3353.0
        },
        {
          "id": "DOGZI-46990",
          "usos": 1,
          "disc_net": 6723.0,
          "ppu": 6723.0
        },
        {
          "id": "20DRAGPHAR",
          "usos": 1,
          "disc_net": 2015.0,
          "ppu": 2015.0
        },
        {
          "id": "ARENA-26990",
          "usos": 1,
          "disc_net": 4202.0,
          "ppu": 4202.0
        },
        {
          "id": "15MAXMOLLY",
          "usos": 1,
          "disc_net": 1638.0,
          "ppu": 1638.0
        },
        {
          "id": "15MANADA",
          "usos": 1,
          "disc_net": 882.0,
          "ppu": 882.0
        },
        {
          "id": "20MANADA",
          "usos": 1,
          "disc_net": 1677.0,
          "ppu": 1677.0
        },
        {
          "id": "15NATH",
          "usos": 1,
          "disc_net": 9705.0,
          "ppu": 9705.0
        },
        {
          "id": "15BOZAL",
          "usos": 1,
          "disc_net": 629.0,
          "ppu": 629.0
        },
        {
          "id": "30SALVAJ",
          "usos": 1,
          "disc_net": 3524.0,
          "ppu": 3524.0
        },
        {
          "id": "3X2PRODSELEC",
          "usos": 1,
          "disc_net": 3773.0,
          "ppu": 3773.0
        },
        {
          "id": "20RAHUE",
          "usos": 1,
          "disc_net": 755.0,
          "ppu": 755.0
        },
        {
          "id": "20PRODSELEC",
          "usos": 1,
          "disc_net": 4703.0,
          "ppu": 4703.0
        },
        {
          "id": "LIQUI-WELLNESS",
          "usos": 1,
          "disc_net": 10084.0,
          "ppu": 10084.0
        },
        {
          "id": "4x3JUGUE-SELE",
          "usos": 1,
          "disc_net": 5034.0,
          "ppu": 5034.0
        },
        {
          "id": "502DARASCAD",
          "usos": 1,
          "disc_net": 5458.0,
          "ppu": 5458.0
        },
        {
          "id": "502DAJUGPLAYOL",
          "usos": 1,
          "disc_net": 6298.0,
          "ppu": 6298.0
        },
        {
          "id": "TRUEG20V2",
          "usos": 1,
          "disc_net": 10923.0,
          "ppu": 10923.0
        },
        {
          "id": "2DA50PRODSELEC",
          "usos": 1,
          "disc_net": 5458.0,
          "ppu": 5458.0
        }
      ],
      "coupons_all": [
        {
          "code": "25ENTODO",
          "usos": 507,
          "disc": 27514745.0,
          "pct": 25.0
        },
        {
          "code": "PRIMERA10",
          "usos": 450,
          "disc": 2277397.0,
          "pct": 10.0
        },
        {
          "code": "548742",
          "usos": 94,
          "disc": 1197142.0,
          "pct": 20.0
        },
        {
          "code": "533187",
          "usos": 93,
          "disc": 1111392.0,
          "pct": 20.0
        },
        {
          "code": "PET15",
          "usos": 81,
          "disc": 601845.0,
          "pct": 15.0
        },
        {
          "code": "522468",
          "usos": 53,
          "disc": 804082.0,
          "pct": 20.0
        },
        {
          "code": "15ENTODO",
          "usos": 27,
          "disc": 467524.0,
          "pct": 15.0
        },
        {
          "code": "20ENTODO",
          "usos": 27,
          "disc": 750306.0,
          "pct": 20.0
        },
        {
          "code": "450881",
          "usos": 26,
          "disc": 472289.0,
          "pct": 16.5
        },
        {
          "code": "25FUNCIONARIO",
          "usos": 21,
          "disc": 372571.0,
          "pct": 25.0
        },
        {
          "code": "512269",
          "usos": 20,
          "disc": 268442.0,
          "pct": 20.0
        },
        {
          "code": "440612",
          "usos": 15,
          "disc": 174723.0,
          "pct": 17.5
        },
        {
          "code": "559779",
          "usos": 9,
          "disc": 138741.0,
          "pct": 17.8
        },
        {
          "code": "415281",
          "usos": 8,
          "disc": 128241.0,
          "pct": 17.2
        },
        {
          "code": "442174",
          "usos": 5,
          "disc": 73830.0,
          "pct": 18.8
        },
        {
          "code": "519716",
          "usos": 3,
          "disc": 31851.0,
          "pct": 15.3
        },
        {
          "code": "ABCLAPOLAR",
          "usos": 2,
          "disc": 21796.0,
          "pct": 20.0
        },
        {
          "code": "10ENTODO",
          "usos": 2,
          "disc": 18997.0,
          "pct": 10.0
        },
        {
          "code": "540477",
          "usos": 2,
          "disc": 21796.0,
          "pct": 17.2
        },
        {
          "code": "SZ30-BLAAIJFO",
          "usos": 1,
          "disc": 30000.0,
          "pct": 53.6
        },
        {
          "code": "JCSNF14",
          "usos": 1,
          "disc": 5599.0,
          "pct": 10.0
        },
        {
          "code": "SZ10-X3AA9D6C",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "SZ10-LVHN2JXU",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "SZ20-2C0TWUY1",
          "usos": 1,
          "disc": 20000.0,
          "pct": 77.2
        },
        {
          "code": "SZ30-8RWR6FBQ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 73.2
        },
        {
          "code": "SZ20-X3RETAH3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 60.6
        },
        {
          "code": "SZ10-L44Y2FFA",
          "usos": 1,
          "disc": 10000.0,
          "pct": 30.3
        },
        {
          "code": "SZ15-ZHXDISEA",
          "usos": 1,
          "disc": 15000.0,
          "pct": 48.4
        },
        {
          "code": "SZ30-A7IK5XLF",
          "usos": 1,
          "disc": 30000.0,
          "pct": 60.0
        },
        {
          "code": "SZ20-L00A7OVI",
          "usos": 1,
          "disc": 20000.0,
          "pct": 59.3
        },
        {
          "code": "SZ20-GEJN4X9E",
          "usos": 1,
          "disc": 20000.0,
          "pct": 30.8
        },
        {
          "code": "SZ20-VQ71M5D1",
          "usos": 1,
          "disc": 20000.0,
          "pct": 26.7
        },
        {
          "code": "SZ10-G178O9DZ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 62.5
        },
        {
          "code": "SZ20-OMGULJFY",
          "usos": 1,
          "disc": 20000.0,
          "pct": 66.7
        },
        {
          "code": "SZ10-SQJTJCM5",
          "usos": 1,
          "disc": 10000.0,
          "pct": 33.2
        },
        {
          "code": "SZ10-58UOUXQW",
          "usos": 1,
          "disc": 10000.0,
          "pct": 31.3
        },
        {
          "code": "SZ30-KOXS13T8",
          "usos": 1,
          "disc": 30000.0,
          "pct": 69.8
        },
        {
          "code": "SZ30-JMRW22XJ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 60.0
        },
        {
          "code": "SZ10-U1MTIRZ6",
          "usos": 1,
          "disc": 10000.0,
          "pct": 21.7
        },
        {
          "code": "SZ20-Q6IZ9IFP",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.0
        },
        {
          "code": "SZ30-6MK5GFNG",
          "usos": 1,
          "disc": 30000.0,
          "pct": 56.6
        },
        {
          "code": "SZ-WDZZ5TN7",
          "usos": 1,
          "disc": 11999.0,
          "pct": 15.0
        },
        {
          "code": "SZ30-WULDCNIQ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 69.8
        },
        {
          "code": "SZ30-6L2IUGN2",
          "usos": 1,
          "disc": 30000.0,
          "pct": 65.3
        },
        {
          "code": "SZ20-OUAM4UP6",
          "usos": 1,
          "disc": 20000.0,
          "pct": 57.2
        },
        {
          "code": "SZ10-729VDR80",
          "usos": 1,
          "disc": 10000.0,
          "pct": 45.5
        },
        {
          "code": "SZ20-49OREURD",
          "usos": 1,
          "disc": 20000.0,
          "pct": 40.0
        },
        {
          "code": "SZ15-PJBFFKTW",
          "usos": 1,
          "disc": 15000.0,
          "pct": 42.9
        },
        {
          "code": "SZ20-1EHUBW55",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.7
        },
        {
          "code": "SZ10-3BWMIAF9",
          "usos": 1,
          "disc": 10000.0,
          "pct": 38.5
        },
        {
          "code": "SZ20-16DU2KY9",
          "usos": 1,
          "disc": 20000.0,
          "pct": 71.5
        },
        {
          "code": "SZ30-XGZIAFTH",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.9
        },
        {
          "code": "SZ30-0YVY4TDG",
          "usos": 1,
          "disc": 30000.0,
          "pct": 69.8
        },
        {
          "code": "SZ20-6J3RANPF",
          "usos": 1,
          "disc": 20000.0,
          "pct": 77.0
        },
        {
          "code": "SZ30-2482AIT2",
          "usos": 1,
          "disc": 30000.0,
          "pct": 82.2
        },
        {
          "code": "SZ20-5MK042R4",
          "usos": 1,
          "disc": 20000.0,
          "pct": 68.2
        },
        {
          "code": "SZ10-JNAKE3F1",
          "usos": 1,
          "disc": 10000.0,
          "pct": 58.9
        },
        {
          "code": "SZ20-EP9ELPKE",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "SZ30-8FDK8MT5",
          "usos": 1,
          "disc": 30000.0,
          "pct": 63.8
        },
        {
          "code": "SZ30-WR2E5JCV",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.2
        },
        {
          "code": "SZ30-ERLHTYRK",
          "usos": 1,
          "disc": 30000.0,
          "pct": 75.0
        },
        {
          "code": "SZ30-GC9L4O79",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.2
        },
        {
          "code": "SZ20-OK0Z9RA0",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.3
        },
        {
          "code": "SZ20-6JKYDKEG",
          "usos": 1,
          "disc": 20000.0,
          "pct": 57.2
        },
        {
          "code": "JCTRACPA14",
          "usos": 1,
          "disc": 6299.0,
          "pct": 10.0
        },
        {
          "code": "SZ20-E4DKBR2H",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.1
        },
        {
          "code": "SZ20-2ZNNSP70",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.4
        },
        {
          "code": "SZ30-CVFEBLSW",
          "usos": 1,
          "disc": 30000.0,
          "pct": 37.5
        },
        {
          "code": "SZ20-1924KTX3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.1
        },
        {
          "code": "SZ15-WPGSYBWD",
          "usos": 1,
          "disc": 15000.0,
          "pct": 62.7
        },
        {
          "code": "SZ30-R0P20GRS",
          "usos": 1,
          "disc": 30000.0,
          "pct": 75.1
        },
        {
          "code": "SZ30-Q8LMYA9E",
          "usos": 1,
          "disc": 30000.0,
          "pct": 76.3
        },
        {
          "code": "SZ15-U4RO8TZU",
          "usos": 1,
          "disc": 15000.0,
          "pct": 37.5
        },
        {
          "code": "SZ20-N2D9RRXE",
          "usos": 1,
          "disc": 20000.0,
          "pct": 77.1
        },
        {
          "code": "SZ15-IIA3UP1Y",
          "usos": 1,
          "disc": 15000.0,
          "pct": 71.5
        },
        {
          "code": "SZ10-CN9QI3EA",
          "usos": 1,
          "disc": 10000.0,
          "pct": 28.6
        },
        {
          "code": "SZ15-KNFIR8PZ",
          "usos": 1,
          "disc": 15000.0,
          "pct": 71.6
        },
        {
          "code": "SZ15-2UZXTOE4",
          "usos": 1,
          "disc": 15000.0,
          "pct": 71.5
        },
        {
          "code": "SZ10-MKPICDTQ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "SZ30-VKNSGUI0",
          "usos": 1,
          "disc": 30000.0,
          "pct": 42.9
        },
        {
          "code": "SZ15-SXDMMDY6",
          "usos": 1,
          "disc": 15000.0,
          "pct": 19.8
        },
        {
          "code": "SZ10-787RME7T",
          "usos": 1,
          "disc": 10000.0,
          "pct": 50.0
        },
        {
          "code": "SZ30-C1VILFGC",
          "usos": 1,
          "disc": 30000.0,
          "pct": 48.4
        },
        {
          "code": "SZ15-WAFC98XS",
          "usos": 1,
          "disc": 15000.0,
          "pct": 74.4
        },
        {
          "code": "SZ30-63NR52FX",
          "usos": 1,
          "disc": 30000.0,
          "pct": 60.0
        },
        {
          "code": "SZ15-O2ZFS76W",
          "usos": 1,
          "disc": 15000.0,
          "pct": 55.6
        },
        {
          "code": "SZ30-ZGKWLMBH",
          "usos": 1,
          "disc": 30000.0,
          "pct": 63.9
        },
        {
          "code": "SZ30-MO899UEM",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.0
        },
        {
          "code": "SZ30-X51C91V4",
          "usos": 1,
          "disc": 30000.0,
          "pct": 53.6
        },
        {
          "code": "SZ20-IWQAAS8P",
          "usos": 1,
          "disc": 20000.0,
          "pct": 78.6
        },
        {
          "code": "SZ10-C70MKJHH",
          "usos": 1,
          "disc": 10000.0,
          "pct": 43.5
        },
        {
          "code": "SZ20-KC500RXU",
          "usos": 1,
          "disc": 20000.0,
          "pct": 75.4
        },
        {
          "code": "SZ20-LO3EF7QL",
          "usos": 1,
          "disc": 20000.0,
          "pct": 46.5
        },
        {
          "code": "SZ20-594VYGJM",
          "usos": 1,
          "disc": 20000.0,
          "pct": 55.6
        },
        {
          "code": "SZ30-QQSTGIX2",
          "usos": 1,
          "disc": 30000.0,
          "pct": 65.2
        },
        {
          "code": "SZ30-L99GD3HK",
          "usos": 1,
          "disc": 30000.0,
          "pct": 32.3
        },
        {
          "code": "SZ30-93ZF16QA",
          "usos": 1,
          "disc": 30000.0,
          "pct": 54.6
        },
        {
          "code": "SZ30-2PJUUBJ1",
          "usos": 1,
          "disc": 30000.0,
          "pct": 55.6
        },
        {
          "code": "SZ20-610GMRET",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.1
        },
        {
          "code": "SZ15-1WHPI3TD",
          "usos": 1,
          "disc": 15000.0,
          "pct": 37.5
        },
        {
          "code": "CLUB-KT727CB",
          "usos": 1,
          "disc": 8598.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-96CBLFL3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.0
        },
        {
          "code": "CLUB-OVTNI6K",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-UM99EFVO",
          "usos": 1,
          "disc": 10000.0,
          "pct": 21.7
        },
        {
          "code": "CLUB-EF7HW65",
          "usos": 1,
          "disc": 23596.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-B1X992AW",
          "usos": 1,
          "disc": 30000.0,
          "pct": 37.5
        },
        {
          "code": "SZ15-SYG5CD7K",
          "usos": 1,
          "disc": 15000.0,
          "pct": 55.6
        },
        {
          "code": "CLUB-EUF18GH",
          "usos": 1,
          "disc": 3396.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-2RNFQNA",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "549162",
          "usos": 1,
          "disc": 11549.0,
          "pct": 16.5
        },
        {
          "code": "CLUB-JQP46PZ",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "374828",
          "usos": 1,
          "disc": 36399.0,
          "pct": 14.0
        },
        {
          "code": "SZ-IPXUV5IP",
          "usos": 1,
          "disc": 33596.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-FE1SEKOU",
          "usos": 1,
          "disc": 30000.0,
          "pct": 56.6
        },
        {
          "code": "CLUB-QR7QAP3",
          "usos": 1,
          "disc": 6994.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-RQAVLH5",
          "usos": 1,
          "disc": 9198.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-P98FX8B9",
          "usos": 1,
          "disc": 20000.0,
          "pct": 58.9
        },
        {
          "code": "CLUB-EAG8RIV",
          "usos": 1,
          "disc": 5596.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-YC0IZH7F",
          "usos": 1,
          "disc": 20000.0,
          "pct": 25.6
        },
        {
          "code": "CLUB-43BK2QX",
          "usos": 1,
          "disc": 12998.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-TO3UO5IX",
          "usos": 1,
          "disc": 20000.0,
          "pct": 60.6
        },
        {
          "code": "SZ10-IA7UWH6O",
          "usos": 1,
          "disc": 10000.0,
          "pct": 52.8
        },
        {
          "code": "SZ30-2YFGOPIY",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.2
        },
        {
          "code": "SZ30-4WS7FNLF",
          "usos": 1,
          "disc": 30000.0,
          "pct": 39.0
        },
        {
          "code": "CLUB-XA8ZHJA",
          "usos": 1,
          "disc": 7598.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-OJ81AS6E",
          "usos": 1,
          "disc": 20000.0,
          "pct": 52.6
        },
        {
          "code": "SZ30-HSMB7ORH",
          "usos": 1,
          "disc": 30000.0,
          "pct": 77.0
        },
        {
          "code": "CLUB-K9UJK59",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-CF8GF1A2",
          "usos": 1,
          "disc": 20000.0,
          "pct": 76.9
        },
        {
          "code": "SZ20-X6KW3N6U",
          "usos": 1,
          "disc": 20000.0,
          "pct": 58.9
        },
        {
          "code": "SZ10-NQ92H3RO",
          "usos": 1,
          "disc": 10000.0,
          "pct": 62.7
        },
        {
          "code": "CLUB-QSEMROU",
          "usos": 1,
          "disc": 18996.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-OTN3XROZ",
          "usos": 1,
          "disc": 20000.0,
          "pct": 79.8
        },
        {
          "code": "SZ20-LYABU3JB",
          "usos": 1,
          "disc": 20000.0,
          "pct": 25.6
        },
        {
          "code": "CLUB-KN2I24E",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-K4C6IM3",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-41T3YSJ",
          "usos": 1,
          "disc": 8998.0,
          "pct": 20.0
        },
        {
          "code": "374829",
          "usos": 1,
          "disc": 8464.0,
          "pct": 13.3
        },
        {
          "code": "CLUB-G4Z1L9I",
          "usos": 1,
          "disc": 9998.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-GXI3NPRD",
          "usos": 1,
          "disc": 20000.0,
          "pct": 32.8
        },
        {
          "code": "SZ20-OE4VWZ95",
          "usos": 1,
          "disc": 20000.0,
          "pct": 72.9
        },
        {
          "code": "SZ30-HEBJ9X02",
          "usos": 1,
          "disc": 30000.0,
          "pct": 66.7
        },
        {
          "code": "SZ10-UZX4MP8V",
          "usos": 1,
          "disc": 10000.0,
          "pct": 52.2
        },
        {
          "code": "SZ30-A6CZLIX1",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.4
        },
        {
          "code": "SZ20-XZMJXWHN",
          "usos": 1,
          "disc": 20000.0,
          "pct": 57.2
        },
        {
          "code": "SZ20-268BC3U3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 44.5
        },
        {
          "code": "SZ15-19TJ9UVO",
          "usos": 1,
          "disc": 15000.0,
          "pct": 60.0
        },
        {
          "code": "SZ20-KCC6DW8H",
          "usos": 1,
          "disc": 20000.0,
          "pct": 71.5
        },
        {
          "code": "CLUB-IHHRW74",
          "usos": 1,
          "disc": 15998.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-K0DMTHT1",
          "usos": 1,
          "disc": 20000.0,
          "pct": 33.3
        },
        {
          "code": "SZ30-ZHCTV4P1",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.0
        },
        {
          "code": "SZ20-IL4EGAOR",
          "usos": 1,
          "disc": 20000.0,
          "pct": 33.3
        },
        {
          "code": "SZ10-J0SHSQOB",
          "usos": 1,
          "disc": 10000.0,
          "pct": 45.5
        },
        {
          "code": "SZ20-Q3GTC461",
          "usos": 1,
          "disc": 20000.0,
          "pct": 29.4
        },
        {
          "code": "SZ20-QS41QILW",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.1
        },
        {
          "code": "SZ30-ILP4JTKS",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.0
        },
        {
          "code": "SZ10-YBYR13PI",
          "usos": 1,
          "disc": 10000.0,
          "pct": 38.5
        },
        {
          "code": "SZ30-FW05K8L0",
          "usos": 1,
          "disc": 30000.0,
          "pct": 49.4
        },
        {
          "code": "CLUB-2KEVQIY",
          "usos": 1,
          "disc": 10598.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-I8TFZKG8",
          "usos": 1,
          "disc": 30000.0,
          "pct": 62.5
        },
        {
          "code": "SZ-ELWHC75N",
          "usos": 1,
          "disc": 15147.0,
          "pct": 15.0
        },
        {
          "code": "SZ20-E5FYFBAR",
          "usos": 1,
          "disc": 20000.0,
          "pct": 77.0
        },
        {
          "code": "SZ10-QYNW2VWK",
          "usos": 1,
          "disc": 10000.0,
          "pct": 55.6
        },
        {
          "code": "CLUB-2BRZLLC",
          "usos": 1,
          "disc": 7396.0,
          "pct": 20.0
        },
        {
          "code": "SZ30-01YDRS0K",
          "usos": 1,
          "disc": 30000.0,
          "pct": 38.5
        },
        {
          "code": "SZ10-E9EZUGXW",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.8
        },
        {
          "code": "SZ10-7IDK68PD",
          "usos": 1,
          "disc": 10000.0,
          "pct": 34.6
        },
        {
          "code": "SZ10-MAWZMNSI",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "SZ30-ZA9WRYI2",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.4
        },
        {
          "code": "SZ-MGFVSUP4",
          "usos": 1,
          "disc": 2999.0,
          "pct": 15.0
        },
        {
          "code": "SZ30-LZJ6WBSV",
          "usos": 1,
          "disc": 30000.0,
          "pct": 33.3
        },
        {
          "code": "SZ10-AS6OIPJJ",
          "usos": 1,
          "disc": 10000.0,
          "pct": 28.3
        },
        {
          "code": "SZ20-59JATBR3",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.1
        },
        {
          "code": "SZ-SBBR749R",
          "usos": 1,
          "disc": 7346.0,
          "pct": 15.0
        },
        {
          "code": "SZ20-ZFCV3101",
          "usos": 1,
          "disc": 20000.0,
          "pct": 75.6
        },
        {
          "code": "SZ10-ZF9VIQJW",
          "usos": 1,
          "disc": 10000.0,
          "pct": 26.3
        },
        {
          "code": "445596",
          "usos": 1,
          "disc": 14994.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-E6ZWYBBZ",
          "usos": 1,
          "disc": 15000.0,
          "pct": 23.1
        },
        {
          "code": "SZ20-XA2DTVSF",
          "usos": 1,
          "disc": 20000.0,
          "pct": 28.2
        },
        {
          "code": "SZ20-XRXJ9CQK",
          "usos": 1,
          "disc": 20000.0,
          "pct": 43.5
        },
        {
          "code": "SZ30-SZ1NQZPX",
          "usos": 1,
          "disc": 30000.0,
          "pct": 79.0
        },
        {
          "code": "SZ10-326OR9QU",
          "usos": 1,
          "disc": 10000.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-8XW69FYD",
          "usos": 1,
          "disc": 15000.0,
          "pct": 68.2
        },
        {
          "code": "BCI065-C6IS",
          "usos": 1,
          "disc": 25000.0,
          "pct": 80.7
        },
        {
          "code": "SZ30-G8MZYCH5",
          "usos": 1,
          "disc": 30000.0,
          "pct": 83.4
        },
        {
          "code": "SZ30-5UOTWA0Z",
          "usos": 1,
          "disc": 30000.0,
          "pct": 55.6
        },
        {
          "code": "SZ15-BN8FK37Z",
          "usos": 1,
          "disc": 15000.0,
          "pct": 68.2
        },
        {
          "code": "SZ30-SO18W52M",
          "usos": 1,
          "disc": 30000.0,
          "pct": 50.0
        },
        {
          "code": "SZ-SBXGF339",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-WK9XWM5T",
          "usos": 1,
          "disc": 15000.0,
          "pct": 34.9
        },
        {
          "code": "SZ15-89I7NYPB",
          "usos": 1,
          "disc": 15000.0,
          "pct": 26.8
        },
        {
          "code": "SZ20-1X8DHMBF",
          "usos": 1,
          "disc": 20000.0,
          "pct": 41.7
        },
        {
          "code": "SZ20-LDWXD7D7",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.7
        },
        {
          "code": "SZ10-BJ24AY7A",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.7
        },
        {
          "code": "SZ20-S9GC6NWS",
          "usos": 1,
          "disc": 20000.0,
          "pct": 60.6
        },
        {
          "code": "SZ20-E7WE0F2Q",
          "usos": 1,
          "disc": 20000.0,
          "pct": 33.3
        },
        {
          "code": "SZ15-ZZJIV01G",
          "usos": 1,
          "disc": 15000.0,
          "pct": 53.6
        },
        {
          "code": "SZ10-768264U3",
          "usos": 1,
          "disc": 10000.0,
          "pct": 33.3
        },
        {
          "code": "SZ30-PLTN5Z8D",
          "usos": 1,
          "disc": 30000.0,
          "pct": 27.8
        },
        {
          "code": "SZ30-ACYPAL3H",
          "usos": 1,
          "disc": 30000.0,
          "pct": 53.6
        },
        {
          "code": "SZ-5QT36A25",
          "usos": 1,
          "disc": 8247.0,
          "pct": 15.0
        },
        {
          "code": "SZ10-7DGB5Y9L",
          "usos": 1,
          "disc": 10000.0,
          "pct": 26.3
        },
        {
          "code": "SZ15-TD9ZMHS9",
          "usos": 1,
          "disc": 15000.0,
          "pct": 51.7
        },
        {
          "code": "SZ15-92J7Y17N",
          "usos": 1,
          "disc": 15000.0,
          "pct": 69.7
        },
        {
          "code": "SZ10-TH31HBD3",
          "usos": 1,
          "disc": 10000.0,
          "pct": 40.0
        },
        {
          "code": "BCI097-IFOA",
          "usos": 1,
          "disc": 25000.0,
          "pct": 71.4
        },
        {
          "code": "SZ30-P9EBR94M",
          "usos": 1,
          "disc": 30000.0,
          "pct": 51.7
        },
        {
          "code": "SZ15-IFHG4SX0",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "BCI085-CB7T",
          "usos": 1,
          "disc": 25000.0,
          "pct": 88.1
        },
        {
          "code": "SZ10-4DZX623I",
          "usos": 1,
          "disc": 10000.0,
          "pct": 55.6
        },
        {
          "code": "SZ20-OV9QWUUS",
          "usos": 1,
          "disc": 20000.0,
          "pct": 44.5
        },
        {
          "code": "SZ-W9V9LPLE",
          "usos": 1,
          "disc": 4998.0,
          "pct": 25.0
        },
        {
          "code": "AJUSTECSC",
          "usos": 1,
          "disc": 31990.0,
          "pct": 38.1
        },
        {
          "code": "SZ30-YX34CBTJ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 47.6
        },
        {
          "code": "JCBNVDA14",
          "usos": 1,
          "disc": 2499.0,
          "pct": 10.0
        },
        {
          "code": "SZ15-YN7L4F2D",
          "usos": 1,
          "disc": 15000.0,
          "pct": 37.5
        },
        {
          "code": "SZ20-7P4H59D5",
          "usos": 1,
          "disc": 20000.0,
          "pct": 60.6
        },
        {
          "code": "SZ10-Q4JNYB5N",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.3
        },
        {
          "code": "CLUB-2K6FHPA",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-BOKDUS0",
          "usos": 1,
          "disc": 10598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-RNQB1MB",
          "usos": 1,
          "disc": 9998.0,
          "pct": 20.0
        },
        {
          "code": "SZ10-ND624CMT",
          "usos": 1,
          "disc": 10000.0,
          "pct": 40.0
        },
        {
          "code": "CLUB-5V9KGSG",
          "usos": 1,
          "disc": 16598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-EUWJTR7",
          "usos": 1,
          "disc": 12998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-KJQL8B5",
          "usos": 1,
          "disc": 12598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-I1Q70Q8",
          "usos": 1,
          "disc": 10198.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-S9MSBGAN",
          "usos": 1,
          "disc": 15000.0,
          "pct": 28.9
        },
        {
          "code": "CLUB-1K38FE6",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-PFRUCNZ",
          "usos": 1,
          "disc": 12796.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-FHJO2OV",
          "usos": 1,
          "disc": 11998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-AWB36WT",
          "usos": 1,
          "disc": 10598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-6XP323T",
          "usos": 1,
          "disc": 7998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-GDERFVH",
          "usos": 1,
          "disc": 8196.0,
          "pct": 20.0
        },
        {
          "code": "SZ-WIVWCWFM",
          "usos": 1,
          "disc": 14598.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-EGNUE1A",
          "usos": 1,
          "disc": 3798.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-LSLMKWX",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-IT4F33U",
          "usos": 1,
          "disc": 12998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-S65MCUL",
          "usos": 1,
          "disc": 8798.0,
          "pct": 20.0
        },
        {
          "code": "BCI084-G5WE",
          "usos": 1,
          "disc": 25000.0,
          "pct": 25.0
        },
        {
          "code": "CLUB-WJJ1E36",
          "usos": 1,
          "disc": 14192.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-G30XKI9",
          "usos": 1,
          "disc": 5798.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-WD79O94",
          "usos": 1,
          "disc": 9398.0,
          "pct": 20.0
        },
        {
          "code": "521892",
          "usos": 1,
          "disc": 20998.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-HKRENDV",
          "usos": 1,
          "disc": 11198.0,
          "pct": 20.0
        },
        {
          "code": "CLUB-B7HZ459",
          "usos": 1,
          "disc": 12398.0,
          "pct": 20.0
        },
        {
          "code": "374827",
          "usos": 1,
          "disc": 25595.0,
          "pct": 17.1
        },
        {
          "code": "CLUB-R2RWYZD",
          "usos": 1,
          "disc": 13398.0,
          "pct": 20.0
        },
        {
          "code": "SZ20-A95DKVO0",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "CLUB-G1YVNO1",
          "usos": 1,
          "disc": 4398.0,
          "pct": 20.0
        },
        {
          "code": "SZ15-QXIPSJUE",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "SZ15-5XPKBGWK",
          "usos": 1,
          "disc": 15000.0,
          "pct": 37.5
        },
        {
          "code": "SZ15-NM8L8UIL",
          "usos": 1,
          "disc": 15000.0,
          "pct": 30.8
        },
        {
          "code": "SZ10-BMEEZ3RF",
          "usos": 1,
          "disc": 10000.0,
          "pct": 38.5
        },
        {
          "code": "SZ20-AQ1G4RN5",
          "usos": 1,
          "disc": 20000.0,
          "pct": 78.4
        },
        {
          "code": "SZ30-03ESOSRC",
          "usos": 1,
          "disc": 30000.0,
          "pct": 38.0
        },
        {
          "code": "SZ-XEAESW7X",
          "usos": 1,
          "disc": 9749.0,
          "pct": 15.0
        },
        {
          "code": "SZ20-JBV9OX4L",
          "usos": 1,
          "disc": 20000.0,
          "pct": 23.7
        },
        {
          "code": "BCI063-L7DS",
          "usos": 1,
          "disc": 25000.0,
          "pct": 25.0
        },
        {
          "code": "SZ10-TK2YASZ4",
          "usos": 1,
          "disc": 10000.0,
          "pct": 23.3
        },
        {
          "code": "SZ15-HEA0LKAL",
          "usos": 1,
          "disc": 15000.0,
          "pct": 27.3
        },
        {
          "code": "SZ15-DQRASAZF",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "SZ10-PYHP85I5",
          "usos": 1,
          "disc": 10000.0,
          "pct": 28.6
        },
        {
          "code": "SZ30-R9XUOIDI",
          "usos": 1,
          "disc": 30000.0,
          "pct": 57.7
        },
        {
          "code": "SZ30-CZ0P82GB",
          "usos": 1,
          "disc": 30000.0,
          "pct": 81.2
        },
        {
          "code": "BCI066-TCWT",
          "usos": 1,
          "disc": 25000.0,
          "pct": 83.4
        },
        {
          "code": "SZ30-P6T2T8QA",
          "usos": 1,
          "disc": 30000.0,
          "pct": 46.2
        },
        {
          "code": "SZ20-JQY4GVBT",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "SZ20-ACNSKHCD",
          "usos": 1,
          "disc": 20000.0,
          "pct": 43.5
        },
        {
          "code": "SZ20-SWX4V7DD",
          "usos": 1,
          "disc": 20000.0,
          "pct": 25.0
        },
        {
          "code": "SZ-5GKLG3BZ",
          "usos": 1,
          "disc": 19998.0,
          "pct": 25.0
        },
        {
          "code": "SZ15-JJRB0ZT0",
          "usos": 1,
          "disc": 15000.0,
          "pct": 60.0
        },
        {
          "code": "SZ20-KV0F0OM6",
          "usos": 1,
          "disc": 20000.0,
          "pct": 74.1
        },
        {
          "code": "SZ15-54KEKWT2",
          "usos": 1,
          "disc": 15000.0,
          "pct": 50.0
        },
        {
          "code": "SZ15-TWNW8GAE",
          "usos": 1,
          "disc": 15000.0,
          "pct": 36.6
        },
        {
          "code": "SZ15-KGNCNGPF",
          "usos": 1,
          "disc": 15000.0,
          "pct": 44.2
        },
        {
          "code": "SZ30-BGZCSYQ2",
          "usos": 1,
          "disc": 30000.0,
          "pct": 71.5
        },
        {
          "code": "SZ20-GT6EHPIC",
          "usos": 1,
          "disc": 20000.0,
          "pct": 37.7
        },
        {
          "code": "SZ20-XXRJ1PMW",
          "usos": 1,
          "disc": 20000.0,
          "pct": 72.9
        },
        {
          "code": "SZ10-X78AX182",
          "usos": 1,
          "disc": 10000.0,
          "pct": 37.1
        },
        {
          "code": "SZ20-OCGYNDUB",
          "usos": 1,
          "disc": 20000.0,
          "pct": 50.0
        },
        {
          "code": "SZ10-6FWND397",
          "usos": 1,
          "disc": 10000.0,
          "pct": 25.0
        },
        {
          "code": "SZ30-RQYXO2BH",
          "usos": 1,
          "disc": 30000.0,
          "pct": 78.6
        },
        {
          "code": "SZ30-HHCKCVQZ",
          "usos": 1,
          "disc": 30000.0,
          "pct": 75.1
        }
      ],
      "shipping_detail": [
        {
          "method": "Click & Collect",
          "n": 11774,
          "pct": 45.6,
          "net": 527709452.0,
          "ticket": 44819.9,
          "avg_items": 1.7
        },
        {
          "method": "Santiago",
          "n": 6436,
          "pct": 25.0,
          "net": 359169134.0,
          "ticket": 55806.27,
          "avg_items": 2.0
        },
        {
          "method": "Programado",
          "n": 4197,
          "pct": 16.3,
          "net": 193613234.0,
          "ticket": 46131.34,
          "avg_items": 2.2
        },
        {
          "method": "Express",
          "n": 1069,
          "pct": 4.1,
          "net": 45062105.0,
          "ticket": 42153.51,
          "avg_items": 1.8
        },
        {
          "method": "Santiago",
          "n": 678,
          "pct": 2.6,
          "net": 37625291.0,
          "ticket": 55494.53,
          "avg_items": 0.9
        },
        {
          "method": "Valparaiso",
          "n": 531,
          "pct": 2.1,
          "net": 27145795.0,
          "ticket": 51122.02,
          "avg_items": 0.9
        },
        {
          "method": "Bio_Bio",
          "n": 451,
          "pct": 1.7,
          "net": 23823947.0,
          "ticket": 52824.72,
          "avg_items": 0.9
        },
        {
          "method": "Antofagasta",
          "n": 393,
          "pct": 1.5,
          "net": 22531534.0,
          "ticket": 57332.15,
          "avg_items": 0.8
        }
      ],
      "daily": [
        {
          "date": "2025-06-01",
          "orders": 1252,
          "net": 64860607.0,
          "discount": 0.0,
          "ticket": 51805.6
        },
        {
          "date": "2025-06-02",
          "orders": 8646,
          "net": 459632153.0,
          "discount": 0.0,
          "ticket": 53161.25
        },
        {
          "date": "2025-06-03",
          "orders": 4001,
          "net": 193798900.0,
          "discount": 0.0,
          "ticket": 48437.62
        },
        {
          "date": "2025-06-04",
          "orders": 4253,
          "net": 213188824.0,
          "discount": 0.0,
          "ticket": 50126.69
        },
        {
          "date": "2025-06-05",
          "orders": 978,
          "net": 42574638.0,
          "discount": 0.0,
          "ticket": 43532.35
        },
        {
          "date": "2025-06-06",
          "orders": 838,
          "net": 35673433.0,
          "discount": 0.0,
          "ticket": 42569.73
        },
        {
          "date": "2025-06-07",
          "orders": 589,
          "net": 24999563.0,
          "discount": 0.0,
          "ticket": 42444.08
        },
        {
          "date": "2025-06-08",
          "orders": 642,
          "net": 28035752.0,
          "discount": 0.0,
          "ticket": 43669.4
        },
        {
          "date": "2025-06-09",
          "orders": 642,
          "net": 28594003.0,
          "discount": 0.0,
          "ticket": 44538.95
        },
        {
          "date": "2025-06-10",
          "orders": 683,
          "net": 38293580.0,
          "discount": 0.0,
          "ticket": 56066.73
        },
        {
          "date": "2025-06-11",
          "orders": 717,
          "net": 36608494.0,
          "discount": 0.0,
          "ticket": 51057.87
        },
        {
          "date": "2025-06-12",
          "orders": 669,
          "net": 36482285.0,
          "discount": 0.0,
          "ticket": 54532.56
        },
        {
          "date": "2025-06-13",
          "orders": 776,
          "net": 34091054.0,
          "discount": 0.0,
          "ticket": 43931.77
        },
        {
          "date": "2025-06-14",
          "orders": 533,
          "net": 22748343.0,
          "discount": 0.0,
          "ticket": 42679.82
        },
        {
          "date": "2025-06-15",
          "orders": 573,
          "net": 24762582.0,
          "discount": 0.0,
          "ticket": 43215.68
        }
      ],
      "meta": {
        "store": "SuperZoo Chile",
        "currency": "CLP",
        "symbol": "$",
        "periodo": "01/06/2025 – 15/06/2025"
      }
    },
    "deltas": {
      "orders": 7.9,
      "net": 5.7,
      "ticket": -2.0,
      "discount_pct": 1.1,
      "avg_items": -5.6
    },
    "store": "SuperZoo Chile",
    "symbol": "$",
    "currency": "CLP"
  }
};
