export default {
  "completion": {
    "percentage": 83,
    "ChinaReadiness": 51,
    "EnterpriseGuardrails": 100,
    "businessSupport": 74,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "lena.daudistel@scania.com",
      "email": "lena.daudistel@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Helena",
      "lastName": "Westman",
      "displayName": "Helena Westman",
      "email": "helena.westman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Sebastian",
      "lastName": "Sandh",
      "displayName": "Sebastian Sandh",
      "email": "Sebastian.Sandh@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Johan",
      "lastName": "Pettersson",
      "displayName": "Johan Pettersson",
      "email": "johan.y.pettersson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Paul",
      "lastName": "Dmello",
      "displayName": "Paul Dmello",
      "email": "paul.dmello@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "APT",
    "description": "The APT (Assembly of Prototype Trucks) system is used by 5-10 users at Chassis in Södertälje. APT is used to generate five different reports/lists with parts information. The lists are then being used to support the assembly of prototype trucks.  APT is a web application developed in .net. It uses information from Delmia (digital factory) and compares that information with the A-order from Mona and then complements with information from ECO, AI, EQ2 and Matris.\r\n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2013-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
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
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "d9a6538e-a959-48c6-b720-281622678253",
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "no",
      "lifecycle": [
        null,
        {
          "asString": "drpCompleted",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2023-03-06",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2024-03-06",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "a11a6fc9-96fa-4dad-9fe6-1c5e4600799b",
        "displayName": "F. Industrialization and On-Demand Release Management / Industrial Introduction Preparation / Assembly Preparation",
        "description": "Preparation of Component or Product Assembly to cater for changes due to new, changed or discontinued part/component/product and changes related to process or facilities.\nEg:\n* Assembly Standards &amp; Instructions preparation\n* Production sequence preparation\nAlso Global Production Preparation.\nIncluding Design Production Process; to develop new or improved production processes to deliver quality products within required lead time.\nIncluding Deploy Production Process; to prepare production facilities and equipment to execute new or modified process. Create training if needed.\nIncluding On-Demand Release to Production and Ramp Up; to ensure capability through training and modification of facilities to run new process and tools and initiate production ramp up.\n",
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
        "id": "cb82002d-2bdc-4860-a5a5-e6ee1ccc18d9",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing",
        "description": "Control & execute transformation of raw materials into product in accordance with the production schedule. Including production quality assurance.",
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
          "MilkyWay area 18. Production & Logistics"
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
      },
      {
        "id": "37eef9cf-7696-4ed4-8958-d8f3cd5f767b",
        "displayName": "Order to delivery / Production Processes / Preparation processes / Logistics preparation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "622ae083-a8b9-47c5-b7a7-64d26ea14e3e",
        "displayName": "Customers",
        "usageType": null,
        "description": "This Organisation Fact sheet represents stakeholders within end customers. End customers are such that use or consume Scania products & services, e.g. freight carriers or bus & coach operators.",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
        ]
      },
      {
        "id": "cc8cc313-52e4-4977-96a4-24d27d96f443",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / ING - Powertrain & Industrial Control IT / INGD - Industrial Control IT",
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
        "id": "dc20552c-8a9d-4d0f-9482-8830055f0367",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production / MP - Production Introduction / MPP - Product Introduction Truck",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "927a8315-a4ac-4cf3-8b35-12f6f611dc33",
        "description": null,
        "displayName": "Change Order",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2023-03-29"
            }
          ]
        },
        "tags": [
          "Not decided as common information object! Use CIM objects instead! Need to be merged into CIM"
        ]
      },
      {
        "id": "5720ada3-9497-4bc3-b2d9-7ff546123328",
        "description": null,
        "displayName": "Part Information",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2023-03-29"
            }
          ]
        },
        "tags": [
          "Not decided as common information object! Use CIM objects instead! Need to be merged into CIM"
        ]
      },
      {
        "id": "710456df-97dd-47b6-b356-263c4103f4e9",
        "description": "Uniting time-related main level for one or several Purchase Order Lines. Each order is a business interaction between Scania and a supplier party, which offer sourcing products. Represents the buying party's documented commitment to purchase a product from a supplier in accordance with the specified criteria in order to meet the business needs of input products for production and other operations.  Various parties and part of the purchasing business - like factory, distributor, dealer and the company's other own business units - can act as a buying party from other parties who have equivalent roles as well as from the company's external suppliers.",
        "displayName": "Purchase & Agreement Domain / Purchase Order Entity / Purchase Order",
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
        "id": "5fec61c0-70cd-4d77-b21f-9b7db42394e0",
        "description": null,
        "displayName": "Specification / V-Specification",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2023-03-29"
            }
          ]
        },
        "tags": [
          "Not decided as common information object! Use CIM objects instead! Need to be merged into CIM"
        ]
      }
    ],
    "interfaceConsume": [
      {
        "id": "e850e0f7-d902-44da-a6d1-4f6c8380f102",
        "description": null,
        "displayName": "Delmia Truck specification",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c2c53bb4-291d-43c4-bcd7-3ece5782a5b2",
        "description": null,
        "displayName": "eQ2_eQ2 ePPAP",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "750b4c2a-7842-46c0-aac9-e91ab2a12325",
        "description": null,
        "displayName": "Matris Purchasing Order",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cb38959f-7e17-48ec-ab06-c87197dbebb6",
        "description": null,
        "displayName": "MIRACLE_MONA Assembly Part information",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "aa0d21c1-68d1-403b-9a68-43058c6bab1b",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_MONA Assembly A-order",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cd3c8b0d-5c09-407c-9e5d-e367d17a6604",
        "description": null,
        "displayName": "OAS Platform / OAS_OAS Part Information",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "8c8944e4-8951-4f0d-943f-47bdd9a84ec4",
          "displayName": "BMC Software Control-M 9.0.20",
          "category": "software",
          "description": "Control-M simplifies application and data workflow orchestration on premises or as a service in the cloud . It makes it easy to build, define, schedule, manage, and monitor production workflows, ensuring visibility, reliability, and improving SLAs.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-07-24"
              },
              {
                "phase": "phaseOut",
                "startDate": "2023-07-23"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-07-23"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "3c2a0ade-e24b-4220-9d41-b92feaa65122",
          "displayName": "Microsoft .NET Framework 1.0",
          "category": "software",
          "description": ".NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. The .NET Framework is the original implementation of .NET. It supports running websites, services, desktop apps, and more on Windows.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2001-12-01"
              },
              {
                "phase": "active",
                "startDate": "2002-02-13"
              },
              {
                "phase": "endOfLife",
                "startDate": "2003-03-19"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
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
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "MP",
    "ChinaDesign": "INGD (LTI)",
    "ChinaSourcing": "INGD (LTI)",
    "ChinaPaying": "VEI",
    "ChinaImplementation": "INGD (LTI)",
    "Chinaverification": "MP",
    "ChinaOperations": ""
  }
}