export default {
  "completion": {
    "percentage": 78,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 65,
    "dataManagement": 50,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": "Jan",
      "lastName": "Visscher",
      "displayName": "Jan Visscher",
      "email": "Jan_F.Visscher@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Product Owner"
      ]
    },
    {
      "firstName": "Tobias",
      "lastName": "Abrahmsen",
      "displayName": "Tobias Abrahmsen",
      "email": "tobias.abrahmsen@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "eSCR",
    "description": "All supplier initiated changes on earlier released products and / or processes shall be proposed via the Supplier Change Request routine.",
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
    "parent": [
      {
        "id": "3ed0803f-5bdb-42c6-b15d-eaadfeab443c",
        "displayName": "eQ2",
        "description": "eQ2 is a web-based system which connects internal and/or external supplier users.\n\neQ2 is considered a TRATON application in use globally by MAN and Scania Units (Navistar to follow), \non the shop floor as well as in office areas, and by different functions within Industrial Operations.\n\nThe system supports processes related to deviation handling, invoicing the related incurred costs, change management and part release for serial production. eQ2 is consisting of the following modules:\n\neQuality for Suppliers\neQuality handles product quality and logistical deviations for zero mileage and mileage caused by external suppliers.\n\neInternal\nHandles product quality and logistical deviations found on parts/components received from departments or units belonging to the group.\n\neSCR\nAll supplier initiated changes on earlier released products and / or processes shall be proposed via the Supplier Change Request routine.\n\neCarrier\nHandles deviations found in the inbound and outbound transportation flows caused by Carrier's licensed by the customer.\n\nePPAP\nHandles the Production Part Approval Process (PPAP / PPA) between the customer (TRATON) and external suppliers.\n\neQW\nEarly Quality Warnings are handling suspected product quality symptoms where external supplier support and expertise is needed to determine if there is a problem.\n\neInvoice\nGives an overview of the costs incurred by the customer, and handles the reimbursement, related to the deviation handling in eQuality.\n\neWarranty\nSupports the handling process of field warranty claims internally as well as with the external supplier.\n\n",
        "type": "Application",
        "tags": [
          "PII",
          "Significant",
          "China affected",
          "A good example",
          "Maturity Level 4"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "1c6575b9-e36e-4c78-8efe-a63e3a91b060",
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
      "id": "b0690c8a-99ac-4fd0-b03f-3e3bd1371f6f",
      "displayName": "Marking of Common Parts",
      "fullName": "Marking of Common Parts",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Magnus Nilsson",
          "email": "magnus.y.nilsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Cecilia Pencz Hilborn",
          "email": "cecilia.hilborn@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "9bce7687-90ed-426d-b7cc-79d8928a2b39",
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
      "id": "efc980fd-db32-434f-838c-8cb22bc4009e",
      "displayName": "Scania Asia / SAS Purchasing",
      "fullName": "SAS Purchasing",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "phaseIn",
        "phases": [
          {
            "phase": "phaseIn",
            "startDate": "2021-11-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-06-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2025-12-31"
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
          "displayName": "Tomas Hebbou",
          "email": "tomas.hebbou@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Quentin Chomis",
          "email": "quentin.chomis@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-11-30",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-11-30",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "2c422b88-a917-45e3-9a07-be9b32c4b905",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Development / Manage and Implement Enterprise Change",
        "description": "The ability to implement decided changes in a controlled manner by securing the new solutions works in its surrounding and that people are educated and ready to work according to changed conditions.\nDrive and Enable Business Transformation; Initiate and enable business transformation according to strategic directives",
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
          "MilkyWay area 3. Ideate, Define & Decide Change Direction",
          "MilkyWay area 7. Manage Change, Configuration and Releases"
        ]
      },
      {
        "id": "b4ef4b4c-d27c-41b3-a8e2-ffad86b1f703",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management / Supplier Relationship Management",
        "description": "Collaborate and maintain qualified suppliers in line with TQDCS (Technology, Quality, Delivery, Cost and Sustainability) value drivers using sustainable methods. Continuously improve value drivers by working proactively with risk management, cost, quality, sustainability and innovation using approved processes and tools.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-12-19"
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
        "id": "8f37fe51-7b0c-48a2-aba6-efecfcd57725",
        "displayName": "Order to delivery / Major support processes within Production & Logistics",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "588aedfb-fad8-4dbd-846e-82cef2684067",
        "displayName": "Order to delivery / Production Processes / Production Support Processes",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
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
        "id": "c2b61ebb-fa78-42fb-bdf3-55bb41d65df2",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LS - Purchasing South America",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-30"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "e933bcb1-06ae-4188-ab72-c0c042b6d4ad",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
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
      },
      {
        "id": "4e888364-b7d5-42a7-8036-8d203362e76d",
        "description": null,
        "displayName": "Part Cross Reference",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2023-03-29"
            }
          ]
        },
        "tags": [
          "Not decided as common information object! Use CIM objects instead! Need to be merged into CIM"
        ]
      },
      {
        "id": "5720ada3-9497-4bc3-b2d9-7ff546123328",
        "description": null,
        "displayName": "Part Information",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2023-03-29"
            }
          ]
        },
        "tags": [
          "Not decided as common information object! Use CIM objects instead! Need to be merged into CIM"
        ]
      }
    ],
    "interfaceConsume": [
      {
        "id": "e99e63b6-025c-4f43-8634-a1abd29d0ed5",
        "description": null,
        "displayName": "Material Planner Information from MCC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "750b4c2a-7842-46c0-aac9-e91ab2a12325",
        "description": null,
        "displayName": "Matris Purchasing Order",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "44475440-ca6a-44ee-b61e-b56a996e1e28",
        "description": null,
        "displayName": "MATRIS Supplier part number",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "14d948cb-f021-4096-ad05-248f6b80c1c0",
        "description": null,
        "displayName": "Scania Supplier Information Portal_Suppliers",
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
          "id": "3c2a0ade-e24b-4220-9d41-b92feaa65122",
          "displayName": "Microsoft .NET Framework 1.0",
          "category": "software",
          "description": ".NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. The .NET Framework is the original implementation of .NET. It supports running websites, services, desktop apps, and more on Windows.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2001-12-01"
              },
              {
                "phase": "active",
                "startDate": "2002-02-13"
              },
              {
                "phase": "endOfLife",
                "startDate": "2003-03-19"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "f0674444-36de-427b-a6d7-879703d12ae1",
          "displayName": "Microsoft SQL Server Standard 2016",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2016-03-07"
              },
              {
                "phase": "active",
                "startDate": "2016-06-01"
              },
              {
                "phase": "endOfLife",
                "startDate": "2018-01-09"
              }
            ]
          },
          "tags": [
            "From SCT"
          ]
        }
      ],
      "service": [
        {
          "id": "5486d0ff-bafe-4608-a1d8-3558f56124de",
          "displayName": "Amazon.com / AWS Cognito",
          "category": "service",
          "description": "Amazon Cognito lets customers add user sign-up, sign-in, and access control to their web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.  ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2014-07-10"
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
    "ChinaRequirements": "SNI",
    "ChinaDesign": "IZB",
    "ChinaSourcing": "N/A",
    "ChinaPaying": "N/A",
    "ChinaImplementation": "SNI/IZB",
    "Chinaverification": "SNI/IZB",
    "ChinaOperations": "SNI/IZB"
  }
}