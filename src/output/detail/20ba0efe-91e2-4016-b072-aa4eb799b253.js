export default {
  "completion": {
    "percentage": 26,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Magnus",
      "lastName": "Nordlund",
      "displayName": "Magnus Nordlund",
      "email": "magnus.nordlund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
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
    },
    {
      "firstName": "Ulf",
      "lastName": "Elveberg",
      "displayName": "Ulf Elveberg",
      "email": "ulf.elveberg@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "SCORCH",
    "description": "Event Management workflow and automation tool",
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
    "parent": [],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-02-17",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-02-17",
              "milestoneId": null
            }
          ]
        },
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
        "id": "d2d51168-e6d4-4bdd-ab4e-b8b787e2b26a",
        "displayName": "Supporting processes / Lack of parent / Event Management",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2013-01-01"
            }
          ]
        },
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