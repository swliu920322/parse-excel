export default {
  "completion": {
    "percentage": 76,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 89,
    "dataManagement": 50,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 50
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "stefan.schrijver@scania.com",
      "email": "stefan.schrijver@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "raf.poets@scania.com",
      "email": "raf.poets@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Anne",
      "lastName": "Malmqvist",
      "displayName": "Anne Malmqvist",
      "email": "anne.malmqvist@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "David",
      "lastName": "Jonsson",
      "displayName": "David Jonsson",
      "email": "david.z.jonsson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Greet",
      "lastName": "Maurissen",
      "displayName": "Greet Maurissen",
      "email": "greet.maurissen@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "SLIP",
    "description": "Scania Logistics Information Provider\n\nAn integration-based/middleware system/Windows service application, handling complex business logic.\n \nA system that provides the value of attributes (logic) to other systems\n\n\n\n",
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
        "id": "9d3d0e48-8be8-4889-a9d3-8ba6a877615e",
        "displayName": "SL-AROS",
        "description": "SL-AROS is under phase out and is almost entirely replaced by SALSA(SAP) since 2018. \nThe following functions are still active in SL-AROS.\nRegional warehouse invoicing\nParts master data.\nDistribution of customer, parts, prices for some applications.\n\nSL-AROS is a common name for 22 sub application covering the main processes of Spare parts handling at Scania. \n\n\nThe following business processes are supported: Order & Customer Support, Parts Accounting, Parts Assortment, Parts Pricing, Supply Control, Transport and Warehouse. ",
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "4986448a-a2a1-481e-9159-b312e136d0e3",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Scania Parts Logistics Planner",
        "displayName": "SLIP / SL Planner",
        "type": "Application",
        "lifecycle": {
          "asString": "drpReview",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2022-03-22"
            },
            {
              "phase": "drpReview",
              "startDate": "2023-03-22"
            }
          ]
        },
        "tags": [
          "Not China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [
    {
      "id": "15c34d5f-47e5-4fd1-a720-135730394e70",
      "displayName": "SAS Industrial Project - China / China RnD PrIT / OAS for China",
      "fullName": "OAS for China",
      "tags": [
        "China affected"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Erik Eriksson",
          "email": "erik.x.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Hans Sjöholm",
          "email": "hans.sjoholm@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Stefan Weidensjö",
          "email": "stefan.weidensjo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Henrik Skoog",
          "email": "henrik.skoog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Eriksson",
          "email": "magnus.z.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcus Gustafsson",
          "email": "marcus_x.gustafsson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
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
              "startDate": "2023-03-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-03-01",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpCompleted",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2023-02-28",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2024-02-28",
              "milestoneId": null
            }
          ]
        }
      ]
    },
    "capabilities": [
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
        "id": "3b9a097c-2b9e-42dc-b209-be3451ff85f8",
        "displayName": "P. Information Technology and Data Management / Information Management / Information Sharing",
        "description": "The ability to collect and secure that information is clearly defined and made searchable/available with relevant control of accessability and regulations. Ability to establish once and reuse multiple times.",
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
        "id": "60bf1da7-28e3-4e1d-8a9f-4e32b753c918",
        "displayName": "Services delivery",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      }
    ],
    "organisations": [
      {
        "id": "2002982f-784d-4b21-beaa-dcd53b9dae06",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAD - Parts Logistics IT",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-21"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "21c04747-d303-40d8-b36f-0f1ec48d35d3",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAD - Parts Logistics IT / IADB - Parts Applications & Data",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-21"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "1b00f4b6-57df-4807-9fb6-288b3adc88f0",
        "displayName": "Scania - Scania CV AB / P_FB - Finance and Business Control / ZT - Taxes and Customs / ZTC - Customs",
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
        "id": "30863603-37db-40a1-b4f2-1eb8536b9214",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYS - Vehicle Service Information",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-07-14"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "6e66e837-97bc-4d3f-a5c2-a7645ad1798a",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KP - Parts and Service",
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
        "id": "8ec05fb1-6202-4272-80e0-29ebc607443c",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KP - Parts and Service / SL - Scania Parts Logistics / SLD - Business Processes & IT",
        "usageType": "user",
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
        "id": "5720ada3-9497-4bc3-b2d9-7ff546123328",
        "description": null,
        "displayName": "Part Information",
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
        "id": "c4dc66f5-65da-4d27-94e6-1725ac3e69c0",
        "description": null,
        "displayName": "COBAT FINANCE_Axapta Supplier Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b61fafcf-259d-4ff2-a64e-66f90be22441",
        "description": null,
        "displayName": "Cubiscan Part  Dimensions",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "dabee0ac-4e45-4ba4-96ed-28a2ccc93bc7",
        "description": null,
        "displayName": "DSM CORE_DSM ASG",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "debe15e3-ea48-4ee3-91ca-8650e6bd2440",
        "description": null,
        "displayName": "DSM CORE_DSM IE 1.0",
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
        "id": "33a77243-c383-4c63-98e6-3380d01c035a",
        "description": "This API should be consumed in order to get the URL for file upload towards SPM Cloud",
        "displayName": "DSM CORE_DSM_SPM_API IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-29"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "e04f4055-6d69-4430-9a9e-a0ff702f6394",
        "description": null,
        "displayName": "FileHandler_D365 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-28"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f453ff65-8727-4b44-b024-e117e838bd06",
        "description": null,
        "displayName": "FS FileHandler_AutomaticFilehandler IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-11-28"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "9ee6a588-488b-4cd1-ba43-e50e8f49ea4b",
        "description": null,
        "displayName": "func-d365-slip-ea-prod-003 IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f568a4f8-96d0-4dd0-ba10-ecbaa72be2cd",
        "description": null,
        "displayName": "IPP Standard Price",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fb562798-7934-4ca9-a97a-a49946dfa8b2",
        "description": null,
        "displayName": "IPP Standard Price Req",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "90b0d447-0974-4c65-a31d-03ac988f757d",
        "description": null,
        "displayName": "Lexicon Part Descriptions",
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
        "id": "cb15d04d-4b1c-4e9a-9141-d0dfbf7dd639",
        "description": null,
        "displayName": "MIC 8.3_Taric code/COO",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "702f9495-a11d-4f5f-b660-a0f93cd39d31",
        "description": null,
        "displayName": "OAS Part KIT/BOM",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "5fff03e8-1da4-4267-a61f-21a7a14b1b79",
        "description": null,
        "displayName": "OAS Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cd3c8b0d-5c09-407c-9e5d-e367d17a6604",
        "description": null,
        "displayName": "OAS Platform / OAS_OAS Part Information",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "15324104-dc9c-441f-9078-7404ec7a23c3",
        "description": null,
        "displayName": "Price Point Priced Part",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4d7b409d-6bd4-45bf-b45d-d6915ae6739b",
        "description": null,
        "displayName": "resend_form_prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-07-06"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "3f360c3a-5858-4a3c-86ab-a91c34097797",
        "description": null,
        "displayName": "SACS Truck Series",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9aad8ae8-c954-4781-83c4-79bb4c820cf5",
        "description": null,
        "displayName": "SAP Customer Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "18aeef09-30e6-4501-8121-296f596428c2",
        "description": null,
        "displayName": "Scania Lexicon_Scania Lexicon_Term number",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d55f4c8c-30e9-47a6-bf75-b01bd514c488",
        "description": null,
        "displayName": "SLIP_PartReturn IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6158e80d-08cc-42cd-b2e2-7ecae22a320c",
        "description": null,
        "displayName": "SLIP_SLIPConversion IE v2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-09"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "5e294f1f-09fb-41d5-8eb2-abbedacc021a",
        "description": null,
        "displayName": "SmartApi IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "aff0737f-56dc-4b08-a5a4-e8661ede3f7c",
        "description": null,
        "displayName": "SOCSS ECU",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bb3d0a54-7bf9-449c-b9e6-8a05d282eabd",
        "description": null,
        "displayName": "SPAS_SAP Parts Info Logistics",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "3821692f-b654-4e12-a02f-428e673ba097",
        "description": "Monitoring messagebus API is used to send events to Scania Event Management system.",
        "displayName": "Tivoli Omnibus_MonitoringMessageBus IE v2.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-02"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "941adf19-245c-46f3-86d3-55dca8193243",
        "description": null,
        "displayName": "SLIP_AXAPTA Part Info & SKU",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "56854774-106b-4a5c-9d24-cc32585c7afa",
        "description": null,
        "displayName": "SLIP_Axapta Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "65f292cc-61c8-47e9-8a7d-26f0a258f1b0",
        "description": null,
        "displayName": "SLIP_Conversion Customer Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "fd61c75e-4fcd-40be-9900-80d54e913ee4",
        "description": null,
        "displayName": "SLIP_DSM Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d7e6d827-6564-4dca-b69c-2b06fa2a2c7a",
        "description": null,
        "displayName": "SLIP_DSM Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d7c71f6d-d475-4f0f-84db-f10b1a8817a4",
        "description": null,
        "displayName": "SLIP_GLASS Part Info & Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "6400a20b-ccdd-4f17-b737-46377d764192",
        "description": null,
        "displayName": "SLIP_MULTI Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "7a9d4443-e2af-4130-8998-6a69360c58f8",
        "description": null,
        "displayName": "SLIP_MULTI Sellable Parts",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "524a66a9-6ee1-404b-9c8b-61375fef714e",
        "description": null,
        "displayName": "SLIP_Part Term Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "08ddc7d2-0b3b-4f24-b3e6-ceb645b1b9e0",
        "description": null,
        "displayName": "SLIP_Part Term Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cff9b57d-d5b4-43f2-be1c-bce6b5b77792",
        "description": null,
        "displayName": "SLIP_Part Term Part Term",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "d55f4c8c-30e9-47a6-bf75-b01bd514c488",
        "description": null,
        "displayName": "SLIP_PartReturn IE 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ac168cf0-0f0d-4183-93bd-2d936b65d07a",
        "description": null,
        "displayName": "SLIP_PPFD Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "809f231d-8058-4f21-9ca3-b84040b57b44",
        "description": null,
        "displayName": "SLIP_PPFD Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "a87268e3-9e9c-4fc0-bbed-c6123af353f6",
        "description": null,
        "displayName": "SLIP_PPFD Part Term",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "ce155d30-2f5e-421b-a40a-fe25e6c49412",
        "description": null,
        "displayName": "SLIP_PricePoint Customer Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8912b0b8-d230-4a5e-8574-24660fed4335",
        "description": null,
        "displayName": "SLIP_PricePoint Part Info & Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "389ff2f3-d325-47c1-b69e-9935e59668c0",
        "description": null,
        "displayName": "SLIP_PricePoint Part KITs",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "00806d6c-0494-49bc-91f9-c00059ba3905",
        "description": null,
        "displayName": "SLIP_PricePoint std Price",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1a29223d-eb13-4b78-93f7-1047dc71c949",
        "description": null,
        "displayName": "SLIP_SACS Part Info & Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4fedd09e-291e-482d-b92b-805863773fc9",
        "description": null,
        "displayName": "SLIP_SAP Part KITs/BOM",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "16087ca1-7ed0-4f01-aaa0-49413ff0cbfe",
        "description": null,
        "displayName": "SLIP_SAP Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1004bd31-f855-4baa-bb6a-933c26d4bf91",
        "description": null,
        "displayName": "SLIP_SAP Truck Series and ASG",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "6158e80d-08cc-42cd-b2e2-7ecae22a320c",
        "description": null,
        "displayName": "SLIP_SLIPConversion IE v2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-09"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4b294f27-12b5-4836-b97e-ebda7a0a30dc",
        "description": null,
        "displayName": "SLIP_SMART Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cf70df59-8ad9-4ac7-a9c3-577469b02886",
        "description": null,
        "displayName": "SLIP_SPAS OEM",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "86778396-849a-4bb0-888c-805a53cb7fda",
        "description": null,
        "displayName": "SLIP_SPAS Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "b07ae73a-6a15-4601-8138-90ffc9859a6c",
        "description": null,
        "displayName": "SLIP_SPAS Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "883ca86f-9cb7-43e8-b357-2915a98867cc",
        "description": null,
        "displayName": "SLIP_SPM Part Replacement",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "361378f3-ba55-407b-afc1-0578be676f38",
        "description": null,
        "displayName": "SLIP_SPO Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "89281abd-10a3-4dc8-9cc3-7ae2e4ee9e57",
        "description": null,
        "displayName": "SLIP_SWAT Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e33cfd57-dd63-4197-a124-df66e2199034",
        "description": null,
        "displayName": "SLIP_VRPC Part Info",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1800ff65-27ba-423f-9c27-f50162cbfb11",
        "description": null,
        "displayName": "SLIP_VRPC Part Replacement",
        "lifecycle": null,
        "tags": []
      }
    ]
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
          "id": "8cbd0689-aed3-494c-8191-6ff4090c82ba",
          "displayName": "Microsoft Office 365",
          "category": "software",
          "description": "Office 365 is a line of subscription services offered by Microsoft as part of the Microsoft Office product line. The brand encompasses plans that allow use of the Microsoft Office software suite over the life of the subscription, as well as cloud-based software-as-a-service products for business environments, such as hosted Exchange Server, Skype for Business Server, and SharePoint, among others. All Office 365 plans include automatic updates to their respective software at no additional charge, as opposed to conventional licenses for these programs—where new versions require purchase of a new license.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2011-06-28"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "83e2da2d-02c6-4f6b-abf8-08f614d20343",
          "displayName": "Microsoft SQL Server Standard 2017",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2017-07-17"
              },
              {
                "phase": "active",
                "startDate": "2017-09-29"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-10-11"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-10-12"
              }
            ]
          },
          "tags": [
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
        },
        {
          "id": "daca585c-cab4-4b83-be0c-7c1fd4ed1a0b",
          "displayName": "Scania / Scania IT SEIP",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "phaseOut",
                "startDate": "2020-12-31"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-01-01"
              }
            ]
          },
          "tags": [
            "Not available from China"
          ]
        }
      ],
      "service": [
        {
          "id": "923785ae-70b5-4c0e-a63c-c6648c3db69d",
          "displayName": "IF_DB_SEIP_ONPREM",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "baeba88f-f6e2-4cde-af19-55723a515da4",
          "displayName": "IF_FILE_SEIP_ONPREM",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        },
        {
          "id": "48994a1e-5d8d-4593-89b0-f32ef057073c",
          "displayName": "IF_MQ_SEIP_ONPREM",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "A good example"
          ]
        },
        {
          "id": "9c20bdae-5f01-4a03-89cd-328ec0cb3dfa",
          "displayName": "IF_SOAP_SEIP_ONPREM",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
        }
      ],
      "accessControl": [
        {
          "id": "591f1449-1e87-4318-aaba-2970998b5ceb",
          "displayName": "Scania / Scania IT scania-hc-slip-dev DEV",
          "category": "Access_Control_Item",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2023-01-31"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "665fb456-110d-4396-b430-cfe534095277",
          "displayName": "Scania / Scania IT scania-slip-dev DEV",
          "category": "Access_Control_Item",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2023-01-23"
              }
            ]
          },
          "tags": []
        }
      ]
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