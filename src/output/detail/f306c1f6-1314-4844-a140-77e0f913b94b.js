export default {
  "completion": {
    "percentage": 31,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 25,
    "dependencies": 0,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 50
  },
  "subscriptions": [
    {
      "firstName": "Aditi",
      "lastName": "Chitgupi",
      "displayName": "Aditi Chitgupi",
      "email": "aditi.chitgupi@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Ramakrishna",
      "lastName": "Nepak",
      "displayName": "Ramakrishna Nepak",
      "email": "ramakrishna.nepak@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Jan",
      "lastName": "Guhrés",
      "displayName": "Jan Guhrés",
      "email": "jan.guhres@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Fredrik",
      "lastName": "Blomstedt",
      "displayName": "Fredrik Blomstedt",
      "email": "fredrik.blomstedt@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Suryanarayana",
      "lastName": "Shastri",
      "displayName": "Suryanarayana Shastri",
      "email": "suryanarayana.shastri@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    }
  ],
  "information": {
    "name": "API Management (APIM) - China",
    "description": "Application type fact sheet for Scania's central API Management platform in China(currently powered by WSO2 API manager.)",
    "lifecycle": {
      "asString": "phaseIn",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2023-05-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2025-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "Shared Services, Integration",
    "predecessor": []
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
              "startDate": "2021-02-23",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-02-23",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "a8ed92c4-6864-4130-9237-563a878d9575",
        "displayName": "P. Information Technology and Data Management",
        "description": "Abilitiy to enable Scania's data needs and utilize information technology to enable business growth and business capabilities.",
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
        "tags": []
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
        "id": "ce12db79-4b79-44f6-8244-e0d2b7875a6a",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXC - Enabling Services / IXCC - Integration Services",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-27"
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
        "id": "3e13172d-365c-4773-9339-8ce74d1cee21",
        "description": null,
        "displayName": "API Management (APIM)_JmeterTestAPI BR 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-12"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "dc4abb0b-b7f7-4511-bf03-5e2a3e107ee6",
        "description": null,
        "displayName": "API Management (APIM)_JmeterTestAPI IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "c43fbcda-1c95-4ff5-8ced-4b74abd3bb98",
        "description": null,
        "displayName": "API Management (APIM)_Mantest IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-05-31"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "10107e3f-fa2f-4c58-bbae-7a0063875356",
        "description": null,
        "displayName": "API Management (APIM)_OnPremApi BR v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "9ede5f59-b624-4410-a73c-572b93996180",
        "description": null,
        "displayName": "API Management (APIM)_OnPremApi IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "185e91e8-0099-4fc4-89f3-09b050646a48",
        "description": null,
        "displayName": "API Management (APIM)_OnPremSEIPApi IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-05-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b089fd1f-5d73-429d-a0a9-4e24ab62ee02",
        "description": null,
        "displayName": "API Management (APIM)_Pooja-Analytics-Test IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-13"
            }
          ]
        },
        "tags": []
      },
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
        "id": "47a367df-5398-40fd-86c8-c24879e3166d",
        "description": null,
        "displayName": "API Management (APIM)_ScaniaAPIPublisherService BR v1",
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
        "id": "c22ddb1a-fab3-42af-a625-89aec433f7c5",
        "description": null,
        "displayName": "API Management (APIM)_ScaniaAPIPublisherService IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-19"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "5830d180-cec5-4c32-94e8-0d2c287d1a12",
        "description": null,
        "displayName": "API Management (APIM)_Test-Functional IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-21"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "e97c62ef-9b13-4949-802c-05e9301e0094",
        "description": null,
        "displayName": "API Management (APIM)_Testtttt IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-06-06"
            }
          ]
        },
        "tags": []
      },
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
        "id": "4a55a721-0380-4334-af15-d131f58a2a6a",
        "description": null,
        "displayName": "API Management (APIM)_TodoRestApi IE 1.0",
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
        "id": "668cbb46-23b9-43a1-8cc4-ceaa77e6b2a1",
        "description": null,
        "displayName": "API Management (APIM)_UAT-Brazil-APIM BR v1",
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
        "id": "0e42183d-37ad-4303-844c-faac2d994984",
        "description": "Sample Test GraphQL API",
        "displayName": "API Management (APIM)_UAT-GrahQL IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-30"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "de4d3e20-8b1b-4196-983b-fda823abd847",
        "description": null,
        "displayName": "API Management (APIM)_UAT-GraphQL BR v1",
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
        "id": "37b22cd2-c738-4f55-bb5e-484311adc23a",
        "description": "This a UAT Test API for Todo list",
        "displayName": "API Management (APIM)_UAT-Todo-API IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-27"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "bced6e0d-6d66-4cce-9203-7cd6c89d6532",
        "description": "This a UAT Test API for Todo list",
        "displayName": "API Management (APIM)_UAT-Todo-API IE v2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "a669c8a8-12ab-4a0a-8428-690dbfc5d1d2",
        "description": null,
        "displayName": "D365 Integration Layer_dynamics365 IE v1.0.0",
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
        "id": "af62c971-9596-4158-8608-18eb72d3f504",
        "description": "Providing product individual information from IACOB.\nPossibility to search from various identitys, Product individual, Chassis no, S-order no, Customer prod id and more. Supplying specifications on request.\nConsumer client needs to add \"Optional Client Scopes\" iacob_pi_read_scope in FG.",
        "displayName": "IACOB_IACOBProductIndividual IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "362e94b6-d201-4fcf-8aa2-27bdae2e8b81",
        "description": "Musys API",
        "displayName": "MUSYS_MusysAPI BR 1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-05-18"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "1b752867-92ae-4f64-b0ee-2e8b57247141",
        "description": "OAS runs the request as the user specified in the jwt claim 'preferred_username'. See OAS documentation for description of the request and response headers, parameters and body. The feature SPNEGO is not supported when using WSO2 to call OAS rest services. API deployed with SAPS.",
        "displayName": "OAS Platform / OAS_OAS_production_ecm_tcr_vcr_v1 IE v1",
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
        "id": "e19ae00f-e522-474f-bc0f-30fbbfa2a479",
        "description": "SURE API",
        "displayName": "SURE 1.0_SURE-Service-Prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-03"
            }
          ]
        },
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
      },
      {
        "id": "ff312a59-e0c5-4e62-a71c-f633c7789446",
        "description": null,
        "displayName": "YSML - BRAIN (Symptom Diagnoser)_ysml-symptom-diagnoser-ft IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-21"
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
      "software": [],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": "NotOK",
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXCC",
    "ChinaDesign": "IXCC",
    "ChinaSourcing": "IXCC",
    "ChinaPaying": "IXCC",
    "ChinaImplementation": "IXCC/LTIM Manage services",
    "Chinaverification": "IXCC/LTIM Manage services",
    "ChinaOperations": "IXCC/LTIM Manage services"
  }
}