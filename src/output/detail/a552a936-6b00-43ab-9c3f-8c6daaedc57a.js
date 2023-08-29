export default {
  "completion": {
    "percentage": 70,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 71,
    "dataManagement": 13,
    "dependencies": 100,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 53
  },
  "subscriptions": [
    {
      "firstName": "Åke",
      "lastName": "Johansson",
      "displayName": "Åke Johansson",
      "email": "ake.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Marcus",
      "lastName": "Wadås",
      "displayName": "Marcus Wadås",
      "email": "marcus.wadas@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Rosiane",
      "lastName": "Andretta-Sundman",
      "displayName": "Rosiane Andretta-Sundman",
      "email": "rosiane.andretta-sundman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Neha",
      "lastName": "Munshi",
      "displayName": "Neha Munshi",
      "email": "neha.munshi@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Power BI Platform",
    "description": "BI platform and business analytics tool for analyzing and visualizing data.",
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
    "productCategory": "Analytics / Analytics Platforms",
    "predecessor": [
      {
        "id": "14c368b8-8b51-41d9-9ee9-653d1088855a",
        "displayName": "Cognos BI Platform 11",
        "description": "Business intelligence platform based on the IBM Cognos software suite. Shared environment used for hosting multiple BI Applications like for instance FRESH, SCAPA and Order Inform.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "f173f70a-cad7-491d-abe5-0f189d570f42",
        "displayName": "Qlik Sense BI SLA - BRAIN Cockpit",
        "description": "Qlik Sense BI SLA - BRAIN Cockpit",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "0a576e74-09e2-487e-9a88-d4ae4fe6c1c3",
        "displayName": "QlikView BI Platform",
        "description": "QlikView is a Business Intelligence tool. In Scania it is used for analysis of purchasing data amongst many others.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "8eadeae6-28be-4d5d-b1ab-25b5d5a77704",
        "displayName": "Qlikview SDAT",
        "description": null,
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "9002cb8e-317e-4a0f-8ad6-c15e45e5f25e",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Traton Financial Services  use of Power BI service. A set of apps and reports. ",
        "displayName": "Power BI Platform / POWERBI TFS",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "50afd9da-84f7-4b5c-a992-c98d7898cabf",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Business analytics tool for analyzing and visualizing data in France",
        "displayName": "Power BI Platform / POWERBI_FR",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "a6ccfa9a-e69e-4901-ac7b-e9c05e961142",
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
      "id": "7f178c04-1aa5-4ec0-90cc-ad50f82702a4",
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
        "id": "cf8b0fd0-eafd-4c22-a79e-19c523067bef",
        "displayName": "P. Information Technology and Data Management / Information Management / Data Analytics Management",
        "description": "Data analytics management is the ability to use data to gain insights and make better decisions. It involves collecting and analyzing data from various sources to identify patterns and trends, and can include techniques like data mining and machine learning. It can help organizations improve efficiency, identify new opportunities, and gain a competitive advantage. (Ex App: Snowflake, EDWs as Oracle)",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-24"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
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
        "id": "60bf1da7-28e3-4e1d-8a9f-4e32b753c918",
        "displayName": "Services delivery",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "29db9d40-50e3-4786-8696-a19d2c802491",
        "displayName": "Supporting processes",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Supporting process"
        ]
      },
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
      },
      {
        "id": "9a78c7cb-b77f-4ada-9ff8-d70d9f980ace",
        "displayName": "Sustainable Transport Solution / Sales / Presales / Define",
        "description": "Definitions on where to focus is vital to increase sales efficiency and a strategical way to ensure reaching established targets.",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2020-10-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "4143ac63-f475-4c70-8ec4-ac61e79ea789",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management",
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
      },
      {
        "id": "708170c4-ad34-49a6-b930-0557e0430276",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAA - PD and O2D Business Intelligence",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "279cc393-6751-4fd4-ade8-0487add68d83",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAF - Sales and Services Business Intelligence",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-01"
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
        "id": "1c75e866-9632-438a-b082-61f39fe5e758",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WI - Region India / WI - BU India",
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
        "id": "630abad4-5e33-4e9e-9662-a2c1addbfab2",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - West Africa",
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
        "id": "354ea9ed-a88d-42b1-ac09-e12ad4484a26",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU Finland",
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
        "id": "2d41dc6d-07d1-48da-9dba-025050615024",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / BD - Business Development and Marketing / IT - IS/IT",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-11-25"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "b07c9e53-6bc0-42ae-8f7b-e6d5d7d39e26",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / LD - Learning and Development",
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
        "id": "312a90fb-b21c-4166-8924-52a7c43455e4",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / SAL - New Sales",
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
      }
    ]
  },
  "management": {
    "objects": [],
    "interfaceConsume": [
      {
        "id": "127ddf1e-dfd6-4fab-ad55-ebae2e85dd8d",
        "description": "SASS tabular model for KB BI Tool\n",
        "displayName": "Common Data Warehouse / INDIANA (DW) / KB BI Tool_KB_Tabular",
        "lifecycle": null,
        "tags": [
          "Not China affected"
        ]
      },
      {
        "id": "56062bf0-5239-4c73-b071-59617ce8ad30",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CATS_CON",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9f3c02e3-8a32-4be1-a36e-09a5cfd9d1a5",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CATS_OBJ",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fcfa99bd-0c6f-41c3-8606-41074320f628",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CHORDER",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "007dac1c-f168-4ee7-a97a-703d98004971",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CIDES",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "056c42db-9134-4ca2-ac1b-22aa9c681e4e",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CIMAT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cee162e6-edfd-44bd-97d6-bb4e4803f744",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CIMI_AFTERLINEDATES",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "eeda99bd-d880-46a8-9967-f606b66368bf",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CIMI_SPOOL",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "56e7a5a8-c4a2-4a6b-873b-d09695f52503",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CMPUNIT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5de0eb83-7741-44e0-a42e-002039710102",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CUCPA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a0b5a0b7-8267-4319-9645-815683c10e00",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CUPA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "17212296-54ed-46a5-8873-98e760934df9",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_EPO",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "54c44ac4-e825-4285-a476-f3ca9115157b",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_EPODATES",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9c4b9506-f55a-4beb-95a1-ff8a391f07a9",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_EWO",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5b18df50-0d40-4f19-ae85-979f7542d55a",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_IPO",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7c70ebc3-42a3-44a5-b7b3-00c3e1a1729c",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_IPO_PART",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "14f937ad-fd2c-4b63-a7c6-1712162aef03",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_MAT_DEMANDS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "495b6f8f-5750-4597-99c9-d8d4af1aaa68",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_ORDSPEC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d0524fea-59f9-453c-9f9b-d83f9ca94383",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PAIDHA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4ae5d9e0-6283-422b-bfe9-28e788bdbb22",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PART",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3f9f1a22-9ab6-4722-9345-016f186b9b9a",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROGRESSES",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "6884dadd-e6bc-4adc-9712-67419792dc38",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_CHASSIDATA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "39582d46-06cd-4139-8b01-e19391f06813",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_CHASSIDATA_CONTRACT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ba7e19f9-b38a-485c-b7b6-4a883a29aec8",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_CHASSIDATA_REALASSEM",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "14a8151e-c12f-43cf-8d45-ff470325d5f1",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_CHASSIDATA_STARTASSEM",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2bc56a26-f287-4558-a24a-c415374f3f99",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_ENGINENUMBER",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7586745f-886a-4559-a1f6-061d0751eb3c",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_ORDSPEC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "48fcd0c9-5dcb-49d1-a837-0f47ad03a733",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_PRDDATE",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8c868840-745b-4c0d-a839-1ed9640b2b43",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_REALASSEMBLY",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d3fc6df2-cbd8-4efc-8d9e-6589666900d1",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_PROSSESS_STARTASSEMBLY",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c44765d5-513a-416a-88dd-c9fb598cf55c",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_TASKASS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0970a606-775a-4eb2-b14a-0988dfa14a9d",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_TASKS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "86470517-a474-444a-ad3c-e15ed363979f",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_TEMP_COIN_RES_KEEP",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a8e83755-3d0c-4a92-a7b5-5a0aa4e346f4",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_TEMP_EWO_TOTSPEC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e2043161-1a08-4621-a2d5-cc4c29b5a27e",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_TUBE_CONTENT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c9a5a841-20fb-48ab-a59f-7c7ed7472efb",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_VARFAM",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ff0bbbf2-35ba-4058-9a1e-83e5591eb339",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_VAROPT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "90bdf58d-757b-4b3e-9389-6a2f2ae4ca60",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_WORKDAYPUBLIC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d68f6e0a-6423-45ec-859f-aebcb9414c0b",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_WPLLOAD",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "444db96a-f4b6-4e76-887b-1c9e6aa2733c",
        "description": null,
        "displayName": "SGB Data Lake_PowerBI",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-01"
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
          "id": "526ffca2-6b1b-4728-9155-7980e1adb4ee",
          "displayName": "Microsoft / Azure Azure Cloud Services Classic / Microsoft Power BI n/a",
          "category": "software",
          "description": "Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-07-24"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "e4b0a6d5-987b-4000-b676-751d64c512c9",
          "displayName": "Microsoft Microsoft Power BI",
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
    "ssoProvider": "Active Directory (AD), Azure Active Directory (Azure AD)",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXAZ (?)",
    "ChinaDesign": "SaaS provider (Microsoft)",
    "ChinaSourcing": "21Vianet",
    "ChinaPaying": "TT",
    "ChinaImplementation": "21Vianet",
    "Chinaverification": "21Vianet",
    "ChinaOperations": "21Vianet"
  }
}