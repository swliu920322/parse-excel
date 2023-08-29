export default {
  "completion": {
    "percentage": 9,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 13,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 8,
    "projects": 0,
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
    "name": "COLO",
    "description": "Connected Logistics\n\nHandshake information” between individual AGV and Line stations/drop of station\n   - AGV in position\n   - Clear to move in\n   - Pallet delivered \nInterface for Fleet management information\nInterface for order of empty pallet\nInterface for replenishment triggers\nInterface for building signals such a fire alarm/evacuation ",
    "lifecycle": null,
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "b003548e-e1b4-41d0-9cf2-192f8cb5f98b",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Connected Logistics\n\nHandshake information” between individual AGV and Line stations/drop of station\n   - AGV in position\n   - Clear to move in\n   - Pallet delivered \nInterface for Fleet management information\nInterface for order of empty pallet\nInterface for replenishment triggers\nInterface for building signals such a fire alarm/evacuation ",
        "displayName": "COLO / COLO - CDE",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [],
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