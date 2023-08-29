export default {
  "completion": {
    "percentage": 80,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 55,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 42
  },
  "subscriptions": [
    {
      "firstName": "Eva-Lena",
      "lastName": "Svensson",
      "displayName": "Eva-Lena Svensson",
      "email": "eva-lena.svensson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Tina",
      "lastName": "Hellqvist",
      "displayName": "Tina Hellqvist",
      "email": "tina.hellqvist@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Enterprise Guardrails Self-Assessment",
    "description": "Self-assessment for verifying solution compliance with Scania strategies and principles.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2021-10-28",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2022-04-08",
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
      "businessCriticality": "administrativeService",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-12-13",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-12-13",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "ad5185ac-b239-4181-9b05-649f563b4f39",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Architecture Management / Govern Enterprise Architecture",
        "description": "The ability to coordinate the processes, methods and people to provide a holistic, actual and correct enterprise view of the company's actual and future setup whith architectural artefacts, such as Strategies/Goals, Processes, Organisation/People, Business Capabilities, Information/Data, IT solutions and Infrastructure.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2022-06-20"
            },
            {
              "phase": "active",
              "startDate": "2022-10-03"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "ce41924b-2e77-4a67-b82e-32668035b5bb",
        "displayName": "Order to delivery",
        "description": "Owner: Martin Lyckström",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "3c9a0b44-190f-4180-8309-1fbd1a9833ba",
        "displayName": "Product development",
        "description": "Owner: Jan Palmér, chairman PD process board",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "60bf1da7-28e3-4e1d-8a9f-4e32b753c918",
        "displayName": "Services delivery",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "29db9d40-50e3-4786-8696-a19d2c802491",
        "displayName": "Supporting processes",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Supporting process"
        ]
      },
      {
        "id": "95c6de4b-d409-4fea-975a-b46031c4c125",
        "displayName": "Sustainable Transport Solution / Sales",
        "description": "Sales Core Process consolidates sub-processes that are responsible to manage the output from the Product Development Core Process and prepare the input to both Order to Delivery and Services Delivery Core Processes. The sub-processes belonging to Sales Core Process are: Presales, Solution Sales, Rental and Used Vehicles Management.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2018-01-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2019-01-01"
            },
            {
              "phase": "active",
              "startDate": "2019-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
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
        "id": "638fd629-11fd-4a6f-8239-c1c4fb0be4ef",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXD - Strategy & Enterprise Architecture",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-12-09"
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "93a90d41-0f60-423a-9f2a-9b49a0666ef5",
          "displayName": "Microsoft Power Apps",
          "category": "software",
          "description": "Power Apps is a suite of apps, services, connectors and data platform that provides a rapid application development environment to build custom apps for business needs. Using Power Apps, one can quickly build custom business apps that connect to business data stored either in the underlying data platform (Common Data Service) or in various online and on-premises data sources (SharePoint, Microsoft 365, Dynamics 365, SQL Server, and so on).",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-04-29"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "9658d19e-11d7-4eff-bd24-1833f54c5efe",
          "displayName": "Microsoft Power Automate",
          "category": "software",
          "description": "Power Automate, formerly Microsoft Flow, is an online tool within the Microsoft 365 applications and add-ins, used for the creation of automated workflows between apps and services to synchronize files, get notifications, and collect data.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2016-04-27"
              },
              {
                "phase": "active",
                "startDate": "2016-10-31"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
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
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXD",
    "ChinaDesign": "IXD",
    "ChinaSourcing": "IXD",
    "ChinaPaying": "IXD",
    "ChinaImplementation": "IXD",
    "Chinaverification": "TT",
    "ChinaOperations": "IXD and TT"
  }
}