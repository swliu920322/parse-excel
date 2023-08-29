export default {
  "completion": {
    "percentage": 66,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 59,
    "dataManagement": 75,
    "dependencies": 50,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 60
  },
  "subscriptions": [
    {
      "firstName": "Mats",
      "lastName": "Arnberg",
      "displayName": "Mats Arnberg",
      "email": "mats.arnberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Sandro",
      "lastName": "Dias",
      "displayName": "Sandro Dias",
      "email": "sandro.dias@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Liver",
      "lastName": "Toma",
      "displayName": "Liver Toma",
      "email": "liver.toma@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Sam",
      "lastName": "Bertels",
      "displayName": "Sam Bertels",
      "email": "sam.bertels@scania.com",
      "type": "OBSERVER",
      "role": [
        "Developer"
      ]
    },
    {
      "firstName": "Klaus",
      "lastName": "Bernpaintner",
      "displayName": "Klaus Bernpaintner",
      "email": "klaus.bernpaintner@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "MyCompass Matrix",
    "description": "MyCompass Matrix is an in-house built solution, with the purpose of meeting the Commercial companies’ requirements to have a better overview of their competencies and training activities. \nThe main advantage of the matrix is the graphical representation for Administrators and Managers, helping with course administration and giving a great overview.\n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2015-05-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2023-12-31",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2025-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": [
      {
        "id": "e1c35e88-af74-444d-88bf-751c38fd1137",
        "displayName": "MySuccess",
        "description": "Global application for HR, supporting global processes. ",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "c6d7c64a-9c72-4e61-95d7-c2f702132b2b",
        "displayName": "O. People and Talent Management / Learning & Competence Management",
        "description": "Provide a structure for improvement of personnel skills to meet future requirement. Supply standardised methods, concepts, tools, material and courses for all defined roles.",
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
        "tags": []
      },
      {
        "id": "b016ce90-15e8-4d97-9df3-496453695c19",
        "displayName": "O. People and Talent Management / Learning & Competence Management / Competence Planning",
        "description": "The ability to collecting and combining competency information and create a standardized approach to performance that's clear and accessible to everyone in the company.",
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
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "90980c91-68a0-4617-ba07-45346d379e1b",
        "displayName": "Supporting processes / Human Resources / Competence development",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "8a717126-debc-447e-9041-99bd585dce58",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZF - P&C IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "9e04accb-0891-4547-9ae3-7305e481924a",
        "displayName": "Scania - Scania CV AB / P_HR - People &  Culture",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-07-07"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "82a3a641-fe08-40e9-a59f-e7f7f0a325d3",
        "displayName": "Scania - Scania CV AB / P_HR - People &  Culture / HC - Scania Academy / HCA - Learning Operations / HCAB - Learning System & Coordination",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-08"
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
    "interfaceProvide": [
      {
        "id": "c708ac48-59aa-4510-b805-b7a75afa849a",
        "description": null,
        "displayName": "MyCompass Matrix_MCM - Https://mcm.scania.com",
        "lifecycle": null,
        "tags": []
      }
    ]
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