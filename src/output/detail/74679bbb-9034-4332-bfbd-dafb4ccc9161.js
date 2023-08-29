export default {
  "completion": {
    "percentage": 76,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 55,
    "dataManagement": 88,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 46
  },
  "subscriptions": [
    {
      "firstName": "Larissa",
      "lastName": "Bueno",
      "displayName": "Larissa Bueno",
      "email": "larissa.bueno@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Elias",
      "lastName": "Abissamra",
      "displayName": "Elias Abissamra",
      "email": "Elias.Abissamra@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "VISUAL PICKING SLA",
    "description": "The goal of VISUAL PICKING application is to show in a MONITOR what business (MH OPERATOR) must pick (goods) in platforms to send to assembly Line.\r\n\r\nThe data listed by VISUAL PICKING application are sent by PICKING application according WAGONS are ready to be picked.\r\n\r\nDisturbances in this system can rapidly increase the product assembly time and cause part missing goods in the assembly line, negative impact on TAKT will be imminent.",
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
      "id": "42505453-4e71-427b-a67f-57b08eb69abe",
      "displayName": "SLA Portfolio - Inhouse",
      "fullName": "SLA Portfolio - Inhouse",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Eduardo Chagas",
          "email": "eduardo.chagas@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "18ccd220-372e-4bd2-977e-7627aa1c0b36",
      "displayName": "SLA Portfolio - Keep Full",
      "fullName": "SLA Portfolio - Keep Full",
      "tags": [],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2020-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Eduardo Chagas",
          "email": "eduardo.chagas@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Evandro Miranda",
          "email": "Evandro.Miranda@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Rafael Fernandes",
          "email": "Rafael.Fernandes@scania.com",
          "type": "RESPONSIBLE"
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
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-04-06",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-04-06",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "cdd843dd-c22e-451a-b8e7-14900af6a691",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Picking",
        "description": null,
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
        "id": "ce41924b-2e77-4a67-b82e-32668035b5bb",
        "displayName": "Order to delivery",
        "description": "Owner: Martin Lyckström",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "a6fe6081-ceb9-4c86-9ab6-49a9d363a34e",
        "displayName": "Order to delivery / Production Processes / General support processes / Production Engineering",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "6c4d56b8-cb36-4d81-afd7-0a443724162e",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LD - Powertrain Production / LDE - Engine Production / LDEL - Engine Production Logistics / LDELA - Engine Logistics Development And Plannin",
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
        "id": "e7e36cd7-fecf-4d47-b729-f4029f2cb9e9",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LD - Powertrain Production / LDT - Transmission Production SBC / LDTT - Transmission Engineering & Quality / LDTTE - Axle & Central Gear Production Engineeri",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-12-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "b4f79971-407f-40c2-aebc-00488ab9fbb4",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LI - IT / LIL - Order To Delivery & Product Development / LILP - Production, Purchasing, Maintenance, R&D IT",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-11-05"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "c7c0ef59-301a-4618-bf78-1873737420b0",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LM - Chassis and Cab Production / LMB - Cab Body Production / LMBL - Cab Body Logistics / LMBLP - Planning & Development Body",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-03-25"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "8f679613-cc56-424b-a5b8-7d56332dab15",
        "displayName": "Scania - Scania CV AB / L - Scania Latin America / LM - Chassis and Cab Production / LMS - Chassis Production / LMSL - Chassis Logistics / LMSLD - Logistic Development",
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
      }
    ]
  },
  "management": {
    "objects": [
      {
        "id": "1fbc71a2-fdef-410e-a6f1-0f1ab09717f4",
        "description": null,
        "displayName": "IT@Scania Domain",
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
    "interfaceConsume": [
      {
        "id": "986fd547-abdc-4415-aee5-13ecb633e87b",
        "description": null,
        "displayName": "PICK SYSTEM",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "8c8944e4-8951-4f0d-943f-47bdd9a84ec4",
          "displayName": "BMC Software Control-M 9.0.20",
          "category": "software",
          "description": "Control-M simplifies application and data workflow orchestration on premises or as a service in the cloud . It makes it easy to build, define, schedule, manage, and monitor production workflows, ensuring visibility, reliability, and improving SLAs.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-07-24"
              },
              {
                "phase": "phaseOut",
                "startDate": "2023-07-23"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-07-23"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "03366582-5c52-4c54-91f5-1c72e0b6c246",
          "displayName": "WPF",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
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