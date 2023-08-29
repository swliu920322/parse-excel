export default {
  "completion": {
    "percentage": 26,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 42,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Magnus",
      "lastName": "Nordlund",
      "displayName": "Magnus Nordlund",
      "email": "magnus.nordlund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Kristian",
      "lastName": "Talvitie",
      "displayName": "Kristian Talvitie",
      "email": "kristian.talvitie@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Ulf",
      "lastName": "Elveberg",
      "displayName": "Ulf Elveberg",
      "email": "ulf.elveberg@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "Tivoli ITM",
    "description": "Monitoring of Unix, Linux, iSeries environments",
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
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
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
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2000-01-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2003-01-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "e9f138aa-f0fe-4362-8561-9073646bb9cd",
        "displayName": "P. Information Technology and Data Management / IT Operations Management / Data Center Operations Management",
        "description": "The ability to operate infrastructure.",
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
        "id": "d2d51168-e6d4-4bdd-ab4e-b8b787e2b26a",
        "displayName": "Supporting processes / Lack of parent / Event Management",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2013-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "ab96c57d-1d05-4f21-8232-1af40e4e5eb3",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUA - Hosting Services / IUAM - Monitoring & Configuration",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-03"
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
      "software": [
        {
          "id": "30e41d62-e98f-481b-afd1-c8b1dc7d81d6",
          "displayName": "IBM Tivoli Monitoring 6.3",
          "category": "software",
          "description": "IBM Tivoli Monitoring products monitor the performance and availability of distributed operating systems and applications. These products are based on a set of common service components, referred to collectively as Tivoli Management Services. Tivoli Management Services components provide security, data transfer and storage, notification mechanisms, user interface presentation, and communication services in an agent-server-client architecture. These services are shared by a number of other products, including IBM Tivoli XE mainframe monitoring products and IBM Tivoli Composite Application Manager products, as well as other IBM Tivoli Monitoring products such as Tivoli Monitoring for Applications, Tivoli Monitoring for Cluster Managers, Tivoli Monitoring for Databases, Tivoli Monitoring for Energy Management, Tivoli Monitoring for Messaging and Collaboration, Tivoli Monitoring for Messaging and Collaboration, and Tivoli Monitoring for Virtual Environments.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2013-03-29"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
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
                "startDate": "2020-04-30"
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