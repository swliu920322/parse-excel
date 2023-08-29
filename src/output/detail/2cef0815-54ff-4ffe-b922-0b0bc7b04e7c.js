export default {
  "completion": {
    "percentage": 75,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 66,
    "dataManagement": 66,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 60
  },
  "subscriptions": [
    {
      "firstName": "Arun Kumar",
      "lastName": "Krishnamurthy",
      "displayName": "Arun Kumar Krishnamurthy",
      "email": "arunkumar.krishnamurthy@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Christina",
      "lastName": "Grundström",
      "displayName": "Christina Grundström",
      "email": "christina.grundstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
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
      "firstName": "Helena",
      "lastName": "Hyttnäs",
      "displayName": "Helena Hyttnäs",
      "email": "Helena.Hyttnas@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Tobias",
      "lastName": "Vidderfjell",
      "displayName": "Tobias Vidderfjell",
      "email": "Tobias.Vidderfjell@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Kvitter",
      "lastName": "Javelin",
      "displayName": "Kvitter Javelin",
      "email": "kvitter.javelin@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "RAMAS",
    "description": "Administration, invoicing, follow up of Repair & Maintenance contracts, EPC contracts etc.\nVariant refers to European and African markets where the Ramas environment is hosted in Södertälje, Hong Kong and Sao Bernardo do Campo (Sao Paulo). \n\nThis fact Sheet includes both Local RAMAS and Corporate RAMAS. \n\nCS Market map\nhttps://csmarkets-service.6cpa1lp6jep7e.eu-west-1.cs.amazonlightsail.com/",
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
    "predecessor": [],
    "successor": [
      {
        "id": "82b58d39-e1a3-4a5f-8aec-1f377e557e7d",
        "displayName": "Digital Dealer / Pactum",
        "description": "Administration, invoicing, cost control and  follow up of R&M contracts.\n\nThis fact sheet also includes Contract Repository, Price Model and Claim gateway. \n\nCS Market map\nhttps://csmarkets-service.6cpa1lp6jep7e.eu-west-1.cs.amazonlightsail.com/",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 3",
          "Target State Commercial"
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
      "id": "a8d555c9-0253-4698-a929-12d506ab3b99",
      "displayName": "EPC - Extended Product Coverage",
      "fullName": "EPC - Extended Product Coverage",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
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
              "startDate": "2021-06-07",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-06-07",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2014-01-15",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2015-01-15",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "e44d979f-e148-4a71-86c1-24fd3d247f46",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Quotation & Deal Management / Customer Contract Handling",
        "description": "Ability to come to a formal agreement to sell and service a product. Eg: Customer contract creation or Customer contract completion.",
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
      },
      {
        "id": "0b6064c5-bcda-48ef-9229-ff47cdc7b85d",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Customer Invoice Management",
        "description": "Administrate, prepare, and validate customer invoices.\nThe ability to invoice customers based on the contracts, payment plans and the delivery of the products.\nTo prepare customer invoice including e.g. identify parties involved, collect deliveries, order and contract information, terms, currency information and other information needed for invoice creation.\nTo create invoice based on prepared information manage financial bookings connected to invoice creation and manage costs for invoiced solutions.\nTo send collected and created invoice basis to affected parties and systems.",
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
      },
      {
        "id": "efc15230-f620-4aba-b745-f97f199f5420",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Services Contract Management / R&M Contract Management",
        "description": "Ability to manage the lifecycle of R&M contracts, e.g. creating, changing, settling, closing of contracts, creating contract parties, managing contract types, managing revenues, managing contract balance, cost/result sharing, subsidies etc.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-08"
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
        "id": "284449d8-c21c-4314-90e2-b7ede05b43bf",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAC - Contracted Services & Warranty / IACE - Contracted services 1",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-11-01"
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
        "id": "1c3f5556-60c4-4fce-aba9-ba08fd3b4460",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / A - Scania Sverige AB / AS - Servicemarknad",
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
    "objects": [],
    "interfaceConsume": [
      {
        "id": "d0afa46e-95ad-4f72-967d-eaaedd4161e4",
        "description": null,
        "displayName": "Automaster CER_Parts [DB]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8df59210-be0e-4f00-927d-8e5805051f91",
        "description": null,
        "displayName": "CS Contract Repository_cscontractrepository IE v1",
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
        "id": "59695a87-2846-4e9c-b2e5-596052fbcdd7",
        "description": null,
        "displayName": "CS Contract Repository_cscontractrepository IE v2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-25"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "49986fe6-5161-4b39-b003-57a6e85e9fe6",
        "description": null,
        "displayName": "CS Contract Repository_cscontractrepository IE v3",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-03-29"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d5bccf09-7c75-4fad-b859-1b5bd2f134bb",
        "description": null,
        "displayName": "Digital Dealer / Pactum_csclaimgateway IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-06"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6fa2a8f8-92a2-4849-a9b0-31fd7b219be4",
        "description": null,
        "displayName": "Digital Dealer / Pactum_csclaimgateway IE v2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-06"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ebcf2f80-d8ed-4833-9979-60274e0abf9d",
        "description": null,
        "displayName": "Digital Dealer / Pactum_csclaimgateway IE v3",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a9eaa488-0fb3-428e-87dd-4e3eb4622262",
        "description": null,
        "displayName": "iScala CER_Repair cost [DB]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "25a555aa-d103-4f42-9f2e-2b5b68fdf6ac",
        "description": "Sending POD SIAM Database\nSending contract SCCO4030\nSCIS593_Ramas_Invoice_SIFO",
        "displayName": "Oracle Financials (EBS) / eBS_AR_Invoicedetails SCCO4031",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-08-21"
            },
            {
              "phase": "endOfLife",
              "startDate": "2022-12-31"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "394addd3-a7da-4ec5-8a54-3e10bc7fcfa8",
        "description": null,
        "displayName": "RAMAS_cspricecalculator IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-06"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cb8b4175-733a-4558-8b1a-443f6cf91997",
        "description": null,
        "displayName": "Xeelo Contract Activation_Customer [DB]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "891f83f9-90d9-4bc4-a240-1363a7f08ae7",
        "description": null,
        "displayName": "Xeelo Contract Activation_Vehicle [DB]",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "86d6a55a-d7e1-4282-8bc3-a8ba04813c90",
        "description": "Sending Contract: SCCO4028, Sending POD: File in folder",
        "displayName": "RAMAS_Accounts Recivable SCCO4029",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "72cce558-7b71-41e6-a85d-b3bc77b3aaec",
        "description": null,
        "displayName": "RAMAS_CsContractGateway IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-14"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d6cd3090-6e14-4f55-bfbe-dafabc1eb0ba",
        "description": null,
        "displayName": "RAMAS_CsContractPrice IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-14"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "394addd3-a7da-4ec5-8a54-3e10bc7fcfa8",
        "description": null,
        "displayName": "RAMAS_cspricecalculator IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-06"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4a8c5080-7294-4748-978b-843dad246ed0",
        "description": null,
        "displayName": "RAMAS_Customer invoice [MQ]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cef94094-1a8f-4aa1-bd68-dda18f400993",
        "description": null,
        "displayName": "RAMAS_R&M contracts [SOAP]",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "bbf3dea0-89fe-4d38-8f53-3803a8f9f2b2",
          "displayName": "ASP.NET",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
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
          "id": "89d0a20f-176f-4533-a256-673005df5494",
          "displayName": "Microsoft Visual Studio 2017",
          "category": "software",
          "description": "Visual Studio provides a suite of component-based development tools and other technologies that can be used to build powerful, high-performance applications. In addition, Visual Studio is optimised for team-based design, development, and deployment of enterprise solutions.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2017-03-07"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-04-12"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-04-13"
              }
            ]
          },
          "tags": []
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