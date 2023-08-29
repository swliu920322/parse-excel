export default {
  "completion": {
    "percentage": 48,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 53,
    "dataManagement": 38,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 0,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": "Robin",
      "lastName": "Gador",
      "displayName": "Robin Gador",
      "email": "robin.gador@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Malin",
      "lastName": "Spång",
      "displayName": "Malin Spång",
      "email": "malin.spang@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Malaiswamy",
      "lastName": "Kannan",
      "displayName": "Malaiswamy Kannan",
      "email": "malaiswamy.k@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    }
  ],
  "information": {
    "name": "CO Subscription",
    "description": "CO Subscription is used by subscribers of CO Distributions from OAS. \nWhen a new distribution is created in OAS, it is sent to CO Subscription where tickets are created for all subscribers. The subscribers can then plan their work accordingly.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2019-08-29",
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
      "id": "9641b51a-71d9-46e2-ad48-9508bef85e4e",
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
    },
    {
      "id": "6bb1bf40-555d-40bb-98be-7b862abd27c1",
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
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "2c422b88-a917-45e3-9a07-be9b32c4b905",
        "displayName": "A. Manage and Develop Enterprise / Enterprise Development / Manage and Implement Enterprise Change",
        "description": "The ability to implement decided changes in a controlled manner by securing the new solutions works in its surrounding and that people are educated and ready to work according to changed conditions.\nDrive and Enable Business Transformation; Initiate and enable business transformation according to strategic directives",
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
          "MilkyWay area 3. Ideate, Define & Decide Change Direction",
          "MilkyWay area 7. Manage Change, Configuration and Releases"
        ]
      }
    ],
    "processes": [
      {
        "id": "b2f13501-06c1-4d0f-b1e4-06f464e8801f",
        "displayName": "Product development / R&D Process / R&D Methods / Product Data Management (PDM)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "2d3d7cf9-c10a-4851-8d66-144b28410327",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMS - CAD and PDM / EYMSB - PDM Processes and Systems",
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
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "0ffdcdd6-60e5-4796-b109-96c4b2291a32",
          "displayName": "Apache Software Foundation Tomcat 9.0",
          "category": "software",
          "description": "Apache Tomcat is a free and open-source implementation of the Jakarta Servlet, Jakarta Expression Language, and WebSocket technologies.Tomcat provides a pure Java HTTP web server environment in which Java code can run.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "plan",
                "startDate": "2015-11-17"
              },
              {
                "phase": "active",
                "startDate": "2017-09-22"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
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
        },
        {
          "id": "493886c0-fa7b-4ef7-ab25-9dc68e64a920",
          "displayName": "Red Hat Enterprise Linux 8.1",
          "category": "software",
          "description": "Red Hat Enterprise Linux is an open-source operating system. It enables users to scale existing apps and roll out emerging technologies across bare-metal, virtual, container, and cloud environments.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-11-05"
              },
              {
                "phase": "endOfLife",
                "startDate": "2020-04-28"
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