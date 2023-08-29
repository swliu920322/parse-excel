export default {
  "completion": {
    "percentage": 28,
    "ChinaReadiness": 17,
    "EnterpriseGuardrails": 0,
    "businessSupport": 37,
    "dataManagement": 14,
    "dependencies": 0,
    "information": 67,
    "projects": 100,
    "robots": 0,
    "sourcing": 17
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "greger.flodkvist@scania.com",
      "email": "greger.flodkvist@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "patrice.deslandes@scania.com",
      "email": "patrice.deslandes@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Albert",
      "lastName": "Santos",
      "displayName": "Albert Santos",
      "email": "Albert.Santos@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Joakim",
      "lastName": "Ersson",
      "displayName": "Joakim Ersson",
      "email": "joakim.ersson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "marijke.schenkel@scania.com",
      "email": "marijke.schenkel@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Marcellino",
      "lastName": "Buitenhuis",
      "displayName": "Marcellino Buitenhuis",
      "email": "Marcellino.Buitenhuis@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "George",
      "lastName": "Kalo",
      "displayName": "George Kalo",
      "email": "george.kalo@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Samira",
      "lastName": "Ishak Johansson",
      "displayName": "Samira Ishak Johansson",
      "email": "samira.ishak.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Viktor",
      "lastName": "Kaznov",
      "displayName": "Viktor Kaznov",
      "email": "viktor.kaznov@scania.com",
      "type": "OBSERVER",
      "role": []
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
    "name": "INSTO",
    "description": "INSTO (Information Store) Data Warehouse\nData is not updated directly in the DW but rather in the source systems from where data is retrieved. Used to store enterprise data from variety of sources, organized to provide useful guidance in to one common data base. \nINSTO contain historical information that, with the help of reporting tools, enables analysis of business data over the time.",
    "lifecycle": {
      "asString": "endOfLife",
      "phases": [
        {
          "phase": "active",
          "startDate": "2020-02-18",
          "milestoneId": null
        },
        {
          "phase": "endOfLife",
          "startDate": "2023-02-22",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": [
      {
        "id": "c1100a93-d43b-4b3a-838f-515da2f8f051",
        "displayName": "Common Data Warehouse / INSTO 2.0",
        "description": "INSTO is a collection of data from a variety of sources received from the Scania Data Lake, organized to provide guidance, intended for follow-up and analysis by different business areas within Scania. That's INSTO and that's a part of driving the shift towards our digitalization journey.\n​​​​​​​\n​​​​​​​By Self-service BI, users can create their own BI-reports in a very easy way.\n\nAll data in INSTO is mirrored and NOT source data. Therefore, there is no service to integrate to INSTO as a system. It is NOT a source system.",
        "type": "Application",
        "tags": [
          "PII",
          "R&D",
          "Significant",
          "Application mapped to level 1 Business Capability, please map to lowest level, i.e. level 3 instead!",
          "Maturity Level 2"
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
      "id": "857104c3-1614-457d-b20c-f7e6939026c9",
      "displayName": "SAS Industrial Project - China / China RnD PrIT / OAS for China",
      "fullName": "OAS for China",
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
          "displayName": "Hans Sjöholm",
          "email": "hans.sjoholm@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Stefan Weidensjö",
          "email": "stefan.weidensjo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Henrik Skoog",
          "email": "henrik.skoog@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Magnus Eriksson",
          "email": "magnus.z.eriksson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Marcus Gustafsson",
          "email": "marcus_x.gustafsson@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Joanna Pochec",
          "email": "joanna.pochec@scania.com",
          "type": "OBSERVER"
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
      "businessCriticality": null,
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
      }
    ],
    "organisations": [
      {
        "id": "3487365e-360d-4957-82fd-11b4103a9446",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAB - Data Warehouse & Data Lake",
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
        "id": "279cc393-6751-4fd4-ade8-0487add68d83",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAF - Sales and Services Business Intelligence",
        "usageType": null,
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
        "id": "a5789097-b595-4763-a3cf-27af64ac30c2",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EY - Vehicle Definition and Product Quality / EYM - Product Description Development / EYMP - Process, Methods and IT tools / EYMPL - Legal",
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
    "interfaceConsume": [
      {
        "id": "acc19a6e-109c-42c6-86b5-e067f9076ae7",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_CHORDER_VIEW_DEL",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "cc8318b7-7624-4aef-853b-e816abd232d0",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_CHORDER_VIEW_INS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "596a308c-4113-416c-88f8-94a5274f65c8",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_COEXC_VIEW",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "4aaf3d26-175f-4d69-85be-d8b50fbecee0",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_DEMAND_DEL",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "c1473d43-1a39-49fb-9994-8f191937f6f4",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_DEMAND_INS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "eff57ca6-78ce-4b4c-9c76-7eaab6642ba4",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_PARTPRU_DEL",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0616b9e7-4fa9-4426-bf23-de775b5150a5",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_PARTPRU_INS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "49cd42e4-ac79-4583-bc21-dc24692d3ceb",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_PLANNING_AREA_DEL",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "bbcea444-6e7f-447b-a8ba-9db8c515916b",
        "description": null,
        "displayName": "MONA Systems / Mona Assembly (MA) 2023-2_INSTO_PLANNING_AREA_INS",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "18aeef09-30e6-4501-8121-296f596428c2",
        "description": null,
        "displayName": "Scania Lexicon_Scania Lexicon_Term number",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": null
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": "NotOK",
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