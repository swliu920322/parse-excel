export default {
  "completion": {
    "percentage": 80,
    "ChinaReadiness": 100,
    "EnterpriseGuardrails": 50,
    "businessSupport": 73,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 58,
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
    "name": "CANdb++",
    "description": "A key component in the development of CAN/CAN FD networks is the communication description in the form of DBC files. It serves as the foundation for all other development steps such as\n\n►    simulation and analysis of bus communications,\n\n►    configuration of the ECU/LRU software and detailed ECU/LRU tests.\n\nThe DBC databases describe the properties of the CAN/CAN FD network, the ECUs/LRUs connected to the bus and the messages and signals.\n\nCANdb++ Admin – with extended support of the protocols J1939/ISO 11783 as well as J1708/J1587 and ARINC 429 – gives users the capabilities needed to visualize the DBC databases, create new databases or modify data in existing databases.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2023-07-09",
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
      "id": "659c731f-9eeb-4cf3-bb23-bc7920db4b98",
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
    },
    {
      "id": "1ad3523b-389a-4bf7-9244-0c5b9ff3ec18",
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
        "id": "dac12085-5cf2-4fb6-953b-2179462e8fa7",
        "displayName": "E. Solution Development & Optimization / Evaluate, Compare, Verify and Validate Solutions / Test Management",
        "description": "Ability to develop and maintain test criterias and test environments  including change management. \n\n",
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
          "China affected",
          "MilkyWay area 5. Virtual and Physical Verification"
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
    "ChinaOperations": "No seperate operations"
  }
}