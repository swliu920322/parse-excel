export default {
  "completion": {
    "percentage": 8,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 18,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 8,
    "projects": 0,
    "robots": 0,
    "sourcing": 0
  },
  "subscriptions": [
    {
      "firstName": "Pontus",
      "lastName": "Ekehult",
      "displayName": "Pontus Ekehult",
      "email": "pontus.ekehult@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Peter",
      "lastName": "Alåsen",
      "displayName": "Peter Alåsen",
      "email": "peter.alasen@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Diego",
      "lastName": "Benatti",
      "displayName": "Diego Benatti",
      "email": "diego.benatti@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Digital Dealer Analytics and reporting",
    "description": "The analytics and reporting capabilities integrated in Digital Dealer are built on a PowerBI platform and allows DD users to get analytics, statistics and reports of DD usage and vehicles with their workshop as homeworkshop etc.",
    "lifecycle": null,
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "0496c051-52fe-4c1d-a12c-d2ded2aa028b",
        "displayName": "Digital Dealer",
        "description": "Digital Dealer collects & displays data from different systems about; vehicles, customers and vehicle repair and maintenance needs. It allows the workshops to plan, execute and follow up work done.   \nDigital Dealer Dashboard is a cloud-based service hosted in AWS. \n",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2",
          "Target State Commercial"
        ],
        "subscriptions": []
      }
    ],
    "children": []
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
        "id": "e07f6e0a-2d72-4449-8369-f70217b9f773",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAB - Workshop Process / IABA - Digital Dealer",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-01-02"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "886b204d-d93b-4b83-9f9a-39a063723d56",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KY - Service Portfolio & Delivery / KYD - Retail Digitalisation / KYDD - Workshop Digitalisation",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-01"
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