export default {
  "completion": {
    "percentage": 18,
    "ChinaReadiness": 25,
    "EnterpriseGuardrails": 0,
    "businessSupport": 60,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "johnny.nehls@scania.com",
      "email": "johnny.nehls@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Karin",
      "lastName": "Haasis",
      "displayName": "Karin Haasis",
      "email": "karin.haasis@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Mikael",
      "lastName": "Rothsten",
      "displayName": "Mikael Rothsten",
      "email": "mikael.rothsten@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Johan",
      "lastName": "Florén",
      "displayName": "Johan Florén",
      "email": "johan.florn@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Birger",
      "lastName": "Winroth",
      "displayName": "Birger Winroth",
      "email": "birger.winroth@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Calibration Library",
    "description": "The Calibration Library consists of a Subversion server and repository. The users interact with the calibration library through the in-house applications called DIMA Tool and Comptrans, developed by NETI. \nA supporting service, called CalLibWatcher, which monitors the calibration library and notifies users via e-mail also runs on the server.\n\nSubversion is an open source application and Scania IT’s responsibility is only to host the infrastructure and handle backup.\n",
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
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "9eb8fa36-1099-48e2-a5c2-8c8b7b674169",
        "displayName": "E. Solution Development & Optimization / Evaluate, Compare, Verify and Validate Solutions",
        "description": "Test product in conditions corresponding to intended purpose. Manage test criteria,  managing and developing  test environments including test bed designs. Ability to assure that products/services are compliant and/or approved according to standards and legal requirements.",
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
          "MilkyWay area 8. Certification"
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
      },
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
      },
      {
        "id": "699403fe-522e-4dc3-9de0-bb0b8a651992",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EN - Powertrain Development / ENE - Powertrain Control / ENET - Real-Time Controls Platform and Tools / ENETI - Tools and Infrastructure",
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
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": "NotOK",
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