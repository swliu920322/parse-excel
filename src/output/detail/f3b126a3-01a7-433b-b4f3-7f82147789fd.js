export default {
  "completion": {
    "percentage": 63,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 60,
    "dataManagement": 44,
    "dependencies": 100,
    "information": 67,
    "projects": 100,
    "robots": 100,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Fredrik",
      "lastName": "Nyberg",
      "displayName": "Fredrik Nyberg",
      "email": "fredrik.nyberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Ewa",
      "lastName": "Berglund",
      "displayName": "Ewa Berglund",
      "email": "ewa.berglund@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "eBS_GL",
    "description": "GL: General Ledger, module in Oracle eBS.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "1998-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2030-01-01",
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
        "id": "1c833d08-4448-4e74-a9a0-bb175d85f0c8",
        "displayName": "Oracle Financials (EBS)",
        "description": "Financial and accounting system.",
        "type": "Application",
        "tags": [
          "Critical",
          "PII",
          "China affected",
          "Maturity Level 2",
          "ICS External",
          "ICS internal"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "fee49a7f-20f0-468d-823e-3893caf3f5b7",
      "displayName": "Finance Core (IEB)",
      "fullName": "Finance Core (IEB)",
      "tags": [],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2019-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2019-01-01"
          },
          {
            "phase": "active",
            "startDate": "2020-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2025-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anupam Goyal",
          "email": "anupam.goyal@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Antonia Sandoval",
          "email": "antonia.sandoval@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Fredrik Thunberg",
          "email": "fredrik.thunberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pia Pasanen",
          "email": "pia.pasanen@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "eda2735f-b7fe-4ed1-b1a6-18ab41c1188a",
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
      "id": "84a9da48-d302-4dc3-92d8-2d0253832ed2",
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
      "id": "39597e2d-2379-4323-8e49-76e1e5e77d68",
      "displayName": "SAS Industrial Project - China / China Finance IT",
      "fullName": "China Finance IT",
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
            "startDate": "2025-06-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Jan-Erik Spetz",
          "email": "jan-erik.spetz@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Teodor Danielsson",
          "email": "teodor.danielsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "missionCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2019-02-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2022-02-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "9b6003ce-55fa-41e3-8551-0f504900f066",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Cost Allocation",
        "description": "It enables actual costing for material inventory. Initially, all goods movements in a period are valuated based on standard price. All price and exchange rate differences for the material are collected in the material ledger.\nAt the end of the period, an actual price (called the periodic unit price) is calculated for each material based on actual costs within the period.\nThis calculated actual price can then be used to revalue inventory at period end. After you enter the activity actual rate manually, the actual activity price calculation supports revaluation of COGS and WIP.",
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
      },
      {
        "id": "fae8866f-b277-4b5a-82af-ad4c669856e6",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Financial Close",
        "description": "This capability describes all required period end-closing steps, related to performing local period-end closing and steps that are identical for local and parallel ledger.",
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
      },
      {
        "id": "ca031267-d2bd-48c5-84d0-f2825f997697",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Fixed Asset Accounting",
        "description": "Asset accounting is a subsidiary ledger of the general ledger and is used to manage and document fixed asset transactions in detail. In general ledger accounting, you update depreciation and changes to asset balance sheet values in asset accounting. You make various account assignments to cost accounting for these transactions. ",
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
      },
      {
        "id": "4b04a40f-d64d-4ad3-bfff-e735efd4695e",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / General Ledger Accounting",
        "description": "The central task of general ledger accounting is providing a comprehensive overview of external accounting and accounts. By recording all business transactions, including primary postings and settlements from internal accounting, in a system that is fully integrated with all the other operational areas of a company, you ensure accuracy and completeness for accounting data.\n\nGeneral Ledger Accounting serves as a complete record of all business transactions providing a centralized, up-to-date reference for the rendering of accounts. Actual individual transactions are reviewed with real-time processing, displaying the original documents, line items, and transaction figures at various levels (such as account information, journals, totals, transaction figures, and balance sheets).",
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
      },
      {
        "id": "ea8e5c1d-6d49-432a-92b1-262907536089",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Inventory Accounting",
        "description": "This capability provides users with an example of a process description that they can use as a template for their own valuation processes. Inventory valuation is performed in accordance with local legislation (such as the German Commercial Code), including settings for the overhead structure, valuation variant, and stock valuation with devaluation based on movement rate.",
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
      },
      {
        "id": "1c1785e1-6cc1-47ce-83c7-f279a8ecda29",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Material Valuation",
        "description": "To be added.....",
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
      },
      {
        "id": "3a50526c-9570-46a9-871f-5867659baa1a",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Project Accounting",
        "description": "Projects are generally part of the internal processes of a company. To be able to control all tasks in project execution, you need an organizational form that is specific to the project and which is shared by all departments involved. Before you can carry out a project in its entirety, the project goals must be precisely described and the project activities properly structured. A clear, unambiguous project structure is the basis for successful project planning, monitoring, and control.",
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
      },
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
      },
      {
        "id": "2d0d92aa-c1f2-4da1-b8e1-80afe9c0603d",
        "displayName": "N. Financial Planning and Accounting / Financial Planning & Analytics / Margin/Profitability Analysis",
        "description": "Profitability Analysis enables you to evaluate different business views. This action can be classified according to products, customers, orders, or any combination of these, or according to strategic business units, such as sales organizations or profitability segments with respect to profit or contribution margin of your company.",
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
      },
      {
        "id": "39b29665-c26b-478a-9232-9a8179ddd3ef",
        "displayName": "N. Financial Planning and Accounting / Financial Planning & Analytics / Planning/Forecasting/Budgeting",
        "description": "To be able to plan, steer and follow up the Scania group, from each reporting unit or even cost / profit center to the whole company group, we need to make the best possible financial estimates of the future that the current data and information at hand can give. Depending of the time horizon, the receiver of the estimate and the needed details, we have several different planning processes, of which some are bottom-up and some are done at the top.",
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
      },
      {
        "id": "266c0231-9e49-4c62-94ce-8a03b7380760",
        "displayName": "N. Financial Planning and Accounting / Real Estate Management / Lease in/out Accounting",
        "description": "With Lease in and out accounting in real estate management business operations as well as accounting is manged according to regulations and IFRS 16. ",
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
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "bd31c191-4066-4772-8f50-63576bf0e1da",
        "displayName": "Supporting processes / Finance Process / General Accounting",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "95cdd73e-3580-49b0-b150-ec1c589bf696",
        "displayName": "Supporting processes / Finance Process / General Accounting / Bank Posting and Reconcilliation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "e21f3e68-8d3b-40cd-a965-a0f2ead66d3d",
        "displayName": "Supporting processes / Finance Process / General Accounting / Close and Open GL Accounting Period",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "4494ceab-f594-4084-9bee-b66569531890",
        "displayName": "Supporting processes / Finance Process / General Accounting / Cost Allocation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "a49884cf-dc5f-4301-b52b-60f084fe36e1",
        "displayName": "Supporting processes / Finance Process / General Accounting / Intercompany Balance Reconcilliation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "097c9332-72a3-49e7-b291-44f19c750e9c",
        "displayName": "Supporting processes / Finance Process / General Accounting / Maintain Assets Master Data",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "98873038-fdd3-4344-adc4-130a1c821118",
        "displayName": "Supporting processes / Finance Process / General Accounting / Maintain Cost Allocation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "d7df7206-5f6e-45cc-a91c-b3568c668c03",
        "displayName": "Supporting processes / Finance Process / General Accounting / Maintain Financial Master Data",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "00988593-db08-4d96-85ec-f76aa8803615",
        "displayName": "Supporting processes / Finance Process / General Accounting / Prepare and Process Journal",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "cf854948-34a5-4c76-a8eb-1699339e7be6",
        "displayName": "Supporting processes / Finance Process / General Accounting / Prepare Manual Accruals and Provisions",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "270451c2-8558-4c00-88da-a73665a6d6c4",
        "displayName": "Supporting processes / Finance Process / General Accounting / Project Administration",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "9a01cd50-e46a-425a-8560-b50abf878d16",
        "displayName": "Supporting processes / Finance Process / General Accounting / Reconcile Account - Balance Managed",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "46479476-7018-41c8-8703-9ce154cc94f5",
        "displayName": "Supporting processes / Finance Process / General Accounting / Resolve Internal Query",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "99f923eb-224f-49f7-907d-bfc5c4bb3247",
        "displayName": "Supporting processes / Finance Process / General Accounting / Review and Cleanse R2A Master Data",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "df5d7326-87f7-4c2c-9f3e-5e8a786ba76d",
        "displayName": "Supporting processes / Finance Process / Group Reporting / Prepare Corporate Income Tax Payments and Reconciliation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "76996d3b-2b42-4f08-aaf4-d485ce47061d",
        "displayName": "Supporting processes / Finance Process / Group Reporting / Prepare Corporate Income Tax Return",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "3ef578d3-1a38-4cfb-b1a0-5b35425436da",
        "displayName": "Supporting processes / Finance Process / Group Reporting / Prepare Sales Tax and VAT Return",
        "description": null,
        "lifecycle": null,
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
        "id": "1cf03eaa-387e-4949-a6df-0d4ca41f2f26",
        "displayName": "Supporting processes / Finance Process / Group Reporting / Prepare Unit Statutory Reporting",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "f9f0e5a8-3489-4c59-850a-060fc73b3bba",
        "displayName": "Supporting processes / Finance Process / Investment",
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
            },
            {
              "phase": "phaseOut",
              "startDate": "2025-01-22"
            },
            {
              "phase": "endOfLife",
              "startDate": "2025-01-22"
            }
          ]
        },
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
        "id": "fe38e780-7c7d-4b0c-8892-b12b2805e717",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZA - Finance IT / IZAD - Corporate Control IT 1",
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
        "id": "b1a23cb8-a986-4ee5-9348-e11457aeb265",
        "displayName": "Scania - Scania CV AB / P_FB - Finance and Business Control / J - Corporate Control",
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
        "id": "529485c8-6319-4fb6-b499-e7180f8d5ec4",
        "description": "Inventory management domain is primarily about specifying the size and placement of stocked goods. Inventory management is required at different locations within a facility or within multiple locations of a supply network to protect the regular and planned course of production against the random disturbance of running out of materials or goods. The scope of inventory management also concerns the fine lines between replenishment lead time, carrying costs of inventory, asset management, inventory forecasting, inventory valuation, inventory visibility, future inventory price forecasting, physical inventory, available physical space for inventory, quality management, replenishment, returns and defective goods and demand forecasting.",
        "displayName": "Inventory Management Domain / Inventory Management Entity",
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
        "id": "ed0ab6fe-8f58-4593-8202-d8a8ca57c63b",
        "description": null,
        "displayName": "Logistics Domain / Production Stock Capability Entity",
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
      }
    ],
    "interfaceConsume": [
      {
        "id": "8c1c9cf4-6760-4d04-ad85-c1ee233a9638",
        "description": "Sending Contract:SCCO7348, Sening POD: MQ",
        "displayName": "Aditro L_Salary",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3cdb8687-3d92-443f-99a8-8702aa0ffdae",
        "description": "SCIS100_LockBox",
        "displayName": "ADRA / ADRA Receivables_SCCO100_Lockbox",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "179b8cb7-998b-4f78-b49d-44d2dcfeb84e",
        "description": "Sending contract: SCCO4376, Sending POD: Webservice, SOAP",
        "displayName": "Ledger & Account  SCCO4424",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "76b04518-0dd0-4fdf-b2b1-dcc4db8745a7",
        "description": "Sending Contract: SCCO4226, Sending POD Webservice, SOAP",
        "displayName": "Maximo 8.8.4_Ledger & Account SCCO4509",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "53ff8573-1402-49b2-aca1-76456e7de4f4",
        "description": "Sending Contract: SCCO4222, Sending POD: Webservice,SOAP\n",
        "displayName": "Maximo 8.8.4_Ledger & Account SCCO4510",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ba0c6e8f-9885-411a-82f9-922061930c5a",
        "description": "Sending Contract: SCCO4224, Sending POD: Webservice, SOAP\n",
        "displayName": "Maximo 8.8.4_Ledger & Account SCCO5067",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b7f443bb-5249-4428-b9a5-a3e8ee8ac4f0",
        "description": "Same integration for all local Mona Material. Use unit ID as indentifier. \nMONA-INLEV (UNIT 0014) -> AP Mona Material Cab Oskarshamn\nMONA-INLEV (UNIT 0056) -> AP Mona Material Engine Södertälje\nMONA-INLEV (UNIT 0055) -> AP Mona Material Chassi Södertälje\nMONA-INLEV (UNIT 0057) -> AP Mona Material Transmission Södertälje\nMONA-JUST (UNIT 0014) -> AP Mona Material Cab Oskarshamn\nMONA-JUST (UNIT 0056) -> AP Mona Material Engine Södertälje\nMONA-JUST (UNIT 0055) -> AP Mona Material Chassi Södertälje\nMONA-JUST (UNIT 0057) -> AP Mona Material Transmission Södertälje\nMONA-INLEV (UNIT 0008) -> AP Mona Material Chassi Anger\nMONA-JUST (UNIT 0008) -> AP Mona Material Chassi Anger\nMONA-INLEV (UNIT 0009) -> AP Mona Material Chassi Zwolle\nMONA-JUST (UNIT 0009) -> AP Mona Material Chassi Zwolle\nMONA-INLEV (UNIT 9107) -> AP Mona Material Painting Meppel\nMONA-JUST (UNIT 9107) -> AP Mona Material Painting Meppel\nMONA-INLEV (UNIT 0010) -> AP (FERRUFORM Luleå)\nMONA-JUST (UNIT 0010) -> AP (FERRUFORM Luleå)\nMONA-INLEV (UNIT 0010) -> ME (BATTERY Södertälje)\nMONA-JUST (UNIT 0010) -> ME (BATTERY Södertälje)\n",
        "displayName": "MONA Systems / Mona material (MM)_GL Transactions",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2cd80032-0298-4de2-9402-b8a330108f7a",
        "description": "Sending Contract: SCCO8972, Sending POD: File in folder ",
        "displayName": "Personec TEIS_Expenditures",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ca954a75-b5dd-40f0-935c-9c631e601c65",
        "description": "Sending Contract: SCCO5763/SCCO7545/SCCO8044, Sending POD:MQ",
        "displayName": "SALSA (SAP Spare parts)_GL_SALSA_SPINE SCCO5800",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f35a4d5f-efed-4c4c-b2c8-076e8cac25e5",
        "description": "Sending contract SCCO5763/SCCO7545/SCCO8044/SCCO8223/SCCO\nSCIS830_FinancialInvoice",
        "displayName": "SPINE_scco5764",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fe2755ea-2be0-4d87-92c5-cf9ce18caf57",
        "description": "Sending Contract: SCCO7296 Sending POD: MQ\nSCIS171_EPIC_CarCosts_SIFO",
        "displayName": "VW Finans_Ledger & Account SCCO7356",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "a63d9d2d-beab-4afd-8154-f2612b338c0f",
        "description": null,
        "displayName": "Oracle Financials (EBS) / eBS_GL_Cost",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "02752081-7a34-458d-8776-2ab0aaf51f4c",
        "description": "Need further investigation",
        "displayName": "Oracle Financials (EBS) / eBS_GL_General Ledger",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d2b1b2a5-1784-4d71-aa31-169bfd5b6d9f",
        "description": "Sending POD SIAM Database\nSending contract SCCO5001\nSCIS632_MXGLCompService",
        "displayName": "Oracle Financials (EBS) / eBS_GL_MXGLCmopService SCCO4253",
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
      },
      {
        "id": "11e8cf01-e83e-490a-8b21-d1e5df869ec0",
        "description": "Sending POD SIAM Database Sending contract SCCO1767 SCIS306_SIFO_TEIS\nProject activities and process codes\nSCIS306_SIFO_TEIS",
        "displayName": "Oracle Financials (EBS) / eBS_GL_Projects_Codes",
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
      },
      {
        "id": "f9e42e5b-fa5b-4dcc-9f46-235106586629",
        "description": "Sending POD SIAM Database\nSending contract SCCO2290\nSCIS353_SIFO_Diver",
        "displayName": "Oracle Financials (EBS) / eBS_GL_SIFO_Diver SCCO2291",
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
      },
      {
        "id": "c3a05eb1-8fdb-4adc-9580-0c6d40b82b3d",
        "description": "Sending POD SIAM Database\nSending contract SCCO2290\nSCIS353_SIFO_Diver",
        "displayName": "Oracle Financials (EBS) / eBS_GL_SIFO_Diver SCCO8353",
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
      },
      {
        "id": "96800c3e-6cd7-462f-8887-60d08e04da71",
        "description": null,
        "displayName": "Oracle Financials (EBS) / eBS_GL_Trial_Balance",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "9d381c4f-0e4b-4223-bd41-cf00e8f50941",
          "displayName": "Oracle E-Business Suite 12.2.7",
          "category": "software",
          "description": "Oracle E-Business Suite supports today’s evolving business models, drives productivity, and meets the demands of the modern mobile user.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2017-09-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "7bd0464f-0001-4e5a-bfee-e33a3cc6a6d2",
          "displayName": "Oracle EBS General Ledger",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": null
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