export default {
  "completion": {
    "percentage": 52,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 69,
    "dataManagement": 75,
    "dependencies": 50,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 32
  },
  "subscriptions": [
    {
      "firstName": "Adam",
      "lastName": "Buszman",
      "displayName": "Adam Buszman",
      "email": "adam.buszman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Magnus",
      "lastName": "Nordlund",
      "displayName": "Magnus Nordlund",
      "email": "magnus.nordlund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Jan",
      "lastName": "Ålund",
      "displayName": "Jan Ålund",
      "email": "jan.alund@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Lars-Gunnar",
      "lastName": "Taube",
      "displayName": "Lars-Gunnar Taube",
      "email": "lars-gunnar.taube@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    }
  ],
  "information": {
    "name": "Product Information - PRI",
    "description": "Registration system, designed to create and document application instances, client software’s and infrastructure services. Mainly used by used by IT.\nThe PRI is intended to provide operational level of information, which is fundamental and crucial to secure daily business operation and deliver the best support to Scania.\n\n",
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
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "e4d3cf4d-a84d-4d38-9e84-816537969aa7",
        "displayName": "ADMWEB",
        "description": "ADMWEB is Configuration Management System (CMS) platform, developed by Scania IT. \nADMWEB contains information about infrastructure components collected from more than 30 data sources. Almost, all processing of data is fully automated and present in different solutions.\n\nADMWEB  populates Configuration Items (CI´s)  and their relations to  the CMDB in Scania Now. For instance;  applications, servers, databases, network devices etc.",
        "type": "Application",
        "tags": [
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
      "id": "ff9002bb-2a0f-4b6a-bbf4-fe3853d590f3",
      "displayName": "Order flow of AD groups in ScaniaNow",
      "fullName": "Order flow of AD groups in ScaniaNow",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-29"
          },
          {
            "phase": "active",
            "startDate": "2022-11-16"
          },
          {
            "phase": "endOfLife",
            "startDate": "2023-02-28"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Rickard Ångman",
          "email": "rickard.angman@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jimmy Nilsson",
          "email": "jimmy.nilsson@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "a9b52af0-4746-4988-bffc-6ef75ed969f8",
      "displayName": "Phase out RHEL 6",
      "fullName": "Phase out RHEL 6",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2021-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2021-04-25"
          },
          {
            "phase": "active",
            "startDate": "2021-04-25"
          },
          {
            "phase": "endOfLife",
            "startDate": "2022-04-30"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Christoffer Hedström",
          "email": "christoffer.hedstrom@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Thomas Öberg",
          "email": "thomas.x.oberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sudheer GV",
          "email": "sudheer.gv@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
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
        "id": "b3348690-d8f9-483e-98d2-c24f8c3d1896",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Development / Manage Enterprise Change Portfolio",
        "description": "The ability to identify enterprise improvement areas and bring forward ideas of inititives to be prioritized into portfolios, then managed and monitored securing deliveries towards target.\n\n",
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
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "10e7ce20-1feb-4edf-a652-eb4ee713c271",
        "displayName": "P. Information Technology and Data Management / IT Operations Management / Incident, Problem and Change Management",
        "description": "The ability to manage incidents, problems and changes in the IT Operation",
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
      },
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
        "id": "26602c70-c45c-4267-8e4f-597197ba1cfb",
        "displayName": "Scania - Scania CV AB / I - Scania IT",
        "usageType": "user",
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
        "id": "ab96c57d-1d05-4f21-8232-1af40e4e5eb3",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUA - Hosting Services / IUAM - Monitoring & Configuration",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-03"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "307d0d40-ccc2-429a-b5ce-e09289b16b7d",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
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
        "id": "1fbc71a2-fdef-410e-a6f1-0f1ab09717f4",
        "description": null,
        "displayName": "IT@Scania Domain",
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
    "interfaceConsume": [
      {
        "id": "75c6c808-8d97-4d2f-a31c-9911d595734a",
        "description": null,
        "displayName": "ADMWEB_Configuration Management System Database (CMDB)",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "16e906b3-c465-4a52-ac08-5925ad5d4902",
        "description": null,
        "displayName": "ALTO_Application Portfolio Information",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-03-19"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "498da9da-2a61-4822-baa5-0b4dcbe6b119",
        "description": null,
        "displayName": "ADMWEB / Product Information - PRI_Application Instance",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2b5916bf-daf1-40fd-8c3f-b08751906dbd",
        "description": null,
        "displayName": "ADMWEB / Product Information - PRI_Client Application",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5cc204e9-da96-417f-9945-148347106171",
        "description": null,
        "displayName": "ADMWEB / Product Information - PRI_Infrastructure Service Variant",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "7a858fb0-d8a7-4edb-a055-2ee1270057c3",
          "displayName": "mysql",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "e680282b-46ce-4e77-9eee-d53ad2b55bc6",
          "displayName": "Red Hat Enterprise Linux 7.0",
          "category": "software",
          "description": "Red Hat Enterprise Linux Server is an easy-to-administer, simple-to-control operating system that can be deployed on physical systems (Self-support, Standard, and Premium subscriptions), in the cloud (Standard and Premium subscriptions), or as a guest on the most widely available hypervisors (Standard and Premium subscriptions). It orchestrates the hardware resources for all basic computing requirements and includes support for all major hardware platforms and thousands of commercial and custom applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2013-12-11"
              },
              {
                "phase": "active",
                "startDate": "2014-06-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2015-03-05"
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