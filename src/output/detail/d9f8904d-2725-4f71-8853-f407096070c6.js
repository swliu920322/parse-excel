export default {
  "completion": {
    "percentage": 28,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 100,
    "businessSupport": 55,
    "dataManagement": 25,
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
      "firstName": "Lars-Olof",
      "lastName": "Andersson",
      "displayName": "Lars-Olof Andersson",
      "email": "lars-olof.andersson@scania.com",
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
    "name": "Tivoli Omnibus",
    "description": "Event Management software connected to Tivoli Impact",
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
              "startDate": "2013-01-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2016-01-01",
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
    "processes": [],
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
    "interfaceConsume": [
      {
        "id": "96140cb0-dd02-4e74-b25b-af30d4245974",
        "description": null,
        "displayName": "Tivoli Omnibus_MonitoringFilter IE v1.0",
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
      }
    ],
    "interfaceProvide": [
      {
        "id": "96140cb0-dd02-4e74-b25b-af30d4245974",
        "description": null,
        "displayName": "Tivoli Omnibus_MonitoringFilter IE v1.0",
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
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "2279b387-0bd6-4e7f-82e1-68202cdcf589",
          "displayName": "IBM Tivoli Netcool/OMNIbus 8.1",
          "category": "software",
          "description": "Tivoli Netcool/OMNIbus is a service level management (SLM) system that delivers real-time, centralized monitoring of complex networks and IT domains.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2014-07-01"
              },
              {
                "phase": "endOfLife",
                "startDate": "2021-07-01"
              }
            ]
          },
          "tags": [
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