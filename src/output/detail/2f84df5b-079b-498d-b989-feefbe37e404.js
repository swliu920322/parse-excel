export default {
  "completion": {
    "percentage": 86,
    "ChinaReadiness": 50,
    "EnterpriseGuardrails": 100,
    "businessSupport": 60,
    "dataManagement": 100,
    "dependencies": 100,
    "information": 96,
    "projects": 100,
    "robots": 100,
    "sourcing": 73
  },
  "subscriptions": [
    {
      "firstName": "Henrik",
      "lastName": "Brandin",
      "displayName": "Henrik Brandin",
      "email": "henrik.brandin@scania.com",
      "type": "RESPONSIBLE",
      "role": [
        "IT Delivery Responsible",
        "Product Owner"
      ]
    },
    {
      "firstName": "Neelabh",
      "lastName": "Sharma",
      "displayName": "Neelabh Sharma",
      "email": "neelabh.sharma@scania.com",
      "type": "RESPONSIBLE",
      "role": []
    }
  ],
  "information": {
    "name": "Datalake Cloud",
    "description": "Scania Datalake Cloud (in AWS)",
    "lifecycle": {
      "asString": "active",
      "phases": [
        {
          "phase": "plan",
          "startDate": "2022-04-01",
          "milestoneId": null
        },
        {
          "phase": "phaseIn",
          "startDate": "2023-01-01",
          "milestoneId": null
        },
        {
          "phase": "active",
          "startDate": "2023-04-03",
          "milestoneId": null
        }
      ]
    },
    "productCategory": "",
    "predecessor": [
      {
        "id": "67cecb2b-de66-405c-a53d-1bad8269ebb4",
        "displayName": "DataLake OnPrem",
        "description": "The Data Lake is a big data repository which holds data in its native format until it is needed. Data Lake is implemented in the Hadoop framework which also enables the processing needed for Advanced Analytics (e.g. machine learning).",
        "type": "Application",
        "tags": [
          "Not China affected",
          "Maturity Level 2"
        ],
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
      "id": "cb2c6520-bff2-43df-96fe-31e4ed99feb4",
      "displayName": "Cloud Journey",
      "fullName": "Cloud Journey",
      "tags": [
        "IMG Status Initiatives"
      ],
      "lifecycle": null,
      "subscriptions": []
    },
    {
      "id": "738dd546-dc86-4ef1-a14b-212ece2e3ced",
      "displayName": "COBAT",
      "fullName": "COBAT",
      "tags": [],
      "lifecycle": null,
      "subscriptions": []
    },
    {
      "id": "49ce5710-e51a-49b5-b920-156725f04219",
      "displayName": "Finance 2025",
      "fullName": "Finance 2025",
      "tags": [],
      "lifecycle": null,
      "subscriptions": [
        {
          "displayName": "Mattias Lindskog",
          "email": "mattias.lindskog@scania.com",
          "type": "RESPONSIBLE"
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
              "startDate": "2023-01-24",
              "milestoneId": null
            },
            {
              "phase": "iramReview",
              "startDate": "2026-01-24",
              "milestoneId": null
            }
          ]
        },
        null
      ]
    },
    "capabilities": [
      {
        "id": "3b9a097c-2b9e-42dc-b209-be3451ff85f8",
        "displayName": "P. Information Technology and Data Management / Information Management / Information Sharing",
        "description": "The ability to collect and secure that information is clearly defined and made searchable/available with relevant control of accessability and regulations. Ability to establish once and reuse multiple times.",
        "lifecycle": {
          "asString": "active",
          "phases": [
            {
              "phase": "active",
              "startDate": "2023-04-24"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "processes": [
      {
        "id": "971e5f01-30e0-40fa-a4a3-ee843df1119b",
        "displayName": "Corporate governance",
        "description": null,
        "lifecycle": {
          "asString": "phaseIn",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2021-10-01"
            },
            {
              "phase": "phaseIn",
              "startDate": "2022-03-31"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "64ba321b-b128-46f7-a803-96b2071e0303",
        "displayName": "Health Management",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "9bbd91f2-efac-42fd-ad23-05badc0e8bbf",
        "displayName": "Internal control System",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "ce41924b-2e77-4a67-b82e-32668035b5bb",
        "displayName": "Order to delivery",
        "description": "Owner: Martin Lyckström",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "d79c000a-ac1c-4e20-a350-618cf3740035",
        "displayName": "Outbound Process - General",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "3c9a0b44-190f-4180-8309-1fbd1a9833ba",
        "displayName": "Product development",
        "description": "Owner: Jan Palmér, chairman PD process board",
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "ff5948e6-aab8-4fbb-aa1f-c0181283cade",
        "displayName": "Service development",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": []
      },
      {
        "id": "60bf1da7-28e3-4e1d-8a9f-4e32b753c918",
        "displayName": "Services delivery",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Core process"
        ]
      },
      {
        "id": "29db9d40-50e3-4786-8696-a19d2c802491",
        "displayName": "Supporting processes",
        "description": null,
        "lifecycle": null,
        "subscriptions": [],
        "tags": [
          "Supporting process"
        ]
      },
      {
        "id": "6496e934-5a8d-4653-879b-87ef8928bf4c",
        "displayName": "Sustainable Transport Solution",
        "description": "In value: Solution need/opportunity.\nOut value:  Service End of Life.\n\nMore information: https://app.mural.co/t/scaniagroup8415/m/scaniagroup8415/1647494099303/0a5ea29f402de374b21187fd8d3f9ca33f8bd220?sender=ud957a3ccaab03e31bc340138",
        "lifecycle": {
          "asString": "plan",
          "phases": [
            {
              "phase": "plan",
              "startDate": "2022-06-30"
            }
          ]
        },
        "subscriptions": [],
        "tags": []
      }
    ],
    "organisations": [
      {
        "id": "1544a5df-a909-4c6b-bfda-17ad7332b66e",
        "displayName": "Scania - Scania CV AB",
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
      },
      {
        "id": "3487365e-360d-4957-82fd-11b4103a9446",
        "displayName": "Scania - Scania CV AB / I - Scania IT / IX - Shared Services / IXA - Information Services & Management / IXAB - Data Warehouse & Data Lake",
        "usageType": "owner",
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
    "objects": [
      {
        "id": "aeee53b2-f3c6-424e-a7b9-99cde245fed5",
        "description": "Specify each source system that creates and updates information for specific information domain's core information objects.",
        "displayName": "IT@Scania Domain / IT Business Application Entity / Information Source System",
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
    "interfaceConsume": [],
    "interfaceProvide": []
  },
  "tech": {
    "itComponents": {
      "software": [],
      "service": [
        {
          "id": "d2d7c316-d43b-42dc-b366-136ee04d8bb8",
          "displayName": "Amazon.com / AWS Amazon S3",
          "category": "service",
          "description": "Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2006-03-14"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "9d5b778c-5407-4806-83a3-b074bb22ce23",
          "displayName": "Amazon.com / AWS Athena",
          "category": "service",
          "description": "AWS Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and users pay only for the queries that they run.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-11-30"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "ef31847d-ebc3-4584-a317-9448ff164ffa",
          "displayName": "Amazon.com / AWS CloudWatch",
          "category": "service",
          "description": "Amazon CloudWatch is a monitoring and observability service that is designed for use by DevOps engineers, developers, site reliability engineers (SREs), and IT managers. It provides users with data and insights that can be used to monitor applications, respond to performance changes, optimize resource utilization, and gain a comprehensive view of the overall health of a system. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2009-05-18"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "a1846f00-ab93-4152-9307-6b87c196fece",
          "displayName": "Amazon.com / AWS Database Migration Service",
          "category": "service",
          "description": "AWS Database Migration Service helps migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate data to and from the most widely used commercial and open-source databases.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2016-03-15"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "aa788ca0-9992-4f0d-b5bf-829be093db57",
          "displayName": "Amazon.com / AWS Direct Connect",
          "category": "service",
          "description": "AWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from premises to AWS. AWS Direct Connect lets users establish a dedicated network connection between a network and one of the AWS Direct Connect locations.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2011-08-03"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "ab271965-2127-495e-af9d-5e5c0dfacdcd",
          "displayName": "Amazon.com / AWS EMR",
          "category": "service",
          "description": "Amazon EMR is the industry leading cloud-native big data platform for processing vast amounts of data quickly and cost-effectively at scale. EMR gives teams the flexibility to run use cases on single-purpose, short lived clusters that automatically scale to meet demand, or on long running highly available clusters using the new multi-master deployment mode. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2009-04-02"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "02f18003-be99-40dc-98e1-9e870115da9e",
          "displayName": "Amazon.com / AWS Glue",
          "category": "service",
          "description": "AWS Glue is a serverless data integration service that makes it easy to discover, prepare, and combine data for analytics, machine learning, and application development. AWS Glue provides all of the capabilities needed for data integration so that users can start analyzing their data and putting it to use in minutes instead of months.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2017-08-14"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "30d43f95-353f-46ad-b501-e3816fcc2ec5",
          "displayName": "Amazon.com / AWS Lake Formation",
          "category": "service",
          "description": "AWS Lake Formation is a service that makes it easy to set up a secure data lake in days. A data lake is a centralized, curated, and secured repository that stores all your data, both in its original form and prepared for analysis. A data lake enables you to break down data silos and combine different types of analytics to gain insights and guide better business decisions.",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2019-08-09"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "3ee0bd5c-ac2f-4b16-bd7a-b68e1b78ae70",
          "displayName": "Amazon.com / AWS Managed Workflows for Apache Airflow",
          "category": "service",
          "description": "Amazon Managed Workflows for Apache Airflow (MWAA) is a managed orchestration service for Apache Airflow that makes it easier to set up and operate end-to-end data pipelines in the cloud at scale. Apache Airflow is an open-source tool used to programmatically author, schedule, and monitor sequences of processes and tasks referred to as “workflows.” ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2020-11-24"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        },
        {
          "id": "d85f89cf-2179-4844-976d-05229afa35b6",
          "displayName": "Amazon.com / AWS Secrets Manager",
          "category": "service",
          "description": "AWS Secrets Manager is a secrets management service that helps users protect access to their applications, services, and IT resources. This service enables users to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. ",
          "type": "ITComponent",
          "lifecycle": {
            "asString": "active",
            "phases": [
              {
                "phase": "active",
                "startDate": "2018-04-04"
              }
            ]
          },
          "tags": [
            "China affected"
          ]
        }
      ],
      "accessControl": []
    },
    "ssoProvider": "",
    "statusSSO": "supported"
  },
  "chinaInfo": {
    "ChinaITlegalCompliance": null,
    "ExportControlOfAppl": null,
    "LicenseUsageRights": null,
    "LicenceStatus": null,
    "ChinaRequirements": "IXAB",
    "ChinaDesign": "IXAB",
    "ChinaSourcing": "TT",
    "ChinaPaying": "TT",
    "ChinaImplementation": "IXAB/TT",
    "Chinaverification": "TT",
    "ChinaOperations": "TT"
  }
}