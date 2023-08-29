export default {
  "completion": {
    "percentage": 21,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 0,
    "businessSupport": 50,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 38,
    "projects": 0,
    "robots": 0,
    "sourcing": 40
  },
  "subscriptions": [
    {
      "firstName": "Naresh",
      "lastName": "Gorola",
      "displayName": "Naresh Gorola",
      "email": "naresh.gorola@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Jessica",
      "lastName": "Löfström",
      "displayName": "Jessica Löfström",
      "email": "jessica.lofstrom@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Björn",
      "lastName": "Näslund",
      "displayName": "Björn Näslund",
      "email": "bjorn.naslund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Paavo",
      "lastName": "Lambropoulos",
      "displayName": "Paavo Lambropoulos",
      "email": "paavo.lambropoulos@scania.com",
      "type": "OBSERVER",
      "role": [
        "Developer"
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
    "name": "MFA China",
    "description": "MFA platform  VPN (PulseSecure, webaccess.scania.com (hk, br, se), NetOp gateway (tool to remote control PC's), scania UK (citrix).",
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
        null,
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
        "id": "d48d20f4-46ad-4bac-9384-420eed8485e8",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUB - Network & E2E Services / IUBD - Network Services CO & WAN",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-01"
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
    "objects": [],
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "08e20b00-5d62-4acd-b4fd-5898e3222018",
          "displayName": "Cisco Systems / Duo Security Multi-Factor Authentication",
          "category": "software",
          "description": "Duo Security Multi-factor authentication (MFA) is an access security product used to verify a user's identity at login. It adds two or more identity-checking steps to user logins by use of secure authentication tools. Adding MFA keeps your data secure.\nIRAM is done 2023-06-14",
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
        },
        {
          "id": "1d3c85ce-9b2a-42b1-8369-a2b43776ec5b",
          "displayName": "PhenixID PhenixID Multi-Factor Authentication",
          "category": "software",
          "description": "Multi-factor authentication (MFA) is an access security product used to verify a user's identity at login.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2014-01-01"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
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
    "ChinaRequirements": "IXHD",
    "ChinaDesign": "IXHD",
    "ChinaSourcing": "IXHD",
    "ChinaPaying": "IXHD",
    "ChinaImplementation": "IXHD",
    "Chinaverification": "IXHD",
    "ChinaOperations": "IXHD"
  }
}