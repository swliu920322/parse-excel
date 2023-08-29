export default {
  "completion": {
    "percentage": 76,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 65,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 75
  },
  "subscriptions": [
    {
      "firstName": "Peter",
      "lastName": "Grape",
      "displayName": "Peter Grape",
      "email": "peter.grape@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Gustav",
      "lastName": "Arrhenius",
      "displayName": "Gustav Arrhenius",
      "email": "gustav.arrhenius@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    }
  ],
  "information": {
    "name": "Digital Asset Management Platform",
    "description": "Digital asset management (DAM) is a system for organizing, storing, and retrieving digital files, such as images, videos, and documents. The goal of DAM is to streamline and simplify the process of managing large collections of digital assets, improving efficiency and reducing the risk of losing or damaging files.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2021-11-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2022-04-19",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Digital Experience Platforms (DXP)",
    "predecessor": [
      {
        "id": "4fb7bec8-b40e-45da-a28e-c7760f496d0c",
        "displayName": "Media Provider",
        "description": "Digital asset management solution for handling and provisioning of images. Usage of material is used both internally and external. \r\nImageDesk at KAD is the owner of source. ",
        "type": "Application",
        "tags": [
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
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
      "id": "b53c397e-a0e4-418f-b509-bb1de56745cb",
      "displayName": "Digital Asset Management system",
      "fullName": "Digital Asset Management system",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
    }
  ],
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
              "startDate": "2022-03-04",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-03-04",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "33099a53-6d2d-4fab-9287-f8f475a90cf8",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Brand & Market Communication",
        "description": "Develop and maintain strategies and platforms for communication of all products and services. Monitor corporate identity. Manage Franchise standards.",
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
      }
    ],
    "processes": [
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
        "id": "5682d08c-6bd1-477d-8b8c-82e585021de9",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAG - Corporate Relations IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-04-14"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "ddf1b42b-92ed-4a0f-bb61-a10ac6310775",
        "displayName": "Scania - Scania CV AB / P_C - Communications & Sustainability",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-23"
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
          "id": "bc22abce-e98c-44c9-8736-6f32eea1bcdc",
          "displayName": "Adobe Experience Manager Platform",
          "category": "software",
          "description": "Adobe Experience Manager(AEM) is a CMS system from Adobe, this platform is main component in the Adobe Marketing Suite framework.\n",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-07-01"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "605adf88-b67f-40ea-84fd-58c73f009692",
          "displayName": "Adobe Systems Adobe Experience Manager",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "3929616d-11ed-44a7-8933-1d6a51d616dc",
          "displayName": "Java / Azul Systems Zulu of OpenJDK 11.0",
          "category": "software",
          "description": "Azul Zulu builds of OpenJDK are open source, TCK-tested and certified builds of OpenJDK. Azul Zulu is available for a wide range of hardware platforms and operating systems.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "-",
            "phases": [
              {
                "phase": "endOfLife",
                "startDate": "2026-09-30"
              }
            ]
          },
          "tags": []
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "Azure AAD",
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