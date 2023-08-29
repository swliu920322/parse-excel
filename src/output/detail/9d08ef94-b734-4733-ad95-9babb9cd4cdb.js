export default {
  "completion": {
    "percentage": 78,
    "ChinaReadiness": 100,
    "EnterpriseGuardrails": 50,
    "businessSupport": 73,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 42,
    "projects": 100,
    "robots": 100,
    "sourcing": 53
  },
  "subscriptions": [
    {
      "firstName": "Elaheh",
      "lastName": "Yazdi",
      "displayName": "Elaheh Yazdi",
      "email": "elaheh.yazdi@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Niclas",
      "lastName": "Evertsson",
      "displayName": "Niclas Evertsson",
      "email": "niclas.evertsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "CANdelaStudio",
    "description": "The specification tool CANdelaStudio is a central component of the Vector CANdela solution and supports users in creating and editing a formal vehicle ECU diagnostic specification.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-07-09",
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
        "id": "0829af0f-f193-4f2c-a751-c1d8d104fb63",
        "displayName": "Vector",
        "description": "Vector is a software tool for analysis and stimulation of network communication. It's also used for test and analysis of ECU's.",
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
      "id": "36ff533a-f095-4f15-b806-9dee0053b9ae",
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
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
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
      },
      {
        "id": "bc68fc75-cc6f-4712-92a0-bc26f72e21de",
        "displayName": "F. Industrialization and On-Demand Release Management / Commercial Introduction Preparation / Repair & Maintenance Preparation",
        "description": "Eg: Work Method Development (incl Standard Times), Technical Information Development (incl Drivers Manual Base Information), Workshop Tool Development, Diagnostic Tool Preparation, Maintenance Interval Information Preparation\nRepair and Maintenance Methods Design; develop new or improved methods to effectively maintain desired condition of delivered products.\nDeploy Service Configuration/Prepare Service Configuration; the ability to prepare the Service Configurations.",
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
        "id": "0f4bac7a-da21-4bdc-bc2d-e4363af4b1fb",
        "displayName": "Product development / R&D Process / Embedded System process",
        "description": "Development of embedded systems in our solutions",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2000-01-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2000-01-01"
            },
            {
              "phase": "active",
              "startDate": "2000-01-01"
            },
            {
              "phase": "endOfLife",
              "startDate": "2100-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "7e0bfc74-3c18-4faf-b51a-025f3054e0ac",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRB - R&D Methods & Products / IRBC - Embedded Process & Tools",
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
        "id": "65e6e56c-2a76-493a-ba81-89ee7ead3ede",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EED - Software Development System / EEDI - Information Architecture and Tool Chain for Embedded Systems",
        "usageType": "user",
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
          "id": "35032efc-7084-43e4-a487-e40df3de9013",
          "displayName": "Apple Mac OS 10.15",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "43d0f682-a902-4fb4-a070-89d9a544304f",
          "displayName": "Microsoft Windows Enterprise 10",
          "category": "software",
          "description": "Windows 10 is a series of operating systems developed by Microsoft and released as part of its Windows NT family of operating systems. Windows 10 was made available for download via MSDN and Technet, and as a free upgrade for retail copies of Windows 8 and Windows 8.1 users via the Windows Store.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2015-06-01"
              },
              {
                "phase": "active",
                "startDate": "2015-07-29"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-10-14"
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
    "ssoProvider": "Global Client Application",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": "NotOK",
    "LicenseUsageRights": "OK",
    "LicenceStatus": [
      "SingleSourcing",
      "ScaniaGroupContract"
    ],
    "ChinaRequirements": "ESS",
    "ChinaDesign": "IRB with China domain responsible",
    "ChinaSourcing": "Global sourcing",
    "ChinaPaying": "ESS",
    "ChinaImplementation": "China IT package",
    "Chinaverification": "Superuser China",
    "ChinaOperations": "No separate operations"
  }
}