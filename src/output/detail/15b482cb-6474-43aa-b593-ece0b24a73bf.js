export default {
  "completion": {
    "percentage": 54,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 60,
    "dataManagement": 50,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Fredrik",
      "lastName": "Nyberg",
      "displayName": "Fredrik Nyberg",
      "email": "fredrik.nyberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Noetix",
    "description": "Noetix is a database schema in with Noetix views that enable FRESH to run Fresh reports with Orace eBS data with help of Noetix views from Noetix database schema.\n\nNoetix is a tool from supplier Magnitude",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2006-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2030-01-01",
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
        "id": "1c833d08-4448-4e74-a9a0-bb175d85f0c8",
        "displayName": "Oracle Financials (EBS)",
        "description": "Financial and accounting system.",
        "type": "Application",
        "tags": [
          "Critical",
          "PII",
          "China affected",
          "Maturity Level 2",
          "ICS External",
          "ICS internal"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "3ba44475-5092-4a2c-b5aa-7939909d1218",
      "displayName": "Finance Core (IEB)",
      "fullName": "Finance Core (IEB)",
      "tags": [],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2019-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2019-01-01"
          },
          {
            "phase": "active",
            "startDate": "2020-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2025-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anupam Goyal",
          "email": "anupam.goyal@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Antonia Sandoval",
          "email": "antonia.sandoval@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Fredrik Thunberg",
          "email": "fredrik.thunberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pia Pasanen",
          "email": "pia.pasanen@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2019-02-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2022-02-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "3126d041-8c69-41d3-b76b-b29b0a2c76ea",
        "displayName": "N. Financial Planning and Accounting / Financial Planning & Analytics",
        "description": "To be able to plan, steer and follow up the Scania group, from each reporting unit or even cost / profit center to the whole company group",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2021-10-12"
            },
            {
              "phase": "phaseIn",
              "startDate": "2021-10-17"
            },
            {
              "phase": "active",
              "startDate": "2021-10-17"
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
        "id": "6d2f3b48-0639-43ce-b653-d4876a616391",
        "displayName": "Supporting processes / Finance Process / Controlling & Analytics",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2020-01-22"
            },
            {
              "phase": "phaseIn",
              "startDate": "2020-01-22"
            },
            {
              "phase": "active",
              "startDate": "2020-01-22"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "95cdd73e-3580-49b0-b150-ec1c589bf696",
        "displayName": "Supporting processes / Finance Process / General Accounting / Bank Posting and Reconcilliation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "873ad69a-c562-4227-9952-dd4ffcd73440",
        "displayName": "Supporting processes / Finance Process / Investment / Intangible Assets (R&D)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "fe38e780-7c7d-4b0c-8892-b12b2805e717",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZA - Finance IT / IZAD - Corporate Control IT 1",
        "usageType": "ITmaintenance",
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
        "id": "b1a23cb8-a986-4ee5-9348-e11457aeb265",
        "displayName": "Scania - Scania CV AB / P_FB - Finance and Business Control / J - Corporate Control",
        "usageType": "owner",
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
      }
    ],
    "interfaceConsume": [],
    "interfaceProvide": [
      {
        "id": "c0776687-df9a-4646-b4ed-7912021086b2",
        "description": "Need further investigation",
        "displayName": "Oracle Financials (EBS) / Noetix_Noetix xyz",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "169c0e42-995a-417c-8205-0b53fcc8fa0c",
          "displayName": "Noetix 6.6",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "9d381c4f-0e4b-4223-bd41-cf00e8f50941",
          "displayName": "Oracle E-Business Suite 12.2.7",
          "category": "software",
          "description": "Oracle E-Business Suite supports today’s evolving business models, drives productivity, and meets the demands of the modern mobile user.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2017-09-01"
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
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCcompleted",
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