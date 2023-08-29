export default {
  "completion": {
    "percentage": 62,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 53,
    "dataManagement": 82,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 0,
    "sourcing": 27
  },
  "subscriptions": [
    {
      "firstName": "Komal",
      "lastName": "Matkar",
      "displayName": "Komal Matkar",
      "email": "komal.matkar@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Basware BT",
    "description": "BT (Basware Business Transactions - need to check name) is a system from Basware for rounting E-invoices to Scania.\nBT is used by both IHS, Efhekt, Basware P2P, send e-invoice.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2016-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2026-12-01",
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
        "id": "d264358c-7994-4190-aa34-676f9948aa98",
        "displayName": "NG-SEI",
        "description": "Next Generation SEI is a hybrid cloud solution that will create invoice pdf and distribute invoices internally and externally.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Italy",
          "Luxembourg",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "5c4cf699-8705-419b-b16b-ab2cdb99d35b",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "a6e92b3d-a3be-4623-8205-dab8e08c4a3e",
        "description": null,
        "displayName": "Financial Control Domain / Invoice Entity / Supplier Invoice",
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
        "id": "baf932c5-dd3f-4531-88e2-10bf562ff2b7",
        "description": null,
        "displayName": "Industrial ERP Backbone (IEB)_IDOC AP Invoice",
        "lifecycle": {
          "asString": "phaseIn",
          "phases": [
            {
              "phase": "phaseIn",
              "startDate": "2023-04-21"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4661f5dd-d709-4246-991c-6b3cfda574fa",
        "description": null,
        "displayName": "Navision Deleted_AR invoice send",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b833973e-6ea3-4fcb-88d2-4d9e82509848",
        "description": "One of the capabilities of Streamserve is to generate an PDF image of an AR invoice (EDI). The invoice is sent from eBS  to Streamserve for PDF generation and forwarding to BIS & BT to payment. \nStreamserve on the other hand generates a URL that is sent back to eBS \n\nApplication that are requesting this functionality is IACOM and AX-Engine",
        "displayName": "NG-SEI / StreamServe_AR_InvoiceImage",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7a6feff4-6ead-4056-a99d-075eead29664",
        "description": "This integration is used to send AR invoices to NGSEI for external and internal distribution",
        "displayName": "Oracle Financials (EBS) / eBS_AR_NGSEI AR",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b2f96251-4bd3-41d2-92f4-74d1542d98cd",
        "description": null,
        "displayName": "ReadSoft FS_Supplier Invoice [OFTP2]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "188fd2ae-aff1-44ac-9e24-064a986c06ef",
        "description": "Data: AP Invoice, SCCO8021 is SCEQ8021 according to IX, SCIS511_Industrial&CommertialOperations_Readsoft",
        "displayName": "ReadSoft IO_SCCO8020",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3d56a4fa-596d-487c-a4b5-44f97cc3d99b",
        "description": null,
        "displayName": "Scania D365 Golden Blueprint / D365 Scania Financial Services / ExFlow FS_Supplier Invoice [SFTP]",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "856cf399-66d2-479b-8165-7e52281b4b6f",
        "description": null,
        "displayName": "NG-SEI / Basware BT_Inbound AP invoice",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "ee85ff59-5960-4d99-af17-9a93ddf38d86",
          "displayName": "Basware BT Sending Invoices",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "1e34959f-bc17-4918-9d6d-bed230b2af80",
          "displayName": "IF_IDOC_S4HANA_SAP-AWS",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "f4022e48-351f-4e79-86b5-b45e721814d0",
          "displayName": "IF_OFTP2_BIS_ONPREM",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "a23ffe84-2ebd-4746-80ca-1eeb83fdadec",
          "displayName": "IF_SFTP_IDOC",
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