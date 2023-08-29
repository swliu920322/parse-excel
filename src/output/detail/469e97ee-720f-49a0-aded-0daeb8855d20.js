export default {
  "completion": {
    "percentage": 65,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 53,
    "dataManagement": 25,
    "dependencies": 100,
    "information": 71,
    "projects": 100,
    "robots": 100,
    "sourcing": 40
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "hilde.van_samang@scania.com",
      "email": "hilde.van_samang@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "ali.erdem@scania.com",
      "email": "ali.erdem@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Fredrik",
      "lastName": "Gustafsson",
      "displayName": "Fredrik Gustafsson",
      "email": "fredrik.gustafsson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Roel",
      "lastName": "ten Kleij",
      "displayName": "Roel ten Kleij",
      "email": "Roel.ten_Kleij@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "janhi.elhoucine@scania.com",
      "email": "janhi.elhoucine@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Aline",
      "lastName": "Mokdessi-Elias",
      "displayName": "Aline Mokdessi-Elias",
      "email": "aline.mokdessi.elias@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Karin",
      "lastName": "Alfredsson",
      "displayName": "Karin Alfredsson",
      "email": "karin.alfredsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Björn",
      "lastName": "Strömstedt",
      "displayName": "Björn Strömstedt",
      "email": "bjorn.stromstedt@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Ali ",
      "lastName": "Yesilli",
      "displayName": "Ali  Yesilli",
      "email": "haci-ali.yesilli@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Developer"
      ]
    }
  ],
  "information": {
    "name": "INDIANA (DW)",
    "description": "Enable better business decisions and financial reporting within S&M by providing business related data for Trucks, Buses and Power Solutions.\n\nINDIANA = INDIVIDUAL ANALYSIS and is the base for all profitability analysis within Sales and Marketing for Trucks, Buses and Power Solutions.\nINDIANA …\n… is a CDW application (common data warehouse) that contains historical data for several years but also predict future profitability one year ahead.\n… enables analysis of revenues and base costs within S&M.\n… contains both financial and technical information as well as currencies, markets, regions, customers, targets, registrations, etc.\n… allows analysis on an individual level but also on an aggregated level for global S&M.\n… has 4 different power bi applications using the information and information is also shared with other applications\n\n",
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
    "productCategory": "Data warehouse",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
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
    ],
    "children": [
      {
        "id": "683ec068-da4b-458d-9132-db6252595999",
        "activeFrom": null,
        "activeUntil": null,
        "description": "PowerBI application for follow-up for busses used by KB. ",
        "displayName": "Common Data Warehouse / INDIANA (DW) / KB BI Tool",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "a0c84caa-2137-4ffb-aaa9-59e1ac30147b",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Power BI application for Central Controlling Sales & Marketing",
        "displayName": "Common Data Warehouse / INDIANA (DW) / KC Indiana",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "e6ff0118-a38d-4ae1-be16-457d64fc80fc",
        "activeFrom": null,
        "activeUntil": null,
        "description": "BI Application to follow-up on power solutions used by KE.",
        "displayName": "Common Data Warehouse / INDIANA (DW) / KE BI Tool",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "c248c3a7-bcdb-431f-9a37-4b43eeecabcd",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Power BI tool for business follow up and forcasting (trucks)",
        "displayName": "Common Data Warehouse / INDIANA (DW) / Profit",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "d54d8da6-599d-4ed6-952e-17a9f43e605c",
      "displayName": "Industrial ERP Backbone",
      "fullName": "Industrial ERP Backbone",
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
            "startDate": "2021-05-04"
          },
          {
            "phase": "active",
            "startDate": "2021-05-04"
          },
          {
            "phase": "endOfLife",
            "startDate": "2028-03-30"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Tina Arnstedt",
          "email": "tina.arnstedt@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jonas Hagström",
          "email": "Jonas.Hagstrom@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anupam Goyal",
          "email": "anupam.goyal@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Björn Lindstenz",
          "email": "bjorn.lindstenz@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sven Daniëls",
          "email": "sven.daniels@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "ba01d7d2-e71e-4ffa-a62f-f6e150a5494b",
      "displayName": "Phase out RHEL 6",
      "fullName": "Phase out RHEL 6",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2021-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2021-04-25"
          },
          {
            "phase": "active",
            "startDate": "2021-04-25"
          },
          {
            "phase": "endOfLife",
            "startDate": "2022-04-30"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Christoffer Hedström",
          "email": "christoffer.hedstrom@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Thomas Öberg",
          "email": "thomas.x.oberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sudheer GV",
          "email": "sudheer.gv@scania.com",
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
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "3126d041-8c69-41d3-b76b-b29b0a2c76ea",
        "displayName": "N. Financial Planning and Accounting / Financial Planning & Analytics",
        "description": "To be able to plan, steer and follow up the Scania group, from each reporting unit or even cost / profit center to the whole company group",
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
        "id": "6d2f3b48-0639-43ce-b653-d4876a616391",
        "displayName": "Supporting processes / Finance Process / Controlling & Analytics",
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
      },
      {
        "id": "15a9fca2-8b3f-42aa-89d2-dc8f6cdece5e",
        "displayName": "Supporting processes / Finance Process / Group Reporting / Prepare Unit Regulatory Reporting",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
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
        "id": "279cc393-6751-4fd4-ade8-0487add68d83",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAF - Sales and Services Business Intelligence",
        "usageType": "ITmaintenance",
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
      },
      {
        "id": "9f3bc258-6f9c-495b-958c-ddc6ab55dde1",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KC - Finance and Business Control / KCX - Central Controlling",
        "usageType": "owner",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "ec164c08-5f13-4c3f-a48a-f7e597e1c24f",
        "description": null,
        "displayName": "Consolidation Domain",
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
        "id": "76e4e073-e7d4-4353-9372-b636e2f8860d",
        "description": "The Finance Plan Domain includes the structure and information need for integration between business value-carriers and financial values.",
        "displayName": "Financial Control Domain / Financial Plan Entity",
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
        "id": "a863c435-0570-4934-8a88-8b4f53fc444b",
        "description": "This domain represents the time-stamped commercial document that itemizes and records a transaction between a buyer and a seller. If goods or services were purchased on credit, the invoice usually specifies the terms of the deal and provides information on the available methods of payment.",
        "displayName": "Financial Control Domain / Invoice Entity",
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
        "id": "4dbb98f8-e583-4368-9ce4-8c0f67379b96",
        "description": "A ledger account is a record in an accounting system that tracks the financial activities of a specific asset, liability, equity, revenue, or expense.",
        "displayName": "Financial Control Domain / Ledger and Account Entity / Ledger Account",
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
        "id": "f7756442-6904-41dd-9dd6-ceff4f15f9f8",
        "description": null,
        "displayName": "Financial Control Domain / Performance Item Entity",
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
        "id": "06025653-bf3f-4fcb-933a-fad0c7472672",
        "description": "Product As Individual domain represents all real world manufactured product as designed models, i.e. ordered, delivered and maintained trucks, buses and coaches and Scania engines that can be part in the active fleet at some customer site.",
        "displayName": "Individual Vehicle and Engine Domain / Product As Individual Entity",
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
        "id": "30974f11-b8a0-4696-883d-9c5ebe6d5cbb",
        "description": "Master Data Source QING A customer is an organization responsible for issuing an order to Scania, and is bound by all legal commitments linked to this event. Here in this customer entity it more distinctly represents \t  End-customer as Operator \t  End-customer as Owner   Other kind of \"customers\" (as Distributors, Dealers and Suppliers) which act in dealing and business events (such as Sales Order) will only occur once in this basic directory, however will they be represented in other information domains in some kind of purchasing and customer role related to the actual business event (i.e. Sales Order, Work Order, Service Usage Item).  Customer represents a corporation which is a  business partner  to and has a  customer relationship with Scania . Compared with Customer Site this subdivision represents the administrative office level.  This definition is distinct in another way than the more general \"A customer is a trading partner to whom a supplier supplies products and services\" (wiki.inline.scania.com). With this definition customer be equal to all supplied trading partners (and can be Distributors, Dealers, Workshop and other Scania internal units).  Customer is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Customer",
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
        "id": "5f0db293-267a-41d6-9a2a-874efc4b6aa6",
        "description": "Organisation is a highly important part in Scania business - including Scania company and its units itself - which is important to store and track information about. Organisation has for example references to Sales Order (Customer in role purchaser and Scania Unit in role seller) and to Customer Invoice (invoiced to Customer and invoiced by Sales Unit).  Organisation is a main division of the superior and more generic entity Party, where Party also includes individual Person (as for example employee, maintenance responsible and driver) that are of importance for Scania.  The basic division of Organisations for Scania purposes is in Scania Unit, Production Unit, Warehouse Inventory, Distributor, Dealer, Workshop, Supplier, Customer, Customer Site and Organisation Other.  Party also has addresses with different purposes and they belongs to different Territories of different types (country, sales region, economical community etc.).  An important objective of this organisational structure is that a specific instance of an organisation, with all its descriptive facts, only will be saved once regardless of how many roles the Organisation has relationships with Scania. The substructure essentially mirrors mutually exclusive and parallel subcategories of organisations. However, for example, a Supplier may also act in the role of the Customer. In this case, it will probably have different organisational units within a main organisation to represent these different roles. An internal organisational structure can make that these can be kept together, and show that a Supplier also acts as Customer.",
        "displayName": "Organisation Domain / Party & Customer Entity / Organisation",
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
        "id": "07c1fb7f-7217-426f-8fcf-cc0c2448d280",
        "description": "Specification level under Sales Order that specify one or several Sales Order Lines.",
        "displayName": "Sales & Agreement Domain / Sales & Agreement Entity / Sales Order Line",
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
        "id": "0795f2c7-3abe-4e81-a023-cf001d7a3e5c",
        "description": "Sending POD SIAM Database\nSending Contract SCCO1228\nSCIS250_SIFO_Indiana",
        "displayName": "Oracle Financials (EBS) / eBS_AR_SIFO_Indiana SCCO1279",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-31"
            },
            {
              "phase": "endOfLife",
              "startDate": "2022-12-13"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "00d00414-ca68-4ecc-985b-e7092e55e72e",
        "description": "Sending POD SIAM DAtabase\nSending Contract SCCO1290\nSCIS250_Indiana",
        "displayName": "Oracle Financials (EBS) / eBS_AR_SIFO_Indiana SCCO1291",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-31"
            },
            {
              "phase": "endOfLife",
              "startDate": "2022-12-31"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "d6ea4ce8-43da-44a6-9eef-e3c651d8b102",
          "displayName": "Oracle Data Integrator 12c R2",
          "category": "software",
          "description": "Oracle Data Integrator is a comprehensive data integration platform that covers all data integration requirements: from high-volume, high-performance batch loads, to event-driven, trickle-feed integration processes, to SOA-enabled data services.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-10-01"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-08-01"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-08-01"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "KCX",
    "ChinaDesign": "IXAF",
    "ChinaSourcing": "IXAF",
    "ChinaPaying": "IXAF",
    "ChinaImplementation": "IXAF",
    "Chinaverification": "IXAF",
    "ChinaOperations": "IXAF"
  }
}