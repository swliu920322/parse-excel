export default {
  "completion": {
    "percentage": 62,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 100,
    "businessSupport": 63,
    "dataManagement": 13,
    "dependencies": 50,
    "information": 33,
    "projects": 100,
    "robots": 100,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Jacob",
      "lastName": "Rydgård",
      "displayName": "Jacob Rydgård",
      "email": "jacob.rydgard@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Staffan",
      "lastName": "William-Olsson",
      "displayName": "Staffan William-Olsson",
      "email": "staffan.william.olsson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Developer"
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
      "firstName": "Albert",
      "lastName": "Isik",
      "displayName": "Albert Isik",
      "email": "albert.isik@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Henrik",
      "lastName": "Bylund",
      "displayName": "Henrik Bylund",
      "email": "henrik.bylund@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
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
    }
  ],
  "information": {
    "name": "DIDRIK TCT",
    "description": "Installation project of Didrik in the China Powertrain project. ",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-12-05",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-08-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-08-01",
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
        "id": "0666aea8-e732-4e97-a4c7-0a7c80507928",
        "displayName": "DIDRIK",
        "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "type": "Application",
        "tags": [
          "Critical",
          "Manufacturing",
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "e58a3a98-4eba-4e7d-8517-0304ccd47c94",
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
      "businessCriticality": "missionCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-05-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-05-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "745e49ba-4291-419c-b83f-68577a478047",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Assembly Execution",
        "description": "Ability to execute activities: \n−for assembly and sub-assemblies of components and final assembly of product for delivery to customer. Including different joining techniques; screwing, welding, riveting, bonding etc.\n−for other assembly tasks such as painting, filling and lubrication of the product \n−for data configuration of electronic control units (ECU;s)\n−all activities are done according to product specification and prepared production description\n",
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
      },
      {
        "id": "e3f4d1a3-d87c-439f-92bd-a19a22d018df",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Part Manufacturing Execution",
        "description": "Ability to execute activities for part manufacturing including cutting processing (turning or milling), hardening, pressing, surface treatment  and additive manufacturing according to a part design specification.",
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
        "id": "c3952adb-95a6-4855-8617-8f5717ced0b3",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Assembly",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
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
      },
      {
        "id": "550eb54c-55be-456f-ba7f-5c348a86008d",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / T - Industrial Operations Asia / TC - Production and Logistics / TCT - Transmission",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-12"
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
        "id": "448773e9-ae5a-4cb3-853e-9578876e79d2",
        "description": null,
        "displayName": "DIDRIK / DIDRIK TCT_EBBAComInterface",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2023-02-22"
            },
            {
              "phase": "phaseIn",
              "startDate": "2023-02-22"
            },
            {
              "phase": "active",
              "startDate": "2023-02-22"
            },
            {
              "phase": "phaseOut",
              "startDate": "2032-02-01"
            },
            {
              "phase": "endOfLife",
              "startDate": "2033-02-01"
            }
          ]
        },
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
    "ChinaITlegalCompliance": "NA",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCT/TCE / VEIS",
    "ChinaDesign": "INFH / INFB / TTPP",
    "ChinaSourcing": "INFH / INFB / TTPP (Hardware TCT&TCE)",
    "ChinaPaying": "INFB - VEI",
    "ChinaImplementation": "TTPP / INFH / INFB",
    "Chinaverification": "TCT/TCE / INFH / INFB",
    "ChinaOperations": "TTPP"
  }
}