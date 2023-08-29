export default {
  "completion": {
    "percentage": 37,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 45,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 38,
    "projects": 100,
    "robots": 0,
    "sourcing": 43
  },
  "subscriptions": [
    {
      "firstName": "Per",
      "lastName": "Casserdahl",
      "displayName": "Per Casserdahl",
      "email": "per.casserdahl@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Markku",
      "lastName": "Tammerin",
      "displayName": "Markku Tammerin",
      "email": "markku.tammerin@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Adela",
      "lastName": "Åberg",
      "displayName": "Adela Åberg",
      "email": "adela.aberg@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "R&D-Hub - R&D Management system",
    "description": "R&D-Hub is the the Management system for R&D. Other areas of Scania uses Reflex as a platform. \nThe R&D hub is built on SharePoint with three main areas\n- Organisational sites, each sector and department have their own site with document library as well as a department teams.\n- Cross Functional, processes, methods and tools that are used by more than one department, but owned by R&D have their own sites.\n- DMS (Document Management System) Each site has an area in the document management system where controlled documents are stored according to R&D Document plan. Approval and Publishing flows are built with Power Automate to simplify the use for the end users.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2020-02-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2020-12-01",
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
  "initiatives": [
    {
      "id": "662a5d29-ccb8-4da2-b70a-f998d6cb6cac",
      "displayName": "SAS Industrial Project - China / China RnD PrIT",
      "fullName": "China RnD PrIT",
      "tags": [
        "China affected"
      ],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Erik Eriksson",
          "email": "erik.x.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcus Gustafsson",
          "email": "marcus_x.gustafsson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
        }
      ]
    },
    {
      "id": "18448708-9af3-4a8c-9df0-cfa49cb7b504",
      "displayName": "SGP Document retention policy",
      "fullName": "SGP Document retention policy",
      "tags": [],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2021-09-01"
          },
          {
            "phase": "active",
            "startDate": "2022-01-01"
          },
          {
            "phase": "endOfLife",
            "startDate": "2027-12-31"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Peter Ingwaldson",
          "email": "peter.ingwaldson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Rickard Ångman",
          "email": "rickard.angman@scania.com",
          "type": "RESPONSIBLE"
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
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2020-09-15",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2023-09-15",
              "milestoneId": null
            }
          ]
        },
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
      }
    ],
    "organisations": [
      {
        "id": "1544a5df-a909-4c6b-bfda-17ad7332b66e",
        "displayName": "Scania - Scania CV AB",
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
        "id": "5c9da3e0-30c7-4f89-83c1-e017837744cc",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMP - Process, Methods and IT tools / EYMPI - Digital Office R&D",
        "usageType": "owner",
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
      "software": [
        {
          "id": "8cbd0689-aed3-494c-8191-6ff4090c82ba",
          "displayName": "Microsoft Office 365",
          "category": "software",
          "description": "Office 365 is a line of subscription services offered by Microsoft as part of the Microsoft Office product line. The brand encompasses plans that allow use of the Microsoft Office software suite over the life of the subscription, as well as cloud-based software-as-a-service products for business environments, such as hosted Exchange Server, Skype for Business Server, and SharePoint, among others. All Office 365 plans include automatic updates to their respective software at no additional charge, as opposed to conventional licenses for these programs—where new versions require purchase of a new license.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2011-06-28"
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