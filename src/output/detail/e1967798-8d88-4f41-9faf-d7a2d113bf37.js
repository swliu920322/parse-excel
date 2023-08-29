export default {
  "completion": {
    "percentage": 22,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 24,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 0
  },
  "subscriptions": [
    {
      "firstName": "Björn",
      "lastName": "Nyqvist",
      "displayName": "Björn Nyqvist",
      "email": "bjorn.nyqvist@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Marcus",
      "lastName": "Gustafsson",
      "displayName": "Marcus Gustafsson",
      "email": "marcus_x.gustafsson@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "Export Control Classification Database",
    "description": "Export Control Classification Database",
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
    "productCategory": "",
    "predecessor": [],
    "successor": [
      {
        "id": "b349611b-30f2-49aa-ac3f-01271eebd957",
        "displayName": "EXCIT-CLASS 1.0",
        "description": "Export control classification tool. This is a SaaS solution provided from a supplier named AEB. The tool is calculating the percentage of parts that subject to export control using the BOM for a product. ",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ]
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "72863bed-9b97-4423-90b2-c4775d713f0b",
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
        "id": "1e374a84-9ff9-4eaa-a419-ae18340754f6",
        "displayName": "B. Legal, Risk and Compliance Management / Compliance Management / Export Control Management",
        "description": "The ability of Scania to adapt to the Export Control Compliance Program (ECCP) to comply with national and third country export control legislation, sanctions and embargoes.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-17"
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
        "id": "e6b9ab09-e746-4329-aace-087c1d0ffd81",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRA - CAD & vPDM",
        "usageType": null,
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
        "id": "6056e600-0ebf-4e65-ba31-1058913efa59",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRD - Architecture Portfolio Management",
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
      },
      {
        "id": "a5789097-b595-4763-a3cf-27af64ac30c2",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMP - Process, Methods and IT tools / EYMPL - Legal",
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