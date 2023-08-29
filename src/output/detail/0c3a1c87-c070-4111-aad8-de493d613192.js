export default {
  "completion": {
    "percentage": 16,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 55,
    "dataManagement": 13,
    "dependencies": 0,
    "information": 38,
    "projects": 0,
    "robots": 0,
    "sourcing": 38
  },
  "subscriptions": [
    {
      "firstName": "Helena",
      "lastName": "Hede",
      "displayName": "Helena Hede",
      "email": "helena.hede@scania.com",
      "type": "OBSERVER",
      "role": []
    },
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
    "name": "BI Industrial Operations Finance",
    "description": " Description: Business Intelligence solution in PowerBI (PBI) for the finance community within Industrial Operation (IO), excluding South America (SLA) and also for outside Industrial Operation for the SEU EBS units using EBS, for HFM pure 400 level (global Industrial Operation). Consumption via CDW Finance. \n\nBI applications available: \n1) OPEX OPERATIONAL ANALYSIS 2) OPEX ANALYSIS 3) MASTERDATA EBS 4) USERS and APPROVER OVERVIEW, 5) PERSONNEL FOR CONTROLLERS. \n\nThe data sources per listed BI application: \n1) EBS General Ledger (GL) and Accounts Payable (AP) filtered for Operating Expenses (OPEX) via KST Admin list of account, Operational Projection (on EBS level) via Excel dropfile funtionality, direct link to URL Basware P2P and Efhekt (historical records) for Supplier Invoice Information. \n2) HFM OPEX specification S99, Volumes S7 for both Actuals (ScFr) and Projection (PN). \n3) EBS GL, KST Admin list of account. \n4) Scania Service Now and the Approval dropfile mapping for Industrial Operation Finance. \n5) Exception to the other BI-solutions only Sweden. Aditro. HFM specifications S27, S112 & YE31 for personal statistics, Actuals (ScFR). Hardcoded mapping of HR unit plus HR department for the HR units represented by more than one HFM entity. PowerApp load functionality of missing personnel, long term absent, and forecast.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-08-03",
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
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "insufficient",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2020-06-30",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2023-06-30",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
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
      }
    ],
    "organisations": [
      {
        "id": "364d9b5f-ae35-4f0a-a5c0-d630591326b8",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAZ - Supporting Processes Business Intelligence",
        "usageType": "ITmaintenance",
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
        "id": "b9a67eee-a1f5-4282-a581-b80296860f58",
        "displayName": "Scania - Scania CV AB / P_IO - Industrial Operations",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-02"
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
      }
    ],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "526ffca2-6b1b-4728-9155-7980e1adb4ee",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic / Microsoft Power BI n/a",
          "category": "software",
          "description": "Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-07-24"
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