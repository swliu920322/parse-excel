export default {
  "completion": {
    "percentage": 71,
    "ChinaReadiness": 38,
    "EnterpriseGuardrails": 50,
    "businessSupport": 73,
    "dataManagement": 69,
    "dependencies": 100,
    "information": 58,
    "projects": 100,
    "robots": 100,
    "sourcing": 55
  },
  "subscriptions": [
    {
      "firstName": "Muhammad Asim",
      "lastName": "Feroze",
      "displayName": "Muhammad Asim Feroze",
      "email": "muhammad.asim.feroze@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Alejandro",
      "lastName": "Aedo",
      "displayName": "Alejandro Aedo",
      "email": "alejandro.aedo@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Developer"
      ]
    },
    {
      "firstName": "Daniel",
      "lastName": "Kastensson",
      "displayName": "Daniel Kastensson",
      "email": "daniel.kastensson@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Tahir",
      "lastName": "Qureshi",
      "displayName": "Tahir Qureshi",
      "email": "tahir.qureshi@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Jonas",
      "lastName": "Wångblad",
      "displayName": "Jonas Wångblad",
      "email": "jonas.wangblad@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Henrik",
      "lastName": "Linder",
      "displayName": "Henrik Linder",
      "email": "henrik.linder@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Maria",
      "lastName": "Nygren",
      "displayName": "Maria Nygren",
      "email": "Maria.Nygren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Richard",
      "lastName": "de Geus",
      "displayName": "Richard de Geus",
      "email": "richard.de.geus@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "Polarion RMS",
    "description": "Polarion® Application Lifecycle Management Solution\n\nThe tool is used to manage (specify, save, modify) specification of E/E systems being used at Scania. It is developed on top of Polarion RMS. ",
    "lifecycle": {
      "asString": "-",
      "phases": [
        {
          "phase": "active",
          "startDate": "2027-02-14",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "a62e9b9f-84c0-41b2-87a8-075afe6460da",
        "displayName": "Polarion",
        "description": "Polarion® Application Lifecycle Management Solution.\n\nTool used for writing requirement documentation. \nExample: TB, UF, FE, AE, FMEA, HARA, ECU SW ASSY, TARA. ",
        "type": "Application",
        "tags": [
          "R&D",
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": [
      {
        "id": "85dd2696-6bf8-4b39-8118-c2db8a7d6fb5",
        "activeFrom": null,
        "activeUntil": null,
        "description": null,
        "displayName": "Polarion / Polarion RMS / Polarion RMS - Adapter, Outbound data",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "c3dd1511-e68d-4e79-8ed1-f86c64d98068",
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
    },
    {
      "id": "13cd7304-7f04-467a-a613-3652d6d3fa94",
      "displayName": "UNECE",
      "fullName": "UNECE",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Daniel Kastensson",
          "email": "daniel.kastensson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Ioannis Tzioumakas",
          "email": "ioannis.tzioumakas@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "ee2922ac-d812-4ef0-ad83-8ba2cf68683c",
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "be1652f2-717b-41c6-9784-a691744231cb",
        "displayName": "E. Solution Development & Optimization / Demand Analysis and Requirement Management",
        "description": "Ability to manage requirements from different stakeholders. Ability to support processes and traceability of changes.",
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
        "id": "dac12085-5cf2-4fb6-953b-2179462e8fa7",
        "displayName": "E. Solution Development & Optimization / Evaluate, Compare, Verify and Validate Solutions / Test Management",
        "description": "Ability to develop and maintain test criterias and test environments  including change management. \n\n",
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
          "China affected",
          "MilkyWay area 5. Virtual and Physical Verification"
        ]
      },
      {
        "id": "098381b7-d25e-40e8-bf19-7cf55659c744",
        "displayName": "E. Solution Development & Optimization / Transport Solution Design / Design Embedded and Electronics Systems",
        "description": "Design and develop embedded systems, including software and hardware. Designing embedded & electrical schematics, cable harnesses including chassis installation, connectors and passive elements.",
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
        "id": "6229136a-be84-4eb6-a994-85fc1e75f4fe",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Solution Management / Solution Configuration Handling",
        "description": "The ability to configure the products and services to adapt to customer or market requirements, including publishing and validation. Example: Configuration adaptation or Configuration identification or Presentation material publishing or Configuration reuse or Configuration validation or Deviation handling (from configuration validation).\n\"Offer Customer Special Adaptation\"; Offer the opportunity for customer special solutions outside the range of the standard factory offering.\n\"Configure Value Proposition\"; Create a configured solution by analysing the customer need.\n\"Acknowledge Legal Conformity\"; Ensure and declare conformity to both industry regulations and government legislation that encompass the products or services  offered and delivered to a customer.\n\"Coordinate Specification with Delivery Partners\"; Coordinate proposed specification with bodywork supplier to enable feedback loop to ensure customer value.",
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
        "tags": []
      }
    ],
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
      },
      {
        "id": "0f4bac7a-da21-4bdc-bc2d-e4363af4b1fb",
        "displayName": "Product development / R&D Process / Embedded System process",
        "description": "Development of embedded systems in our solutions",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2000-01-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2000-01-01"
            },
            {
              "phase": "active",
              "startDate": "2000-01-01"
            },
            {
              "phase": "endOfLife",
              "startDate": "2100-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "3c9dd486-8c39-4b92-be11-27e412321a32",
        "displayName": "Product development / R&D Process / Embedded System process / 07 Release",
        "description": "The Release Process is the process that handle updates and developments of SESAMM (Scania Electrical System Architecture made for Modularization and Maintenance).  ",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2010-03-16"
            },
            {
              "phase": "active",
              "startDate": "2010-03-16"
            },
            {
              "phase": "endOfLife",
              "startDate": "2050-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "7e0bfc74-3c18-4faf-b51a-025f3054e0ac",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRB - R&D Methods & Products / IRBC - Embedded Process & Tools",
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
        "id": "39b4fb6b-10e9-4267-b1bb-d48c69b88935",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EEA - Autonomous Systems",
        "usageType": null,
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
        "id": "355cde71-6666-4d4a-aaf9-c631472342f4",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EEC - Connected Systems",
        "usageType": null,
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
        "id": "b08f7393-aba3-41e5-874b-455881d49b8d",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EEC - Connected Systems / EECI - Intelligent Transport Systems",
        "usageType": null,
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
        "id": "65e6e56c-2a76-493a-ba81-89ee7ead3ede",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EED - Software Development System / EEDI - Information Architecture and Tool Chain for Embedded Systems",
        "usageType": null,
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
        "id": "f4b98605-a173-49a0-b841-73696eb4bb56",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EED - Software Development System / EEDI - Information Architecture and Tool Chain for Embedded Systems / EEDID - Embedded Process Tools Development D",
        "usageType": null,
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
        "id": "81f6c1a0-5cfb-4ff2-a8a0-cd16c899a1af",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EEP - System Platform",
        "usageType": null,
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
        "id": "5e3d0fc7-a667-48dd-8c60-84bd75046c02",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EES - Embedded SW & Functions",
        "usageType": null,
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
        "id": "6edcaa36-1b15-4095-874b-ed53e05082d5",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EN - Powertrain Development / ENE - Powertrain Control",
        "usageType": null,
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
        "id": "604d6b52-5c59-4329-ac45-ed1663a4ffea",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EV - Electrification Development / EVB - Battery system",
        "usageType": null,
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
    "objects": [
      {
        "id": "34b77be5-567b-426b-8301-abdfcc2f20f9",
        "description": "Implementation of development projects for the design and development of components and whole product including contracting of input suppliers and development of after sales support. Pre-production is completed with verification of the processes and timing of production and market.  The work results in Pre-production completed .",
        "displayName": "Product Development Domain / Design & Development Entity",
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
      },
      {
        "id": "943afeaa-9365-4a6a-8b47-ac5b4fe75207",
        "description": "Cohesive level to specify the content of a mission in order to carry out the test. Represents a assignment with the purpose of implementing one or more tests.",
        "displayName": "Product Development Domain / Test & Quality Assurance Entity / Test Assignment",
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
        "id": "ff29ae27-972e-47e6-b4d9-1df6aae470ef",
        "description": null,
        "displayName": "Embedded Linked Data Enablement, Engine ECU Management_Embedded Linked Data Enablement, Polarion RMS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "23b1ca76-f0cb-4f4f-b9a6-530d80cf6729",
        "description": null,
        "displayName": "Embedded Linked Data Enablement, OAS_Embedded Linked Data Enablement, OAS Converted data to Polarion RMS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9c9dc930-1144-4d2f-9b20-dfbcd3c00662",
        "description": null,
        "displayName": "Embedded Linked Data Enablement, SESAM-tool_Embedded Linked Data Enablement, SESAMM-tool, outbound for Polarion RMS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8c6ab69f-b3f2-4818-adf6-b76e5e6ba1eb",
        "description": null,
        "displayName": "https://polarion-tara-dev.scania.com/polarion/",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5a027b4a-5459-4d7a-b702-2f4ae025767e",
        "description": null,
        "displayName": "https://polarion-tara.scania.com/polarion/",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e2c414f9-427c-40aa-8c88-121293f8ba82",
        "description": null,
        "displayName": "https://polarion-test.scania.com",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4b213f02-c634-4f51-8c03-77d42ff7ded9",
        "description": null,
        "displayName": "https://polarion.scania.com/polarion/",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3348ad25-9d7f-4443-8809-3badc866e271",
        "description": null,
        "displayName": "Polarion / Polarion TARA_TARA to RMS: Goals and Claims data",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-30"
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
        },
        {
          "id": "03789691-6ea8-4a67-9c8f-88cdc9d9b4e3",
          "displayName": "Siemens Polarion",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
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
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": "OK",
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TRPRT",
    "ChinaDesign": "EDI/IRD",
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "EDI/IRD",
    "Chinaverification": "",
    "ChinaOperations": ""
  }
}