export default {
  "completion": {
    "percentage": 55,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 78,
    "dataManagement": 75,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 63
  },
  "subscriptions": [
    {
      "firstName": "Magnus",
      "lastName": "Lännholm",
      "displayName": "Magnus Lännholm",
      "email": "magnus.lannholm@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Tomas",
      "lastName": "Fjällström",
      "displayName": "Tomas Fjällström",
      "email": "tomas.fjallstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "OpenLM",
    "description": "SaaS solution for providing monitoring of server based licensing",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-01-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Office / Other Office",
    "predecessor": [
      {
        "id": "0d6fc59d-2968-4155-a694-3616e88052f9",
        "displayName": "FNM4EA",
        "description": "2 major uses:\r\n1. Administration of flexlm license managers and licenses.\r\n2. Creating reports from of usage from flexlm license managers ",
        "type": "Application",
        "tags": [
          "Not China affected"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
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
              "startDate": "2022-10-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-10-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "05cf1fc0-5bfc-4640-bd2e-0137b3c3a4e3",
        "displayName": "B. Legal, Risk and Compliance Management / Compliance Management / License Management",
        "description": "Eg:\nSoftware license management.\nIntellectual property management\n",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-17"
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
        "id": "1544a5df-a909-4c6b-bfda-17ad7332b66e",
        "displayName": "Scania - Scania CV AB",
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
        "id": "7750e36d-aba0-4fe4-bf0e-eb0f1894ab27",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America",
        "usageType": null,
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "0eac54b3-5881-46d5-9f7e-0b53f9adc88e",
        "description": "Generic level to describe a Business Application and system, which may occur on one or more Business Application Instance.",
        "displayName": "IT@Scania Domain / IT Business Application Entity / Business Application",
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
        "id": "90ed0c0a-5954-4867-9de3-e09f266cefd2",
        "description": null,
        "displayName": "WAM_Azure - urn:federation:MicrosoftOnline",
        "lifecycle": null,
        "tags": [
          "XDS_SAML"
        ]
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "3c162d5a-f1f6-43f2-b968-50dd092060b4",
          "displayName": "OpenLM Directory Synchronization Agent Unspecified",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "5f2dfad7-b4a5-491e-b7ed-558a4deb37f6",
          "displayName": "OpenLM OpenLM",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "Okta, Azure AD, ADFS",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": [
      "ScaniaGroupContract"
    ],
    "ChinaRequirements": "",
    "ChinaDesign": "",
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "",
    "Chinaverification": "",
    "ChinaOperations": ""
  }
}