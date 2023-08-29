export default {
  "completion": {
    "percentage": 83,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 100,
    "businessSupport": 85,
    "dataManagement": 63,
    "dependencies": 100,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": "Jenny",
      "lastName": "Röjd",
      "displayName": "Jenny Röjd",
      "email": "jenny.rojd@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Linda",
      "lastName": "Grubbström",
      "displayName": "Linda Grubbström",
      "email": "linda.grubbstrom@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Magnus",
      "lastName": "Wikegård",
      "displayName": "Magnus Wikegård",
      "email": "Magnus.Wikegard@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Jan",
      "lastName": "Visscher",
      "displayName": "Jan Visscher",
      "email": "Jan_F.Visscher@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Yelena",
      "lastName": "Crona",
      "displayName": "Yelena Crona",
      "email": "yelena.crona@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Ashwini Shivanand",
      "lastName": "Karmalkar",
      "displayName": "Ashwini Shivanand Karmalkar",
      "email": "ashwini-shivanand.karmalkar@scania.com",
      "type": "OBSERVER",
      "role": []
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
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "elin.kinnander@scania.com",
      "email": "elin.kinnander@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Jasper",
      "lastName": "Jansen",
      "displayName": "Jasper Jansen",
      "email": "jasper.jansen@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    }
  ],
  "information": {
    "name": "eQ2",
    "description": "eQ2 is a web-based system which connects internal and/or external supplier users.\n\neQ2 is considered a TRATON application in use globally by MAN and Scania Units (Navistar to follow), \non the shop floor as well as in office areas, and by different functions within Industrial Operations.\n\nThe system supports processes related to deviation handling, invoicing the related incurred costs, change management and part release for serial production. eQ2 is consisting of the following modules:\n\neQuality for Suppliers\neQuality handles product quality and logistical deviations for zero mileage and mileage caused by external suppliers.\n\neInternal\nHandles product quality and logistical deviations found on parts/components received from departments or units belonging to the group.\n\neSCR\nAll supplier initiated changes on earlier released products and / or processes shall be proposed via the Supplier Change Request routine.\n\neCarrier\nHandles deviations found in the inbound and outbound transportation flows caused by Carrier's licensed by the customer.\n\nePPAP\nHandles the Production Part Approval Process (PPAP / PPA) between the customer (TRATON) and external suppliers.\n\neQW\nEarly Quality Warnings are handling suspected product quality symptoms where external supplier support and expertise is needed to determine if there is a problem.\n\neInvoice\nGives an overview of the costs incurred by the customer, and handles the reimbursement, related to the deviation handling in eQuality.\n\neWarranty\nSupports the handling process of field warranty claims internally as well as with the external supplier.\n\n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2005-03-08",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2032-04-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2034-04-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Supplier collaboration",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "fe4f3a50-0975-46b4-a2ec-5a387cd9ae54",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Handles deviations found in the inbound and outbound transportation flows caused by Carrier's licensed by the customer.",
        "displayName": "eQ2 / eCarrier",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      },
      {
        "id": "9170ca51-1ac1-4cd8-b99c-67a9a5f4f6ef",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Handles product quality and logistical deviations found on parts/components received from departments or units belonging to the group.",
        "displayName": "eQ2 / eInternal",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      },
      {
        "id": "ab06d83c-f710-463b-8ebc-6556e780b088",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Gives an overview of the costs incurred by the customer, and handles the reimbursement, related to the deviation handling in eQuality.",
        "displayName": "eQ2 / eInvoice",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      },
      {
        "id": "eb4e8120-77fc-4981-b193-6e2ba9a28f64",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Handles the Production Part Approval Process (PPAP / PPA) between the customer (TRATON) and external suppliers.",
        "displayName": "eQ2 / ePPAP",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      },
      {
        "id": "b59d009b-3ecd-491c-bfe3-89e430b2978a",
        "activeFrom": null,
        "activeUntil": null,
        "description": "eQuality handles product quality and logistical deviations for zero mileage and mileage caused by external suppliers",
        "displayName": "eQ2 / eQuality",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      },
      {
        "id": "5f7b822c-ecfe-46cc-9c87-e3fa041d6cc1",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Early Quality Warnings are handling suspected product quality symptoms where external supplier support and expertise is needed to determine if there is a problem.",
        "displayName": "eQ2 / eQW",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      },
      {
        "id": "2bb22120-2d6a-427b-9fe2-e3b480665d6b",
        "activeFrom": null,
        "activeUntil": null,
        "description": "All supplier initiated changes on earlier released products and / or processes shall be proposed via the Supplier Change Request routine.",
        "displayName": "eQ2 / eSCR",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      },
      {
        "id": "8c245f9e-7905-48a7-a776-c8d272044fcd",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Supports the handling process of field warranty claims internally as well as with the external supplier.",
        "displayName": "eQ2 / eWarranty",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected",
          "Maturity Level 4"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "1aec1fe7-14c7-4947-a8fa-6d6082ce1fd7",
      "displayName": "SAS Industrial Project - China / China BiW IT",
      "fullName": "China BiW IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-05-02"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Johan Persson",
          "email": "johan.y.persson@scania.com",
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
          "displayName": "Jimmy Olofsson",
          "email": "jimmy.olofsson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mikael Rothsten",
          "email": "mikael.rothsten@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Johan Öberg",
          "email": "johan.x.oberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "1e418066-b645-42e7-a7e5-d60458500237",
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
      "id": "e66a68b0-bf85-43e5-9f1c-9f7cda35a420",
      "displayName": "SAS Industrial Project - China / China Paint Shop IT",
      "fullName": "China Paint Shop IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-05-02"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Johan Persson",
          "email": "johan.y.persson@scania.com",
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
          "displayName": "Johan Öberg",
          "email": "johan.x.oberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Jimmy Olofsson",
          "email": "jimmy.olofsson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mikael Rothsten",
          "email": "mikael.rothsten@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "6c1d082b-9b7a-4676-bb45-b5a94f45f13a",
      "displayName": "SAS Industrial Project - China / China Purchasing IT",
      "fullName": "China Purchasing IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2021-12-01"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-08-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tomas Hebbou",
          "email": "tomas.hebbou@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Wikegård",
          "email": "Magnus.Wikegard@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "272bfd69-ba17-46db-8113-de14c37f43a5",
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
        "id": "d6ecb7bd-d10a-4181-ad64-72e50e106a63",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management / Supplier Lifecycle Management",
        "description": "Supplier Qualifications, Supplier Registration, Supplier Segmentation, Supplier Offboarding",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-03-21"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "24d40011-93ad-4aee-b8c4-781a09633470",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Supplier Management / Supplier Performance Management",
        "description": "Supplier Performance Evaluation, Supplier Evaluation Measurement, Supplier Progress Monitoring (Risk and Sustainability)",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-03-21"
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
        "id": "836b1a7a-1011-48a7-ae3b-35aff6ad3694",
        "displayName": "Order to delivery / Production Processes / Production Support Processes / Quality Control",
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
        "usageType": "user",
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
      },
      {
        "id": "0beaf700-b67d-41d5-9056-b758d671912a",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SQ - Quality",
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
        "id": "a6e92b3d-a3be-4623-8205-dab8e08c4a3e",
        "description": null,
        "displayName": "Financial Control Domain / Invoice Entity / Supplier Invoice",
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
        "id": "a6d94c09-f8a5-4108-a371-fc9a419b354e",
        "description": null,
        "displayName": "General Information Objects Domain / Generic Deviation Entity",
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
        "id": "945ede33-0dfe-406f-a318-846621c7de0d",
        "description": "Master Data Source SSIP, Scania Supplier Information Portal  (limited to Automotive Parts Suppliers) Represents Scania suppliers independent if they provide Scania with components within resources and hardware, services and software or work efforts. One specific type of supplier are bodybuilders that supply Scania and customers with coaches and bodywork to complete Product As Individuals upon Scania basic chassis products.  Supplier is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Supplier",
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
        "id": "4ab3b15b-7ed7-4e3a-b542-5fdb4c54348b",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateAuth IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ef43e9a0-32ea-42a2-93d9-571b158bc531",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateCreatePCR IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-07"
            }
          ]
        },
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
        "id": "d3618a23-226f-4ce0-ada0-4411d6854791",
        "description": null,
        "displayName": "QING / QING SEARCH_QING SEARCH",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "262409e2-189a-465e-9c54-ff954c232b3f",
        "description": "QING Information",
        "displayName": "QING_QING-Information-Service IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-12"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "14d948cb-f021-4096-ad05-248f6b80c1c0",
        "description": null,
        "displayName": "Scania Supplier Information Portal_Suppliers",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ad5838ed-6030-4875-865d-ff980bd16546",
        "description": null,
        "displayName": "SMART_SMART",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "15566444-7ffc-4809-9377-a3e8867c2676",
        "description": null,
        "displayName": "SWAT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8fb8dd9e-50a7-43b8-861c-81e2292c932a",
        "description": null,
        "displayName": "WAM_eQ2 - https://equality2.scania.com - urn:amazon:cognito:sp:eu-west-1_BLvKiNb1t",
        "lifecycle": null,
        "tags": [
          "Global_SAML"
        ]
      },
      {
        "id": "7abd845a-6627-4061-8d7b-cab62bbbbe30",
        "description": null,
        "displayName": "WAM_WAM SAML2 Authentication",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "5f3815b1-308c-4b21-b779-655160c930d1",
        "description": null,
        "displayName": "eQ2_APT",
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
      }
    ]
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
    "ChinaITlegalCompliance": "GapsFound",
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