export default {
  "completion": {
    "percentage": 47,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 55,
    "dataManagement": 25,
    "dependencies": 50,
    "information": 63,
    "projects": 100,
    "robots": 0,
    "sourcing": 27
  },
  "subscriptions": [
    {
      "firstName": "Tomas",
      "lastName": "Hebbou",
      "displayName": "Tomas Hebbou",
      "email": "tomas.hebbou@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Quentin",
      "lastName": "Chomis",
      "displayName": "Quentin Chomis",
      "email": "quentin.chomis@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Yelena",
      "lastName": "Crona",
      "displayName": "Yelena Crona",
      "email": "yelena.crona@scania.com",
      "type": "OBSERVER",
      "role": []
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
    }
  ],
  "information": {
    "name": "Basware P2P - Purchase Management",
    "description": "Basware P2P - Purchase is an e-procurement application for the purchasing of Non Automotive Products. It will replace the current Catalogue Buying system Easy2Buy (e2B), used by Industrial Operation units, as it reached its end of life.\nBasware P2P - Purchase will replace Easy2Buy starting May 2021 with pilot unit Engine, 0056. Most of the implementation is targeted by October 2021.\n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2021-05-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2025-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "a36e16b8-d46d-4a11-ac91-290c5d24e6bb",
        "displayName": "E2B",
        "description": "easy2Buy (e2B) is an e-procurement application for the purchasing of Non Automotive Products.",
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
      "id": "44fe167e-290a-426b-8788-fe88e2f3a5f0",
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
      "id": "6d548b67-51a7-4bae-9603-463e381f16c3",
      "displayName": "Aurora / Aurora - Indirect Purchasing",
      "fullName": "Aurora - Indirect Purchasing",
      "tags": [],
      "lifecycle": {
        "asString": "plan",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Quentin Chomis",
          "email": "quentin.chomis@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "b3b41394-21e2-4e6e-87f5-117b9f55a3ce",
      "displayName": "Catalogue Buying",
      "fullName": "Catalogue Buying",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "active",
            "startDate": "2020-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2021-06-30"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Jan-Erik Spetz",
          "email": "jan-erik.spetz@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Fredrik Thunberg",
          "email": "fredrik.thunberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "RESPONSIBLE"
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
              "startDate": "2019-12-17",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2022-12-17",
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
        "id": "a0a898a1-418f-439e-a1df-fa00f9eb2545",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management",
        "description": "Eg:\n- Supplier Evaluation\n- Supplier Performance Management\n- Supplier Information\n- Supplier Interaction Management\n- Supplier Rating",
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
        "id": "c633984c-0ce4-42c3-a40c-f8c7463a2682",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZB - Purchasing IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-17"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "070577bc-7464-4513-9c28-1055b482b662",
        "displayName": "Scania - Scania CV AB / P_IO - Industrial Operations / X4 - Production and Logistics",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-24"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "e933bcb1-06ae-4188-ab72-c0c042b6d4ad",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "e49215de-a3b4-45a4-bfc2-851a5686ace5",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN1 - Business Development / SNI - Digitalisation & Systems​",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-01"
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
      },
      {
        "id": "98896fc1-2ffe-4b16-860d-dca3a6bdddc6",
        "description": "Ledger & Accounts domain manage financial information about Scania business units to different kind of users, such as managers, shareholders and other interested parties. There are ledgers for actual values, for forecasts and for budgets.",
        "displayName": "Financial Control Domain / Ledger and Account Entity",
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
        "id": "c55c154d-1e90-4d64-bf46-80e73356f742",
        "description": "Purchase Order & Management domain represents all purchase order and agreements, related to both input material for automotive products and other general non automotive products, between Scania and supplier parties including supervision over the fulfillment of the committed purchase and its different statues.",
        "displayName": "Purchase & Agreement Domain / Purchase Order Entity",
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
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