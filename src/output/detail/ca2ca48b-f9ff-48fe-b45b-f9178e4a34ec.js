export default {
  "completion": {
    "percentage": 32,
    "ChinaReadiness": 25,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 13,
    "dependencies": 0,
    "information": 33,
    "projects": 100,
    "robots": 0,
    "sourcing": 17
  },
  "subscriptions": [
    {
      "firstName": "Simone",
      "lastName": "Roffe",
      "displayName": "Simone Roffe",
      "email": "Simone.Roffe@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Harley",
      "lastName": "Carter",
      "displayName": "Harley Carter",
      "email": "harley.carter@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    }
  ],
  "information": {
    "name": "IBM Cognos (TM1) SGB",
    "description": "Finance reporting and forecasting tool",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-17",
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
      "id": "452ae227-9899-40c2-a178-26000d9abf39",
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
        },
        {
          "displayName": "Enno Grüning",
          "email": "enno.gruning@scania.com",
          "type": "OBSERVER"
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
    "processes": [
      {
        "id": "6207c9ef-aaa4-4af2-bfd9-697c0be05a29",
        "displayName": "Supporting processes / Lack of parent / SGB Processes / SGB Finance Process (TBC) / Accounting",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "307d0d40-ccc2-429a-b5ce-e09289b16b7d",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "fcf63ef1-496b-42ec-a79e-c150dc0ae31f",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / AFT - Services",
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
    "interfaceConsume": [
      {
        "id": "4496e156-5314-4881-aa3a-fbf30c221edd",
        "description": "The Interface extract the Trial Balance from Autoline into  IBM Cognos (TM1) GB for reporting purposes and used by the Scania GB Financial Reporting Team\n\n",
        "displayName": "Autoline SGB 8.32_Trial_Balance",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-16"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "bfd73a39-3811-4048-9b54-2d21bea9c124",
          "displayName": "IBM IBM Cognos (TM1)",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
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
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": "OK",
    "LicenceStatus": [
      "ScaniaGroupContract"
    ],
    "ChinaRequirements": "",
    "ChinaDesign": "",
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "",
    "Chinaverification": "",
    "ChinaOperations": ""
  }
}