export default {
  "completion": {
    "percentage": 89,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 73,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 100,
    "projects": 100,
    "robots": 100,
    "sourcing": 80
  },
  "subscriptions": [
    {
      "firstName": "Peter",
      "lastName": "Watz",
      "displayName": "Peter Watz",
      "email": "peter.watz@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Christoffer",
      "lastName": "Svensk",
      "displayName": "Christoffer Svensk",
      "email": "christoffer.svensk@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Fredrik",
      "lastName": "Tomasson",
      "displayName": "Fredrik Tomasson",
      "email": "fredrik.tomasson@scania.com",
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
    "name": "Central Vulnerability Scanning",
    "description": "SecurityCenter consolidates and evaluates vulnerability data across your organization, prioritizing security risks and providing a clear view of our security posture.",
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
    "productCategory": "Security",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "87153c68-b2b0-42a2-be54-e41a69336cd1",
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
        },
        {
          "displayName": "Enno Grüning",
          "email": "enno.gruning@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "administrativeService",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-05-11",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-05-11",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "3e5c8d2c-baf2-4505-a60f-fcc46bcf1fb6",
        "displayName": "B. Legal, Risk and Compliance Management / Risk Management",
        "description": "Identification, analysis, assessment, control, and avoidance, minimization, or elimination of unacceptable risks.",
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
          "China affected"
        ]
      }
    ],
    "processes": [
      {
        "id": "971e5f01-30e0-40fa-a4a3-ee843df1119b",
        "displayName": "Corporate governance",
        "description": null,
        "lifecycle": {
          "asString": "phaseIn",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2021-10-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2022-03-31"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "1544a5df-a909-4c6b-bfda-17ad7332b66e",
        "displayName": "Scania - Scania CV AB",
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
        "usageType": "ITmaintenance",
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
          "id": "cb9d25e9-0511-41b5-a83f-439f9195a35a",
          "displayName": "Canonical Ubuntu 22.04 LTS",
          "category": "software",
          "description": "Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software. Ubuntu is officially released in three editions: Desktop, Server, and Core for Internet of things devices and robots. All the editions can run on the computer alone, or in a virtual machine.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2022-04-21"
              },
              {
                "phase": "phaseOut",
                "startDate": "2027-04-30"
              },
              {
                "phase": "endOfLife",
                "startDate": "2032-04-30"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "32962229-0e42-49ac-94cd-5e8fe48f3fb5",
          "displayName": "Microsoft Windows Server Standard 2019",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2018-11-13"
              },
              {
                "phase": "phaseOut",
                "startDate": "2024-01-09"
              },
              {
                "phase": "endOfLife",
                "startDate": "2029-01-09"
              }
            ]
          },
          "tags": [
            "China affected",
            "From SCT"
          ]
        },
        {
          "id": "69d68068-2cfc-44d7-ad2e-5fd0141938ad",
          "displayName": "Red Hat Enterprise Linux 7.9",
          "category": "software",
          "description": "Red Hat Enterprise Linux is an open-source operating system. It enables users to scale existing apps and roll out emerging technologies across bare-metal, virtual, container, and cloud environments.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-09-29"
              },
              {
                "phase": "endOfLife",
                "startDate": "2024-06-30"
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
    "ssoProvider": "Jump host trough SSMP to access environment",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXHB",
    "ChinaDesign": "IXHB",
    "ChinaSourcing": "IXHB",
    "ChinaPaying": "IXHB",
    "ChinaImplementation": "IXHB",
    "Chinaverification": "IXHB",
    "ChinaOperations": "IXHB"
  }
}