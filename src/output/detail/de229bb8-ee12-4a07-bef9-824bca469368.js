export default {
  "completion": {
    "percentage": 28,
    "ChinaReadiness": 75,
    "EnterpriseGuardrails": 50,
    "businessSupport": 57,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 38,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Björn",
      "lastName": "Kallin",
      "displayName": "Björn Kallin",
      "email": "bjorn.kallin@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Carolina",
      "lastName": "Årman",
      "displayName": "Carolina Årman",
      "email": "carolina.arman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Product Owner"
      ]
    },
    {
      "firstName": "Kent",
      "lastName": "Helin",
      "displayName": "Kent Helin",
      "email": "kent.helin@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Tina",
      "lastName": "Hellqvist",
      "displayName": "Tina Hellqvist",
      "email": "tina.hellqvist@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    }
  ],
  "information": {
    "name": "CyberArk China",
    "description": "service offer a vault for storing and administrating passwords for privileged accounts within Scania. The vault (EPV – Enterprise Password Vault) can only be accessed by assigned users, like a group of administrators.",
    "lifecycle": {
      "asString": "phaseIn",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2023-06-28",
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "insufficient",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2017-06-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2020-06-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "9626c75d-4ba7-4c51-bb60-ceffa6ebd268",
        "displayName": "P. Information Technology and Data Management / IT and Data Security Management / Identity and Access Management",
        "description": "The ability to make it possible for the right entities (people or things) to use the right resources (applications or data) when they need to, without interference, using the devices they want to use.",
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
        "id": "fe880241-09e5-47a0-81a9-632c613d3d57",
        "displayName": "IAM - Identity & Access Management",
        "description": null,
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2023-05-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "58ec2dc3-5342-46a2-89df-57b4c87b38a5",
          "displayName": "Microsoft / Azure Azure Stack HyperConverged Infrastructure Storage Spaces Direct",
          "category": "service",
          "description": "Azure Stack HCI is a hyperconverged infrastructure (HCI) cluster solution that hosts virtualized Windows and Linux workloads and their storage in a hybrid environment that combines on-premises infrastructure with Azure cloud services.\n\nStorage Spaces Direct is a feature of Azure Stack HCI and Windows Server that enables you to cluster servers with internal storage into a software-defined storage solution.\n\n\n",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-01-01"
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
    "ChinaITlegalCompliance": "SQCcompleted",
    "ExportControlOfAppl": "NotOK",
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXHE",
    "ChinaDesign": "IXHE",
    "ChinaSourcing": "IXHE",
    "ChinaPaying": "IXHE",
    "ChinaImplementation": "IXHE",
    "Chinaverification": "IXHE",
    "ChinaOperations": "IXHE"
  }
}