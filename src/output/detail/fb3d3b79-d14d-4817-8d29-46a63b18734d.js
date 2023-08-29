export default {
  "completion": {
    "percentage": 37,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 0,
    "businessSupport": 53,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 33,
    "projects": 100,
    "robots": 0,
    "sourcing": 36
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
      "firstName": "Håkan",
      "lastName": "Johansson",
      "displayName": "Håkan Johansson",
      "email": "hakan.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Albert",
      "lastName": "Isik",
      "displayName": "Albert Isik",
      "email": "albert.isik@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "Didrik CMS",
    "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \nWinCC från Siemens. ",
    "lifecycle": {
      "asString": "plan",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-09-27",
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
        "id": "0666aea8-e732-4e97-a4c7-0a7c80507928",
        "displayName": "DIDRIK",
        "description": "Production application for mainly controling tact, poka yoke interfaces andon and quality insurance. Also used to gather data for process and production followup. \r\nWinCC från Siemens. ",
        "type": "Application",
        "tags": [
          "Critical",
          "Manufacturing",
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
      "id": "b65ff8ac-2ee9-4039-8ab1-44159c0ea313",
      "displayName": "SAS Industrial Project - China / SAS Final Assembly IT",
      "fullName": "SAS Final Assembly IT",
      "tags": [
        "China affected",
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2022-04-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2022-07-01"
          },
          {
            "phase": "active",
            "startDate": "2022-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Frédéric Anquetil",
          "email": "Frederic.Anquetil@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Douglas Mitsuru Higa",
          "email": "Douglas.Higa@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Thomas Sahleström",
          "email": "thomas.sahlestrom@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Arthur Takaki",
          "email": "arthur.takaki@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pallavi Shrotri",
          "email": "pallavi.shrotri@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Claes Boije",
          "email": "claes.boije@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torbjörn Landenberg",
          "email": "torbjorn.landenberg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Henrik Bylund",
          "email": "henrik.bylund@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pekka Palonen",
          "email": "pekka.palonen@scania.com",
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
          "id": "3a089407-58a0-458e-9b14-dcfa1594e678",
          "displayName": "SIMATIC WinCC",
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
    "ChinaITlegalCompliance": "NA",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCMA / VEIS",
    "ChinaDesign": "INFH / INFB / TTPH",
    "ChinaSourcing": "INFB / INFH / TTPH (Hardware TCMEA)",
    "ChinaPaying": "INFB - VEI",
    "ChinaImplementation": "TTPH / INFH / INFB",
    "Chinaverification": "TCMEA / TTPH / INFH / INFB",
    "ChinaOperations": "TTPH"
  }
}