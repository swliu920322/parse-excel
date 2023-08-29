export default {
  "completion": {
    "percentage": 81,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 57,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 53
  },
  "subscriptions": [
    {
      "firstName": "Joakim",
      "lastName": "Karlmark",
      "displayName": "Joakim Karlmark",
      "email": "joakim.karlmark@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Information Owner"
      ]
    },
    {
      "firstName": "Rolf",
      "lastName": "Nordin",
      "displayName": "Rolf Nordin",
      "email": "rolf.nordin@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "SIEM",
    "description": "Security Information and Event Management (SIEM)\nService is used to:\n• Find and correct possible vulnerabilities and security risks\n• Continues monitoring (24/7) and detecting possible ongoing malicious activates\n• Fast security incident response and tool for investigation and forensics\n• Security compliance reporting\n",
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
      "id": "08908fc9-de80-4e79-a73a-19a13eb9b5b6",
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-11-20",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-11-20",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "333a4954-387d-4c00-9da0-ef2092aaf4db",
        "displayName": "P. Information Technology and Data Management / IT and Data Security Management / IT Security Management",
        "description": "The ability of protecting digital information from unauthorized access, corruption, or theft throughout its entire lifecycle.",
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
        "id": "0e6a3aeb-9b3f-4649-9d23-c508e7c7c85f",
        "displayName": "Corporate governance / Legal Compliance Management / Legal",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "3bde8918-67bf-4e52-b6f8-ca950d11e580",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXH - Information Security",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-04-26"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "a0437945-29da-4554-ae61-6639176c551f",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXH - Information Security / IXHB - IT Security",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-04-26"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "a2de9e60-a5ed-4ff5-889b-eac676b81fb2",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXH - Information Security / IXHD - Electronic Identification Solutions",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-12-13"
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
    "objects": [
      {
        "id": "d9d25989-7ff2-49f8-8c0d-da08203fd70e",
        "description": null,
        "displayName": "General Information Objects Domain",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-10-04"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      }
    ],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "68f49606-d32c-4e6f-9d52-0ea31e0148ba",
          "displayName": "Splunk Splunk Enterprise 8.2",
          "category": "software",
          "description": "Splunk Enterprise is a software product that enables user to search, analyze, and visualize the data gathered from the components of the IT infrastructure or business. Splunk Enterprise takes in data from websites, applications, sensors, devices, and so on. After user defines the data source, Splunk Enterprise indexes the data stream and parses it into a series of individual events that can be viewed and searched.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2021-05-12"
              },
              {
                "phase": "endOfLife",
                "startDate": "2023-05-12"
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
    "ssoProvider": "N/A",
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXHB",
    "ChinaDesign": "TBD (outsourced)",
    "ChinaSourcing": "TBD",
    "ChinaPaying": "IXHB",
    "ChinaImplementation": "TBD (outsourced)",
    "Chinaverification": "TBD",
    "ChinaOperations": "TBD (outsourced)"
  }
}