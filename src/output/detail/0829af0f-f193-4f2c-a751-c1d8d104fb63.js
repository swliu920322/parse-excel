export default {
  "completion": {
    "percentage": 86,
    "ChinaReadiness": 100,
    "EnterpriseGuardrails": 50,
    "businessSupport": 70,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 73
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
    },
    {
      "firstName": "Richard",
      "lastName": "de Geus",
      "displayName": "Richard de Geus",
      "email": "richard.de.geus@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Maria",
      "lastName": "Baravdish",
      "displayName": "Maria Baravdish",
      "email": "Maria.Baravdish@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    }
  ],
  "information": {
    "name": "Vector",
    "description": "Vector is a software tool for analysis and stimulation of network communication. It's also used for test and analysis of ECU's.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2019-07-09",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "b4e1574a-160a-4741-9663-234e23920ff0",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Recording, analyses and replay of CAN signals.\nTo verify and manipulate CAN-signals.\nIs used to simulate signals, for example DIS signals. \nUsed for reading CAN traffic during testing.",
        "displayName": "Vector / CANalyzer",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "576e1ef6-443c-4925-87be-ff958e161c07",
        "activeFrom": null,
        "activeUntil": null,
        "description": "A key component in the development of CAN/CAN FD networks is the communication description in the form of DBC files. It serves as the foundation for all other development steps such as\n\n►    simulation and analysis of bus communications,\n\n►    configuration of the ECU/LRU software and detailed ECU/LRU tests.\n\nThe DBC databases describe the properties of the CAN/CAN FD network, the ECUs/LRUs connected to the bus and the messages and signals.\n\nCANdb++ Admin – with extended support of the protocols J1939/ISO 11783 as well as J1708/J1587 and ARINC 429 – gives users the capabilities needed to visualize the DBC databases, create new databases or modify data in existing databases.",
        "displayName": "Vector / CANdb++",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "9d08ef94-b734-4733-ad95-9babb9cd4cdb",
        "activeFrom": null,
        "activeUntil": null,
        "description": "The specification tool CANdelaStudio is a central component of the Vector CANdela solution and supports users in creating and editing a formal vehicle ECU diagnostic specification.",
        "displayName": "Vector / CANdelaStudio",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "ad857d5b-fae8-40ed-8553-3354eb8d2628",
        "activeFrom": null,
        "activeUntil": null,
        "description": "CANoe is the comprehensive software tool for development, test and analysis of individual ECUs and entire ECU networks in the automotive and various other industries. It supports network designers, development and test engineers throughout the entire development process – from planning to system-level test.",
        "displayName": "Vector / CANoe",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "739ceaf5-fc96-4a82-8862-10cd7859e6c9",
        "activeFrom": null,
        "activeUntil": null,
        "description": "DaVinci Developer Adaptive is the optimal tool for successfully configuring AUTOSAR Adaptive projects. In addition to the actual configuration, DaVinci Developer Adaptive combines all other working steps for MICROSAR Adaptive from Vector.\n\nDaVinci Developer Classic is a tool for designing the architecture of software components (SWCs) for AUTOSAR Classic ECUs.",
        "displayName": "Vector / DaVinci Developer adaptive and Classic",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "ec0c4552-0e39-46e1-9fa3-dccc2b3182a0",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Quality assuarance of C-code (PCLint and QAC complement each other)\nStatic code analyser. Checking of C-code\n",
        "displayName": "Vector / PC Lint",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "e8c09bce-2bc0-4b4a-91a9-3e78b1acfe44",
        "activeFrom": null,
        "activeUntil": null,
        "description": "vFlash is a very easy-to-use tool for programming ECUs via diagnostics (e.g. UDS). Thanks to the vFlash plug-in concept, vFlash can be used for all your projects. vFlash already supports more than 180 different flash specifications from over 100 vehicle manufacturers and can be easily extended.",
        "displayName": "Vector / vFlash",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "9465c85e-bc02-4be5-afcd-42aa0dd49d5d",
        "activeFrom": null,
        "activeUntil": null,
        "description": "vTESTstudio is a powerful development environment for creating automated ECU tests. In order to increase the efficiency in terms of test design and to simplify the reusability it provides either\n\nprogramming-based,\ntable-based and\ngraphical test notations and test development methods.\nvTESTstudio can be employed in all product development phases: from model testing right through to system validation. Thanks to the use of open interfaces vTESTstudio can be simply incorporated into existing tool chains.\n",
        "displayName": "Vector / vTestStudio",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "9901c245-2d00-484d-b966-e345e18be5c1",
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
    },
    {
      "id": "e1d9ed2d-24af-4e17-8b78-144a23a29f57",
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
        "id": "e37ce85f-54fc-4ba3-9543-db923a706601",
        "displayName": "Product development / R&D Process / Embedded System process / 06 Test",
        "description": null,
        "lifecycle": null,
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
        },
        {
          "id": "0da20c33-2d6b-4f9b-8a9e-86d94a340bca",
          "displayName": "Vector Informatik CANoe Unspecified",
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
    "ssoProvider": "Global Client application",
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