export default {
  "completion": {
    "percentage": 90,
    "ChinaReadiness": 100,
    "EnterpriseGuardrails": 100,
    "businessSupport": 85,
    "dataManagement": 88,
    "dependencies": 50,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 90
  },
  "subscriptions": [
    {
      "firstName": "Magendran",
      "lastName": "Padmanaban",
      "displayName": "Magendran Padmanaban",
      "email": "magendran.padmanaban@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "ETAS MDA",
    "description": "During the ECU development process, measurement data that refers to different states of calibration data must be compared. The ETAS MDA (Measure Data Analyzer) measurement data analysis tool lets users visualize, further process, analyze, and document measurement data. The tool supports MDF (Measurement Data Format) and enables users to evaluate correlations between diagnosis data and measurement signals from the ECU and from sensors and vehicle buses.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-06-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2022-06-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-05-15",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2030-06-07",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Embedded SW testing",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "39b9f72a-546b-4228-83d3-bdc48615d20f",
        "displayName": "INCA N/A",
        "description": "Online logging/calibration. \nUsed for logging internal variables (CAN signals, internal variables) & to read & write calibration data in testcell, vehicles.",
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
      "id": "ab082f5c-5a83-40da-9b93-aee09a548aba",
      "displayName": "UNECE / Cyber Security Management System (CSMS)",
      "fullName": "Cyber Security Management System (CSMS)",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Ioannis Tzioumakas",
          "email": "ioannis.tzioumakas@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "no",
      "lifecycle": [
        null,
        {
          "asString": "-",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2023-08-30",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2024-08-30",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "098381b7-d25e-40e8-bf19-7cf55659c744",
        "displayName": "E. Solution Development & Optimization / Transport Solution Design / Design Embedded and Electronics Systems",
        "description": "Design and develop embedded systems, including software and hardware. Designing embedded & electrical schematics, cable harnesses including chassis installation, connectors and passive elements.",
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
        "id": "3c9a0b44-190f-4180-8309-1fbd1a9833ba",
        "displayName": "Product development",
        "description": "Owner: Jan Palmér, chairman PD process board",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      }
    ],
    "organisations": [
      {
        "id": "6edcaa36-1b15-4095-874b-ed53e05082d5",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EN - Powertrain Development / ENE - Powertrain Control",
        "usageType": "ITmaintenance",
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "a904b2f1-9062-4236-af52-d580fcc33213",
          "displayName": "ETAS MDA (Measure Data Analyzer) 8.6",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "ETAS",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": "NotOK",
    "LicenseUsageRights": "OK",
    "LicenceStatus": [
      "VWcontractCalloff"
    ],
    "ChinaRequirements": "NETQ",
    "ChinaDesign": "IRBC(Client app)",
    "ChinaSourcing": "N/A",
    "ChinaPaying": "NETQ",
    "ChinaImplementation": "IRBC",
    "Chinaverification": "IRBC/NETQ",
    "ChinaOperations": "China IT, 3rd line IRBC"
  }
}