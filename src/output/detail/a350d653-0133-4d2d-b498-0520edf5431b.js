export default {
  "completion": {
    "percentage": 54,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 48,
    "dataManagement": 25,
    "dependencies": 50,
    "information": 58,
    "projects": 100,
    "robots": 100,
    "sourcing": 53
  },
  "subscriptions": [
    {
      "firstName": "Anna",
      "lastName": "Grohman",
      "displayName": "Anna Grohman",
      "email": "anna.grohman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Camilla",
      "lastName": "Pettersson",
      "displayName": "Camilla Pettersson",
      "email": "camilla.pettersson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Peter",
      "lastName": "Normark",
      "displayName": "Peter Normark",
      "email": "peter.normark@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Prasanna",
      "lastName": "Thirugnanasambantham",
      "displayName": "Prasanna Thirugnanasambantham",
      "email": "prasanna.thirugnanasambantham@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Jan",
      "lastName": "Kramle",
      "displayName": "Jan Kramle",
      "email": "Jan.Kramle@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Ida",
      "lastName": "Holwaster",
      "displayName": "Ida Holwaster",
      "email": "ida.holwaster@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    }
  ],
  "information": {
    "name": "New Warranty Solution (Queri project)",
    "description": "New Warranty Solution (preliminary name) is the new warranty and claims management solution that will replace e.g. SWAT and SGWS.",
    "lifecycle": {
      "asString": "plan",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-01-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2024-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2025-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "3a0f0cdd-f3ad-4eef-aed4-0cfa8a56b6ef",
        "displayName": "SGWS Mid-term  (in Cloud)",
        "description": "SGWS has Web-services enabling communication between Distributors DMS and SWAT.\nSGWS also has a translation functionality of Warranty Codes used between DMS and SWAT. Not yet  developed in Cloud solution.",
        "type": "Application",
        "tags": [
          "China affected"
        ],
        "subscriptions": []
      },
      {
        "id": "150c1e1a-ed81-4a29-bc47-eaf991900604",
        "displayName": "SWAT",
        "description": "Warranty application factory",
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
    "parent": [
      {
        "id": "71bc9400-9016-4f86-b357-fd3b21971025",
        "displayName": "SWAT / ACL-NiFi",
        "description": "Anticorruption layer for integration between SWAT and cloud",
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "c3d0eecd-b6e6-4463-8595-4193ccb18079",
      "displayName": "Queri",
      "fullName": "Queri",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2020-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2020-09-01"
          },
          {
            "phase": "active",
            "startDate": "2020-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anna Grohman",
          "email": "anna.grohman@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Camilla Pettersson",
          "email": "camilla.pettersson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Peter Normark",
          "email": "peter.normark@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Prasanna Thirugnanasambantham",
          "email": "prasanna.thirugnanasambantham@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Ida Holwaster",
          "email": "ida.holwaster@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": null,
      "functionalSuitability": null,
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
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
        "id": "c82df0ce-ddb0-4334-8c96-0a2b73a24206",
        "displayName": "Services delivery / Claim process (Warranty & Contract)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "660c67cc-a8d4-4f47-ac21-8e5d901d7474",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EM - Modular Solutions / EMQ - Vehicle Quality / EMQW - Warranties",
        "usageType": "owner",
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
        "id": "c71447fd-0e06-4057-bd2a-15cd09090877",
        "description": "EROS service for exchange rate",
        "displayName": "EROS_CurrencyService IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-09"
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
        "id": "130571ac-84af-4fa2-a453-f15163876fc8",
        "description": null,
        "displayName": "SWAT_claw-api-prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-01-26"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "7421372f-5687-4201-9e36-048aae860df8",
        "description": null,
        "displayName": "SWAT_SGWS_Prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-31"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "1b82e60a-7687-4ad7-824f-6c72ce1b2f05",
        "description": null,
        "displayName": "SWAT_SWAT_QUERI_Webservices_Prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-01-26"
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
      "accessControl": [
        {
          "id": "29211990-68b8-4e88-b140-2745a27006b6",
          "displayName": "Scania / Scania IT scania-queri-prod PROD",
          "category": "Access_Control_Item",
          "description": null,
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2021-10-13"
              }
            ]
          },
          "tags": []
        }
      ]
    },
    "ssoProvider": "Keycloak",
    "statusSSO": "supported"
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