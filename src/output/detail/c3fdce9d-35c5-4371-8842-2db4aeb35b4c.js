export default {
  "completion": {
    "percentage": 74,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 71,
    "dataManagement": 78,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 27
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "richard.grabert@scania.com",
      "email": "richard.grabert@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Jonas",
      "lastName": "Simonsson",
      "displayName": "Jonas Simonsson",
      "email": "jonas.simonsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "William",
      "lastName": "Tancsik",
      "displayName": "William Tancsik",
      "email": "william.tancsik@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Anja",
      "lastName": "Thysen",
      "displayName": "Anja Thysen",
      "email": "anja.thysen@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Laurens",
      "lastName": "Volders",
      "displayName": "Laurens Volders",
      "email": "laurens.volders@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Peter",
      "lastName": "Izsak",
      "displayName": "Peter Izsak",
      "email": "peter.izsak@scania.com",
      "type": "OBSERVER",
      "role": [
        "Developer"
      ]
    },
    {
      "firstName": "Swapnil",
      "lastName": "Vishnoi",
      "displayName": "Swapnil Vishnoi",
      "email": "swapnil.vishnoi@scania.com",
      "type": "OBSERVER",
      "role": [
        "Developer"
      ]
    }
  ],
  "information": {
    "name": "SALSA (SAP Spare parts)",
    "description": "SALSA - SAP (ECC & SCM & EWM) is Scania Parts solution for the following processes:  \n\n* Supply Chain Process (Supply order, Inbound transport, Inbound warehouse)  \n* Demand Chain Process (Customer order, Outbound Warehouse, Outbound transport, trigger Customer invoice and payment)  \n* Supporting processes (including e.g. BI and Returns) ",
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
    "predecessor": [
      {
        "id": "6a388a12-866c-4f11-9488-23a4ac250a4c",
        "displayName": "RW-SPAS",
        "description": "Handling of parts in regional warehouses",
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
    "children": [
      {
        "id": "74e6e83e-c239-4ac2-9b67-28cab2207efa",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Application that allows to give commands and other via voice when picking in warehouse.",
        "displayName": "SALSA (SAP Spare parts) / Voice picking SPC",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2019-11-19",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2022-11-19",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-05-24",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2020-05-24",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "081d9ec5-e28a-44ac-bd9a-1cec6a5475bf",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management",
        "description": "Manage inventory, transfers and quality of material. Receive incoming material and manage the inventory of finished products. Keep track of stock value.",
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
          "Subject for change",
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
        "id": "8ec05fb1-6202-4272-80e0-29ebc607443c",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KP - Parts and Service / SL - Scania Parts Logistics / SLD - Business Processes & IT",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-08"
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
      }
    ],
    "interfaceConsume": [
      {
        "id": "9d586649-70ed-40f3-b3cc-77034bcde5bb",
        "description": null,
        "displayName": "CO2 Calculation System_co2preprodapi IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-10"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "702f9495-a11d-4f5f-b660-a0f93cd39d31",
        "description": null,
        "displayName": "OAS Part KIT/BOM",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5fff03e8-1da4-4267-a61f-21a7a14b1b79",
        "description": null,
        "displayName": "OAS Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2be31600-7704-44f5-a4e5-8bcbd48d42d7",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_SCANIA.SAP.Sales.Order.Creation IE 1.00",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-21"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "1a29223d-eb13-4b78-93f7-1047dc71c949",
        "description": null,
        "displayName": "SLIP_SACS Part Info & Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "aff0737f-56dc-4b08-a5a4-e8661ede3f7c",
        "description": null,
        "displayName": "SOCSS ECU",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "7c7450ec-30e9-4260-a4e2-3fd19dea2733",
        "description": "Sending Contract: SCCO5763, Sending POD: MQ",
        "displayName": "SALSA (SAP Spare parts)_Accounts Recivable SCCO5801",
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
        "id": "21cb83d6-0362-4e54-afd2-0af537a70f32",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_Export_Declaration_Request",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bf0a7fb4-0b0c-4b86-9bef-310d370a0d64",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_Export_Declaration_Request_2",
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
        "id": "a34ae3e8-2977-4970-82ed-645f920b7acf",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_Intrastat Arrival",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "38022872-f543-43db-b81a-3ac5238f67a1",
        "description": "Sending POD SIAM Database\nSending contract SCCO5953\nSCIS220_SAP-PO_CustomDeclaration_MIC",
        "displayName": "SALSA (SAP Spare parts)_Intrastat_Dispatch",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-31"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "abd61ed2-0480-4c48-a70c-b966ad329034",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_INVOICE",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "017f2864-e186-4f81-9f33-f7d09bf16878",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_logiweb-wishlist-api IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "81e8acdb-9e6a-43e1-817e-b06baca9b613",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_ORDER",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "17ba23a7-9e4d-4d3d-b589-600a67cd7cf9",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_ORDER_ACKNOWLEDGEMENT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2be31600-7704-44f5-a4e5-8bcbd48d42d7",
        "description": null,
        "displayName": "SALSA (SAP Spare parts)_SCANIA.SAP.Sales.Order.Creation IE 1.00",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-21"
            }
          ]
        },
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": null
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