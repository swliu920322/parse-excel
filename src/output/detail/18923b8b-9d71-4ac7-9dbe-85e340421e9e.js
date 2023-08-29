export default {
  "completion": {
    "percentage": 37,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 75,
    "dataManagement": 25,
    "dependencies": 50,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 7
  },
  "subscriptions": [
    {
      "firstName": "Ahmer",
      "lastName": "Shaikh",
      "displayName": "Ahmer Shaikh",
      "email": "ahmer.shaikh@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Jonathan",
      "lastName": "Sterky",
      "displayName": "Jonathan Sterky",
      "email": "jonathan.sterky@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Åsa",
      "lastName": "Ångman",
      "displayName": "Åsa Ångman",
      "email": "asa.angman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Tomasz",
      "lastName": "Czyz",
      "displayName": "Tomasz Czyz",
      "email": "tomasz.czyz@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Pontus",
      "lastName": "Ekehult",
      "displayName": "Pontus Ekehult",
      "email": "pontus.ekehult@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Dávid",
      "lastName": "Takács",
      "displayName": "Dávid Takács",
      "email": "david.takacs@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Elin",
      "lastName": "Desmo",
      "displayName": "Elin Desmo",
      "email": "elin.desmo@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Nadja",
      "lastName": "Pirzadeh",
      "displayName": "Nadja Pirzadeh",
      "email": "nadja.pirzadeh@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "PII",
    "description": "This consists of several micro services applications that are hosted in AWS.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "6e87f05d-137b-47ab-b595-682dde82edde",
        "displayName": "CHIN",
        "description": "CHIN (Chassis Information system) is the system for Scania to handle information about trucks, buses and I&M engines.",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "d95482be-c823-4403-b3aa-c87cb10aa689",
        "displayName": "CVSS",
        "description": "CVSS is a database keeping track of which bodywork is mounted on a chassis. CVSS also have information about bodywork such as; spare part assortment, standard time, service manual and articles. ",
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "c3c5e79f-78fe-433a-9ea2-29fcfa28d6f4",
        "activeFrom": "2022-10-04",
        "activeUntil": null,
        "description": null,
        "displayName": "PII / PIIFPC",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "51d37f43-81f7-4f01-9bde-d1281518c3c5",
      "displayName": "SAS Industrial Project - China",
      "fullName": "SAS Industrial Project - China",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2021-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "bbf7e857-fe0a-4301-83c6-fe6b22b280c4",
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
    },
    {
      "id": "7dd14edb-e5d7-44b0-b0b4-1874d1ae29c3",
      "displayName": "UNECE / Software Update Management System (SUMS)",
      "fullName": "Software Update Management System (SUMS)",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Eder Silva",
          "email": "Eder.Silva@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Charlotte Jalkebo",
          "email": "Charlotte.Jalkebo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "David Grandell",
          "email": "David.Grandell@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "098381b7-d25e-40e8-bf19-7cf55659c744",
        "displayName": "E. Solution Development & Optimization / Transport Solution Design / Design Embedded and Electronics Systems",
        "description": "Design and develop embedded systems, including software and hardware. Designing embedded & electrical schematics, cable harnesses including chassis installation, connectors and passive elements.",
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
        "id": "1a205f98-1471-47e2-87fb-fce14d936844",
        "displayName": "Product development / R&D Process / Embedded System process / 11 Update",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "baa410b8-4bdb-4e68-8f1f-b045255e7fca",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRB - R&D Methods & Products / IRBI - Development of Product Individuals, Product Adaptations",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-09-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "0095c008-e1af-4ac4-a8bb-ac935329077c",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYS - Vehicle Service Information / EYSP - Service products, Development and Test / EYSPI - Coordination of Product Individual and Product Adaptations",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-07-14"
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
    "objects": [],
    "interfaceConsume": [
      {
        "id": "faac3a04-e4d3-40ea-b28e-a2a475eddeb5",
        "description": "Web Service API for MONA Incoming requests",
        "displayName": "MONA Systems_MIPSWS IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "87fb9adc-04d1-4b35-8260-92abfe30a891",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_create_smcr_specification_v1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-12-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "fa2e79ef-e01d-4561-a3cf-8ca1076b1cfd",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_designstructure_v2 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-04"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "5116aac4-5436-482c-a910-b9ba2f0f2f52",
        "description": null,
        "displayName": "PII_PIIBus",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cd9d1cfc-c9b5-4814-bb79-9d8215e6e758",
        "description": null,
        "displayName": "PII_PIICableList",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "6f514d18-2714-4a69-934f-f7a2dfbb0947",
        "description": null,
        "displayName": "PII_PIICertificates",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "44693887-4d90-4ef3-adb7-38f94c04521c",
        "description": null,
        "displayName": "PII_PIIChangeOrders",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c06cd337-3a3e-4cdf-bd39-59ba053414c7",
        "description": null,
        "displayName": "PII_PIIDocuments",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3d4e2ba1-a7e3-4843-994c-81727caeaf83",
        "description": null,
        "displayName": "PII_PIIECU",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4d7b0de5-5eed-46a3-8e09-ac239f697813",
        "description": null,
        "displayName": "PII_PIIEngine",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8fa8f9de-e9bb-4640-9e60-5a63afc1bbb7",
        "description": null,
        "displayName": "PII_PIIEquipment",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "71d0af16-c983-46b5-8ff8-40ba322808bc",
        "description": null,
        "displayName": "PII_PIIImages",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bb94fd2d-daa1-4582-95e4-55b099f8ec8a",
        "description": null,
        "displayName": "PII_PIIOperationalInformation",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e7b03e9f-5b72-400b-b32b-3139d0ba4bbe",
        "description": null,
        "displayName": "PII_PIISOPS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a7d89947-9ccb-469e-b966-f6d01b4bb50b",
        "description": null,
        "displayName": "PII_PIITrailer",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "873524a3-7d05-4107-84f0-55151b42f5ac",
        "description": null,
        "displayName": "PII_PIITruck",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e26f0269-edae-417d-a0ab-361da7f18d62",
        "description": null,
        "displayName": "PII_PIIUF",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "deb95830-71d2-46f3-a356-2d197e3652c6",
        "description": null,
        "displayName": "PII_PIIVCBIsolation",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8d7f66b9-9853-4348-a45c-e6f8447133a7",
        "description": null,
        "displayName": "PII_PIIXPC",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCcompleted",
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