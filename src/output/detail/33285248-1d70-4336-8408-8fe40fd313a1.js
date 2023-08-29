export default {
  "completion": {
    "percentage": 24,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 35,
    "dataManagement": 25,
    "dependencies": 0,
    "information": 63,
    "projects": 0,
    "robots": 0,
    "sourcing": 40
  },
  "subscriptions": [
    {
      "firstName": "Fredrik",
      "lastName": "Fagervall",
      "displayName": "Fredrik Fagervall",
      "email": "fredrik.fagervall@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Johan",
      "lastName": "Eriksson",
      "displayName": "Johan Eriksson",
      "email": "johan_a.eriksson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Rana",
      "lastName": "Salamat",
      "displayName": "Rana Salamat",
      "email": "rana.salamat@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Prerna",
      "lastName": "Agrawal",
      "displayName": "Prerna Agrawal",
      "email": "prerna.agrawal@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Fredrik",
      "lastName": "Svanström",
      "displayName": "Fredrik Svanström",
      "email": "fredrik.svanstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Axel",
      "lastName": "Lundgren",
      "displayName": "Axel Lundgren",
      "email": "axel.lundgren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Frida",
      "lastName": "Rawet",
      "displayName": "Frida Rawet",
      "email": "Frida.Rawet@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "kim.fougelberg@scania.com",
      "email": "kim.fougelberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Gabriele",
      "lastName": "Guardigli",
      "displayName": "Gabriele Guardigli",
      "email": "gabriele.guardigli@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "ScaniaMaintenance",
    "description": "System to handle Maintenance plans for trucks, buses, trailers and engines.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2022-09-27",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "fe26d696-040d-4b38-aa05-8e86603fa588",
        "displayName": "MAC",
        "description": "The Scania Maintenance core application for maintenance plans.\nThe heart of the business logic and the hub for all connections to internal Scania systems needed to create and maintain plans. \nExposes API to external sources like Digital Dealer and other DMS's outside of Scania.  ",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "ce4cd85f-36db-4ad3-a98b-516654692822",
        "displayName": "MAC / MPP",
        "description": "MPP is where users create and view the maintenance plans for primarily Scania vehicles but also for trailers and vehicles of different brands.\nMPP is the front end application for MAC. ",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
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
              "startDate": "2023-04-27",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-04-27",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "8e4179f2-45f4-41dc-9b4e-3f571df8fa60",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Product Repair, Maintenance and Updating / Repair & Maintenance Execution",
        "description": "The ability to trouble shoot, repair and maintain customer products.",
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
    "processes": [],
    "organisations": [
      {
        "id": "4c09d75a-159f-42d3-ac78-43a3a7329ec2",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAC - Contracted Services & Warranty / IACD - Scania Maintenance 3",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-01-02"
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
        "id": "1badabd7-374a-4b59-87d9-080f3e4545c8",
        "description": null,
        "displayName": "Digital Dealer_MaintenancePlanUpdatedSink IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-13"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "ec7bf324-a185-4a6e-83e2-9addf5dca1cb",
        "description": null,
        "displayName": "Digital Dealer_Vehicle IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-22"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "4c69c781-4d50-48c1-af2f-cf4086157b24",
        "description": null,
        "displayName": "Digital Dealer_WorkOrder IE v4",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-04-01"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "fa3bba50-ade8-4f09-8151-454714d7dff4",
        "description": null,
        "displayName": "Multi_vsi-package-service IE 1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-25"
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
        "id": "67ae5a19-a908-40c5-bf65-bfa34d08304a",
        "description": "Internal api for mac cloud services to consume legacy mac information",
        "displayName": "ScaniaMaintenance_MacCloudPumpProd IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-24"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "57760a6b-13d5-4138-9217-ed451e6244d0",
        "description": null,
        "displayName": "VSI Orchestration Suite_VSIAPI IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-25"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "28c49fd3-d784-4b4c-bc66-df3759a46e4f",
        "description": "Internal api for mac cloud services to consume legacy mac information",
        "displayName": "ScaniaMaintenance_MacCloudPumpEdu IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-24"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "67ae5a19-a908-40c5-bf65-bfa34d08304a",
        "description": "Internal api for mac cloud services to consume legacy mac information",
        "displayName": "ScaniaMaintenance_MacCloudPumpProd IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-24"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "29311936-6449-4653-983c-122e207e0e73",
        "description": "Workshop interface for vehicle maintenance plans",
        "displayName": "ScaniaMaintenance_MacWorkshopEdu IE v7",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-24"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "6e8326e8-aa9f-44ea-bb6c-939840960f5d",
        "description": "Workshop interface for vehicle maintenance plans",
        "displayName": "ScaniaMaintenance_MacWorkshopEdu IE v8",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-24"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "754b23be-5d68-40be-a041-fc6c683de1c3",
        "description": "Workshop interface for vehicle maintenance plans",
        "displayName": "ScaniaMaintenance_MacWorkshopProd IE v8",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-03-26"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "82ec8aec-8a69-4d1e-b051-fc0ed140e8cb",
        "description": null,
        "displayName": "ScaniaMaintenance_Maintenance_Expert_Api-Ncg IE v3.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-06-10"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "0c8888e5-6cf1-48ec-8208-2b90616e9646",
        "description": null,
        "displayName": "ScaniaMaintenance_Maintenance_Expert_Api-Prod IE v2.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-25"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "8a54089f-1dbd-43ba-ae38-9a1092165dd3",
        "description": null,
        "displayName": "ScaniaMaintenance_Maintenance_Expert_Api-Prod IE v3.0",
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
        "id": "c36e5661-16cf-44e0-a42b-d37212644751",
        "description": "Proxy API for RDP through MEM",
        "displayName": "ScaniaMaintenance_RDPProxy IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-02-25"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "92278e95-7a8b-4ec0-88fa-3e5e0e6036ee",
        "description": null,
        "displayName": "ScaniaMaintenance_sma IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-02-02"
            }
          ]
        },
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "8893415d-7263-4b93-a2ec-feb3fdead789",
          "displayName": "Amazon.com / AWS Amazon Web Services",
          "category": "service",
          "description": "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "plan",
                "startDate": "2002-01-01"
              },
              {
                "phase": "active",
                "startDate": "2002-07-16"
              }
            ]
          },
          "tags": []
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