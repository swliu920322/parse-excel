export default {
  "completion": {
    "percentage": 84,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 100,
    "businessSupport": 53,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 88,
    "projects": 100,
    "robots": 100,
    "sourcing": 78
  },
  "subscriptions": [
    {
      "firstName": "Björn",
      "lastName": "Näslund",
      "displayName": "Björn Näslund",
      "email": "bjorn.naslund@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Jan",
      "lastName": "Persson",
      "displayName": "Jan Persson",
      "email": "jan.persson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Jessica",
      "lastName": "Löfström",
      "displayName": "Jessica Löfström",
      "email": "jessica.lofstrom@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Håkan",
      "lastName": "Pettersson",
      "displayName": "Håkan Pettersson",
      "email": "hakan_b.pettersson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Jimmy",
      "lastName": "Nilsson",
      "displayName": "Jimmy Nilsson",
      "email": "jimmy.nilsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Joao",
      "lastName": "Leite",
      "displayName": "Joao Leite",
      "email": "joao.vitor@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Max",
      "lastName": "Ten",
      "displayName": "Max Ten",
      "email": "max.ten@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "IGA - Identity Governance & Administration",
    "description": "IGA - Identity Governance & Administration replaces IdM, PUM and AG applications from October 2019.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2021-05-10",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "926c966f-1f04-44cd-9f35-bc27b8f2061b",
        "displayName": "ACI",
        "description": "ACI is an application to request/revoke access to applications, folders, shares, remote access, MS Lync and creation user account (Global domain), Outlook account, shared email address, email distribution list and meeting room/resource.",
        "type": "Application",
        "tags": [
          "Maturity Level 2"
        ],
        "subscriptions": []
      },
      {
        "id": "7fbe516f-9fff-480c-9e63-4c486df0512b",
        "displayName": "IdM",
        "description": "The Oracle Waveset 8.1.x to support the processes for Identity- and access management. Main mission is to support-, streamline and automate the lifecycle management of IT users within Scanias main IT systems.",
        "type": "Application",
        "tags": [],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "e280cd5b-9125-452b-9f76-8bb41f37a4e6",
      "displayName": "New IGA system",
      "fullName": "New IGA system",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Staffan Vildelin",
          "email": "staffan.vildelin@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "3cd3bf78-acea-450a-9c49-ca7c03b7d692",
      "displayName": "SAS Industrial Project - China / China HR IT",
      "fullName": "China HR IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-09-12"
          },
          {
            "phase": "phaseOut",
            "startDate": "2024-06-28"
          },
          {
            "phase": "endOfLife",
            "startDate": "2024-08-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anton Smith",
          "email": "anton.smith@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Pandey Rashmi",
          "email": "pandey.rashmi@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Bassam Atto",
          "email": "bassam.atto@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Richard Hasselgren",
          "email": "richard.hasselgren@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Siddhant Bajaj",
          "email": "siddhant.bajaj@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Hans Liu",
          "email": "hans.liu@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    },
    {
      "id": "f9681f1a-e8f3-4a95-aeca-8e2abeabda85",
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
    },
    {
      "id": "e4272562-4542-4494-8354-638d825eba92",
      "displayName": "Swedish Time System",
      "fullName": "Swedish Time System",
      "tags": [],
      "lifecycle": {
        "asString": "endOfLife",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2019-12-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2020-01-01"
          },
          {
            "phase": "active",
            "startDate": "2020-02-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2020-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "André Hansson",
          "email": "andre.hansson@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "4a77b7a8-dac6-41d4-9a0f-f3d61d59ebc2",
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
      "businessCriticality": "businessOperational",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2022-11-01",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2025-11-01",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "9626c75d-4ba7-4c51-bb60-ceffa6ebd268",
        "displayName": "P. Information Technology and Data Management / IT and Data Security Management / Identity and Access Management",
        "description": "The ability to make it possible for the right entities (people or things) to use the right resources (applications or data) when they need to, without interference, using the devices they want to use.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-17"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "68d2095c-861a-4adb-a491-80cb92af7768",
        "displayName": "Supporting processes / Human Resource SWE / Support HR SWE / Set up new employees in STR",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "a2de9e60-a5ed-4ff5-889b-eac676b81fb2",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXH - Information Security / IXHD - Electronic Identification Solutions",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-12-13"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "509cb8f8-bdc7-4587-8ac9-13f9d8028489",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WN - Region Northern Europe / WN - BU Norway",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "44ccdee9-2566-4e0f-89b8-1534788c80b1",
        "displayName": "Scania - Scania CV AB / P_CO - Commercial Operations / W - Regional Office / WS - Region Southern Europe / WS - BU Italy",
        "usageType": "user",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-10-11"
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
        "id": "2c5e3bbb-156d-4d34-acb9-d08be4faf28e",
        "description": "Person represents the \"flesh and blood\" level at the Organization side, individual employee, maintenance responsible and driver can be good example of Person. A person belongs to a specific Organization and can be responsible for several Organizations (as for example sales responsible for several customer accounts). A person can have different kind of internal and external Person identification.  Person is a main division of the superior and more generic entity Party, where Party also includes the Organizational side, which has great importance for Scania as a business-to-business company.",
        "displayName": "Organisation Domain / Party & Customer Entity / Person",
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
    "interfaceConsume": [
      {
        "id": "1e80abeb-7136-4ba0-b69c-c299c908c25a",
        "description": "This is a RESTFul API for the IGA system.",
        "displayName": "IGA - Identity Governance & Administration_IGA IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "8244054b-c4ed-42e5-ad54-cbeb02581be9",
        "description": "This is a new architecture RESTFul API for the IGA system.",
        "displayName": "IGA - Identity Governance & Administration_IGAAPI2ndGen IE v0.1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-31"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "15eb1aa7-02a3-48d8-9c00-82c3edb2e1b1",
        "description": null,
        "displayName": "IGA - Identity Governance & Administration_IGAOCM IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-03"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "11fc15fa-ebd7-49b8-ab3e-19322567fb0c",
        "description": "Sending Contract: SCCO976, Sending POD: MQ",
        "displayName": "IGA - Identity Governance & Administration_identity & Access mgm SCCO1140",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "1e80abeb-7136-4ba0-b69c-c299c908c25a",
        "description": "This is a RESTFul API for the IGA system.",
        "displayName": "IGA - Identity Governance & Administration_IGA IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "8244054b-c4ed-42e5-ad54-cbeb02581be9",
        "description": "This is a new architecture RESTFul API for the IGA system.",
        "displayName": "IGA - Identity Governance & Administration_IGAAPI2ndGen IE v0.1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-01-31"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "15eb1aa7-02a3-48d8-9c00-82c3edb2e1b1",
        "description": null,
        "displayName": "IGA - Identity Governance & Administration_IGAOCM IE v1.0",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-09-03"
            }
          ]
        },
        "tags": []
      },
      {
        "id": "b132758d-08ac-409b-8fd9-517ac2052da1",
        "description": "Excel based import from IGA to ALTO.",
        "displayName": "IGA - Identity Governance & Administration_Organizational Data",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-04-16"
            },
            {
              "phase": "endOfLife",
              "startDate": "2021-10-14"
            }
          ]
        },
        "tags": [
          "Maturity Level 2"
        ]
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "0df2583a-858b-4b80-8eb4-bc3d4b59de8e",
          "displayName": "SailPoint Technologies IdentityIQ 8.1",
          "category": "software",
          "description": "SailPoint IdentityIQ is an identity and access management (IAM) solution for enterprise customers that delivers automated access certifications, policy management, access request and provisioning, password management, and identity intelligence.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-08-01"
              }
            ]
          },
          "tags": []
        }
      ],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "AAD",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXHE",
    "ChinaDesign": "IXHE",
    "ChinaSourcing": "IXHE",
    "ChinaPaying": "IXHE",
    "ChinaImplementation": "IXHE",
    "Chinaverification": "IXHE",
    "ChinaOperations": "IXHE"
  }
}