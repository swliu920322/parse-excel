export default {
  "completion": {
    "percentage": 71,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 54,
    "dataManagement": 50,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 37
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "jessica.robertsson@scania.com",
      "email": "jessica.robertsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Danilo",
      "lastName": "Oliveira",
      "displayName": "Danilo Oliveira",
      "email": "danilo.oliveira@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Ulrika",
      "lastName": "Widén",
      "displayName": "Ulrika Widén",
      "email": "ulrika.widen@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Financial Services Portal",
    "description": "Rapporteringsportal.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2021-02-25",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2026-02-25",
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
      "functionalSuitability": "appropriate",
      "iramNecessary": "no",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "75f0641b-810b-4fe6-93fa-3fab7e5d04f4",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Services Contract Management / Financial Services Contract Management",
        "description": "Ability to manage the lifecycle of financial service contracts, e.g. leasing contracts.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-08"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "e8de1dbb-bdae-4f49-b264-d0f0f2063b2a",
        "displayName": "Supporting processes / Finance Process / Financial Services",
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
      }
    ],
    "organisations": [
      {
        "id": "953751fc-331d-41a5-9563-292a9401f740",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZD - Financial services IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "ca2c980b-0cf0-4af4-a133-fca5a6b66782",
        "displayName": "Scania - Scania CV AB / P_FB - Finance and Business Control / F - Financial Services",
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
        "id": "98896fc1-2ffe-4b16-860d-dca3a6bdddc6",
        "description": "Ledger & Accounts domain manage financial information about Scania business units to different kind of users, such as managers, shareholders and other interested parties. There are ledgers for actual values, for forecasts and for budgets.",
        "displayName": "Financial Control Domain / Ledger and Account Entity",
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
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "019a52fd-99a7-42d0-8c14-788a3cc7cdbd",
          "displayName": "Microsoft Internet Information Services 10.0",
          "category": "software",
          "description": "Internet Information Services (IIS) for Windows Server is a flexible, secure and manageable Web server for hosting anything on the Web. From media streaming to web applications, IIS's scalable and open architecture is ready to handle the most demanding tasks.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-10-15"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-01-11"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-01-12"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "4086f6f2-3d13-498a-90a0-4368c343c2ff",
          "displayName": "Microsoft SQL Server 2016 SP2",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2018-04-24"
              },
              {
                "phase": "phaseOut",
                "startDate": "2021-07-13"
              },
              {
                "phase": "endOfLife",
                "startDate": "2022-10-11"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "4e765adc-887e-482c-8023-3911e6ead700",
          "displayName": "Microsoft Windows Server Standard 2016",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-10-15"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-01-11"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-01-12"
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