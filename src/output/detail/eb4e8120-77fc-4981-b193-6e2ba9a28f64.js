export default {
  "completion": {
    "percentage": 80,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 62,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
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
        "Product Owner",
        "IT Delivery Responsible"
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
    "name": "ePPAP",
    "description": "Handles the Production Part Approval Process (PPAP / PPA) between the customer (TRATON) and external suppliers.",
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
    "productCategory": "Production Part Approval Process",
    "predecessor": []
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
      "id": "84b2e9f5-057d-478d-9ebd-92293963731f",
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
      "id": "3e1cf01e-4810-49b3-b7d3-5718d34b3b3c",
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
      "id": "b937b1c7-39b9-442e-ac56-f6f1db310400",
      "displayName": "NOVA",
      "fullName": "NOVA",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Viktor Kaznov",
          "email": "viktor.kaznov@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "dd1faaf0-e67f-4f00-bea5-12dd7e1b39a9",
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
        }
      ]
    },
    {
      "id": "c0d8f7f1-1a12-4aff-968a-6116ed833f45",
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
    },
    {
      "id": "432cdec6-e86c-4db4-a44f-341856c02909",
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
    },
    {
      "id": "ac5a5de4-6c02-4ea4-ba8a-89a397e30968",
      "displayName": "SMART(er)",
      "fullName": "SMART(er)",
      "tags": [
        "Not China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "phaseIn",
            "startDate": "2021-11-01"
          },
          {
            "phase": "active",
            "startDate": "2021-12-15"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Johan Berneskog",
          "email": "johan.berneskog@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Hussein Muganlinskij",
          "email": "hussein.muganlinskij@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Divya Sengupta",
          "email": "divya.sengupta@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Clement Chamuganda",
          "email": "clement.chamuganda@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anna Östh",
          "email": "anna.osth@scania.com",
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
        "id": "51d67051-b57c-46b7-9c29-9a268400e7b5",
        "displayName": "F. Industrialization and On-Demand Release Management / Industrial Introduction Preparation / Part Manufacturing Preparation",
        "description": "Includes creating manufacturing standards and instructions for SOPs, recipes, equipment handling for specific processing equipment. Covers Standards and instructions for both Part manufacturing and Assembly. Eg: Manufacturing Standards & Instructions preparation, Production sequence preparation (Material and resources).\nAlso Global Production Preparation.\nIncluding Design Production Process; to develop new or improved production processes to deliver quality products within required lead time.\nIncluding Deploy Production Process; to prepare production facilities and equipment to execute new or modified process. Create training if needed.\nIncluding On-Demand Release to Production and Ramp Up; to ensure capability through training and modification of facilities to run new process and tools and initiate production ramp up.",
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
      },
      {
        "id": "909b6929-8048-4efa-8784-e04109401cba",
        "displayName": "F. Industrialization and On-Demand Release Management / Industrial Introduction Preparation / Part Preparation",
        "description": "Enables Preparations related to new, changed or discontinued Part or Part Supplier.",
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
      },
      {
        "id": "062ff1e2-f039-469b-87cc-ae6be4d2d7c9",
        "displayName": "F. Industrialization and On-Demand Release Management / Industrial Introduction Preparation / Supply Chain Preparation",
        "description": "Preparations related to change in logistics flows related to introduction of new, changed or discontinued part/component/product, market volume changes or organizational changes like new part supplier or new manufacturing site. Call off set up, supplier set up, procurement method, transport set up, planning methods like restrictions and order distribution internal and external, customs preparation.",
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
      },
      {
        "id": "b4ef4b4c-d27c-41b3-a8e2-ffad86b1f703",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management / Supplier Relationships",
        "description": "Find and contract qualified suppliers based on the ability of sustainable relations and work with continued improvement regarding risk elimination, quality and innovation using the approved processes and tools.",
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
      }
    ],
    "organisations": [
      {
        "id": "20dd09ad-1df9-44c1-bbd7-6d34dcf6e719",
        "displayName": "MAN",
        "usageType": null,
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
        ]
      },
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
        "usageType": null,
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
        "usageType": null,
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
      },
      {
        "id": "2d94abb9-95c7-47b3-a3e0-8a6d0d73f4b8",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KE - Power Solutions",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-20"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "daacaa35-74a1-4a07-84d9-5cb12350f62f",
        "displayName": "TRATON Holding",
        "usageType": "user",
        "description": "The holding company of TRATON and not the entire TRATON Group.",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
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
      },
      {
        "id": "ad5838ed-6030-4875-865d-ff980bd16546",
        "description": null,
        "displayName": "SMART_SMART",
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