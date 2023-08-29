export default {
  "completion": {
    "percentage": 51,
    "ChinaReadiness": 58,
    "EnterpriseGuardrails": 50,
    "businessSupport": 65,
    "dataManagement": 13,
    "dependencies": 50,
    "information": 92,
    "projects": 100,
    "robots": 0,
    "sourcing": 34
  },
  "subscriptions": [
    {
      "firstName": "Martina",
      "lastName": "Pettersson",
      "displayName": "Martina Pettersson",
      "email": "martina.pettersson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Bianca",
      "lastName": "Björkman",
      "displayName": "Bianca Björkman",
      "email": "bianca.bjorkman@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "BIW Scada CMB",
    "description": "BIW Scada CMB is the application for Body In White in China (body welding workshop) that recives production orders from MONA via Apriso and download orders to PLC.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2026-12-31",
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
        "id": "c98f92aa-6cae-4a42-8211-6d047e86d6f7",
        "displayName": "BIW Scada",
        "description": "BIW Scada is the application for Body In White in Oskarshamn (body welding workshop) that recives production orders from MONA via Apriso and download orders to PLC.",
        "type": "Application",
        "tags": [
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
      "id": "df7b88ac-8a36-4896-beec-35655a6dfaf3",
      "displayName": "SAS Industrial Project - China / China BiW IT",
      "fullName": "China BiW IT",
      "tags": [
        "China affected"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "active",
            "startDate": "2022-05-02"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Johan Persson",
          "email": "johan.y.persson@scania.com",
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
          "displayName": "Jimmy Olofsson",
          "email": "jimmy.olofsson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Mikael Rothsten",
          "email": "mikael.rothsten@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Johan Öberg",
          "email": "johan.x.oberg@scania.com",
          "type": "OBSERVER"
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
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-04-18",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-04-18",
              "milestoneId": null
            }
          ]
        },
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
        "id": "4bdf2c32-f5dc-4889-b75c-90be667e9c38",
        "displayName": "Supporting processes / IT",
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
        "id": "5caafae6-411b-4506-bd13-7bb88990f247",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IN - Order to Delivery IT / INB - INB Chassis & Cabs IT / INBB - Cab Body Production IT",
        "usageType": "ITmaintenance",
        "description": null,
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
          "From IGA"
        ]
      },
      {
        "id": "3410d77c-3c05-4c28-9be4-b1e10c67f58f",
        "displayName": "Scania - Scania CV AB / P_PL - Production & Logistics / M - Chassis, Cab and Bus Production / MB - Cab Body Production / MBB - Press and Body",
        "usageType": "user",
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
    "interfaceConsume": [
      {
        "id": "6384d429-9a93-4d07-b325-c30a9226607b",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_CalendarInformationScadaMONA",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "770da19e-b5d4-448a-9049-8783952fc696",
          "displayName": "Kepware KEPServerEX",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "93879c50-0768-4c1b-817a-2e46542d5df0",
          "displayName": "Microsoft SQL Server 2014 SP2",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management and analysis system for e-commerce, line-of-business, and data warehousing solutions.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "endOfLife",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-07-14"
              },
              {
                "phase": "endOfLife",
                "startDate": "2020-01-14"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "83e2da2d-02c6-4f6b-abf8-08f614d20343",
          "displayName": "Microsoft SQL Server Standard 2017",
          "category": "software",
          "description": "Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "phaseIn",
                "startDate": "2017-07-17"
              },
              {
                "phase": "active",
                "startDate": "2017-09-29"
              },
              {
                "phase": "phaseOut",
                "startDate": "2022-10-11"
              },
              {
                "phase": "endOfLife",
                "startDate": "2027-10-12"
              }
            ]
          },
          "tags": [
            "From SCT"
          ]
        },
        {
          "id": "56d4de68-b1d1-431a-b1c2-00b905eceb98",
          "displayName": "TIA PORTAL SIEMENS",
          "category": "software",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "d7f4fed9-abe2-4b05-888b-e9870d931522",
          "displayName": "wincc",
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
    "ChinaITlegalCompliance": "DAcompleted",
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "TCHB",
    "ChinaDesign": "INBB/TTPB",
    "ChinaSourcing": "TCHB/INBB",
    "ChinaPaying": "TCHB",
    "ChinaImplementation": "TTPB/INBB",
    "Chinaverification": "TCHB/TTPB/INBB",
    "ChinaOperations": "TTPB"
  }
}