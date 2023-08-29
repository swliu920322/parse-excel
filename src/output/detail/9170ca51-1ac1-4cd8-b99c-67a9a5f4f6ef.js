export default {
  "completion": {
    "percentage": 80,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 62,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": "Jan",
      "lastName": "Visscher",
      "displayName": "Jan Visscher",
      "email": "Jan_F.Visscher@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Product Owner"
      ]
    },
    {
      "firstName": "Tobias",
      "lastName": "Abrahmsen",
      "displayName": "Tobias Abrahmsen",
      "email": "tobias.abrahmsen@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "eInternal",
    "description": "Handles product quality and logistical deviations found on parts/components received from departments or units belonging to the group.",
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
    "productCategory": "Deviation handling",
    "predecessor": []
  },
  "dependencies": {
    "parent": [
      {
        "id": "3ed0803f-5bdb-42c6-b15d-eaadfeab443c",
        "displayName": "eQ2",
        "description": "eQ2 is a web-based system which connects internal and/or external supplier users.\n\neQ2 is considered a TRATON application in use globally by MAN and Scania Units (Navistar to follow), \non the shop floor as well as in office areas, and by different functions within Industrial Operations.\n\nThe system supports processes related to deviation handling, invoicing the related incurred costs, change management and part release for serial production. eQ2 is consisting of the following modules:\n\neQuality for Suppliers\neQuality handles product quality and logistical deviations for zero mileage and mileage caused by external suppliers.\n\neInternal\nHandles product quality and logistical deviations found on parts/components received from departments or units belonging to the group.\n\neSCR\nAll supplier initiated changes on earlier released products and / or processes shall be proposed via the Supplier Change Request routine.\n\neCarrier\nHandles deviations found in the inbound and outbound transportation flows caused by Carrier's licensed by the customer.\n\nePPAP\nHandles the Production Part Approval Process (PPAP / PPA) between the customer (TRATON) and external suppliers.\n\neQW\nEarly Quality Warnings are handling suspected product quality symptoms where external supplier support and expertise is needed to determine if there is a problem.\n\neInvoice\nGives an overview of the costs incurred by the customer, and handles the reimbursement, related to the deviation handling in eQuality.\n\neWarranty\nSupports the handling process of field warranty claims internally as well as with the external supplier.\n\n",
        "type": "Application",
        "tags": [
          "PII",
          "Significant",
          "China affected",
          "A good example",
          "Maturity Level 4"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "7a64dfbd-28f4-40e6-a6c9-13b6054482b0",
      "displayName": "Aurora",
      "fullName": "Aurora",
      "tags": [
        "Maturity Level 2",
        "IMG Status Initiatives"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2021-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-01-01"
          },
          {
            "phase": "active",
            "startDate": "2022-01-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2026-12-31"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sirpa Södereng",
          "email": "sirpa.sodereng@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Thomas Strandberg",
          "email": "thomas.strandberg@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "0fc69604-cd7c-4833-9342-1afdbd912a8b",
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
      "id": "f67eae64-11ed-44f9-acc4-8a98081b9d10",
      "displayName": "NOVA",
      "fullName": "NOVA",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Viktor Kaznov",
          "email": "viktor.kaznov@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "b6515d2e-edc6-4bd6-8c79-4d54b7a062d4",
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-11-30",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-11-30",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "36204148-31ab-4498-a661-8a7e2deaf961",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Manufacturing Performance & Cost Reporting",
        "description": "Business Capability required for reporting performance and cost for manufacturing of parts and assembly of components or products.",
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
        "id": "9b7272ae-e262-4f3e-aa6d-941d5ffcfea0",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Solution Quality and Warranty Management / Product Issue Follow Up",
        "description": "Ability to follow up what went wrong and work with improvements",
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
          "MilkyWay area 1. Continuous Exploration"
        ]
      }
    ],
    "processes": [
      {
        "id": "8f37fe51-7b0c-48a2-aba6-efecfcd57725",
        "displayName": "Order to delivery / Major support processes within Production & Logistics",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "588aedfb-fad8-4dbd-846e-82cef2684067",
        "displayName": "Order to delivery / Production Processes / Production Support Processes",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "20dd09ad-1df9-44c1-bbd7-6d34dcf6e719",
        "displayName": "MAN",
        "usageType": null,
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
        ]
      },
      {
        "id": "c633984c-0ce4-42c3-a40c-f8c7463a2682",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZB - Purchasing IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-17"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "db27b2a1-255b-4ef5-885f-eb324e66cbd4",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LD - Powertrain Production",
        "usageType": null,
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
        "id": "01895582-cb96-4c0b-957e-a99c137fc9ac",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LM - Chassis and Cab Production",
        "usageType": null,
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
        "id": "3862c94b-a15a-4872-bf87-efc40c43059d",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LO - Logistics",
        "usageType": null,
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
        "id": "dbd45f12-0b4a-496c-bf8a-c3b7dc4e19bb",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / D - Powertrain Production",
        "usageType": null,
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
        "id": "fc47c1ee-bfc9-43ae-984e-1f75846d6abc",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "b6462961-d77a-43b0-8084-880b67ad22c4",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / O - Logistics",
        "usageType": null,
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
        "id": "e49215de-a3b4-45a4-bfc2-851a5686ace5",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN1 - Business Development / SNI - Digitalisation & Systems​",
        "usageType": "owner",
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
      },
      {
        "id": "2d94abb9-95c7-47b3-a3e0-8a6d0d73f4b8",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KE - Power Solutions",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-20"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "daacaa35-74a1-4a07-84d9-5cb12350f62f",
        "displayName": "TRATON Holding",
        "usageType": "user",
        "description": "The holding company of TRATON and not the entire TRATON Group.",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
        ]
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "ff2d7444-cdeb-46c2-baaa-9f17af4d50a6",
        "description": "every occurrance that deviate from normal behavior",
        "displayName": "General Information Objects Domain / Generic Deviation Entity / General Deviation",
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
        "id": "3c429e51-65a2-4f10-8a4e-412102d57b20",
        "description": "every occurrance that deviate from specification  As  Assembling Dimension deviation Cleanness Function  Hardening Machining Material defects Scratechs/Dents Surface treatment  Handling Mixed parts Part marking",
        "displayName": "General Information Objects Domain / Generic Deviation Entity / Purchased Part Deviation",
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
        "id": "af1a10cd-7939-44ee-8892-e63eaa524c6f",
        "description": "explaining the deviation",
        "displayName": "General Information Objects Domain / Generic Deviation Entity / Root Cause",
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
        "id": "308b5655-aba1-4473-819c-b3857801b5c8",
        "description": "Time Deviation is used to correct standard 'working hours' with for example planned overtime, vacation and other absence.",
        "displayName": "General Information Objects Domain / Generic Deviation Entity / Time Deviation",
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
        "id": "34345272-240b-429e-81eb-3fd31e5c7fb0",
        "description": null,
        "displayName": "Arthur II_Part machining structure",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e99e63b6-025c-4f43-8634-a1abd29d0ed5",
        "description": null,
        "displayName": "Material Planner Information from MCC",
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
        "id": "44475440-ca6a-44ee-b61e-b56a996e1e28",
        "description": null,
        "displayName": "MATRIS Supplier part number",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a19fa5e0-3c21-4d36-8b34-d570a4224411",
        "description": null,
        "displayName": "Part information from Supplier MCC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "14d948cb-f021-4096-ad05-248f6b80c1c0",
        "description": null,
        "displayName": "Scania Supplier Information Portal_Suppliers",
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
          "id": "f0674444-36de-427b-a6d7-879703d12ae1",
          "displayName": "Microsoft SQL Server Standard 2016",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2016-03-07"
              },
              {
                "phase": "active",
                "startDate": "2016-06-01"
              },
              {
                "phase": "endOfLife",
                "startDate": "2018-01-09"
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
          "id": "5486d0ff-bafe-4608-a1d8-3558f56124de",
          "displayName": "Amazon.com / AWS Cognito",
          "category": "service",
          "description": "Amazon Cognito lets customers add user sign-up, sign-in, and access control to their web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.  ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2014-07-10"
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
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "SNI",
    "ChinaDesign": "IZB",
    "ChinaSourcing": "N/A",
    "ChinaPaying": "N/A",
    "ChinaImplementation": "SNI/IZB",
    "Chinaverification": "SNI/IZB",
    "ChinaOperations": "SNI/IZB"
  }
}