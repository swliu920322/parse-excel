export default {
  "completion": {
    "percentage": 43,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 76,
    "dataManagement": 50,
    "dependencies": 50,
    "information": 67,
    "projects": 0,
    "robots": 0,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Gustav",
      "lastName": "Arrhenius",
      "displayName": "Gustav Arrhenius",
      "email": "gustav.arrhenius@scania.com",
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
      "firstName": "Simone",
      "lastName": "Roffe",
      "displayName": "Simone Roffe",
      "email": "Simone.Roffe@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Christer",
      "lastName": "Forsberg",
      "displayName": "Christer Forsberg",
      "email": "christer.forsberg@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Gunnar",
      "lastName": "Löfgren",
      "displayName": "Gunnar Löfgren",
      "email": "gunnar.lofgren@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Rickard",
      "lastName": "Atthem",
      "displayName": "Rickard Atthem",
      "email": "rickard.atthem@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
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
      "firstName": "Simon",
      "lastName": "Nilsson",
      "displayName": "Simon Nilsson",
      "email": "simon.nilsson@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Diego",
      "lastName": "Benatti",
      "displayName": "Diego Benatti",
      "email": "diego.benatti@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Emiel",
      "lastName": "Oldenkamp",
      "displayName": "Emiel Oldenkamp",
      "email": "emiel.oldenkamp@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Mirela",
      "lastName": "Dobre",
      "displayName": "Mirela Dobre",
      "email": "mirela.dobre@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Julija",
      "lastName": "Kukele",
      "displayName": "Julija Kukele",
      "email": "julija.kukele@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Peter",
      "lastName": "Alåsen",
      "displayName": "Peter Alåsen",
      "email": "peter.alasen@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Ericka",
      "lastName": "Guimarães Saulo",
      "displayName": "Ericka Guimarães Saulo",
      "email": "ericka.guimaraes.saulo@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Jerzy",
      "lastName": "Hopfinger",
      "displayName": "Jerzy Hopfinger",
      "email": "jerzy.hopfinger@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Enno",
      "lastName": "Grüning",
      "displayName": "Enno Grüning",
      "email": "enno.gruning@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Tuncay",
      "lastName": "Dagdelen",
      "displayName": "Tuncay Dagdelen",
      "email": "tuncay.dagdelen@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Ladislav",
      "lastName": "Dolezal",
      "displayName": "Ladislav Dolezal",
      "email": "ladislav.dolezal@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "Digital Dealer",
    "description": "Digital Dealer collects & displays data from different systems about; vehicles, customers and vehicle repair and maintenance needs. It allows the workshops to plan, execute and follow up work done.   \nDigital Dealer Dashboard is a cloud-based service hosted in AWS. \n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2019-03-11",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "37d7f498-72ac-4a3f-8adb-25d34f662594",
        "displayName": "Fleet Monitoring",
        "description": "Fleet Monitoring Tool supporting Fleet Care.",
        "type": "Application",
        "tags": [
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
        "id": "c418f610-c82e-4663-852d-ec39af2eaf3a",
        "activeFrom": null,
        "activeUntil": null,
        "description": "The analytics and reporting capabilities integrated in Digital Dealer are built on a PowerBI platform and allows DD users to get analytics, statistics and reports of DD usage and vehicles with their workshop as homeworkshop etc.",
        "displayName": "Digital Dealer / Digital Dealer Analytics and reporting",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected"
        ],
        "subscriptions": []
      },
      {
        "id": "94c89605-96fd-4053-8303-3fc5ab605ff0",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Digital Dealer support uses the Service Now platform and is fully integrated to the Digital Dealer application, with child applications. It allows a user to talk to support and register and follow up cases.",
        "displayName": "Digital Dealer / Digital Dealer Support",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "China affected"
        ],
        "subscriptions": []
      },
      {
        "id": "7d29e159-967b-44cc-b073-f8bdfcf07b3c",
        "activeFrom": null,
        "activeUntil": null,
        "description": "FleetCare is integrated in Digital Dealer and provides a FleetCare capability for the markets to sell as a service. ",
        "displayName": "Digital Dealer / FleetCare (Digital Dealer)",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "f714ee26-f7a4-49d6-8b91-e671ae2a4d94",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Global planning within Digital Dealer lets the workshop do all their technician planning; schedules, absence, workorder responsibility, technician skills, technician teams etc, directly in Digital Dealer. ",
        "displayName": "Digital Dealer / Global Planning (Digital Dealer)",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "82b58d39-e1a3-4a5f-8aec-1f377e557e7d",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Administration, invoicing, cost control and  follow up of R&M contracts.\n\nThis fact sheet also includes Contract Repository, Price Model and Claim gateway. \n\nCS Market map\nhttps://csmarkets-service.6cpa1lp6jep7e.eu-west-1.cs.amazonlightsail.com/",
        "displayName": "Digital Dealer / Pactum",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Not China affected",
          "Maturity Level 3",
          "Target State Commercial"
        ],
        "subscriptions": []
      },
      {
        "id": "ea151f42-4fdd-4ad6-9eae-31de903168e4",
        "activeFrom": null,
        "activeUntil": null,
        "description": "The Service advisor dashboard in Digital Dealer gives the Service advisor all vehicles in need of service, repair or similar as well as detailed information about the vehicles, their owner, contact details, repair and maintenance needs etc. ",
        "displayName": "Digital Dealer / Service advisor Dashboard (Digital Dealer)",
        "type": "Application",
        "lifecycle": null,
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "577ff3e2-c073-4071-9a28-faf9d901ecdc",
        "activeFrom": null,
        "activeUntil": null,
        "description": "TED -  Technician Dashboard is a solution for our service technicians. It is integrated with Digital Dealer and shows the work orders with all its details eg job, parts and labour. Stamping is done through TED and connected to the HR modules so that eg productivity & efficiency can be calculated. ",
        "displayName": "Digital Dealer / TED (Digital Dealer)",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 1",
          "Target State Commercial"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [],
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
              "startDate": "2021-06-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-06-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "ae8ef3dc-ce53-4a8d-96ff-c09b221cfa28",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management / Customer Information Management",
        "description": "The ability to maintain relevant information about customers, including status, contacts, addresses and more.",
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
        "id": "ac6f1aed-441f-4f81-8fca-aeefac3d036a",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Quotation & Deal Management / Sales Quotation Handling",
        "description": "Ability to provide most suitable solution configuration and price quotation to customer needs. Eg: Sales Quotation initiation. Sales quotation analysis (including product and service need identification). Preliminary resource allocation (during confirm of sales quotation). Sales quotation printing & publishing. Sales Quotation price handling. Sales Quotation negotiation handling. Sales quotation approval. Confirmed sales quotation receiving. Sales quotation rejection.\nManage Quotations and Deals; Make offerings to and negotiate with  prospective customers to get the deal.\n",
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
        "id": "7adafcb7-ffad-4b25-9ac2-36c87a9b40b9",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Sales Order Creation",
        "description": "The ability to handle Sales orders for Scania offered Products and Services through the distribution chain, including configuration, description, approval, changes.\nExample: Sales order approval, Sales order change handling (initiated from Scania or req. from customer), Sales order traceability handling.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-19"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "2e4dba63-2efe-4e9e-8ae8-fe47b5f4aac9",
        "displayName": "K. Solution Completion and Delivery / Sales Order Management / Sales Order Validation",
        "description": "The ability to validate and check feasibility of sales orders for Scania offered products and services.\nExample:\nCustomer or requester information\nProducts and services from a technical perspective including both standard orders and special request orders\nProducts and services from a commercial perspective, e.g. terms, agreements, prices, Incoterms, delivery conditions\nTransports and delivery times\nAnd more",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-19"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "474fd25a-3550-41be-be43-591d2d4cbb62",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Product Repair, Maintenance and Updating / Product Individual Management",
        "description": "Eg: Product individual information reading or Product individual information update",
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
        "id": "abdddd11-d1a3-497b-ace9-5c7268c269a4",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Product Repair, Maintenance and Updating / Workshop Resource Planning",
        "description": "Ability to plan repair and maintenance executions, eg tools and other material needed, spare parts needed, suitable physical area and mechanics.",
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
        "id": "8d315a27-2134-4ae4-8960-83f4b6b223ed",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Solution Quality and Warranty Management / Warranty & Claims Management",
        "description": "Handle claims and warranties throughout delivered products lifecycle",
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
        "id": "55c85617-adde-44f0-a95c-a06dd120920b",
        "displayName": "Services delivery / Workshop process",
        "description": "The workshop process describes the how a Scania workshop in a structured way handle customer needs as well as internal efficiency during maintenance and repair of customers vehicle and power solutions",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "e07f6e0a-2d72-4449-8369-f70217b9f773",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAB - Workshop Process / IABA - Digital Dealer",
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
        "id": "4a3932b5-71b1-4799-9c78-c5c7f6eb36ca",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / BD - Business Development and Marketing",
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
        "usageType": null,
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
      },
      {
        "id": "ee7d7cb7-b9de-4518-9f94-0eb350eb00d4",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KY - Service Portfolio & Delivery / KYD - Retail Digitalisation",
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
        "id": "ab54b23e-3afe-4347-963a-666add1e0d20",
        "description": null,
        "displayName": "API Management (APIM)_TodoRestAPI BR 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-17"
            }
          ]
        },
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
        "id": "82ff9af2-04e4-4242-9d8c-f3978c5e2ca5",
        "description": null,
        "displayName": "Digital Dealer / TED (Digital Dealer)_TEDTimeStamping IE v1",
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
        "id": "d99a1a2a-d07b-4171-b2f6-f210395e9237",
        "description": null,
        "displayName": "Digital Dealer_DMSMigrator IE v1",
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
      },
      {
        "id": "64344413-b39d-49f6-83c6-225a4541d2b7",
        "description": null,
        "displayName": "Digital Dealer_FaultCodeSinkV1 IE 2.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-14"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cd09dad6-8a9a-478a-9be0-829a047d5787",
        "description": null,
        "displayName": "Digital Dealer_Maintenance IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-30"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "1badabd7-374a-4b59-87d9-080f3e4545c8",
        "description": null,
        "displayName": "Digital Dealer_MaintenancePlanUpdatedSink IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-13"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a77bb07d-97cf-4dbe-a421-249f45ffec07",
        "description": null,
        "displayName": "Digital Dealer_StandardTime IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-08"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "14da0f70-6e42-42f1-b39e-368b931eb8b2",
        "description": null,
        "displayName": "Digital Dealer_TechnicianAbsence IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-23"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cf591e42-1aca-40c5-9957-b9002b7213c5",
        "description": null,
        "displayName": "Digital Dealer_TechnicianAllocation IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-05"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "313d471d-c551-46f0-80e9-744a0b18beaa",
        "description": null,
        "displayName": "Digital Dealer_TechnicianFinding IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "543523c7-d6d4-4ec3-8d43-714474794424",
        "description": null,
        "displayName": "Digital Dealer_TechnicianSchedule IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b512b661-ae3e-4528-b944-c1943c3abad6",
        "description": null,
        "displayName": "Digital Dealer_Vehicle-health-check-jobs IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-28"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "42e140af-7788-4767-87de-9aa3c1d8ed14",
        "description": null,
        "displayName": "Digital Dealer_VehicleContacts IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-05"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a6a8d100-5f57-475c-8d28-00e45209582b",
        "description": null,
        "displayName": "Digital Dealer_VehicleMessage IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-05"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4241f2e3-b87d-44c8-a5d0-50435931a687",
        "description": null,
        "displayName": "Digital Dealer_WorkOrder IE v3",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4c69c781-4d50-48c1-af2f-cf4086157b24",
        "description": null,
        "displayName": "Digital Dealer_WorkOrder IE v4",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "c764a9e5-dd8f-49b4-8ab4-d65cd77d4df2",
        "description": null,
        "displayName": "Digital Dealer_WorkorderactiveusersV1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-30"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "222a164f-258a-455e-8097-f9c20d31cf05",
        "description": "WorkOrder api do not use this,",
        "displayName": "Digital Dealer_WorkOrderV3 IE v3",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "aa155ae3-e4a1-4a7f-be4f-1a0b3e71ae21",
        "description": null,
        "displayName": "Driver's Guide DDI_DDIService IE v1",
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
        "id": "c2c3e7a4-6f9c-4909-b8af-ac6b8e260caf",
        "description": null,
        "displayName": "ECU Events_ECU Events API",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2018-08-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d4a153d6-d1e6-4ea1-8748-35246aa71cd4",
        "description": "Equipment usage API  enables Scania entities to fetch equipment usage parameters",
        "displayName": "Equipment Usage API v1_EquipmentUsage IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-14"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "10c5cfb0-b587-4fc3-9e35-74d8765854df",
        "description": null,
        "displayName": "Fleet Monitoring_fleet_care_integration IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-03-31"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "1d3a3387-e9b4-4508-b15c-85468018f594",
        "description": "API is responsible for receiving leads from Scania Configurator and AEM forms, and exposing them for CRM systems across Scania.",
        "displayName": "Lead Service_LeadService IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-08"
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
        "id": "cfd3803f-5673-455e-9b05-7e1f75c4f8bf",
        "description": null,
        "displayName": "Multi_FixedPriceService IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d7702611-7580-49c2-8db0-b996f78234ae",
        "description": null,
        "displayName": "Multi_vsi-technical-info-service IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-26"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b16d613d-f4af-40e9-a00c-8f13dec60a78",
        "description": null,
        "displayName": "Multi_vsi-technical-info-service IE 2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-06"
            }
          ]
        },
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
        "id": "3b12fc97-4139-4ba0-8bc3-a54accbed503",
        "description": "Interface for customer information. Draft for Commercial Target Architecture. \"Active from\" date to be verified.",
        "displayName": "Scania D365 Golden Blueprint_Customer [REST]",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2022-09-07"
            },
            {
              "phase": "active",
              "startDate": "2024-01-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6e8326e8-aa9f-44ea-bb6c-939840960f5d",
        "description": "Workshop interface for vehicle maintenance plans",
        "displayName": "ScaniaMaintenance_MacWorkshopEdu IE v8",
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
        "id": "92278e95-7a8b-4ec0-88fa-3e5e0e6036ee",
        "description": null,
        "displayName": "ScaniaMaintenance_sma IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-02"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f0a146ef-bdac-4b9f-baf1-94d92722d99a",
        "description": "SCOB Order application",
        "displayName": "SCOB OM_SCOB BR v1",
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
        "id": "112e482d-ccf2-49c9-b806-9c6976bd8517",
        "description": null,
        "displayName": "Service Planning_ServicePlanningInternalInterfaceApiV1 IE api",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-14"
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
        "id": "75017817-7ad6-4202-9e6f-298388159188",
        "description": null,
        "displayName": "SWS_prod-symptom-data-structure IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-11"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "357bb596-a168-4ce3-a8f8-363431f2c61d",
        "description": null,
        "displayName": "SWS_VSI-SwsDdIntegration IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-02-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f8c2e4f6-aab8-41fe-8e00-508b36e3e909",
        "description": "This is the main API for Symptom Diagnoser, serving ML models to predict failing parts.",
        "displayName": "SWS_vsi-symptom-diagnoser IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-02-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6f94cb6a-5ee8-49d7-83cb-2b81081bed01",
        "description": null,
        "displayName": "WHI_Workshop_History_Information IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-23"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "11e44b33-e9cf-4863-8eaf-277091abcc38",
        "description": "Symptom Diagnoser(Brain) assists service advisors with finding the likely cause for a fault based on symptom description and chassis specification.",
        "displayName": "YSML - BRAIN (Symptom Diagnoser)_ysml-symptom-diagnoser-prod IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-22"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      }
    ],
    "interfaceProvide": [
      {
        "id": "82400b89-addb-4da8-bc8c-630da488c090",
        "description": null,
        "displayName": "Digital Dealer_CustomerCredit IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "d99a1a2a-d07b-4171-b2f6-f210395e9237",
        "description": null,
        "displayName": "Digital Dealer_DMSMigrator IE v1",
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
      },
      {
        "id": "157e0d36-ffe8-46f4-880a-8b723c9d8191",
        "description": null,
        "displayName": "Digital Dealer_ExperienceCampaign IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-14"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "9ac9c52f-bbe8-4136-b285-1fac7ffa9f9d",
        "description": null,
        "displayName": "Digital Dealer_FaultCodeSinkV1 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "64344413-b39d-49f6-83c6-225a4541d2b7",
        "description": null,
        "displayName": "Digital Dealer_FaultCodeSinkV1 IE 2.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-14"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cd09dad6-8a9a-478a-9be0-829a047d5787",
        "description": null,
        "displayName": "Digital Dealer_Maintenance IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-30"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "1badabd7-374a-4b59-87d9-080f3e4545c8",
        "description": null,
        "displayName": "Digital Dealer_MaintenancePlanUpdatedSink IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-13"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ffabe392-087e-4ac8-8e92-c58dad330008",
        "description": null,
        "displayName": "Digital Dealer_Opportunity IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "9aaaeac2-bfc8-4035-baaa-ed11ad1b8c76",
        "description": null,
        "displayName": "Digital Dealer_service-now-ted IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-07-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "320217fe-f44a-423f-a157-46d8f67853ab",
        "description": null,
        "displayName": "Digital Dealer_SimplifiedMaintenance IE v2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a77bb07d-97cf-4dbe-a421-249f45ffec07",
        "description": null,
        "displayName": "Digital Dealer_StandardTime IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-08"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4bcf86f5-a603-413b-b0dc-766f00b651e3",
        "description": null,
        "displayName": "Digital Dealer_Technician IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "14da0f70-6e42-42f1-b39e-368b931eb8b2",
        "description": null,
        "displayName": "Digital Dealer_TechnicianAbsence IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-23"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cf591e42-1aca-40c5-9957-b9002b7213c5",
        "description": null,
        "displayName": "Digital Dealer_TechnicianAllocation IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-05"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "313d471d-c551-46f0-80e9-744a0b18beaa",
        "description": null,
        "displayName": "Digital Dealer_TechnicianFinding IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "543523c7-d6d4-4ec3-8d43-714474794424",
        "description": null,
        "displayName": "Digital Dealer_TechnicianSchedule IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-08-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ec7bf324-a185-4a6e-83e2-9addf5dca1cb",
        "description": null,
        "displayName": "Digital Dealer_Vehicle IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-22"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b512b661-ae3e-4528-b944-c1943c3abad6",
        "description": null,
        "displayName": "Digital Dealer_Vehicle-health-check-jobs IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-28"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "42e140af-7788-4767-87de-9aa3c1d8ed14",
        "description": null,
        "displayName": "Digital Dealer_VehicleContacts IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-05"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a6a8d100-5f57-475c-8d28-00e45209582b",
        "description": null,
        "displayName": "Digital Dealer_VehicleMessage IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-05"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "cfaece0a-d77a-4732-9e87-989147f105c0",
        "description": null,
        "displayName": "Digital Dealer_work-order-comment IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-24"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4241f2e3-b87d-44c8-a5d0-50435931a687",
        "description": null,
        "displayName": "Digital Dealer_WorkOrder IE v3",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4c69c781-4d50-48c1-af2f-cf4086157b24",
        "description": null,
        "displayName": "Digital Dealer_WorkOrder IE v4",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "c764a9e5-dd8f-49b4-8ab4-d65cd77d4df2",
        "description": null,
        "displayName": "Digital Dealer_WorkorderactiveusersV1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-30"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "60166465-ece9-44c5-8765-18d47820ea5e",
        "description": null,
        "displayName": "Digital Dealer_WorkOrderPrice IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-07-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "222a164f-258a-455e-8097-f9c20d31cf05",
        "description": "WorkOrder api do not use this,",
        "displayName": "Digital Dealer_WorkOrderV3 IE v3",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-15"
            }
          ]
        },
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "d2d7c316-d43b-42dc-b366-136ee04d8bb8",
          "displayName": "Amazon.com / AWS Amazon S3",
          "category": "service",
          "description": "Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2006-03-14"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
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