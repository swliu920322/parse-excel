export default {
  "completion": {
    "percentage": 29,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 0,
    "businessSupport": 55,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 40
  },
  "subscriptions": [
    {
      "firstName": "Tina",
      "lastName": "Hellqvist",
      "displayName": "Tina Hellqvist",
      "email": "tina.hellqvist@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Marcus",
      "lastName": "Johansson",
      "displayName": "Marcus Johansson",
      "email": "marcus.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Gadget3",
    "description": "Gadget3 will replace Gadget and Gadget II as a tool for R&D to create and execute sequences for different diagnostic services (i.e. software download, parameter setting, read/erase DTC:s, read/write SOPS etc). Sequences can be created manually or automatically based on information from ECUCompare.\nWiki for Gadget3: https://teams.microsoft.com/l/channel/19%3A80ac06974bea494f95fed9555744676b%40thread.skype/tab%3A%3A792ee1d8-d617-445a-a141-aa5b8939375a?groupId=da995977-bdc1-4973-9d04-46e7491eda03&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac&allowXTenantAccess=false",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2022-01-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "e194ae12-52ed-4164-a990-bc9f4d73d4ed",
        "displayName": "EXS550-0: Gadget",
        "description": "GadgetDBA is a client application using an SQL data base.\r\nGadgetDBA is used for granting access to production and R&D applications (plugins) in Gadget Framework. \r\nThe GadgetDBA client generates a control file for users/clients which is read at start-up of Gadget Framework.\r\n",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 1"
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
      "id": "4930bd0d-ea5b-4ba0-916e-5a20b4972891",
      "displayName": "OTA/Secure Update",
      "fullName": "OTA/Secure Update",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Lennart Borg",
          "email": "lennart.borg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Eder Silva",
          "email": "Eder.Silva@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "f8c483a1-2b3e-4f09-8afd-bbb405231d10",
      "displayName": "UNECE / Cyber Security Management System (CSMS)",
      "fullName": "Cyber Security Management System (CSMS)",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Ioannis Tzioumakas",
          "email": "ioannis.tzioumakas@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "ad75cf06-8e1c-42f7-bdb3-81606d5694fe",
      "displayName": "UNECE PoC Accesshandling",
      "fullName": "UNECE PoC Accesshandling",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "phaseIn",
            "startDate": "2023-02-06"
          },
          {
            "phase": "active",
            "startDate": "2023-02-20"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Tina Hellqvist",
          "email": "tina.hellqvist@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Jimmy Nilsson",
          "email": "jimmy.nilsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Håkan Pettersson",
          "email": "hakan_b.pettersson@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "businessCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        null,
        null
      ]
    },
    "capabilities": [
      {
        "id": "098381b7-d25e-40e8-bf19-7cf55659c744",
        "displayName": "E. Solution Development & Optimization / Transport Solution Design / Design Embedded and Electronics Systems",
        "description": "Design and develop embedded systems, including software and hardware. Designing embedded & electrical schematics, cable harnesses including chassis installation, connectors and passive elements.",
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
        "id": "e37ce85f-54fc-4ba3-9543-db923a706601",
        "displayName": "Product development / R&D Process / Embedded System process / 06 Test",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "c62d65cf-7aac-4d3c-9534-731e4f18dd68",
        "displayName": "Product development / R&D Process / Embedded System process / 09 Diagnostics",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "8c33fab0-f771-4d94-9372-20857c3cf6ae",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EEC - Connected Systems / EECD - Diagnostics / EECDC - Diagnostics C",
        "usageType": "ITmaintenance",
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
        "id": "69e635e3-9171-4e11-8733-a54680e75e2c",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EEP - System Platform / EEPS - Complete Vehicle Integration Test / EEPST - Complete Vehicle Integration Test in Vehicle",
        "usageType": "user",
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
      "service": [
        {
          "id": "c99e7dd0-715e-4b2a-8ae4-8cee8269c4bc",
          "displayName": "AWS Connected Services",
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