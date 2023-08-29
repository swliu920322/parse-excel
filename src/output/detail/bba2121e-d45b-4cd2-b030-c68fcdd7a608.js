export default {
  "completion": {
    "percentage": 61,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 50,
    "dependencies": 50,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 53
  },
  "subscriptions": [
    {
      "firstName": "Ivan",
      "lastName": "Silva",
      "displayName": "Ivan Silva",
      "email": "Ivan.Silva@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Larissa",
      "lastName": "Bueno",
      "displayName": "Larissa Bueno",
      "email": "larissa.bueno@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Fabio",
      "lastName": "Rangel",
      "displayName": "Fabio Rangel",
      "email": "Fabio.Rangel@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Elias",
      "lastName": "Abissamra",
      "displayName": "Elias Abissamra",
      "email": "Elias.Abissamra@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Douglas",
      "lastName": "Silva",
      "displayName": "Douglas Silva",
      "email": "Douglas.Silva2@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "ismar.silva@scania.com",
      "email": "ismar.silva@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Pick By Voice",
    "description": "Voice command parts separation system for or collaborator\n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2023-01-31",
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
        "id": "7997eae1-fa40-4c3f-9cb7-bf9d423461cc",
        "displayName": "PICK SLA",
        "description": "Web application that generates picking lists for the assembly lines.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "1b9f8031-ee53-4429-95e2-666f935e010f",
      "displayName": "SLA Portfolio - Inhouse",
      "fullName": "SLA Portfolio - Inhouse",
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-08-29",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-08-29",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "cdd843dd-c22e-451a-b8e7-14900af6a691",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Picking",
        "description": null,
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
        "id": "a6fe6081-ceb9-4c86-9ab6-49a9d363a34e",
        "displayName": "Order to delivery / Production Processes / General support processes / Production Engineering",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "416018fc-1716-4ebf-9f9a-dae8bbc4bca6",
        "displayName": "Order to delivery / Wholesale chassis order to Factory",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "b4f79971-407f-40c2-aebc-00488ab9fbb4",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LI - IT / LIL - Order To Delivery & Product Development / LILP - Production, Purchasing, Maintenance, R&D IT",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-05"
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
        "id": "986fd547-abdc-4415-aee5-13ecb633e87b",
        "description": null,
        "displayName": "PICK SYSTEM",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "59f1c14d-7b69-4d73-b3e1-f88848ece03e",
        "description": null,
        "displayName": "PICK SLA / Pick By Voice_empty",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "621fb5e1-d8e5-449f-a8d2-9f10e45d9e1e",
          "displayName": "Microsoft SQL Server Enterprise 2019",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2019-08-21"
              },
              {
                "phase": "active",
                "startDate": "2019-11-04"
              },
              {
                "phase": "phaseOut",
                "startDate": "2025-02-28"
              },
              {
                "phase": "endOfLife",
                "startDate": "2030-01-08"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
          ]
        },
        {
          "id": "32962229-0e42-49ac-94cd-5e8fe48f3fb5",
          "displayName": "Microsoft Windows Server Standard 2019",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2018-11-13"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-01-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2029-01-09"
              }
            ]
          },
          "tags": [
            "China affected",
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