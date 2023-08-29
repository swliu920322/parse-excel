export default {
  "completion": {
    "percentage": 72,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 66,
    "dataManagement": 61,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 28
  },
  "subscriptions": [
    {
      "firstName": "Maha",
      "lastName": "Chamoun",
      "displayName": "Maha Chamoun",
      "email": "maha.chamoun@scania.com",
      "type": "OBSERVER",
      "role": []
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
      "firstName": "Pablo",
      "lastName": "Ahava Pizarro",
      "displayName": "Pablo Ahava Pizarro",
      "email": "pablo.x.ahava.pizarro@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Roel",
      "lastName": "ten Kleij",
      "displayName": "Roel ten Kleij",
      "email": "Roel.ten_Kleij@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Jan",
      "lastName": "Johansson",
      "displayName": "Jan Johansson",
      "email": "jan_k.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Helena",
      "lastName": "Norrgård",
      "displayName": "Helena Norrgård",
      "email": "Helena.Norrgard@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Komal",
      "lastName": "Matkar",
      "displayName": "Komal Matkar",
      "email": "komal.matkar@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Deepa",
      "lastName": "Dharmesh",
      "displayName": "Deepa Dharmesh",
      "email": "deepa.dharmesh@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Basware P2P - Invoice Management",
    "description": "Basware P2P IM is used within the Industrial Operation (IO) and replaced EFHEKT. \n\nThe application recieves Invoices (AP), Purchace Orders and Reciepts validates them for quality and approves them for Payment. As final step in the process is to send them to eBS (ERP) for payment.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-08-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2027-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "baf633df-fcc9-400f-a2a8-4872b69fb5da",
        "displayName": "EFHEKT",
        "description": "Basware Invoice Processing for scania industrial operations (IO name is EFHEKT)",
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
    "parent": [
      {
        "id": "ccfb5726-12fa-4b12-bd34-65ac1d42aaeb",
        "displayName": "Basware P2P",
        "description": null,
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "0a50c59d-a620-4470-abe4-9e91d6c7d9a4",
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
      "id": "ceaa02b2-bcf5-455d-87a0-4d768967ca46",
      "displayName": "Basware P2P IM",
      "fullName": "Basware P2P IM",
      "tags": [
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "endOfLife",
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
            "startDate": "2019-11-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2021-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Sirpa Södereng",
          "email": "sirpa.sodereng@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Linda Törnkvist",
          "email": "linda.tornkvist@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "71e5b5dc-a3ee-450f-9517-a93f021d3883",
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
      "id": "4e8803c2-b6e5-4ec2-9d8d-cffcb18b4c5e",
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
    },
    {
      "id": "2aeb348a-b2f5-4d17-b05e-5bdbe4829448",
      "displayName": "SAS Industrial Project - China / China Logistics IT / China Outbound",
      "fullName": "China Outbound",
      "tags": [
        "China affected"
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
          "displayName": "Tove Norén",
          "email": "tove.noren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Zora Berglund",
          "email": "zora.berglund@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Archit Tripathi",
          "email": "archit.tripathi@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marika Saarela",
          "email": "marika.saarela@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "f6c6f308-5238-47ac-95be-461b172099fa",
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2017-10-18",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2020-10-18",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "c3c0dc13-e5f2-4410-b087-0ce4c826f255",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Purchase Ordering",
        "description": "Eg: \n\nâ€¢ Supplier purchase order/call off (including NAP Ordering, AP Ordering, Tools Ordering, Experimental Parts Ordering)\n\nâ€¢ Supplier delivery scheduling (including Supplier delivery schedule creation, Supplier delivery schedule distribution)",
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
        "id": "bd31c191-4066-4772-8f50-63576bf0e1da",
        "displayName": "Supporting processes / Finance Process / General Accounting",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "5da3e1d1-e79f-4df6-9c17-b3366d50ceda",
        "displayName": "Supporting processes / Finance Process / General Accounting / AR vs AP Intercompany Recoincilliation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "7b51faa8-720a-4deb-a259-d3780ed42f23",
        "displayName": "Supporting processes / Finance Process / General Accounting / Personnel Related Postings",
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
        "id": "fae3e6e6-31f3-4fae-be9c-c059ba38fcdb",
        "displayName": "Supporting processes / Finance Process / General Accounting / Resolve Audit Query",
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
        "id": "180506f9-2954-4e28-8eab-1e3b4d2a9fbc",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZA - Finance IT / IZAB - Purchase2Pay",
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
        "id": "b814db06-be54-494b-a20f-da1139db1861",
        "displayName": "Scania - Scania CV AB / P_FB - Finance and Business Control / ZE - Finance Strategy & Transformation / ZEO - Scania Financial Processes Centre / ZEOI - Process Improvement",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-07-04"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "b8e25aad-1c3c-4d4f-bb15-0c225815e06f",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production / MA - Scania Production Angers SAS",
        "usageType": "user",
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
        "id": "974f0e59-c488-47f5-91db-cff444a3bab1",
        "description": "Cash management is about the collection, handling and usage of cash, including market liquidity and cash flow. Each payment occasion irrespective of payment direction is managed here, i.e. both credit transfer to creditor (as suppliers) and direct debit collection to debtor (as customers).  Cash concentration with different type of cash pool is here an important way of working in order to improve cash control and cash visibility. Standardized international collection mandates between the involved bank and customer and supplier parties will have a growing importance within cash management.",
        "displayName": "Financial Control Domain / Payment Entity",
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
        "id": "350a9519-c2bb-4798-9615-d7364a4f4a86",
        "description": "shipment is the cohesive level to hold together a complete delivery between a part supplier and a consignee.",
        "displayName": "Logistics Domain / Transport Operation Entity / Shipment",
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
        "id": "3cee63b0-3400-4c0c-af63-e4b4886e9eaa",
        "description": "Address entity represents all kind of addresses that can be useful to reach and connect to a specific Party, Organization or Person, independent of Territory. It can be about Postal, Physical, Internet or Phone addresses.",
        "displayName": "Organisation Domain / Address Entity",
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
      },
      {
        "id": "a470c754-3a7b-4720-bb4a-9abddf86a865",
        "description": "Party represents a generic level describing information objects, human and non-human that has some interaction with Scania both internally and externally.",
        "displayName": "Organisation Domain / Party & Customer Entity / Party",
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
        "id": "657625f5-8516-4c48-a48e-c8fb5b6e5308",
        "description": "API eBS AP <--> Basware P2P IM and Basware P2P PM <--> API eBS AP\nThis integration is used for all business units",
        "displayName": "Basware P2P_P2P API Invoice",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "phaseIn",
              "startDate": "2019-04-01"
            },
            {
              "phase": "active",
              "startDate": "2019-10-05"
            },
            {
              "phase": "endOfLife",
              "startDate": "2025-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "c71447fd-0e06-4057-bd2a-15cd09090877",
        "description": "EROS service for exchange rate",
        "displayName": "EROS_CurrencyService IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-09"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "052e0433-5ec2-4f1f-bbdf-176024019efe",
        "description": "This is a System API to send error feedback to EBS.",
        "displayName": "Oracle Financials (EBS)_Error_Management_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "3238842b-0a5f-4bce-b231-a7c0331321e5",
        "description": "This is System API to post invoice in EBS. Currently implemented for Invoices received from P2P.",
        "displayName": "Oracle Financials (EBS)_InvoiceManagement_EBS_Alusta IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "982e33e5-5824-4182-8712-c1a61e07b3a8",
        "description": "This is a System API to search the responses for eBS AP invoices, i.e. vouchers and payments, based on few search parameters. This is designed for potential future use when other AP responses are required from EBS.",
        "displayName": "Oracle Financials (EBS)_InvoiceResponseManagement_EBS_Alusta IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "62143164-71a4-4b9c-9eb9-a728b536a335",
        "description": "This is a System API to search for SUPPLIER master data information in EBS based on few search parameters. This is designed for potential future use when other applications require SUPPLIER information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_AP_Supplier_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f4ff9665-88da-43cd-b173-aff1922795a9",
        "description": "This is a System API to search for FIXED ASSET master data information in EBS based on few search parameters. This is designed for potential future use when other applications require FIXED ASSET information   from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_FixedAsset_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ff27b6c5-8725-4a39-b2b1-d5711e7029eb",
        "description": "This is a System API to search for GL ACCOUNT master data information in EBS based on few search parameters. This is designed for potential future use when other applications require ACCOUNT information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_ACCOUNT_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-16"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cf3fa502-42ee-4d9d-a5ed-3b836a560c10",
        "description": "This is a System API to search for GL ACTIVITY master data information in EBS based on few search parameters. This is designed for potential future use when other applications require ACTIVITY information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_Activity_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "c8b3d11a-98bd-43b0-80ec-42c369f0b441",
        "description": "This is a System API to search for GL COST CENTER (RESP) master data information in EBS based on few search parameters. This is designed for potential future use when other applications require COST CENTER information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_CostCenter_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "5df69f7b-db8b-437f-bd79-5c0344e91d42",
        "description": "This is a System API to search for GL COUNTERPART master data information in EBS based on few search parameters. This is designed for potential future use when other applications require COUNTERPART information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_Counterpart_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6325141d-c94d-490f-9293-1df89dee1bea",
        "description": "This is a System API to search for GL daily rates information in EBS based on few search parameters. This API returns the exchange rates for eBS currencies that will be used for listing or transaction purposes. The information returned will include the exchange rate and the corresponding inversed rate. This API is designed for potential future use when other applications require the daily rates information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_Exchange_Rate_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "9ecdf335-3c57-4b85-9aaf-dd8124e0f97b",
        "description": "This is a System API to search for GL PROJECT master data information in EBS based on few search parameters. This is designed for potential future use when other applications require PROJECT information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_Project_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "3afa2f98-b474-445a-92e2-82b6bacfbc41",
        "description": "This is a System API to search for GL SPECIFICATION CODE master data information in EBS based on few search parameters. This is designed for potential future use when other applications require SPECIFICATION CODE information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_SpecCode_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "9e897949-1b72-4c10-b108-99cebaa7dd71",
        "description": "This is a System API to search for GL cross validation rule information in EBS based on few search parameters. This API returns rules that must be used to validate a coding string, to ensure that the coding used is valid. The validation rules checks that the individual values in the coding string are allowed to be used in combination. This API is designed for potential future use when other applications require GL validation rule information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_GL_Validation_Rule_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "7c885efd-d7d6-465d-8500-cac4756eb05f",
        "description": "This is a System API to search for PA cross validation rule information in EBS based on few search parameters. This API returns rules that must be used to validate a GL coding string, to ensure that the coding used is valid. The validation rules checks that the individual values in the coding string are allowed to be used in combination. This API is designed for potential future use when other applications require GL-PA validation rule information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_PA_Validation_Rule_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "147a1a53-5f78-41b4-83a3-8411116b4a70",
        "description": "This is a System API to search for value sets master data in EBS based on few search parameters. This is designed for potential future use when other applications require value sets information from EBS.",
        "displayName": "Oracle Financials (EBS)_MasterData_ValueSet_EBS IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "5ae554cd-0e1a-4289-8ccd-d3c210d3a918",
        "description": "This is a System API to send new and updated Purchase Order information from EBS to Basware P2P.",
        "displayName": "Oracle Financials (EBS)_POManagement_EBS_Alusta IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "7ee153a4-114c-41f3-afcc-9dd92d06012c",
        "description": null,
        "displayName": "purchasing_ords_prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-16"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "3ac89688-e343-4173-8671-9816483197df",
        "description": null,
        "displayName": "Scania Supplier Portal / Supplier 360_ScaniaSuppliersAPI IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "661d3a0f-9d97-4dcd-bfff-9c295f10979e",
        "description": null,
        "displayName": "ScaniaSirius-API IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-14"
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
          "id": "aab59f46-8104-4d35-bfa5-4aa985779d41",
          "displayName": "BasWare P2P Cloud Solution n/a",
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
          "id": "82f34f6b-dbbc-440f-aacc-8f77f589f26e",
          "displayName": "BasWare P2P Cloud Solution n/a / Basware PM",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
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
    "ChinaRequirements": "",
    "ChinaDesign": "",
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "",
    "Chinaverification": "",
    "ChinaOperations": ""
  }
}