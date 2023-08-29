export default {
  "completion": {
    "percentage": 38,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 53,
    "dataManagement": 13,
    "dependencies": 0,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Alvin",
      "lastName": "Samuelsson",
      "displayName": "Alvin Samuelsson",
      "email": "alvin.samuelsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Francesco",
      "lastName": "Fenoaltea",
      "displayName": "Francesco Fenoaltea",
      "email": "francesco.fenoaltea@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "DDB",
    "description": "Database for delivering ECU softwares",
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
    "predecessor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "bba82aa0-7fbf-452f-860b-f3cd527d7ca2",
      "displayName": "UNECE / Cyber Security Management System (CSMS)",
      "fullName": "Cyber Security Management System (CSMS)",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Ioannis Tzioumakas",
          "email": "ioannis.tzioumakas@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "969fedb3-ff0a-433f-a8af-6b6cfbef1e47",
      "displayName": "UNECE / Software Update Management System (SUMS)",
      "fullName": "Software Update Management System (SUMS)",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Eder Silva",
          "email": "Eder.Silva@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Charlotte Jalkebo",
          "email": "Charlotte.Jalkebo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "David Grandell",
          "email": "David.Grandell@scania.com",
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
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "9eb8fa36-1099-48e2-a5c2-8c8b7b674169",
        "displayName": "E. Solution Development & Optimization / Evaluate, Compare, Verify and Validate Solutions",
        "description": "Test product in conditions corresponding to intended purpose. Manage test criteria,  managing and developing  test environments including test bed designs. Ability to assure that products/services are compliant and/or approved according to standards and legal requirements.",
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
          "MilkyWay area 8. Certification"
        ]
      },
      {
        "id": "6c372737-499c-4880-9178-494fecd8beeb",
        "displayName": "E. Solution Development & Optimization / Solution Development Change and Release Management / Validate Release Content",
        "description": "The ability to validate the Release Content",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "phaseIn",
              "startDate": "2023-01-11"
            },
            {
              "phase": "active",
              "startDate": "2023-01-23"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "e37ce85f-54fc-4ba3-9543-db923a706601",
        "displayName": "Product development / R&D Process / Embedded System process / 06 Test",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "01bb2f2a-4c2b-449d-bf4b-35b871fffdcf",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EED - Software Development System / EEDI - Information Architecture and Tool Chain for Embedded Systems / EDIM - Embedded method development",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "ef5338d9-dee4-43ab-a52d-f8e9853c3cd4",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EED - Software Development System / EEDI - Information Architecture and Tool Chain for Embedded Systems / EEDIF - Embedded Process Tools Development F",
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
    "objects": [],
    "interfaceConsume": [
      {
        "id": "6ec91424-b0cd-4074-8707-14c482e22ef9",
        "description": null,
        "displayName": "OAS Platform / OAS_OAS_production_ecu_sw_assembly_version_v1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-13"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ef948844-8672-4e66-a5d6-25d884279e4d",
        "description": null,
        "displayName": "OAS Platform / OAS_OAS_production_ecu_sw_build_version_v1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-13"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "3d236dc7-677d-49e8-85c6-98e623b5f16c",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_ext_whereused_v1 IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-03"
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
          "id": "089f3889-fc31-492c-aa71-d00f1169a28b",
          "displayName": "dotnet",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
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
        }
      ],
      "service": [],
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