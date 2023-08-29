export default {
  "completion": {
    "percentage": 42,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Johan",
      "lastName": "Stoltz",
      "displayName": "Johan Stoltz",
      "email": "johan.stoltz@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
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
    "name": "Word",
    "description": "Software for creating and editing documents.\nExample: TB, UF, FE, AE, FMEA, HARA, ECU SW ASSY, System Requirement Specification.\n",
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
      "id": "5edd5228-3a1c-4bad-9302-5b522cb95e16",
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
          "id": "8cbd0689-aed3-494c-8191-6ff4090c82ba",
          "displayName": "Microsoft Office 365",
          "category": "software",
          "description": "Office 365 is a line of subscription services offered by Microsoft as part of the Microsoft Office product line. The brand encompasses plans that allow use of the Microsoft Office software suite over the life of the subscription, as well as cloud-based software-as-a-service products for business environments, such as hosted Exchange Server, Skype for Business Server, and SharePoint, among others. All Office 365 plans include automatic updates to their respective software at no additional charge, as opposed to conventional licenses for these programs—where new versions require purchase of a new license.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2011-06-28"
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
    "ChinaITlegalCompliance": null,
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