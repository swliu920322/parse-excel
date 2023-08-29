export default {
  "completion": {
    "percentage": 74,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 66,
    "dataManagement": 63,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": "Mikael",
      "lastName": "Stenroth",
      "displayName": "Mikael Stenroth",
      "email": "mikael.stenroth@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Lars",
      "lastName": "Tärnbrant",
      "displayName": "Lars Tärnbrant",
      "email": "lars.tarnbrant@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Robert",
      "lastName": "Fagernäs",
      "displayName": "Robert Fagernäs",
      "email": "robert.fagernas@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Manish Kumar",
      "lastName": "Singh",
      "displayName": "Manish Kumar Singh",
      "email": "manish.singh@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Måns",
      "lastName": "Yngerskog",
      "displayName": "Måns Yngerskog",
      "email": "mans.yngerskog@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "soren.hagglof@scania.com",
      "email": "soren.hagglof@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Scania D365 Golden Blueprint",
    "description": "Blueprint for Scania D365. Used by Commercial Operations, Scania Financial Services",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2019-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2019-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "3e48b466-70b1-44a5-88fd-c7e44aec49e4",
        "displayName": "Agresso  NO",
        "description": "Finance System",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "54206915-9c2c-4133-9977-54e9f12b4219",
        "displayName": "DORS",
        "description": "Generic issuer of AR vouchers (Account Receivable)",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "c4dfc812-c6ea-4cd4-80d7-558600596095",
        "displayName": "Dynamics AX 2009 CO BRAZIL",
        "description": "Commercial Operations AX 2009 Instance Brazil",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "e9b2c466-8252-417c-94a3-9bc83239af87",
        "displayName": "Dynamics AX 2009 CO EU",
        "description": "Commercial Operations AX 2009 Instance Europe.\nEU+Ghana+LOTS+ Real Estate",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "6416efab-3f38-4a5b-a430-55bf5d7a5884",
        "displayName": "Dynamics AX 2012 CO Asia",
        "description": "Commercial Operations AX 2012 Instance Asia\nSame code base as AX CO 2012 EU",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "c8be14e8-c15a-4826-8fa4-d759c6750f9e",
        "displayName": "Dynamics AX 2012 CO EU",
        "description": "Commercial Operations AX 2012 Instance Europe\r\nSame code base as AX CO 2012 Asia",
        "type": "Application",
        "tags": [
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "9431dee6-4bcf-4894-9464-e37c604b297a",
        "displayName": "Dynamics AX 2012 RU",
        "description": "Financial system",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "943387cb-bb61-4cdc-862f-60612dc05050",
        "displayName": "GIPS",
        "description": "Basware Invoice Processing for scania Financial Services (FS name is GIPS)\r\n",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "7c2e7644-e489-475c-ba00-f2e36d2cd4bb",
        "displayName": "GTO - Expenses",
        "description": "Expense reporting system",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "464a84e4-2bc1-43c9-9800-78d66c7508f9",
        "displayName": "IHS",
        "description": "Invoice Processing for scania commercial operations (CO name is Invoice Handling System) \r\n\r\nElectronic handling incoming invoices to Basware.\r\n",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "370763dc-e659-42c2-b23f-c153543301ee",
        "displayName": "IHS / AppAcc",
        "description": "Purchase Order Approval module between SDS, Automaster, I80 and IHS/PM\r\n\r\nAppAcc is a core component of DMS integration that receives purchase orders and good receipts, performs the necessary checks and matching for automated posting to invoice where possible.\r\n",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "6d1d4c94-0e6e-4043-8a69-1ff636fff1c8",
        "displayName": "PM (Purchase Management)",
        "description": "Purchase Management is an e-procurement application for the purchasing of Non Automotive Products for Sales and Services. Same solution as e2B, which is PM for Industrial.",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "cbd81d77-5002-4278-9bfb-446fa56db494",
        "displayName": "Visma Control",
        "description": "Accounting",
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "0dafbb1c-76df-4171-bbc8-c8d42a502ece",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Dynamics 365 for Finance & Operations instance for Americas",
        "displayName": "Scania D365 Golden Blueprint / D365 CO Americas",
        "type": "Application",
        "lifecycle": {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-09-26"
            },
            {
              "phase": "drpReview",
              "startDate": "2020-09-26"
            }
          ]
        },
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "4ae24488-5e35-4686-bb87-fcc3334389d9",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Cloud version of Microsoft Dynamics AX in Asia. \nFull range ERP system.\nInstance for Asia\n",
        "displayName": "Scania D365 Golden Blueprint / D365 CO Asia",
        "type": "Application",
        "lifecycle": {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-09-26"
            },
            {
              "phase": "drpReview",
              "startDate": "2020-09-26"
            }
          ]
        },
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "cd27a757-1e23-464d-80db-f2dba592a1d2",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Cloud version of Microsoft Dynamics 365 in West Europe. \nFull range ERP system.\n",
        "displayName": "Scania D365 Golden Blueprint / D365 CO Europe",
        "type": "Application",
        "lifecycle": {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-09-26"
            },
            {
              "phase": "drpReview",
              "startDate": "2020-09-26"
            }
          ]
        },
        "tags": [
          "Not China affected",
          "Maturity Level 2",
          "ICS internal"
        ],
        "subscriptions": []
      },
      {
        "id": "736f6810-6bb7-493d-8c60-0e88b7b9de31",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Microsoft Dynamics 365 for Finance and Operations FS is a Standardized integrated ERP application from Microsoft. It is cloud-based, accessed from a web browser, and used by Scania Financial Services as the preferred Accounting and Reporting tool. ",
        "displayName": "Scania D365 Golden Blueprint / D365 Scania Financial Services",
        "type": "Application",
        "lifecycle": {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-09-26"
            },
            {
              "phase": "drpReview",
              "startDate": "2020-09-26"
            }
          ]
        },
        "tags": [
          "Not China affected",
          "Colombia",
          "Great Britain",
          "Ireland",
          "Italy",
          "Luxembourg",
          "Mexico",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "7419eed5-cb66-4420-805c-09452fc1f4ff",
        "activeFrom": null,
        "activeUntil": null,
        "description": "DMS365 is a Dealer Management System built based on D365 Finance & Operations. \nDMS365 is used by workshops to manage the daily business such as workshop planning, workorders, warranties, spare parts, etc.",
        "displayName": "Scania D365 Golden Blueprint / DMS365",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "1c994090-1ff3-4597-9942-0524ec987f44",
        "activeFrom": null,
        "activeUntil": null,
        "description": null,
        "displayName": "Scania D365 Golden Blueprint / Dynamics 365 in mainland China",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "fd07ce61-b08a-4d50-a726-a838238d75ea",
        "activeFrom": null,
        "activeUntil": null,
        "description": null,
        "displayName": "Scania D365 Golden Blueprint / OMS365",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "dfacf4bd-9bb6-4858-90ac-7781b27d6b14",
        "activeFrom": null,
        "activeUntil": null,
        "description": "This is the global cloud version of Scania CRM. All markets will be part of this application.\nScania Customer Relationship Management captures contact information, essence of sales visits, the customer’s future purchasing plans, tracks quotations and handles customer complaints.\n\nScania CRM is build on the application Microsoft Dynamics 365 Customer Engagement. ",
        "displayName": "Scania D365 Golden Blueprint / Scania CRM",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2",
          "Target State Commercial"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "48cc4cb4-e69d-4897-b4bd-dfb27e2eae7f",
      "displayName": "CRM",
      "fullName": "CRM",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Dick Lyhammar",
          "email": "dick.lyhammar@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "4ee7f8fa-ab51-42df-9f4f-a366ee23573e",
      "displayName": "D365 Program",
      "fullName": "D365 Program",
      "tags": [
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2017-03-01"
          },
          {
            "phase": "active",
            "startDate": "2017-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Sirpa Södereng",
          "email": "sirpa.sodereng@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Hellqwist",
          "email": "magnus.hellqwist@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "d4cd50d3-eee8-41bc-aeea-600b238eb73b",
      "displayName": "DMS365 (NEW DMS)",
      "fullName": "DMS365 (NEW DMS)",
      "tags": [
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2017-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2021-01-01"
          },
          {
            "phase": "active",
            "startDate": "2023-06-05"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anton Waanders",
          "email": "Anton.Waanders@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Arnoud Schotting",
          "email": "Arnoud.Schotting@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Amit Sonawane",
          "email": "amit.sonawane@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Dick Lyhammar",
          "email": "dick.lyhammar@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sayan Dutta",
          "email": "Sayan.Dutta@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Sislin Meulens",
          "email": "sislin.meulens@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Magnus Eriksson",
          "email": "magnus.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Nitin Awasthi",
          "email": "nitin.awasthi@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Andreas Kaloyirou",
          "email": "andreas.kaloyirou@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "9d446582-f78d-4edd-90fe-a0b061f0a0d1",
      "displayName": "Novali Order VP",
      "fullName": "Novali Order VP",
      "tags": [
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2020-11-23"
          },
          {
            "phase": "phaseIn",
            "startDate": "2020-11-23"
          },
          {
            "phase": "active",
            "startDate": "2021-05-11"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Sirpa Södereng",
          "email": "sirpa.sodereng@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Mikael Stenroth",
          "email": "mikael.stenroth@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Hanna Trolleberg",
          "email": "hanna.trolleberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Johanna Åström",
          "email": "johanna.astrom@scania.com",
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
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2018-02-08",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2021-02-08",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-09-26",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2020-09-26",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "729d778a-7e8d-4312-a607-a6fa55c04d8e",
        "displayName": "A. Manage and Develop Enterprise / Operational Management / Identify and Manage Continuous Improvements",
        "description": "Ability and culture to identify and continuously seek and eliminate waste by implementing improvements of ways of working that make the business more efficient and cost effective",
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
        "tags": []
      },
      {
        "id": "8f19fd0c-0287-4f87-8f5c-a6b87362709e",
        "displayName": "B. Legal, Risk and Compliance Management / Compliance Management / Legal/Fiscal Management",
        "description": "The ability to report tax and answer legal questions to authorities related to revenues, product structure, product and parts costs.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-22"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "2b1e91c1-ab53-482b-9bb5-f8221c7c3640",
        "displayName": "D. Market Demand and Synchronized Business Planning / Market Demand Planning / Production Capacity Planning",
        "description": "The ability to plan the production capacity needed by an organization to meet changing demands for its products and services. Could be based on forecasts.",
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
        "id": "8fa6a7e3-5947-45cc-9a89-7e76e815cb1a",
        "displayName": "D. Market Demand and Synchronized Business Planning / Market Demand Planning / Supplier Capacity Planning",
        "description": "Eg: Demand & Capacity Management including Identify demand figures, Match capacities, Monitor demand & capacity status, Ensure supply reliability, Provide demand & capacity data, Create BKA (VW term meaning Demand and Capacity Comparation). ",
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
        "tags": []
      },
      {
        "id": "95dc7456-1792-4786-8fb1-069d7acb911f",
        "displayName": "D. Market Demand and Synchronized Business Planning / Market Strategy / Product Volume Planning",
        "description": "Ability to plan upcoming needs for production based on assumptions about customer needs. ",
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
        "tags": []
      },
      {
        "id": "a08a1aba-6388-4ab6-9d39-8e462d7c3296",
        "displayName": "E. Solution Development & Optimization / Design and Maintain Modular Architecture / Integrate into Modular Solution Range",
        "description": "Ensure technical independence in configuration in the \"Bygglåda\", built up by a system of hardware and software components, can be combined to realise the intended products and services.",
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
        "id": "d2042f28-fce7-4fed-92d7-f7235ce31708",
        "displayName": "E. Solution Development & Optimization / Solution Development Change and Release Management / Plan and Manage Change Release",
        "description": "The planning and management of the change releases.",
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
        "id": "f9bbf0d8-5f52-4152-856b-593fa84f6494",
        "displayName": "E. Solution Development & Optimization / Solution Development Change and Release Management / Prepare Continuous Solution Delivery Information",
        "description": "Create and maintain central data structures in order to support all processes with timely and accurate product information. \nEg: * Product Structure Provisioning    * Configuration rule maintenance (including set productionstructurefor market, productionstructure, design structure)    * Pre configured product setup",
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
        "id": "146b3116-c88d-47a3-86af-25b9d889f5d8",
        "displayName": "F. Industrialization and On-Demand Release Management / Commercial Introduction Preparation / Spare Part Preparation",
        "description": "Including Spare Part Catalogue Preparation",
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
        "id": "709a9d7c-a6a3-4007-9304-e64af2c1a746",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Material Demand Planning",
        "description": "Ability to forecast by calculating requirement quantities of raw material (blanks) or parts to supply material need in manufacturing or assembly. Base for the calculations can be actual planned operations or forecast",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-03"
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
        "id": "d3bf93cc-37ae-40e3-87dd-e995fd1400f6",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Requisitioning",
        "description": "The Capability to Retrieve, Approve, Decide of a Procurement through a Purchase Requisition. Eg ordering a new tool for the factory or ordering an service such as ordering a new computer or consultants etc. ",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-24"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
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
        "id": "e009835d-88e7-4e09-a0f0-e56faf8bdb84",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Sourcing Management / Purchase Contract Management",
        "description": "Legal contract, Commercial contract & Operational contract (Purchase price handling, Purchase Agreement Distribution, Contract lifecycle)",
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
        "id": "e1ddfcef-a764-44c1-a96c-c0e714531fbc",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Sourcing Management / Sourcing Execution",
        "description": "RFx Management, Negotiation Management, Sourcing Decision (Compare, Decide, Distribute)",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-07"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "2c045e5a-edee-4b7d-a1ae-f5b6bb8a2645",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Sourcing Management / Sourcing Planning",
        "description": "The ability to plan and communicate the sourcing activities. Identification of key milestones and measurement of sourcing results.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-07"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "24d40011-93ad-4aee-b8c4-781a09633470",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management / Supplier Performance Management",
        "description": "Supplier Performance Evaluation, Supplier Evaluation Measurement, Supplier Progress Monitoring (Risk and Sustainability)",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-03-21"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "ac0d7d2f-858c-44cf-903f-737657ff320c",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management / Supply Chain Monitoring",
        "description": "Monitoring and reporting progress for material deliveries through the whole supply chain.",
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
        "id": "9909f291-9cd2-4ca0-aa01-13920e039101",
        "displayName": "H. Logistics and Warehouse Management / Transport Management / Loading Management",
        "description": "Manage on- and off-loading of goods.",
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
        "id": "1f3cc3a9-65b6-4188-bd74-0547277a02a4",
        "displayName": "H. Logistics and Warehouse Management / Transport Management / Transport and Cross Border Documentation Management",
        "description": "Ability to manage compliance documentation for transport, export and import of products and documentation for managing transports with carrier and partners. This also includes managing of custom fees, managing of export and import reporting to authorities, e.g. Intrastat. Documentation can be electronic like messages to custom authorities, customers or carriers and physical like paper and labels that has to follow goods transported.",
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
        "id": "c38d3909-7c37-4ef9-8157-8409e9ca3035",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Finished Product Stock Handling",
        "description": "The ability to handle stock/inventory for Finished Goods products to be delivered from site",
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
        "id": "5642c602-d70f-4bee-b7fb-f92443cdede3",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Goods Receive Handling",
        "description": "The ability to handle goods receipt, including delivery notes handling, unpacking, repacking, inspection, quality control, inventory handling and more",
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
        "id": "c69f1814-9f8f-405d-b113-12aec83d35c0",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Inbound Inventory Handling",
        "description": null,
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
        "id": "a023fd29-c465-49fa-965d-f7734f0fb5bc",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Internal Inventory Handling",
        "description": null,
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
        "id": "dfdb8e91-e5ea-49ec-b17e-0a39e79cbc7d",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Outbound Inventory Handling",
        "description": null,
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
        "id": "6a4b2bfc-6418-451f-b5f2-45ba20f1ecbf",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Packaging Management",
        "description": "The required processes to ship packaging to relevant organizations (suppliers mostly). Storage, sorting, recycling, breakdown, ordering, shipping and material planning for packaging numbers",
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
        "id": "cdd843dd-c22e-451a-b8e7-14900af6a691",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Picking",
        "description": null,
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
        "id": "625cc49b-c9d6-40e8-8593-aeca41ce9aa9",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Warehouse Configuration",
        "description": null,
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
        "id": "37d6ea4a-2185-4d84-88dc-9b68e3f512b4",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Warehouse Control (Inventory)",
        "description": null,
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
        "id": "ae8ef3dc-ce53-4a8d-96ff-c09b221cfa28",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management / Customer Information Management",
        "description": "The ability to maintain relevant information about customers, including status, contacts, addresses and more.",
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
        "tags": []
      },
      {
        "id": "111ebccd-1f0a-47a5-a471-5276eca2e454",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management / Customer Prospecting",
        "description": "Ability to find new potential customers.",
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
        "tags": []
      },
      {
        "id": "93862336-f9b2-42c4-aef4-e56fbdaf4071",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management / Customer Segmentation",
        "description": "Ability to split our customers into groups based on their common characteristics in order to better tailor our services or products to their needs.",
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
        "tags": []
      },
      {
        "id": "34fe7aa3-832a-4489-9b9b-117d287b1d86",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management / Sales Activity Handling",
        "description": "Eg:\n\nSales activity planning\n\nSales activity execution\n\nContact management\n\nSales activity follow up\n\nOpportunity handling \n\n(eg Opportunity need \n\nidentification)",
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
        "tags": []
      },
      {
        "id": "ac6f1aed-441f-4f81-8fca-aeefac3d036a",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Quotation & Deal Management / Sales Quotation Handling",
        "description": "Ability to provide most suitable solution configuration and price quotation to customer needs. Eg: Sales Quotation initiation. Sales quotation analysis (including product and service need identification). Preliminary resource allocation (during confirm of sales quotation). Sales quotation printing & publishing. Sales Quotation price handling. Sales Quotation negotiation handling. Sales quotation approval. Confirmed sales quotation receiving. Sales quotation rejection.\nManage Quotations and Deals; Make offerings to and negotiate with  prospective customers to get the deal.\n",
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
        "tags": []
      },
      {
        "id": "9c6a5d41-1200-41a7-b1da-296b83d099a7",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Solution Management / Price Management",
        "description": "Validate Price and Cost. Ensure that the industrial lifecycle cost of a product, in terms of pricing, is in balance with customer total operating economy. Eg: Customer price handling (including price list handling, price modification, price settlement, discounts management, price validation)",
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
        "tags": []
      },
      {
        "id": "6229136a-be84-4eb6-a994-85fc1e75f4fe",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Solution Management / Solution Configuration Handling",
        "description": "The ability to configure the products and services to adapt to customer or market requirements, including publishing and validation. Example: Configuration adaptation or Configuration identification or Presentation material publishing or Configuration reuse or Configuration validation or Deviation handling (from configuration validation).\n\"Offer Customer Special Adaptation\"; Offer the opportunity for customer special solutions outside the range of the standard factory offering.\n\"Configure Value Proposition\"; Create a configured solution by analysing the customer need.\n\"Acknowledge Legal Conformity\"; Ensure and declare conformity to both industry regulations and government legislation that encompass the products or services  offered and delivered to a customer.\n\"Coordinate Specification with Delivery Partners\"; Coordinate proposed specification with bodywork supplier to enable feedback loop to ensure customer value.",
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
        "tags": []
      },
      {
        "id": "fb6a3682-b834-41f7-a911-337451565271",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Solution Management / Solution Portfolio Management",
        "description": "Ability to handle and manage solution portfolio, the products and services that Scania sells and how they are packed together. Ability to gather and list customer requirements for development, order and delivery of products and services.",
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
          "MilkyWay area 13. Market Introduction"
        ]
      },
      {
        "id": "cda6ee0d-463f-49d8-a6e3-a2b113fd611e",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Product Individual Information Registration",
        "description": "The ability to register Product individual information at the time of creation of a new Product individual. For example serial numbers, weight, length, height, CO2.\n\n",
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
        "tags": []
      },
      {
        "id": "360e171b-b229-4f0c-802a-0369d8eb11b6",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Change Communication",
        "description": "The ability to communicate information about changes regarding Sales orders, to affected parties. Example: Time changes or Content changes or Technical changes or Terms changes or Supplier changes or Price changes",
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
        "tags": []
      },
      {
        "id": "0b6064c5-bcda-48ef-9229-ff47cdc7b85d",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Customer Invoice Management",
        "description": "Administrate, prepare, and validate customer invoices.\nThe ability to invoice customers based on the contracts, payment plans and the delivery of the products.\nTo prepare customer invoice including e.g. identify parties involved, collect deliveries, order and contract information, terms, currency information and other information needed for invoice creation.\nTo create invoice based on prepared information manage financial bookings connected to invoice creation and manage costs for invoiced solutions.\nTo send collected and created invoice basis to affected parties and systems.",
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
        "tags": []
      },
      {
        "id": "7adafcb7-ffad-4b25-9ac2-36c87a9b40b9",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Sales Order Creation",
        "description": "The ability to handle Sales orders for Scania offered Products and Services through the distribution chain, including configuration, description, approval, changes.\nExample: Sales order approval, Sales order change handling (initiated from Scania or req. from customer), Sales order traceability handling.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-19"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "a0551704-2007-4d88-97c3-c167472320db",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Sales Order End to End Visibility",
        "description": "Monitors the logistics chain from order receiving until delivery of finished product and reporting progress to customers. Eg: Fulfillment plan visualization or Sales order visualization",
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
        "tags": []
      },
      {
        "id": "2e4dba63-2efe-4e9e-8ae8-fe47b5f4aac9",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Sales Order Validation",
        "description": "The ability to validate and check feasibility of sales orders for Scania offered products and services.\nExample:\nCustomer or requester information\nProducts and services from a technical perspective including both standard orders and special request orders\nProducts and services from a commercial perspective, e.g. terms, agreements, prices, Incoterms, delivery conditions\nTransports and delivery times\nAnd more",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-19"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "970b3c4e-688d-4c0a-a5cd-55276b17489a",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Sequence and Just-In-Time Delivery Management",
        "description": null,
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
        "tags": []
      },
      {
        "id": "3d2f78c2-4103-44bf-95b0-4ac06915db6d",
        "displayName": "K. Solution Completion and Delivery / Sales Order Orchestration / Constraints Management",
        "description": " The ability to handle constraints affecting the fulfillment of Sales order, including supply chain sequence, resources, legal aspects and more.\n*Production volume capacity\n*Production technical capability (equipment, suppliers, etc)\n*Transport restrictions\n*Market reservations\n*Type approvals/Certifications",
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
        "tags": []
      },
      {
        "id": "5c6db4d3-06cb-4988-a78c-04e8cc5ff263",
        "displayName": "K. Solution Completion and Delivery / Sales Order Orchestration / Deliveryplan and Forecast Handling",
        "description": "The ability to eg: Receive information for fulfillment orchestration, including delivery plans and forecasts or Break down received information to a level relevant for fulfillment orchestration or Validate recieved information for fulfillment orchestration, including delivery plans and forecasts",
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
        "tags": []
      },
      {
        "id": "ead1471d-8b9b-4624-9908-41bbb5b0e4d7",
        "displayName": "K. Solution Completion and Delivery / Sales Order Orchestration / Sales Order Fulfillment Planning",
        "description": "The ability to schedule complete Sales Orders for relevant parts of the supply chain. The scheduling is based on available capacity from suppliers, production sites and transport. Also technical capabilities are considered.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-19"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "8e797c20-18a7-482d-9c47-619742d56a4b",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Fleet Management Operations / Vehicle Rental Fleet Management",
        "description": "Ability to manage the rental fleet, e.g. managing vehicles including related taxes, fees, insurance etc, fleet planning including daily capacity planning and actions, check in and out of rental vehicles, and managing damage repairs.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-08"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "474fd25a-3550-41be-be43-591d2d4cbb62",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Product Repair, Maintenance and Updating / Product Individual Management",
        "description": "Eg: Product individual information reading or Product individual information update",
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
        "id": "11f7d150-36cc-4272-b183-4313fcd0c321",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Services Contract Management / Rental Contract Management",
        "description": "Ability to manage the lifecycle of rental contracts.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-08"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
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
        "id": "3a50526c-9570-46a9-871f-5867659baa1a",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Project Accounting",
        "description": "Projects are generally part of the internal processes of a company. To be able to control all tasks in project execution, you need an organizational form that is specific to the project and which is shared by all departments involved. Before you can carry out a project in its entirety, the project goals must be precisely described and the project activities properly structured. A clear, unambiguous project structure is the basis for successful project planning, monitoring, and control.",
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
        "id": "3c84d2df-4577-47fd-9e0b-5b2597132c8d",
        "displayName": "N. Financial Planning and Accounting / Advanced Finance Operation / Collection & Dispute Management",
        "description": "This scope item helps you to streamline debt collection processes, resolve customer invoice disputes, and manage overdue receivables. You can also reduce your exposure to the risks and costs of bad debt.\nDispute Management provides dispute managers with tools to process disputes centrally and protect customer relationships. They can effectively manage disputes by using dispute resolution tools, dunning integration, and workflow integration.\n\nCollection specialists can proactively manage and collect overdue receivables by using receivables collections tools and dunning integration. The specialists have all the information and support they need to collect payments faster and provide improved customer service. They can identify bad debt risk potential and take preventative steps to reduce further exposure.",
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
        "tags": []
      },
      {
        "id": "481df362-ed6b-4229-a13c-c826704270be",
        "displayName": "N. Financial Planning and Accounting / Advanced Finance Operation / Credit Management",
        "description": "The credit worthiness and payment behavior of your business partners has an immediate effect on the business results of your company. Efficient receivables and credit management reduces the risk of financial losses and helps you to optimize business relationships with your business partners. Basic Credit Management supports your company in the early determination of the risk of losses on receivables from your business partners and supports you in making credit decisions. Basic Credit Management checks the exposure against the current credit limit for the business partner. In addition, you can also perform other checks, such as oldest open item, maximum dunning level, or last payment. If the new order is blocked, the blocked order can be released or rejected by authorized staff.",
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
        "tags": []
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
      },
      {
        "id": "3126d041-8c69-41d3-b76b-b29b0a2c76ea",
        "displayName": "N. Financial Planning and Accounting / Financial Planning & Analytics",
        "description": "To be able to plan, steer and follow up the Scania group, from each reporting unit or even cost / profit center to the whole company group",
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
      },
      {
        "id": "39b29665-c26b-478a-9232-9a8179ddd3ef",
        "displayName": "N. Financial Planning and Accounting / Financial Planning & Analytics / Planning/Forecasting/Budgeting",
        "description": "To be able to plan, steer and follow up the Scania group, from each reporting unit or even cost / profit center to the whole company group, we need to make the best possible financial estimates of the future that the current data and information at hand can give. Depending of the time horizon, the receiver of the estimate and the needed details, we have several different planning processes, of which some are bottom-up and some are done at the top.",
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
        "id": "b399a371-a621-4a54-94c3-de5b25573757",
        "displayName": "N. Financial Planning and Accounting / Treasury Management / Bank Account Management",
        "description": "With Advanced Bank Account Management, the cash managers and the bank accountants can manage the bank and account master data centrally and maintain signatories in multiple bank accounts. The result of the maintenance can be activated with different control patterns. One can also view the bank and bank account related master data with reports and fact sheets and look at an annual review.",
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
        "id": "6f8194ae-6b9f-4a35-98f7-41e0113871c8",
        "displayName": "Supporting processes / Finance Process",
        "description": null,
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
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
        "id": "19e8c127-e25d-41b5-b4ca-b7b3b8baff40",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZE - ERP - Digital Core / IZED - MS Dynamics AX Center of Excellence",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-01-02"
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
      },
      {
        "id": "269f6aa7-69e3-44fe-8f81-a6743763b1ff",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOAR - Scania Commercial Operations Argentina",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "aab94fe2-ecd3-4ed1-90e9-89cb82c9fb1d",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOMX - Scania Commercial Operations Mexico",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "10778aa3-ad06-4f93-b058-22a2fb636ffa",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOUS - Scania Commercial Operations USA & Canada",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "9e30285a-4bea-4fc1-a738-d9992bd304ab",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WE - Region Europe / WE - BU Baltics",
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
        "id": "9747a891-20bc-4919-a9e1-bd6b8c4deedc",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU East Africa",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "6b52c8d6-7e3d-436d-93c6-3c36e41503a6",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU Middle East and Central Asia",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "968fac52-bf34-4577-998f-93537f33280b",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU Southern Africa",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "630abad4-5e33-4e9e-9662-a2c1addbfab2",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - West Africa",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "9b3566b6-3f6e-45a2-9a85-ae39b45bdb97",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / A - Scania Sverige AB",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-06"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "7a740646-694b-4a95-8c8c-3cf8df888f5f",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Australia",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "137ec344-1000-41a2-888c-47ce41377598",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Hong Kong",
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
        "id": "a5f4aafb-6839-49ab-b492-9b9a82d8d9e0",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Japan",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "5ef98fc0-1497-4ecd-9be6-1c309143c95d",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU South East Asia",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "c77a236b-4d21-4cae-8801-bab0e07b1ce8",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Thailand",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
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
        "id": "b664614e-f97a-4c0c-b64c-cae3d377d759",
        "description": null,
        "displayName": "Autoline-CreditBalance-HK IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-29"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a669c8a8-12ab-4a0a-8428-690dbfc5d1d2",
        "description": null,
        "displayName": "D365 Integration Layer_dynamics365 IE v1.0.0",
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
        "id": "19679119-3479-4c33-aa5e-d72cb5fbb573",
        "description": null,
        "displayName": "D365 Integration Layer_dynamics365-creditlimit IE 1.0.0",
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
        "id": "4e162b25-4737-4d1a-acbb-688264af253e",
        "description": null,
        "displayName": "D365 Integration Layer_Dynamics365Iacob IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "5b994fae-9e3f-4017-822d-54a613cc7f45",
        "description": "Function Upload Automaster FT Transaction File",
        "displayName": "D365 Integration Layer_func-D365-AM-bs-prod-001 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "e8eca2c1-97bb-47f3-b10f-cf4007deecb7",
        "description": "Upload customer file from automaster",
        "displayName": "D365 Integration Layer_func-D365-AM-bs-prod-002-1 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-08"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "dda0716f-c5ea-4b37-8ecc-0a4670f26e61",
        "description": "Upload Free text invoice to Dynamics from Automaster for Mexico",
        "displayName": "D365 Integration Layer_func-d365-AM-bs-prod-004 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-08"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d1a47d3a-e009-464b-916d-9559820e8383",
        "description": "Import Purchase order from COW  into D365FO",
        "displayName": "D365 Integration Layer_func-D365-COW-bs-prod-001 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "973abafe-66e4-4bb0-bd9e-96f0d4e473aa",
        "description": "COW Sales Order import into D365FO",
        "displayName": "D365 Integration Layer_func-D365-COW-bs-prod-003 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "67f737ef-e0c3-482d-b5e2-a2e1a45da78d",
        "description": "Custom service call using JSON payload",
        "displayName": "D365 Integration Layer_func-D365-COW-bs-prod-005 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "04e213ff-27e9-47f0-aa06-db9215576f2f",
        "description": null,
        "displayName": "D365 Integration Layer_func-d365-salsa-we-prod-002 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "265df6d5-65e8-4f36-b292-14a2e9607b79",
        "description": "Generic upload function for Brazil south region",
        "displayName": "D365 Integration Layer_func-d365-upload-bs-prod-001 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-01-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "49e017ab-5879-4f39-8212-a2d87cc9a8e1",
        "description": "Azure Logic App.",
        "displayName": "D365 Integration Layer_la-d365-mxcredbalance-bs-prod-001 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "37088c8b-2422-4554-b66f-579c0b9d7baa",
        "description": "Azure Logic App logic-d365-SDS-we-prod-002 for SDS Benelux credit balance",
        "displayName": "D365 Integration Layer_logic-d365-SDS-we-prod-002 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-28"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "c950fad2-29a0-4437-9bdb-4207fc25a803",
        "description": null,
        "displayName": "D365 Integration Layer_ProcessAPI_Prod_Novali_SP_CompleteVehicle IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f944dc2f-22e1-4528-a0ef-67bcc0b6675d",
        "description": null,
        "displayName": "D365 Integration Layer_ProcessAPI_Prod_Novali_SP_PrefillOrderPage IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-22"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a2c893d3-a5ad-4b5a-ae7a-7d42f9abd529",
        "description": null,
        "displayName": "D365 Integration Layer_Salsaorderconfirmations IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-31"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a34c2438-92e0-4743-9cb2-63b416f3f16d",
        "description": null,
        "displayName": "D365AutolineSalesOrderConfirmationFileDownload IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6fc395fb-9b13-405a-bc45-a91ffe0ac7d8",
        "description": null,
        "displayName": "D365AutolineSalesOrderFileUpload IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "00ad476b-e389-4920-b670-e1dc5645548d",
        "description": null,
        "displayName": "D365AutolineSalesOrderInvoiceFileDownload IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d4454110-3aeb-4ef2-9657-72f179d01035",
        "description": null,
        "displayName": "D365CommonFileUploadEA IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "af6455c8-e8b3-437b-b6d3-8581e224416c",
        "description": null,
        "displayName": "D365IntegrationDownloadFileEAProd IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-07-11"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "22cb96e5-590e-4393-9d6b-a67623c334b2",
        "description": null,
        "displayName": "D365IntegrationLoggingEAProd IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-07-11"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ce478465-194b-4243-9a62-e0395b482a3f",
        "description": null,
        "displayName": "DSM CORE_DSM_D365 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-06"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "e04f4055-6d69-4430-9a9e-a0ff702f6394",
        "description": null,
        "displayName": "FileHandler_D365 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-28"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f453ff65-8727-4b44-b024-e117e838bd06",
        "description": null,
        "displayName": "FS FileHandler_AutomaticFilehandler IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-11-28"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "9ee6a588-488b-4cd1-ba43-e50e8f49ea4b",
        "description": null,
        "displayName": "func-d365-slip-ea-prod-003 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ceadda83-fd7e-4384-90a3-3ca12e1d1c66",
        "description": "This service provides allows dealers/distributors to download the below files :\n\nPart Description File: This file contains parts information, description, and other product attributes, for all current part numbers.\n\nParts Supersession file : This file contains information about superseded parts. It consists of all superseded part numbers and the part number that have superseded them.\n\nPart Terms file: This file contains part numbers, their corresponding term numbers, and translations of part terms in the user-selected language.",
        "displayName": "PartTerm_PartTermService IE V1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-02"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "c1bed683-6bd4-480c-8087-d8577f31cddd",
        "description": "Interface for customer information. Draft for Commercial Target Architecture.",
        "displayName": "QING_Customer [Kafka]",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2022-09-07"
            },
            {
              "phase": "active",
              "startDate": "2024-01-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "2271bfe2-cd4a-4d82-bc2d-c36c54fce3f3",
        "description": "Interface for customer information. Draft for Commercial Target Architecture.",
        "displayName": "QING_Prospect [REST]",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2022-09-07"
            },
            {
              "phase": "active",
              "startDate": "2024-01-01"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "3b12fc97-4139-4ba0-8bc3-a54accbed503",
        "description": "Interface for customer information. Draft for Commercial Target Architecture. \"Active from\" date to be verified.",
        "displayName": "Scania D365 Golden Blueprint_Customer [REST]",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2022-09-07"
            },
            {
              "phase": "active",
              "startDate": "2024-01-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cde952ce-40b9-40e2-afa3-781176da62fc",
        "description": null,
        "displayName": "Scania D365 Golden Blueprint_Financial data",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "113f22f1-3007-43bd-975c-0d59f52e4f28",
          "displayName": "Microsoft Dynamics 365 for Finance and Operations online service 2019",
          "category": "software",
          "description": "Microsoft Dynamics 365 for Finance and Operations is a Microsoft enterprise resource planning (ERP) system for medium to large organisations. The software, part of the Dynamics 365 product line",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-04-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "14430ad2-d24a-4423-b92a-2ae486f7b005",
          "displayName": "SignUp ExFlow",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "b7d6e727-4969-4c4e-aa20-ab5a0a872410",
          "displayName": "SK Global Software Banking Automation Suite",
          "category": "software",
          "description": "The Banking Automation Suite for Microsoft Dynamics 365 allows communication directly and safely to any bank in the world, from within the Microsoft Dynamics 365 ERP system. This means that payment instructions can be sent directly from Dynamics 365 to banks, bank statements can be imported and bank statement reconciliations processed automatically.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "plan",
                "startDate": "2018-09-01"
              },
              {
                "phase": "phaseIn",
                "startDate": "2019-01-01"
              },
              {
                "phase": "active",
                "startDate": "2019-07-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [
        {
          "id": "32aa8579-9a98-4341-81f6-6e09f0c29039",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic",
          "category": "service",
          "description": "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2008-10-27"
              },
              {
                "phase": "endOfLife",
                "startDate": "2024-10-31"
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