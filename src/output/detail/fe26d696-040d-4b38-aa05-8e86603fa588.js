export default {
  "completion": {
    "percentage": 36,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 68,
    "dataManagement": 38,
    "dependencies": 50,
    "information": 67,
    "projects": 0,
    "robots": 0,
    "sourcing": 52
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "taru.lakanen@scania.com",
      "email": "taru.lakanen@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "susanne.soderlund@scania.com",
      "email": "susanne.soderlund@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "lotta.ahrlin@scania.com",
      "email": "lotta.ahrlin@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "lars.x.karlsson@scania.com",
      "email": "lars.x.karlsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "kim.fougelberg@scania.com",
      "email": "kim.fougelberg@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Fernan",
      "lastName": "Santos",
      "displayName": "Fernan Santos",
      "email": "fernan.santos@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Fredrik",
      "lastName": "Fagervall",
      "displayName": "Fredrik Fagervall",
      "email": "fredrik.fagervall@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Prerna",
      "lastName": "Agrawal",
      "displayName": "Prerna Agrawal",
      "email": "prerna.agrawal@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Rana",
      "lastName": "Salamat",
      "displayName": "Rana Salamat",
      "email": "rana.salamat@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Frida",
      "lastName": "Rawet",
      "displayName": "Frida Rawet",
      "email": "Frida.Rawet@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
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
      "firstName": "Fredrik",
      "lastName": "Svanström",
      "displayName": "Fredrik Svanström",
      "email": "fredrik.svanstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "MAC",
    "description": "The Scania Maintenance core application for maintenance plans.\nThe heart of the business logic and the hub for all connections to internal Scania systems needed to create and maintain plans. \nExposes API to external sources like Digital Dealer and other DMS's outside of Scania.  ",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2025-01-02",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": [
      {
        "id": "33285248-1d70-4336-8408-8fe40fd313a1",
        "displayName": "ScaniaMaintenance",
        "description": "System to handle Maintenance plans for trucks, buses, trailers and engines.",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "ce4cd85f-36db-4ad3-a98b-516654692822",
        "activeFrom": null,
        "activeUntil": null,
        "description": "MPP is where users create and view the maintenance plans for primarily Scania vehicles but also for trailers and vehicles of different brands.\nMPP is the front end application for MAC. ",
        "displayName": "MAC / MPP",
        "type": "Application",
        "lifecycle": {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-12-19"
            },
            {
              "phase": "drpReview",
              "startDate": "2020-12-19"
            }
          ]
        },
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2020-05-26",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2023-05-26",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-12-19",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2020-12-19",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "8e4179f2-45f4-41dc-9b4e-3f571df8fa60",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Product Repair, Maintenance and Updating / Repair & Maintenance Execution",
        "description": "The ability to trouble shoot, repair and maintain customer products.",
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
        "id": "1a205f98-1471-47e2-87fb-fce14d936844",
        "displayName": "Product development / R&D Process / Embedded System process / 11 Update",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "2d2d1c0c-6719-44b8-b1ad-702b479bed55",
        "displayName": "Services delivery / Contracted Services administration",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "4c09d75a-159f-42d3-ac78-43a3a7329ec2",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAC - Contracted Services & Warranty / IACD - Scania Maintenance 3",
        "usageType": "owner",
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
        "id": "2d36a696-0584-4854-8ad0-9fc0d1ed855b",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOCO - Scania Commercial Operations Colombia",
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
        "id": "afd9a47a-ac4e-4496-854b-2688020679d1",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WC - Region Central Europe / WC - BU BeNeLux",
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
        "id": "e0f53ff8-1753-4785-8214-0762787b6102",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WC - Region Central Europe / WC - BU Central European Region",
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
        "id": "d110d939-fffa-4ee0-850f-324b55d191bd",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WC - Region Central Europe / WC - BU Germany and Austria",
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
        "id": "335c36a0-bc69-4de9-9574-df21bf2572d3",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WC - Region Central Europe / WC - BU Poland",
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
        "id": "cc9454a2-ae96-4d84-8406-af2fb6c9ae4b",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WC - Region Central Europe / WC - BU Switzerland",
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
        "id": "852db419-7a93-43fb-8aa3-3c7c99c22076",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WC - Region Central Europe / WC - BU Ukraine",
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
        "id": "9747a891-20bc-4919-a9e1-bd6b8c4deedc",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU East Africa",
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
        "id": "6b52c8d6-7e3d-436d-93c6-3c36e41503a6",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU Middle East and Central Asia",
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
        "id": "980f7a13-19e6-41b4-aa0c-e15cecef4e78",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU Russia and Belarus",
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
          "Country group D",
          "From IGA"
        ]
      },
      {
        "id": "968fac52-bf34-4577-998f-93537f33280b",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU Southern Africa",
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
        "id": "9b3566b6-3f6e-45a2-9a85-ae39b45bdb97",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / A - Scania Sverige AB",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-06"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "354ea9ed-a88d-42b1-ac09-e12ad4484a26",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU Finland",
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
        "id": "509cb8f8-bdc7-4587-8ac9-13f9d8028489",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU Norway",
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
        "id": "c77a236b-4d21-4cae-8801-bab0e07b1ce8",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU Thailand",
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
        "id": "692382dc-79f8-4c79-8b8a-73052c36ab76",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU France",
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
        "id": "1bea03ee-8113-43b8-92b9-7a83da043748",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU Ibérica",
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
        "id": "44ccdee9-2566-4e0f-89b8-1534788c80b1",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU Italy",
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
        "id": "353ebba8-a0d3-42eb-b25a-46c4a907e2af",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU Morocco",
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
        "id": "ce537f82-9062-4c34-b7c4-cf60b6cb26c3",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KY - Service Portfolio & Delivery",
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
        "id": "12a67c32-7dc4-4bbb-b18d-14b0e02002d6",
        "description": null,
        "displayName": "Repair & Maintenance Domain",
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
        "id": "c3e9e055-2886-4c57-b567-02d1155c0c0e",
        "description": null,
        "displayName": "MAC_MacCloudPumpNcg IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-11"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "023a8153-2805-424c-9c41-61c672e503ba",
        "description": null,
        "displayName": "MEM_Maintenance_Factor_Service_Api-Prod IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "94b19c8f-c147-42a5-9a84-98be7d334b49",
        "description": null,
        "displayName": "MEM_sma-translation-prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "011c0ffb-2f16-4b70-8212-062b7cd7556c",
        "description": null,
        "displayName": "Multi_vsi-maintenance-service IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-25"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "fa3bba50-ade8-4f09-8151-454714d7dff4",
        "description": null,
        "displayName": "Multi_vsi-package-service IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-25"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "28c49fd3-d784-4b4c-bc66-df3759a46e4f",
        "description": "Internal api for mac cloud services to consume legacy mac information",
        "displayName": "ScaniaMaintenance_MacCloudPumpEdu IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-24"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "67ae5a19-a908-40c5-bf65-bfa34d08304a",
        "description": "Internal api for mac cloud services to consume legacy mac information",
        "displayName": "ScaniaMaintenance_MacCloudPumpProd IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-24"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "754b23be-5d68-40be-a041-fc6c683de1c3",
        "description": "Workshop interface for vehicle maintenance plans",
        "displayName": "ScaniaMaintenance_MacWorkshopProd IE v8",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-26"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "82ec8aec-8a69-4d1e-b051-fc0ed140e8cb",
        "description": null,
        "displayName": "ScaniaMaintenance_Maintenance_Expert_Api-Ncg IE v3.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-10"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "0c8888e5-6cf1-48ec-8208-2b90616e9646",
        "description": null,
        "displayName": "ScaniaMaintenance_Maintenance_Expert_Api-Prod IE v2.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-25"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "8a54089f-1dbd-43ba-ae38-9a1092165dd3",
        "description": null,
        "displayName": "ScaniaMaintenance_Maintenance_Expert_Api-Prod IE v3.0",
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
      },
      {
        "id": "c36e5661-16cf-44e0-a42b-d37212644751",
        "description": "Proxy API for RDP through MEM",
        "displayName": "ScaniaMaintenance_RDPProxy IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-25"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "511580cf-fc32-4700-8965-221123ad6eaf",
        "description": "This service provides customer workshop information,  where users can view all customer workshop services belonging to their area of responsibility. The dealer, workshops, and sales office found in this section are only used for internal information.",
        "displayName": "SIS_CustomerWorkshopService IE V1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-02-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b601ad70-9249-442d-91a1-a3340d7e50e1",
        "description": "This service provides dealer, sales office, and workshop information.\n\nA dealer is an organization within the Scania authorized distribution network of products and services, and that is acting as both a sales office and a workshop.\n\nA sales office is an organization within the Scania authorized distribution network of products and services, in charge of sales and distribution of new Scania products and after-sales services. The facility includes a sales office where the sales force is stationed and where the customer can meet a salesman regularly. \n\nA workshop is an organization within the Scania distribution network of products and services, exclusively in charge of after-sales services. The network member has or is about to, undergo an audit according to DOS* to be certified and become a full member of the Scania network.",
        "displayName": "SIS_DealerService IE V2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "114b45d0-6490-4622-8909-be0fec3cde1f",
        "description": "This service provides Distributor information.\n\nA distributor is an organization that is a member of the Scania distribution network of products and services set up by Scania CV AB and that is in charge of the wholesales and the distribution network for one or more Scania products and services in one or more countries.",
        "displayName": "SIS_DistributorService IE V1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-09"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cff2d042-1adc-46b3-bedd-29b228e3aec0",
        "description": "When selecting external companies, all external companies belonging to your area of responsibility are visible. A company is external if it is not Scania authorized, if it is not currently certified according to DOS (Dealer Operating Standard), and does not plan to be certified in the close future. The dealer/workshops/sales office found here are only used by Scania Assistance. A service point is to be entered as an external company. If it does not fulfill the criteria described under Dealers/Workshops or Distributors since it is therefore not a valid member of the Scania service network.",
        "displayName": "SIS_ExternalCompanyService IE V1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-05"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "c3e9e055-2886-4c57-b567-02d1155c0c0e",
        "description": null,
        "displayName": "MAC_MacCloudPumpNcg IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-11"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "fb472f5b-1d3f-4258-b939-f6818a55ff9c",
        "description": "Maintenance Agreement Central Services, MAC, is a web-based services tool with the purpose to calculate and administrate maintenance plans for Trucks, Buses and other superstructures like Trailers",
        "displayName": "MAC_SGB-WS0003_MAC",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-01"
            }
          ]
        },
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "76bd5c30-2d40-4c9b-a02f-40407d59d4fd",
          "displayName": "Microsoft .NET Framework 4.6.1",
          "category": "software",
          "description": ".NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. The .NET Framework is the original implementation of .NET. It supports running websites, services, desktop apps, and more on Windows.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-11-30"
              },
              {
                "phase": "endOfLife",
                "startDate": "2022-04-26"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "a9d7f6fb-b3ee-4d74-809d-c096a31ad288",
          "displayName": "Microsoft Microsoft .NET Core",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
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
      "service": [
        {
          "id": "8893415d-7263-4b93-a2ec-feb3fdead789",
          "displayName": "Amazon.com / AWS Amazon Web Services",
          "category": "service",
          "description": "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "plan",
                "startDate": "2002-01-01"
              },
              {
                "phase": "active",
                "startDate": "2002-07-16"
              }
            ]
          },
          "tags": []
        }
      ],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "notSupported"
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