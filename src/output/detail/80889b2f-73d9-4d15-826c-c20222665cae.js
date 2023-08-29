export default {
  "completion": {
    "percentage": 51,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 44,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 0,
    "sourcing": 27
  },
  "subscriptions": [
    {
      "firstName": "Emanuel",
      "lastName": "Eklund",
      "displayName": "Emanuel Eklund",
      "email": "Emanuel.Eklund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    }
  ],
  "information": {
    "name": "SFE",
    "description": "Customized Framemaker at Scania. Updated by 4 (four) releases a year through Software Center. Releases are named year.n such as 2018.4 and 2019.1 and so on",
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
          "startDate": "2020-03-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2025-01-01",
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
      "id": "00a98301-722a-4b1a-9520-7fc110ee07cf",
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
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "insufficient",
      "iramNecessary": "no",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [
      {
        "id": "3c9a0b44-190f-4180-8309-1fbd1a9833ba",
        "displayName": "Product development",
        "description": "Owner: Jan Palmér, chairman PD process board",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      }
    ],
    "organisations": [
      {
        "id": "c0b7c5fd-406a-4d01-bd7a-27425edecd7a",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYS - Vehicle Service Information / EYSE - Projects, Language and Internal Systems / EYSEC - IT Coordination and Architecture Internal Systems",
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
          "id": "b9dd4ae5-ed8d-4ffc-a638-1628b0ee453d",
          "displayName": "Adobe FrameMaker 2019",
          "category": "software",
          "description": "Adobe FrameMaker is a complete content authoring solution to support complex authoring environments and publishing needs.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-08-22"
              },
              {
                "phase": "endOfLife",
                "startDate": "2024-08-22"
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