export default {
  "completion": {
    "percentage": 32,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 53,
    "dataManagement": 13,
    "dependencies": 50,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Marcellino",
      "lastName": "Buitenhuis",
      "displayName": "Marcellino Buitenhuis",
      "email": "Marcellino.Buitenhuis@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Robin",
      "lastName": "Wikingsson",
      "displayName": "Robin Wikingsson",
      "email": "robin.wikingsson@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Jennifer",
      "lastName": "Huang",
      "displayName": "Jennifer Huang",
      "email": "jennifer.huang@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "SiteVision",
    "description": "SiteVision is used for create top-down publishing sites in Reflex, the Scania group intranet",
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
    "parent": [
      {
        "id": "88505516-8fdd-4570-899d-a6ffd80b8338",
        "displayName": "Reflex",
        "description": "Scania Group Intranet built on SiteVision, CSS, TeamRoom, Connect and Dream Broker.",
        "type": "Application",
        "tags": [
          "PII",
          "China affected",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-01-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-01-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "875532c3-30d6-4d24-8d8e-b709710d0a62",
        "displayName": "P. Information Technology and Data Management / IT Operations Management / IT Service Management",
        "description": "The ability to manage IT Service Support and IT Service Delivery",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-17"
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
        "id": "cdc86e77-69ac-4bc8-a4df-ee0e2edd456c",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBC - Productivity Services",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-15"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "a1c2b9ca-48dd-412a-9763-a378f1837953",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBC - Productivity Services / IBCC - Core Collaboration",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-15"
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
        "id": "9de46211-84f5-4253-ac4e-baaa63f673f3",
        "description": null,
        "displayName": "WAM_SiteVision -  https://ap-internal.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "f073c5d3-2c56-43f3-806e-50f97ce3baa7",
        "description": null,
        "displayName": "WAM_SiteVision -  https://ap-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "d4c37f11-da7f-4fc1-81e5-9518488a3212",
        "description": null,
        "displayName": "WAM_SiteVision -  https://ar-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "d250b85c-52f8-4973-b4ef-b6a48eea1b59",
        "description": null,
        "displayName": "WAM_SiteVision -  https://cn-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "7b055362-b0fe-4360-a1be-4d4b2075d12a",
        "description": null,
        "displayName": "WAM_SiteVision -  https://corporate-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "2970932c-e3d6-4de9-8029-d5a92330ed65",
        "description": null,
        "displayName": "WAM_SiteVision -  https://dk-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "c2a95ae7-5a94-4bc3-acb3-362874dbd5fb",
        "description": null,
        "displayName": "WAM_SiteVision -  https://eduwcm.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "f692066a-11a1-4b1a-affd-14c6628b7f0f",
        "description": null,
        "displayName": "WAM_SiteVision -  https://electromobility-learning.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "824c8425-6f73-47cd-abc0-cb47bf968a4c",
        "description": null,
        "displayName": "WAM_SiteVision -  https://eu-internal.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "8732d7f6-b8d9-44d9-bdf1-f5f630c98aa5",
        "description": null,
        "displayName": "WAM_SiteVision -  https://eu-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "b97ce882-73bb-456a-bac2-c9f1139a6e12",
        "description": null,
        "displayName": "WAM_SiteVision -  https://eu-learning.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "98afc5b9-fb2d-4ded-a952-675b7938178d",
        "description": null,
        "displayName": "WAM_SiteVision -  https://ferruform-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "6037e6f0-a717-4ad9-a56e-553b09269888",
        "description": null,
        "displayName": "WAM_SiteVision -  https://fr-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "14f95775-2c94-4c6b-bf07-fa26037cdffc",
        "description": null,
        "displayName": "WAM_SiteVision -  https://hk-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "e5cce71d-d6fb-4510-ac8c-27e5cc56925a",
        "description": null,
        "displayName": "WAM_SiteVision -  https://hr-learning.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "80e9fc30-a4cb-46ca-a80f-61ff9edf9604",
        "description": null,
        "displayName": "WAM_SiteVision -  https://internal.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "5b21e06e-f616-45a4-95aa-0e77f720b914",
        "description": null,
        "displayName": "WAM_SiteVision -  https://intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "e4ab25e8-f240-41cc-90bd-ae84cec7c6c7",
        "description": null,
        "displayName": "WAM_SiteVision -  https://leadership-learning.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "84512fb3-7812-4864-be6b-bd938c081054",
        "description": null,
        "displayName": "WAM_SiteVision -  https://learning.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "d0047624-9db6-4bb8-88b5-c6e39c7da759",
        "description": null,
        "displayName": "WAM_SiteVision -  https://no-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "07b35a40-171f-4c4f-baf9-948e5767d2c9",
        "description": null,
        "displayName": "WAM_SiteVision -  https://sa-internal.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "250d8c3a-706f-4e96-9e7a-a715900680dd",
        "description": null,
        "displayName": "WAM_SiteVision -  https://sa-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "65dc9ad3-1cd4-434e-a612-3d2cde062846",
        "description": null,
        "displayName": "WAM_SiteVision -  https://se-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "a659f35b-b3ec-445c-8617-0f93153e9b17",
        "description": null,
        "displayName": "WAM_SiteVision -  https://sem-learning.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "af973e9d-08a2-4d51-aa64-4a3eccb64552",
        "description": null,
        "displayName": "WAM_SiteVision -  https://sgb-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "50cdfeb0-ace8-43c3-a738-cedadd657243",
        "description": null,
        "displayName": "WAM_SiteVision -  https://ssea-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "1b37febd-d47a-4ffd-a9b3-193ef5c726de",
        "description": null,
        "displayName": "WAM_SiteVision -  https://wcm-demo.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "e20ab939-09b6-490e-a58b-e91ccd226ea1",
        "description": null,
        "displayName": "WAM_SiteVision - esb-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "ce0a80d8-8103-4ee0-9dfd-c970bbd9a807",
        "description": null,
        "displayName": "WAM_SiteVision - mycareer-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "91d7bdc4-0f2b-49c1-94a0-e6f55ac1f3d2",
        "description": null,
        "displayName": "WAM_SiteVision - reflex-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "dab0e12e-bf43-4a80-90eb-cd28ffc0b806",
        "description": null,
        "displayName": "WAM_SiteVision - salesservices-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "fc864e61-c5f3-4eb5-9803-bf3d4ac791a8",
        "description": null,
        "displayName": "WAM_SiteVision - suomi-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "25effba0-59a4-4496-a665-84656818eea0",
        "description": null,
        "displayName": "WAM_SiteVision - swesupport-intranet.scania.com",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "a4f11dac-2584-48c7-a256-fb2e4b94bb2e",
        "description": null,
        "displayName": "WAM_SiteVision - urn:amazon:cognito:sp:eu-west-1_zgmnaq7jT",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      },
      {
        "id": "d785d8d4-8093-41ca-a734-41ecac2c723f",
        "description": null,
        "displayName": "WAM_SiteVision - wcm",
        "lifecycle": null,
        "tags": [
          "XDS_SAML-groups"
        ]
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "fc318676-4a4c-409a-b1e5-0a47f26ce4cf",
          "displayName": "Microsoft / Azure Azure AD",
          "category": "service",
          "description": "Repository and Authenticator ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-01-01"
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
    "ChinaRequirements": "CDC",
    "ChinaDesign": "IBCF",
    "ChinaSourcing": "IBCF",
    "ChinaPaying": "IBCF",
    "ChinaImplementation": "IBCF",
    "Chinaverification": "TTI",
    "ChinaOperations": "IBCF"
  }
}