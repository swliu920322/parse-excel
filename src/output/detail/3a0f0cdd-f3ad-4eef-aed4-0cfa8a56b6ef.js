export default {
  "completion": {
    "percentage": 39,
    "ChinaReadiness": 0,
    "EnterpriseGuardrails": 50,
    "businessSupport": 45,
    "dataManagement": 25,
    "dependencies": 0,
    "information": 88,
    "projects": 100,
    "robots": 0,
    "sourcing": 45
  },
  "subscriptions": [
    {
      "firstName": "Peter",
      "lastName": "Normark",
      "displayName": "Peter Normark",
      "email": "peter.normark@scania.com",
      "type": "OBSERVER",
      "role": [
        "Creator"
      ]
    },
    {
      "firstName": "Camilla",
      "lastName": "Pettersson",
      "displayName": "Camilla Pettersson",
      "email": "camilla.pettersson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Prasanna",
      "lastName": "Thirugnanasambantham",
      "displayName": "Prasanna Thirugnanasambantham",
      "email": "prasanna.thirugnanasambantham@scania.com",
      "type": "OBSERVER",
      "role": []
    },
    {
      "firstName": "Anna",
      "lastName": "Grohman",
      "displayName": "Anna Grohman",
      "email": "anna.grohman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Jonas",
      "lastName": "Sandh",
      "displayName": "Jonas Sandh",
      "email": "jonas.sandh@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Ida",
      "lastName": "Holwaster",
      "displayName": "Ida Holwaster",
      "email": "ida.holwaster@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    }
  ],
  "information": {
    "name": "SGWS Mid-term  (in Cloud)",
    "description": "SGWS has Web-services enabling communication between Distributors DMS and SWAT.\nSGWS also has a translation functionality of Warranty Codes used between DMS and SWAT. Not yet  developed in Cloud solution.",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-10-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-07-01",
          "milestoneId": null
        },
        {
          "phase": "phaseOut",
          "startDate": "2025-12-31",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "9af71f1d-00fe-458b-bcd5-f6307b8cf4fc",
        "displayName": "SGWS (on Prem)",
        "description": "SGWS has Web-services enabling communication between Distributors DMS and SWAT.\nSGWS also has a translation functionality of Warranty Codes used between DMS and SWAT.",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
        "subscriptions": []
      }
    ],
    "successor": [
      {
        "id": "a350d653-0133-4d2d-b498-0520edf5431b",
        "displayName": "SWAT / ACL-NiFi / New Warranty Solution (Queri project)",
        "description": "New Warranty Solution (preliminary name) is the new warranty and claims management solution that will replace e.g. SWAT and SGWS.",
        "type": "Application",
        "tags": [
          "China affected",
          "Maturity Level 1",
          "Target State Commercial"
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
      "id": "11b4c540-9cf1-4328-97ca-60b2450fa959",
      "displayName": "Queri",
      "fullName": "Queri",
      "tags": [
        "Maturity Level 2"
      ],
      "lifecycle": {
        "asString": "active",
        "phases": [
          {
            "phase": "plan",
            "startDate": "2020-01-01"
          },
          {
            "phase": "phaseIn",
            "startDate": "2020-09-01"
          },
          {
            "phase": "active",
            "startDate": "2020-09-01"
          }
        ]
      },
      "subscriptions": [
        {
          "displayName": "Anna Grohman",
          "email": "anna.grohman@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Camilla Pettersson",
          "email": "camilla.pettersson@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Peter Normark",
          "email": "peter.normark@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Prasanna Thirugnanasambantham",
          "email": "prasanna.thirugnanasambantham@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "Ida Holwaster",
          "email": "ida.holwaster@scania.com",
          "type": "RESPONSIBLE"
        }
      ]
    }
  ],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": null,
      "functionalSuitability": null,
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramReview",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2020-05-13",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2023-05-13",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "8d315a27-2134-4ae4-8960-83f4b6b223ed",
        "displayName": "L. Provide Customer Experience, Services and Continuous Optimization / Solution Quality and Warranty Management / Warranty & Claims Management",
        "description": "Handle claims and warranties throughout delivered products lifecycle",
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
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "c82df0ce-ddb0-4334-8c96-0a2b73a24206",
        "displayName": "Services delivery / Claim process (Warranty & Contract)",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "649c60cb-4b07-4712-8003-20df73f63dc8",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IA - Sales & Services IT / IAC - Contracted Services & Warranty / IACA - Warranty",
        "usageType": null,
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-01-02"
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
        "id": "7421372f-5687-4201-9e36-048aae860df8",
        "description": null,
        "displayName": "SWAT_SGWS_Prod IE v1",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-03-31"
            }
          ]
        },
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "19089b49-3d96-4d64-9c57-d7aedc8fc47d",
        "description": "Transfers attachments sent from DMS:es and CLAW to SWAT.",
        "displayName": "SGWS Mid-term  (in Cloud)_ClaimAttachment 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "9f832392-b63f-42cc-9163-a32d446a2e6d",
        "description": "Provides information about Factory and Local Warranty periods as well as open Campaigns and active EPC Contracts.",
        "displayName": "SGWS Mid-term  (in Cloud)_ConfirmWarrantyApply 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "0c84cb4e-c3a7-4316-9a8b-373594c5f901",
        "description": "Provides the content of a Campaign.",
        "displayName": "SGWS Mid-term  (in Cloud)_GetCampInfo 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "10e07362-06b4-490d-bd94-b0cdc72b8f6e",
        "description": "Provides information about Local Warranties stored in SWAT.",
        "displayName": "SGWS Mid-term  (in Cloud)_GetWarrantyAgreements 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "581e91cd-5839-4af5-8e6d-645e3ce2ec27",
        "description": "Provides information if a Spare Part should be sent to Distributor or to Material Inspection at Scania Factory.",
        "displayName": "SGWS Mid-term  (in Cloud)_IdentifyPartsRequest 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "74dc15f8-488f-493f-ba07-5e5940dd8c97",
        "description": "Provides information about possible EPS coverage for a Damage Causing Part.",
        "displayName": "SGWS Mid-term  (in Cloud)_PartsCoveredByEPS 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "41e0e844-04a6-487d-af27-8e0bff7958a3",
        "description": "Interface used to send a Local claim or a Factory Warranty claim to SWAT.",
        "displayName": "SGWS Mid-term  (in Cloud)_SubmitClaimStructure 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "8b93c0b2-dde8-4b74-90d7-ca5e0b785f18",
        "description": "Interface used to add a vehicle to a Local Warranty Agreement in SWAT.",
        "displayName": "SGWS Mid-term  (in Cloud)_UpdateLocalWarranty 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "937da8e2-5307-4deb-847c-d1526f6b20c6",
        "description": "Interface used to update Local Warranty Agreements in SWAT.",
        "displayName": "SGWS Mid-term  (in Cloud)_UpdateWarrantyAgreements 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "60a9254a-d803-443f-a141-dce2ace81a09",
        "description": "Provides information about Claim Status changes in SWAT.",
        "displayName": "SGWS Mid-term  (in Cloud)_ViewClaimStatus 5.0",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "f2bf428f-0ccf-4cc0-a13a-6a04e99fe022",
        "description": "Provides information about already performed warranty repairs stored in SWAT.",
        "displayName": "SGWS Mid-term  (in Cloud)_WarrantyrepairHistory 5.0",
        "lifecycle": null,
        "tags": []
      }
    ]
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
    "ChinaSourcing": "",
    "ChinaPaying": "",
    "ChinaImplementation": "",
    "Chinaverification": "",
    "ChinaOperations": ""
  }
}