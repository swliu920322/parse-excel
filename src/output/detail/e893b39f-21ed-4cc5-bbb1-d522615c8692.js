export default {
  "completion": {
    "percentage": 19,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 0,
    "businessSupport": 18,
    "dataManagement": 0,
    "dependencies": 0,
    "information": 42,
    "projects": 100,
    "robots": 0,
    "sourcing": 7
  },
  "subscriptions": [
    {
      "firstName": null,
      "lastName": null,
      "displayName": "asa.hakansson@scania.com",
      "email": "asa.hakansson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": null,
      "lastName": null,
      "displayName": "claes.back.ahlstrom@scania.com",
      "email": "claes.back.ahlstrom@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Thomas",
      "lastName": "Lindberg",
      "displayName": "Thomas Lindberg",
      "email": "thomas.x.lindberg@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Carl-Johan",
      "lastName": "Sveningsson",
      "displayName": "Carl-Johan Sveningsson",
      "email": "carl-johan.sveningsson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Dennis",
      "lastName": "Millard",
      "displayName": "Dennis Millard",
      "email": "dennis.millard@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    }
  ],
  "information": {
    "name": "ScommService",
    "description": "ScommService is a remote diagnostic service built on top of SCOMM.\nScommService has three main uses:\n• Creating CAN requests from RDP packages.\n• Creating demofile/snapshot from CAN request responses.\n• Decode demofile/snapshot to xml in DDIM or extended RDP format. \n",
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
    "parent": [],
    "children": []
  },
  "initiatives": [
    {
      "id": "5f428655-93d6-465c-887a-90eeb6aa45ef",
      "displayName": "UNECE / Software Update Management System (SUMS)",
      "fullName": "Software Update Management System (SUMS)",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Eder Silva",
          "email": "Eder.Silva@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Torgrim Oldenburg",
          "email": "torgrim.oldenburg@scania.com",
          "type": "OBSERVER"
        },
        {
          "displayName": "Charlotte Jalkebo",
          "email": "Charlotte.Jalkebo@scania.com",
          "type": "RESPONSIBLE"
        },
        {
          "displayName": "David Grandell",
          "email": "David.Grandell@scania.com",
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
        null,
        null
      ]
    },
    "capabilities": [],
    "processes": [],
    "organisations": [
      {
        "id": "12b0cd93-1373-4950-9845-cf4d3e460e8a",
        "displayName": "Scania - Scania CV AB / P_RDP - R&D and Purchasing / EE - EE Software and Autonomous / EEC - Connected Systems / EECD - Diagnostics / EECDD - Connected Diagnostics",
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
    "ChinaITlegalCompliance": "SQCcompleted",
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