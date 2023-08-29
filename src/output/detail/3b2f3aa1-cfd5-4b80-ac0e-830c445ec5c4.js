export default {
  "completion": {
    "percentage": 27,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 38,
    "projects": 100,
    "robots": 0,
    "sourcing": 0
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "maria.wiik@scania.com",
      "email": "maria.wiik@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Tawatchai",
      "lastName": "Mentaisong",
      "displayName": "Tawatchai Mentaisong",
      "email": "tawatchai.mentaisong@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Stefan",
      "lastName": "Kull",
      "displayName": "Stefan Kull",
      "email": "stefan.kull@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Patrik",
      "lastName": "Nygård",
      "displayName": "Patrik Nygård",
      "email": "patrik.nygard@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "TESTiT - Knockdown Management",
    "description": "An application within the TESTiT suite. \nThe main features are Schedule (Start & Stop) OAS-KSI knockdown subscriptions.\nData source=OAS KSI\nData target=INSTO(Data Lake)\nManaging/Schudel data transfer = TESTiT TC.\n",
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
        "id": "92dd44ca-a958-4d02-bbe5-0b99e8780e30",
        "displayName": "TESTiT",
        "description": "A set of new applications the supports the Testing Process at Scania R&D. The application replace Mexlab and Expart.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "399634bb-7fe1-49a4-9bca-7ad877e4cb8e",
      "displayName": "R&D Methods / PF-Testing project TEXAS",
      "fullName": "R&D Methods / PF-Testing project TEXAS",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2009-01-01"
          },
          {
            "phase": "active",
            "startDate": "2010-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2016-12-31"
          }
        ]
      },
      "subscriptions": []
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": null,
      "functionalSuitability": null,
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "dac12085-5cf2-4fb6-953b-2179462e8fa7",
        "displayName": "E. Solution Development & Optimization / Evaluate, Compare, Verify and Validate Solutions / Test Management",
        "description": "Ability to develop and maintain test criterias and test environments  including change management. \n\n",
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
          "China affected",
          "MilkyWay area 5. Virtual and Physical Verification"
        ]
      }
    ],
    "processes": [
      {
        "id": "3c9a0b44-190f-4180-8309-1fbd1a9833ba",
        "displayName": "Product development",
        "description": "Owner: Jan Palmér, chairman PD process board",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "2f4ec766-8615-47d4-9892-f278cd2dc12f",
        "displayName": "Product development / R&D Process / Simulation and Testing process",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "a4dc46a0-2494-47bc-893b-95cf1045fa01",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRB - R&D Methods & Products / IRBT - Testing, Design & Process Support",
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
        "id": "93f27c15-a604-4084-babd-38cd955d4191",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMP - Process, Methods and IT tools / EYMPS - Simulation",
        "usageType": null,
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
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