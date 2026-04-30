export interface SkillGroup {
  category: string;
  color: string;
  items: { name: string; level?: 'core' | 'proficient' | 'familiar' | 'learning' }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud & AWS',
    color: 'teal',
    items: [
      { name: 'AWS (EC2, S3, IAM, VPC, Lambda, API Gateway)', level: 'core' },
      { name: 'DynamoDB & Cognito', level: 'proficient' },
      { name: 'CloudWatch & Monitoring', level: 'proficient' },
      { name: 'Terraform Fundamentals', level: 'learning' },
    ],
  },
  {
    category: 'Frontend & UI',
    color: 'cyan',
    items: [
      { name: 'React & Next.js', level: 'core' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'Framer Motion', level: 'proficient' },
      { name: 'Bootstrap', level: 'proficient' },
      { name: 'Chart.js', level: 'familiar' },
    ],
  },
  {
    category: 'Backend & APIs',
    color: 'violet',
    items: [
      { name: 'Python (Flask, Django)', level: 'core' },
      { name: 'REST APIs', level: 'core' },
      { name: 'MongoDB', level: 'proficient' },
      { name: 'MySQL', level: 'proficient' },
      { name: 'Firebase', level: 'familiar' },
      { name: 'Postman', level: 'proficient' },
      { name: 'Locust', level: 'proficient' },
    ],
  },
  {
    category: 'Automation & Microsoft 365',
    color: 'indigo',
    items: [
      { name: 'Power Automate', level: 'core' },
      { name: 'SharePoint', level: 'core' },
      { name: 'Microsoft Lists', level: 'core' },
      { name: 'Azure AD / Entra ID', level: 'proficient' },
      { name: 'Microsoft Graph', level: 'familiar' },
      { name: 'Microsoft Teams', level: 'core' },
      { name: 'Outlook Workflows', level: 'core' },
    ],
  },
  {
    category: 'Data & Tools',
    color: 'silver',
    items: [
      { name: 'SQL', level: 'proficient' },
      { name: 'Git & GitHub', level: 'core' },
      { name: 'Jira & Confluence', level: 'core' },
      { name: 'Power BI', level: 'proficient' },
      { name: 'Tableau', level: 'proficient' },
    ],
  },
  {
    category: 'Operating Systems',
    color: 'midnight',
    items: [
      { name: 'Windows & macOS', level: 'core' },
      { name: 'Linux (Ubuntu, RHEL)', level: 'proficient' },
    ],
  },
];
