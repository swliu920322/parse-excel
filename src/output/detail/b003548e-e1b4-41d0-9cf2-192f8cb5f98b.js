export default {
  "completion": {
    "percentage": 20,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 13,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 8,
    "projects": 100,
    "robots": 0,
    "sourcing": 13
  },
  "subscriptions": [
    {
      "firstName": "Anton",
      "lastName": "Smith",
      "displayName": "Anton Smith",
      "email": "anton.smith@scania.com",
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
      "firstName": "Albert",
      "lastName": "Isik",
      "displayName": "Albert Isik",
      "email": "albert.isik@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Conny",
      "lastName": "Friborg",
      "displayName": "Conny Friborg",
      "email": "conny.friborg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "COLO - CDE",
    "description": "Connected Logistics\n\nHandshake information” between individual AGV and Line stations/drop of station\n   - AGV in position\n   - Clear to move in\n   - Pallet delivered \nInterface for Fleet management information\nInterface for order of empty pallet\nInterface for replenishment triggers\nInterface for building signals such a fire alarm/evacuation ",
    "lifecycle": null,
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "ec6d2260-7977-492f-b3f4-a187c2aca1d0",
        "displayName": "COLO",
        "description": "Connected Logistics\n\nHandshake information” between individual AGV and Line stations/drop of station\n   - AGV in position\n   - Clear to move in\n   - Pallet delivered \nInterface for Fleet management information\nInterface for order of empty pallet\nInterface for replenishment triggers\nInterface for building signals such a fire alarm/evacuation ",
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
      "id": "6e14eb03-1cbf-4fd0-bdad-9c7eb7c52a6f",
      "displayName": "SAS Industrial Project - China / Powertrain Assembly IT for China",
      "fullName": "Powertrain Assembly IT for China",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-08-14"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Alexander Wedin",
          "email": "alexander.wedin@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jonathan Cartaxo",
          "email": "jonathan.cartaxo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Fredrik Blomstedt",
          "email": "fredrik.blomstedt@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Eddie Löwenborg Forsberg",
          "email": "eddie.lowenborg.forsberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jacob Rydgård",
          "email": "jacob.rydgard@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anders Kardeskog",
          "email": "anders.kardeskog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcelo Colovato",
          "email": "marcelo.colovato@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Burak Gavgacioglu",
          "email": "burak.gavgacioglu@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": null,
      "functionalSuitability": null,
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [],
    "organisations": [
      {
        "id": "6073a9cc-7796-4295-b221-fdd0f9a006d4",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFB - SCADA",
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