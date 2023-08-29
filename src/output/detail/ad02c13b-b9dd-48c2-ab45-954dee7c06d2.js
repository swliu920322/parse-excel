export default {
  "completion": {
    "percentage": 70,
    "ChinaReadiness": 17,
    "EnterpriseGuardrails": 50,
    "businessSupport": 45,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 37
  },
  "subscriptions": [
    {
      "firstName": "Carl-Henrik",
      "lastName": "Hilborn",
      "displayName": "Carl-Henrik Hilborn",
      "email": "carl-henrik.hilborn@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Andreas",
      "lastName": "Holmgren",
      "displayName": "Andreas Holmgren",
      "email": "andreas.holmgren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "EBBA CoE",
    "description": "Development environment for EBBA",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "MES",
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "418930d5-7d53-4848-8b2f-478121d73502",
        "displayName": "EBBA Parent",
        "description": "Umbrella for all EBBA PRU's. This is a virtual application.",
        "type": "Application",
        "tags": [
          "Critical",
          "Manufacturing",
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "9389cc95-70e1-472b-9cad-86c78210a9ec",
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
      "businessCriticality": "administrativeService",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [
      {
        "id": "ce41924b-2e77-4a67-b82e-32668035b5bb",
        "displayName": "Order to delivery",
        "description": "Owner: Martin Lyckström",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      }
    ],
    "organisations": [
      {
        "id": "ca4f3b64-ca64-49e4-9618-525aff8d5df5",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFC - EBBA CoE",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "fe23810d-40cd-456a-a9d4-cd726fad19a2",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / VE - Global Industrial Development / VEI - Industrial IT",
        "usageType": "owner",
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
          "id": "c96085e3-c1a3-408d-b56a-fb5cae1b65aa",
          "displayName": "Microsoft SQL Server 2012 Standard",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2011-11-17"
              },
              {
                "phase": "active",
                "startDate": "2012-05-20"
              },
              {
                "phase": "endOfLife",
                "startDate": "2014-01-14"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "74eca0e8-be18-4169-a226-53657572a2b9",
          "displayName": "Microsoft Windows Server Standard 2012 R2",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2013-11-25"
              },
              {
                "phase": "phaseOut",
                "startDate": "2018-10-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2023-10-10"
              }
            ]
          },
          "tags": [
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
    "ChinaITlegalCompliance": "GapsFound",
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