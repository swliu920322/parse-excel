export default {
  "completion": {
    "percentage": 78,
    "ChinaReadiness": 51,
    "EnterpriseGuardrails": 100,
    "businessSupport": 54,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Andreas",
      "lastName": "Holmgren",
      "displayName": "Andreas Holmgren",
      "email": "andreas.holmgren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Priyanka",
      "lastName": "Nanda",
      "displayName": "Priyanka Nanda",
      "email": "priyanka.nanda@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Lucas",
      "lastName": "Guerrero Lasso",
      "displayName": "Lucas Guerrero Lasso",
      "email": "lucas.lasso@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Oscar",
      "lastName": "Wahlström",
      "displayName": "Oscar Wahlström",
      "email": "oscar.wahlstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Nina",
      "lastName": "Helenius Sidén",
      "displayName": "Nina Helenius Sidén",
      "email": "nina.helenius.siden@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "ToolsTalk2 SE",
    "description": "ToolsTalk2 is a programming tool (software) for all PowerFocus 6000 nutrunners at Scania. The vendor is AtlasCopco and here we have more information: ToolsTalk 2, the new generation software in controller programming, is ready to take your line management to the next level. The client-server based software solution is geared to provide quick and easy configuration, as well as complete visibility and traceability to your entire line structure. With 100% customizable user rights, you maintain quality control in complex production systems and increase uptime in production critical operations.\n",
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
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "ffbe88cd-e3e5-4d82-9408-6ad8a591fe60",
        "displayName": "Toolsnet",
        "description": "Application for logging torque tool information.\r\n",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "f1abb8ab-91a3-4dfe-9f42-82d31b8285fe",
      "displayName": "SAS Industrial Project - China / China CAB Assembly IT",
      "fullName": "China CAB Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-04-01"
          },
          {
            "phase": "active",
            "startDate": "2023-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
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
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-02-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-02-01",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2020-01-01",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2021-01-01",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "cb82002d-2bdc-4860-a5a5-e6ee1ccc18d9",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing",
        "description": "Control & execute transformation of raw materials into product in accordance with the production schedule. Including production quality assurance.",
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
          "MilkyWay area 18. Production & Logistics"
        ]
      }
    ],
    "processes": [
      {
        "id": "c3952adb-95a6-4855-8617-8f5717ced0b3",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Assembly",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "48c90751-2dcb-428a-a535-e41e18b7a51f",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / ING - Powertrain & Industrial Control IT / INGB - Powertrain Machining IT Södertälje",
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
        "id": "51447858-fa49-4a3f-9dfd-8427feb23957",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / D - Powertrain Production / DE - Engine Production, Assembly",
        "usageType": null,
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
        "id": "fe23810d-40cd-456a-a9d4-cd726fad19a2",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / VE - Global Industrial Development / VEI - Industrial IT",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-01"
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
        "id": "de2b20cd-e919-4f81-82d1-9381ce51dc9e",
        "description": "Equipment Asset Capability domain represents the  infrastructure of all production assets  with different kind of capabilities and capacities that Scania use on different sites and  production units  around the world. Information about Production Asset Equipment is important for activities in overall business planning & logistics as well as more operational close activities in Process Segment and manufacturing operations management. Based on ANSI/ISA-95.",
        "displayName": "Production Domain / Equipment Asset Capability Entity",
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
          "id": "f0674444-36de-427b-a6d7-879703d12ae1",
          "displayName": "Microsoft SQL Server Standard 2016",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2016-03-07"
              },
              {
                "phase": "active",
                "startDate": "2016-06-01"
              },
              {
                "phase": "endOfLife",
                "startDate": "2018-01-09"
              }
            ]
          },
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "4e765adc-887e-482c-8023-3911e6ead700",
          "displayName": "Microsoft Windows Server Standard 2016",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-10-15"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-01-11"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-01-12"
              }
            ]
          },
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
    "ChinaRequirements": "VEIS",
    "ChinaDesign": "INGB",
    "ChinaSourcing": "INGB",
    "ChinaPaying": "VEI",
    "ChinaImplementation": "INGB",
    "Chinaverification": "VEIS",
    "ChinaOperations": ""
  }
}