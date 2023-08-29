export default {
  "completion": {
    "percentage": 59,
    "ChinaReadiness": 17,
    "EnterpriseGuardrails": 50,
    "businessSupport": 46,
    "dataManagement": 38,
    "dependencies": 100,
    "information": 42,
    "projects": 100,
    "robots": 100,
    "sourcing": 38
  },
  "subscriptions": [
    {
      "firstName": "Eder",
      "lastName": "Silva",
      "displayName": "Eder Silva",
      "email": "Eder.Silva@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Malaiswamy",
      "lastName": "Kannan",
      "displayName": "Malaiswamy Kannan",
      "email": "malaiswamy.k@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Grethe",
      "lastName": "Hallberg",
      "displayName": "Grethe Hallberg",
      "email": "grethe.hallberg@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Katarina",
      "lastName": "Stensson",
      "displayName": "Katarina Stensson",
      "email": "katarina.stensson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Nikolaos",
      "lastName": "Syrmakesis",
      "displayName": "Nikolaos Syrmakesis",
      "email": "nikolaos.syrmakesis@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Fredrik",
      "lastName": "Sunnerstedt",
      "displayName": "Fredrik Sunnerstedt",
      "email": "fredrik.sunnerstedt@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "FRAS (internal)",
    "description": "FRAS internal (Follow up Report Administration System) contains: FRAS corporate - to receive, answer and store failure reports, helpdesk questions and to support issue management.\n\nFRAS is used for quality assurance within the entirety of Scania to ensure that we follow up on quality deviations in order to deliver high quality products.",
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
    "parent": [],
    "children": [
      {
        "id": "85248901-cf9f-440a-bc49-0e6dff6e0d8e",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Body Builder Manual Quality Assurance.",
        "displayName": "FRAS (internal) / BBM-QA",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "85a1ce93-2f8d-4238-a1a1-8911efbe2289",
        "activeFrom": null,
        "activeUntil": null,
        "description": "This variant holds all of the external applications within FRAS system such as:* Distributor FRAS extended - Distributor FRAS Extended is a administration tool for handling quality deviations and technical, pre-sales, part commercial questions between Dealer / Distributor / Scania CV AB * Dealer FRAS - for handling quality deviations and technical, pre-sales and part commercial questions from Dealer to Distributor * Bodybuilder FRAS - for handling quality deviations from our bodybuilders.",
        "displayName": "FRAS (internal) / FRAS (external)",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "c69d2f26-39d6-48a8-8d00-2c45457b11c6",
      "displayName": "Marking of Common Parts",
      "fullName": "Marking of Common Parts",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Magnus Nilsson",
          "email": "magnus.y.nilsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Cecilia Pencz Hilborn",
          "email": "cecilia.hilborn@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "60f5a164-1ba6-43dd-a00f-a4837e4bcd75",
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
      "id": "a2c42d9f-07a2-40a7-9740-82dfdfe1cb0c",
      "displayName": "SAS Industrial Project - China / China CAB Assembly IT",
      "fullName": "China CAB Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-04-01"
          },
          {
            "phase": "active",
            "startDate": "2023-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "67db312f-6674-4395-b2cd-1371f3da5315",
      "displayName": "SAS Industrial Project - China / China RnD PrIT",
      "fullName": "China RnD PrIT",
      "tags": [
        "China affected"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Erik Eriksson",
          "email": "erik.x.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcus Gustafsson",
          "email": "marcus_x.gustafsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "c89a0101-a814-41a4-bece-b5ea4b4c0900",
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
    },
    {
      "id": "1fc4de49-0d33-444c-aa77-66070edb1b14",
      "displayName": "UNECE / Cyber Security Management System (CSMS)",
      "fullName": "Cyber Security Management System (CSMS)",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Ioannis Tzioumakas",
          "email": "ioannis.tzioumakas@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2021-05-27",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2022-05-27",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [],
    "processes": [
      {
        "id": "836b1a7a-1011-48a7-ae3b-35aff6ad3694",
        "displayName": "Order to delivery / Production Processes / Production Support Processes / Quality Control",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "c4d765ec-e68a-45ab-a8b8-be296ffff51f",
        "displayName": "Product development / R&D Process / Embedded System process / 10 Deviations",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "1a205f98-1471-47e2-87fb-fce14d936844",
        "displayName": "Product development / R&D Process / Embedded System process / 11 Update",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "8c49f2a7-958f-498e-bab3-3e54b457c364",
        "displayName": "Product development / R&D Process / R&D Methods / TRATON R&D Collaboration Process / TRATON Failure Management",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "1544a5df-a909-4c6b-bfda-17ad7332b66e",
        "displayName": "Scania - Scania CV AB",
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
        "id": "43f02d2a-1797-43b8-8217-871ace195870",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRE - Collaboration / IREC - FRAS",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "b8e25aad-1c3c-4d4f-bb15-0c225815e06f",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production / MA - Scania Production Angers SAS",
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
        "id": "aa2b5483-c783-4f50-9cf1-8ab1d83c8d0c",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / O - Logistics / ON - Logistics Centre Netherlands",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-04"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "c81c4fbc-cb5d-4e9f-85f3-6c2c1905007d",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EM - Modular Solutions / EMV - Vehicle Cost / EMVP - Product Owner sub processer i PD Processen",
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
      },
      {
        "id": "02ec8762-9612-4bc3-862c-9b096d904257",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN2 - Capacity, Cost & Risk Management​",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-01"
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
    "interfaceConsume": [
      {
        "id": "989b98d9-a9fc-4250-9929-412581109fc6",
        "description": "eSCR creates PCR in FRAS for supplier suggested product improvements",
        "displayName": "eQ2_eQ2 eSCR - PCR to FRAS",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "f2a6e8f8-7dc9-48c4-a2fe-fa09fd2f84f3",
        "description": "Dealer FRAS report API",
        "displayName": "FRAS (internal) / BBM-QA_DealerFRASReport IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "62806f2a-c05b-46b1-841e-7b6ba86665d1",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASExternalAuth IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "b7d0524b-2391-4108-8799-7778171245d0",
          "displayName": "BMC Software Action Request System 19.08",
          "category": "software",
          "description": "BMC Remedy Action Request System is a professional development environment that leverages the recommendations of the IT Infrastructure Library (ITIL) and provides a foundation for Business Service Management (BSM) solutions. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-08-22"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-08-22"
              },
              {
                "phase": "endOfLife",
                "startDate": "2024-08-22"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "eab1e684-5dad-435d-82ff-349cd6b07662",
          "displayName": "Microsoft SQL Server 2012 SP4",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.\n",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2017-10-05"
              },
              {
                "phase": "endOfLife",
                "startDate": "2022-07-12"
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
      "service": [
        {
          "id": "35b8b1c5-999f-422c-b74a-20d87978ab2e",
          "displayName": "Amazon.com / AWS Corretto 11.0",
          "category": "service",
          "description": "Amazon Corretto is a no-cost, multiplatform, production-ready distribution of the Open Java Development Kit (OpenJDK). Amazon runs Corretto internally on thousands of production services and Corretto is certified as compatible with the Java SE standard.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-03-14"
              },
              {
                "phase": "phaseOut",
                "startDate": "2027-07-31"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-09-30"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": "NotOK",
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