export default {
  "completion": {
    "percentage": 69,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 0,
    "businessSupport": 67,
    "dataManagement": 49,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 60
  },
  "subscriptions": [
    {
      "firstName": "Martin",
      "lastName": "Zeller",
      "displayName": "Martin Zeller",
      "email": "martin.zeller@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Rickard",
      "lastName": "Ångman",
      "displayName": "Rickard Ångman",
      "email": "rickard.angman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Sargon",
      "lastName": "Suberkli",
      "displayName": "Sargon Suberkli",
      "email": "sargon.suberkli@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Billy",
      "lastName": "Hodgkins",
      "displayName": "Billy Hodgkins",
      "email": "Billy.Hodgkins@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Max",
      "lastName": "Ten",
      "displayName": "Max Ten",
      "email": "max.ten@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "ScaniaNow",
    "description": "ServiceNow is a hosted and cloud-based Software As A Service platform that hosts many different modules for company internal services.\n\nAreas using ScaniaNow: request fulfillment, asset management and Digital dealer (downtime registration). ITSM (replacing Service Center 3) and parts of HR services will be in place in the end of 2022.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-19",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "IT Management Software",
    "predecessor": [
      {
        "id": "f044ac44-225a-44c2-9b49-8cd45c38473e",
        "displayName": "AA",
        "description": "Access Administration. Retired and eplaced by ScaniaNow",
        "type": "Application",
        "tags": [
          "Archive?"
        ],
        "subscriptions": []
      },
      {
        "id": "e13886ef-7a0b-4fc5-ba5c-9b0e878d516e",
        "displayName": "HFM Access Order Prod",
        "description": "Web based Application for ordering HFM user access. Generates a mail to Service Request function at Customer Support who converts it into a Service Now order. \n\nNo integration to HFM, data is added and removed manually..\nUrl: https://hfmaccessorder.scania.com",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "530f6a50-b7e2-48a2-afea-0cc525867a28",
        "displayName": "Navision Deleted",
        "description": "New Order System - Invoicing",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "4507257b-9dd2-4350-9884-1b2dcb3717b0",
        "displayName": "Odoo",
        "description": null,
        "type": "Application",
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "0ec62ba5-124c-4bdf-9a20-da1f14f0193c",
        "displayName": "Odoo / FAST IT",
        "description": "FAST IT",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "71b77a8c-d67f-410c-9281-c96250301eb6",
        "displayName": "OrderIT",
        "description": "eCommerce application supporting Scania IT Ordering Process",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      },
      {
        "id": "440467b5-24f9-44ba-b483-e8d5ab6c0dcb",
        "displayName": "Service Center 3",
        "description": "Volkswagen ITSM ",
        "type": "Application",
        "tags": [
          "Not China affected"
        ],
        "subscriptions": []
      },
      {
        "id": "2e91dec3-6ac8-4da3-ba76-30c2be5183f9",
        "displayName": "Service Centre 3",
        "description": "Volkswagen ITSM previously used by Central. We are now on SC3, so I assume this is no longer used. It is not a UK supported app.\n",
        "type": "Application",
        "tags": [
          "China affected"
        ],
        "subscriptions": []
      },
      {
        "id": "282bc099-4432-4b55-81c1-4c364fee2d5b",
        "displayName": "SFP",
        "description": null,
        "type": "Application",
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "25c5ef3c-cc0c-4601-a6c0-4a627269a5c5",
        "displayName": "Workflow_ITRequest_MA",
        "description": "This workflow handles request from business to IT (access, device, equipment, network...). It should be replaced by ScaniaNow by Q4/2023 (except network request, new solution to be defined).",
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
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "918ddb47-7e59-4497-8093-07090bb5a217",
      "displayName": "Migrate OrderIT to ScaniaNow",
      "fullName": "Migrate OrderIT to ScaniaNow",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
    },
    {
      "id": "684f9e2c-df98-4574-a3b4-8e9ef34a5a53",
      "displayName": "Order flow of AD groups in ScaniaNow",
      "fullName": "Order flow of AD groups in ScaniaNow",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-29"
          },
          {
            "phase": "active",
            "startDate": "2022-11-16"
          },
          {
            "phase": "endOfLife",
            "startDate": "2023-02-28"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Rickard Ångman",
          "email": "rickard.angman@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jimmy Nilsson",
          "email": "jimmy.nilsson@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "908d1567-5e07-434e-9233-d1eb2d94ea53",
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
      "id": "b42c6fde-da34-4a4b-ada7-c3ce64a2e553",
      "displayName": "SAS Industrial Project - China / China HR IT",
      "fullName": "China HR IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-09-12"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-06-28"
          },
          {
            "phase": "endOfLife",
            "startDate": "2024-08-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pandey Rashmi",
          "email": "pandey.rashmi@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Bassam Atto",
          "email": "bassam.atto@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Richard Hasselgren",
          "email": "richard.hasselgren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Siddhant Bajaj",
          "email": "siddhant.bajaj@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Hans Liu",
          "email": "hans.liu@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "ddaddb15-98a7-4cc1-97e8-44659fc2de26",
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
      "id": "f0c5d09e-d828-4cf9-b9b2-1cc8dfbe9d3c",
      "displayName": "UNECE PoC Accesshandling",
      "fullName": "UNECE PoC Accesshandling",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "phaseIn",
            "startDate": "2023-02-06"
          },
          {
            "phase": "active",
            "startDate": "2023-02-20"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tina Hellqvist",
          "email": "tina.hellqvist@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Jimmy Nilsson",
          "email": "jimmy.nilsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Håkan Pettersson",
          "email": "hakan_b.pettersson@scania.com",
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
              "startDate": "2022-08-31",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-08-31",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "408d2b5d-1116-4a2a-a4e8-24d437e1e67d",
        "displayName": "M. Manage Assets",
        "description": "Ability to develop, construct, extend, re-build, manage and maintain assets and equipment enabling the Scania business.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "phaseIn",
              "startDate": "2022-07-01"
            },
            {
              "phase": "active",
              "startDate": "2022-10-05"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "Subject for change"
        ]
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
        "id": "755e7307-710f-46c4-8572-e79d27a7098e",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBG - Digital Workflows",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-01-01"
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
        "id": "10778aa3-ad06-4f93-b058-22a2fb636ffa",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WA - Region Americas / SCOUS - Scania Commercial Operations USA & Canada",
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
        "id": "b06e546a-cad4-439c-bdc5-3354a705bc08",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU Denmark",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "615f65af-a289-45b4-9039-05dd543369bc",
        "description": null,
        "displayName": "Hardware asset",
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
        "id": "a910bacc-7908-43b4-affc-8bff5c42f8d7",
        "description": null,
        "displayName": "Product Sharing Request",
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
        "id": "3b859786-a3a2-4543-b1af-85dc3d9e0785",
        "description": null,
        "displayName": "Active Directory_Global User Directory",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fbc85150-adc7-485f-81fd-cd2cbb11b554",
        "description": "Data: Currency Rate, SCIS344_DSM_CurrencyServices_EROS\n\nSCCO2194",
        "displayName": "EROS_Purchasing EROS DSMCurrencyServices [SOAP]",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-17"
            }
          ]
        },
        "tags": [
          "China affected",
          "Maturity Level 1"
        ]
      },
      {
        "id": "a9877a71-3640-46b5-8939-a944dccfaf8d",
        "description": "SCIS214_IDM_UserIdentityData\n",
        "displayName": "IdM_SCCO0976",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8244054b-c4ed-42e5-ad54-cbeb02581be9",
        "description": "This is a new architecture RESTFul API for the IGA system.",
        "displayName": "IGA - Identity Governance & Administration_IGAAPI2ndGen IE v0.1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-31"
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
        "id": "fce25bfb-d77c-477a-a880-6e52cabef937",
        "description": null,
        "displayName": "Navision Deleted_Invoicing file transfer",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "77c3fe38-359a-4a23-8e3c-31a6b0d72432",
        "description": "SCIS433_InvoiceAddress_Service",
        "displayName": "OrderIT_SCCO2995",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "19e3e354-7a6b-4b5c-bf68-2e0c362d52e4",
        "description": null,
        "displayName": "ScaniaNow_ScaniaNow web portal",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f32bbe7a-7c5d-4599-b7c9-5f1ba90514cc",
        "description": "SCIS096_Navision_Invoices_SIFO\n",
        "displayName": "ScaniaNow_SCCO0272",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "38d84b03-d855-4576-b803-6e70701602e8",
        "description": "SCIS295_Distribute_Invoice_Service",
        "displayName": "ScaniaNow_SCCO2962",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d0702450-7f84-4c9f-9f60-20805bc0edc4",
        "description": "Access control logs in to eBS. Manual integration from ScaniaNow",
        "displayName": "ScaniaNow_user accounts & responsibilities",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "bc88b2e3-d611-4ca7-a9eb-b79a09b5b789",
          "displayName": "ServiceNow ServiceNow",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        }
      ],
      "accessControl": []
    },
    "ssoProvider": "miniOrange, Okta",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IBG",
    "ChinaDesign": "IBG",
    "ChinaSourcing": "IBG",
    "ChinaPaying": "IBG",
    "ChinaImplementation": "IBG",
    "Chinaverification": "TTI",
    "ChinaOperations": "IBG"
  }
}