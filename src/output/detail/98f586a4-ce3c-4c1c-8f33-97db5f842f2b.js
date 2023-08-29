export default {
  "completion": {
    "percentage": 27,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 0,
    "businessSupport": 15,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 0
  },
  "subscriptions": [
    {
      "firstName": "Måns",
      "lastName": "Lilja",
      "displayName": "Måns Lilja",
      "email": "mans.lilja@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Petter",
      "lastName": "Markman",
      "displayName": "Petter Markman",
      "email": "petter.markman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Rodrigo",
      "lastName": "Cid",
      "displayName": "Rodrigo Cid",
      "email": "rodrigo.cid@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Pulse Secure",
    "description": "VPN client",
    "lifecycle": {
      "asString": "phaseIn",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2020-02-18",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "67574835-4b2f-4650-ba87-fe602d19d581",
        "displayName": "Webaccess SLA / Pulse Secure 9.1R13.1",
        "description": "Remote access tool for LA markets.",
        "type": "Application",
        "tags": [
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "4d6d8629-8ebb-4bcb-8fd7-9c0fbf36df6d",
      "displayName": "CAD/vPDM - Performance",
      "fullName": "CAD/vPDM - Performance",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Lennart Borg",
          "email": "lennart.borg@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "1e315d93-73bc-4602-b841-2604cf8bd73b",
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
        "id": "23af6d96-c2f6-468b-bdc2-16eff4db5604",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBA - Service Flows / IBAB - ITSM & Business Uptime",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-12-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "d48d20f4-46ad-4bac-9384-420eed8485e8",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUB - Network & E2E Services / IUBD - Network Services CO & WAN",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-01"
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
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IUBD",
    "ChinaDesign": "IUBD",
    "ChinaSourcing": "IUBD",
    "ChinaPaying": "TTIU",
    "ChinaImplementation": "IUBD",
    "Chinaverification": "IUBD / TTIU",
    "ChinaOperations": "TTIU"
  }
}