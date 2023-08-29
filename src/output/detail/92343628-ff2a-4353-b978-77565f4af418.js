export default {
  "completion": {
    "percentage": 32,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 15,
    "dataManagement": 75,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 23
  },
  "subscriptions": [
    {
      "firstName": "Sudipta",
      "lastName": "Mallick",
      "displayName": "Sudipta Mallick",
      "email": "sudipta.mallick@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Emanuel",
      "lastName": "Eklund",
      "displayName": "Emanuel Eklund",
      "email": "Emanuel.Eklund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Erik",
      "lastName": "Malmkvist",
      "displayName": "Erik Malmkvist",
      "email": "erik.malmkvist@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "MME",
    "description": "Multi Maintenance Editor (MME)\nMME is the production system where YS creates, stores and translates maintenance information. MME also stores the modules and from MEM.  The produced and translated information is  transferred to Multi for consumption.  \n\nMME is to be closed during 2022.  Last publishing will be to Multi 22.10.",
    "lifecycle": {
      "asString": "phaseOut",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2022-12-15",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": [
      {
        "id": "981869d0-b661-4ae5-99be-b7570cbfd9aa",
        "displayName": "OAS Platform / OAS",
        "description": "Objects & Structures is Genetic Tool for Product data Master -  Part management , Structure Management ,(KS Design Structure etc ) Change Management -ECO .",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "30f97797-7724-401c-b112-fec6c1c06b5c",
        "displayName": "VSI Orchestration Suite",
        "description": "Vehicle Service Information (VSI) Orchestration Suite provides interfaces to expose service information that includes, maintenance, repair, diagnos.  End of Q42022 goal is to provide maintenance info to MEM.\n\nMIO - Maintenance in OAS",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "7a4177cc-319d-4aa2-a650-9ec68857f768",
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
        },
        {
          "displayName": "Enno Grüning",
          "email": "enno.gruning@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": null,
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [],
    "organisations": [
      {
        "id": "c0b7c5fd-406a-4d01-bd7a-27425edecd7a",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYS - Vehicle Service Information / EYSE - Projects, Language and Internal Systems / EYSEC - IT Coordination and Architecture Internal Systems",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-07-14"
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
        "id": "f05f0427-581e-4935-9196-4ab5ca514043",
        "description": "Maintenance Modules is primarily focus on internal technical coordinated planning for defining maintenance solutions, supporting optimized parallelism of activities which can be harmonized regarding maintenance periodicity. Some of the maintenance rules will be placed on this level.  Maintenance modules give a comprehensive base for maintenance solutions and facilitates a practical decomposition of Maintenance Event into Event Activities and all its underlying Maintenance Items. Examples of maintenance modules (today total 24 modules) can be \t Engine oil  \t Fuel system  \t Engine air filter  \t Retarder",
        "displayName": "Repair & Maintenance Design Domain / Maintenance Tech Module Entity / Maintenance Tech Module",
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
        "id": "8f5fbb6c-9c6f-4409-bca7-31208f1746b9",
        "description": "Maintenance Item specify the individual important steps and operations that be part of the Maintenance Activity.",
        "displayName": "Repair & Maintenance Domain / Maintenance Plan Individual Entity / Maintenance Item",
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCcompleted",
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