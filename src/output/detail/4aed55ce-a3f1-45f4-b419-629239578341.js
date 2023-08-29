export default {
  "completion": {
    "percentage": 38,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 53,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 50
  },
  "subscriptions": [
    {
      "firstName": "Ulf",
      "lastName": "Elveberg",
      "displayName": "Ulf Elveberg",
      "email": "ulf.elveberg@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Ulf",
      "lastName": "Löfström",
      "displayName": "Ulf Löfström",
      "email": "ulf.lofstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "SCOM-CHINA",
    "description": "Monitoring of servers and applications in China",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2023-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-04-01",
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
    "children": []
  },
  "initiatives": [
    {
      "id": "a49bd791-df09-42b3-84af-a07764c96520",
      "displayName": "SAS Industrial Project - China / China RnD PrIT",
      "fullName": "China RnD PrIT",
      "tags": [
        "China affected"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Erik Eriksson",
          "email": "erik.x.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcus Gustafsson",
          "email": "marcus_x.gustafsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "e9f138aa-f0fe-4362-8561-9073646bb9cd",
        "displayName": "P. Information Technology and Data Management / IT Operations Management / Data Center Operations Management",
        "description": "The ability to operate infrastructure.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-17"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "4bdf2c32-f5dc-4889-b75c-90be667e9c38",
        "displayName": "Supporting processes / IT",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "ab96c57d-1d05-4f21-8232-1af40e4e5eb3",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUA - Hosting Services / IUAM - Monitoring & Configuration",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-03"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "3ec8a7b4-ffc9-44c0-ae0b-c73ab5dea6ac",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU China / CN1 - Scania Sales China / CNFA - Finance & Administration / CNFAC - IT",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-29"
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
          "id": "621fb5e1-d8e5-449f-a8d2-9f10e45d9e1e",
          "displayName": "Microsoft SQL Server Enterprise 2019",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2019-08-21"
              },
              {
                "phase": "active",
                "startDate": "2019-11-04"
              },
              {
                "phase": "phaseOut",
                "startDate": "2025-02-28"
              },
              {
                "phase": "endOfLife",
                "startDate": "2030-01-08"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
          ]
        },
        {
          "id": "4bf3de4e-d535-4a56-9d67-153a30575e65",
          "displayName": "Microsoft Windows Server Standard 2022",
          "category": "software",
          "description": "Windows Server 2022 introduces advanced multi-layer security, hybrid capabilities with Azure, and a flexible application platform. Windows Server 2022 improves hybrid server management with significantly improved VM management, an enhanced event viewer, and many more new capabilities in Windows Admin Center.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2021-03-02"
              },
              {
                "phase": "active",
                "startDate": "2021-08-18"
              },
              {
                "phase": "phaseOut",
                "startDate": "2026-10-13"
              },
              {
                "phase": "endOfLife",
                "startDate": "2031-10-14"
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
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
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