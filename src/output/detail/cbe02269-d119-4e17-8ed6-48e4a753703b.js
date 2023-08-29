export default {
  "completion": {
    "percentage": 26,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Magnus",
      "lastName": "Nerman",
      "displayName": "Magnus Nerman",
      "email": "magnus.nerman@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Mollie",
      "lastName": "Wejdenstolpe",
      "displayName": "Mollie Wejdenstolpe",
      "email": "mollie.wejdenstolpe@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Mikael",
      "lastName": "Eriksson",
      "displayName": "Mikael Eriksson",
      "email": "mikael_x.eriksson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Madhu",
      "lastName": "Cheluvaraju",
      "displayName": "Madhu Cheluvaraju",
      "email": "madhu.cheluvaraju@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    }
  ],
  "information": {
    "name": "Light My Way CHN",
    "description": "Technia Light My Way is the Digital Adoption Solution (DAS) for the 3DEXPERIENCE platform. With the ambition to be recognized internationally as the best way to train and support your users on the 3DEXPERIENCE platform.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2023-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-05-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Construction Software / Construction Drawing Management Software",
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "29d09756-f328-4686-a12a-ee67dfed69c9",
        "displayName": "Light My Way",
        "description": "Technia Light My Way is the Digital Adoption Solution (DAS) for the 3DEXPERIENCE platform. With the ambition to be recognized internationally as the best way to train and support your users on the 3DEXPERIENCE platform.",
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
  "initiatives": [],
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
              "startDate": "2022-11-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-11-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "3332addf-b688-474c-bd6e-c20bfc06a801",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Development",
        "description": "The ability to develop new business opportunities, business processes and supporting solutions",
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
        "id": "b90c2ae4-b616-461d-890e-d8c5600a3d6e",
        "displayName": "Product development / R&D Process / R&D Methods / Product lifecycle management (PLM)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "e6b9ab09-e746-4329-aace-087c1d0ffd81",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRA - CAD & vPDM",
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
        "id": "a1bf20f5-1f9a-4dfe-9429-3558c773319a",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMD - CAD/vPDM",
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
          "id": "8eee0e19-3b91-4082-be57-c5b4b54b2417",
          "displayName": "Dassault Systemes 3DEXPERIENCE",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "4c092ca3-7233-40b2-83c0-6b3ec458d398",
          "displayName": "Technia Light My Way",
          "category": "software",
          "description": "Technia Light My Way is the Digital Adoption Solution (DAS) for the 3DEXPERIENCE platform. Facilitating continuous learning within the 3DEXPERIENCE platform, Light My Way guides users through custom tasks and functions based on their role and application state, ensuring they have up-to-the-minute guidance on best practices.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2022-10-01"
              },
              {
                "phase": "active",
                "startDate": "2022-12-09"
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