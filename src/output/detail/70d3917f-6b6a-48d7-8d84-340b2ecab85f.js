export default {
  "completion": {
    "percentage": 62,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 100,
    "businessSupport": 69,
    "dataManagement": 13,
    "dependencies": 50,
    "information": 33,
    "projects": 100,
    "robots": 100,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Jacob",
      "lastName": "Rydgård",
      "displayName": "Jacob Rydgård",
      "email": "jacob.rydgard@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Alexander",
      "lastName": "Wedin",
      "displayName": "Alexander Wedin",
      "email": "alexander.wedin@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Jonathan",
      "lastName": "Cartaxo",
      "displayName": "Jonathan Cartaxo",
      "email": "jonathan.cartaxo@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Staffan",
      "lastName": "William-Olsson",
      "displayName": "Staffan William-Olsson",
      "email": "staffan.william.olsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Andreas",
      "lastName": "Holmgren",
      "displayName": "Andreas Holmgren",
      "email": "andreas.holmgren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Albert",
      "lastName": "Isik",
      "displayName": "Albert Isik",
      "email": "albert.isik@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Ajith",
      "lastName": "Rajendran",
      "displayName": "Ajith Rajendran",
      "email": "ajith.rajendran@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "PROMO TCT",
    "description": "PROMO installation for Powertrain project in China. Process data acquisition ",
    "lifecycle": {
      "asString": "phaseIn",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-12-05",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2022-12-05",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2024-08-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2035-12-31",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2035-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "15dff6dc-c0db-47c0-9ac1-e0a03db5fa2c",
        "displayName": "PROMO",
        "description": "The application is doing Production monitoring and visualization for the COPO PLC and the SCADA layer.",
        "type": "Application",
        "tags": [
          "Manufacturing",
          "Significant",
          "Not China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "29fcfb42-4fc2-4ea8-9a51-d1843df62b00",
      "displayName": "SAS Industrial Project - China / Powertrain Assembly IT for China",
      "fullName": "Powertrain Assembly IT for China",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-08-14"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Alexander Wedin",
          "email": "alexander.wedin@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jonathan Cartaxo",
          "email": "jonathan.cartaxo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Fredrik Blomstedt",
          "email": "fredrik.blomstedt@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Eddie Löwenborg Forsberg",
          "email": "eddie.lowenborg.forsberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jacob Rydgård",
          "email": "jacob.rydgard@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anders Kardeskog",
          "email": "anders.kardeskog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "RESPONSIBLE"
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
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "no",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "3168a54c-14c0-40ce-8ec1-7729879360ca",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Manufacturing Quality Assurance",
        "description": "Ability to execute activities to \n− find deviations in assembly, part manufacturing or raw material execution processes by quality follow up on product, function and process\n− correct deviations by scrapping or adjusting parts or complete assemblies\n− secure that deviations don’t re-occur",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-11"
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
        "id": "d8d6b681-0e15-4707-ab24-5e69c848abc7",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Part Manufacturing",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "6073a9cc-7796-4295-b221-fdd0f9a006d4",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFB - SCADA",
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
        "id": "aedc2184-4166-4faa-a68d-def5d894f71d",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFH - SCADA Implementation",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-27"
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
    "interfaceConsume": [],
    "interfaceProvide": [
      {
        "id": "60e377b1-da21-4074-b2b0-b27e2d8e50e6",
        "description": null,
        "displayName": "PROMO / PROMO TCT_dataLakeInterface",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8c13e88f-4b28-434a-9b4d-c5154806f0e8",
        "description": null,
        "displayName": "PROMO / PROMO TCT_DIDRIKInterface",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7675d313-f41a-4fe1-afab-d8ddbcbbdc04",
        "description": null,
        "displayName": "PROMO / PROMO TCT_MaximoInterface",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "8cb674a4-1f6b-49af-b997-7d95c48e4405",
          "displayName": "Ignition",
          "category": "software",
          "description": "Common application for Product Requirement, Indicator, Devices, Equipment.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-15"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCT/VEI/INF",
    "ChinaDesign": "INF/TTPT",
    "ChinaSourcing": "VEI",
    "ChinaPaying": "TCF",
    "ChinaImplementation": "IN/TTPT",
    "Chinaverification": "IN/TTPT",
    "ChinaOperations": "TTPT"
  }
}