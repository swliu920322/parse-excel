export default {
  "completion": {
    "percentage": 82,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 65,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 83
  },
  "subscriptions": [
    {
      "firstName": "Helen",
      "lastName": "Nordquist",
      "displayName": "Helen Nordquist",
      "email": "helen.nordquist@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Pontus",
      "lastName": "Hellgren",
      "displayName": "Pontus Hellgren",
      "email": "Pontus.Hellgren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Anders",
      "lastName": "Dahlström",
      "displayName": "Anders Dahlström",
      "email": "anders.dahlstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Metadata Catalog",
    "description": "The Metadata Catalog enables everyone at Scania  to search, understand and take action on our company-wide data assets.\n\nThe catalog is connected to a system source  from where it reads technical metadata such as descriptions of tables and columns. It also contains other information that can be useful for a user to understand the contents of the source and how to make use of it for analytics. \n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2023-01-27",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-02-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Application",
    "predecessor": [],
    "successor": []
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
              "startDate": "2023-01-27",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-01-27",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "0119d57b-2964-4cb4-a931-e0ff666e7474",
        "displayName": "P. Information Technology and Data Management / Information Management",
        "description": "Ability to handle information as a corporate asset and use it in an optimally way. Providing right information at the right time to customers, Scania and partners. \nEnsure accessibility and reliability of information (digital thread, digital trust) for all stakeholders (including partners)",
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
        "tags": []
      },
      {
        "id": "56552296-07bf-4d63-aec5-12219f9e63e2",
        "displayName": "P. Information Technology and Data Management / Information Management / Meta Data Management",
        "description": "Metadata management is the ability to structure and provide context regarding data. It helps businesses keep track of their data by providing information such as what the data is, where it came from, who created it, and how it's being used. This makes it easier for employees to understand, find and use the data effectively, which will save time and improve productivity.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-24"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "e16bb2eb-8cee-4822-b03b-91f7fc9a2d0c",
        "displayName": "Supporting processes / Business Intelligence",
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
        "usageType": "user",
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
        "id": "41b9f026-dee3-426a-b287-fc241d19f315",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAE - Information Management",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "0a08171c-cb91-4000-8973-b96508f6c44f",
        "description": "Generic level for all kind of products that Scania IT can sell and offer to Scania Units and other parties, acting as customer to Scania IT product and services.",
        "displayName": "IT@Scania Domain / IT Products & Services Entity / It Product",
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "696396a3-0783-472e-869e-04bb495e4241",
          "displayName": "Alation Alation Data Catalog",
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
    "ssoProvider": "Azure Active Directory",
    "statusSSO": "supported"
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