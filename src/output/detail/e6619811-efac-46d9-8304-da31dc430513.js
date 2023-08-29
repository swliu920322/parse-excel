export default {
  "completion": {
    "percentage": 65,
    "ChinaReadiness": 8,
    "EnterpriseGuardrails": 100,
    "businessSupport": 72,
    "dataManagement": 75,
    "dependencies": 100,
    "information": 58,
    "projects": 0,
    "robots": 100,
    "sourcing": 73
  },
  "subscriptions": [
    {
      "firstName": "Nicklas",
      "lastName": "Eriksson",
      "displayName": "Nicklas Eriksson",
      "email": "nicklas.eriksson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Örjan",
      "lastName": "Pålsson",
      "displayName": "Örjan Pålsson",
      "email": "orjan.palsson@scania.com",
      "type": "OBSERVER",
      "role": [
        "Architect"
      ]
    },
    {
      "firstName": "Eduardo",
      "lastName": "Abrigo",
      "displayName": "Eduardo Abrigo",
      "email": "eduardo.abrigo@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Stefan",
      "lastName": "Finnsjö",
      "displayName": "Stefan Finnsjö",
      "email": "stefan.finnsjo@scania.com",
      "type": "OBSERVER",
      "role": [
        "Expert User"
      ]
    },
    {
      "firstName": "Gustav",
      "lastName": "Dahlman",
      "displayName": "Gustav Dahlman",
      "email": "gustav.dahlman@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Johan",
      "lastName": "Resare",
      "displayName": "Johan Resare",
      "email": "johan.resare@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Peter",
      "lastName": "Björk",
      "displayName": "Peter Björk",
      "email": "peter.x.bjork@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Information Owner"
      ]
    },
    {
      "firstName": "Sara",
      "lastName": "Gotthardsson",
      "displayName": "Sara Gotthardsson",
      "email": "sara.gotthardsson@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible"
      ]
    },
    {
      "firstName": "Johan",
      "lastName": "Marks",
      "displayName": "Johan Marks",
      "email": "johan.marks@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "Product Owner"
      ]
    },
    {
      "firstName": "Enno",
      "lastName": "Grüning",
      "displayName": "Enno Grüning",
      "email": "enno.gruning@scania.com",
      "type": "OBSERVER",
      "role": []
    }
  ],
  "information": {
    "name": "My Scania",
    "description": "What is My Scania: \n\n- My Scania is a set of capabilities that aims to make a broad set of digital services accessible for Scania customers. In a seamless user experience we want to support Scanias customers through digital channels in any kind of activitiy/business related to Scania whether it is an upcoming purchase, currently produced equipment or currently operated equipment and fleet.\n\n- My Scania is a Main entrance (Note! but not the only entrance) enabling Scania's customers to detect and navigate/browse to Stand alone applications (Note! Stand alone because they are developed hosted and maintained as separate services by different organizations and teams) onboarded/linked to the My Scania Eco system. \n\n- A set of web applications that allows end users to handle generic user or company settings. Such as applications for service detection (My Scania Startpage), Generic Fleet management settings (Administration), and User Preferences (My Account). NOTE! This does not include all services that are reachable from My Scania. \n\n- A set of capabilities delivered as blueprints or APIs that enable development teams to enroll their application to become a part of the My Scania eco system and the seamless user experience. Such as a Template application with basic scaffolding a layout to let development teams get up to speed with delivering content. \n\n- A set of visual components that enables other development teams that want their application to be a part of the ecosystem and the seamless user experience to more quickly have their application aligned with the Scania Design system, Tegel and the My Scania design and navigation. Such as components for main header and navigation.\n",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "phaseIn",
          "startDate": "2021-10-18",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2021-10-18",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "4156427c-e7f6-422c-9905-6aa4c11d1309",
        "displayName": "FMP",
        "description": "Fleet Management Portal, system to track and distribute data to/from the trucks. Help customers with reduced fuel consumption, remote driver-coaching and better uptime.",
        "type": "Application",
        "tags": [
          "Maturity Level 1"
        ],
        "subscriptions": []
      }
    ],
    "successor": []
  },
  "dependencies": {
    "parent": [],
    "children": [
      {
        "id": "9c243e54-3bf7-43da-abf1-6f71d59ebd9e",
        "activeFrom": null,
        "activeUntil": null,
        "description": "Fleet Position supports the transport manager with vehicle related information (position, speed, odometer etc etc) during daily operations in real time as well as historic data.",
        "displayName": "My Scania / Fleet Position",
        "type": "Application",
        "lifecycle": {
          "asString": "drpCompleted",
          "phases": [
            {
              "phase": "drpCompleted",
              "startDate": "2022-10-17"
            },
            {
              "phase": "drpReview",
              "startDate": "2023-10-17"
            }
          ]
        },
        "tags": [
          "Maturity Level 2",
          "App in My Scania"
        ],
        "subscriptions": []
      },
      {
        "id": "3a4a0be0-d532-4e60-9fc7-9af3e04a8aa7",
        "activeFrom": "2021-10-18",
        "activeUntil": null,
        "description": "A part of My Scania, Vehicle Performance provides fleet owners with operational data regarding their vehicles.",
        "displayName": "My Scania / Monitoring Report",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "App in My Scania"
        ],
        "subscriptions": []
      },
      {
        "id": "4e064fd0-cdfb-4289-8eee-4cad8682d804",
        "activeFrom": "2021-10-18",
        "activeUntil": null,
        "description": "A part of My Scania, Vehicle Performance provides fleet owners with operational data regarding their vehicles.",
        "displayName": "My Scania / Vehicle Performance",
        "type": "Application",
        "lifecycle": null,
        "tags": [
          "Maturity Level 2",
          "App in My Scania"
        ],
        "subscriptions": []
      }
    ]
  },
  "initiatives": [],
  "businessSupport": {
    "functionFit": {
      "businessCriticality": "missionCritical",
      "functionalSuitability": "appropriate",
      "iramNecessary": "yes",
      "lifecycle": [
        {
          "asString": "iramCompleted",
          "phases": [
            {
              "phase": "iramCompleted",
              "startDate": "2021-11-30",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2024-11-30",
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
        "id": "60bf1da7-28e3-4e1d-8a9f-4e32b753c918",
        "displayName": "Services delivery",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      }
    ],
    "organisations": [
      {
        "id": "622ae083-a8b9-47c5-b7a7-64d26ea14e3e",
        "displayName": "Customers",
        "usageType": "user",
        "description": "This Organisation Fact sheet represents stakeholders within end customers. End customers are such that use or consume Scania products & services, e.g. freight carriers or bus & coach operators.",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Admin created"
        ]
      },
      {
        "id": "817f3058-b23f-4438-bdb1-ca405a83c16d",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KY - Service Portfolio & Delivery / KYS - Services",
        "usageType": "owner",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-18"
            }
          ]
        },
        "subscriptions": [],
        "tags": [
          "From IGA"
        ]
      },
      {
        "id": "a7eda40d-8465-49d2-baee-a427f962f5cf",
        "displayName": "Scania - Scania CV AB / P_SM - Sales & Marketing / KY - Service Portfolio & Delivery / KYT - Customer Digitalisation",
        "usageType": "ITmaintenance",
        "description": null,
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2020-09-18"
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
        "id": "d13d4dfe-a781-49a2-838d-2a6c356f906b",
        "description": null,
        "displayName": "Friendly Captcha cryptographic puzzle",
        "lifecycle": null,
        "tags": []
      },
      {
        "id": "e8d6e4ce-a37e-4384-80d7-1d213fb75b10",
        "description": null,
        "displayName": "Mopinion Enterprise Service Elite_MopinionJavaScripttag",
        "lifecycle": null,
        "tags": []
      }
    ],
    "interfaceProvide": [
      {
        "id": "d0b7d354-9416-4d04-8e13-2a414ba82756",
        "description": null,
        "displayName": "My Scania_Application launcher",
        "lifecycle": null,
        "tags": []
      }
    ]
  },
  "tech": {
    "itComponents": {
      "software": [
        {
          "id": "3242c766-4e9c-48ea-a5c5-51d59fc443f6",
          "displayName": "Scania / Scania IT Tegel Design System",
          "category": "software",
          "description": "The Tegel Design System is for digital products and services at Scania. It enables an efficient development process and ensures a premium experience across all of Scania's digital touchpoints.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-12-20"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "service": [
        {
          "id": "829b9251-6b70-4403-86df-01b4d2de6fbd",
          "displayName": "Amazon Web Services AWS - Ireland",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "b3d29d5c-012e-41cf-9999-e22c5e60451c",
          "displayName": "Federation Gateway",
          "category": "service",
          "description": null,
          "type": "ITComponent",
          "lifecycle": null,
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "400256c8-5807-4dc0-b6dc-98f3c8bc8700",
          "displayName": "Friendly Captcha GmbH Friendly Captcha",
          "category": "service",
          "description": "Friendly Captcha securely defend websites and online services from spam and bots without tracking your users and exploiting personal data.\nhttps://friendlycaptcha.com/",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "plan",
                "startDate": "2023-03-24"
              },
              {
                "phase": "phaseIn",
                "startDate": "2023-03-28"
              },
              {
                "phase": "active",
                "startDate": "2023-04-02"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "accessControl": [
        {
          "id": "e7fa910b-18b6-4ac4-860a-e24047f23ccd",
          "displayName": "RM Portal",
          "category": "Access_Control_Item",
          "description": "The Resource Manager Portal (RMP) was developed for handling authentication and authorization between Microservices using JSON Web Token (JWT).\n\nIn the beginning all Microservices were hosted On-Premise using Windows Authentication to authenticate each other’s calls. Windows Authentication is not a feasible solution when some Microservices were moved outside the Scania AD to some cloud. Instead of Windows Authentication Microservices can now use JWT based tokens called Service-to-Service token (S2S-token).\n\nThe target of deployment of these Microservices is not tied to any particular provider but can be a mixture of Azure, AWS and On-Premise among others. As long as all Microservices in a call stack can connect to each other the Service-to-Service (S2S) tokens can be used.\n\nYou use the RMP for telling which resources (REST endpoints) can be consumed by which applications (Clients). A team owning resources has full control of which applications have been granted access to its resources.\n\nSimply put there are three steps for start using S2S-tokens:\n- Use RMP to manage permissions for the S2S-tokens.\n- Create a S2S-token using the FMP Auth Service.\n- Send the S2S-token in each call to a resource. By checking the token the resource knows whether this call should be allowed or not.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-01-01"
              },
              {
                "phase": "phaseOut",
                "startDate": "2023-12-31"
              },
              {
                "phase": "endOfLife",
                "startDate": "2023-12-31"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ]
    },
    "ssoProvider": "Scania ID/Federation Gateway External",
    "statusSSO": "supported"
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