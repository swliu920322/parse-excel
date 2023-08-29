export default {
  "completion": {
    "percentage": 54,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 60,
    "dataManagement": 40,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 0,
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
    }
  ],
  "information": {
    "name": "eBS_AP",
    "description": "AP: Accounts Payable, module in Oracle eBS.",
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
      "id": "bf56dc4d-5652-491b-927c-3b5055b8107f",
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
      "id": "c8593058-1779-4cd7-ace0-4ac099636828",
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
      "id": "bf2f43df-7578-4cb6-a01a-0f4fba674f73",
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
      "id": "1c031c1b-a534-4f88-8845-b227e8bbbd71",
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
        "id": "1bbc6877-4320-44fb-a258-3a4bb127463f",
        "description": "Sending Contract: SCCO779, Sending POD: File in folder",
        "displayName": "E2B_Purchase Order SCCO780 [DB]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bbc46eb5-f343-441f-9ccc-d4aae179a9a5",
        "description": "Sending Contract: SCCO4442, Sending POD: File in folder",
        "displayName": "M3_Accounts Payable SCCO862",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9ae640a5-6cfe-4f53-83a7-8bf45f97f018",
        "description": "Sending Contract: SCCO4442, Sending POD: File in folder",
        "displayName": "M3_Accounts Payable SCCO864",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c63bff40-60b0-4dfa-b22b-92b308e49612",
        "description": "Sending Contract:SCCO2368, Sending POD File in folder",
        "displayName": "Matris_Accounts Payable SCCO2699",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "77f237b1-ac20-4d4e-add3-b0a806fa2ee5",
        "description": "MONA-INLEV (UNIT 0014) -> AP Mona Material Cab Oskarshamn",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI070",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0bb9b7e5-fe45-4bd1-8a52-8cca07d6fc5b",
        "description": "MONA-INLEV (UNIT 0056) -> AP Mona Material Engine Södertälje",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI071",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "293a2a3b-4f03-43cf-ad6d-2ccc17f74f6f",
        "description": "MONA-INLEV (UNIT 0055) -> AP Mona Material Chassi Södertälje",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI074",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9b8ec27e-130c-4ff4-8bce-ac5d01562620",
        "description": "MONA-INLEV (UNIT 0057) -> AP Mona Material Transmission Södertälje",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI075",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a25a530e-f146-4598-8a7e-ad3b6a17a700",
        "description": "MONA-JUST (UNIT 0014) -> AP Mona Material Cab Oskarshamn",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI077",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "527457dc-3cbf-40d8-864f-c0ffe1512482",
        "description": "MONA-JUST (UNIT 0056) -> AP Mona Material Engine Södertälje",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI078",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f91e3880-4fc3-405d-a89b-827f7614605c",
        "description": "MONA-JUST (UNIT 0055) -> AP Mona Material Chassi Södertälje",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI081",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "56ddbd65-59d7-4794-9850-7bd48bd845f6",
        "description": "MONA-JUST (UNIT 0057) -> AP Mona Material Transmission Södertälje",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI083",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a0d550b6-434e-450c-8cce-9490e2d97f9c",
        "description": "MONA-INLEV (UNIT 0008) -> AP Mona Material Chassi Anger",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI085",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7ad3d60b-d8c3-4c12-ba88-9837224eb539",
        "description": "MONA-JUST (UNIT 0008) -> AP Mona Material Chassi Anger",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI086",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "693b2094-029b-4a6c-8823-c16063a5e5d9",
        "description": "MONA-INLEV (UNIT 0009) -> AP Mona Material Chassi Zwolle",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI090",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "6cbf9915-665a-4f25-a3de-dc282a245a2b",
        "description": "MONA-JUST (UNIT 0009) -> AP Mona Material Chassi Zwolle",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI091",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "dcd7a001-7705-4a2b-8339-7155bae2023d",
        "description": "MONA-INLEV (UNIT 9107) -> AP Mona Material Painting Meppel",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI092",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7eb6f09e-1115-4ebb-a8a4-560f3e528954",
        "description": "MONA-JUST (UNIT 9107) -> AP Mona Material Painting Meppel",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI093",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "89883000-f650-4395-9043-c5318bdba5c3",
        "description": "MONA-INLEV (UNIT 0010) -> AP (FERRUFORM Luleå)",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI096",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "63a8e88d-2b5e-4cd1-b045-1f1b5a1a3e34",
        "description": "MONA-JUST (UNIT 0010) -> AP (FERRUFORM Luleå)",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI097",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f6ef7f4a-b9a7-43d3-9a92-75712d69d168",
        "description": "MONA-INLEV (UNIT 3335) -> ME (BATTERY Södertälje)",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI098",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c51d9227-e1d3-476f-8d45-aa962ebdc822",
        "description": "MONA-JUST (UNIT 3335) -> ME (BATTERY Södertälje)",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI099",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b5160eef-c891-4c9f-93ee-54854699afa6",
        "description": "MONA-INLEV (UNIT 3360) -> ME (SLUPSK CV AB)",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI100",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "165d3413-27e8-44bd-b345-089d2d79e3ad",
        "description": "MONA-JUST (UNIT 3360) -> ME (SLUPSK CV AB)",
        "displayName": "MONA Systems / Mona material (MM)_AP Invoice OPDFI101",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "beaf1cca-6d01-4985-98b3-7ab5b6b1ef08",
        "description": "Sending Contract: SCCO7035, Sending POD: MQ",
        "displayName": "SALSA (SAP Spare parts)_AP_PO SCCO7036",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c5ce45b4-7d74-4131-9a5c-8c94c57b6d91",
        "description": "Sending Contract: SCCO7035 Sending POD: MQ",
        "displayName": "SALSA (SAP Spare parts)_AP_PO_SALSA_SPINE SCCO7037",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1e3e96e3-d619-43fc-a3e6-2054e3762a73",
        "description": "Sending contract SCCO7426\nSCIS178_TPM_SUP",
        "displayName": "Scania Supplier Information Portal_scco4546_Supplier_registry",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9b3d695a-8b80-4d52-9f0a-9b7f119595f6",
        "description": "Sending Contract: SCCO0978, Sening POD File in folder",
        "displayName": "SCAR_Approval Registry SCCO117",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ab1153e9-c6be-4b16-9d9c-5870a87d971b",
        "description": "Sending Contract: SCCO0384, Sending POD File in folder",
        "displayName": "SES_AP/AR  SCCO385",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2021-12-31"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "71a99e84-7458-4d33-9b7b-46dc364dbc09",
        "description": null,
        "displayName": "STooF_scco1795 recieved_goods",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "415230cd-1681-454f-b32f-56d91ca81eae",
        "description": "Sending Contract: SCCO1269, Sending POD: Siam database",
        "displayName": "SWAT_AR/AP SCCO1270",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "f0ba6268-1bc4-48f3-be31-d2f9930509e4",
        "description": "Sending Contract:SCCO2628, Sending POD: File in folder",
        "displayName": "Oracle Financials (EBS) / eBS_AP_Accounts Payable SCCO2629",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ed60aade-dc70-4902-acdb-aaa5435e4d8c",
        "description": "Sending POD SIAM Database\nSending contract SCCO388\nSCIS124_Scania_Assistance_Invoicing_SES-SIFO",
        "displayName": "Oracle Financials (EBS) / eBS_AP_Assistance_Invoicing SCCO0389",
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
        "id": "80ed633f-b82e-42e4-ac70-ea15b27095a2",
        "description": null,
        "displayName": "Oracle Financials (EBS) / eBS_AP_Assistance_Invoicing SCCO387",
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
        "tags": []
      },
      {
        "id": "a50b0a2e-ef37-45fb-b30a-16d2ead109a6",
        "description": "Sending POD SIAM DAtabase\nSending contract SCCO2819",
        "displayName": "Oracle Financials (EBS) / eBS_AP_INPRO_SPEND SCCO2820",
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
        "id": "ca901919-414c-4270-9170-18dcaac2010b",
        "description": "Sending POD SIAM Database\nSending contract SCCO4535\nSCIS694_MXCxGBTransService",
        "displayName": "Oracle Financials (EBS) / eBS_AP_MXCxGBTransService SCCO4534",
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
        "id": "fd316ac8-6ee3-48f5-bc32-74e19c1d64f3",
        "description": "Sending Contract SCCO4429\nSCIS220_SL-AROS_CustomDeclaration_MIC\n",
        "displayName": "Oracle Financials (EBS) / eBS_AP_Solicitation Request",
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
          "id": "1bb9d173-eb28-41da-8031-4bf819bb586f",
          "displayName": "Oracle EBS Payables",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "bb483024-cfed-4920-9aa7-0d4e17f480f7",
          "displayName": "Oracle EBS Payments",
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