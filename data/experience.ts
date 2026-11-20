export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship" | "capstone";
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
    role: "Team Member",
    location: "Canberra, Australia",
    type: "part-time",
    period: "Nov 2023 – Present",
    summary:
      "Part-time retail role alongside study, handling point-of-sale, online orders and delivery partners in a busy store.",
    highlights: [
      "Resolve POS and order issues across in-store and online transactions.",
      "Review sales and seasonal demand trends in Tableau dashboards to support daily store operations.",
      "Manage Uber Direct and Jimmy Brings delivery orders, including issue resolution with customers."
    ],
    tools: ["Tableau", "POS Systems", "Uber Direct", "Jimmy Brings"],
    technologies: ["Tableau", "POS Systems", "Uber Direct", "Jimmy Brings"]
  },
  {
    id: "exp-2",
    company: "Bluebird Advisory",
    role: "Capstone Project Developer",
    location: "Canberra, Australia",
    type: "capstone",
    period: "Feb 2025 – May 2025",
    summary:
      "Industry capstone project: built a desk booking app for Bluebird staff, integrated with Microsoft 365.",
    highlights: [
      "Built a React desk booking app with Azure AD single sign-on.",
      "Automated bookings, reporting and data capture with Power Automate and SharePoint.",
      "Added validation and conflict handling to prevent double bookings."
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
    summary:
      "Automated how the Hub collects and maps the capabilities of local cyber businesses.",
    highlights: [
      "Designed structured forms and HubSpot workflows to capture capability data.",
      "Built a capability taxonomy and Power BI dashboards for reporting.",
      "Standardised field mappings between systems to cut manual data-entry errors."
    ],
    tools: ["Microsoft Forms", "HubSpot CRM", "Drupal", "Power BI", "Power Automate"],
    technologies: ["Microsoft Forms", "HubSpot CRM", "Drupal", "Power BI", "Power Automate"]
  },
  {
    id: "exp-4",
    company: "eShipz",
    role: "Software Developer",
    location: "Bengaluru, India",
    type: "full-time",
    period: "Dec 2020 – Dec 2021",
    summary:
      "Backend development on a shipping platform: Flask services, REST APIs and a Python 3 migration.",
    highlights: [
      "Built and maintained backend services in Python, Flask and MongoDB.",
      "Migrated Python 2 services to Python 3.",
      "Load-tested APIs with Locust to find reliability issues before release."
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
    period: "Feb 2020 – Nov 2020",
    summary: "Built responsive client websites and UI components.",
    highlights: [
      "Built responsive websites with HTML, CSS, Bootstrap and JavaScript.",
      "Fixed layout, accessibility and page-speed issues across devices."
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
    period: "Dec 2018 – Feb 2019",
    summary: "Built a native iOS newsreader app in Swift.",
    highlights: [
      "Built the app in Swift and Xcode, pulling articles from REST APIs.",
      "Tested across iOS versions and fixed UI inconsistencies."
    ],
    tools: ["Swift", "Xcode", "REST APIs", "iOS"],
    technologies: ["Swift", "Xcode", "REST APIs", "iOS"]
  }
];