export default {
  "completion": {
    "percentage": 38,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 45,
    "dataManagement": 25,
    "dependencies": 50,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Markku",
      "lastName": "Tammerin",
      "displayName": "Markku Tammerin",
      "email": "markku.tammerin@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Malaiswamy",
      "lastName": "Kannan",
      "displayName": "Malaiswamy Kannan",
      "email": "malaiswamy.k@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "BBM-QA",
    "description": "Body Builder Manual Quality Assurance.",
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
        "id": "dd1a69f4-8fd2-4269-9ea6-d7224c02533b",
        "displayName": "FRAS (internal)",
        "description": "FRAS internal (Follow up Report Administration System) contains: FRAS corporate - to receive, answer and store failure reports, helpdesk questions and to support issue management.\n\nFRAS is used for quality assurance within the entirety of Scania to ensure that we follow up on quality deviations in order to deliver high quality products.",
        "type": "Application",
        "tags": [
          "PII",
          "Significant",
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "8e5e5b2f-8441-4d35-877f-6111a286e473",
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
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessOperational",
      "functionalSuitability": "insufficient",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-11-22",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-11-22",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [],
    "processes": [
      {
        "id": "ad6c5125-74ec-415b-8e87-4c0719e17d8a",
        "displayName": "Product development / Product Follow Up - Red Arrow",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "43f02d2a-1797-43b8-8217-871ace195870",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRE - Collaboration / IREC - FRAS",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "eb383231-4984-4474-ba35-a0de96b20740",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMC - Collaboration / EYMCX - Collaboration Strategy & Issue",
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
        "id": "f2a6e8f8-7dc9-48c4-a2fe-fa09fd2f84f3",
        "description": "Dealer FRAS report API",
        "displayName": "FRAS (internal) / BBM-QA_DealerFRASReport IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4ab3b15b-7ed7-4e3a-b542-5fdb4c54348b",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateAuth IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ef43e9a0-32ea-42a2-93d9-571b158bc531",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateCreatePCR IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "98830586-40e7-45e2-b71f-27cee62f6525",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateRestricted IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "62806f2a-c05b-46b1-841e-7b6ba86665d1",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASExternalAuth IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ced94043-9d54-4754-8a9c-604247a143c0",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASExternalRestricted IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "dfb0a6ee-5ed8-4c24-a101-d6143727b4f6",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASExternalVerifyID IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "dd889f81-7fb3-4e63-a40d-81d2a062caf8",
        "description": null,
        "displayName": "SWS_vsi-awa-api IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-15"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "0e105613-763c-4199-9904-450654b4741d",
        "description": null,
        "displayName": "ysml-awa-prod IE 1.0.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-19"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "58362885-d28a-4233-8105-127b4d9de59f",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_COSubscriptionStaging IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-21"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "7fe0e686-6b94-4f16-b8d1-107e995c43fd",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_COSubscriptionStagingAuth IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f2a6e8f8-7dc9-48c4-a2fe-fa09fd2f84f3",
        "description": "Dealer FRAS report API",
        "displayName": "FRAS (internal) / BBM-QA_DealerFRASReport IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-17"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f8dd94b7-58f7-47b0-94cf-9e0aca5485b4",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateAdaptor IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4ab3b15b-7ed7-4e3a-b542-5fdb4c54348b",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateAuth IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ef43e9a0-32ea-42a2-93d9-571b158bc531",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateCreatePCR IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-07"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "0c41b693-bf20-4f52-94f7-d29e39afec6d",
        "description": "Access data in FQ-Chassi form. Use this version to find chassi by requestid. Use version 2 to find a chassi by Request ID.\nE.g.\nhttps://apim.prod.aws.scania.com/FRASCorporateFQChassi/000000000197082?fields=values(Chassi nr,Type)",
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateFQChassi IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-07-13"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "dea64113-dd5f-4417-ac50-e18d21d482c4",
        "description": "Acces data in FQ-Chassi form using a query.\nE.g.\nhttps://apim.prod.aws.scania.com/FRASCorporateFQChassi/2?q='Chassi nr'=\"0350077\"&fields=values(Chassi nr)",
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateFQChassi IE 2",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-07-13"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "98830586-40e7-45e2-b71f-27cee62f6525",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASCorporateRestricted IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "62806f2a-c05b-46b1-841e-7b6ba86665d1",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASExternalAuth IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ced94043-9d54-4754-8a9c-604247a143c0",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASExternalRestricted IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "dfb0a6ee-5ed8-4c24-a101-d6143727b4f6",
        "description": null,
        "displayName": "FRAS (internal) / BBM-QA_FRASExternalVerifyID IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-20"
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
          "id": "b7d0524b-2391-4108-8799-7778171245d0",
          "displayName": "BMC Software Action Request System 19.08",
          "category": "software",
          "description": "BMC Remedy Action Request System is a professional development environment that leverages the recommendations of the IT Infrastructure Library (ITIL) and provides a foundation for Business Service Management (BSM) solutions. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-08-22"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-08-22"
              },
              {
                "phase": "endOfLife",
                "startDate": "2024-08-22"
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