export default {
  "completion": {
    "percentage": 19,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 18,
    "dataManagement": 13,
    "dependencies": 0,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 0
  },
  "subscriptions": [
    {
      "firstName": "Sofia",
      "lastName": "Cassel",
      "displayName": "Sofia Cassel",
      "email": "sofia.cassel@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "OP5",
    "description": "Monitoring tool mainly used for network components",
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
  "initiatives": [
    {
      "id": "c96df80d-e98a-4843-a27f-d79941a5424a",
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
        "id": "d48d20f4-46ad-4bac-9384-420eed8485e8",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUB - Network & E2E Services / IUBD - Network Services CO & WAN",
        "usageType": "owner",
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
    "interfaceConsume": [
      {
        "id": "3821692f-b654-4e12-a02f-428e673ba097",
        "description": "Monitoring messagebus API is used to send events to Scania Event Management system.",
        "displayName": "Tivoli Omnibus_MonitoringMessageBus IE v2.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-02"
            }
          ]
        },
        "tags": []
      }
    ],
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