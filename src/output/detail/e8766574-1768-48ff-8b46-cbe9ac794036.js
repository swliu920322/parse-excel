export default {
  "completion": {
    "percentage": 75,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 85,
    "dataManagement": 63,
    "dependencies": 100,
    "information": 83,
    "projects": 100,
    "robots": 100,
    "sourcing": 40
  },
  "subscriptions": [
    {
      "firstName": "Eduardo",
      "lastName": "Horst Morales",
      "displayName": "Eduardo Horst Morales",
      "email": "eduardo.horst@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Qiqi",
      "lastName": "Zhang",
      "displayName": "Qiqi Zhang",
      "email": "qiqi.zhang@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Lukas",
      "lastName": "Bohm",
      "displayName": "Lukas Bohm",
      "email": "lukas.bohm@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Shubham",
      "lastName": "Jain",
      "displayName": "Shubham Jain",
      "email": "shubham.rajesh.jain@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Ian",
      "lastName": "Sandholm",
      "displayName": "Ian Sandholm",
      "email": "ian.sandholm@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "chatbot-ssp-api",
    "description": "API getting invoice information from ebs and p2p and giving back invoice status. API developed to be used specifically for a chatbot,",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2020-05-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2020-10-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "451ae396-39a0-4ed3-881f-8be9632b6a63",
        "displayName": "Scania Supplier Portal / Chatbot - SSP",
        "description": "Chatbot which provides self-service support (FAQs) and invoice status requests to suppliers. Published on https://supplier.scania.com/",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-03-31",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-03-31",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "59e676ca-2771-46a3-b0a9-0e28613d8411",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Supplier Invoice Handling",
        "description": "The ability to manage invoices from suppliers, including approval, creation/registration, validation and payment. Example: Supplier invoice approval, Supplier invoice creation/registration, Supplier invoice payment, Supplier invoice validation",
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
          "China affected"
        ]
      }
    ],
    "processes": [
      {
        "id": "94cfb7af-dc7e-4431-8fb9-c7425c85d6cd",
        "displayName": "Supporting processes / Lack of parent / SGB Processes / SGB Finance Process (TBC) / Supplier Invoice Management",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "4e0d44e8-0ac9-42f8-870a-f1c6b47915bc",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXB - Business Automation",
        "usageType": "owner",
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
        "id": "04396a68-174b-4700-8409-3e352b5ab409",
        "displayName": "Suppliers",
        "usageType": "user",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
        ]
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "a6e92b3d-a3be-4623-8205-dab8e08c4a3e",
        "description": null,
        "displayName": "Financial Control Domain / Invoice Entity / Supplier Invoice",
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
    "interfaceConsume": [
      {
        "id": "c60cf4b0-e136-4d9d-b844-c3b3fba6a2a7",
        "description": "This are all external API(s) from Scania Configurator that needs to be consumed by Scania internal applications",
        "displayName": "Scania Configurator_ScaniaConfigurator IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-27"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "fbd5f619-5c3f-4873-a818-cc78b3b491fa",
        "description": null,
        "displayName": "Scania Supplier Portal / Chatbot - SSP / chatbot-ssp-api_ssp-chatbot IE v1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-12-09"
            }
          ]
        },
        "tags": [
          "Not China affected"
        ]
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "b3d29d5c-012e-41cf-9999-e22c5e60451c",
          "displayName": "Federation Gateway",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        }
      ],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "notSupported"
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