export default {
  "completion": {
    "percentage": 76,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 53,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 60
  },
  "subscriptions": [
    {
      "firstName": "Fernanda",
      "lastName": "Marques",
      "displayName": "Fernanda Marques",
      "email": "Fernanda.Marques@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Ronaldo",
      "lastName": "Junior",
      "displayName": "Ronaldo Junior",
      "email": "Ronaldo.Junior@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Evandro",
      "lastName": "Miranda",
      "displayName": "Evandro Miranda",
      "email": "Evandro.Miranda@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    }
  ],
  "information": {
    "name": "ECOFINBR - E&F DEALERS PORTAL",
    "description": " Electronic Approval of Digital Documents integrated with Brazilian applications",
    "lifecycle": {
      "asString": "phaseIn",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2022-11-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2024-01-01",
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
  "initiatives": [
    {
      "id": "114791d1-051b-4cea-b1f6-a85e686389fc",
      "displayName": "SLA - IEB Affected Capability",
      "fullName": "SLA - IEB Affected Capability",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Eduardo Chagas",
          "email": "eduardo.chagas@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "administrativeService",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "cbe81169-98cf-4bcd-a505-0bd85c44bd55",
        "displayName": "A. Manage and Develop Enterprise / Operational Management / Non Core Common Services",
        "description": "Common services needed to support and run non core daily business operations. Eg. Cleaning Service, Coffee Machine Service, Postal service",
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
        "tags": []
      }
    ],
    "processes": [],
    "organisations": [
      {
        "id": "4578c9f1-0433-4789-99f1-88600d4460f1",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LF - Economy and Finance",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-14"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "553a0518-5a53-425f-930a-7cac8bd3a8e3",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LI - IT / LIO - Sales Service & Supporting Processes It / LIOF - Finance & Business Control IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-12-07"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "278b36ce-b004-4d21-9c1d-d2224d3a0b87",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / S - Scania Commercial Operations Brazil",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
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
          "id": "4c022d05-f44f-4637-90dd-31f6e9805540",
          "displayName": "Angular",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "3c2a0ade-e24b-4220-9d41-b92feaa65122",
          "displayName": "Microsoft .NET Framework 1.0",
          "category": "software",
          "description": ".NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. The .NET Framework is the original implementation of .NET. It supports running websites, services, desktop apps, and more on Windows.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2001-12-01"
              },
              {
                "phase": "active",
                "startDate": "2002-02-13"
              },
              {
                "phase": "endOfLife",
                "startDate": "2003-03-19"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [],
      "accessControl": [
        {
          "id": "720fb9c2-75e8-4269-9342-096ac180294f",
          "displayName": "Scania / Scania IT scania-sla-li-financial-dev",
          "category": "Access_Control_Item",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2021-10-13"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "db6a291d-dbb2-4cec-8b0e-12a82d796cd2",
          "displayName": "Scania / Scania IT scania-sla-li-financial-prod",
          "category": "Access_Control_Item",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2021-10-13"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "f29a6182-de93-4d5b-abc9-4e90601c1d89",
          "displayName": "Scania / Scania IT scania-sla-li-financial-prod PROD",
          "category": "Access_Control_Item",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2022-04-27"
              }
            ]
          },
          "tags": []
        }
      ]
    },
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
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