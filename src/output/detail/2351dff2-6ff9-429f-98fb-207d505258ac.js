export default {
  "completion": {
    "percentage": 33,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 50
  },
  "subscriptions": [
    {
      "firstName": "Nils-Ove",
      "lastName": "Fredriksson",
      "displayName": "Nils-Ove Fredriksson",
      "email": "nils-ove.fredriksson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Peter",
      "lastName": "Sundén",
      "displayName": "Peter Sundén",
      "email": "peter.sunden@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "BI Platform Logistics Storage (GIH)",
    "description": "Prepared business data layer in Common data warehouse (CDW) for Global inhouse processes. Data from Mona Assembly, MC and Simas. Supports Europe and in part also SLA. This data warehouse and its reports support O, M and D units for the line feeding and factory feeding processes.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2021-08-26",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "a3986df6-63b0-4111-84b3-b29f947f5c37",
        "displayName": "Common Data Warehouse",
        "description": "Enterprice data warehouse platform where application teams build data marts (or we can call it data warehouse applications) combining data from various data sources.\n\nThe platform is based Oracle database",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-08-26",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-08-26",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
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
      }
    ],
    "processes": [
      {
        "id": "8f37fe51-7b0c-48a2-aba6-efecfcd57725",
        "displayName": "Order to delivery / Major support processes within Production & Logistics",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "37eef9cf-7696-4ed4-8958-d8f3cd5f767b",
        "displayName": "Order to delivery / Production Processes / Preparation processes / Logistics preparation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "708170c4-ad34-49a6-b930-0557e0430276",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAA - PD and O2D Business Intelligence",
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
        "id": "c1d19518-49f7-4a1c-bcf2-0221d01118e6",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / O - Logistics / OL - Scania Logistics Nordic / OLX - Global Inhouse Logistics Development",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-01-01"
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [],
      "accessControl": [
        {
          "id": "e0f2e38d-9fb5-42a5-984c-dae8453bf3ff",
          "displayName": "Scania / Scania IT scania-datalake-prod PROD",
          "category": "Access_Control_Item",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2021-10-13"
              }
            ]
          },
          "tags": []
        }
      ]
    },
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "OLX",
    "ChinaDesign": "IXAA",
    "ChinaSourcing": "IXA",
    "ChinaPaying": "IXAA",
    "ChinaImplementation": "IXAA/TT",
    "Chinaverification": "OLX/IXAA",
    "ChinaOperations": "IXAA"
  }
}