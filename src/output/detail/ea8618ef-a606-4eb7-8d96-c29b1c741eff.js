export default {
  "completion": {
    "percentage": 32,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 88,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Christian",
      "lastName": "Nilsson",
      "displayName": "Christian Nilsson",
      "email": "christian_x.nilsson@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Susanna",
      "lastName": "Wall",
      "displayName": "Susanna Wall",
      "email": "susanna.wall@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Roger",
      "lastName": "Axelsson",
      "displayName": "Roger Axelsson",
      "email": "roger.axelsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Daniel",
      "lastName": "Kulander",
      "displayName": "Daniel Kulander",
      "email": "daniel.kulander@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Developer"
      ]
    },
    {
      "firstName": "Johan",
      "lastName": "Källman",
      "displayName": "Johan Källman",
      "email": "johan.kallman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "DWO OP MCAS",
    "description": "Assembly workshop digital workorder",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2023-04-05",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2028-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "d4693ab2-83cd-4d14-944d-c1ab5cc47d4c",
        "displayName": "MOW",
        "description": "MOW is a workorder creation system for the Assembly in Oskarshamn. The workorders are created in an MS Word VBA application with data from MONA CIMI files. The PLC’s in the workshop sends cab locations in the production lines to the server. These signals triggers a MOW workorder creation and a printout to a certain printer. Different printers are connected to different work areas. There is a managing tool that is accessible through web. http://oskweb – production systems.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-04-26",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-04-26",
              "milestoneId": null
            }
          ]
        },
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
    "processes": [
      {
        "id": "588aedfb-fad8-4dbd-846e-82cef2684067",
        "displayName": "Order to delivery / Production Processes / Production Support Processes",
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
        "usageType": null,
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
        "id": "8b1724c9-f44a-41a2-8849-4edaf3de66d4",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INB - INB Chassis & Cabs IT / INBC - Cab Assembly IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-18"
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "NA",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCHA",
    "ChinaDesign": "TTPF",
    "ChinaSourcing": "TTPF",
    "ChinaPaying": "TTPF",
    "ChinaImplementation": "TTPF",
    "Chinaverification": "TCHA/TTPF",
    "ChinaOperations": "TTPF"
  }
}