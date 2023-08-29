export default {
  "completion": {
    "percentage": 19,
    "ChinaReadiness": 36,
    "EnterpriseGuardrails": 0,
    "businessSupport": 35,
    "dataManagement": 0,
    "dependencies": 50,
    "information": 33,
    "projects": 0,
    "robots": 0,
    "sourcing": 13
  },
  "subscriptions": [
    {
      "firstName": "Samira",
      "lastName": "Ishak Johansson",
      "displayName": "Samira Ishak Johansson",
      "email": "samira.ishak.johansson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    }
  ],
  "information": {
    "name": "Follow UpTool SAS (China)",
    "description": "Follow Up Tool SAS is a separate SAS version of PFT that will be used in China. Will use OAS master tag to filter out objects that are OK for china and make them visible in PFT SAS",
    "lifecycle": {
      "asString": "plan",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2023-02-01",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [],
    "successor": []
  },
  "dependencies": {
    "parent": [
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
    ],
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
        "id": "9c94b7da-8c99-4dbc-8512-184a11d58173",
        "displayName": "Product development / Product Development - Green Arrow",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "b2f13501-06c1-4d0f-b1e4-06f464e8801f",
        "displayName": "Product development / R&D Process / R&D Methods / Product Data Management (PDM)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
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
        "id": "9b17a075-e177-4d25-ac06-246a9138fbdc",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EM - Modular Solutions / EMT - TMS Management / EMTD - Product Description and Geometry Assurance / EMTDB - Product Description Bus and Weight calculation",
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
    "ChinaSourcing": "YMPI",
    "ChinaPaying": "YMPI",
    "ChinaImplementation": "IXAA",
    "Chinaverification": "IXAA",
    "ChinaOperations": "IXAA"
  }
}