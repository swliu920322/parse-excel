export default {
  "completion": {
    "percentage": 27,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 63,
    "dataManagement": 13,
    "dependencies": 0,
    "information": 33,
    "projects": 100,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Sunil",
      "lastName": "Kaklij",
      "displayName": "Sunil Kaklij",
      "email": "Sunil.Kaklij@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Gunpreet",
      "lastName": "Kaur",
      "displayName": "Gunpreet Kaur",
      "email": "gunpreet.kaur@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Amruta Shubhankar",
      "lastName": "Joshi",
      "displayName": "Amruta Shubhankar Joshi",
      "email": "amruta-shubhankar.joshi@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Fredrik",
      "lastName": "Perdahl",
      "displayName": "Fredrik Perdahl",
      "email": "fredrik.perdahl@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Christianne",
      "lastName": "Sandstig",
      "displayName": "Christianne Sandstig",
      "email": "christianne.sandstig@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Cola - AMS-Access Management System",
    "description": "Multibrand Identity Federation and Cola Layer Applications Generic Access Management Solution",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2019-02-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2019-09-01",
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
      "id": "c68b6410-de4c-4c99-827c-a9f9277e81c1",
      "displayName": "CHAMP",
      "fullName": "CHAMP",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Jesper Stenmark",
          "email": "jesper.stenmark@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Sunil Kaklij",
          "email": "Sunil.Kaklij@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Lennart Borg",
          "email": "lennart.borg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Vuokko Björnestam",
          "email": "vuokko.bjornestam@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
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
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [
      {
        "id": "9e8a17f8-a32d-426a-a6c1-769e88e86789",
        "displayName": "Product development / R&D Process / R&D Methods / TRATON R&D Collaboration Process",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "7da215e2-9ea3-4b1f-9707-8f61ef2c4cf3",
        "displayName": "Product development / R&D Process / R&D Methods / TRATON R&D Collaboration Process / TRATON Access Management",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "4c2854ca-74d1-4970-8f0a-c641b5baacb3",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRE - Collaboration",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-08-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "4928d4a5-efdb-4f93-a96e-d19a5f021a29",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMC - Collaboration",
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "5486d0ff-bafe-4608-a1d8-3558f56124de",
          "displayName": "Amazon.com / AWS Cognito",
          "category": "service",
          "description": "Amazon Cognito lets customers add user sign-up, sign-in, and access control to their web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.  ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2014-07-10"
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