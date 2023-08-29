export default {
  "completion": {
    "percentage": 79,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 100,
    "businessSupport": 84,
    "dataManagement": 57,
    "dependencies": 50,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 72
  },
  "subscriptions": [
    {
      "firstName": "Henrik",
      "lastName": "Boman",
      "displayName": "Henrik Boman",
      "email": "henrik.boman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Helena",
      "lastName": "Westman",
      "displayName": "Helena Westman",
      "email": "helena.westman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Anders",
      "lastName": "Lenntorp",
      "displayName": "Anders Lenntorp",
      "email": "anders.lenntorp@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Sukesh Rohith",
      "lastName": "Parthasarathy",
      "displayName": "Sukesh Rohith Parthasarathy",
      "email": "sukesh-rohith.parthasarathy@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Erik",
      "lastName": "Engström",
      "displayName": "Erik Engström",
      "email": "erik.engstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Ove",
      "lastName": "Lindkvist",
      "displayName": "Ove Lindkvist",
      "email": "ove.lindkvist@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Torbjörn",
      "lastName": "Årman",
      "displayName": "Torbjörn Årman",
      "email": "torbjorn.arman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Thijs",
      "lastName": "Zwaveling",
      "displayName": "Thijs Zwaveling",
      "email": "thijs.zwaveling@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Balabrahmaji",
      "lastName": "Pagadadanda",
      "displayName": "Balabrahmaji Pagadadanda",
      "email": "balabrahmaji.pagadadanda@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Peter",
      "lastName": "Stålhammar",
      "displayName": "Peter Stålhammar",
      "email": "Peter.Stalhammar@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Yun Jin",
      "lastName": "Ku",
      "displayName": "Yun Jin Ku",
      "email": "tina.ku@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Developer"
      ]
    },
    {
      "firstName": "Pär",
      "lastName": "Hansson",
      "displayName": "Pär Hansson",
      "email": "par.hansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Tobias",
      "lastName": "Abrahmsen",
      "displayName": "Tobias Abrahmsen",
      "email": "tobias.abrahmsen@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Anton",
      "lastName": "Smith",
      "displayName": "Anton Smith",
      "email": "anton.smith@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Claes",
      "lastName": "Boije",
      "displayName": "Claes Boije",
      "email": "claes.boije@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "Mona Assembly China Axel & Gearbox",
    "description": "Mona Assembly (MA) Preparation, Production and Planning contain several modules to support for Axel & Gearbox in China, production processes in a common way within the product and process preparation. The whole Mona Assembly is divided into three main sub-groups: Preparation, Planning and Production. \nMA Planning consists of functions for Calendars and restrictions for production allocation (Central Production Planning). Axel & Gearbox Assembly for China planning including material gross demand, is part of the MONA concept. \n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "1994-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2035-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "4397ace9-ae94-4dae-88e4-4fb011f5b1b5",
        "displayName": "AROS",
        "description": "XXX",
        "type": "Application",
        "tags": [
          "Archive?"
        ],
        "subscriptions": []
      }
    ],
    "successor": [
      {
        "id": "18dd9d45-a292-41fc-85e2-aeaa520b3f05",
        "displayName": "MES",
        "description": null,
        "type": "Application",
        "tags": [],
        "subscriptions": []
      },
      {
        "id": "7196f648-5cae-4417-b16e-1b3bd2f5874f",
        "displayName": "SAP",
        "description": null,
        "type": "Application",
        "tags": [
          "China affected"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [
      {
        "id": "5c01a61b-9399-4dae-a938-deb5a4a8375c",
        "displayName": "MONA Systems",
        "description": "MONA Systems is a collection of six modules/applications. These applications have different MM's and support teams but have the same infra structure.  \n\nMona Assembly (MA):\n•Consists of several modules to support the local production processes in a common way within the product and process preparation.\n\nMaterial Control (MC):\n•Supports material procurement.\n\nMona Material (MM):\n•Accounts and Sets Prices to Material Transactions from Mona Assembly and SIMAS.\n•Organizes each PRU's Book of Value for Material.\n•Makes analysises of the Stock and basis for Stock Taking.\n•MMC Mona Material Central includes system IPP-Internal Parts Pricing.\n\nMaterial Handling (SIMAS):\n•Supports material handling.\n",
        "type": "Application",
        "tags": [
          "Critical",
          "Manufacturing",
          "PII",
          "Not China affected",
          "A good example",
          "Maturity Level 4"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "4b323f76-c533-4ee5-8332-db3cf83d1330",
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
      "id": "2a255711-c9be-41fc-bf81-d99ede02903e",
      "displayName": "SAS Industrial Project - China / China Logistics IT",
      "fullName": "China Logistics IT",
      "tags": [
        "China affected"
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
          "displayName": "Tove Norén",
          "email": "tove.noren@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Sivamani Karuppasamy",
          "email": "sivamani.karuppasamy@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Tommy Dahlgren",
          "email": "tommy.dahlgren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Renato Colado",
          "email": "Renato.Colado@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Filip Eriksson",
          "email": "filip.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Marcelo Colovato",
          "email": "marcelo.colovato@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Burak Gavgacioglu",
          "email": "burak.gavgacioglu@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Samuel Suderbys",
          "email": "samuel.suderbys@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henrik Boman",
          "email": "henrik.boman@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "4cb78136-1ef6-454d-91ae-86b32b6171bf",
      "displayName": "SAS Industrial Project - China / China Logistics IT / China inhouse",
      "fullName": "China inhouse",
      "tags": [
        "China affected"
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
          "displayName": "Tove Norén",
          "email": "tove.noren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Renato Colado",
          "email": "Renato.Colado@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Nafiseh Azizinejhad",
          "email": "nafiseh.azizinejhad@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Tommy Dahlgren",
          "email": "tommy.dahlgren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Gladis Mauri",
          "email": "gladis.mauri@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Peter Sundén",
          "email": "peter.sunden@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Emelie Pivén",
          "email": "emelie.piven@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joel Eriksson",
          "email": "joel.x.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcelo Colovato",
          "email": "marcelo.colovato@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Erik Arumskog",
          "email": "erik.arumskog@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Sivamani Karuppasamy",
          "email": "sivamani.karuppasamy@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mark Zhou",
          "email": "mark.zhou@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Anders Gradin",
          "email": "anders.gradin@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Thijs Zwaveling",
          "email": "thijs.zwaveling@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Åsa Hestner",
          "email": "asa.hestner@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "16c008a9-061b-40dc-b93b-6bed598b9f44",
      "displayName": "SAS Industrial Project - China / China Logistics IT / China production control",
      "fullName": "China production control",
      "tags": [
        "China affected"
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
          "displayName": "Tove Norén",
          "email": "tove.noren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Johanna Larsson",
          "email": "Johanna.Larsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jean-marc Piraud",
          "email": "Jean-marc.Piraud@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Per Tulldahl",
          "email": "per.tulldahl@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Håkan Ros",
          "email": "hakan.ros@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Karlsson",
          "email": "magnus.karlsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Mats Jernmo",
          "email": "mats.jernmo@scania.com",
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
      "id": "8c821e62-6c74-4553-a3f6-61ff467a9d1b",
      "displayName": "SAS Industrial Project - China / Powertrain Assembly IT for China",
      "fullName": "Powertrain Assembly IT for China",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-08-14"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Alexander Wedin",
          "email": "alexander.wedin@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jonathan Cartaxo",
          "email": "jonathan.cartaxo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Fredrik Blomstedt",
          "email": "fredrik.blomstedt@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Eddie Löwenborg Forsberg",
          "email": "eddie.lowenborg.forsberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Jacob Rydgård",
          "email": "jacob.rydgard@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anders Kardeskog",
          "email": "anders.kardeskog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcelo Colovato",
          "email": "marcelo.colovato@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Burak Gavgacioglu",
          "email": "burak.gavgacioglu@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "missionCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2011-03-14",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2014-03-14",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2019-02-02",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2020-02-02",
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
        "id": "f6bd289b-6f5a-4b4e-8de7-f46c52b5dc41",
        "displayName": "E. Solution Development & Optimization / Design and Maintain Modular Architecture",
        "description": "The ability to manage different structures of Scania products and services including structures for Development, Sales and Manufacturing.",
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
          "China affected",
          "MilkyWay area 7. Manage Change, Configuration and Releases"
        ]
      },
      {
        "id": "a08a1aba-6388-4ab6-9d39-8e462d7c3296",
        "displayName": "E. Solution Development & Optimization / Design and Maintain Modular Architecture / Integrate into Modular Solution Range",
        "description": "Ensure technical independence in configuration in the \"Bygglåda\", built up by a system of hardware and software components, can be combined to realise the intended products and services.",
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
        "id": "a11a6fc9-96fa-4dad-9fe6-1c5e4600799b",
        "displayName": "F. Industrialization and On-Demand Release Management / Industrial Introduction Preparation / Assembly Preparation",
        "description": "Preparation of Component or Product Assembly to cater for changes due to new, changed or discontinued part/component/product and changes related to process or facilities.\nEg:\n* Assembly Standards &amp; Instructions preparation\n* Production sequence preparation\nAlso Global Production Preparation.\nIncluding Design Production Process; to develop new or improved production processes to deliver quality products within required lead time.\nIncluding Deploy Production Process; to prepare production facilities and equipment to execute new or modified process. Create training if needed.\nIncluding On-Demand Release to Production and Ramp Up; to ensure capability through training and modification of facilities to run new process and tools and initiate production ramp up.\n",
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
        "id": "51d67051-b57c-46b7-9c29-9a268400e7b5",
        "displayName": "F. Industrialization and On-Demand Release Management / Industrial Introduction Preparation / Part Manufacturing Preparation",
        "description": "Includes creating manufacturing standards and instructions for SOPs, recipes, equipment handling for specific processing equipment. Covers Standards and instructions for both Part manufacturing and Assembly. Eg: Manufacturing Standards & Instructions preparation, Production sequence preparation (Material and resources).\nAlso Global Production Preparation.\nIncluding Design Production Process; to develop new or improved production processes to deliver quality products within required lead time.\nIncluding Deploy Production Process; to prepare production facilities and equipment to execute new or modified process. Create training if needed.\nIncluding On-Demand Release to Production and Ramp Up; to ensure capability through training and modification of facilities to run new process and tools and initiate production ramp up.",
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
        "id": "709a9d7c-a6a3-4007-9304-e64af2c1a746",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Material Demand Planning",
        "description": "Ability to forecast by calculating requirement quantities of raw material (blanks) or parts to supply material need in manufacturing or assembly. Base for the calculations can be actual planned operations or forecast",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-03"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "745e49ba-4291-419c-b83f-68577a478047",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Assembly Execution",
        "description": "Ability to execute activities: \n−for assembly and sub-assemblies of components and final assembly of product for delivery to customer. Including different joining techniques; screwing, welding, riveting, bonding etc.\n−for other assembly tasks such as painting, filling and lubrication of the product \n−for data configuration of electronic control units (ECU;s)\n−all activities are done according to product specification and prepared production description\n",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "China affected"
        ]
      },
      {
        "id": "ea8e5c1d-6d49-432a-92b1-262907536089",
        "displayName": "N. Financial Planning and Accounting / Accounting & Financial Close / Inventory Accounting",
        "description": "This capability provides users with an example of a process description that they can use as a template for their own valuation processes. Inventory valuation is performed in accordance with local legislation (such as the German Commercial Code), including settings for the overhead structure, valuation variant, and stock valuation with devaluation based on movement rate.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2021-10-12"
            },
            {
              "phase": "phaseIn",
              "startDate": "2021-10-17"
            },
            {
              "phase": "active",
              "startDate": "2021-10-17"
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
        "id": "642209e5-ca41-4155-b73e-1670dc6aabc1",
        "displayName": "Order to delivery / Production Processes / Preparation processes / Assembly Preparation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "c3952adb-95a6-4855-8617-8f5717ced0b3",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Assembly",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "4a3eff24-45ec-4e42-86e8-6f89602b4a2f",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Local Production Planning",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "0f4d97be-4448-4406-b3cc-58de40b74bac",
        "displayName": "Supporting processes / Finance Process / Material & Inventory Accounting",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2020-01-22"
            },
            {
              "phase": "phaseIn",
              "startDate": "2020-01-22"
            },
            {
              "phase": "active",
              "startDate": "2020-01-22"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "bbe79891-d30d-459e-963a-06bcf3972109",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INA - Logistics IT / INAC - MONA Assembly & COM",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "247b6b2c-4686-4da4-84c1-3e429b6ed380",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms",
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
        "id": "070577bc-7464-4513-9c28-1055b482b662",
        "displayName": "Scania - Scania CV AB / P_IO - Industrial Operations / X4 - Production and Logistics",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-24"
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
    "objects": [
      {
        "id": "f7756442-6904-41dd-9dd6-ceff4f15f9f8",
        "description": null,
        "displayName": "Financial Control Domain / Performance Item Entity",
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
        "id": "5652cbb8-d06b-44e7-9aff-bdd2ae814e17",
        "description": "Events & Measurements domain represents all events and operational data history (facts) that can be generated and tracked related to an product as individual and its configured components. All events and measurements can be grouped in different parameter groups such as Environment Information, Governmental Information, Cycle Information management.",
        "displayName": "Individual Vehicle and Engine Domain / Events & Measurements Entity",
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
        "id": "06025653-bf3f-4fcb-933a-fad0c7472672",
        "description": "Product As Individual domain represents all real world manufactured product as designed models, i.e. ordered, delivered and maintained trucks, buses and coaches and Scania engines that can be part in the active fleet at some customer site.",
        "displayName": "Individual Vehicle and Engine Domain / Product As Individual Entity",
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
        "id": "664b2cc0-a02d-4c93-8d0a-5fe711353545",
        "description": "Production Order represents the administrative control over all production steps for a specific ordered product performed by production units within planning & logistics and manufacturing operations management. Each production Order has a life-cycle, from open and firm to delivered.  The utmost aim is to fulfil confirmed delivery date in an effective manner.",
        "displayName": "Production Domain / Production Orders Entity / Production Order",
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
        "id": "df085dbb-ac0f-4616-8980-181c5aaab6ac",
        "description": null,
        "displayName": "CECO_ALL_USERS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "58c136ac-912e-4afb-b5b1-8206c122128d",
        "description": null,
        "displayName": "CECO_CECO304",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d023b063-44ba-41a4-b23a-4b0523fc9b21",
        "description": null,
        "displayName": "CECO_MONACORDEPO",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "712d4d03-929d-4c0e-ab83-440ff2bf3442",
        "description": null,
        "displayName": "CECO_MONADATES",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7817fcbc-b55e-414e-a61c-ce669766cdab",
        "description": null,
        "displayName": "CECO_MONALOCKSPEC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bf4bd64c-f3a7-4d3f-b03a-3e1087dfcf56",
        "description": null,
        "displayName": "CECO_MONAORDSPEC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "89c376c2-860d-4a2a-aba4-0f962d15b91f",
        "description": null,
        "displayName": "CECO_MONASPEC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3ec54645-c788-44b2-988b-be2faa6e58f2",
        "description": null,
        "displayName": "EBBA Parent / EBBA DT_SerialnoFromEbbaMONA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a9c1ff0a-bf82-4f24-b7ef-a93cdccb68d2",
        "description": null,
        "displayName": "IACOB_PIAsOrderedService",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9c6445a9-95d8-4786-b6d1-ee78acb39e53",
        "description": null,
        "displayName": "Mailhost",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "46a34a2e-7cb3-4bcb-b44f-e5cdf1e9a1d9",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_GetAssemblyStructureFromGPP",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2a846bf8-64f0-457e-a981-9828e925b8c5",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_IDHA083_VIEW",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1e55c3d3-530b-4dde-bacb-49e669ae2dd7",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_IndividualSpecificationCopy",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c9208670-53ed-4e4b-a568-95e6e14a89e2",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_Interpol",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f674c631-331e-4580-8d77-ccf523639493",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_KnockDownOfIndividualForBEKMA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "df93a002-4056-4c46-a189-eb224bd6ebb4",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_MonaCalsium IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-01-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "54a455b9-09ba-4766-add6-a8923d8bde41",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_StatusKnockDownOfIndividualForBEKMA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3db6bc5d-824e-4c80-8156-1a2f31930192",
        "description": null,
        "displayName": "MONA Systems / Mona material (MM)_CIMCA300",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "358e18fb-5b37-4f7d-80a1-f136aebb0f12",
        "description": null,
        "displayName": "MONA Systems / Mona material (MM)_CIMCA301",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8e929d12-d3f1-4dda-9a13-cc6ee42db7ce",
        "description": null,
        "displayName": "MONA Systems / Mona material (MM)_PARTFINANCE",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "95bfe0fc-6ef3-4915-aba0-b055738fd7ec",
        "description": null,
        "displayName": "MONA Systems / Mona Material Control (MC and MCC)_IpoStatusUpdateFromMC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0a4c4781-cbda-4257-ab67-442b6ad7d010",
        "description": null,
        "displayName": "MONA Systems / SIMAS_ExternalDeliverEpo",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "eddcdb06-185d-4649-affa-806c3627ebad",
        "description": null,
        "displayName": "MONA Systems / SIMAS_FROZEN_BALANCES",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "df3cc018-a52d-4a0a-bb5c-87ba2d84c1d3",
        "description": null,
        "displayName": "MONA Systems / SIMAS_MAT_ARRANGEMENT",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "760d9f01-5b8d-4739-a9ea-b9e6e4d4e3ac",
        "description": null,
        "displayName": "MONA Systems / SIMAS_MaterialStatusUpdateFromSIMAS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bb40d679-a73a-4e10-89d5-c4abc8a57d0b",
        "description": null,
        "displayName": "MONA Systems / SIMAS_PART_RIST_GEOAA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cde32cda-b0bc-4f54-85ca-94587fbfca7c",
        "description": null,
        "displayName": "MONA Systems / SIMAS_PARTS_ON_LIM_CONS_LOC",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "435c9f71-575d-4d60-9032-3247f2535d20",
        "description": null,
        "displayName": "MONA Systems / SIMAS_PRESENTATION_DESTINATIONS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fecd9d18-3e4d-46ec-b965-57c92c0a9bfb",
        "description": null,
        "displayName": "MONA Systems / SIMAS_RIST069",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4e8751d9-99dc-45ea-a232-f99b750944d1",
        "description": null,
        "displayName": "MONA Systems / SIMAS_SIMASLOCALPART",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0f5229e1-1205-4e0a-866e-5576e35a38ed",
        "description": null,
        "displayName": "MONA Systems / SIMAS_SIMASPART",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bc8580d5-2f37-4047-9bff-11f57b66f2c7",
        "description": null,
        "displayName": "MONA Systems / SIMAS_VITE510",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "aeeaa0e7-7839-4cda-a8ff-350a32ad9a10",
        "description": null,
        "displayName": "MONA Systems / SIMAS_VITE512",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c138d3cd-75ef-4005-a7e2-0879f0cc9dd2",
        "description": null,
        "displayName": "MONA Systems / SIMAS_VITE515",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d18405e9-adb7-4201-8767-e366739aae07",
        "description": null,
        "displayName": "MONA Systems / SIMAS_WORKPLACE_VIEW",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e93dd3fb-bc3a-4147-aa27-b89de38909d5",
        "description": null,
        "displayName": "OAS Platform / OAS_ChangeObjectInformation_v1",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ae1d00cb-cb52-4c92-80b8-40eb521d9192",
        "description": null,
        "displayName": "OAS Platform / OAS_GetDescription",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "73ae4888-0836-44e9-9fa4-f48fcc93d5cb",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_changedchangeobjects_v1 IE v1",
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
        "id": "36a9bcf4-2914-45c5-91aa-553590238738",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_changedparts_v2 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-03-16"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "c55961c2-6dd5-4584-8e95-a14f509dadb4",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_objectdescription_v2 IE v1",
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
        "id": "0eaaf30e-db9b-4cbe-a66d-7eb2c7e78d6e",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_partinformation_v1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-02"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4089cc8c-0de9-4413-b173-3283c7599c03",
        "description": null,
        "displayName": "OAS Platform / OAS_PartService",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "169c4599-0798-4d61-ad19-4c9bcfefdc14",
        "description": null,
        "displayName": "OAS Platform / OAS_Pipe_Manufacturing_v2",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "07fdc4bf-d38b-46ff-9065-b82a247d5335",
        "description": null,
        "displayName": "OAS Platform / OAS_SidememberManufacturingService",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4caf7914-1bf4-4a5b-8574-347c471469fa",
        "description": null,
        "displayName": "OAS Platform / OAS_VariantFamilyService",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "2f42d198-7fe6-494d-bb91-93d3e322cfa5",
        "description": null,
        "displayName": "OAS Platform / OAS_VariantOptionService",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0ba05575-fd47-4026-8f6a-33756f527af8",
        "description": null,
        "displayName": "PackIT_PkgInstructionService",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1e382c78-710a-4f4d-844b-1bcb58afe720",
        "description": null,
        "displayName": "SIDE_PRU_RULE",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "655382cf-5ec8-48c4-8d34-647224a4d684",
        "description": null,
        "displayName": "SIND_SerialnoFromSindMONA",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "451a7ee7-bac3-437c-b401-5e8a302e0579",
        "description": null,
        "displayName": "SPARTA_ProductIndividualInProductionInformationService_v1",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "246c3810-aa13-4b4a-8a66-3995a4c2e92f",
          "displayName": "Oracle Forms 12c 12.2",
          "category": "software",
          "description": "Oracle Forms is used to develop and deploy Forms applications. The Forms applications provide a user interface to access Oracle Database in an efficient and tightly-coupled way. The applications can be integrated with Java and web services to take advantage of service oriented architectures (SOA).",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-10-01"
              },
              {
                "phase": "phaseOut",
                "startDate": "2023-12-31"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-08-31"
              }
            ]
          },
          "tags": [
            "Not China affected"
          ]
        },
        {
          "id": "127d7108-b3fd-462e-a6a1-da1009255936",
          "displayName": "Oracle Oracle Database Enterprise 19c",
          "category": "software",
          "description": "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-14"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-04-30"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-04-30"
              }
            ]
          },
          "tags": [
            "China affected",
            "A good example",
            "From SCT"
          ]
        },
        {
          "id": "e680282b-46ce-4e77-9eee-d53ad2b55bc6",
          "displayName": "Red Hat Enterprise Linux 7.0",
          "category": "software",
          "description": "Red Hat Enterprise Linux Server is an easy-to-administer, simple-to-control operating system that can be deployed on physical systems (Self-support, Standard, and Premium subscriptions), in the cloud (Standard and Premium subscriptions), or as a guest on the most widely available hypervisors (Standard and Premium subscriptions). It orchestrates the hardware resources for all basic computing requirements and includes support for all major hardware platforms and thousands of commercial and custom applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2013-12-11"
              },
              {
                "phase": "active",
                "startDate": "2014-06-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2015-03-05"
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
    "ssoProvider": "Not available today",
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": "NotOK",
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCT",
    "ChinaDesign": "INAC",
    "ChinaSourcing": "INAC",
    "ChinaPaying": "TTPT",
    "ChinaImplementation": "TTPT",
    "Chinaverification": "TCT",
    "ChinaOperations": "TTPT"
  }
}