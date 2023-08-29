export default {
  "completion": {
    "percentage": 56,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 60,
    "dataManagement": 65,
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
    "name": "eBS_FA",
    "description": "FA: Fixed Assets, module in Oracle eBS.",
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
    "predecessor": []
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
      "id": "892c847e-157b-42f4-b515-8cb5efd455a8",
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
      "id": "61d10cee-5f9b-4b8e-a9fd-6e2002bde40f",
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
      "id": "7dbe8c03-793f-4f56-b40e-6b7402bc17b9",
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
        "id": "ea6a4e79-699c-4a46-a833-124b97366105",
        "displayName": "M. Manage Assets / Asset Management / Fixed Asset Management",
        "description": "The ability to track the value, location, quantity, condition, maintenance and depreciation status of fixed assets.",
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
        "id": "ab044ab2-99ac-421a-af62-79ed6b0754ca",
        "displayName": "Supporting processes / Finance Process / Investment / Asset Capitalization",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "bb956aae-409b-4bf7-af1a-426f24ab0a86",
        "displayName": "Supporting processes / Finance Process / Investment / Asset Depreciation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "e57a57db-23ce-4cf8-8d19-18a95d5ff3d7",
        "displayName": "Supporting processes / Finance Process / Investment / Assets Counting",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "5a255535-5c35-4544-9ffa-8e6f9b643ea4",
        "displayName": "Supporting processes / Finance Process / Investment / Fixed Asset Disposal (External Sale or Scrap)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "f804f610-596d-488b-b968-78c36675b745",
        "displayName": "Supporting processes / Finance Process / Investment / Fixed Asset Impairment",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "07d23f88-b8cd-482f-adbb-80ce255afd9e",
        "displayName": "Supporting processes / Finance Process / Investment / Fixed Asset Intra and Intercompany Sale (Transfer)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "288c3366-45bd-4c33-8700-24efcc96794d",
        "displayName": "Supporting processes / Finance Process / Investment / Fixed Asset Period End",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "873ad69a-c562-4227-9952-dd4ffcd73440",
        "displayName": "Supporting processes / Finance Process / Investment / Intangible Assets (R&D)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "91a4e10f-0a13-408f-9f71-c6097da5f40e",
        "displayName": "Supporting processes / Finance Process / Investment / Record Fixed Asset Purchase",
        "description": null,
        "lifecycle": null,
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
        "id": "9c43194d-b071-4401-8231-5b86b3e7fee8",
        "description": "persistent physical resource, that brings long time benefits to the company. At Scania an asset has a value of 20 KSEK or more and a lifecycle above 3 years. The asset is capitalised during a number of years. The asset can be created after Investment budget is approved and until the Investment is closed. Assets are tangible with few exceptions.  There are objects in other sources than Oracle eBS FA. Investment is called Asset Key in eBS FA. CO have HFM FA but will move to D365 FA.",
        "displayName": "Financial Control Domain / Investment and Asset Entity / Fixed Asset",
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
        "id": "a1760f07-0d6c-4d04-b61f-1f020f8588eb",
        "description": "the financial plan, motivation and approval to procure an asset. Each investment is first created and motivated, then proposed to an Investment plan or fast track for approval or rejection. The Investment can have a number of investments budgets in different statuses while only one is current. System The Investment proposal before any status approved has a SID-number in CIS. When the Investment status is approved it gets a SIN number in CIS.",
        "displayName": "Financial Control Domain / Investment and Asset Entity / Investment",
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
        "id": "45e0c544-07f6-4a63-b8e5-f04cbea77e4f",
        "description": "projection for invoices over time connected to the investment. New/changed projections can be approved through a part list process.  system budget amount from CIS",
        "displayName": "Financial Control Domain / Investment and Asset Entity / Investment Budget",
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
        "id": "b39f8d5a-d86c-40f1-a8e1-fb7ab2e54910",
        "description": "SCIS864_CIS_FA, Data: Investment \n\n",
        "displayName": "CIS_Investments",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "fa362dc3-0997-432a-a7e2-56d2dcc480be",
        "description": null,
        "displayName": "Oracle Financials (EBS) / eBS_FA_EBS_RPA-186",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e431634a-7610-43ad-9e4c-6c86dd77e6b1",
        "description": "SCIS864_CIS_FA, Data: Fixed Asset\n",
        "displayName": "Oracle Financials (EBS) / eBS_FA_SCCO5902",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4c214714-afcc-4190-9f11-7712e9ee9a96",
        "description": "SCIS864_CIS_FA, Data: Expense\n",
        "displayName": "Oracle Financials (EBS) / eBS_FA_SCCO5904",
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