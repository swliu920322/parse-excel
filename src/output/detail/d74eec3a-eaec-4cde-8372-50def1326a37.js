export default {
  "completion": {
    "percentage": 76,
    "ChinaReadiness": 67,
    "EnterpriseGuardrails": 50,
    "businessSupport": 48,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 36
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
      "firstName": "Johan",
      "lastName": "Öberg",
      "displayName": "Johan Öberg",
      "email": "johan.x.oberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "EBBA CMBPP",
    "description": "Paintshop China",
    "lifecycle": {
      "asString": "plan",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2023-03-07",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "MES",
    "predecessor": [],
    "successor": []
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
      "id": "ae56cd4f-ae09-4bc2-a128-174adf054dc8",
      "displayName": "Blue print Cab Paint",
      "fullName": "Blue print Cab Paint",
      "tags": [],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2023-03-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-03-31"
          },
          {
            "phase": "endOfLife",
            "startDate": "2024-06-30"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Martina Pettersson",
          "email": "martina.pettersson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Johan Persson",
          "email": "johan.y.persson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jimmy Olofsson",
          "email": "jimmy.olofsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Mikael Rothsten",
          "email": "mikael.rothsten@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "9ac28974-b8d6-4676-8da2-97c3d0139c3b",
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
        },
        {
          "displayName": "Enno Grüning",
          "email": "enno.gruning@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": null,
      "functionalSuitability": null,
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "745e49ba-4291-419c-b83f-68577a478047",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Assembly Execution",
        "description": "Ability to execute activities: \n−for assembly and sub-assemblies of components and final assembly of product for delivery to customer. Including different joining techniques; screwing, welding, riveting, bonding etc.\n−for other assembly tasks such as painting, filling and lubrication of the product \n−for data configuration of electronic control units (ECU;s)\n−all activities are done according to product specification and prepared production description\n",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-11"
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
        "id": "605c2e5a-d61b-4843-85ba-e756e18d31c1",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / VE - Global Industrial Development / VEI - Industrial IT / TEID - Digital Factory",
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
          "id": "621fb5e1-d8e5-449f-a8d2-9f10e45d9e1e",
          "displayName": "Microsoft SQL Server Enterprise 2019",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2019-08-21"
              },
              {
                "phase": "active",
                "startDate": "2019-11-04"
              },
              {
                "phase": "phaseOut",
                "startDate": "2025-02-28"
              },
              {
                "phase": "endOfLife",
                "startDate": "2030-01-08"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
          ]
        },
        {
          "id": "32962229-0e42-49ac-94cd-5e8fe48f3fb5",
          "displayName": "Microsoft Windows Server Standard 2019",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2018-11-13"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-01-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2029-01-09"
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
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "GapsFound",
    "ExportControlOfAppl": "OK",
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCHB",
    "ChinaDesign": "INFF/INFI/(TTP)",
    "ChinaSourcing": "INFF/INFI",
    "ChinaPaying": "VEI",
    "ChinaImplementation": "INFF/INFI/TTPC",
    "Chinaverification": "TCHB/INFF/INFI",
    "ChinaOperations": "TTPC"
  }
}