export default {
  "completion": {
    "percentage": 52,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 33,
    "dataManagement": 25,
    "dependencies": 100,
    "information": 83,
    "projects": 100,
    "robots": 100,
    "sourcing": 20
  },
  "subscriptions": [
    {
      "firstName": "Magnus",
      "lastName": "Wikegård",
      "displayName": "Magnus Wikegård",
      "email": "Magnus.Wikegard@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Quentin",
      "lastName": "Chomis",
      "displayName": "Quentin Chomis",
      "email": "quentin.chomis@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Ebba",
      "lastName": "Dyrell",
      "displayName": "Ebba Dyrell",
      "email": "ebba.dyrell@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Yelena",
      "lastName": "Crona",
      "displayName": "Yelena Crona",
      "email": "yelena.crona@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "Star",
    "description": "A request for quotation system within the Volkswagen Group for Automotive products.",
    "lifecycle": {
      "asString": "phaseOut",
      "phases": [
        {
          "phase": "active",
          "startDate": "2015-01-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2021-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2025-12-31",
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
      "id": "693e4a28-b9a3-4670-8ab5-863eb2211c7e",
      "displayName": "Aurora",
      "fullName": "Aurora",
      "tags": [
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2021-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-01-01"
          },
          {
            "phase": "active",
            "startDate": "2022-01-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2026-12-31"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sirpa Södereng",
          "email": "sirpa.sodereng@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Thomas Strandberg",
          "email": "thomas.strandberg@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "6772cb9c-307e-4fad-a504-d19e1a948309",
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
    },
    {
      "id": "503381b9-6dec-482c-b357-ae96134f5491",
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
    },
    {
      "id": "a57539ad-0d09-4932-bd2c-e527f94bc5ef",
      "displayName": "Scania Asia / SAS Purchasing",
      "fullName": "SAS Purchasing",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "phaseIn",
        "phases": [
          {
            "phase": "phaseIn",
            "startDate": "2021-11-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-06-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2025-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Tomas Hebbou",
          "email": "tomas.hebbou@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Quentin Chomis",
          "email": "quentin.chomis@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "missionCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "2c422b88-a917-45e3-9a07-be9b32c4b905",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Development / Manage and Implement Enterprise Change",
        "description": "The ability to implement decided changes in a controlled manner by securing the new solutions works in its surrounding and that people are educated and ready to work according to changed conditions.\nDrive and Enable Business Transformation; Initiate and enable business transformation according to strategic directives",
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
          "MilkyWay area 3. Ideate, Define & Decide Change Direction",
          "MilkyWay area 7. Manage Change, Configuration and Releases"
        ]
      },
      {
        "id": "be1652f2-717b-41c6-9784-a691744231cb",
        "displayName": "E. Solution Development & Optimization / Demand Analysis and Requirement Management",
        "description": "Ability to manage requirements from different stakeholders. Ability to support processes and traceability of changes.",
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
      },
      {
        "id": "90d8b906-ab0c-4b95-ba52-d0f85af2a485",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Sourcing Management / Sourcing Cost Control",
        "description": "Eg: Purchase Cost Engineering, Cost management (incl Evaluate costs of components, Evaluate costs of tooling, Evaluate costs of adjusted quantities, Identify saving potentials, Evaluate costs of technical adjustments)",
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
      },
      {
        "id": "e1ddfcef-a764-44c1-a96c-c0e714531fbc",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Sourcing Management / Sourcing Execution",
        "description": "RFx Management, Negotiation Management, Sourcing Decision (Compare, Decide, Distribute)",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-07"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      }
    ],
    "processes": [],
    "organisations": [
      {
        "id": "e933bcb1-06ae-4188-ab72-c0c042b6d4ad",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing",
        "usageType": "user",
        "description": null,
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
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "e49215de-a3b4-45a4-bfc2-851a5686ace5",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN1 - Business Development / SNI - Digitalisation & Systems​",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-01"
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
        "id": "f7756442-6904-41dd-9dd6-ceff4f15f9f8",
        "description": null,
        "displayName": "Financial Control Domain / Performance Item Entity",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-04"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      },
      {
        "id": "945ede33-0dfe-406f-a318-846621c7de0d",
        "description": "Master Data Source SSIP, Scania Supplier Information Portal  (limited to Automotive Parts Suppliers) Represents Scania suppliers independent if they provide Scania with components within resources and hardware, services and software or work efforts. One specific type of supplier are bodybuilders that supply Scania and customers with coaches and bodywork to complete Product As Individuals upon Scania basic chassis products.  Supplier is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Supplier",
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
      },
      {
        "id": "a51ee7f9-a7b7-4075-b2fb-b25bb9604ef2",
        "description": "Purchase Agreement and uniting level for Purchase Agreement Line, referring to agreement owner and invoice account, where one agreement can consist of several Purchase Agreement Line.",
        "displayName": "Purchase & Agreement Domain / Purchase Order Entity / Purchase Agreement",
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
      },
      {
        "id": "710456df-97dd-47b6-b356-263c4103f4e9",
        "description": "Uniting time-related main level for one or several Purchase Order Lines. Each order is a business interaction between Scania and a supplier party, which offer sourcing products. Represents the buying party's documented commitment to purchase a product from a supplier in accordance with the specified criteria in order to meet the business needs of input products for production and other operations.  Various parties and part of the purchasing business - like factory, distributor, dealer and the company's other own business units - can act as a buying party from other parties who have equivalent roles as well as from the company's external suppliers.",
        "displayName": "Purchase & Agreement Domain / Purchase Order Entity / Purchase Order",
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
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "e5a551e7-5b3b-4b93-9108-db7815596ba6",
          "displayName": "Volkswagen IT STAR",
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
    "statusSSO": null
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