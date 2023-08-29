export default {
  "completion": {
    "percentage": 69,
    "ChinaReadiness": 62,
    "EnterpriseGuardrails": 50,
    "businessSupport": 57,
    "dataManagement": 50,
    "dependencies": 100,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 10
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "darshan.yeole@scania.com",
      "email": "darshan.yeole@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "ingemar.liden@scania.com",
      "email": "ingemar.liden@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Johnny",
      "lastName": "Uddstrand",
      "displayName": "Johnny Uddstrand",
      "email": "johnny.uddstrand@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Concerto",
    "description": "Concerto is a PC based application that evaluates collected data from test cells (PDP/PUMA).\n",
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
      "functionalSuitability": "perfect",
      "iramNecessary": "no",
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
        "id": "0c0e3ff1-4a6a-4b06-8193-d0e526010b3a",
        "displayName": "Product development / R&D Process / R&D Methods",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "37a7184c-614c-485c-94c4-153f87cb5f46",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUA - Hosting Services / IUAW - Windows, Web & DB Platform Dev",
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
        "id": "796c0498-c0a8-40fd-92a8-95120bfa7163",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EN - Powertrain Development / ENL - Powertrain Testing / ENLD - Test cell development & service / ENLDT - Test Cell Technology",
        "usageType": "owner",
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
    "objects": [
      {
        "id": "1a596c50-eb1c-4dce-bba5-284da0b9023f",
        "description": "Represents each test activity that log all actions directed to a Test Carrier Subset and Test Object.",
        "displayName": "Product Development Domain / Test & Quality Assurance Entity / Test Activity",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      }
    ],
    "interfaceConsume": [],
    "interfaceProvide": [
      {
        "id": "ccd977e4-f5b6-4c4b-ad5b-c29b25f2b3c2",
        "description": null,
        "displayName": "Concerto 5R2_empty",
        "lifecycle": null,
        "tags": []
      }
    ]
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
    "ExportControlOfAppl": "OK",
    "LicenseUsageRights": "OK",
    "LicenceStatus": null,
    "ChinaRequirements": "TR",
    "ChinaDesign": "NLES",
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "NLES",
    "Chinaverification": "TRVIP",
    "ChinaOperations": ""
  }
}