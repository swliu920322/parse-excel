export default {
  "completion": {
    "percentage": 26,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 54,
    "dataManagement": 13,
    "dependencies": 0,
    "information": 33,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Sukeerth Kumar",
      "lastName": "Mandadhi Rajendra",
      "displayName": "Sukeerth Kumar Mandadhi Rajendra",
      "email": "sukeerth-kumar.mandadhi.rajendra@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Johan",
      "lastName": "Sundblad",
      "displayName": "Johan Sundblad",
      "email": "johan.sundblad@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Jörgen",
      "lastName": "Andersson",
      "displayName": "Jörgen Andersson",
      "email": "jorgen_l.andersson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "7-zip",
    "description": "used for zipping and unzipping folders",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2023-05-15",
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
      "businessCriticality": "administrativeService",
      "functionalSuitability": "unreasonable",
      "iramNecessary": "no",
      "lifecycle": [
        null,
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
    "objects": [
      {
        "id": "0eac54b3-5881-46d5-9f7e-0b53f9adc88e",
        "description": "Generic level to describe a Business Application and system, which may occur on one or more Business Application Instance.",
        "displayName": "IT@Scania Domain / IT Business Application Entity / Business Application",
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
          "id": "43e7bf86-8412-4899-8ea9-1b84c6e95012",
          "displayName": "7zip",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
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
    "ChinaRequirements": "IBD",
    "ChinaDesign": "IBD",
    "ChinaSourcing": "IBD/TTIO",
    "ChinaPaying": "IBD/TTIO",
    "ChinaImplementation": "IBD",
    "Chinaverification": "IBD/TTIO",
    "ChinaOperations": "IBD"
  }
}