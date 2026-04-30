export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: "active" | "completed" | "in-progress" | "planned" | "Credential earned";
  code: string;
  level: string;
  description: string;
  date?: string;
  important: boolean;
  type: "featured" | "secondary";
}

export const certifications: Certification[] = [
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    status: "Credential earned",
    code: "SAA-C03",
    level: "Associate",
    description: "Validates ability to design secure, resilient, high-performing, and cost-optimized architectures on AWS.",
    date: "Earned 2026",
    important: true,
    type: "featured"
  },
  {
    id: "mast-cert",
    name: "MAST Certification",
    issuer: "Aristotle Metadata",
    status: "active",
    code: "MAST",
    level: "professional",
    description: "Metadata and registry standards certification.",
    important: true,
    type: "featured"
  },
  {
    id: "python-kaggle",
    name: "Python Programming",
    issuer: "Kaggle",
    status: "completed",
    code: "PY-101",
    level: "foundational",
    description: "Core Python programming concepts.",
    important: false,
    type: "secondary"
  },
  {
    id: "mongodb-uni",
    name: "MongoDB",
    issuer: "MongoDB University",
    status: "completed",
    code: "M001",
    level: "foundational",
    description: "NoSQL database design.",
    important: false,
    type: "secondary"
  },
  {
    id: "rhel-fund",
    name: "Red Hat Enterprise Linux",
    issuer: "RedHat",
    status: "completed",
    code: "RH-024",
    level: "foundational",
    description: "Core Linux system administration.",
    important: false,
    type: "secondary"
  },
  {
    id: "iot-nptel",
    name: "Internet of Things",
    issuer: "IIT – NPTEL",
    status: "completed",
    code: "IOT-101",
    level: "foundational",
    description: "IoT architecture and sensors.",
    important: false,
    type: "secondary"
  },
  {
    id: "genai-gcp",
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    status: "completed",
    code: "GCP-GENAI",
    level: "foundational",
    description: "LLM fundamentals.",
    important: false,
    type: "secondary"
  },
  {
    id: "docker-cert",
    name: "Docker",
    issuer: "Learning",
    status: "completed",
    code: "DOCKER",
    level: "foundational",
    description: "Containerization basics.",
    important: false,
    type: "secondary"
  },
  {
    id: "rhel-cn-dev",
    name: "Red Hat Cloud-Native Development",
    issuer: "RedHat",
    status: "completed",
    code: "RH-CN",
    level: "foundational",
    description: "Cloud-native apps.",
    important: false,
    type: "secondary"
  },
  {
    id: "ansible-cert",
    name: "Ansible",
    issuer: "Learning",
    status: "completed",
    code: "ANSIBLE",
    level: "foundational",
    description: "Infrastructure automation.",
    important: false,
    type: "secondary"
  }
];
