export default {
  "completion": {
    "percentage": 85,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 77,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 72
  },
  "subscriptions": [
    {
      "firstName": "Robert",
      "lastName": "Ciborowski",
      "displayName": "Robert Ciborowski",
      "email": "robert.ciborowski@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner",
        "Information Owner"
      ]
    },
    {
      "firstName": "Yasmine",
      "lastName": "Mohamed",
      "displayName": "Yasmine Mohamed",
      "email": "yasmine.mohamed@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Helen",
      "lastName": "Nordquist",
      "displayName": "Helen Nordquist",
      "email": "helen.nordquist@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Eduardo",
      "lastName": "Abrigo",
      "displayName": "Eduardo Abrigo",
      "email": "eduardo.abrigo@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Joe",
      "lastName": "Mathews",
      "displayName": "Joe Mathews",
      "email": "joe.mathews@scania.com",
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
      "firstName": "Pontus",
      "lastName": "Ekehult",
      "displayName": "Pontus Ekehult",
      "email": "pontus.ekehult@scania.com",
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
    "name": "QING",
    "description": "Quality in Information Globally.\nGlobal master of customer data, aiming to collect customer data from Dealer Management Systems from all Scania workshops in the world and consolidating customer data, augmenting customer data with Dun & Bradstreet information, generating a globally unique customer ID and then making this customer data available for use throughout Scania.\n\nMaster Data Management system built on IBM InfoSphere MDM.",
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
    "predecessor": [
      {
        "id": "00d42dbb-3077-4ede-bd81-ea0fea02c660",
        "displayName": "Scania Emergency System / SCUD",
        "description": "Customer, contracts, vehicles etc are pushed (through FTP) from the dealer systems up to Scania Assistance Application Server and then inserted into a database.\r\n\r\nSCUD is a database that mirrors DMS information about Customer, contracts, vehicles etc. This information is uploaded a daily basis (through FTP) from the dealer systems to Scania Assistance Application Server and then inserted into a database. Some information (Contract) is also uploaded from Ramas. There is a generic batch program (.NET) that parses fixed format text files and inserts data into the database. There are also some file based SEIP integrations (.NET batch), a WCF Service (obsolete), a web interface (.NET MVC 5) used to browse the database information and two SOA Services built on SCUD.\r\nThe original SCUD database is an old application, old database/architecture. It has been upgraded to .NET 4.5 including some minor architectural improvements. The web interface and SOA services are newer and built on a modern architecture.\r\n",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "c365ee48-1595-44bd-b085-5d8354ec306a",
        "activeFrom": null,
        "activeUntil": null,
        "description": "QING Search Application provides different Search criteria to fetch Customer and Product Individuals information from existing QING MDM system. It is displaying Customer and Product details to end users. Currently we have different search options like Search by Name, Name & Address, Contact, Identifiers, Updated Parties and Search by Product.",
        "displayName": "QING / QING SEARCH",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 4"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "f3b76014-ecef-493c-a7b0-63d8174d4337",
      "displayName": "CIAM and QING in relation to Customer Digital Experience",
      "fullName": "CIAM and QING in relation to Customer Digital Experience",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Staffan Vildelin",
          "email": "staffan.vildelin@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Peter Björk",
          "email": "peter.x.bjork@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "014cf162-e73c-489f-a4cd-ea97d217cc86",
      "displayName": "QING MDM",
      "fullName": "QING MDM",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
    },
    {
      "id": "5684e187-4bdc-4379-95ed-eee24536b471",
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
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "missionCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-11-17",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-11-17",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpCompleted",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2022-12-12",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2023-12-12",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
      {
        "id": "1e374a84-9ff9-4eaa-a419-ae18340754f6",
        "displayName": "B. Legal, Risk and Compliance Management / Compliance Management / Export Control Management",
        "description": "The ability of Scania to adapt to the Export Control Compliance Program (ECCP) to comply with national and third country export control legislation, sanctions and embargoes.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-17"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
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
      },
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
        "id": "111ebccd-1f0a-47a5-a471-5276eca2e454",
        "displayName": "I. Presales, Sales and Customer Relationship Management / Customer Relationship Management / Customer Prospecting",
        "description": "Ability to find new potential customers.",
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
      },
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
        "id": "7a0e124e-8fcf-44f9-9123-2c9585f007ae",
        "displayName": "Supporting processes / Lack of parent / Customer Relationship Management",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "41b9f026-dee3-426a-b287-fc241d19f315",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAE - Information Management",
        "usageType": "ITmaintenance",
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
        "id": "38432142-52c4-4d91-a53b-9fa43d7b6363",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-02"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "cc652878-24bc-4fb0-95ee-c50a430fb0d6",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / B - Support Functions / BF - Finance and Business Control",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-12-02"
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
        "id": "4a3932b5-71b1-4799-9c78-c5c7f6eb36ca",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU United Kingdom / MD - MD's Office / BD - Business Development and Marketing",
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
        "id": "a20b8cf4-cf7f-44e6-a2de-0e7e3e402d54",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / S - Purchasing / SN - Projects, Strategy & Regions / SN1 - Business Development / SNS - Sustainability & Product Compliance​",
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
        "id": "d4216871-6a7c-4087-b1f8-5c4daf494d9f",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing",
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
      },
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
        "id": "2c5e3bbb-156d-4d34-acb9-d08be4faf28e",
        "description": "Person represents the \"flesh and blood\" level at the Organization side, individual employee, maintenance responsible and driver can be good example of Person. A person belongs to a specific Organization and can be responsible for several Organizations (as for example sales responsible for several customer accounts). A person can have different kind of internal and external Person identification.  Person is a main division of the superior and more generic entity Party, where Party also includes the Organizational side, which has great importance for Scania as a business-to-business company.",
        "displayName": "Organisation Domain / Party & Customer Entity / Person",
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
        "id": "4c09b40a-5595-4db9-98f0-9f13d71e367c",
        "description": "Generic level for all kind of products that Scania can sell to buyer party, i.e. customer or other contracting party - the \"hard side\" with Product As Designed, Spare Parts components and the increasing \"soft side\" with Services that can be offered and bundled together with vehicles and engines.",
        "displayName": "Product Portfolio Domain / Product As Designed Entity / Product",
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
        "id": "121f10e8-06b7-4b1e-bb02-8b84aad93757",
        "description": null,
        "displayName": "API Management (APIM)_ScaniaAPIAnalyticsService IE v1",
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
        "id": "6aef6b8c-0896-48db-a09b-408343f7d4ac",
        "description": null,
        "displayName": "Automaster CER_Customer [FTP]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fe1f8e28-dd7d-4c74-8e36-1232c60dce0b",
        "description": null,
        "displayName": "Automaster CER_GOP [FTP]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5364885b-d1e1-44c9-9418-e0fdf0b5d5e4",
        "description": null,
        "displayName": "Automaster CER_Vehicle [FTP]",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b4029c47-dbd4-4872-994d-b2e8572750f7",
        "description": null,
        "displayName": "Conversion_Conversion-ProductAdaptationsAPI IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-12-02"
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
        "id": "0d3deb89-e1d3-420b-a183-7d6e6bc79729",
        "description": null,
        "displayName": "Duns and Bradstreet",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d4595617-7980-4789-8cdd-a4328bc4cc43",
        "description": null,
        "displayName": "FMAT Customer Api - Query",
        "lifecycle": null,
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
        "id": "cab74841-be67-445c-b1b0-c312345fae25",
        "description": null,
        "displayName": "SGB Data Lake_QING",
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
      },
      {
        "id": "0f620d0d-8ed8-408b-900c-ede16830798a",
        "description": null,
        "displayName": "SIS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5726d034-068e-4af1-bcc4-f30bd00b58b1",
        "description": null,
        "displayName": "SQS_ScaniaSQS-benelux IE 2.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-21"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6b73ed48-3e78-4228-bb04-06774451e210",
        "description": null,
        "displayName": "SQS_ScaniaSQS-benelux IE V1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "eb2512f1-be7c-4e50-aa58-66deaa362b50",
        "description": null,
        "displayName": "Truck & Bus Bodybuilder Portal_SPII",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "c1bed683-6bd4-480c-8087-d8577f31cddd",
        "description": "Interface for customer information. Draft for Commercial Target Architecture.",
        "displayName": "QING_Customer [Kafka]",
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
        "id": "bdde736c-36c2-42f4-9943-c5133d6b9c32",
        "description": null,
        "displayName": "QING_Data Lake",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2271bfe2-cd4a-4d82-bc2d-c36c54fce3f3",
        "description": "Interface for customer information. Draft for Commercial Target Architecture.",
        "displayName": "QING_Prospect [REST]",
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
        "id": "e12201ae-38a3-4cb1-9b2c-a4c52e737bd9",
        "description": null,
        "displayName": "QING_QING",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8ef09ec5-5f31-4c8d-9ed8-b3af8c6e5c71",
        "description": null,
        "displayName": "QING_QING CUSTOMER INFORMATION SERVICE",
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
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "6c190a93-fe63-4b8c-86b2-f7a600ef1400",
          "displayName": "Intellect BPM",
          "category": "software",
          "description": "Intellect BPM is a platform for building business applications and native mobile apps with offline capabilities with no programming required.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-03-25"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "f0a9858f-3161-444e-8f5d-6ec146f8f847",
          "displayName": "Syndigo / Riversand Technologies Master Data Management",
          "category": "software",
          "description": "Syndigo MDM formerly Riversand Master Data Management provides users with actionable insights, instant business value, and compliance with data governance and rules across the enterprise. It is a multi-domain, cloud-native MDM solution that delivers stability and the means to scale while providing a single, accurate, trustworthy source of master data.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2021-05-21"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [],
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
    "ssoProvider": "Two factor Authentication with MS  Azure and Scania Global Account",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "KYTF",
    "ChinaDesign": "IXAE",
    "ChinaSourcing": "IXAE",
    "ChinaPaying": "KYTF",
    "ChinaImplementation": "IXAE",
    "Chinaverification": "KYTF",
    "ChinaOperations": "IXAE"
  }
}