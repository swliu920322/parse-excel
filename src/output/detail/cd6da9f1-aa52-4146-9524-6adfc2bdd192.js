export default {
  "completion": {
    "percentage": 18,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 28,
    "dataManagement": 13,
    "dependencies": 50,
    "information": 38,
    "projects": 0,
    "robots": 0,
    "sourcing": 37
  },
  "subscriptions": [
    {
      "firstName": "Magnus",
      "lastName": "Wikegård",
      "displayName": "Magnus Wikegård",
      "email": "Magnus.Wikegard@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    }
  ],
  "information": {
    "name": "Matris Neo",
    "description": "An Interim Solution to be used by All Traton Brands during TMSx",
    "lifecycle": {
      "asString": "plan",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2023-07-03",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-09-15",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-10-01",
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
        "id": "9a6cb5d1-742b-4558-861b-a044b002cdfe",
        "displayName": "Matris",
        "description": "An application used for requisitioning and ordering of Automotive Parts. \nUsed by SEU, SLA and SAS for different types of ordering (Prototype, quantity, open orders etc).\n\nAlso used for Contract Management, Sourcing Planning. ",
        "type": "Application",
        "tags": [
          "PII",
          "R&D",
          "Significant",
          "China affected",
          "Maturity Level 2",
          "ICS internal"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "2c045e5a-edee-4b7d-a1ae-f5b6bb8a2645",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Sourcing Management / Sourcing Planning",
        "description": "The ability to plan and communicate the sourcing activities. Identification of key milestones and measurement of sourcing results.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-07"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      }
    ],
    "processes": [],
    "organisations": []
  },
  "management": {
    "objects": [
      {
        "id": "0368bb36-129d-4238-953e-155d9f6ea039",
        "description": "Form completed by the engineer when component and part is to be changed, Engineering Change Order (ECO). Contains planning and tasks.",
        "displayName": "Product Development Domain / Change Control Entity / Engineering Change Order",
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
      },
      {
        "id": "a3e9e8d9-10b7-48f1-8c93-c2b3f2959593",
        "description": "Part Priming is a matter of operational planning and implementation of the company's sourcing strategy with defined part content and activities with potential suppliers participation divided in appropriate sourcing packages. The work includes planning of quality assurance and estimation of sourcing prices and investments.",
        "displayName": "Purchase & Agreement Domain / Part Priming  Entity",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-04"
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
          "id": "127d7108-b3fd-462e-a6a1-da1009255936",
          "displayName": "Oracle Oracle Database Enterprise 19c",
          "category": "software",
          "description": "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-14"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-04-30"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-04-30"
              }
            ]
          },
          "tags": [
            "China affected",
            "A good example",
            "From SCT"
          ]
        },
        {
          "id": "3242c766-4e9c-48ea-a5c5-51d59fc443f6",
          "displayName": "Scania / Scania IT Tegel Design System",
          "category": "software",
          "description": "The Tegel Design System is for digital products and services at Scania. It enables an efficient development process and ensures a premium experience across all of Scania's digital touchpoints.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-12-20"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "44639bc6-2908-4d82-82e9-7202dde3335f",
          "displayName": "Scania / Scania IT Tegel Design System / Scania / Scania IT Tegel Design System - Code / Tegel Design System - Code: sdds",
          "category": "software",
          "description": "Tegel - Code: sdds represents all the npm packages that uses the prefix sdds in code. All packages are listed at https://www.npmjs.com/org/scania\n\nPackages using sdds prefix\n@scania/colour\n@scania/components\n@scania/grid\n@scania/icons\n@scania/theme-light\n@scania/typography\n\nUsually used in combination with Tegel UI Library and Tegel Documentation.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-11-13"
              }
            ]
          },
          "tags": []
        }
      ],
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