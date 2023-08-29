export default {
  "completion": {
    "percentage": 92,
    "ChinaReadiness": 75,
    "EnterpriseGuardrails": 100,
    "businessSupport": 75,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 100,
    "projects": 100,
    "robots": 100,
    "sourcing": 80
  },
  "subscriptions": [
    {
      "firstName": "Alexandru",
      "lastName": "Cisnovschi",
      "displayName": "Alexandru Cisnovschi",
      "email": "alexandru.cisnovschi@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Fredrik",
      "lastName": "Tomasson",
      "displayName": "Fredrik Tomasson",
      "email": "fredrik.tomasson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner",
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Steffen",
      "lastName": "Langhammer",
      "displayName": "Steffen Langhammer",
      "email": "steffen.langhammer@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Joakim",
      "lastName": "Karlmark",
      "displayName": "Joakim Karlmark",
      "email": "joakim.karlmark@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
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
    "name": "FireEye HX",
    "description": "Used as complementary tool to Central Antivirus agents service\n\nDefend the endpoint with a multi-leveldefense that includes signature-based, and behavioral based enginesand intelligence-based indicators of compromise. Now includes MalwareGuard,a Machine Learning based protection engine based on FireEye front-line expertise.",
    "lifecycle": {
      "asString": "phaseIn",
      "phases": [
        {
          "phase": "phaseIn",
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
      "id": "a15ffeba-daff-47f9-b561-2ed5bab1faf5",
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
              "startDate": "2022-09-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-09-01",
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
    "processes": [],
    "organisations": [
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
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "n/a",
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCsent",
    "ExportControlOfAppl": "NotOK",
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