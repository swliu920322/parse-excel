export default {
  "completion": {
    "percentage": 60,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 50,
    "businessSupport": 65,
    "dataManagement": 38,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 0,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Nils-Ove",
      "lastName": "Fredriksson",
      "displayName": "Nils-Ove Fredriksson",
      "email": "nils-ove.fredriksson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Helena",
      "lastName": "Westman",
      "displayName": "Helena Westman",
      "email": "helena.westman@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Tom",
      "lastName": "Varis",
      "displayName": "Tom Varis",
      "email": "tom.varis@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "BI Logistics Platform Packaging",
    "description": "Handle packaging of material...",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2020-04-05",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2020-05-03",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2020-11-22",
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
  "initiatives": [],
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
              "startDate": "2022-01-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-01-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "6a4b2bfc-6418-451f-b5f2-45ba20f1ecbf",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Packaging Management",
        "description": "The required processes to ship packaging to relevant organizations (suppliers mostly). Storage, sorting, recycling, breakdown, ordering, shipping and material planning for packaging numbers",
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
      }
    ],
    "organisations": [
      {
        "id": "708170c4-ad34-49a6-b930-0557e0430276",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAA - PD and O2D Business Intelligence",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-11-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "62bfe281-2832-4d08-8cbf-450b15fb6c16",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / O - Logistics / OS - Strategy & Business Development / OSP - Packaging Development / OSPA - Network & Business Development",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-09-01"
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
    "interfaceProvide": [
      {
        "id": "1df93fb1-8e24-460c-9d3d-97963d24ad04",
        "description": null,
        "displayName": "BI Logistics Platform Packaging_Actual Fillrate Packaging",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "630cf5dd-db2a-4dbf-8478-afdb512553b6",
        "description": null,
        "displayName": "BI Logistics Platform Packaging_Packaging Shortage",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "a1b98c39-5908-47ed-82c5-89568de33120",
          "displayName": "Oracle Oracle Database Enterprise 12c R2",
          "category": "software",
          "description": "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2017-03-01"
              },
              {
                "phase": "phaseOut",
                "startDate": "2020-11-30"
              },
              {
                "phase": "endOfLife",
                "startDate": "2022-03-31"
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
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": "SQCcompleted",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "OSPA",
    "ChinaDesign": "IXAA",
    "ChinaSourcing": "IXA",
    "ChinaPaying": "IXAA",
    "ChinaImplementation": "IXAA/TT",
    "Chinaverification": "OSPA/IXAA",
    "ChinaOperations": "IXAA"
  }
}