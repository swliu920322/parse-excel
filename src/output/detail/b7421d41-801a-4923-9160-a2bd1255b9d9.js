export default {
  "completion": {
    "percentage": 47,
    "ChinaReadiness": 21,
    "EnterpriseGuardrails": 0,
    "businessSupport": 63,
    "dataManagement": 50,
    "dependencies": 100,
    "information": 54,
    "projects": 100,
    "robots": 0,
    "sourcing": 35
  },
  "subscriptions": [
    {
      "firstName": "Helena",
      "lastName": "Westman",
      "displayName": "Helena Westman",
      "email": "helena.westman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Fredrik",
      "lastName": "Knopp",
      "displayName": "Fredrik Knopp",
      "email": "fredrik.knopp@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "Backlog_and_recovery_tool",
    "description": null,
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2020-07-15",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2020-09-30",
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
        "id": "67cecb2b-de66-405c-a53d-1bad8269ebb4",
        "displayName": "DataLake OnPrem",
        "description": "The Data Lake is a big data repository which holds data in its native format until it is needed. Data Lake is implemented in the Hadoop framework which also enables the processing needed for Advanced Analytics (e.g. machine learning).",
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
  "initiatives": [
    {
      "id": "2e0ecbb0-d1c7-4683-9a28-71754636d093",
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
      "businessCriticality": null,
      "functionalSuitability": null,
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
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
      }
    ],
    "processes": [
      {
        "id": "93247e8f-0e2b-402a-8fb4-2ffd91797a0e",
        "displayName": "Order to delivery / Chassis fulfillment planning",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "5426e6e9-649f-4a85-a9e3-d9e64690f610",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / O - Logistics / OP - Supply Chain Planning",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-16"
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
        "id": "e6aaf723-9569-4ffb-97e1-74f4d18866f9",
        "description": "Process segments are the  smallest elements of manufacturing activities  that are visible to business processes. Process segments are also  logical grouping of personnel resources, equipment resources, and material required  to perform a manufacturing operations step. A process segment defines the  needed categories  of personnel, equipment, and material, and it may define specific resources, such as specific equipment needed. A process segment may  define the quantity  of the resource needed.  The manufacturing operations step may be a  production  operations step,  inventory  operations step,  maintenance  operations step, and  quality  operations step. Based on ANSI/ISA-95.",
        "displayName": "Production Domain / Production Process Segment Entity",
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
    "ChinaRequirements": "IXAB",
    "ChinaDesign": "IXAB",
    "ChinaSourcing": "IXAB",
    "ChinaPaying": "",
    "ChinaImplementation": "",
    "Chinaverification": "",
    "ChinaOperations": ""
  }
}