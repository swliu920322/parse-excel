export default {
  "completion": {
    "percentage": 31,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 38,
    "dataManagement": 0,
    "dependencies": 100,
    "information": 92,
    "projects": 0,
    "robots": 0,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Peter",
      "lastName": "Johansson",
      "displayName": "Peter Johansson",
      "email": "peter_u.johansson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Santosh Bharadwaj",
      "lastName": "Rangavajjula",
      "displayName": "Santosh Bharadwaj Rangavajjula",
      "email": "santosh.bharadwaj.rangavajjula@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "Perforce",
    "description": "CM version handling tool\n\nPerforce is a Software Configuration Management System used for software version control.\nVersion control of plant models (HIL).\nVersion control of test framework (HIL, SIL).\nVersion control of test scripts (automatic test HIL and SIL).\nVersion control of source code (C-code, assembler, Simulink models).",
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
    "parent": [],
    "children": []
  },
  "initiatives": [],
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
    "capabilities": [],
    "processes": [
      {
        "id": "0f4bac7a-da21-4bdc-bc2d-e4363af4b1fb",
        "displayName": "Product development / R&D Process / Embedded System process",
        "description": "Development of embedded systems in our solutions",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2000-01-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2000-01-01"
            },
            {
              "phase": "active",
              "startDate": "2000-01-01"
            },
            {
              "phase": "endOfLife",
              "startDate": "2100-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "b993d447-52ae-4821-8efa-fc50eebeb10e",
        "displayName": "Product development / R&D Process / Embedded System process / 05 Design",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "3c9dd486-8c39-4b92-be11-27e412321a32",
        "displayName": "Product development / R&D Process / Embedded System process / 07 Release",
        "description": "The Release Process is the process that handle updates and developments of SESAMM (Scania Electrical System Architecture made for Modularization and Maintenance).  ",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2010-03-16"
            },
            {
              "phase": "active",
              "startDate": "2010-03-16"
            },
            {
              "phase": "endOfLife",
              "startDate": "2050-01-01"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "e2751da9-584a-4b7e-ad5e-30f4fdbb3106",
        "displayName": "Product development / R&D Process / Embedded System process / 08 Production",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "bca81833-6e88-49c5-8b55-85d074410e32",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IU - Infrastructure Services / IUB - Network & E2E Services / IUBT - System Development Tools & Techniques",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-12-27"
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
          "id": "e9eaa5fb-fa23-4410-a1b8-cb497b058dc4",
          "displayName": "Perforce Helix Core Apps 2018.1",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "57b36142-6d84-4b0d-87a2-cf50483bdcef",
          "displayName": "Perforce Helix Core Apps 2018.2",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "dc775b56-1226-4de0-a912-bdeda19984b9",
          "displayName": "Perforce Helix Core Apps 2018.3",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "5bbb35ed-2c92-4826-9b9e-d7a383d259b0",
          "displayName": "Perforce Helix Core Apps 2018.4",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "ee4dfa37-3490-4ca5-a91a-da5a398cea2a",
          "displayName": "Perforce Helix Core Apps 2019.1",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "ebaded8f-249d-461e-a88f-e0588f0b3478",
          "displayName": "Perforce Helix Core Apps 2019.2",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "ed032fbb-aaf5-4f2d-9de1-d36769672246",
          "displayName": "Perforce Helix Core Apps 2020.1",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "b9aa6d0c-9277-4648-94f9-6e6e4540c3a9",
          "displayName": "Perforce Helix Core Apps 2020.2",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "989ed6ec-c72f-4df2-80ee-bd91c3b860b1",
          "displayName": "Perforce Helix Core Apps 2020.3",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "b988763a-fbfa-4c0f-bf18-b71ef09425d1",
          "displayName": "Perforce Helix Core Apps 2021.1",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "1a6d4654-755b-4d61-986d-7db71f2f9ca4",
          "displayName": "Perforce Helix Core Apps 2021.2",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "1f45559f-e421-4a59-b1b1-92921dc2ce95",
          "displayName": "Perforce Helix Core Apps 2021.3",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "c4f99215-9f4e-4350-9b7a-4d1fddd139d4",
          "displayName": "Perforce Helix Core Apps 2021.4",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "0b09bbe4-2f8a-4ab7-919a-17858ce696d2",
          "displayName": "Perforce Helix Core Apps 2022.1",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "95a167aa-877f-4b75-843e-902f8af849ce",
          "displayName": "Perforce Helix Core Apps 2022.2",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "From SCT"
          ]
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "notSupported"
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