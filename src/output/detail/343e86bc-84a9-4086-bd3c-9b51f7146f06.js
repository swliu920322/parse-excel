export default {
  "completion": {
    "percentage": 77,
    "ChinaReadiness": 60,
    "EnterpriseGuardrails": 0,
    "businessSupport": 63,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 80
  },
  "subscriptions": [
    {
      "firstName": "Conny",
      "lastName": "Friborg",
      "displayName": "Conny Friborg",
      "email": "conny.friborg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Anders",
      "lastName": "Lenntorp",
      "displayName": "Anders Lenntorp",
      "email": "anders.lenntorp@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Sukesh Rohith",
      "lastName": "Parthasarathy",
      "displayName": "Sukesh Rohith Parthasarathy",
      "email": "sukesh-rohith.parthasarathy@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Albert",
      "lastName": "Isik",
      "displayName": "Albert Isik",
      "email": "albert.isik@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    },
    {
      "firstName": "Andreas",
      "lastName": "Holmgren",
      "displayName": "Andreas Holmgren",
      "email": "andreas.holmgren@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Anton",
      "lastName": "Smith",
      "displayName": "Anton Smith",
      "email": "anton.smith@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    }
  ],
  "information": {
    "name": "PRIDE_China_CMC",
    "description": "Common application for Product Requirement Indicator Devices Equipment. ",
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
      "id": "1fccd793-87bc-4a03-8475-2bf4ff75fc7f",
      "displayName": "SAS Industrial Project - China / China CAB Assembly IT",
      "fullName": "China CAB Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-04-01"
          },
          {
            "phase": "active",
            "startDate": "2023-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2026-01-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "745e49ba-4291-419c-b83f-68577a478047",
        "displayName": "J. Manufacturing and Assembly / Product Manufacturing / Assembly Execution",
        "description": "Ability to execute activities: \n−for assembly and sub-assemblies of components and final assembly of product for delivery to customer. Including different joining techniques; screwing, welding, riveting, bonding etc.\n−for other assembly tasks such as painting, filling and lubrication of the product \n−for data configuration of electronic control units (ECU;s)\n−all activities are done according to product specification and prepared production description\n",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-04-11"
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
        "id": "c3952adb-95a6-4855-8617-8f5717ced0b3",
        "displayName": "Order to delivery / Production Processes / Production Core Processes / Assembly",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "6073a9cc-7796-4295-b221-fdd0f9a006d4",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INF - P&L Platforms / INFB - SCADA",
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
          "id": "8cb674a4-1f6b-49af-b997-7d95c48e4405",
          "displayName": "Ignition",
          "category": "software",
          "description": "Common application for Product Requirement, Indicator, Devices, Equipment.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-02-15"
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
    "ssoProvider": ".",
    "statusSSO": "notSupported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "NA",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "INF",
    "ChinaDesign": "INF",
    "ChinaSourcing": "",
    "ChinaPaying": "TCH",
    "ChinaImplementation": "TTP",
    "Chinaverification": "TTP",
    "ChinaOperations": "TTP / INF"
  }
}