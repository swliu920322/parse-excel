export default {
  "completion": {
    "percentage": 81,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 63,
    "dataManagement": 82,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 93
  },
  "subscriptions": [
    {
      "firstName": "Malek",
      "lastName": "Yayo",
      "displayName": "Malek Yayo",
      "email": "malek.yayo@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "fredrik.lindegren@scania.com",
      "email": "fredrik.lindegren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Roel",
      "lastName": "ten Kleij",
      "displayName": "Roel ten Kleij",
      "email": "Roel.ten_Kleij@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Helena",
      "lastName": "Westman",
      "displayName": "Helena Westman",
      "email": "helena.westman@scania.com",
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
      "firstName": "Reena",
      "lastName": "Pathak",
      "displayName": "Reena Pathak",
      "email": "reena.pathak@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "CALSIUM",
    "description": "Calsium stands for Cost Allocation and Simulation Management.\nThe application supports the (financial) allocation process in the different component production units, in final assembly and in consolidation Units so that finally, the base cost of a product can be allocated to Sales and Marketing.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2025-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "044de622-3a8f-4809-a5e4-0214a0911e40",
        "displayName": "DeVu",
        "description": "DeVu (Delivery Values) is a system owned by Material Accounting at Industrial Control (TIM). It is used for internal invoicing of specific components between Production units, as well as for calculating an internal price/delivery value for each chassis at which Final assembly invoices Industrial Control. This value is also used as a base when Industrial Control invoices Sales & Services and for securing the gross margin.\r\nFurther, in DeVu, customs numbers and weights are registered on components. This information is used by the Purchasing Logistics department (SNL) that once per month reports physical movements of Scania’s products from Sweden to other EU countries to Statistiska Centralbyrån (SCB). Scania is bound by law to provide SCB with this information.\r\nThe application is vital for budgeting reasons and is therefore mostly used during the first four days of each month.\r\n\r\n",
        "type": "Application",
        "tags": [
          "Not China affected"
        ],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "ecbbb569-b3ce-4a96-83ad-1039b270f19c",
      "displayName": "CALSIUM",
      "fullName": "CALSIUM",
      "tags": [
        "China affected",
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2016-06-30"
          },
          {
            "phase": "phaseIn",
            "startDate": "2017-04-02"
          },
          {
            "phase": "active",
            "startDate": "2020-01-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Malek Yayo",
          "email": "malek.yayo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Karin Alfredsson",
          "email": "karin.alfredsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Reena Pathak",
          "email": "reena.pathak@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "29cc1eff-1610-4697-bd43-30ca01b71f54",
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
      "id": "c9c0dff4-ce7c-4c3e-92dc-699bb5e284f9",
      "displayName": "Industrial ERP Backbone / IEB R23.1 / FC MVP1",
      "fullName": "FC MVP1",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "phaseIn",
            "startDate": "2022-04-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2023-01-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Sven Daniëls",
          "email": "sven.daniels@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "74df121d-5123-4795-a009-642927a97fdb",
      "displayName": "SAS Industrial Project - China / China RnD PrIT / OAS for China",
      "fullName": "OAS for China",
      "tags": [
        "China affected"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Erik Eriksson",
          "email": "erik.x.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Hans Sjöholm",
          "email": "hans.sjoholm@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Stefan Weidensjö",
          "email": "stefan.weidensjo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Henrik Skoog",
          "email": "henrik.skoog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Eriksson",
          "email": "magnus.z.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcus Gustafsson",
          "email": "marcus_x.gustafsson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Enno Grüning",
          "email": "enno.gruning@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "missionCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2019-11-27",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2022-11-27",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "36204148-31ab-4498-a661-8a7e2deaf961",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Manufacturing Performance & Cost Reporting",
        "description": "Business Capability required for reporting performance and cost for manufacturing of parts and assembly of components or products.",
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
        "id": "0ca93a58-380f-46b2-a365-b28a869fcdf6",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Overhead Cost Accounting",
        "description": "This scope item covers transaction-based actual postings that are used in overhead cost controlling. The purpose of overhead cost controlling is the planning, allocation, control, and monitoring of overhead costs.\nCost center accounting takes the costs incurred in a company and allocates them to the actual subareas that caused them. During period-end closing, these costs are distributed to cost centers through automatic allocation. By allocating the cost elements to cost centers in overhead cost controlling, one can control the costs and compare plan and actual costs. The plan/actual comparison at the end of the period helps to plan, control, and monitor cost behavior. Overhead cost controlling is also a prerequisite for further allocating overhead costs to cost objects (CO-PC), which enables to conduct a period-specific profitability analysis.",
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
        "id": "0d4ac304-68cc-4309-98a8-132bdac8a131",
        "displayName": "N. Financial Planning and Accounting / Financial Operation / Accounts Recievable",
        "description": "With Accounts Receivable, you manage open receivables invoices that are automatically created from sales processes. You manage and control open items with various analytical tools to optimize accounts receivables handling. The primary source of incoming payments is incoming bank statements loaded within the Cash Management process. They are automatically reconciled with open invoices. Easy-to-use views make the post processing of open items convenient and efficient.\nAlternatively, manually post incoming payments and easily reconcile the payment with an open item. Several analytical tools are available to monitor the receivables, allowing you to react quickly if you discover a declining payment discipline among your customers. You can easily create dunning letters for overdue items and follow the dunning history of your customers.",
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
        "id": "b555a04e-acd3-4fc1-ad9b-6322b8915582",
        "displayName": "Order to delivery / Production Processes / Production Support Processes / Local Finance and Administration",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
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
        "id": "4494ceab-f594-4084-9bee-b66569531890",
        "displayName": "Supporting processes / Finance Process / General Accounting / Cost Allocation",
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
        "id": "1544a5df-a909-4c6b-bfda-17ad7332b66e",
        "displayName": "Scania - Scania CV AB",
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
      },
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
      },
      {
        "id": "67b45535-69f5-470f-9f41-32dfe1ab5ee4",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / VF - Industrial Control / VFM - Material Controlling",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "f59241b3-0d3a-4143-b2c1-6c16d86d5402",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KC - Finance and Business Control",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-07-02"
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
        "id": "996b9227-0bc5-4351-b5d7-0027b3ecfc8a",
        "description": "Production Unit serve its purpose as component and/or assembly. Production Unit is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Production Unit",
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
        "id": "2b2f9201-bd53-419d-ac28-715ba5036a02",
        "description": "Represents all Scania companies, legal companies, national companies, reporting entities and its business units, independent if it’s a factory (production plant or industrial hub), warehouse, a sales region or some other kind of Scania unit.  Basically Scania Unit serve its purpose as  production, sales or service channels  to customers or to other business units on different markets, and is not itself customers even if Scania Unit can act in a purchasing (\"customer\") role in different business events (as Sales Order). Profit center purpose and scope https //scaniaazureservices.sharepoint.com/ p /r/teams/Finance2025-program/Shared%20Documents/Workstream%20FINANCE_Project%20Material%202022/E%20Conceptual%20design/E.1%20SAP/E.1.2%20Organizational%20Structure/SCANIA%20Sturcture%20-%20IO.pptx?d=w5bd6dbb58e6b461a9a2028b916481947& csf=1& web=1& e=wjKnU0",
        "displayName": "Organisation Domain / Party & Customer Entity / Scania Unit",
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
        "id": "207601e0-8820-4411-a61a-79fa1ab935ab",
        "description": "Product Allocation domain is based on incoming sales orders with its time constraints for the ordered product as individuals and represents the operational planning and optimized allocation of these ordered product instances to production orders, with certain production days, production units and production lines, to purchase orders or to physical products in inventory. In the allocation responsibility are included to handle the dependencies that the final delivered target and complete product as individual has of its in-depth product individuals and composite component units. The allocation is made according to Product Allocation Rules and on the account of the requirements that the specific product as individual may have.",
        "displayName": "Product Ordering Domain / Product Allocation Entity",
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
        "id": "d1687b8a-5830-4b71-9a9f-fd520bfdd072",
        "description": "Represents each allocated ordered target and complete product from sales order for hand over to production order.",
        "displayName": "Product Ordering Domain / Product Allocation Entity / Product Allocation Order",
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
        "id": "a3e241e8-9f8a-4f67-abca-dc553482e6b9",
        "description": "Component contains an easy traceable catalogue where all component units and usable and reusable design bricks, hardware, software and service, are stored in order to make it configurable and effective to put together new Products. Component can have an underlying Composite structure, building up the bundled component. A component can also be a free-standing product. A component in Scania domain can have a unique part number and a revision number. Component can be instantiated on many Individual Components.  Examples of Components can be \t Front axle  \t Front axle housing  \t Axle gear  \t Diff lock control  \t Extra front axle etc  \t Steering assembly  \t Steering wheel, steering column  \t Engine assembly  \t Electronic Control Unit (ECU)   \t Instrument Cluster System, ICL (ECU)   \t Coordinator, COO (ECU)  \t Controller Area Network, CAN (Yellow bus, Red bus etc)  \t Electronic Brake System, EBS (ECU)   \t Engine Management System, EMS (ECU)   \t Transmission Management System, TMS (ECU)",
        "displayName": "Product Portfolio Domain / Product As Designed Entity / Component As Designed",
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
        "id": "7839ca09-c17a-40ef-a180-e2e9e118edf9",
        "description": "A representation of goods with similar name characteristics for the purpose of manufacturing operations definition, scheduling, capability and performance shall be shown as a Material. Material information includes the inventory of raw, finished, intermediate materials, and consumables.  Material may be tested by the execution of a material test specification.",
        "displayName": "Production Domain / Material Capability Entity / Material",
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
        "id": "e0331b11-b66f-46ea-b040-9266342e6f07",
        "description": "Production Orders domain represents  production execution and operations , i.e. this domain is focused on the actual  production demand  as its specified in the production orders. The domain covers  the whole production flow  from recorded and controlled orders, material withdrawal to order confirmation, product as individual finished date, shipment and invoicing. Process Segment and  capacity requirements plans , with scheduling of different kind of resources, is a part of and interacts with this information domain.",
        "displayName": "Production Domain / Production Orders Entity",
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
        "id": "664b2cc0-a02d-4c93-8d0a-5fe711353545",
        "description": "Production Order represents the administrative control over all production steps for a specific ordered product performed by production units within planning & logistics and manufacturing operations management. Each production Order has a life-cycle, from open and firm to delivered.  The utmost aim is to fulfil confirmed delivery date in an effective manner.",
        "displayName": "Production Domain / Production Orders Entity / Production Order",
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
        "id": "89aacd27-cd04-4df3-8675-fcb926c22729",
        "description": null,
        "displayName": "Specification / Product Specification",
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
        "id": "5fec61c0-70cd-4d77-b21f-9b7db42394e0",
        "description": null,
        "displayName": "Specification / V-Specification",
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
        "id": "f29b0a91-0a23-4353-aae6-31bb2b44766f",
        "description": "Calsium Core Api for   Simulation",
        "displayName": "CALSIUM_CalsiumCoreAPI IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-26"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "df93a002-4056-4c46-a189-eb224bd6ebb4",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_MonaCalsium IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "48957fc9-4aac-445c-a1c4-9eabf8db87b8",
        "description": "Prod WS API for MMC Mona price",
        "displayName": "MONA Systems / Mona Material Central (MMC)_MMCMonaPrices IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-12-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "fa2e79ef-e01d-4561-a3cf-8ca1076b1cfd",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_designstructure_v2 IE v1",
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
        "id": "c55961c2-6dd5-4584-8e95-a14f509dadb4",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_objectdescription_v2 IE v1",
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
        "id": "0eaaf30e-db9b-4cbe-a66d-7eb2c7e78d6e",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_partinformation_v1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-02"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d892fc39-0c57-4b8f-a776-986265f9324e",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_vspecification_v1 IE v1",
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
        "id": "f1d4b228-1f56-4b2a-a28e-ea8691bb0b11",
        "description": "Sending Contract: SCCO1655 Sending POD: File in folder\nRecieving contract: SCCO8178  CALSIUM \nRecieveing contract: SCCO1656  DEVU",
        "displayName": "Oracle Financials (EBS) / eBS_AR_List of sold goods",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2010-12-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2010-12-01"
            },
            {
              "phase": "active",
              "startDate": "2010-12-01"
            },
            {
              "phase": "phaseOut",
              "startDate": "2025-12-01"
            },
            {
              "phase": "endOfLife",
              "startDate": "2025-12-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "0f5e437e-5378-4ff0-8bf4-2b00a6cbfc36",
        "description": "New PRS ControllerinformationProductAdaptation service which returns some general information, material cost, delivery values and price related information of S-Order/FFU/MCC. PRS will receive request with any S-Order/FFU/MCC order Number and response will be returned from PRS either in XML/JSON.",
        "displayName": "PRS_PRSCONTROLLERSERVICE IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-12"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "636ebd1d-564f-4d8c-bb8e-a279d02c3d2a",
        "description": null,
        "displayName": "WAM_Calsium - calsium-scania-com",
        "lifecycle": null,
        "tags": [
          "Global_SAML"
        ]
      }
    ],
    "interfaceProvide": [
      {
        "id": "f29b0a91-0a23-4353-aae6-31bb2b44766f",
        "description": "Calsium Core Api for   Simulation",
        "displayName": "CALSIUM_CalsiumCoreAPI IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-26"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "597eba50-7897-436c-9ab7-3842aef28a5d",
        "description": "When Calsium calculates the base cost (Consolidation unit allocation) the cost is then sent to KSV. The integration is sent over sftp to KSV. ",
        "displayName": "CALSIUM_Cost of sold products",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2020-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
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
          "id": "23e014f6-ee91-497c-8d59-6ea5a12e1243",
          "displayName": "Amazon Web Services Elastic Compute Cloud",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "7cc61bcb-93d5-4552-a9f3-d6ec0f99419b",
          "displayName": "Amazon Web Services Relational Database Service",
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
          "id": "c8becefb-c450-41f4-b5e1-1a49c4b92066",
          "displayName": "Amazon.com / AWS EC2",
          "category": "service",
          "description": "Amazon EC2 presents a true virtual computing environment, allows to use web service interfaces to launch instances with a variety of operating systems, load them with custom application environment, manage network’s access permissions, and run image using as many or few systems as desire.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2006-08-24"
              },
              {
                "phase": "active",
                "startDate": "2008-10-23"
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
    "ssoProvider": "Azure AD",
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