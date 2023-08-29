export default {
  "completion": {
    "percentage": 32,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 53,
    "dataManagement": 38,
    "dependencies": 50,
    "information": 33,
    "projects": 100,
    "robots": 0,
    "sourcing": 10
  },
  "subscriptions": [
    {
      "firstName": "Quentin",
      "lastName": "Chomis",
      "displayName": "Quentin Chomis",
      "email": "quentin.chomis@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Ebba",
      "lastName": "Dyrell",
      "displayName": "Ebba Dyrell",
      "email": "ebba.dyrell@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Magnus",
      "lastName": "Wikegård",
      "displayName": "Magnus Wikegård",
      "email": "Magnus.Wikegard@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    }
  ],
  "information": {
    "name": "Maximo Purchasing",
    "description": "System supporting the inventory and purchase of Non Automotive Products.",
    "lifecycle": {
      "asString": "phaseOut",
      "phases": [
        {
          "phase": "active",
          "startDate": "2015-01-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2021-01-01",
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
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "54883dfa-a0a1-46e6-bf21-a55fc7b74da8",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Application for GP in SLA",
        "displayName": "Maximo Purchasing / Nimbi - GP Market Place",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "289c9620-09c9-4832-9c12-bc520270a449",
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
      "id": "891f5235-bdb4-4bab-8643-b24a83c82fc8",
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
        "id": "2c422b88-a917-45e3-9a07-be9b32c4b905",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Development / Manage and Implement Enterprise Change",
        "description": "The ability to implement decided changes in a controlled manner by securing the new solutions works in its surrounding and that people are educated and ready to work according to changed conditions.\nDrive and Enable Business Transformation; Initiate and enable business transformation according to strategic directives",
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
          "MilkyWay area 3. Ideate, Define & Decide Change Direction",
          "MilkyWay area 7. Manage Change, Configuration and Releases"
        ]
      },
      {
        "id": "be1652f2-717b-41c6-9784-a691744231cb",
        "displayName": "E. Solution Development & Optimization / Demand Analysis and Requirement Management",
        "description": "Ability to manage requirements from different stakeholders. Ability to support processes and traceability of changes.",
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
        "id": "c3c0dc13-e5f2-4410-b087-0ce4c826f255",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Purchase Order Processing",
        "description": "The ability of processing a requisition into a commercial document. Including Supplier purchase order/call off (incl. NAP Ordering, AP Ordering, Tools Ordering, Experimental Parts Ordering).",
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
        "id": "e009835d-88e7-4e09-a0f0-e56faf8bdb84",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Sourcing Management / Supplier Contract Management and Administration",
        "description": "The ability to manage legal contracts and commercial contracts (Purchase price handling, Purchase Agreement Distribution, Contract life-cycle).",
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
        "id": "752502bf-840e-4e11-8fb9-fa5efee7662a",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SA - General Purchasing",
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
        "id": "23a1988b-fbc4-45ba-8341-da1e5d5f51ec",
        "description": null,
        "displayName": "Facility Management Domain",
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
      }
    ],
    "interfaceConsume": [
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
        "id": "d2b1b2a5-1784-4d71-aa31-169bfd5b6d9f",
        "description": "Sending POD SIAM Database\nSending contract SCCO5001\nSCIS632_MXGLCompService",
        "displayName": "Oracle Financials (EBS) / eBS_GL_MXGLCmopService SCCO4253",
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
    ],
    "interfaceProvide": [
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
    "ChinaITlegalCompliance": "SQCsent",
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