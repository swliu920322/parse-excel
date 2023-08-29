export default {
  "completion": {
    "percentage": 46,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Robert",
      "lastName": "Liikamaa",
      "displayName": "Robert Liikamaa",
      "email": "robert.liikamaa@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "SharePoint Online",
    "description": "SharePoint is an document area and team news.\r\nSimple sharing and seamless collaboration\r\nA team area for storing, sharing and collaborating on documents. You also have the opportunity to add lists, libraries and other applications. \r\nThe news feed on the SharePoint team site makes it easy to share and follow current happenings in your team. See a consolidated view of your team news on SharePoint Home \r\n",
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
        "id": "9b04f3a7-a3ca-4bc6-a0b4-b59fcde96ef5",
        "displayName": "Sharepoint for Angers",
        "description": "Sharepoint for Angers",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "e5ca11f7-c695-4695-aaf3-85768aece9ad",
        "displayName": "Sharepoint for Scania France",
        "description": "Sharepoint for Scania France",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [
      {
        "id": "6ec36679-b99b-40e2-8494-c5f3207ba696",
        "displayName": "Office 365",
        "description": "Check other Variants first",
        "type": "Application",
        "tags": [
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
      "id": "9507819a-5826-4797-8c0b-12660f3c40e6",
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
    }
  ],
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
              "startDate": "2023-03-15",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-03-15",
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
        "id": "227c35f0-6d8f-43df-91a7-5c2e59e5dd07",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBC - Productivity Services / IBCB - Communication & Collaboration",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-07-13"
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
          "id": "c2a15b6f-baca-4bb5-887b-cec68bff17e8",
          "displayName": "Microsoft SharePoint Online",
          "category": "software",
          "description": "​Microsoft SharePoint Online is a content management system that is part of the Office 365 suite of services. SharePoint provides a rich collaboration environment in which internal and external users can work together, manage content, and communicate information using a variety of SharePoint intranets and sites. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2001-03-28"
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
    "ChinaRequirements": "IBD",
    "ChinaDesign": "IBD",
    "ChinaSourcing": "IBD/TTI",
    "ChinaPaying": "IBD/TTI",
    "ChinaImplementation": "IBD",
    "Chinaverification": "TTI",
    "ChinaOperations": "IBD"
  }
}