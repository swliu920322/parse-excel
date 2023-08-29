export default {
  "completion": {
    "percentage": 79,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 85,
    "dataManagement": 25,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 61
  },
  "subscriptions": [
    {
      "firstName": "Anton",
      "lastName": "Smith",
      "displayName": "Anton Smith",
      "email": "anton.smith@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
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
      "firstName": "Conny",
      "lastName": "Friborg",
      "displayName": "Conny Friborg",
      "email": "conny.friborg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "COLO",
    "description": "Connected Logistics\n\nHandshake information” between individual AGV and Line stations/drop of station\n   - AGV in position\n   - Clear to move in\n   - Pallet delivered \nInterface for Fleet management information\nInterface for order of empty pallet\nInterface for replenishment triggers\nInterface for building signals such a fire alarm/evacuation ",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2023-01-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-03-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-08-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2033-08-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2033-08-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "b003548e-e1b4-41d0-9cf2-192f8cb5f98b",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Connected Logistics\n\nHandshake information” between individual AGV and Line stations/drop of station\n   - AGV in position\n   - Clear to move in\n   - Pallet delivered \nInterface for Fleet management information\nInterface for order of empty pallet\nInterface for replenishment triggers\nInterface for building signals such a fire alarm/evacuation ",
        "displayName": "COLO / COLO - CDE",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "bb8d2582-e150-481a-ae58-17c5e59f6d95",
      "displayName": "Battery factory (B228)",
      "fullName": "Battery factory (B228)",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Björn Lindstenz",
          "email": "bjorn.lindstenz@scania.com",
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
        "id": "58b0d5f2-b93a-408c-a538-958566ff0df9",
        "displayName": "H. Logistics and Warehouse Management / Transport Management / Transport Execution",
        "description": "Ability to transport things eg internally between Scania units, lines or partners. Note, the transport laboratory resides in Service Operations capability.\n",
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
        "id": "cfd4d7e4-83da-44e5-8e0b-0f100f079c76",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Material Handling",
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
        "id": "8c686c3a-fb5c-496a-a0f6-cdaa064984dc",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production / ME - Battery Production",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-01"
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
    "interfaceProvide": []
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
        },
        {
          "id": "32962229-0e42-49ac-94cd-5e8fe48f3fb5",
          "displayName": "Microsoft Windows Server Standard 2019",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2018-11-13"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-01-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2029-01-09"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
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