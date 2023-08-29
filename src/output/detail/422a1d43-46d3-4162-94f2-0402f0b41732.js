export default {
  "completion": {
    "percentage": 73,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 65,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 53
  },
  "subscriptions": [
    {
      "firstName": "Soile",
      "lastName": "Lundqvist",
      "displayName": "Soile Lundqvist",
      "email": "soile.lundqvist@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Radomir",
      "lastName": "Zuniga",
      "displayName": "Radomir Zuniga",
      "email": "radomir.zuniga@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Kaltura VPaaS",
    "description": "Video platform",
    "lifecycle": {
      "asString": "plan",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2021-09-13",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Marketing / Event Management ; Office / Screen and Video Capture ; Collaboration & Productivity / Video Conferencing",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "011076e8-c80c-491c-ac0f-415988b9a9a0",
      "displayName": "Learning landscape",
      "fullName": "Learning landscape",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2019-12-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2020-01-01"
          },
          {
            "phase": "active",
            "startDate": "2020-02-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2020-05-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "André Hansson",
          "email": "andre.hansson@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "administrativeService",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-09-13",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-09-13",
              "milestoneId": null
            }
          ]
        },
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
        "id": "965306e5-c43d-4f6f-95e9-f17477fe194b",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBA - Service Flows / IBAD - User Centric",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-03-04"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "996addd7-c9eb-43b4-934b-6c28102b6468",
        "displayName": "Scania - Scania CV AB / P_HR - People &  Culture / HC - Scania Academy / HCA - Learning Operations / HCAA - Digital Learning & Production",
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
    "objects": [
      {
        "id": "6799a641-e3cf-44a1-91d6-0a7203295c6e",
        "description": "Learning object represents any educational and knowledge component, digital or non-digital, that may be used for learning, education or training. A learning object represents in other words a reusable pedagogical chunk and consists of a collection of content items, practice items, and assessment items (as a Quiz) that are combined based on a single learning objective.  Key characteristics of a learning object are \t Small units of learning (minutes instead of hours)  \t Self-contained, each object can be taken independently  \t Reusable in multiple situations  \t Can be aggregated for example to more traditional courses  \t Metadata tagged for search and reuse",
        "displayName": "Human Resources Domain / Competence Development Entity / Learning Object",
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
      "software": [
        {
          "id": "e8cbcacf-da72-434a-b01c-a08b581595dc",
          "displayName": "Kaltura Kaltura VPaaS",
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
    "ssoProvider": "Azure AD",
    "statusSSO": "supported"
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