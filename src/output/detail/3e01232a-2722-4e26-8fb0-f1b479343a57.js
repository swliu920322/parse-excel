export default {
  "completion": {
    "percentage": 21,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 3,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 33,
    "projects": 100,
    "robots": 0,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Fred",
      "lastName": "Yang",
      "displayName": "Fred Yang",
      "email": "fred.yang@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Tomas",
      "lastName": "Hebbou",
      "displayName": "Tomas Hebbou",
      "email": "tomas.hebbou@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Joao",
      "lastName": "Leite",
      "displayName": "Joao Leite",
      "email": "joao.vitor@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "Monday.com",
    "description": null,
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2019-12-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Marketing / Marketing Resource Management ; ERP / Project ; Content Management / Online Form Builder",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "9174acf8-4b5c-41a9-8055-1414be418c59",
      "displayName": "SAS Industrial Project - China / China Purchasing IT",
      "fullName": "China Purchasing IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2021-12-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-08-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tomas Hebbou",
          "email": "tomas.hebbou@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
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
    "organisations": []
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
          "id": "0db81d64-c17e-4cc3-83a5-ae08c12dbc22",
          "displayName": "monday.com Monday.com",
          "category": "software",
          "description": "Monday.com is a visual project management tool that will help to collaborate and achieve together. monday.com is a cloud-based work operating system offering a simplified way to manage the team and any project.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2012-01-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "OKTA, OneLogin, Azure AD, SAML 2.0",
    "statusSSO": "supported"
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