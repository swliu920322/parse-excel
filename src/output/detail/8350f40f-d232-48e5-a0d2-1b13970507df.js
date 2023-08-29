export default {
  "completion": {
    "percentage": 90,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 100,
    "dataManagement": 99,
    "dependencies": 100,
    "information": 100,
    "projects": 100,
    "robots": 100,
    "sourcing": 100
  },
  "subscriptions": [
    {
      "firstName": "Fredrik",
      "lastName": "Thunberg",
      "displayName": "Fredrik Thunberg",
      "email": "fredrik.thunberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Ronnie",
      "lastName": "Viklund",
      "displayName": "Ronnie Viklund",
      "email": "ronnie.viklund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "torbjorn.grantz@scania.com",
      "email": "torbjorn.grantz@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Roel",
      "lastName": "ten Kleij",
      "displayName": "Roel ten Kleij",
      "email": "Roel.ten_Kleij@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "David",
      "lastName": "Järbrink",
      "displayName": "David Järbrink",
      "email": "david.jarbrink@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Reena",
      "lastName": "Pathak",
      "displayName": "Reena Pathak",
      "email": "reena.pathak@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Ola",
      "lastName": "Appelkvist",
      "displayName": "Ola Appelkvist",
      "email": "ola.appelkvist@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "ali.erdem@scania.com",
      "email": "ali.erdem@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    }
  ],
  "information": {
    "name": "MIC",
    "description": "Customs Declarations Application. Need to integrate to an additional application to handle other customs issues, ex. intrastat and more.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-21",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2025-02-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Customs operation",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "677109e2-6c66-41df-b56a-4727016d7646",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Subsystem to MIC (Customs application) to capture Country of origin for all our Parts by the suppliers.",
        "displayName": "MIC 8.3 / OCS 8",
        "type": "Application",
        "lifecycle": {
          "asString": "drpCompleted",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2023-01-01"
            },
            {
              "phase": "drpReview",
              "startDate": "2024-01-01"
            }
          ]
        },
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "108d8c11-471e-4c71-8651-38f1f5ef23bb",
        "activeFrom": "2015-01-01",
        "activeUntil": "2028-01-01",
        "description": "Application used for MIC in order to fetch a price before an xml file is sent to MIC",
        "displayName": "MIC 8.3 / PriceRunner",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "853d51b5-5c70-4eee-b0a1-b97dce559993",
      "displayName": "Finance Core (IEB)",
      "fullName": "Finance Core (IEB)",
      "tags": [],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2019-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2019-01-01"
          },
          {
            "phase": "active",
            "startDate": "2020-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2025-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anupam Goyal",
          "email": "anupam.goyal@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Antonia Sandoval",
          "email": "antonia.sandoval@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Fredrik Thunberg",
          "email": "fredrik.thunberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pia Pasanen",
          "email": "pia.pasanen@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "d8024441-359c-4481-9a81-49f0376f5d77",
      "displayName": "Industrial ERP Backbone / IEB R23.1 / FC MVP1",
      "fullName": "FC MVP1",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "phaseIn",
            "startDate": "2022-04-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2023-01-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Sven Daniëls",
          "email": "sven.daniels@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "d9922fc7-ff4a-4e9f-8072-993804d70a23",
      "displayName": "Industrial ERP Backbone / IEB R24.2",
      "fullName": "IEB R24.2",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "648060b2-afac-409e-8ac4-31c85018e041",
      "displayName": "SAS Industrial Project - China / China Logistics IT",
      "fullName": "China Logistics IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tove Norén",
          "email": "tove.noren@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Sivamani Karuppasamy",
          "email": "sivamani.karuppasamy@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Tommy Dahlgren",
          "email": "tommy.dahlgren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Renato Colado",
          "email": "Renato.Colado@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Filip Eriksson",
          "email": "filip.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Marcelo Colovato",
          "email": "marcelo.colovato@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Burak Gavgacioglu",
          "email": "burak.gavgacioglu@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Samuel Suderbys",
          "email": "samuel.suderbys@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henrik Boman",
          "email": "henrik.boman@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "ad1685a8-17d0-4575-bf58-5024349594c1",
      "displayName": "SAS Industrial Project - China / China Logistics IT / China Inbound",
      "fullName": "China Inbound",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tove Norén",
          "email": "tove.noren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Rick Slot",
          "email": "rick.slot@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jasper Jansen",
          "email": "jasper.jansen@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Rik Teunissen",
          "email": "rik.teunissen@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Filip Eriksson",
          "email": "filip.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Wagner Oliveira",
          "email": "Wagner.Oliveira@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henri Petäjäjärvi",
          "email": "henri.petajajarvi@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "ec543e79-8f68-4828-9366-506ce032509b",
      "displayName": "SAS Industrial Project - China / China Logistics IT / China Outbound",
      "fullName": "China Outbound",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tove Norén",
          "email": "tove.noren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Zora Berglund",
          "email": "zora.berglund@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Archit Tripathi",
          "email": "archit.tripathi@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marika Saarela",
          "email": "marika.saarela@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "158f10e7-7043-49c8-b959-0886a6e3d0eb",
      "displayName": "SAS Industrial Project - China / SAS Final Assembly IT",
      "fullName": "SAS Final Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Frédéric Anquetil",
          "email": "Frederic.Anquetil@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Douglas Mitsuru Higa",
          "email": "Douglas.Higa@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Thomas Sahleström",
          "email": "thomas.sahlestrom@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Arthur Takaki",
          "email": "arthur.takaki@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pallavi Shrotri",
          "email": "pallavi.shrotri@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pekka Palonen",
          "email": "pekka.palonen@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2020-03-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2023-03-01",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2022-01-01",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2023-01-01",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "1f3cc3a9-65b6-4188-bd74-0547277a02a4",
        "displayName": "H. Logistics and Warehouse Management / Transport Management / Transport and Cross Border Documentation Management",
        "description": "Ability to manage compliance documentation for transport, export and import of products and documentation for managing transports with carrier and partners. This also includes managing of custom fees, managing of export and import reporting to authorities, e.g. Intrastat. Documentation can be electronic like messages to custom authorities, customers or carriers and physical like paper and labels that has to follow goods transported.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2018-09-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "c69f1814-9f8f-405d-b113-12aec83d35c0",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Inbound Inventory Handling",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2018-09-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "a023fd29-c465-49fa-965d-f7734f0fb5bc",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Internal Inventory Handling",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2018-09-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "dfdb8e91-e5ea-49ec-b17e-0a39e79cbc7d",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Outbound Inventory Handling",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2018-09-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "6a4b2bfc-6418-451f-b5f2-45ba20f1ecbf",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Packaging Management",
        "description": "The required processes to ship packaging to relevant organizations (suppliers mostly). Storage, sorting, recycling, breakdown, ordering, shipping and material planning for packaging numbers",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2018-09-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      }
    ],
    "processes": [
      {
        "id": "546d9ac7-5de0-4b9a-9545-75504ee358fd",
        "displayName": "Supporting processes / Finance Process / Customs & Export Control",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2020-01-22"
            },
            {
              "phase": "phaseIn",
              "startDate": "2020-01-22"
            },
            {
              "phase": "active",
              "startDate": "2020-01-22"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "d1a874c5-185b-4c18-9325-674d4efa6822",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZA - Finance IT / IZAE - Corporate Control IT 2",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-04-26"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "1b00f4b6-57df-4807-9fb6-288b3adc88f0",
        "displayName": "Scania - Scania CV AB / P_FB - Finance and Business Control / ZT - Taxes and Customs / ZTC - Customs",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-04-26"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "b8e25aad-1c3c-4d4f-bb15-0c225815e06f",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production / MA - Scania Production Angers SAS",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-04-26"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "aa2b5483-c783-4f50-9cf1-8ab1d83c8d0c",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / O - Logistics / ON - Logistics Centre Netherlands",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-04"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "454af589-74ee-4bb9-8dcb-7e57ffe66b8f",
        "description": "Main level for an outgoing dept addressed to a bill to party organization for one or more ordered and delivered product or service. This is the official and legal debt document from a supplier issuing organization to a buyer invoiced to customer organization. Customer represents here all buyer parties, i.e. not only the real end-customers but also for example dealers and internal business units.  A customer invoice belongs to a certain Invoice Type, for example different kind of externally or internally invoices, which sets different requirements on the format and Invoice Layout.  Customer invoice can have several Customer Invoice Lines and each line can have several Invoice Row Items.",
        "displayName": "Financial Control Domain / Invoice Entity / Customer Invoice",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      },
      {
        "id": "a6e92b3d-a3be-4623-8205-dab8e08c4a3e",
        "description": null,
        "displayName": "Financial Control Domain / Invoice Entity / Supplier Invoice",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      },
      {
        "id": "83225ac2-5644-4dbb-9454-b2729e117018",
        "description": null,
        "displayName": "Financial Reports Domain / Customs Declaration Entity",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-04"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      },
      {
        "id": "80bfd2e8-1b80-44cd-b41f-d8a6902e0e03",
        "description": "Represents the underlying composite Individual Component Composite Structure, building up bundled Individual Components.",
        "displayName": "Individual Vehicle and Engine Domain / Product As Individual Entity / Part",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      },
      {
        "id": "945ede33-0dfe-406f-a318-846621c7de0d",
        "description": "Master Data Source SSIP, Scania Supplier Information Portal  (limited to Automotive Parts Suppliers) Represents Scania suppliers independent if they provide Scania with components within resources and hardware, services and software or work efforts. One specific type of supplier are bodybuilders that supply Scania and customers with coaches and bodywork to complete Product As Individuals upon Scania basic chassis products.  Supplier is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Supplier",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      }
    ],
    "interfaceConsume": [
      {
        "id": "0f98a30a-2dcd-4e20-9520-d7f1b7b745ca",
        "description": null,
        "displayName": "iCUST_Export Declaration Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4113da8c-898a-4d5b-8539-fcd2d1babfb1",
        "description": null,
        "displayName": "iCUST_Intrastat Dispatch",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "393d736b-7565-46f4-ba6a-8bece7469891",
        "description": "Data: Goods Received Info, SCIS281_PriceRunner_CustomsMsg/Spec\n",
        "displayName": "MIC 8.3 / PriceRunner_Goods Received Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "edbc9dca-0959-4e68-be8d-e65fc1904b6c",
        "description": null,
        "displayName": "OAS Platform / OAS_New Parts",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fd316ac8-6ee3-48f5-bc32-74e19c1d64f3",
        "description": "Sending Contract SCCO4429\nSCIS220_SL-AROS_CustomDeclaration_MIC\n",
        "displayName": "Oracle Financials (EBS) / eBS_AP_Solicitation Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "21cb83d6-0362-4e54-afd2-0af537a70f32",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_Export_Declaration_Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bf0a7fb4-0b0c-4b86-9bef-310d370a0d64",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_Export_Declaration_Request_2",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a34ae3e8-2977-4970-82ed-645f920b7acf",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_Intrastat Arrival",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "38022872-f543-43db-b81a-3ac5238f67a1",
        "description": "Sending POD SIAM Database\nSending contract SCCO5953\nSCIS220_SAP-PO_CustomDeclaration_MIC",
        "displayName": "SALSA (SAP Spare parts)_Intrastat_Dispatch",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-31"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "14d948cb-f021-4096-ad05-248f6b80c1c0",
        "description": null,
        "displayName": "Scania Supplier Information Portal_Suppliers",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a2c94acf-c0a2-4c7c-ac7d-08abfe7df89d",
        "description": "SCIS282_EPIC_DECLARATIONS_MIC-CUST, Data: Import Export Declaration Response\n",
        "displayName": "SE Customs_Import_Export_Declaration_Response",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "24362ffa-31c3-4af1-b2c9-bfd2cea801d4",
        "description": "SCIS282_EPIC_DECLARATIONS_MIC-CUST, Data: Simplified Declarations\n",
        "displayName": "SE Customs_Simplified Declarations",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cb06949a-df91-42ee-9f1b-fd877868b8c4",
        "description": null,
        "displayName": "SE Customs_Taric_Codes",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fae3fc3c-91ac-46ad-bb7a-58d5ae3daa89",
        "description": "Sending POD SIAM Database\nSending contract SCCO2275\nSCIS220_SL-AROS_CustomsDeclaration_MIC",
        "displayName": "SIFO_Export_Declaration_MIC",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-31"
            },
            {
              "phase": "endOfLife",
              "startDate": "2024-12-31"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "c4d6ac6b-1a97-4ff6-9eee-168bc629beb0",
        "description": "Data: Intrastat Arrival\nSending POD SIAM DAtabase\nSending contract SCCO4429\nSCIS220 SL-AROS_CustomerDeclarations_MIC\nData: Intrastat Arrival",
        "displayName": "SIFO_Intrastat Arrival",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-31"
            },
            {
              "phase": "endOfLife",
              "startDate": "2024-12-31"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "9ab3899d-379b-44a6-9666-50631a1e23bb",
        "description": null,
        "displayName": "TESTiT_New Parts",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "434fb7e1-d96f-44a6-9ca0-8bcb76fdd090",
        "description": "Sending side\nRecieving: SCCO3717",
        "displayName": "MIC 8.3_Customs Information",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a7f61010-3153-49cc-b244-fc421d62e253",
        "description": null,
        "displayName": "MIC 8.3_Export_Declaration_Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d245ac93-8a02-4d1d-a82e-e8b5b221b4d4",
        "description": "Data: Import Export Declaration Message, SCIS282_EPIC_DECLARATIONS_MIC-CUST\n",
        "displayName": "MIC 8.3_Import Export Declaration Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d7e555c5-48f6-4b45-ad24-b67b2c290336",
        "description": null,
        "displayName": "MIC 8.3_Import_Declaration_Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3a892744-7348-4b31-923f-7c53e5732d33",
        "description": null,
        "displayName": "MIC 8.3_Import_Export_Declaration_Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "78133163-c4ad-4dcd-89f6-07522d328f6b",
        "description": "SCIS783_MIC_MRNNumber_Soleil",
        "displayName": "MIC 8.3_MRN",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5e45494a-daf3-4083-9376-0254ab4e549d",
        "description": "SCIS624_PartService",
        "displayName": "MIC 8.3_Parts Service",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b48eea7f-45a2-4ce3-ae9d-b8aad930fa1c",
        "description": "SCIS693_EmailNotificationService, Data: SCB Report\n",
        "displayName": "MIC 8.3_SCB Report",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cb15d04d-4b1c-4e9a-9141-d0dfbf7dd639",
        "description": null,
        "displayName": "MIC 8.3_Taric code/COO",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "1afdcab7-5e30-45fd-88af-3f82e154fceb",
          "displayName": "MIC Cust n/a",
          "category": "software",
          "description": "MIC-CUST offers a consistent customs (self) filing solution on one single technical platform for real Global Customs Management. This gives to not only the opportunity for automatic electronic import and export clearance processes incl. special customs regimes and inventory management.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2009-01-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "127d7108-b3fd-462e-a6a1-da1009255936",
          "displayName": "Oracle Oracle Database Enterprise 19c",
          "category": "software",
          "description": "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-14"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-04-30"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-04-30"
              }
            ]
          },
          "tags": [
            "China affected",
            "A good example",
            "From SCT"
          ]
        },
        {
          "id": "daca585c-cab4-4b83-be0c-7c1fd4ed1a0b",
          "displayName": "Scania / Scania IT SEIP",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "phaseOut",
                "startDate": "2020-12-31"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-01-01"
              }
            ]
          },
          "tags": [
            "Not China affected",
            "Not available from China"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "N/A",
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "",
    "ChinaDesign": "",
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "",
    "Chinaverification": "",
    "ChinaOperations": ""
  }
}