export default {
  "completion": {
    "percentage": 37,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 0,
    "businessSupport": 55,
    "dataManagement": 25,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 35
  },
  "subscriptions": [
    {
      "firstName": "Sandesh Suresh",
      "lastName": "Satim",
      "displayName": "Sandesh Suresh Satim",
      "email": "sandesh.satim@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Rosiane",
      "lastName": "Andretta-Sundman",
      "displayName": "Rosiane Andretta-Sundman",
      "email": "rosiane.andretta-sundman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Soubhagya Sagar",
      "lastName": "Kanungo",
      "displayName": "Soubhagya Sagar Kanungo",
      "email": "soubhagya-sagar.kanungo@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Åke",
      "lastName": "Johansson",
      "displayName": "Åke Johansson",
      "email": "ake.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Cloud Business Intelligence Platform (CBIP)",
    "description": "CBIP is centrally managed and administered platform for analytics and reporting.\n\nScania CBIP includes :\n- Cloud data warehousing technologies and tools\n- Cloud Reporting tools\n\nScania CBIP is the successor of our on-prem systems : Common Data Warehouse (CDW) and Power BI",
    "lifecycle": {
      "asString": "phaseIn",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2023-05-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "a3986df6-63b0-4111-84b3-b29f947f5c37",
        "displayName": "Common Data Warehouse",
        "description": "Enterprice data warehouse platform where application teams build data marts (or we can call it data warehouse applications) combining data from various data sources.\n\nThe platform is based Oracle database",
        "type": "Application",
        "tags": [
          "Not China affected",
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
      "id": "7ff4145e-89bf-4b12-98ea-ba9fe9fd3932",
      "displayName": "Data platforms analytics",
      "fullName": "Data platforms analytics",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Staffan Vildelin",
          "email": "staffan.vildelin@scania.com",
          "type": "RESPONSIBLE"
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
              "startDate": "2023-02-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-02-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "a8ed92c4-6864-4130-9237-563a878d9575",
        "displayName": "P. Information Technology and Data Management",
        "description": "Abilitiy to enable Scania's data needs and utilize information technology to enable business growth and business capabilities.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "phaseIn",
              "startDate": "2022-07-01"
            },
            {
              "phase": "active",
              "startDate": "2022-10-05"
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
      }
    ],
    "organisations": [
      {
        "id": "4143ac63-f475-4c70-8ec4-ac61e79ea789",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management",
        "usageType": "ITmaintenance",
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
        "id": "364d9b5f-ae35-4f0a-a5c0-d630591326b8",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAZ - Supporting Processes Business Intelligence",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-01"
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
    "interfaceConsume": [
      {
        "id": "3821692f-b654-4e12-a02f-428e673ba097",
        "description": "Monitoring messagebus API is used to send events to Scania Event Management system.",
        "displayName": "Tivoli Omnibus_MonitoringMessageBus IE v2.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-02"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "ab381fe3-ff82-4322-99e1-2b44344c0be1",
          "displayName": "GitLab GitLab Enterprise Edition 14.4.2-ee",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "e3110fd6-4e0f-41ac-a87e-67c4f6ad647d",
          "displayName": "Matillion",
          "category": "software",
          "description": "Matillion is a cloud based data integration tool which simplifies and automates data movement, allowing you to bridge the skills gap for data transformation, and handle the complexity of pipeline orchestration at scale.",
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "e4b0a6d5-987b-4000-b676-751d64c512c9",
          "displayName": "Microsoft Microsoft Power BI",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "3440c76c-cbba-4510-85a6-b6cc702f4c1f",
          "displayName": "Snowflake Computing Netherlands B.V. Snowflake",
          "category": "software",
          "description": "Snowflake is a cloud-based data warehousing platform that allows organizations to store and analyze large amounts of data in a scalable and cost-effective manner.\nSnowflake’s architecture is designed to separate storage and compute, allowing organizations to scale their storage and compute resources independently. This approach enables users to store and query vast amounts of data without needing to manage the underlying infrastructure.\nSnowflake also provides several features to optimize query performance, such as automatic query optimization and caching, which helps users to achieve faster results",
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
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
    "ChinaRequirements": "IXAZ",
    "ChinaDesign": "IXAZ",
    "ChinaSourcing": "TT",
    "ChinaPaying": "TT",
    "ChinaImplementation": "IXAZ/TT",
    "Chinaverification": "TT",
    "ChinaOperations": "TT"
  }
}