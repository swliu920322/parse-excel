export default {
  "completion": {
    "percentage": 67,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 41,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 92,
    "projects": 100,
    "robots": 100,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Malaiswamy",
      "lastName": "Kannan",
      "displayName": "Malaiswamy Kannan",
      "email": "malaiswamy.k@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Grethe",
      "lastName": "Hallberg",
      "displayName": "Grethe Hallberg",
      "email": "grethe.hallberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Tobias",
      "lastName": "Abrahmsen",
      "displayName": "Tobias Abrahmsen",
      "email": "tobias.abrahmsen@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Katarina",
      "lastName": "Stensson",
      "displayName": "Katarina Stensson",
      "email": "katarina.stensson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "TIM",
    "description": "Commong issue management system for use within Traton.\nInitial supported process is the Failure Elimination Process.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-01-22",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "8dc4e0d7-673e-4be3-9538-ee660ad61d36",
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [],
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
        "id": "8c49f2a7-958f-498e-bab3-3e54b457c364",
        "displayName": "Product development / R&D Process / R&D Methods / TRATON R&D Collaboration Process / TRATON Failure Management",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "43f02d2a-1797-43b8-8217-871ace195870",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IR - PD IT / IRE - Collaboration / IREC - FRAS",
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
        "id": "c81c4fbc-cb5d-4e9f-85f3-6c2c1905007d",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EM - Modular Solutions / EMV - Vehicle Cost / EMVP - Product Owner sub processer i PD Processen",
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
      },
      {
        "id": "f82062a2-3efd-432f-b1ec-990335e3eec8",
        "displayName": "Scania - Scania CV AB / TG - TRATON AB / TOD - Research & Development",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2019-08-26"
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
          "id": "b7d0524b-2391-4108-8799-7778171245d0",
          "displayName": "BMC Software Action Request System 19.08",
          "category": "software",
          "description": "BMC Remedy Action Request System is a professional development environment that leverages the recommendations of the IT Infrastructure Library (ITIL) and provides a foundation for Business Service Management (BSM) solutions. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-08-22"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-08-22"
              },
              {
                "phase": "endOfLife",
                "startDate": "2024-08-22"
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