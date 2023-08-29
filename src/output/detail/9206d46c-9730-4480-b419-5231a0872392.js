export default {
  "completion": {
    "percentage": 44,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 53,
    "dataManagement": 88,
    "dependencies": 0,
    "information": 33,
    "projects": 100,
    "robots": 0,
    "sourcing": 27
  },
  "subscriptions": [
    {
      "firstName": "David",
      "lastName": "Järbrink",
      "displayName": "David Järbrink",
      "email": "david.jarbrink@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Jari",
      "lastName": "Rajanen",
      "displayName": "Jari Rajanen",
      "email": "jari.rajanen@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
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
    }
  ],
  "information": {
    "name": "ReadSoft IO",
    "description": "A central Readsoft server installation for handling the invoices scanned by the external supplier. Integrations to and from the Readsoft servers are all standard file transfers handled by the Scania integrations platform SEIP.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2011-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2023-09-30",
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
      "id": "4440688c-bce0-4975-b9dd-6c8c951e0423",
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
      "id": "307fa1dd-431c-4091-aebd-44009fe30e62",
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
      },
      {
        "id": "599d7428-4895-481a-bfee-306eb2ba6cec",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / B - Support Functions / BD - Digitalisation, IS/IT and Shared Services / BDA - Dynamics Platform",
        "usageType": "owner",
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
      }
    ],
    "interfaceConsume": [
      {
        "id": "ca973b5b-7d58-466e-8012-9f8de5c060da",
        "description": "Data: AP Invoice, SCIS511_Industrial&CommertialOperations_Readsoft\n",
        "displayName": "Scan CAP PL_SCCO3440",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "188fd2ae-aff1-44ac-9e24-064a986c06ef",
        "description": "Data: AP Invoice, SCCO8021 is SCEQ8021 according to IX, SCIS511_Industrial&CommertialOperations_Readsoft",
        "displayName": "ReadSoft IO_SCCO8020",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "9dc24452-a889-4077-a772-7aed0e3f5653",
          "displayName": "Kofax ReadSoft Collector 6.4",
          "category": "software",
          "description": "Kofax ReadSoft Collector is an extension of Kofax ReadSoft Invoices that enables data capture from incoming email. With Collector, emailed data is automatically processed, just like data from paper documents, transferred to the host financial system in the same way.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2013-04-13"
              },
              {
                "phase": "phaseOut",
                "startDate": "2017-04-01"
              },
              {
                "phase": "endOfLife",
                "startDate": "2018-04-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "9889f876-d949-4653-b5e2-5b279a76d15f",
          "displayName": "Kofax Readsoft Invoices 5.8",
          "category": "software",
          "description": "Kofax ReadSoft Invoices is an OCR and data capture platform that automates the scanning, interpreting and filing of invoice data.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2014-06-06"
              },
              {
                "phase": "phaseOut",
                "startDate": "2018-06-06"
              },
              {
                "phase": "endOfLife",
                "startDate": "2019-06-06"
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