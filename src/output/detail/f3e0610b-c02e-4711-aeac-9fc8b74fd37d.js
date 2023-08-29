export default {
  "completion": {
    "percentage": 36,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 55,
    "dataManagement": 50,
    "dependencies": 0,
    "information": 33,
    "projects": 0,
    "robots": 0,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Johan",
      "lastName": "Lindahl",
      "displayName": "Johan Lindahl",
      "email": "johan.lindahl@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "EDI China Cloud Services",
    "description": "EDI Global Cloud offers EDI trading partners connections as a service. Supported processes are Delivery schedule message (DELFOR), Delivery just in time message (DELJIT), Despatch advice message (DESADV),Invoice message (INVOIC).",
    "lifecycle": {
      "asString": "-",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2023-10-01",
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
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-06-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-06-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "c3c0dc13-e5f2-4410-b087-0ce4c826f255",
        "displayName": "G. Sourcing and Purchasing (Procurement) / Material & Services Procurement / Purchase Ordering",
        "description": "Eg: \n\nâ€¢ Supplier purchase order/call off (including NAP Ordering, AP Ordering, Tools Ordering, Experimental Parts Ordering)\n\nâ€¢ Supplier delivery scheduling (including Supplier delivery schedule creation, Supplier delivery schedule distribution)",
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
      },
      {
        "id": "5642c602-d70f-4bee-b7fb-f92443cdede3",
        "displayName": "H. Logistics and Warehouse Management / Warehouse Management / Goods Receive Handling",
        "description": "The ability to handle goods receipt, including delivery notes handling, unpacking, repacking, inspection, quality control, inventory handling and more",
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
        "id": "c2bc45d7-08e7-4451-a54b-fc557f7ca598",
        "displayName": "EDI",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "c4b892a4-7d5f-4d32-8710-dbd090ec1bb5",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WO - AO region / WO - BU China",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-12"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "63ec1fc6-2fac-4713-94c3-0f6dff40b4a8",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / O - Logistics / OS - Strategy & Business Development / OSI - Logistics IT / OSIB - EDI Development & Support",
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
    "objects": [
      {
        "id": "a6e92b3d-a3be-4623-8205-dab8e08c4a3e",
        "description": null,
        "displayName": "Financial Control Domain / Invoice Entity / Supplier Invoice",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      },
      {
        "id": "f4c36abb-8a50-4a86-97cb-c3aad2a9031c",
        "description": "delivery schedule is a cohesive level for planning and control of consumption of parts and material at Scania production units and warehouses. contains an overview of all call offs for a PRU within 365 days.",
        "displayName": "Logistics Domain / Material Planning Entity / Delivery Schedule",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      },
      {
        "id": "a8ec4009-a4d9-4ded-992a-c142cd8fc886",
        "description": "A document accompanying a shipment that lists the description and quantity of the goods delivered.",
        "displayName": "Logistics Domain / Transport Operation Entity / Delivery Note",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-08"
            }
          ]
        },
        "tags": [
          "CIM (Common Information Model)"
        ]
      }
    ],
    "interfaceConsume": [],
    "interfaceProvide": [
      {
        "id": "b8d6f18b-bdc7-4886-8a9c-080f4d46b4e5",
        "description": "Delivery schedule message",
        "displayName": "EDI China Cloud Services_DELFOR",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2023-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b9fab867-ab16-430d-8284-5b3563b7bc51",
        "description": "Delivery just in time message",
        "displayName": "EDI China Cloud Services_DELJIT",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2023-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "f9a40151-ff60-4946-8243-20939a10d647",
        "description": "Despatch advice message",
        "displayName": "EDI China Cloud Services_DESADV",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2023-07-04"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "01338b61-ffb3-4d64-81c3-5492708c2f95",
        "description": "Invoice message",
        "displayName": "EDI China Cloud Services_INVOIC",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2023-07-04"
            }
          ]
        },
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "957bf1cd-cf27-4267-936d-c4c964ba4d61",
          "displayName": "Seeburger Cloud Services China",
          "category": "software",
          "description": "EDI SaaS service hosted in China",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "plan",
            "phases": [
              {
                "phase": "plan",
                "startDate": "2023-07-04"
              }
            ]
          },
          "tags": []
        },
        {
          "id": "b2821358-4434-4545-8201-cf0ee129c83b",
          "displayName": "SEEBURGER Supplier Portal",
          "category": "software",
          "description": "SEEBURGER Supplier Portal Service offers a WebEDI portal to integrate non-EDI-enabled suppliers into the EDI infrastructure. The suppliers can receive the orders, create the follow-up documents and send them back to the user.",
          "type": "ITComponent",
          "lifecycle": null,
          "tags": []
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
    "ChinaRequirements": "OSIB",
    "ChinaDesign": "OSIB",
    "ChinaSourcing": "OSIB",
    "ChinaPaying": "ongoing disc",
    "ChinaImplementation": "OSIB/TT",
    "Chinaverification": "OSIB/TT",
    "ChinaOperations": "SAAS provider"
  }
}