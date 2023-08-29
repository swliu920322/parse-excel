export default {
  "completion": {
    "percentage": 74,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 49,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 39
  },
  "subscriptions": [
    {
      "firstName": "Ricardo",
      "lastName": "Martins",
      "displayName": "Ricardo Martins",
      "email": "Ricardo.Martins@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "esteban.rinland@scania.com",
      "email": "esteban.rinland@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Roel",
      "lastName": "ten Kleij",
      "displayName": "Roel ten Kleij",
      "email": "Roel.ten_Kleij@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    }
  ],
  "information": {
    "name": "EXPORTSYS",
    "description": "EXPORT Process - Prepare and manage information about foreign trade products order, show financial data about all operations; Prepare and send this foreign trade information to government.\n",
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
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "6814f568-ac30-43a8-bb84-f5e55994bdf0",
      "displayName": "OSGT Move to Cloud",
      "fullName": "OSGT Move to Cloud",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
    },
    {
      "id": "73d690ea-340a-4835-8d1a-fbaa2ce6d56e",
      "displayName": "SLA Portfolio - Keep Full",
      "fullName": "SLA Portfolio - Keep Full",
      "tags": [],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2020-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Eduardo Chagas",
          "email": "eduardo.chagas@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Evandro Miranda",
          "email": "Evandro.Miranda@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Rafael Fernandes",
          "email": "Rafael.Fernandes@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "471f16aa-4b77-4de1-a783-65b4f59d6fff",
      "displayName": "SLA Portfolio - Thirdparty",
      "fullName": "SLA Portfolio - Thirdparty",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Eduardo Chagas",
          "email": "eduardo.chagas@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "insufficient",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "1f3cc3a9-65b6-4188-bd74-0547277a02a4",
        "displayName": "H. Logistics and Warehouse Management / Transport Management / Transport and Cross Border Documentation Management",
        "description": "Ability to manage compliance documentation for transport, export and import of products and documentation for managing transports with carrier and partners. This also includes managing of custom fees, managing of export and import reporting to authorities, e.g. Intrastat. Documentation can be electronic like messages to custom authorities, customers or carriers and physical like paper and labels that has to follow goods transported.",
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
        "id": "70730cb6-7648-4388-8b02-3188e2f9e3a9",
        "displayName": "Order to delivery / Outbound",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "268fa340-539a-4468-8471-638b64e885b3",
        "displayName": "Services delivery / Retail Parts & Warehouse",
        "description": "Retail parts and warehouse describes the global process for a Scania workshop warehouse. Includes all different parts as Scania spare parts, parts from any supplier as well as used parts. ",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "b5628e7f-bf1f-4b8c-a34c-5ab8a95db60d",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LI - IT / LIL - Order To Delivery & Product Development / LILL - Central Logistic IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-25"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "0d5fedd7-90d1-4a86-b7ab-f1283f8c8777",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LK - Sales and Marketing LA / LKL - Latin America Parts Logistics / LKLP - Demand & Supply Chain / LKLPD - Demand Chain",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-30"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "58941869-008f-4a75-aa08-62d620b2eb99",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LO - Logistics / LOL - Logistics Center & Kd / LOLK - Kd & Outbound",
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
        "id": "10d6e90b-fa95-4011-ba8a-ac073cfbb85a",
        "description": null,
        "displayName": "INOUT_InOut",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "479d2983-aaea-4528-bb0d-4f1d68556a39",
        "description": null,
        "displayName": "EXPORTSYS_EXPORT_PROCESS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0a9f4b9c-20bc-4080-917a-016f302d4569",
        "description": null,
        "displayName": "EXPORTSYS_INVOICE",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "881c1293-d108-4252-b2b5-237f73e47bb0",
          "displayName": "Centura",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "127d7108-b3fd-462e-a6a1-da1009255936",
          "displayName": "Oracle Oracle Database Enterprise 19c",
          "category": "software",
          "description": "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-14"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-04-30"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-04-30"
              }
            ]
          },
          "tags": [
            "China affected",
            "A good example",
            "From SCT"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "notSupported"
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