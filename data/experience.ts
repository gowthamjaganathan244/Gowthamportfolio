export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  type: "full-time" | "contract" | "internship" | "part-time" | "Part-Time / Retail Operations";
  period: string;
  summary: string;
  highlights: string[];
  tools: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Endeavour Group",
    role: "Team Member, Retail Operations and Data Insights",
    location: "Canberra, Australia",
    type: "Part-Time / Retail Operations",
    period: "Nov 2023 - Present",
    summary: "Supporting retail operations, data-informed service continuity, POS issue resolution, and online order workflows in a fast-paced customer environment.",
    highlights: [
      "Resolve POS and order issues across high-volume in-store and online transaction workflows.",
      "Analyse sales patterns and seasonal demand trends using Tableau dashboards to support daily operations and service continuity.",
      "Manage Uber Direct and Jimmy Brings delivery workflows with issue resolution and customer support."
    ],
    tools: ["Tableau", "POS Systems", "Online Orders", "Uber Direct", "Jimmy Brings", "Customer Support"],
    technologies: ["Tableau", "POS Systems", "Online Orders", "Uber Direct", "Jimmy Brings", "Customer Support"]
  },
  {
    id: "exp-2",
    company: "Bluebird Advisory",
    role: "Capstone Project Developer",
    period: "Feb 2025 - May 2025",
    type: "contract",
    location: "Canberra, Australia",
    summary: "Delivered a Microsoft-integrated desk booking application for internal staff management.",
    highlights: [
      "Built a React desk booking application with Microsoft 365 and Azure AD SSO.",
      "Automated bookings, reporting, and data capture using Power Automate and SharePoint.",
      "Implemented validation and conflict handling to prevent duplicate bookings."
    ],
    tools: ["React", "Vite", "Azure AD", "Microsoft 365", "Power Automate", "SharePoint", "Git", "Confluence"],
    technologies: ["React", "Vite", "Azure AD", "Microsoft 365", "Power Automate", "SharePoint", "Git", "Confluence"]
  },
  {
    id: "exp-3",
    company: "Canberra Cyber Hub @ Innovation Central Canberra",
    role: "Student Intern",
    location: "Canberra, Australia",
    type: "internship",
    period: "Dec 2024 – Feb 2025",
    summary: "Streamlined cyber business data collection and capability mapping through CRM automation.",
    highlights: [
      "Designed structured forms and CRM workflows for capability data capture.",
      "Built taxonomy and reporting dashboards to improve data visibility.",
      "Standardised field mappings to reduce manual errors."
    ],
    tools: ["Microsoft Forms", "HubSpot CRM", "Drupal", "Power BI", "Power Automate"],
    technologies: ["Microsoft Forms", "HubSpot CRM", "Drupal", "Power BI", "Power Automate"]
  },
  {
    id: "exp-4",
    company: "eShipz",
    role: "Software Engineer Intern",
    location: "Remote",
    type: "internship",
    period: "Dec 2020 - Dec 2021",
    summary: "Worked on backend microservices, REST APIs, and core platform migrations.",
    highlights: [
      "Built backend services in Python Flask and MongoDB.",
      "Migrated Python 2 services to Python 3.",
      "Supported API reliability testing with Locust."
    ],
    tools: ["Python", "Flask", "MongoDB", "REST APIs", "Locust"],
    technologies: ["Python", "Flask", "MongoDB", "REST APIs", "Locust"]
  },
  {
    id: "exp-5",
    company: "Gewissen Digital Services",
    role: "Frontend Developer Intern",
    location: "India",
    type: "internship",
    period: "Feb 2020 - Nov 2020",
    summary: "Developed responsive websites and interactive UI components.",
    highlights: [
      "Built responsive websites using HTML, CSS, Bootstrap, and JavaScript.",
      "Improved usability, accessibility, and frontend performance."
    ],
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "Git"],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Git"]
  },
  {
    id: "exp-6",
    company: "MobiPhoenix Systems",
    role: "iOS Developer Intern",
    location: "India",
    type: "internship",
    period: "Dec 2018 - Feb 2019",
    summary: "Designed and built native iOS applications using Swift.",
    highlights: [
      "Built a Swift and Xcode iOS newsreader app using REST APIs.",
      "Tested across iOS versions and improved UI consistency."
    ],
    tools: ["Swift", "Xcode", "REST APIs", "iOS"],
    technologies: ["Swift", "Xcode", "REST APIs", "iOS"]
  }
];
