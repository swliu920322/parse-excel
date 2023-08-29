export default {
  "completion": {
    "percentage": 70,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 59,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 46
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "henrik.svard@scania.com",
      "email": "henrik.svard@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Geert",
      "lastName": "Geebelen",
      "displayName": "Geert Geebelen",
      "email": "geert.geebelen@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Gustav",
      "lastName": "Arrhenius",
      "displayName": "Gustav Arrhenius",
      "email": "gustav.arrhenius@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Greet",
      "lastName": "Maurissen",
      "displayName": "Greet Maurissen",
      "email": "greet.maurissen@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Anja",
      "lastName": "Thysen",
      "displayName": "Anja Thysen",
      "email": "anja.thysen@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "DSM PARTS",
    "description": "Parts Logistics Stock Control.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2023-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "f55e7037-c2b5-42d2-bbe7-385459ea8bcc",
      "displayName": "DSM Parts Replacement",
      "fullName": "DSM Parts Replacement",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
    },
    {
      "id": "de3a2fc3-1f1a-436d-aec7-53a1405f86b4",
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
    },
    {
      "id": "a64d91ec-fa07-420f-bbc3-9a725b01a3a3",
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
              "startDate": "2023-05-12",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-05-12",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2021-03-30",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2022-03-30",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "9d1d0316-e632-47b0-82ee-4e8a10339fef",
        "displayName": "P. Information Technology and Data Management / Information Management / Data Quality Management",
        "description": "Data quality management is the ability to ensure that data is accurate, complete, consistent, and reliable. It involves identifying and addressing data quality issues, such as errors and inconsistencies, to improve decision-making and increase efficiency.",
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
      }
    ],
    "processes": [
      {
        "id": "c2a8204a-5202-4d53-9306-736a68bcdcd9",
        "displayName": "Services delivery / Retail Parts & Warehouse / Part sales",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
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
        "id": "980f7a13-19e6-41b4-aa0c-e15cecef4e78",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WM - Region Africa, Middle East and Central Asia / WM - BU Russia and Belarus",
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
        "id": "c4b892a4-7d5f-4d32-8710-dbd090ec1bb5",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU China",
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
        "id": "8ec05fb1-6202-4272-80e0-29ebc607443c",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KP - Parts and Service / SL - Scania Parts Logistics / SLD - Business Processes & IT",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-08"
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
        "id": "65e7f171-7c0d-462f-9f5d-22c9e1ece368",
        "description": "Master Data Source SIS  A dealer is an entity, normally fully owned by Scania, which has agreed by contract to represent Scania commercial interests for a designated geographic market, generally corresponding to one or more countries. This entity is responsible for the purchasing of Scania products from the product companies and distributing these within its dealership organization or selling it directly to end-users within its area of responsibility. Basically dealer serve its purpose as  sales channels and workshop service providers  to customers on different markets, and is not itself customers even if dealer often act in a purchasing (\"customer\") role in different business events (as Sales Order).  Dealer is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Dealer",
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
        "id": "5938914d-a4d3-43fe-b606-15309ac36bc9",
        "description": "Master Data Source SIS  Represent general agents and intermediary importer party between Scania and Dealer.  Basically distributor serve its purpose as  sales channels  to dealer and customers on different markets, and is not itself customers even if distributor often act in a purchasing (\"customer\") role in different business events (as Sales Order).  Distributor is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Distributor",
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
        "id": "0f543f8b-d5b2-4d49-b07f-ca67fd0b5043",
        "description": "Stock Movements and Transactions with 2 Different Types of files produced:\n  1  DM – DSM Movement: stock balances\n  2  DT – DSM Transactions: stock transactions (receipts, adjustments, sales)\nRuns 7 days per week, 1:30pm onward and creates c28 files: 5 regions for Scania owned depots and each independent (legal entity) – 14 files x 2 types = 28 and Files are Fixed Format\nAS/400 pulls it onto the AS/400 DSM System where a XML file is created and pushed to Sweden. Sweden then generates files for inbound transfer into Autoline plus if any \"local parts” are involved an additional file is sent [Please refer to DSM Orders inbound interfaces] & Any Buy-back information will be contained in these files",
        "displayName": "Autoline SGB 8.32_DSM Parts",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-16"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
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
          "id": "c564d7f0-b37a-4ebd-9da3-f889b69bd462",
          "displayName": "Red Hat Enterprise Linux RHEL 7.9 OS.",
          "category": "software",
          "description": "Red Hat Enterprise Linux is an open-source operating system. It enables users to scale existing apps and roll out emerging technologies across bare-metal, virtual, container, and cloud environments.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2010-11-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2012-11-30"
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
    "ChinaITlegalCompliance": "SQCcompleted",
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