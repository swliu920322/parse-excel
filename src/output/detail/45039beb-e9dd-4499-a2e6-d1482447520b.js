export default {
  "completion": {
    "percentage": 31,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Robin",
      "lastName": "Wikingsson",
      "displayName": "Robin Wikingsson",
      "email": "robin.wikingsson@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Jennifer",
      "lastName": "Huang",
      "displayName": "Jennifer Huang",
      "email": "jennifer.huang@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "CSS",
    "description": "Search Engine for InLine, Reflex, NOE, SSP and PreSales and body bulider portals.\r\n\r\nIndexing information from:\r\n- InLine\r\n- InLineWiki\r\n- TeamRoom\r\n- TIL (Standards documents and bodybuilder)\r\n- SSP\r\n- NOE (comOn)\r\n- SiteVision (Reflex)",
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
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "88505516-8fdd-4570-899d-a6ffd80b8338",
        "displayName": "Reflex",
        "description": "Scania Group Intranet built on SiteVision, CSS, TeamRoom, Connect and Dream Broker.",
        "type": "Application",
        "tags": [
          "PII",
          "China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "administrativeService",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-01-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-01-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "875532c3-30d6-4d24-8d8e-b709710d0a62",
        "displayName": "P. Information Technology and Data Management / IT Operations Management / IT Service Management",
        "description": "The ability to manage IT Service Support and IT Service Delivery",
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
        "id": "a1c2b9ca-48dd-412a-9763-a378f1837953",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBC - Productivity Services / IBCC - Core Collaboration",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-15"
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
      "software": [],
      "service": [
        {
          "id": "fc318676-4a4c-409a-b1e5-0a47f26ce4cf",
          "displayName": "Microsoft / Azure Azure AD",
          "category": "service",
          "description": "Repository and Authenticator ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-01-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
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
    "ChinaRequirements": "CDC",
    "ChinaDesign": "IBCF",
    "ChinaSourcing": "IBCF",
    "ChinaPaying": "IBCF",
    "ChinaImplementation": "IBCF",
    "Chinaverification": "TTI",
    "ChinaOperations": "IBCF"
  }
}