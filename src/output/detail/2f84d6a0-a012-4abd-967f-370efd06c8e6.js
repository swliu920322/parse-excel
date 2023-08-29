export default {
  "completion": {
    "percentage": 51,
    "ChinaReadiness": 67,
    "EnterpriseGuardrails": 0,
    "businessSupport": 64,
    "dataManagement": 50,
    "dependencies": 50,
    "information": 92,
    "projects": 0,
    "robots": 100,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Claes",
      "lastName": "Boije",
      "displayName": "Claes Boije",
      "email": "claes.boije@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Jacob",
      "lastName": "Rydgård",
      "displayName": "Jacob Rydgård",
      "email": "jacob.rydgard@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Jonathan",
      "lastName": "Cartaxo",
      "displayName": "Jonathan Cartaxo",
      "email": "jonathan.cartaxo@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Eddie",
      "lastName": "Löwenborg Forsberg",
      "displayName": "Eddie Löwenborg Forsberg",
      "email": "eddie.lowenborg.forsberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Pekka",
      "lastName": "Palonen",
      "displayName": "Pekka Palonen",
      "email": "pekka.palonen@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Carl-Henrik",
      "lastName": "Hilborn",
      "displayName": "Carl-Henrik Hilborn",
      "email": "carl-henrik.hilborn@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Henrik",
      "lastName": "Bylund",
      "displayName": "Henrik Bylund",
      "email": "henrik.bylund@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Siddhant",
      "lastName": "Bajaj",
      "displayName": "Siddhant Bajaj",
      "email": "siddhant.bajaj@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "EBBA Powertrain Assembly China",
    "description": "Manufacturing Execution System for Powertrain in China",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-09-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-07-17",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "MES",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "418930d5-7d53-4848-8b2f-478121d73502",
        "displayName": "EBBA Parent",
        "description": "Umbrella for all EBBA PRU's. This is a virtual application.",
        "type": "Application",
        "tags": [
          "Critical",
          "Manufacturing",
          "China affected",
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
      "businessCriticality": "missionCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "acb28186-aa5c-406c-9302-fb143d76a4ba",
        "displayName": "H. Logistics and Warehouse Management / Transport Management / Transport Planning",
        "description": "The ability to plan transport of goods, including routes, optimisation, ordering and more. Example: Transport Optimisation or Transport Ordering or Route planning",
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
        "id": "dab9c3c3-c33a-474c-bc84-de2cac033df8",
        "displayName": "J. Manufacturing and Assembly",
        "description": "Ability to manage activities related to assembly and producing a solution ready to deliver from factory.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "phaseIn",
              "startDate": "2022-07-01"
            },
            {
              "phase": "active",
              "startDate": "2022-10-05"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "3168a54c-14c0-40ce-8ec1-7729879360ca",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Manufacturing Quality Assurance",
        "description": "Ability to execute activities to \n− find deviations in assembly, part manufacturing or raw material execution processes by quality follow up on product, function and process\n− correct deviations by scrapping or adjusting parts or complete assemblies\n− secure that deviations don’t re-occur",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "e3f4d1a3-d87c-439f-92bd-a19a22d018df",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Part Manufacturing Execution",
        "description": "Ability to execute activities for part manufacturing including cutting processing (turning or milling), hardening, pressing, surface treatment  and additive manufacturing according to a part design specification.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-11"
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
        "id": "12096d5b-cccc-43c2-a89b-2d721e4d0c6d",
        "displayName": "Order to delivery / Production Processes",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "10ed2c93-af58-46b8-a144-62d73986426c",
        "displayName": "Order to delivery / Production Processes / Creation Serial Number",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "a6fe6081-ceb9-4c86-9ab6-49a9d363a34e",
        "displayName": "Order to delivery / Production Processes / General support processes / Production Engineering",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "642209e5-ca41-4155-b73e-1670dc6aabc1",
        "displayName": "Order to delivery / Production Processes / Preparation processes / Assembly Preparation",
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
      },
      {
        "id": "c3952adb-95a6-4855-8617-8f5717ced0b3",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Assembly",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "836b1a7a-1011-48a7-ae3b-35aff6ad3694",
        "displayName": "Order to delivery / Production Processes / Production Support Processes / Quality Control",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "f6a1b815-8f35-4a5b-867e-c954723fd527",
        "displayName": "Product development / Product Follow Up - Red Arrow / Deviation Handling",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "ca4f3b64-ca64-49e4-9618-525aff8d5df5",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFC - EBBA CoE",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "6c0477d6-3964-421c-a4a8-20b12f2aadac",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFI - EBBA Powertrain",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-01"
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
        "id": "05906463-3097-4743-9e7b-1195092dc97e",
        "description": "internal process for approval of investments with the purpose of summarizing and presenting investments to Scania different decision levels. Part lists are break-downs of the Investment Plan. In each part list the investment budget amounts are up for approval. There budget is not fixed to be consumed during this part list period.  Investments above 5 MSEK is presented case by case. Part list shall be aligned with the gross investment levels in Planungsrunde reported to Traton/VW. Part List process is coordinated by Industrial Control for Industrial Operations and department Business control, BF for Commercial Operations.",
        "displayName": "Financial Control Domain / Investment and Asset Entity / Part List",
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
        "id": "d9d25989-7ff2-49f8-8c0d-da08203fd70e",
        "description": null,
        "displayName": "General Information Objects Domain",
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
        "id": "a6d94c09-f8a5-4108-a371-fc9a419b354e",
        "description": null,
        "displayName": "General Information Objects Domain / Generic Deviation Entity",
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
        "id": "f4c36abb-8a50-4a86-97cb-c3aad2a9031c",
        "description": "delivery schedule is a cohesive level for planning and control of consumption of parts and material at Scania production units and warehouses. contains an overview of all call offs for a PRU within 365 days.",
        "displayName": "Logistics Domain / Material Planning Entity / Delivery Schedule",
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
        "id": "73484889-66e9-45ae-9d22-baae7b47e69f",
        "description": "production part in stock is parts that are in stock and available for production",
        "displayName": "Logistics Domain / Material Planning Entity / Production Part In Stock",
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
        "id": "c4fea5e1-bb7c-4ad3-b593-99c15fc84e44",
        "description": "One or more parts that is connected to a product individual. Component is valid for external sequence component flow (from PRU to PRU/Partner brand in and out)  popID - POPID that EPO is connected to. Used to steer production internally. EPOID - Unique identificatory of produced individual component from a PRU perspective. Driven axles can be one or many axles.  engines, gearbox and cabs are components cable harness, fuel tanks are external sequence are MC call offs - Sequence flow/external sequence painted part are component assembly (Meppel)  a radiator, bumper, are pre assembled only within one PRU",
        "displayName": "Logistics Domain / Material Planning Entity / Required Production Component",
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
        "id": "43e8f79f-c62d-4deb-9b6e-5f252a7711b1",
        "description": "Parts that are needed in production at a specific point in time and with certain requirements.",
        "displayName": "Logistics Domain / Material Planning Entity / Required Production Part",
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
        "id": "fe2c84ac-9a3d-4362-b267-551e1d6d8c2e",
        "description": null,
        "displayName": "Logistics Domain / Transport Planning Entity",
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
        "id": "89231c71-c3d7-427e-88ca-4831ad41a4b7",
        "description": "transport order is the activity that transfers objects between two places.",
        "displayName": "Logistics Domain / Transport Planning Entity / Transport Order",
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
        "id": "ebe11d9d-eb0c-474d-b0e9-7f7043ffd950",
        "description": null,
        "displayName": "Product Development Domain / Design Mechanical Systems Entity / Replacement Part",
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
        "id": "226743d5-e7cf-411f-a4b0-290231ae029c",
        "description": "Start of series production of developed components and whole product including any phasing-out of existing component and product. Evaluation of the development and transfer of deviations and points for further handling of the project and in line. The work results in Component and full product in operation and Finished product development .",
        "displayName": "Product Development Domain / Start of Production Entity",
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
        "id": "e6c39dcc-74bb-4bcf-ab57-8e73e5ed2961",
        "description": "Makes it possible to refer to different Scania internal production units and external suppliers product alternatives to support Scania Component requirements. Supplier Product includes primary products, consumables and services.",
        "displayName": "Product Portfolio Domain / Product As Designed Entity / Supplier Part",
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
      },
      {
        "id": "b5e26ac8-4742-4cb8-a7c6-eff576ed5dd7",
        "description": "An equipment category is a representation of a grouping of equipment with similar characteristics for a definite purpose such as manufacturing operations definition, scheduling, capability and performance.",
        "displayName": "Production Domain / Equipment Asset Capability Entity / Equipment Category",
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
        "id": "dc1fcaf7-2665-4b92-9a76-f28cb40bb83a",
        "description": "Production Unit Location can be divided in different kind of Work Center, representing elements of the equipment hierarchy under the location level. In other words will a Work Center represent any equipment element subordinated to a Production Unit Location. Each individual Work Center belongs to a Work Center Type, categorized as for example Process cell (batch production), Production unit (continuous production), Production line (discrete repetitive production) and Storage zone (storage and movement of materials and equipment).  Work Center are typically the grouping of equipment supporting functions in business planning & logistics and manufacturing operations management. Work Center have well-defined capabilities and capacities. Work Center can in its turn be divided in different kind of Work Unit, representing the lowest level of elements in this equipment hierarchy.",
        "displayName": "Production Domain / Equipment Asset Capability Entity / Work Center",
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
        "id": "971e9219-8e42-47b8-a5ee-8408e2b29f28",
        "description": "Production Calendar is a information support domain managing a framework for production units  stating local production and non-production dates and other kind of events  (as starting point for a order batch and continuous production status) with different kind of period granularity - from  period  (12 per year, divided on day level) to  part  period (4 per period) to  batch  period (assembled Product As Individuals in a certain period, not necessary a week) and  Calendar Day .  The division in different kind of production periods is made in order to achieve an even balance in working days.",
        "displayName": "Production Domain / Production Calendar Entity",
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
        "id": "664b2cc0-a02d-4c93-8d0a-5fe711353545",
        "description": "Production Order represents the administrative control over all production steps for a specific ordered product performed by production units within planning & logistics and manufacturing operations management. Each production Order has a life-cycle, from open and firm to delivered.  The utmost aim is to fulfil confirmed delivery date in an effective manner.",
        "displayName": "Production Domain / Production Orders Entity / Production Order",
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
        "id": "17212296-54ed-46a5-8873-98e760934df9",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_EPO",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "54c44ac4-e825-4285-a476-f3ca9115157b",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_EPODATES",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5b18df50-0d40-4f19-ae85-979f7542d55a",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_IPO",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7c70ebc3-42a3-44a5-b7b3-00c3e1a1729c",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_IPO_PART",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "aa0d21c1-68d1-403b-9a68-43058c6bab1b",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_MONA Assembly A-order",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f7a75584-d94b-4da0-b98e-99282f27c3d7",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_CU",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "e5fc8b3b-32f9-4a18-929a-86b9271272ad",
        "description": null,
        "displayName": "EBBA Parent / EBBA Powertrain Assembly China_RESTful API",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "2e391edf-33fb-4bd4-b175-d18d27b6b46a",
          "displayName": "Dassault Systemes DELMIA Apriso 2022",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected",
            "From SCT"
          ]
        },
        {
          "id": "621fb5e1-d8e5-449f-a8d2-9f10e45d9e1e",
          "displayName": "Microsoft SQL Server Enterprise 2019",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2019-08-21"
              },
              {
                "phase": "active",
                "startDate": "2019-11-04"
              },
              {
                "phase": "phaseOut",
                "startDate": "2025-02-28"
              },
              {
                "phase": "endOfLife",
                "startDate": "2030-01-08"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
          ]
        },
        {
          "id": "32962229-0e42-49ac-94cd-5e8fe48f3fb5",
          "displayName": "Microsoft Windows Server Standard 2019",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2018-11-13"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-01-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2029-01-09"
              }
            ]
          },
          "tags": [
            "China affected",
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
    "ChinaITlegalCompliance": "GapsFound",
    "ExportControlOfAppl": "OK",
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "VEIS/INF",
    "ChinaDesign": "INF",
    "ChinaSourcing": "VEI",
    "ChinaPaying": "TCF",
    "ChinaImplementation": "INF/TTPT",
    "Chinaverification": "INF/TTPT",
    "ChinaOperations": "TTPT"
  }
}