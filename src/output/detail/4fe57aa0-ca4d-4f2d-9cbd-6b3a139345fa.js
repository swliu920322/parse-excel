export default {
  "completion": {
    "percentage": 34,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 0,
    "businessSupport": 18,
    "dataManagement": 13,
    "dependencies": 50,
    "information": 63,
    "projects": 100,
    "robots": 0,
    "sourcing": 13
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "pontus.kalliomaki@scania.com",
      "email": "pontus.kalliomaki@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Developer"
      ]
    },
    {
      "firstName": "Jessica",
      "lastName": "Löfström",
      "displayName": "Jessica Löfström",
      "email": "jessica.lofstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Carolina",
      "lastName": "Årman",
      "displayName": "Carolina Årman",
      "email": "carolina.arman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Active Directory",
    "description": "FOREST - SCD.scania.com that holds the domains scd.scania.com & global.scd.scania.com.\nCommonly known as GLOBAL",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2002-07-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": [
      {
        "id": "64f2e931-f772-4338-bb5b-066afb8229d7",
        "displayName": "JIRA SLA - JIRA Scania Latin America",
        "description": "Issues tracking tool for Latin America",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "bad41ad5-923b-435e-8a54-ba1acdd336e8",
        "activeFrom": "2021-12-13",
        "activeUntil": "2025-01-01",
        "description": "An API endpoint for Juju that is a cloud tool",
        "displayName": "Active Directory / jimm.scania.com",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "206a39e5-5172-43a7-992b-7efa68ae059a",
        "activeFrom": null,
        "activeUntil": null,
        "description": "API that delivers Active Directory content to other apps",
        "displayName": "Active Directory / Org_FR",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "b1d413fb-d94c-4280-9dad-20f27cb30ec7",
      "displayName": "SAS Industrial Project - China / China CAB Assembly IT",
      "fullName": "China CAB Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-04-01"
          },
          {
            "phase": "active",
            "startDate": "2023-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
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
      "businessCriticality": null,
      "functionalSuitability": null,
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [],
    "organisations": [
      {
        "id": "c93b6a3e-fdaa-47eb-9a89-9a8a711c87c0",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXH - Information Security / IXHE - IAM Governance",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-11-08"
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
        "id": "3b859786-a3a2-4543-b1af-85dc3d9e0785",
        "description": null,
        "displayName": "Active Directory_Global User Directory",
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
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXHE",
    "ChinaDesign": "IXHE",
    "ChinaSourcing": "IXHE",
    "ChinaPaying": "IXHE",
    "ChinaImplementation": "IXHE",
    "Chinaverification": "IXHE",
    "ChinaOperations": "IXHE"
  }
}