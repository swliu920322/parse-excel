export default {
  "completion": {
    "percentage": 85,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 80,
    "dataManagement": 96,
    "dependencies": 100,
    "information": 100,
    "projects": 100,
    "robots": 100,
    "sourcing": 80
  },
  "subscriptions": [
    {
      "firstName": "Roel",
      "lastName": "ten Kleij",
      "displayName": "Roel ten Kleij",
      "email": "Roel.ten_Kleij@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Andreas",
      "lastName": "Davidsson",
      "displayName": "Andreas Davidsson",
      "email": "andreas.davidsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Ronnie",
      "lastName": "Viklund",
      "displayName": "Ronnie Viklund",
      "email": "ronnie.viklund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Anna",
      "lastName": "Östh",
      "displayName": "Anna Östh",
      "email": "anna.osth@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Jonas",
      "lastName": "Wallroth",
      "displayName": "Jonas Wallroth",
      "email": "jonas.wallroth@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Björn",
      "lastName": "Nyqvist",
      "displayName": "Björn Nyqvist",
      "email": "bjorn.nyqvist@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "EXCIT-CLASS",
    "description": "Export control classification tool. This is a SaaS solution provided from a supplier named AEB. The tool is calculating the percentage of parts that subject to export control using the BOM for a product. ",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2023-04-17",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-04-17",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-04-17",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2029-01-01",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2029-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Legal",
    "predecessor": [
      {
        "id": "e1967798-8d88-4f41-9faf-d7a2d113bf37",
        "displayName": "Export Control Classification Database",
        "description": "Export Control Classification Database",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "d695304d-0128-436c-a962-39bfceef0877",
      "displayName": "EC IT Tool",
      "fullName": "EC IT Tool",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Björn Nyqvist",
          "email": "bjorn.nyqvist@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Anna Östh",
          "email": "anna.osth@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Jonas Wallroth",
          "email": "jonas.wallroth@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Andreas Davidsson",
          "email": "andreas.davidsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Ravi Leeladhar",
          "email": "ravi.leeladhar@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "ce874980-1d2d-4a13-be3f-61c3c40cbdb7",
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
      "id": "6bbb1d26-b921-4261-aef8-9397f2a8654c",
      "displayName": "SAS Industrial Project - China / China RnD PrIT",
      "fullName": "China RnD PrIT",
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
          "displayName": "Marcus Gustafsson",
          "email": "marcus_x.gustafsson@scania.com",
          "type": "RESPONSIBLE"
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-03-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-03-01",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpCompleted",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2023-04-17",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2024-04-17",
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
      }
    ],
    "processes": [
      {
        "id": "546d9ac7-5de0-4b9a-9545-75504ee358fd",
        "displayName": "Supporting processes / Finance Process / Customs & Export Control",
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
        "id": "b8f3fb7e-4477-493b-b69b-46bcc409631c",
        "displayName": "Scania - Scania CV AB / P_FB - Finance and Business Control / ZT - Taxes and Customs / ZTE - Group Export Control",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-20"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "a5789097-b595-4763-a3cf-27af64ac30c2",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMP - Process, Methods and IT tools / EYMPL - Legal",
        "usageType": "ITmaintenance",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "945ede33-0dfe-406f-a318-846621c7de0d",
        "description": "Master Data Source SSIP, Scania Supplier Information Portal  (limited to Automotive Parts Suppliers) Represents Scania suppliers independent if they provide Scania with components within resources and hardware, services and software or work efforts. One specific type of supplier are bodybuilders that supply Scania and customers with coaches and bodywork to complete Product As Individuals upon Scania basic chassis products.  Supplier is one subdivision of the superior object Organization.",
        "displayName": "Organisation Domain / Party & Customer Entity / Supplier",
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
        "id": "773a1d70-9ff0-44df-93e7-a913112635b4",
        "description": "Specifies the content and items for product development, whole Product As Designed or built-in Component, with its various performance requirements which are part of the Product Development Project and that will be maintained in the project's activities.",
        "displayName": "Product Development Domain / Configuration Product Development Entity / Product Development Object",
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
        "id": "a51ee7f9-a7b7-4075-b2fb-b25bb9604ef2",
        "description": "Purchase Agreement and uniting level for Purchase Agreement Line, referring to agreement owner and invoice account, where one agreement can consist of several Purchase Agreement Line.",
        "displayName": "Purchase & Agreement Domain / Purchase Order Entity / Purchase Agreement",
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
        "id": "ce8d2f57-4c3b-4530-8fbc-4012647659e8",
        "description": null,
        "displayName": "exportcontrol IE",
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
        "id": "952af2f4-addb-4e8d-92ff-8cd1384ebf5f",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_listallinobject_v1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-03-08"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "7ee153a4-114c-41f3-afcc-9dd92d06012c",
        "description": null,
        "displayName": "purchasing_ords_prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-16"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "3ac89688-e343-4173-8671-9816483197df",
        "description": null,
        "displayName": "Scania Supplier Portal / Supplier 360_ScaniaSuppliersAPI IE v1",
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
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "8b6a0095-252e-40b2-8dc2-532307fc0269",
          "displayName": "WSO2 API Manager 3.2.0",
          "category": "software",
          "description": "WSO2 API Manager is a fully open-source solution for end to end API Management in the cloud, on-prem or in hybrid environments. It comes with an Apache Software License Version 2.0 which makes it free to use. It allows API developers to design, publish, and manage the lifecycle of APIs and API product managers to create API products from one or more APIs. It hosts an application developer portal which helps in building and managing a developer community for your APIs. Its cloud-native API gateway is used for securing, routing, controlling and monitoring your API traffic in a scalable manner.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-09-07"
              },
              {
                "phase": "endOfLife",
                "startDate": "2023-09-07"
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
          "id": "b3d29d5c-012e-41cf-9999-e22c5e60451c",
          "displayName": "Federation Gateway",
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
    "ssoProvider": "Federation Gateway",
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