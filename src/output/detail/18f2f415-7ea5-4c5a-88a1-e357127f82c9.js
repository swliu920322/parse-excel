export default {
  "completion": {
    "percentage": 93,
    "ChinaReadiness": 100,
    "EnterpriseGuardrails": 100,
    "businessSupport": 68,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 83
  },
  "subscriptions": [
    {
      "firstName": "Åsa",
      "lastName": "Ralpher",
      "displayName": "Åsa Ralpher",
      "email": "Asa.Ralpher@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner",
        "Product Owner"
      ]
    },
    {
      "firstName": "Sonia",
      "lastName": "Casas Tello",
      "displayName": "Sonia Casas Tello",
      "email": "sonia.casas.tello@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Prasanna Lakshmi",
      "lastName": "Gude",
      "displayName": "Prasanna Lakshmi Gude",
      "email": "prasanna.gude@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Nadja",
      "lastName": "Pirzadeh",
      "displayName": "Nadja Pirzadeh",
      "email": "nadja.pirzadeh@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "Scania Translate",
    "description": "Scania Translate is a web portal with generic and customized neural engine for machine translations.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-08-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-04-16",
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
      "businessCriticality": "administrativeService",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-04-24",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-04-24",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "84a08b1d-e5ac-4647-a30b-e5a8324bda64",
        "displayName": "A. Manage and Develop Enterprise / Communication Management / Language Management",
        "description": "The ability to make quality controlled translations of documents and information to meet needs of organisation and external stakeholders.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-12-06"
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
        "id": "339620ff-f3ec-48c6-95ac-fcbed0dcc977",
        "displayName": "Product development / R&D Process / Vehicle Service Information process",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "baa410b8-4bdb-4e68-8f1f-b045255e7fca",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRB - R&D Methods & Products / IRBI - Development of Product Individuals, Product Adaptations",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-09-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "875d450a-a6a6-473e-be4d-4a6e93dc2f0c",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYS - Vehicle Service Information / EYSE - Projects, Language and Internal Systems / EYSEA - Language and Publishing",
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "2d0de39a-630b-4ba0-a882-58437c5ea71e",
          "displayName": "Welocalize Private Cloud",
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
    "ssoProvider": "Federation Gateway (Keycloack)",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": "NotOK",
    "LicenseUsageRights": "NotOK",
    "LicenceStatus": [
      "NA"
    ],
    "ChinaRequirements": "YSE",
    "ChinaDesign": "YSE/IRD",
    "ChinaSourcing": "YSE",
    "ChinaPaying": "YSE",
    "ChinaImplementation": "YSE/IRBI",
    "Chinaverification": "?",
    "ChinaOperations": "China IT, 3rd line IRBI"
  }
}