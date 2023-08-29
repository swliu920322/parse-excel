export default {
  "completion": {
    "percentage": 16,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 23,
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
    }
  ],
  "information": {
    "name": "Technia Document Management CHN",
    "description": "User can work with documents in many apps. Improved usability and efficiency you can raise by configuring TVC File Manager at system level. User can use dashboard view for easier navigation to all owned documents. Document details can be viewed and modified in 3DDashboard Helium page.",
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
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "e47a05de-0196-4d6c-be09-5ede2e4bea35",
        "displayName": "Technia Document Management 2022.4",
        "description": "User can work with documents in many apps. Improved usability and efficiency you can raise by configuring TVC File Manager at system level. User can use dashboard view for easier navigation to all owned documents. Document details can be viewed and modified in 3DDashboard Helium page.",
        "type": "Application",
        "tags": [
          "Not China affected"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [],
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
          "id": "8dffdd5c-c103-4498-8f39-8c1c6f952195",
          "displayName": "Technia Value Components",
          "category": "software",
          "description": "TECHNIA Value Components (TVC) allow you to leverage a rich set of configurable UI components for 3DSPACE, 3DDASHBOARD and standalone applications to configure user views directly in the User Interface. The Components are process-independent and can be configured to present any 3DEXPERIENCE data the way you’d like it to be presented, without carrying the added cost and weight of custom code. For a quick, low risk implementation, our ‘ready to use’ UI configurations (Launchpads) are built on best practices to optimise many standard processes in 3DSPACE and 3DDASHBOARD.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2021-09-28"
              },
              {
                "phase": "active",
                "startDate": "2021-12-06"
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