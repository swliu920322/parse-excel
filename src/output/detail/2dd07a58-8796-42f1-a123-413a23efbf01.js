export default {
  "completion": {
    "percentage": 50,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 50,
    "businessSupport": 82,
    "dataManagement": 38,
    "dependencies": 0,
    "information": 92,
    "projects": 0,
    "robots": 100,
    "sourcing": 80
  },
  "subscriptions": [
    {
      "firstName": "Flavia",
      "lastName": "Alves Domingos",
      "displayName": "Flavia Alves Domingos",
      "email": "flavia.alves.domingos@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Maria",
      "lastName": "Lagergren",
      "displayName": "Maria Lagergren",
      "email": "maria.lagergren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Nicklas",
      "lastName": "Eriksson",
      "displayName": "Nicklas Eriksson",
      "email": "nicklas.eriksson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Dávid",
      "lastName": "Takács",
      "displayName": "Dávid Takács",
      "email": "david.takacs@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Malin",
      "lastName": "Kastening",
      "displayName": "Malin Kastening",
      "email": "malin.kastening@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Harley",
      "lastName": "Carter",
      "displayName": "Harley Carter",
      "email": "harley.carter@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Hanna",
      "lastName": "Trolleberg",
      "displayName": "Hanna Trolleberg",
      "email": "hanna.trolleberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Caroline",
      "lastName": "Törnström",
      "displayName": "Caroline Törnström",
      "email": "caroline.tornstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "FMAT2",
    "description": "The FMAT2 replaced the old FMAT. It is a tool to support the administrative work within the Connected services area, to admin subscriptions and users for My Scania. \n\nFMAT2 User Interface was implemented in Q1/2021 to 65 countries and includes the following functionalities:\n\n- Customer & Staff management\n- Equipment Ownership connections\n- Product Catalogue (which services are available to the markets) \n- Subscription management including customer prices\n- Support material for customer invoicing \n& API´s to enable system to system integrations from local systems to our central functions \n\nFMAT also has several cloud based API´s consumed by the FMP/My Scania teams in order to provide the correct services for our customers. ",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2021-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "19ea246a-ca80-46ac-9fd1-6f5a2a04cc3f",
        "displayName": "FMAT1",
        "description": "Used to configure which services a specific vehicle should have during testing to then verify that the right data is sent. \n",
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": []
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
              "startDate": "2023-01-18",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-01-18",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2022-05-31",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2023-05-31",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "b3348690-d8f9-483e-98d2-c24f8c3d1896",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Development / Manage Enterprise Change Portfolio",
        "description": "The ability to identify enterprise improvement areas and bring forward ideas of inititives to be prioritized into portfolios, then managed and monitored securing deliveries towards target.\n\n",
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
        "id": "cbe81169-98cf-4bcd-a505-0bd85c44bd55",
        "displayName": "A. Manage and Develop Enterprise / Operational Management / Non Core Common Services",
        "description": "Common services needed to support and run non core daily business operations. Eg. Cleaning Service, Coffee Machine Service, Postal service",
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
        "id": "9c6a5d41-1200-41a7-b1da-296b83d099a7",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Solution Management / Price Management",
        "description": "Validate Price and Cost. Ensure that the industrial lifecycle cost of a product, in terms of pricing, is in balance with customer total operating economy. Eg: Customer price handling (including price list handling, price modification, price settlement, discounts management, price validation)",
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
        "id": "0119d57b-2964-4cb4-a931-e0ff666e7474",
        "displayName": "P. Information Technology and Data Management / Information Management",
        "description": "Ability to handle information as a corporate asset and use it in an optimally way. Providing right information at the right time to customers, Scania and partners. \nEnsure accessibility and reliability of information (digital thread, digital trust) for all stakeholders (including partners)",
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
      },
      {
        "id": "7a0e124e-8fcf-44f9-9123-2c9585f007ae",
        "displayName": "Supporting processes / Lack of parent / Customer Relationship Management",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "aa80b389-2e1f-4d75-898c-01aec3628628",
        "displayName": "Supporting processes / Lack of parent / Price Management",
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
        "id": "30974f11-b8a0-4696-883d-9c5ebe6d5cbb",
        "description": "Master Data Source QING A customer is an organization responsible for issuing an order to Scania, and is bound by all legal commitments linked to this event. Here in this customer entity it more distinctly represents \t  End-customer as Operator \t  End-customer as Owner   Other kind of \"customers\" (as Distributors, Dealers and Suppliers) which act in dealing and business events (such as Sales Order) will only occur once in this basic directory, however will they be represented in other information domains in some kind of purchasing and customer role related to the actual business event (i.e. Sales Order, Work Order, Service Usage Item).  Customer represents a corporation which is a  business partner  to and has a  customer relationship with Scania . Compared with Customer Site this subdivision represents the administrative office level.  This definition is distinct in another way than the more general \"A customer is a trading partner to whom a supplier supplies products and services\" (wiki.inline.scania.com). With this definition customer be equal to all supplied trading partners (and can be Distributors, Dealers, Workshop and other Scania internal units).  Customer is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Customer",
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
        "id": "6e681303-87ed-49b0-afd2-9d412b84663e",
        "description": null,
        "displayName": "WAM_FMAT2 -  https://fmatadmin.scania.com/v1/api/wam",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2023-05-01"
            }
          ]
        },
        "tags": [
          "XDS_SAML"
        ]
      }
    ],
    "interfaceProvide": [
      {
        "id": "8049ac5e-d142-43fc-9c33-aa9338024fad",
        "description": "Sending Contract: SCCO7963, Sending POD File in folder",
        "displayName": "FMAT2_Accounts Recivable SCCO7964",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cf4355ff-c388-4da4-ba19-02ab23ba827d",
        "description": "AWS SNS topic for events triggered from FMAT in connection with Customers, see https://gitlab.scania.com/Admirals/FmatCustomer/blob/master/Customer_Messages.md",
        "displayName": "FMAT2_FMAT Customer Event Notifications",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "e707d6a6-cae2-4a2e-9276-b22433217f74",
        "description": "Manage customer information, including depots.\nSwagger definition: https://fmat.apiuc.cs.scania.com/fmatcustomer/swagger/index.html\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Customer REST API V1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "4f70c46c-32ed-4600-a592-974a7255b067",
        "description": "Manage depots and staff/equipmentgroups.\nSwagger: https://fmat.apiuc.cs.scania.com/depot/swagger/index.html\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Depot REST API",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "94cdc2ee-d830-4f77-b10f-5a0013be10e4",
        "description": "The distributor API was built with the idea that each market will only be able to access their own data!\nFor more information see https://teamroom.scania.com/share/s/h3tA9XoYSWeYaSkfRaiR3g\nSwagger definition: https://fmat.testapiuc.cs.scania.com/fmatdistributor/swagger/index.html",
        "displayName": "FMAT2_FMAT Distributor REST API v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 3"
        ]
      },
      {
        "id": "230a6721-8ee7-4ee1-a3bf-d333330b0e8f",
        "description": "AWS SNS topic events triggered from FMAT in connection with Equipment, see https://gitlab.scania.com/Admirals/FmatEquipmentService/-/blob/master/equipment_messages.md\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Equipment Event Notifications",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "e80593d8-6556-4a22-a861-e0537344399b",
        "description": "AWS SNS topic events triggered from FMAT in connection with Equipment Ownership.\nSee https://gitlab.scania.com/Admirals/FmatEquipmentOwner/blob/master/equipmentOwner_messages.md\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Equipment Owner Event Notifications",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "0669e799-b42c-42e4-bc84-c86dd9bc848e",
        "description": "Manage ownership for equipment, including changes over time.\nSwagger: https://fmat.apiuc.cs.scania.com/fmatequipmentowner/swagger/index.html\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Equipment Owner REST API",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "bdc25037-09fa-4a0b-b9e7-37c9e1220de4",
        "description": "Manage customerManaged(soft) and ownership of equipment(hard & soft), including changes over time.\nSwagger: https://fmatequipmentservice.apiuc.cs.scania.com/swagger/index.html\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Equipment REST API",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "914701a0-9587-4ecf-88ed-8005043e97e1",
        "description": "Fetch packages and functional permission master data.\nSwagger: https://fmat.testapiuc.cs.scania.com/fmatproductcatalogue/swagger/index.html\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Product Catalogue REST API",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "1e54dc57-5338-4f37-b421-eeab4dd9089f",
        "description": "AWS SNS topic events triggered from FMAT in connection with Staff. See https://gitlab.scania.com/Admirals/FmatStaff/blob/master/staff_messages.md\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Staff Event Notifications",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "01285022-438c-4cf5-a879-6c419f666cfb",
        "description": "Manage staff, i.e. people working for a customer. This also includes drivers and driverCard information.\nSwagger: https://fmat.apiuc.cs.scania.com/fmatstaff/swagger/index.html\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Staff REST API",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "ccf11957-7464-4ac1-a72f-3a46f403cf1e",
        "description": "AWS SNS topic events triggered from FMAT in connection with Subscriptions, see https://gitlab.scania.com/Admirals/FmatSubscription/blob/master/subscription_messages.md\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Subscription Event Notifications",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "fcf49e7d-cb8d-4336-aa64-5bf008e1769e",
        "description": "Manage equipment, staff subscriptions and Functional permissions.\nSwagger: https://fmat.apiuc.cs.scania.com/fmatsubscription/swagger/index.html\nContact: fmat.20team@scania.com",
        "displayName": "FMAT2_FMAT Subscription REST API",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-01"
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
          "id": "3242c766-4e9c-48ea-a5c5-51d59fc443f6",
          "displayName": "Scania / Scania IT Tegel Design System",
          "category": "software",
          "description": "The Tegel Design System is for digital products and services at Scania. It enables an efficient development process and ensures a premium experience across all of Scania's digital touchpoints.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-12-20"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [
        {
          "id": "c147a7d4-784e-467f-9419-e99e8bf66774",
          "displayName": "Amazon.com / AWS Lambda",
          "category": "service",
          "description": "AWS Lambda allows developers to run code for virtually any application or backend service without provisioning or managing servers. With AWS Lambda, users can run code for virtually any type of application or backend service - all with zero administration. AWS Lambda runs its code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring, and logging. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2014-11-13"
              },
              {
                "phase": "active",
                "startDate": "2015-04-15"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "accessControl": [
        {
          "id": "e7fa910b-18b6-4ac4-860a-e24047f23ccd",
          "displayName": "RM Portal",
          "category": "Access_Control_Item",
          "description": "The Resource Manager Portal (RMP) was developed for handling authentication and authorization between Microservices using JSON Web Token (JWT).\n\nIn the beginning all Microservices were hosted On-Premise using Windows Authentication to authenticate each other’s calls. Windows Authentication is not a feasible solution when some Microservices were moved outside the Scania AD to some cloud. Instead of Windows Authentication Microservices can now use JWT based tokens called Service-to-Service token (S2S-token).\n\nThe target of deployment of these Microservices is not tied to any particular provider but can be a mixture of Azure, AWS and On-Premise among others. As long as all Microservices in a call stack can connect to each other the Service-to-Service (S2S) tokens can be used.\n\nYou use the RMP for telling which resources (REST endpoints) can be consumed by which applications (Clients). A team owning resources has full control of which applications have been granted access to its resources.\n\nSimply put there are three steps for start using S2S-tokens:\n- Use RMP to manage permissions for the S2S-tokens.\n- Create a S2S-token using the FMP Auth Service.\n- Send the S2S-token in each call to a resource. By checking the token the resource knows whether this call should be allowed or not.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-01-01"
              },
              {
                "phase": "phaseOut",
                "startDate": "2023-12-31"
              },
              {
                "phase": "endOfLife",
                "startDate": "2023-12-31"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ]
    },
    "ssoProvider": "AD",
    "statusSSO": "supported"
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