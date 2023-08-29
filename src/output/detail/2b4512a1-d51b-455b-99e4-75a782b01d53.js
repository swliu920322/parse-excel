export default {
  "completion": {
    "percentage": 50,
    "ChinaReadiness": 25,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 13,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 100,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": "Peter",
      "lastName": "Johansson",
      "displayName": "Peter Johansson",
      "email": "peter_u.johansson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Raman",
      "lastName": "Ahuja",
      "displayName": "Raman Ahuja",
      "email": "raman.ahuja@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Gitlab",
    "description": "IUAT is deliverying Gitlab Enterprise to cover version control and Continuous Integration and Delivery.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "d4f9439b-3580-476f-b7cf-057e9b9500dd",
        "displayName": "BitBucket",
        "description": null,
        "type": "Application",
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "bf5a740a-e594-4b2a-8626-da81e30a4779",
        "displayName": "GitHub",
        "description": "GitHub version control on premise installation.\r\n\r\ngithub.scania.com",
        "type": "Application",
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "1a5361bd-0667-4e0a-a9ab-8b377f423cc2",
        "displayName": "TFS SLA",
        "description": "Team Foundation Server for SLA",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "de6b1a26-a928-4879-b5bd-6ede5bc10ca8",
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
    },
    {
      "id": "8b60ffdb-ed7e-4e73-9fa0-72bdee79bcde",
      "displayName": "SAS Industrial Project - China / SAS Final Assembly IT",
      "fullName": "SAS Final Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Frédéric Anquetil",
          "email": "Frederic.Anquetil@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Douglas Mitsuru Higa",
          "email": "Douglas.Higa@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Thomas Sahleström",
          "email": "thomas.sahlestrom@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Arthur Takaki",
          "email": "arthur.takaki@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pallavi Shrotri",
          "email": "pallavi.shrotri@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pekka Palonen",
          "email": "pekka.palonen@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-08-18",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-08-18",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "a3373dc8-8f5d-4150-976f-346e7fc7a354",
        "displayName": "A. Manage and Develop Enterprise",
        "description": "Ability to manage the overall enterprise in the lifecycle - from settting direction, transform, operate and monitor enterprise.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2022-06-20"
            },
            {
              "phase": "phaseIn",
              "startDate": "2022-07-01"
            },
            {
              "phase": "active",
              "startDate": "2022-10-05"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "0f4bac7a-da21-4bdc-bc2d-e4363af4b1fb",
        "displayName": "Product development / R&D Process / Embedded System process",
        "description": "Development of embedded systems in our solutions",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2000-01-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2000-01-01"
            },
            {
              "phase": "active",
              "startDate": "2000-01-01"
            },
            {
              "phase": "endOfLife",
              "startDate": "2100-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "e2751da9-584a-4b7e-ad5e-30f4fdbb3106",
        "displayName": "Product development / R&D Process / Embedded System process / 08 Production",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "bca81833-6e88-49c5-8b55-85d074410e32",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUB - Network & E2E Services / IUBT - System Development Tools & Techniques",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-12-27"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "19ac912d-97d9-46fb-8d62-74f0e4353c43",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EED - Software Development System / EEDI - Information Architecture and Tool Chain for Embedded Systems / EEDIX - Software Factory Definition & Digital thread",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-08-25"
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
        "id": "7eb6edb9-d718-4b62-80f0-a3e9d5203ccf",
        "description": null,
        "displayName": "Populator_Embedded Linked Data Enablement, Populator - Gitlab",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ebe3bfe3-4182-4aa1-8a26-525e3e8dad8c",
        "description": null,
        "displayName": "WAM_Gitlab - https://gitlab.scania.com -  https://gitlab.scania.com",
        "lifecycle": null,
        "tags": [
          "Global_SAML"
        ]
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "829b9251-6b70-4403-86df-01b4d2de6fbd",
          "displayName": "Amazon Web Services AWS - Ireland",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "7cc61bcb-93d5-4552-a9f3-d6ec0f99419b",
          "displayName": "Amazon Web Services Relational Database Service",
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
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCcompleted",
    "ExportControlOfAppl": "OK",
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