export default {
  "completion": {
    "percentage": 59,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 60,
    "dataManagement": 42,
    "dependencies": 50,
    "information": 92,
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
    }
  ],
  "information": {
    "name": "eBS_AR",
    "description": "AR: Accounts Receivable, module in Oracle eBS.",
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
    "predecessor": [
      {
        "id": "13d4202f-aa4e-451a-b86f-60ba80ff9f11",
        "displayName": "IACOB",
        "description": "IACOB OM - Integration And Common Order Book, Order Management System.\r\nSuccessor for SMOFS In order entry administration.",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2",
          "ICS internal"
        ],
        "subscriptions": []
      }
    ]
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
      "id": "f6d0d5e8-b324-4625-b9d0-1838201ece44",
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
      "id": "79153687-5d2a-49da-b9bf-54e21255a88e",
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
      "id": "e5b88181-b3f3-461f-bf6f-aa33de7305c6",
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
        "id": "53c34eb5-faff-4b44-a25e-abb24e856cfa",
        "displayName": "Supporting processes / Finance Process / Accounts Receivable",
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
        "id": "5da3e1d1-e79f-4df6-9c17-b3366d50ceda",
        "displayName": "Supporting processes / Finance Process / General Accounting / AR vs AP Intercompany Recoincilliation",
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
        "id": "da49c4dc-2bf5-4007-8d9e-605c1419e958",
        "description": "Sending Contract: SCCO364, Sending POD: File in folder",
        "displayName": "Accounts Recivable SCCO365",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4c537703-bcc8-438c-80f8-e55831feb688",
        "description": "Sending Contract: SCCO284 Sending POD: MQ",
        "displayName": "ADRA_ADRA/Lockbox SCCO285",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "69a28436-88e4-4103-a35a-90b7e7c15a4c",
        "description": "Sending Contract: SCCO5395, Sending POD: File in folder",
        "displayName": "AX S&M Components_Accounts Recivable SCCO5396",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "90d02d34-f998-48a0-acb6-bca4b4cdddd6",
        "description": "Sending Contract: SCCO7946, Sending POD: MQ",
        "displayName": "AX S&M Components_Accounts Recivable SCCO7947",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5ecaa8af-63ef-4af7-bf9b-db185b8e9c7d",
        "description": "Sending Contract: SCCO351, Sending POD Websevice,SOAP",
        "displayName": "Conversion_Accounts Recivable SCCO363",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fdc02c62-a42d-4702-9e4e-489d3ddade1b",
        "description": "Sending contract SCCO7224\nSCIS117_Dynamate_Finess",
        "displayName": "Coredination_scco7248",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8049ac5e-d142-43fc-9c33-aa9338024fad",
        "description": "Sending Contract: SCCO7963, Sending POD File in folder",
        "displayName": "FMAT2_Accounts Recivable SCCO7964",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "43cf0b58-e8bf-4049-89c5-a64e5b3af569",
        "description": "Sending Contract: SCCO1013, Sending POD: MQ",
        "displayName": "IACOB_Accounts Recivable SCCO1014",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d08d8b8a-2428-40b8-92e7-033efe6fe811",
        "description": "Sending Contract: SCCO1090, Sending POD MQ ",
        "displayName": "IACOB_Accounts Recivable SCCO1091",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "855d0b9f-be07-446a-9b92-3dbe4234e1af",
        "description": "Sending Contract: SCCO1013, Sending POD: MQ",
        "displayName": "IACOB_Accounts Recivable SCCO1348",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "707b8884-c2b9-436c-bb41-1c1ad2962405",
        "description": "SCIS530_PartyService",
        "displayName": "iCUST_SCCO3616",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5416d339-17e2-49fe-9a9c-0d434edab783",
        "description": "Sending contract SCCO5280\nSCIS692_iTMS_eBS",
        "displayName": "iTMS_scco5281",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1cbf30c6-e38b-4670-a404-c0c12cf5a37b",
        "description": "Sending Contract: SCCO4442, Sending POD: File in folder",
        "displayName": "M3_Accounts Recivable SCCO863",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "34ffb3dc-6f89-48b8-a655-341cbde28135",
        "description": "Sending contract SCCO4442\nSCIS194_M3_FinancialData_SIFO",
        "displayName": "M3_scco0863",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "19f918c3-d39a-446e-bb18-4732dacb7f6a",
        "description": "Sending Contract: SCCO4511, Sending POD: Webservice SOAP",
        "displayName": "Maximo Purchasing_Accounts Recivable SCCO4512",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9a90142c-22cd-45af-92cc-6492f687e17d",
        "description": "Sending contract  SCCO4188\nSCIS619_SLAWorkOrderService",
        "displayName": "Maximo Purchasing_scco4495_SLAWorkOrderService",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c20b847d-4c76-4c2f-ae39-922981b84be9",
        "description": "Sending Contract: SCCO2836, Sening POD: Siam DB",
        "displayName": "MONA Systems / Mona Material Control (MC and MCC)_Accounts Recivable SCCO2837",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4141de91-1d4e-4497-8f03-3085d7481f06",
        "description": "Sending Contract: SCCO7685, Sending POD: File in folder",
        "displayName": "MyCompass_Accounts Recivable SCCO7686",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a62622c9-3951-4730-bca5-f977e1d121a2",
        "description": "One of the capabilities of Streamserve is to generate an PDF image of an AR invoice (EDI). The invoice is sent from eBS  to Streamserve for PDF generation and forwarding to BIS & BT to payment. \nStreamserve on the other hand generates a URL that is sent back to eBS \n\nApplication that are requesting this functionality is IACOM and AX-Engine",
        "displayName": "NG-SEI / StreamServe_PDF_InvoiceImage_URL",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b56012e5-3bb6-4f4a-a5f7-3587438dd0bb",
        "description": "Sending Contract: SCCO776 Sending POD: File in folder",
        "displayName": "Personec HR_Accounts Recivable SCCO776",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "86d6a55a-d7e1-4282-8bc3-a8ba04813c90",
        "description": "Sending Contract: SCCO4028, Sending POD: File in folder",
        "displayName": "RAMAS_Accounts Recivable SCCO4029",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7c7450ec-30e9-4260-a4e2-3fd19dea2733",
        "description": "Sending Contract: SCCO5763, Sending POD: MQ",
        "displayName": "SALSA (SAP Spare parts)_Accounts Recivable SCCO5801",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f32bbe7a-7c5d-4599-b7c9-5f1ba90514cc",
        "description": "SCIS096_Navision_Invoices_SIFO\n",
        "displayName": "ScaniaNow_SCCO0272",
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
        "id": "e0434633-09c5-46c0-a7af-3eb38f7d5eaa",
        "description": "Sending Contract: SCCO1852, Sending POD: File in folder",
        "displayName": "SIT_Accounts Recivable SCCO1853",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7d58b08a-0648-4493-bd41-4571dcf53ebe",
        "description": "Sending Contract: SCCO310, Sending POD: File in folder",
        "displayName": "SUSY_Accounts Recivable SCCO311",
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
        "id": "af0383c8-f55e-4f9d-bee3-9341174d3c37",
        "description": "Sending POD Siam Database\nSending contract SCCO1018\nSCIS183_IACOB",
        "displayName": "Oracle Financials (EBS) / eBS_AR_AR_IACOB SCCO1019",
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
        "id": "d6e3275e-a406-4685-a334-eaa595e20aa3",
        "description": "Sending POD SIAM Database\nSending contract SCCO7953\n",
        "displayName": "Oracle Financials (EBS) / eBS_AR_AR_InvoiceSent_SEIP SCCO7954",
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
        "id": "755f434e-9c76-413d-a48c-42cf01859d53",
        "description": "Sending POD SIAM Database\nSending Contract SCCO5398\nSCIS775_AX_Invoiceinformation_AR",
        "displayName": "Oracle Financials (EBS) / eBS_AR_AX_Invoice Information_AR SCCO5399",
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
        "id": "ba10b2e0-c776-44cd-bed9-0567868446f1",
        "description": "Sending POD SIAM Database\nSending contract SCCO5398\nSCIS775_AX_InvoiceInformation_AR\n",
        "displayName": "Oracle Financials (EBS) / eBS_AR_AX_Invoice Information_AR SCCO8578",
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
        "id": "c52cf0e0-34a6-4e7d-b334-bb00ec6eca2d",
        "description": "Sending POD SIAM Database\nSending contract SCCO5398\nSCIS775_AX_InvoiceInformation_AR",
        "displayName": "Oracle Financials (EBS) / eBS_AR_AX_Invoice Information_AR SCCO8579",
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
        "id": "cbd896e3-7f1f-4cf0-91ac-44b6d6634576",
        "description": "Sending POD SIAM Database\nSending contract SCCO7953\n",
        "displayName": "Oracle Financials (EBS) / eBS_AR_AX_Invoice Information_AR SCCO8710",
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
        "id": "f61e9267-7cae-4360-b2be-2d259884fdf6",
        "description": null,
        "displayName": "Oracle Financials (EBS) / eBS_AR_Invoice_StreamServe",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "25a555aa-d103-4f42-9f2e-2b5b68fdf6ac",
        "description": "Sending POD SIAM Database\nSending contract SCCO4030\nSCIS593_Ramas_Invoice_SIFO",
        "displayName": "Oracle Financials (EBS) / eBS_AR_Invoicedetails SCCO4031",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-21"
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
        "id": "7a6feff4-6ead-4056-a99d-075eead29664",
        "description": "This integration is used to send AR invoices to NGSEI for external and internal distribution",
        "displayName": "Oracle Financials (EBS) / eBS_AR_NGSEI AR",
        "lifecycle": null,
        "tags": []
      },
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
          "id": "856b678a-fc24-4d2b-a22e-2eb27455eb66",
          "displayName": "Oracle EBS Cash Management Unspecified",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "a993ea31-fa6d-45ae-a6c4-9288548fd664",
          "displayName": "Oracle EBS Financial - Advanced Collections",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "1aaa7548-642b-4313-8955-ac8836fcddf8",
          "displayName": "Oracle EBS Financial - iReceivables",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "ae2b1ed7-0c19-4dd2-b817-996c7e7cbcce",
          "displayName": "Oracle EBS Projects",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "f1ebff67-c39b-43e9-a547-4064ca6ab6f6",
          "displayName": "Oracle EBS Service - Service Contracts",
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