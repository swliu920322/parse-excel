export default {
  "completion": {
    "percentage": 56,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 57,
    "dataManagement": 25,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Manish Kumar",
      "lastName": "Singh",
      "displayName": "Manish Kumar Singh",
      "email": "manish.singh@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Måns",
      "lastName": "Yngerskog",
      "displayName": "Måns Yngerskog",
      "email": "mans.yngerskog@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Mikael",
      "lastName": "Stenroth",
      "displayName": "Mikael Stenroth",
      "email": "mikael.stenroth@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Lars",
      "lastName": "Tärnbrant",
      "displayName": "Lars Tärnbrant",
      "email": "lars.tarnbrant@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Harley",
      "lastName": "Carter",
      "displayName": "Harley Carter",
      "email": "harley.carter@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Cecilia",
      "lastName": "Gullqvist",
      "displayName": "Cecilia Gullqvist",
      "email": "cecilia.gullqvist@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Eric",
      "lastName": "Ljunggren",
      "displayName": "Eric Ljunggren",
      "email": "Eric.Ljunggren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Anna",
      "lastName": "Ulander",
      "displayName": "Anna Ulander",
      "email": "anna.ulander@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "Scania CRM",
    "description": "This is the global cloud version of Scania CRM. All markets will be part of this application.\nScania Customer Relationship Management captures contact information, essence of sales visits, the customer’s future purchasing plans, tracks quotations and handles customer complaints.\n\nScania CRM is build on the application Microsoft Dynamics 365 Customer Engagement. ",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2021-08-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2021-10-17",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2021-10-18",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "0c861c81-ee2c-4340-8480-e833105c94c9",
        "displayName": "SCRM",
        "description": "This is the global version of Scania CRM. Scania Customer Relationship Management captures contact information, essence of sales visits, the customer’s future purchasing plans, tracks quotations and handles customer complaints.\n",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [
      {
        "id": "fcad595e-035f-4a87-a107-5e95231b9104",
        "displayName": "Scania D365 Golden Blueprint",
        "description": "Blueprint for Scania D365. Used by Commercial Operations, Scania Financial Services",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2",
          "Target State Commercial"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "02e1fea7-3340-4a04-90c9-ebea4af06bfa",
      "displayName": "CRM",
      "fullName": "CRM",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Dick Lyhammar",
          "email": "dick.lyhammar@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-09-24",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-09-24",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "4ed0edd9-934c-4f56-9733-a95ae5dcb589",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management",
        "description": "Develop and execute a customer relationship and plan, maintain and build a customer relationship.",
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
        "id": "95c6de4b-d409-4fea-975a-b46031c4c125",
        "displayName": "Sustainable Transport Solution / Sales",
        "description": "Sales Core Process consolidates sub-processes that are responsible to manage the output from the Product Development Core Process and prepare the input to both Order to Delivery and Services Delivery Core Processes. The sub-processes belonging to Sales Core Process are: Presales, Solution Sales, Rental and Used Vehicles Management.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2018-01-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2019-01-01"
            },
            {
              "phase": "active",
              "startDate": "2019-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      }
    ],
    "organisations": [
      {
        "id": "bb090c94-c185-4d60-83c3-c92b3f1f79d1",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IZ - IZ Digital Core / IZE - ERP - Digital Core",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-01-02"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "278b36ce-b004-4d21-9c1d-d2224d3a0b87",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / S - Scania Commercial Operations Brazil",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "269f6aa7-69e3-44fe-8f81-a6743763b1ff",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOAR - Scania Commercial Operations Argentina",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "e16456ef-7aa8-4860-bfc0-900b0d2a4b07",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOCL - Scania Commercial Operations Chile",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "2d36a696-0584-4854-8ad0-9fc0d1ed855b",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOCO - Scania Commercial Operations Colombia",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "aab94fe2-ecd3-4ed1-90e9-89cb82c9fb1d",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOMX - Scania Commercial Operations Mexico",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "065fa24f-1aa1-44dc-b70e-63cf412a8169",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOPE - Scania Commercial Operations Peru",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "afd9a47a-ac4e-4496-854b-2688020679d1",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WC - Region Central Europe / WC - BU BeNeLux",
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
      },
      {
        "id": "9e30285a-4bea-4fc1-a738-d9992bd304ab",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WE - Region Europe / WE - BU Baltics",
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
        "id": "968fac52-bf34-4577-998f-93537f33280b",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU Southern Africa",
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
      },
      {
        "id": "630abad4-5e33-4e9e-9662-a2c1addbfab2",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - West Africa",
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
      },
      {
        "id": "307d0d40-ccc2-429a-b5ce-e09289b16b7d",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom",
        "usageType": null,
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
      },
      {
        "id": "e19187cd-2485-4e18-9d5b-0c34961ee544",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / Independent Dealer United Kingdom",
        "usageType": null,
        "description": "Manually created User Group to be used for all independent delars within UK",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
        ]
      },
      {
        "id": "fcf63ef1-496b-42ec-a79e-c150dc0ae31f",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / AFT - Services",
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
        "id": "c2ee05c3-fd49-4378-b11d-0d8aa93c2740",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / AFT - Services / AFM - Services - Milton Keynes / APO - Parts Operations",
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
        "id": "16795b7e-1c38-4381-b3cf-d6981ca0aff4",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / SAL - New Sales / SAE - New Sales - Engines",
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
        "id": "cb9536b6-fa47-4b29-b475-4e04e440b655",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / SAL - New Sales / SBC - New Sales  - Bus and Coach",
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
        "id": "7a740646-694b-4a95-8c8c-3cf8df888f5f",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Australia",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "c4b892a4-7d5f-4d32-8710-dbd090ec1bb5",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU China",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "137ec344-1000-41a2-888c-47ce41377598",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Hong Kong",
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
        "id": "a5f4aafb-6839-49ab-b492-9b9a82d8d9e0",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Japan",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "5ef98fc0-1497-4ecd-9be6-1c309143c95d",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU South East Asia",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "9546a385-f02d-4fd7-8205-f0c1a240cc9f",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU South Korea",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "2cbac725-70b3-4643-849b-f24a0cffa69a",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Taiwan",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "7857a7d6-5b7e-4ed1-bc34-fbfb04c98884",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU Black Sea",
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
      },
      {
        "id": "c9035834-2690-4271-ae54-55df6b5f6661",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU East Adriatic Region",
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
      },
      {
        "id": "1bea03ee-8113-43b8-92b9-7a83da043748",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU Ibérica",
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
      },
      {
        "id": "f2089209-c3ee-45b1-94a5-dbe62573b2a7",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KJ - Presales & Sales Readiness",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-18"
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
        "id": "3df939e8-c8a1-4fe8-8393-bd387a787f01",
        "description": null,
        "displayName": "Customer Information",
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
        "id": "80255893-1692-4f02-bf27-f2aa74285408",
        "description": null,
        "displayName": "Sales Portal_SalesQuotationService",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2021-08-29"
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
          "id": "cb14f0e8-e8e2-4863-9f9f-5942137550ec",
          "displayName": "Microsoft Microsoft Dynamics 365 CE",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [
        {
          "id": "32aa8579-9a98-4341-81f6-6e09f0c29039",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic",
          "category": "service",
          "description": "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2008-10-27"
              },
              {
                "phase": "endOfLife",
                "startDate": "2024-10-31"
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