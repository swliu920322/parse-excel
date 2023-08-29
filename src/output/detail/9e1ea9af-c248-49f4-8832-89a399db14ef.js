export default {
  "completion": {
    "percentage": 57,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 44,
    "dataManagement": 38,
    "dependencies": 50,
    "information": 100,
    "projects": 100,
    "robots": 100,
    "sourcing": 30
  },
  "subscriptions": [
    {
      "firstName": "Carl-Henrik",
      "lastName": "Hilborn",
      "displayName": "Carl-Henrik Hilborn",
      "email": "carl-henrik.hilborn@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
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
      "firstName": "David",
      "lastName": "Chauca",
      "displayName": "David Chauca",
      "email": "david.chauca@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "EBBA MCAS",
    "description": "EBBA MCAS",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2023-02-05",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "9999-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "MES",
    "predecessor": []
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
  "initiatives": [
    {
      "id": "021273c6-cfcc-4aaf-9e19-9b7956c251aa",
      "displayName": "SAS Industrial Project - China / China BiW IT",
      "fullName": "China BiW IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-05-02"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Johan Persson",
          "email": "johan.y.persson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Douglas Mitsuru Higa",
          "email": "Douglas.Higa@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jimmy Olofsson",
          "email": "jimmy.olofsson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mikael Rothsten",
          "email": "mikael.rothsten@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Johan Öberg",
          "email": "johan.x.oberg@scania.com",
          "type": "OBSERVER"
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "no",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
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
      }
    ],
    "processes": [],
    "organisations": [
      {
        "id": "921cbf7d-a916-416c-8866-2570bf7ab3f6",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFF - EBBA Chassis & Cabs",
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
        "id": "f2c71dbf-7a0d-4188-9c23-d174eb1384a3",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production / MC - Cab Assembly",
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
      }
    ]
  },
  "management": {
    "objects": [
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "83e2da2d-02c6-4f6b-abf8-08f614d20343",
          "displayName": "Microsoft SQL Server Standard 2017",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2017-07-17"
              },
              {
                "phase": "active",
                "startDate": "2017-09-29"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-10-11"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-10-12"
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