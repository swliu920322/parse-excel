export default {
  "completion": {
    "percentage": 58,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 50,
    "businessSupport": 55,
    "dataManagement": 25,
    "dependencies": 50,
    "information": 63,
    "projects": 100,
    "robots": 100,
    "sourcing": 33
  },
  "subscriptions": [
    {
      "firstName": "Johan",
      "lastName": "Stoltz",
      "displayName": "Johan Stoltz",
      "email": "johan.stoltz@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Robert",
      "lastName": "Liikamaa",
      "displayName": "Robert Liikamaa",
      "email": "robert.liikamaa@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Excel",
    "description": "Software for creating and editing spreadsheets",
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
    "parent": [
      {
        "id": "6ec36679-b99b-40e2-8494-c5f3207ba696",
        "displayName": "Office 365",
        "description": "Check other Variants first",
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
      "id": "7c892ad3-900e-42a3-a612-95e9251301a7",
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
      "businessCriticality": "administrativeService",
      "functionalSuitability": "perfect",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2023-03-15",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-03-15",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "875532c3-30d6-4d24-8d8e-b709710d0a62",
        "displayName": "P. Information Technology and Data Management / IT Operations Management / IT Service Management",
        "description": "The ability to manage IT Service Support and IT Service Delivery",
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
        "id": "227c35f0-6d8f-43df-91a7-5c2e59e5dd07",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IB - Digital Workplace / IBC - Productivity Services / IBCB - Communication & Collaboration",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2021-07-13"
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
        "id": "5731f8b8-f47b-4921-9c97-ae6f3d7ac412",
        "description": "This Interface consists of an extract of the Transaction of all the Sales Invoices and Credit Notes from Autoline 8.32 into an Excel Spreadsheet for analysis by the Financial Reporting Team. These have to be run manually which is typically quarterly to align with the quarterly VAT return but at some point I’ll start running the reports monthly.\n\n",
        "displayName": "Autoline SGB 8.32_Sales_Invoices_Credit_Notes",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-16"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "127ddf1e-dfd6-4fab-ad55-ebae2e85dd8d",
        "description": "SASS tabular model for KB BI Tool\n",
        "displayName": "Common Data Warehouse / INDIANA (DW) / KB BI Tool_KB_Tabular",
        "lifecycle": null,
        "tags": [
          "Not China affected"
        ]
      }
    ],
    "interfaceProvide": [
      {
        "id": "6d225a99-4ce8-49c1-8993-8b3781073002",
        "description": "The Interface consumes the Airplus data (an Excel source data) file which is formatted and placed in the relevant directory and run monthly on-demand [using the \"Process SGB Interface Files”\noption in Autoline] which places it on the AS/400 for format validation then into an Autoline Transfer Director and then Autoline pulls the data.\n",
        "displayName": "Office 365 / Excel_Airplus Data",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2022-06-17"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      },
      {
        "id": "969180f5-181a-48fe-8526-55aa3ed6725f",
        "description": "Provides data for reporting - Excel/PDF - runs daily and on-demand - connects the BI Data between the Connect Services Tools (Data) and Snowflake - supported by IT (Manos)\n\n",
        "displayName": "Office 365 / Excel_IRIS",
        "lifecycle": {
          "asString": "endOfLife",
          "phases": [
            {
              "phase": "endOfLife",
              "startDate": "2022-09-01"
            }
          ]
        },
        "tags": [
          "Maturity Level 1"
        ]
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "347ddd87-4bc5-4fc5-af10-74a149a5abdf",
          "displayName": "Microsoft Office Excel 2016",
          "category": "software",
          "description": "Microsoft Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS. It features calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "phaseOut",
            "phases": [
              {
                "phase": "active",
                "startDate": "2015-09-22"
              },
              {
                "phase": "phaseOut",
                "startDate": "2020-10-13"
              },
              {
                "phase": "endOfLife",
                "startDate": "2025-10-14"
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
    "ChinaRequirements": "IBD",
    "ChinaDesign": "IBD",
    "ChinaSourcing": "IBD/TTI",
    "ChinaPaying": "IBD/TTI",
    "ChinaImplementation": "IBD",
    "Chinaverification": "TTI",
    "ChinaOperations": "IBD"
  }
}