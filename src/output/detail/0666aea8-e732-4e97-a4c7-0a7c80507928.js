export default {
  "completion": {
    "percentage": 85,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 78,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 88
  },
  "subscriptions": [
    {
      "firstName": "Henrik",
      "lastName": "Thorsen",
      "displayName": "Henrik Thorsen",
      "email": "henrik.thorsen@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "johan.boden@scania.com",
      "email": "johan.boden@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "erik.thoren@scania.com",
      "email": "erik.thoren@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Keimpe",
      "lastName": "Wiersma",
      "displayName": "Keimpe Wiersma",
      "email": "Keimpe.Wiersma@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Conny",
      "lastName": "Friborg",
      "displayName": "Conny Friborg",
      "email": "conny.friborg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Douglas Mitsuru",
      "lastName": "Higa",
      "displayName": "Douglas Mitsuru Higa",
      "email": "Douglas.Higa@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Albert",
      "lastName": "Isik",
      "displayName": "Albert Isik",
      "email": "albert.isik@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
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
      "firstName": "Håkan",
      "lastName": "Johansson",
      "displayName": "Håkan Johansson",
      "email": "hakan.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Jacob",
      "lastName": "Rydgård",
      "displayName": "Jacob Rydgård",
      "email": "jacob.rydgard@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Tom",
      "lastName": "Kamp",
      "displayName": "Tom Kamp",
      "email": "tom.kamp@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "DIDRIK",
    "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
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
    "productCategory": ".",
    "predecessor": [
      {
        "id": "b1802ab5-2b4c-44b7-a070-75c0cbe2cff2",
        "displayName": "Live Truck Standard",
        "description": "Group of Services to provide information from Higher Assembly Level to Production site, sharing information between windows services and PLCs in the workshops.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "8146ad28-09f8-438b-87c7-02f33d21718d",
        "displayName": "TAKT CABIN",
        "description": "TAKT for new Assembly line CABIN",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "a08a8392-a71e-4b66-b08f-359d685a3042",
        "displayName": "TTS / TAKT / TAKT ENGINE",
        "description": "New TAKT support for ENGINE Workshop",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "successor": [
      {
        "id": "ddac483c-caaa-489e-8733-b4b8e270e56f",
        "displayName": "SCALA - SCADA SLA",
        "description": "The SCALA system is a new application for Cabin workshop in SLA. Cabin Assembly\nWill replace DIDRIK",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "ca42b0b5-c110-4ed1-911a-d896f2425c03",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \nWinCC från Siemens. ",
        "displayName": "DIDRIK / Didrik CMC",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "fb3d3b79-d14d-4817-8d29-46a63b18734d",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \nWinCC från Siemens. ",
        "displayName": "DIDRIK / Didrik CMS",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "6fcf0063-0b1d-4630-8387-ac3638ff4ec8",
        "activeFrom": null,
        "activeUntil": null,
        "description": "DIDRIK MC",
        "displayName": "DIDRIK / DIDRIK MC",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "7c0c10a6-1628-43db-9d6e-ab9d4a0af075",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK MS",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Critical",
          "Manufacturing",
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "885782b1-6942-4fb0-956d-2bea30040693",
        "activeFrom": "2022-12-05",
        "activeUntil": "2035-12-31",
        "description": "Installation project of Didrik in the China Powertrain project. ",
        "displayName": "DIDRIK / DIDRIK TCT",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "6454eb8b-516a-4169-9f4b-cf84cf076e3d",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_DE_D12",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "33058018-cfa5-4139-8b3d-8ff8d526c4a4",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_DE_Motorprovningen",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "7f4ba1ce-2c13-4d66-a057-fb2a621258e0",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces, andon and quality assurance. Also used to gather data for process and production followup.\r\nWinCC from Siemens",
        "displayName": "DIDRIK / DIDRIK_DI",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "ebf1c331-c62a-4fac-8b7f-bc3a345fdee3",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_DM_DLBloc",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "c2949cea-d141-4e42-9110-87a2486dbbf0",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_DT_Axles",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "53e5d257-301b-4268-badb-d06ef0c5ee5c",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_DT_CVX",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "bdc8176e-3e9e-4cb8-baed-0fe17ccff4eb",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_DT_DTC",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "117c3c3f-cd2b-4aed-9696-5c9fd87218a0",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_MS_Cab",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "19dda050-20f4-4b80-b66f-e137b4859a4e",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_MS_FO6",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "cdc4945e-9a5c-4b07-86a9-a188f5470bd7",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_MS_ML1",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "f40dc171-1610-4685-ae25-ac024895e535",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Production application for mainly controlling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "displayName": "DIDRIK / DIDRIK_MS_ML3",
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
      "id": "c5b4288e-d36a-4a0a-a606-197c4981a7dd",
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
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
        "id": "c3952adb-95a6-4855-8617-8f5717ced0b3",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Assembly",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "d8d6b681-0e15-4707-ab24-5e69c848abc7",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Part Manufacturing",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "e2751da9-584a-4b7e-ad5e-30f4fdbb3106",
        "displayName": "Product development / R&D Process / Embedded System process / 08 Production",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "6073a9cc-7796-4295-b221-fdd0f9a006d4",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFB - SCADA",
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
      }
    ]
  },
  "management": {
    "objects": [],
    "interfaceConsume": [
      {
        "id": "89dc9a4a-04c3-469a-b13f-3cd78623a1d5",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CalendarInformationMona",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "8cb674a4-1f6b-49af-b997-7d95c48e4405",
          "displayName": "Ignition",
          "category": "software",
          "description": "Common application for Product Requirement, Indicator, Devices, Equipment.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-15"
              }
            ]
          },
          "tags": [
            "China affected"
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
        },
        {
          "id": "3a089407-58a0-458e-9b14-dcfa1594e678",
          "displayName": "SIMATIC WinCC",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "N/A",
    "statusSSO": "notSupported"
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