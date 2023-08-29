export default {
  "completion": {
    "percentage": 26,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Conny",
      "lastName": "Örtlund",
      "displayName": "Conny Örtlund",
      "email": "conny.ortlund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "CDAC",
    "description": "Cloud managed Windows platform",
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
          "startDate": "2020-02-19",
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
              "startDate": "2022-12-12",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-12-12",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "875532c3-30d6-4d24-8d8e-b709710d0a62",
        "displayName": "P. Information Technology and Data Management / IT Operations Management / IT Service Management",
        "description": "The ability to manage IT Service Support and IT Service Delivery",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-17"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "4bdf2c32-f5dc-4889-b75c-90be667e9c38",
        "displayName": "Supporting processes / IT",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "27491b3f-8936-4527-a491-da6aa7832f5e",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBD - Business & Portfolio",
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "6bed464b-7f88-4a2a-9993-2298fdc1c75f",
          "displayName": "Microsoft InTune",
          "category": "software",
          "description": "Microsoft Intune (formerly Windows Intune) is a Microsoft cloud-based management solution that provides for mobile device and operating system management.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2011-03-23"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "43d0f682-a902-4fb4-a070-89d9a544304f",
          "displayName": "Microsoft Windows Enterprise 10",
          "category": "software",
          "description": "Windows 10 is a series of operating systems developed by Microsoft and released as part of its Windows NT family of operating systems. Windows 10 was made available for download via MSDN and Technet, and as a free upgrade for retail copies of Windows 8 and Windows 8.1 users via the Windows Store.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2015-06-01"
              },
              {
                "phase": "active",
                "startDate": "2015-07-29"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-10-14"
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
    "ChinaRequirements": "IBD",
    "ChinaDesign": "IBD",
    "ChinaSourcing": "IBD",
    "ChinaPaying": "TTIB",
    "ChinaImplementation": "IBD",
    "Chinaverification": "IBD",
    "ChinaOperations": "IBD"
  }
}