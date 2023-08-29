export default {
  "completion": {
    "percentage": 40,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 50,
    "dataManagement": 25,
    "dependencies": 0,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Niclas",
      "lastName": "Persson",
      "displayName": "Niclas Persson",
      "email": "niclas.persson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Rosiane",
      "lastName": "Andretta-Sundman",
      "displayName": "Rosiane Andretta-Sundman",
      "email": "rosiane.andretta-sundman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Harsha",
      "lastName": "Jain",
      "displayName": "Harsha Jain",
      "email": "harsha.jain@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "FRESH",
    "description": "Financial information (Cognos reports on EBS data).\nThe FRESH reports, contain reports base on ERP Oracle EBS suite,  Accounts Payable, General Ledger, Fixed Asset, Accounts Receivables, Projects.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2029-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "25170863-28a4-4c6f-8532-be0ca2bf98f9",
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
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
        "id": "bd31c191-4066-4772-8f50-63576bf0e1da",
        "displayName": "Supporting processes / Finance Process / General Accounting",
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
        "id": "279cc393-6751-4fd4-ade8-0487add68d83",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAF - Sales and Services Business Intelligence",
        "usageType": null,
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
        "id": "070fd826-a623-4265-9e95-85a9c8a35fca",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SZ - Business Control & Analysis / SZB - Business Control",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "2ff506f1-e60e-49f8-99bb-f6ea91550abd",
        "description": "Investment and Asset domain manage financial information about Scanias business investments and fixed assets through the planing, motivation, approval and procurement of an asset to the depreciations to retirement.",
        "displayName": "Financial Control Domain / Investment and Asset Entity",
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
        "id": "60265dd3-e40d-4b6c-a5fd-73243e9ffe8c",
        "description": null,
        "displayName": "Monthly Performance",
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
        "id": "c0776687-df9a-4646-b4ed-7912021086b2",
        "description": "Need further investigation",
        "displayName": "Oracle Financials (EBS) / Noetix_Noetix xyz",
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
          "id": "bfd73a39-3811-4048-9b54-2d21bea9c124",
          "displayName": "IBM IBM Cognos (TM1)",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "169c0e42-995a-417c-8205-0b53fcc8fa0c",
          "displayName": "Noetix 6.6",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
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
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "JBE",
    "ChinaDesign": "IXAZ/TT",
    "ChinaSourcing": "TT",
    "ChinaPaying": "JBE",
    "ChinaImplementation": "IXAZ/TT",
    "Chinaverification": "TT",
    "ChinaOperations": "IXAZ"
  }
}