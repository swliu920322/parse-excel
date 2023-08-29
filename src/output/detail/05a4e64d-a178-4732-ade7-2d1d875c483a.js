export default {
  "completion": {
    "percentage": 82,
    "ChinaReadiness": 51,
    "EnterpriseGuardrails": 100,
    "businessSupport": 70,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 50
  },
  "subscriptions": [
    {
      "firstName": "Muhammad",
      "lastName": "Umer",
      "displayName": "Muhammad Umer",
      "email": "muhammad.umer@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Angel",
      "lastName": "Devaraj",
      "displayName": "Angel Devaraj",
      "email": "angel.devaraj@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Subhendu",
      "lastName": "Tripathy",
      "displayName": "Subhendu Tripathy",
      "email": "subhendu.tripathy@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "IPS",
    "description": "IPS is used for simulation of flexible structures, such as wiring installations in trucks. ",
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
      "id": "8695d94a-1a0f-4233-9d7a-f44286e9ff00",
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
        "id": "457bc812-6780-48bb-87ef-652b2434e4ff",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Manufacturing Planning",
        "description": "Business Capability to determine actual production schedule and production capability at Production Unit, Regional Product Center or Knock Down/Semi Knock Down Assembly unit. Eg: Manufacturing Capacity Management or Manufacturing Constraints Evaluation or Manufacturing Scheduling, including staff planning.",
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
          "MilkyWay area 14. Production and Logistical Introduction Ramp Up"
        ]
      }
    ],
    "processes": [
      {
        "id": "642209e5-ca41-4155-b73e-1670dc6aabc1",
        "displayName": "Order to delivery / Production Processes / Preparation processes / Assembly Preparation",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "e88470a9-76c3-42cf-8221-86f100f66941",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT",
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
        "id": "5828f2e7-f627-49aa-99c3-a995db3507d5",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFG - Smart Factory & Digital Factory",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-26"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "9a99b132-77e9-402d-893b-d168bfc6204c",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / VE - Global Industrial Development / DBD - Digital Office Industrial Operations / DBDL - Smart Factory Lab",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-02-01"
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
          "id": "4e765adc-887e-482c-8023-3911e6ead700",
          "displayName": "Microsoft Windows Server Standard 2016",
          "category": "software",
          "description": "Windows Server is a group of operating systems designed by Microsoft that supports enterprise-level management, data storage, applications, and communications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-10-15"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-01-11"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-01-12"
              }
            ]
          },
          "tags": [
            "From SCT"
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
    "ChinaITlegalCompliance": "SQCcompleted",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "INF",
    "ChinaDesign": "INF",
    "ChinaSourcing": "INF",
    "ChinaPaying": "VEI",
    "ChinaImplementation": "INF",
    "Chinaverification": "INF /TTP",
    "ChinaOperations": ""
  }
}