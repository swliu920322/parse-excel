export default {
  "completion": {
    "percentage": 60,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 63,
    "dataManagement": 0,
    "dependencies": 100,
    "information": 100,
    "projects": 100,
    "robots": 0,
    "sourcing": 75
  },
  "subscriptions": [
    {
      "firstName": "Johan",
      "lastName": "Dahlin",
      "displayName": "Johan Dahlin",
      "email": "johan.dahlin@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
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
      "firstName": "Rickard",
      "lastName": "Reite",
      "displayName": "Rickard Reite",
      "email": "rickard.reite@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Customer Journey Analytics",
    "description": "Customer Journey Analytics application - is a dashboard, available for users (marketeers) at different Scania markets as a web-application in Power BI. \nThe dashboard represents KPIs for Scania campaigns, that take place at social media and web. The main stages of a Customer journey is being tracked: Awareness (impressions at SoMe/web), Interest (clicks and form submissions on Scania website), Consideration and Purchase (Qualified leads, Customer contacted, Appointment made, Offers created, Deals won).",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2021-03-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2021-06-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2021-10-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Statistics",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "5e642400-0eb1-462f-b0ec-d7bc0e05d436",
      "displayName": "Customer Journey Analytics",
      "fullName": "Customer Journey Analytics",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "administrativeService",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "60202434-53c5-4a8f-b7b9-09c5b5a9288f",
        "displayName": "D. Market Demand and Synchronized Business Planning / Market Strategy",
        "description": "Maintain and update market strategies. Decide introduction programme. Monitor and control product demand and service capacity. Customer satisfaction surveys.",
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
        "id": "4ed0edd9-934c-4f56-9733-a95ae5dcb589",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management",
        "description": "Develop and execute a customer relationship and plan, maintain and build a customer relationship.",
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
        "id": "13c8dfa7-8c04-40b7-8232-8e71a6618dd0",
        "displayName": "Supporting processes / Lack of parent / Brand & Marketing Communication",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
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
          "id": "4ccb5f9b-c23d-4336-8fe6-dbd144df532c",
          "displayName": "Adobe Systems Experience Cloud / Adobe Systems Adobe Analytics",
          "category": "software",
          "description": "Adobe Analytics is the solution for applying real-time analytics and detailed segmentation across all of the marketing channels. It can be used to discover high-value audiences and power customer intelligence for the business.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2005-01-01"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "1663a6c7-d04c-42c8-94aa-f5c0846999f3",
          "displayName": "Funnel Funnel",
          "category": "software",
          "description": "Funnel is the marketing data platform that gives business-ready data that is clean, accurate, and always up to date.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2014-01-01"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "526ffca2-6b1b-4728-9155-7980e1adb4ee",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic / Microsoft Power BI n/a",
          "category": "software",
          "description": "Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-07-24"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "f4ef2504-485b-44e4-9841-e2bb59a7923b",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic / Ubuntu 20.4 Linux",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        }
      ],
      "service": [
        {
          "id": "49e40c22-98c5-456a-a9cc-c2c9162e65f4",
          "displayName": "Accutics Accutics",
          "category": "service",
          "description": "Accutics is a SaaS servise, used for creating tracking codes for digital campaigns.",
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "0cc16d0e-bf5a-41c0-b3bd-aa7ef02680d4",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic / Microsoft / Azure Blob Storage",
          "category": "service",
          "description": "Azure Blob Storage helps you create data lakes for your analytics needs, and provides storage to build powerful cloud-native and mobile apps. It is Microsoft's object storage solution for the cloud. Blob storage is optimized for storing massive amounts of unstructured data.",
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "aec19f4f-6744-44cc-aaac-59500d2df0a8",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic / Microsoft / Azure SQL Server",
          "category": "service",
          "description": "Azure SQL Database is a managed cloud database (PaaS) provided as part of Microsoft Azure. Microsoft Azure SQL Database includes built-in intelligence that learns app patterns and adapts them to maximize performance, reliability, and data protection.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2009-03-10"
              },
              {
                "phase": "active",
                "startDate": "2010-02-01"
              }
            ]
          },
          "tags": []
        }
      ],
      "accessControl": []
    },
    "ssoProvider": "Azure AD",
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