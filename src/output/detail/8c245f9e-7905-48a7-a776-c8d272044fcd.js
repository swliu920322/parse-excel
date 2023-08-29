export default {
  "completion": {
    "percentage": 77,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 61,
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
    "name": "eWarranty",
    "description": "Supports the handling process of field warranty claims internally as well as with the external supplier.",
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
      "id": "3718b491-5899-4683-b1a9-f6530584f313",
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
      "id": "0229ccfa-731f-4390-b066-77db2b295675",
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
      "id": "46081194-015f-44fa-91fd-8506f266cf63",
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
      "id": "e581ecfe-6310-432f-852a-763aa2114dca",
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
      "id": "4cd5aeb0-0576-422f-b58d-342c4afdb33f",
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
      },
      {
        "id": "ac0d7d2f-858c-44cf-903f-737657ff320c",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management / Supply Chain Monitoring",
        "description": "Monitoring and reporting progress for material deliveries through the whole supply chain.",
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
        "id": "43b244fa-1210-4c1a-b46a-72ae44f51e8b",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Solution Quality and Warranty Management / Field Quality Management",
        "description": "The ability to detect quality deviations in products and services which have, or may have, been delivered to customers, and initiate appropriate measures to mitigate related risks.",
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
          "China affected",
          "MilkyWay area 1. Continuous Exploration"
        ]
      },
      {
        "id": "9b7272ae-e262-4f3e-aa6d-941d5ffcfea0",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Solution Quality and Warranty Management / Product Issue Follow Up",
        "description": "Ability to follow up what went wrong and work with improvements",
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
          "China affected",
          "MilkyWay area 1. Continuous Exploration"
        ]
      }
    ],
    "processes": [
      {
        "id": "f6a1b815-8f35-4a5b-867e-c954723fd527",
        "displayName": "Product development / Product Follow Up - Red Arrow / Deviation Handling",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "88c0af8e-53c7-46bc-8d63-398aceb335a4",
        "displayName": "Product development / Product Follow Up - Red Arrow / Deviation Handling / Field Quality - FQ",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
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
        "id": "db27b2a1-255b-4ef5-885f-eb324e66cbd4",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LD - Powertrain Production",
        "usageType": null,
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
        "id": "01895582-cb96-4c0b-957e-a99c137fc9ac",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LM - Chassis and Cab Production",
        "usageType": null,
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
        "id": "dbd45f12-0b4a-496c-bf8a-c3b7dc4e19bb",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / D - Powertrain Production",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-03"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "fc47c1ee-bfc9-43ae-984e-1f75846d6abc",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-12"
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
        "id": "ff2d7444-cdeb-46c2-baaa-9f17af4d50a6",
        "description": "every occurrance that deviate from normal behavior",
        "displayName": "General Information Objects Domain / Generic Deviation Entity / General Deviation",
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
        "id": "3c429e51-65a2-4f10-8a4e-412102d57b20",
        "description": "every occurrance that deviate from specification  As  Assembling Dimension deviation Cleanness Function  Hardening Machining Material defects Scratechs/Dents Surface treatment  Handling Mixed parts Part marking",
        "displayName": "General Information Objects Domain / Generic Deviation Entity / Purchased Part Deviation",
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
        "id": "af1a10cd-7939-44ee-8892-e63eaa524c6f",
        "description": "explaining the deviation",
        "displayName": "General Information Objects Domain / Generic Deviation Entity / Root Cause",
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
        "id": "acba892b-f8d0-4e5e-a7d4-bdfaa7872910",
        "description": null,
        "displayName": "CHIN",
        "lifecycle": null,
        "tags": []
      },
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