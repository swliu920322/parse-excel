export default {
  "completion": {
    "percentage": 67,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 50,
    "businessSupport": 60,
    "dataManagement": 100,
    "dependencies": 0,
    "information": 71,
    "projects": 100,
    "robots": 100,
    "sourcing": 60
  },
  "subscriptions": [
    {
      "firstName": "Anders",
      "lastName": "Bäckner",
      "displayName": "Anders Bäckner",
      "email": "anders.backner@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Acronis",
    "description": "Fast backup and Restore of PC's in production.\r\nFast Restore of PC's when they have failed or crashed.",
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
        "id": "6cb733c7-19dc-404f-8681-7a0d734be97b",
        "displayName": "Acronis SLA 12.5",
        "description": "Acronis is a product to backup and restore specified clients. The purpose is backing up  files of manager’s notebook that are considered critical to Scania IT and image backing up of industrial computers.\r\n\r\nFast backup and Restore of PC's in production. \r\nFast Restore of PC's when they have failed or crashed.",
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
    "children": []
  },
  "initiatives": [
    {
      "id": "59823aad-33b3-41ba-8431-0a00de305f11",
      "displayName": "SAS Industrial Project - China / SAS Final Assembly IT",
      "fullName": "SAS Final Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Frédéric Anquetil",
          "email": "Frederic.Anquetil@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Douglas Mitsuru Higa",
          "email": "Douglas.Higa@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Thomas Sahleström",
          "email": "thomas.sahlestrom@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Arthur Takaki",
          "email": "arthur.takaki@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pallavi Shrotri",
          "email": "pallavi.shrotri@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pekka Palonen",
          "email": "pekka.palonen@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-01-17",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-01-17",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "28abf715-a150-4b0e-9caa-f28f84039f70",
        "displayName": "P. Information Technology and Data Management / Information Management / Information Archiving",
        "description": "Information archiving is the ability to securely storing information for long-term retention and preservation. It provides a way to store information that doesn't need to be accessed frequently, while still allowing it to be retrieved if needed. It typically involves moving information to secondary storage systems and establishing retention policies and controls.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-26"
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
        "id": "ee10ac0c-85a2-4355-8db9-d066338375bc",
        "displayName": "Order to delivery / Production Processes / General support processes",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "3933b64a-bc93-4337-8439-42a0a605a725",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFX - SPCT & IWS Services",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-01-01"
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
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "INF",
    "ChinaDesign": "INF",
    "ChinaSourcing": "INF",
    "ChinaPaying": "INF",
    "ChinaImplementation": "INF/TTP",
    "Chinaverification": "INF/TTP",
    "ChinaOperations": "TTP"
  }
}