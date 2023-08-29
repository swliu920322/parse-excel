export default {
  "completion": {
    "percentage": 93,
    "ChinaReadiness": 100,
    "EnterpriseGuardrails": 100,
    "businessSupport": 63,
    "dataManagement": 88,
    "dependencies": 100,
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
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Elaheh",
      "lastName": "Yazdi",
      "displayName": "Elaheh Yazdi",
      "email": "elaheh.yazdi@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Richard",
      "lastName": "de Geus",
      "displayName": "Richard de Geus",
      "email": "richard.de.geus@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "INCA",
    "description": "Online logging/calibration. \nUsed for logging internal variables (CAN signals, internal variables) & to read & write calibration data in testcell, vehicles.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2022-06-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2022-06-01",
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
    "parent": [],
    "children": [
      {
        "id": "0cded523-fdfe-4533-85e6-8a65382dd6fe",
        "activeFrom": null,
        "activeUntil": null,
        "description": "During the ECU development process, measurement data that refers to different states of calibration data must be compared. The ETAS MDA (Measure Data Analyzer) measurement data analysis tool lets users visualize, further process, analyze, and document measurement data. The tool supports MDF (Measurement Data Format) and enables users to evaluate correlations between diagnosis data and measurement signals from the ECU and from sensors and vehicle buses.",
        "displayName": "INCA N/A / ETAS MDA N/A",
        "type": "Application",
        "lifecycle": {
          "asString": "-",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2023-08-30"
            },
            {
              "phase": "drpReview",
              "startDate": "2024-08-30"
            }
          ]
        },
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "6f60424f-9a6b-4b04-8587-120fb124cab7",
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
      "businessCriticality": "businessOperational",
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
        "id": "c62d65cf-7aac-4d3c-9534-731e4f18dd68",
        "displayName": "Product development / R&D Process / Embedded System process / 09 Diagnostics",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "6edcaa36-1b15-4095-874b-ed53e05082d5",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EN - Powertrain Development / ENE - Powertrain Control",
        "usageType": "owner",
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
      },
      {
        "id": "42e0dd5b-3971-4419-8b52-10f22fb08f40",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EN - Powertrain Development / ENE - Powertrain Control / ENET - Real-Time Controls Platform and Tools / ENETQ - Platform Tools & Processes",
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "17d23ea0-14bd-45c3-b9a5-98e284e252c8",
          "displayName": "ETAS INCA 7.4",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseIn",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2018-06-01"
              },
              {
                "phase": "phaseOut",
                "startDate": "2030-06-28"
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
    "ChinaDesign": "IRBC (Client app)",
    "ChinaSourcing": "N/A",
    "ChinaPaying": "NETQ",
    "ChinaImplementation": "IRBC",
    "Chinaverification": "IRBC/NETQ",
    "ChinaOperations": "China IT, 3rd line IRBC"
  }
}