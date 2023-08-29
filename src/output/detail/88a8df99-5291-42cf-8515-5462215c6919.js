export default {
  "completion": {
    "percentage": 78,
    "ChinaReadiness": 51,
    "EnterpriseGuardrails": 100,
    "businessSupport": 68,
    "dataManagement": 25,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 63
  },
  "subscriptions": [
    {
      "firstName": "Helena",
      "lastName": "Westman",
      "displayName": "Helena Westman",
      "email": "helena.westman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Sukesh Rohith",
      "lastName": "Parthasarathy",
      "displayName": "Sukesh Rohith Parthasarathy",
      "email": "sukesh-rohith.parthasarathy@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Kilian",
      "lastName": "Schott",
      "displayName": "Kilian Schott",
      "email": "kilian.schott@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Mikaela",
      "lastName": "Garroz",
      "displayName": "Mikaela Garroz",
      "email": "mikaela.garroz@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Marposs Gearbox",
    "description": "Measurement system with different applications within production",
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
    "predecessor": []
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
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-05-07",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-05-07",
              "milestoneId": null
            }
          ]
        },
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
      }
    ],
    "organisations": [
      {
        "id": "e88470a9-76c3-42cf-8221-86f100f66941",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT",
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
        "id": "70b61311-9a10-438a-a829-d6f29fc6ccb3",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / ING - Powertrain & Industrial Control IT / INGA - Powertrain Assembly & Maintenance IT",
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
        "id": "f533400e-a6cc-436a-855f-4d1360f8d349",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / D - Powertrain Production / DT - Transmissionsmontering / DTT - Produktionsteknik Transmissionsmonterin / DTTC - Excellence in Core / DTTCI - IS/IT",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-01"
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
          "id": "74eca0e8-be18-4169-a226-53657572a2b9",
          "displayName": "Microsoft Windows Server Standard 2012 R2",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2013-11-25"
              },
              {
                "phase": "phaseOut",
                "startDate": "2018-10-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2023-10-10"
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
    "ChinaITlegalCompliance": "SQCcompleted",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCT",
    "ChinaDesign": "INGA",
    "ChinaSourcing": "INGA",
    "ChinaPaying": "TCT",
    "ChinaImplementation": "INGA",
    "Chinaverification": "TCT",
    "ChinaOperations": ""
  }
}