export default {
  "completion": {
    "percentage": 43,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 30,
    "dataManagement": 38,
    "dependencies": 50,
    "information": 42,
    "projects": 100,
    "robots": 100,
    "sourcing": 23
  },
  "subscriptions": [
    {
      "firstName": "Magnus",
      "lastName": "Wikegård",
      "displayName": "Magnus Wikegård",
      "email": "Magnus.Wikegard@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Quentin",
      "lastName": "Chomis",
      "displayName": "Quentin Chomis",
      "email": "quentin.chomis@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Yelena",
      "lastName": "Crona",
      "displayName": "Yelena Crona",
      "email": "yelena.crona@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Shanmugaraj",
      "lastName": "Gopalaswami",
      "displayName": "Shanmugaraj Gopalaswami",
      "email": "shanmugaraj.gopalaswami@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Linnea",
      "lastName": "Borg",
      "displayName": "Linnea Borg",
      "email": "linnea.borg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Scania Supplier Portal",
    "description": "Scania Supplier Portal. SCANIA web portal that provides access to central information and applications for approved users, suppliers.",
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
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "451ae396-39a0-4ed3-881f-8be9632b6a63",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Chatbot which provides self-service support (FAQs) and invoice status requests to suppliers. Published on https://supplier.scania.com/",
        "displayName": "Scania Supplier Portal / Chatbot - SSP",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "44dfe8ea-efe1-4842-9dc0-ea598d88a4af",
        "activeFrom": "2021-03-18",
        "activeUntil": null,
        "description": "ePerformance.",
        "displayName": "Scania Supplier Portal / ePerformance",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "3f40b3bb-4eb8-4050-b470-de3944050599",
        "activeFrom": "2022-03-02",
        "activeUntil": null,
        "description": "Scania Supplier Portal",
        "displayName": "Scania Supplier Portal / SSP SLA",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "d35d79ca-a2ad-481b-847e-0c4424a28e91",
        "activeFrom": "2020-03-01",
        "activeUntil": null,
        "description": "Supplier 360 is a contact information portal – acting as a window to the Supplier! It is an application on SSP – Scania Supplier Portal and is available for all suppliers that are onboarded there.",
        "displayName": "Scania Supplier Portal / Supplier 360",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "f6b7dcd8-4d93-4aee-b4f6-5fd35c66ab20",
      "displayName": "Aurora",
      "fullName": "Aurora",
      "tags": [
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2021-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-01-01"
          },
          {
            "phase": "active",
            "startDate": "2022-01-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2026-12-31"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sirpa Södereng",
          "email": "sirpa.sodereng@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Thomas Strandberg",
          "email": "thomas.strandberg@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "f2e16783-c7f2-4883-9310-262d9874cd43",
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
        },
        {
          "displayName": "Enno Grüning",
          "email": "enno.gruning@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "b3da1b1a-812c-41e6-9b6a-9d56c52b5679",
      "displayName": "SAS Industrial Project - China / China Purchasing IT",
      "fullName": "China Purchasing IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2021-12-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-08-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tomas Hebbou",
          "email": "tomas.hebbou@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "a858e9da-dfc1-4ca6-88f6-ab5e31cb631e",
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
      "businessCriticality": null,
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "a0a898a1-418f-439e-a1df-fa00f9eb2545",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management",
        "description": "Eg:\n- Supplier Evaluation\n- Supplier Performance Management\n- Supplier Information\n- Supplier Interaction Management\n- Supplier Rating",
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
        "tags": [
          "China affected"
        ]
      }
    ],
    "processes": [],
    "organisations": [
      {
        "id": "c633984c-0ce4-42c3-a40c-f8c7463a2682",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZB - Purchasing IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-17"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "e49215de-a3b4-45a4-bfc2-851a5686ace5",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN1 - Business Development / SNI - Digitalisation & Systems​",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "02ec8762-9612-4bc3-862c-9b096d904257",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN2 - Capacity, Cost & Risk Management​",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-01"
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
        "id": "945ede33-0dfe-406f-a318-846621c7de0d",
        "description": "Master Data Source SSIP, Scania Supplier Information Portal  (limited to Automotive Parts Suppliers) Represents Scania suppliers independent if they provide Scania with components within resources and hardware, services and software or work efforts. One specific type of supplier are bodybuilders that supply Scania and customers with coaches and bodywork to complete Product As Individuals upon Scania basic chassis products.  Supplier is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Supplier",
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
    "interfaceConsume": [
      {
        "id": "c60cf4b0-e136-4d9d-b844-c3b3fba6a2a7",
        "description": "This are all external API(s) from Scania Configurator that needs to be consumed by Scania internal applications",
        "displayName": "Scania Configurator_ScaniaConfigurator IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "fbd5f619-5c3f-4873-a818-cc78b3b491fa",
        "description": null,
        "displayName": "Scania Supplier Portal / Chatbot - SSP / chatbot-ssp-api_ssp-chatbot IE v1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-12-09"
            }
          ]
        },
        "tags": [
          "Not China affected"
        ]
      },
      {
        "id": "7abd845a-6627-4061-8d7b-cab62bbbbe30",
        "description": null,
        "displayName": "WAM_WAM SAML2 Authentication",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "6bba9a8e-ebc9-45e8-845a-592789f86a96",
          "displayName": "GitLab GitLab 11.8",
          "category": "software",
          "description": "GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-22"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "3688819c-d7ba-44df-920e-99e29e9a8cd8",
          "displayName": "WordPress.org WordPress",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [
        {
          "id": "829b9251-6b70-4403-86df-01b4d2de6fbd",
          "displayName": "Amazon Web Services AWS - Ireland",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "da7603cf-4a18-4bea-a9e0-0a508a1d65a1",
          "displayName": "Amazon.com / AWS Aurora",
          "category": "service",
          "description": "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, that combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2014-11-12"
              },
              {
                "phase": "active",
                "startDate": "2015-07-27"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "28d70d21-c1a9-4fce-853b-ba8b614e14c1",
          "displayName": "Amazon.com / AWS Elastic Beanstalk",
          "category": "service",
          "description": "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2011-01-19"
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
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
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