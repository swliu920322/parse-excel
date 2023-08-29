export default {
  "completion": {
    "percentage": 67,
    "ChinaReadiness": 37,
    "EnterpriseGuardrails": 100,
    "businessSupport": 69,
    "dataManagement": 75,
    "dependencies": 50,
    "information": 42,
    "projects": 100,
    "robots": 100,
    "sourcing": 32
  },
  "subscriptions": [
    {
      "firstName": "Karin",
      "lastName": "Winscher",
      "displayName": "Karin Winscher",
      "email": "karin.winscher@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Jan",
      "lastName": "Ålund",
      "displayName": "Jan Ålund",
      "email": "jan.alund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Lars-Gunnar",
      "lastName": "Taube",
      "displayName": "Lars-Gunnar Taube",
      "email": "lars-gunnar.taube@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
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
      "firstName": "Adam",
      "lastName": "Buszman",
      "displayName": "Adam Buszman",
      "email": "adam.buszman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "ADMWEB",
    "description": "ADMWEB is Configuration Management System (CMS) platform, developed by Scania IT. \nADMWEB contains information about infrastructure components collected from more than 30 data sources. Almost, all processing of data is fully automated and present in different solutions.\n\nADMWEB  populates Configuration Items (CI´s)  and their relations to  the CMDB in Scania Now. For instance;  applications, servers, databases, network devices etc.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2017-01-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "25ef6013-0261-4468-b135-94467c3f6a0e",
        "activeFrom": null,
        "activeUntil": null,
        "description": "System to registrate dependencies between application (ARP) and Infrastructure Release Plans (IRP) and Scania Technology Baseline (TB)",
        "displayName": "ADMWEB / ARP",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "9251c776-ddd8-4f5e-a557-ff969a6f267e",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Registration system, designed to create and document application instances, client software’s and infrastructure services. Mainly used by used by IT.\nThe PRI is intended to provide operational level of information, which is fundamental and crucial to secure daily business operation and deliver the best support to Scania.\n\n",
        "displayName": "ADMWEB / Product Information - PRI",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "b09b2739-9236-43a1-b39b-9324fadd5c8a",
      "displayName": "Establish Global IT Ecosystem",
      "fullName": "Establish Global IT Ecosystem",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2019-11-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2019-11-28"
          },
          {
            "phase": "active",
            "startDate": "2019-12-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2021-01-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Karin Winscher",
          "email": "karin.winscher@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Rickard Ångman",
          "email": "rickard.angman@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Eva-Lena Svensson",
          "email": "eva-lena.svensson@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "7212dd86-b168-44eb-bdfc-4879fac5c993",
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
    },
    {
      "id": "38e6184c-acab-4b18-a292-2e597d95505d",
      "displayName": "SAS Industrial Project - China / SAS Final Assembly IT",
      "fullName": "SAS Final Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Frédéric Anquetil",
          "email": "Frederic.Anquetil@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Douglas Mitsuru Higa",
          "email": "Douglas.Higa@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Thomas Sahleström",
          "email": "thomas.sahlestrom@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Arthur Takaki",
          "email": "arthur.takaki@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pallavi Shrotri",
          "email": "pallavi.shrotri@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pekka Palonen",
          "email": "pekka.palonen@scania.com",
          "type": "OBSERVER"
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "14078c47-0687-4224-82aa-0c3d2658aa3e",
        "description": "IT Product Component contains an easy traceable catalogue where all components are stored in order to make it configurable and effective to put together new IT Product. Each IT Product Component belong to either Labour,  Resources or Service.",
        "displayName": "IT@Scania Domain / IT Products & Services Entity / It Product Component",
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
      },
      {
        "id": "920448b2-f903-44f0-a7bd-ef2ad4a3ada9",
        "description": "IT Technology Component contains an easy traceable catalogue where all components are stored in order to make it configurable and effective to put together new IT Technology Asset. Each IT Technology Component belong to either Labour,  Resources or Service.",
        "displayName": "IT@Scania Domain / IT Technology Assets Entity / It Technology Component",
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
    "interfaceConsume": [
      {
        "id": "498da9da-2a61-4822-baa5-0b4dcbe6b119",
        "description": null,
        "displayName": "ADMWEB / Product Information - PRI_Application Instance",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "30bb7cd9-8365-456a-887d-800621810513",
        "description": null,
        "displayName": "ADMWEB_ADMWEB IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-23"
            }
          ]
        },
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
      },
      {
        "id": "15eb1aa7-02a3-48d8-9c00-82c3edb2e1b1",
        "description": null,
        "displayName": "IGA - Identity Governance & Administration_IGAOCM IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "bd65e001-3241-45be-8c84-d5245026c467",
        "description": null,
        "displayName": "JSON_API IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-10"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b97d6009-f7ab-4826-aa0a-6c7d801957b4",
        "description": "LITS Inventory is an API to manage the infrastructure inventory from LITS - BR",
        "displayName": "LITSInventory BR 1.1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b9d1f9e0-6b6b-48de-9edd-42fb03373f42",
        "description": null,
        "displayName": "SCT_Hardware assets",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a6caa426-c254-4ac3-8903-b91199e34be5",
        "description": "LITS Inventory is an API to manage the infrastructure inventory from LITS - BR",
        "displayName": "UMPA Infra Portal_LITSInventory BR 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-18"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "30bb7cd9-8365-456a-887d-800621810513",
        "description": null,
        "displayName": "ADMWEB_ADMWEB IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-23"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "83dd20af-21ac-43bc-a532-c2ef2a8afa15",
        "description": null,
        "displayName": "ADMWEB_Configuration Item (CI)",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "6f48922d-3d76-4d17-8235-6be232554ee1",
        "description": null,
        "displayName": "ADMWEB_Configuration Items Relations",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "75c6c808-8d97-4d2f-a31c-9911d595734a",
        "description": null,
        "displayName": "ADMWEB_Configuration Management System Database (CMDB)",
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
          "id": "c8f9db6e-522e-4c0f-85e3-b59ca5f489b3",
          "displayName": "Red Hat Enterprise Linux 8.6",
          "category": "software",
          "description": "Red Hat Enterprise Linux is an open-source operating system. It enables users to scale existing apps and roll out emerging technologies across bare-metal, virtual, container, and cloud environments.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2022-05-10"
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
    "ChinaRequirements": "IUAM",
    "ChinaDesign": "IUAM",
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "",
    "Chinaverification": "TTIU / IUAM",
    "ChinaOperations": "TTIU"
  }
}