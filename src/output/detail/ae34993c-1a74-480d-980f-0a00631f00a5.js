export default {
  "completion": {
    "percentage": 46,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 62,
    "dataManagement": 46,
    "dependencies": 100,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 29
  },
  "subscriptions": [
    {
      "firstName": "Jungkan",
      "lastName": "Iljas",
      "displayName": "Jungkan Iljas",
      "email": "jungkan.iljas@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
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
      "firstName": "Yelena",
      "lastName": "Crona",
      "displayName": "Yelena Crona",
      "email": "yelena.crona@scania.com",
      "type": "OBSERVER",
      "role": []
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
    "name": "Scania Supplier Information Portal",
    "description": "Scania Supplier Information Portal, Supplier Basic data Master. Also give possibility to search on Purchase Agreement, Supplier, Purchasers. ",
    "lifecycle": {
      "asString": "phaseOut",
      "phases": [
        {
          "phase": "active",
          "startDate": "2019-01-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2023-08-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2025-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "fcff51e9-029e-4193-9681-de9a7c9f6fcf",
        "displayName": "PSP",
        "description": "PSP stands for Process Support Portal and is made to phase out Purchasings part of Aros/Rosam. The user can search for purchasing information like Agreements, prices, suppliers and purchaser codes. ",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "b2bd1a20-fc82-44b8-9310-f1f96728abb7",
        "activeFrom": null,
        "activeUntil": null,
        "description": "IEB Transit Platform",
        "displayName": "Scania Supplier Information Portal / IEB Transit Platform",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "a6aa8029-5fbd-46ab-8c5c-abc940686b70",
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
      "id": "7b07a8d2-0fbb-4907-8ff1-88bd1652a5ab",
      "displayName": "Component Legal Compliance",
      "fullName": "Component Legal Compliance",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-01-03"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Johan Berneskog",
          "email": "johan.berneskog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Vinny Vincent",
          "email": "vinny.vincent@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Tomas Snellman",
          "email": "tomas.snellman@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Iréne Klingberg",
          "email": "irene.klingberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Supriyo Rana",
          "email": "supriyo.rana@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Anna Östh",
          "email": "anna.osth@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Jonas Roos",
          "email": "jonas.x.roos@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "71998800-bce4-4a52-b4db-0339b677d67c",
      "displayName": "Industrial ERP Backbone / IEB R23.1 / Aurora MVP1",
      "fullName": "Aurora MVP1",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-04-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2023-03-31"
          }
        ]
      },
      "subscriptions": []
    },
    {
      "id": "7e239ed0-4ff9-45ed-8169-a69c5d99a2c9",
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
      "id": "58e5c32a-6928-430f-ad33-0beda6a7dc3d",
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
      "id": "0f24ef96-55a9-4e77-b398-5927648fa57f",
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "insufficient",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "59e676ca-2771-46a3-b0a9-0e28613d8411",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Supplier Invoice Handling",
        "description": "The ability to manage invoices from suppliers, including approval, creation/registration, validation and payment. Example: Supplier invoice approval, Supplier invoice creation/registration, Supplier invoice payment, Supplier invoice validation",
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
      },
      {
        "id": "36cc96bb-de74-4786-ad7f-aa1ac0cef349",
        "displayName": "N. Financial Planning and Accounting / Financial Operation / Accounts Payable",
        "description": "With Accounts Payable, you manage your open payable invoices that are automatically created from purchasing processes.\nYou manage and control open items with various analytical tools. You plan future payables and analyze the outcome of payments, such as utilization of cash discounts and days payables outstanding.\nProcess your outstanding payables automatically and monitor payment progress. Optionally, you can also include a two-step approval for all outgoing payments.\nConnect to SAP Multi-Bank Connectivity (MBC) to simplify the connectivity to the banks for payments and bank statements. Alternatively, you can also download generated payment files.\nFor countries/regions where this is relevant, you can also print checks.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2021-10-12"
            },
            {
              "phase": "phaseIn",
              "startDate": "2021-10-17"
            },
            {
              "phase": "active",
              "startDate": "2021-10-17"
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
        "id": "1b2a6bdc-2a59-4f09-bbde-f0fca4a0f2f2",
        "displayName": "Supporting processes / Finance Process / Accounts Payable",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "0f4d97be-4448-4406-b3cc-58de40b74bac",
        "displayName": "Supporting processes / Finance Process / Material & Inventory Accounting",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2020-01-22"
            },
            {
              "phase": "phaseIn",
              "startDate": "2020-01-22"
            },
            {
              "phase": "active",
              "startDate": "2020-01-22"
            }
          ]
        },
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
        "id": "cd927cc7-5324-4f42-a037-30936d227e3b",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN1 - Business Development / SNH - Purchasing Administration",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-01"
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
        "id": "a20b8cf4-cf7f-44e6-a2de-0e7e3e402d54",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN1 - Business Development / SNS - Sustainability & Product Compliance​",
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
      },
      {
        "id": "528c4882-c637-4f28-8bc3-02d1c1fb530f",
        "description": "Material Capability domain represents the  material and assembly parts  that Scania use on different sites and production units around the world as sources for  component ,  main component  or  final assembly  production. Material information includes the inventory of raw, finished, intermediate materials, and consumables.  Information about material is important for activities in overall business planning & logistics as well as more operational close activities in Process Segment and manufacturing operations management.  Different kind of material related tests specifications with information about accomplished material tests is also handled here. Based on ANSI/ISA-95.",
        "displayName": "Production Domain / Material Capability Entity",
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
      },
      {
        "id": "a51ee7f9-a7b7-4075-b2fb-b25bb9604ef2",
        "description": "Purchase Agreement and uniting level for Purchase Agreement Line, referring to agreement owner and invoice account, where one agreement can consist of several Purchase Agreement Line.",
        "displayName": "Purchase & Agreement Domain / Purchase Order Entity / Purchase Agreement",
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
        "id": "710456df-97dd-47b6-b356-263c4103f4e9",
        "description": "Uniting time-related main level for one or several Purchase Order Lines. Each order is a business interaction between Scania and a supplier party, which offer sourcing products. Represents the buying party's documented commitment to purchase a product from a supplier in accordance with the specified criteria in order to meet the business needs of input products for production and other operations.  Various parties and part of the purchasing business - like factory, distributor, dealer and the company's other own business units - can act as a buying party from other parties who have equivalent roles as well as from the company's external suppliers.",
        "displayName": "Purchase & Agreement Domain / Purchase Order Entity / Purchase Order",
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
        "id": "7abd845a-6627-4061-8d7b-cab62bbbbe30",
        "description": null,
        "displayName": "WAM_WAM SAML2 Authentication",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "841dc489-8110-4919-9fd8-8171c44d18dc",
        "description": null,
        "displayName": "Scania Supplier Information Portal_Purchasing SSIP Supplier [REST]",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-07-10"
            }
          ]
        },
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "1e3e96e3-d619-43fc-a3e6-2054e3762a73",
        "description": "Sending contract SCCO7426\nSCIS178_TPM_SUP",
        "displayName": "Scania Supplier Information Portal_scco4546_Supplier_registry",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "61d2f1ce-5181-4d50-abdc-1849ed865101",
        "description": null,
        "displayName": "Scania Supplier Information Portal_Supplier MQ Service",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "15b31377-fab0-4d25-9da9-ec9eb50525aa",
        "description": null,
        "displayName": "Scania Supplier Information Portal_Supplier Web Service",
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
    ]
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
          "id": "bf8ffb9c-0d5a-4f0c-b2bd-fc950254771e",
          "displayName": "Microsoft SQL Server 2012 SP1",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2012-11-07"
              },
              {
                "phase": "endOfLife",
                "startDate": "2015-07-14"
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
    "ChinaITlegalCompliance": "SQCcompleted",
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