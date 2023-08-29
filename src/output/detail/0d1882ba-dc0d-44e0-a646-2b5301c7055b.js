export default {
  "completion": {
    "percentage": 45,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 73,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 38,
    "projects": 100,
    "robots": 0,
    "sourcing": 40
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
      "type": "OBSERVER",
      "role": []
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
    },
    {
      "firstName": "Ananta Venkata Naga Pravallika",
      "lastName": "Panuganti",
      "displayName": "Ananta Venkata Naga Pravallika Panuganti",
      "email": "pravallika.panuganti@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    }
  ],
  "information": {
    "name": "TESTiT - Materials CHN",
    "description": "An application within the TESTiT suite. \nThe main features are Create Test Material Requisition->Approve Requisition->...send to purchase (MATRIS) \n- Add prototype parts to the requisition and send for approve & purchase.",
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
    "parent": [
      {
        "id": "f87a7e71-cfee-45b8-998f-1bdf8f52534b",
        "displayName": "TESTiT / TESTiT CHN",
        "description": "A set of new applications the supports the Testing Process at Scania R&D. The application replace Mexlab and Expart.",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "children": []
  },
  "initiatives": [
    {
      "id": "9f1f6d25-90bb-4620-b7f5-eb28c438cb26",
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-04-21",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-04-21",
              "milestoneId": null
            }
          ]
        },
        {
          "asString": "drpCompleted",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2023-05-14",
              "milestoneId": null
            },
            {
              "phase": "drpReview",
              "startDate": "2024-05-14",
              "milestoneId": null
            }
          ]
        }
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
      },
      {
        "id": "c3c0dc13-e5f2-4410-b087-0ce4c826f255",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Purchase Order Processing",
        "description": "The ability of processing a requisition into a commercial document. Including Supplier purchase order/call off (incl. NAP Ordering, AP Ordering, Tools Ordering, Experimental Parts Ordering).",
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
        "usageType": "owner",
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "06ceb578-38ad-45e9-834c-9b041a21b127",
          "displayName": "Amazon Corretto 11 (OpenJDK) 1.8.0_131",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "4c022d05-f44f-4637-90dd-31f6e9805540",
          "displayName": "Angular",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [
        {
          "id": "829b9251-6b70-4403-86df-01b4d2de6fbd",
          "displayName": "Amazon Web Services AWS - Ireland",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
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
    "ChinaITlegalCompliance": "SQCsent",
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