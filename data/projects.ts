export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  outcome?: string;
  category: 'cloud' | 'automation' | 'fullstack' | 'backend' | 'iot' | 'embedded' | 'mobile' | 'frontend';
  categoryLabel: string;
  status: 'completed' | 'live' | 'functional-core';
  statusLabel: string;
  badge?: string;
  tags: string[];
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'secure-vault',
    title: 'SecureVault — AWS Serverless Secure File Vault',
    shortDescription: 'Secure serverless file vault using Cognito, API Gateway, Lambda, DynamoDB, private S3, presigned URLs, and role-based access control.',
    description: 'Secure serverless file vault using Cognito, API Gateway, Lambda, DynamoDB, private S3, presigned URLs, IAM, role-based access control, and audit logging.',
    outcome: 'Demonstrates secure serverless file management with controlled upload/download, private S3 access through presigned URLs, role-based access, auditor download restriction, and audit logging.',
    category: 'cloud',
    categoryLabel: 'Cloud',
    status: 'functional-core',
    statusLabel: 'Functional Core Built',
    badge: 'Cloud Security Build',
    tags: ['AWS Serverless', 'Cognito', 'API Gateway', 'Lambda', 'DynamoDB', 'S3', 'IAM', 'Audit Logs'],
    tools: ['AWS', 'Next.js', 'Node.js', 'TypeScript'],
    githubUrl: 'https://github.com/gowthamjaganathan244/Secure-Vault',
    gradient: 'from-aurora-cyan via-aurora-violet to-aurora-teal'
  },
  {
    id: 'bluebird-booking',
    title: 'Bluebird Smart Desk Booking System',
    shortDescription: 'Microsoft-integrated desk booking application built with React, Azure AD SSO, Microsoft 365, Power Automate, and SharePoint.',
    description: 'Microsoft-integrated desk booking application built with React, Azure AD SSO, Microsoft 365, Power Automate, SharePoint, Microsoft Teams, Outlook workflows, validation logic, analytics, and stakeholder delivery.',
    outcome: 'Achieved 100% login success during UAT and 95% UAT satisfaction.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    status: 'completed',
    statusLabel: 'Completed',
    tags: ['React', 'Azure AD', 'Microsoft 365', 'Power Automate', 'SharePoint', 'Microsoft Graph', 'Teams'],
    tools: ['React', 'M365', 'Power Platform', 'SharePoint'],
    gradient: 'from-aurora-teal to-aurora-cyan'
  },
  {
    id: 'cyber-hub-mapping',
    title: 'Canberra Cyber Hub Capability-Mapping Automation',
    shortDescription: 'Structured survey and CRM workflow automation using Microsoft Forms, HubSpot CRM, Drupal, and Power Automate.',
    description: 'Structured survey and CRM workflow automation using Microsoft Forms, HubSpot CRM, Drupal, Power Automate, and reporting dashboards to improve data consistency and capability tracking.',
    outcome: 'Improved structured capability data capture and reduced manual field-mapping inconsistency.',
    category: 'automation',
    categoryLabel: 'Automation',
    status: 'completed',
    statusLabel: 'Completed',
    tags: ['Microsoft Forms', 'Power Automate', 'HubSpot CRM', 'Drupal', 'Power BI'],
    tools: ['Power Automate', 'HubSpot', 'Drupal', 'Power BI'],
    gradient: 'from-aurora-violet to-aurora-indigo'
  },
  {
    id: 'eshipz-api',
    title: 'eShipz API Migration and Backend Reliability',
    shortDescription: 'Backend internship work involving Python Flask, MongoDB, REST APIs, and Locust reliability testing.',
    description: 'Backend internship work involving Python Flask, MongoDB, REST APIs, Python 2 to Python 3 migration, partner integrations, and Locust API reliability testing.',
    outcome: 'Supported backend migration, API reliability testing, and partner integration workflows.',
    category: 'backend',
    categoryLabel: 'Backend',
    status: 'completed',
    statusLabel: 'Completed',
    tags: ['Python', 'Flask', 'MongoDB', 'REST APIs', 'Locust'],
    tools: ['Python', 'Flask', 'MongoDB', 'Locust'],
    gradient: 'from-aurora-indigo to-aurora-violet'
  }
];

export const beProjects: Project[] = [
  {
    id: 'iot-home',
    title: 'IoT Home Automation & Energy Tracking',
    shortDescription: 'Voice-controlled home automation system using ESP8266 NodeMCU and MQTT.',
    description: 'Voice-controlled home automation system using ESP8266 NodeMCU, IFTTT, MQTT, and INA219 sensors for appliance control and energy tracking.',
    category: 'iot',
    categoryLabel: 'B.E. IoT Project',
    status: 'completed',
    statusLabel: 'B.E. Project',
    tags: ['ESP8266', 'MQTT', 'IFTTT', 'INA219', 'Firebase'],
    tools: ['ESP8266', 'MQTT', 'C++'],
    gradient: 'from-white/10 to-white/5'
  },
  {
    id: 'accident-alert',
    title: 'Automated Accident Alert System',
    shortDescription: 'Crash-detection prototype using ESP8266 NodeMCU, accelerometer, and GPS.',
    description: 'Crash-detection prototype using ESP8266 NodeMCU, accelerometer, GPS, and GSM modules to detect impact and send location-based alerts.',
    category: 'embedded',
    categoryLabel: 'B.E. Embedded Project',
    status: 'completed',
    statusLabel: 'B.E. Project',
    tags: ['ESP8266', 'GPS', 'GSM', 'Accelerometer', 'Embedded Systems'],
    tools: ['Arduino', 'C++', 'GPS/GSM'],
    gradient: 'from-white/10 to-white/5'
  },
  {
    id: 'newsreader-app',
    title: 'iOS Newsreader App',
    shortDescription: 'Swift/Xcode newsreader app consuming public APIs with offline caching.',
    description: 'Swift/Xcode newsreader app consuming public APIs with offline caching, pull-to-refresh support, and Apple design guideline alignment.',
    category: 'mobile',
    categoryLabel: 'B.E. Mobile Project',
    status: 'completed',
    statusLabel: 'B.E. Project',
    tags: ['Swift', 'Xcode', 'REST APIs', 'iOS', 'UIKit'],
    tools: ['Swift', 'Xcode'],
    gradient: 'from-white/10 to-white/5'
  },
  {
    id: 'early-frontend',
    title: 'Earlier Frontend Websites',
    shortDescription: 'Collection of responsive web interfaces and interactive components.',
    description: 'Responsive frontend websites built during early development work using HTML, CSS, Bootstrap, JavaScript, and cross-browser design practices.',
    category: 'frontend',
    categoryLabel: 'Frontend Foundations',
    status: 'completed',
    statusLabel: 'Earlier Build',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Responsive Design'],
    tools: ['HTML', 'CSS', 'JS'],
    gradient: 'from-white/10 to-white/5'
  }
];
