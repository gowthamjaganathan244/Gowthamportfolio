import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../assets/GJ.png'
import { Menu, X,} from 'lucide-react';


// Professional Experience Data
const experiences = [
  {
    company: 'University of Canberra',
role: 'Capstone Project - Bluebird Advisory',
period: 'Feb 2025 - May 2025',
highlights: [
  'Built a Microsoft-integrated desk booking app in React with interactive floor map and calendar-based date picker',
  'Implemented Azure AD single sign-on and embedded the system into Microsoft Teams for seamless access',
  'Automated calendar invites, booking confirmations, and check-in/out tracking using Power Automate and Outlook',
  'Enabled recurring bookings with editable days and generated usage reports with desk and attendance analytics',
  'Collaborated through weekly stakeholder meetings and managed agile development using Jira and GitHub'
],
technologies: [
  'React', 'Vite', 'Tailwind CSS', 'Power Automate', 'Azure AD', 'Microsoft Teams',
  'Outlook Calendar API', 'Microsoft Graph API', 'Microsoft Lists', 'SharePoint Lists', 'GitHub', 'Jira'
]

  },
  {
    "company": "Canberra Cyber Hub @ Innovation Central Canberra",
  "role": "Student Intern",
  "period": "Dec 2024 – Feb 2025",
  "highlights": [
    "Created and launched a capability mapping survey using Microsoft Forms and HubSpot to streamline cyber business data collection",
    "Explored integration of Microsoft Forms with HubSpot CRM using Power Automate and documented system limitations and alternatives",
    "Built a business directory in Drupal with taxonomy, filters, and webforms to support structured data submission and user navigation",
    "Collaborated with stakeholders through weekly meetings using Microsoft Teams and Outlook to provide updates and resolve technical issues",
    "Prepared and delivered a detailed closure report and final presentation using Microsoft Word and PowerPoint"
  ],
  "technologies": [
    "Microsoft Forms",
    "Power Automate",
    "HubSpot CRM",
    "Drupal CMS",
    "Microsoft Teams",
    "Microsoft Outlook",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Webforms module",
    "HTML/CSS",
    "Technical documentation tools"]
  },
  {
    company: 'eShipz',
  role: 'Software Engineer Intern',
  period: 'Dec 2020 - Dec 2021',
  highlights: [
    'Led migration of core services from Python 2 to Python 3, refactoring both Flask and Pyramid applications for full compatibility and stability',
    'Built shipment-tracking and e-commerce integration tools, designing RESTful APIs and lightweight HTML/CSS interfaces',
    'Executed load and stress tests with Locust to pinpoint performance bottlenecks and improve API response times',
    'Collaborated in Agile sprints to troubleshoot production issues, implement new features and optimize backend performance'
  ],
  technologies: [
    'Python 2→3',
    'Flask',
    'Pyramid',
    'RESTful APIs',
    'HTML',
    'CSS',
    'Locust',
    'Git',
    'Agile'
  ]
  },
  {
    company: 'Gewissen Digital Services',
  role: 'Frontend Developer Intern',
  period: 'Feb 2020 - Nov 2020',
  highlights: [
    'Developed and maintained multiple responsive websites using HTML5, CSS3 and Bootstrap, ensuring mobile-first design and cross-browser compatibility',
    'Collaborated with designers to translate wireframes into interactive UI components, enhancing user experience and improving page load performance',
    'Optimized site performance by minifying assets and implementing lazy-loading techniques',
    'Participated in project planning and code reviews, leveraging Git for version control'
  ],
  technologies: [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'Git',
    'Cross-browser Testing'
  ]
  },
  {
    company: 'MobiPhoenix Systems',
  role: 'iOS Developer Intern',
  period: 'Dec 2018 - Feb 2019',
  highlights: [
    'Designed and developed a Swift-based newsreader app in Xcode using MVC architecture and UIKit components',
    'Integrated RESTful APIs to fetch, parse and cache JSON feeds for seamless online/offline reading',
    'Applied Apple’s Human Interface Guidelines and Auto Layout to build adaptive, intuitive interfaces across multiple iPhone models',
    'Performed device testing on various iOS versions and screen sizes, debugging issues and optimizing app performance'
  ],
  technologies: [
    'Swift',
    'Xcode',
    'UIKit',
    'Auto Layout',
    'RESTful APIs',
    'JSON',
    'Git',
    'MVC Architecture',
    'iOS Testing'
  ]
  }
];

// Projects Showcase Data
const projects = [
  {
  title: 'Personal Portfolio Website',
  description:
    'Single-page React site showcasing my projects and skills, with smooth Framer-Motion animations and responsive dark/light themes.',
  features: [
    'Dynamic routing with React Router',
    'Framer-Motion page transitions',
    'Theme toggle (dark / light) via Tailwind CSS variables',
    'Scroll-snap navigation & active-section highlighting',
    'Content powered by a central JSON data module',
    'Auto-animate sections on viewport reveal',
    'Deployed on GitHub Pages with a custom domain'
  ],
  technologies: [
    'React', 'TypeScript', 'Vite', 'Tailwind CSS',
    'Framer Motion', 'Lucide-react', 'React Router', 'GitHub Pages'
  ]
  
},

  {
    title: 'Bluebird Smart Desk Booking System',
    description: 'React-based desk-booking app with interactive floor maps, multi-date picker, real-time availability, check-in/out tracking, analytics, and automated emails',
    features: [
      'Interactive floor map',
      'Multi-date picker',
      'Real-time availability',
      'Check-in/out tracking',
      'Analytics dashboard',
      'Automated emails using Power Automate',
      'Azure AD SSO integration'
    ],
    technologies: ['React', 'Power Automate', 'Azure AD', 'SharePoint']
  },
  {
    title: 'Canberra Cyber Hub Capability-Mapping Automation',
    description: 'Automated survey workflows by connecting Microsoft Forms, Power Automate, and HubSpot CRM',
    features: [
      'Automated survey workflows',
      'Microsoft Forms integration',
      'Field mappings design',
      'Data consistency ensuring',
      'Improved Drupal business directory'
    ],
    technologies: ['Microsoft Forms', 'Power Automate', 'HubSpot CRM', 'Drupal']
  },
  {
  title: 'European Landscape Explorer',
  description: 'A fast-loading, responsive website that celebrates Europe’s mountain, coast, and city vistas through responsive image grids and interactive travel itineraries.',
  features: [
    'Responsive CSS Grid gallery',
    'Progressive JPEGs for quick first paint',
    'Fullscreen lightbox with swipe navigation',
    'Google Maps route builder for each region',
    'Service-worker caching for offline viewing'
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'Google Maps API', 'Service Workers']
},
  {
    title: 'IoT Home Automation with Energy Tracking',
    description: 'Voice-controlled home automation system using ESP8266 NodeMCU, IFTTT, MQTT, and INA219 sensors',
    features: [
      'Voice-controlled appliance management',
      'Real-time energy usage tracking',
      'Energy data logged to Firebase',
      'Data visualization dashboard'
    ],
    technologies: ['ESP8266 NodeMCU', 'MQTT', 'IFTTT', 'INA219', 'Firebase']
  },
  {
    title: 'Automated Accident Alert System',
    description: 'Crash-detection prototype with ESP8266 NodeMCU, accelerometer, GPS, and GSM modules',
    features: [
      'Crash detection using accelerometer',
      'GPS location tracking',
      'SMS alerts with location',
      '97% accuracy in testing'
    ],
    technologies: ['ESP8266 NodeMCU', 'Accelerometer', 'GPS', 'GSM']
  },
  {
    title: 'Car Parking Management System',
    description: 'Web app that helps users find available parking spaces by location',
    features: [
      'Location-based parking search',
      'Map integration',
      'Real-time slot tracking',
      'User-friendly interface'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Maps API']
  },
  {
    title: 'iOS Newsreader App',
    description: 'Swift/Xcode newsreader app consuming public APIs with Apple design guidelines',
    features: [
      'Public API integration',
      'Clean, intuitive interface',
      'Apple design guidelines compliance',
      'News categorization'
    ],
    technologies: ['Swift', 'Xcode', 'iOS', 'Public APIs']
  }
];

const techSkillsInterests = {
  'Languages & Frameworks': [
    'Python',
    'JavaScript (React, Node.js)',
    'HTML',
    'CSS',
    'Swift'
  ],
  'Web & API': [
    'Flask',
    'Express',
    'REST API development',
    'Chart.js'
  ],
  'Automation & Cloud': [
    'Power Automate',
    'Microsoft Lists',
    'Azure AD',
    'SharePoint'
  ],
  'Databases & Tools': [
    'MongoDB',
    'Firebase',
    'Git',
    'Postman'
  ],
  'IoT & Embedded': [
    'ESP8266 NodeMCU',
    'MQTT',
    'IFTTT',
    'INA219',
    'MPU6050'
  ],
  'Interests': [
    'Cloud computing and workflow automation',
    'IoT and embedded systems',
    'Web and mobile app development',
    'Learning new technologies and security best practices'
  ]
};



const education = [
  {
    institution: 'University of Canberra, Australia',
    degree: 'Master of Information Technology & Systems',
    period: 'Jul 2023 – May 2025'
  },
  {
    institution: 'Anna University, India',
    degree: 'Bachelor of Engineering - Computer Science',  // matches résumé
    period: 'Aug 2016 – Nov 2020'
  }
];


const certifications = [
  'The Academic Integrity Module (AIM) - University of Canberra',
  'Python Programming - Kaggle',
  'MongoDB - MongoDB University',
  'Fundamentals of Red Hat Enterprise Linux - RedHat (Coursera)',
  'Internet of Things - IIT – NPTEL',
  'Introduction to Generative AI - Google Cloud (Coursera)',
  'Automation Testing (Selenium) - Greens Technology, Chennai',
  'Introduction to Docker - Google Cloud (Coursera)',
  'Foundations of Red Hat Cloud-native Development - RedHat (Coursera)',
  'Fundamentals of Ansible - RedHat (Coursera)'
];

const sectionGradients = {
  home:        'bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-purple-400',  // your hero gradient
  skills:      'bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300',
  education:   'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500',
  experience:  'bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500',
  projects:    'bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500',
  certifications: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400',
  contact:     'bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400',
};


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const sectionRefs = {
    home: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    certifications: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };
  const [menuOpen, setMenuOpen] = useState(false);

  // Parallax scale
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Scroll helper
  const scrollToSection = (key) => {
    sectionRefs[key].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(key);
    setMenuOpen(false);
  };

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  // Faster, snappier animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  };

  // Theme classes
  const themeClasses = {
    bg: isDarkMode ? 'bg-black' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    navBg: isDarkMode ? 'bg-black/40' : 'bg-white/40',
    cardBg: isDarkMode ? 'bg-black/40' : 'bg-white/60',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    skillBg: isDarkMode ? 'bg-white/10' : 'bg-gray-100',
    skillBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    hoverRing: isDarkMode ? 'hover:ring-blue-500' : 'hover:ring-blue-400',
    contactBg: isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200',
    footerBorder: isDarkMode ? 'border-white/10' : 'border-gray-200'
  };

  return (
    <div className={`${themeClasses.bg} ${themeClasses.text} font-sans min-h-screen overflow-x-hidden transition-colors duration-300`}>
      {/* Navigation */}
      <motion.nav
  initial="hidden"
  animate="visible"
  variants={fadeIn}
  className={`fixed top-0 w-full ${themeClasses.navBg} backdrop-blur-md z-50 transition-colors duration-300`}
>
  <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

    {/* ─── Logo + Theme Toggle ─── */}
    <div className="flex items-center space-x-4">
      {/* Logo: clicking it toggles the theme */}
      <img
        src={Logo}
        alt="Site logo"
        className="h-8 w-auto cursor-pointer transition-transform hover:scale-105"
        onClick={toggleTheme}
      />
      
    </div>

    {/* ─── Mobile Hamburger + Desktop Links ─── */}
    <div className="flex items-center">
      {/* Mobile Hamburger */}
      <button
        className={`md:hidden ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}
        onClick={() => setMenuOpen(o => !o)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {Object.keys(sectionRefs).map(key => {
          const isActive = activeSection === key;
          const base = 'relative text-sm normal-case tracking-wider py-1 transition-all';
          const activeClass = isActive ? sectionGradients[key] : themeClasses.textMuted;
          return (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`${base} ${
                isActive 
                  ? activeClass 
                  : `${themeClasses.textMuted} hover:${themeClasses.text.split(' ')[0]}`
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 w-4 h-[2px] bg-blue-500 -translate-x-1/2"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  </div>
        {/* Mobile Dropdown */}
        {menuOpen && (
  <div className={`md:hidden ${themeClasses.navBg} backdrop-blur-lg transition-colors duration-300`}>
    {Object.keys(sectionRefs).map(key => {
      const isActive = activeSection === key;
      const grad = isActive ? sectionGradients[key] : themeClasses.textSecondary;
      return (
        <button
          key={key}
          onClick={() => scrollToSection(key)}
          className={`block w-full text-left px-6 py-3 ${grad} transition-all`}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      );
    })}
  </div>
)}

      </motion.nav>
      {/* Hero Section */}
      <motion.section
        ref={sectionRefs.home}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          style={{ scale }}
          className={`absolute inset-0 ${themeClasses.bg}`}
        />

        {/* Content */}
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          
          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-violet-400 ${
              !isDarkMode ? 'drop-shadow-lg' : ''
            }`}
          >
            Gowtham Jaganathan
          </h1>
          <p className={`text-2xl md:text-3xl mb-8 ${themeClasses.textSecondary}`}>
            Software Engineer | Full-Stack Developer & Workflow Automation Specialist
          </p>
          <motion.div
      initial={fadeUp.hidden}
      animate={fadeUp.visible}
      transition={{ delay: 0.5, duration: 0.6 }}
      className={`max-w-4xl mx-auto mb-8`}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="text-left">
            <h3 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>
              Full-stack developer passionate about creating intuitive applications and automating complex workflows to solve real-world problems.
            </h3>
            
            <p className={`text-lg leading-relaxed ${themeClasses.textSecondary}`}>
              I enjoy turning ideas into functional solutions, whether it's a sleek web app or an innovative IoT prototype.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`group p-6 rounded-2xl border ${themeClasses.cardBorder} ${themeClasses.cardBg} transition-all duration-300 hover:border-2 hover:border-blue-500 hover:shadow-lg`}
          >
            <h4 className={`font-semibold mb-2 ${themeClasses.text} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300`}>
              Recent Impact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className={themeClasses.textMuted}>Built interactive desk booking platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className={themeClasses.textMuted}>Automated business workflows and surveys</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className={themeClasses.textMuted}>Developed backend APIs and mobile apps</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span className={themeClasses.textMuted}>Created IoT prototypes and automation systems</span>
              </li>
            </ul>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {['Web Development', 'Automation', 'IoT Projects', 'Problem Solving'].map((skill) => (
              <span key={skill} className={`inline-block px-3 py-1 text-xs rounded-full ${themeClasses.text} ${themeClasses.skillBg} border ${themeClasses.skillBorder}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    

          {/* <div className="flex justify-center space-x-6">
            {['LinkedIn', 'GitHub', 'Contact'].map((name) => (
              <motion.a
                key={name}
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`transition-all ${
                  isDarkMode
                    ? 'text-white/80 hover:text-blue-400'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {name}
              </motion.a>
            ))}
          </div> */}
        </motion.div>
      </motion.section>

    {/* Technical Skills & Interests */}
<motion.section
  ref={sectionRefs.skills}
  initial={fadeIn.hidden}
  whileInView={fadeIn.visible}
  className={`py-24 px-4 ${themeClasses.bg} snap-start`}
>
  <h2
    className={`
      text-4xl font-bold mb-12 text-center
      text-transparent bg-clip-text
      bg-gradient-to-r from-teal-200 to-emerald-500 
      ${!isDarkMode ? 'drop-shadow-lg' : 'drop-shadow-xl'}
    `}
  >
    Technical Skills & Interests
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Object.entries(techSkillsInterests).map(([category, items]) => (
      <motion.div
        key={category}
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        whileHover={{ scale: 1.03 }}
        className={`
          group p-6 rounded-2xl border ${themeClasses.cardBorder} ${themeClasses.cardBg}
          transition-shadow duration-300
          hover:border-2 hover:border-teal-300 hover:shadow-2xl
        `}
      >
        <h3
          className={`
            text-xl font-semibold mb-4 transition-all
            group-hover:text-transparent group-hover:bg-clip-text
            group-hover:bg-gradient-to-r group-hover:from-teal-200
            group-hover:to-emerald-500
          `}
        >
          {category}
        </h3>
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item} className="flex items-center">
              <span className="w-2 h-2 bg-teal-300 rounded-full mr-3 flex-shrink-0"></span>
              <span className={themeClasses.textSecondary}>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</motion.section>




      {/* Experience Section */}
<motion.section
  ref={sectionRefs.experience}
  initial={fadeIn.hidden}
  whileInView={fadeIn.visible}
  className={`py-24 px-4 ${themeClasses.bg} snap-start`}
>
  {/* Section Heading */}
  <h2
    className={`
      text-4xl font-bold mb-12 text-center
      text-transparent bg-clip-text
      bg-gradient-to-r from-teal-400 to-blue-500
      ${!isDarkMode ? 'drop-shadow-lg' : ''}
    `}
  >
    Professional Experience
  </h2>

  <div className="max-w-4xl mx-auto space-y-10">
    {experiences.map((exp, i) => (
      <motion.div
        key={i}
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        whileHover={{ scale: 1.02 }}
        className={`
          group
          rounded-2xl p-6 border ${themeClasses.cardBorder} ${themeClasses.cardBg}
          transition-all duration-300
          hover:border-2 hover:border-blue-500 hover:shadow-lg
        `}
      >
        {/* Company & Period */}
        <div className="flex justify-between items-center mb-4">
          <h3
            className={`
              text-2xl font-semibold
              transition-all duration-300
              group-hover:text-transparent group-hover:bg-clip-text
              group-hover:bg-gradient-to-r from-teal-400 to-blue-500
            `}
          >
            {exp.company}
          </h3>
          <span className={`${themeClasses.textSecondary} text-sm`}>
            {exp.period}
          </span>
        </div>

        {/* Role */}
        <p className={`text-lg mb-4 italic ${themeClasses.textSecondary}`}>
          {exp.role}
        </p>

        {/* Highlights */}
        <ul className={`list-disc list-inside space-y-1 mb-4 ${themeClasses.textMuted}`}>
          {exp.highlights.map((hl, idx) => (
            <li key={idx}>{hl}</li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>


   {/* Education Section */}
<motion.section
  ref={sectionRefs.education}
  initial={fadeIn.hidden}
  whileInView={fadeIn.visible}
  className={`py-12 md:py-24 px-4 ${themeClasses.bg} snap-start`}
>
  {/* Heading */}
  <h2
    className={`
      text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center
      text-transparent bg-clip-text
      bg-gradient-to-r from-blue-400 to-purple-500
      ${!isDarkMode ? 'drop-shadow-lg' : ''}
    `}
  >
    Education
  </h2>

  <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
    {education.map((edu, i) => (
      <motion.div
        key={i}
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`
          group relative rounded-2xl p-4 sm:p-6 border
          ${themeClasses.cardBorder} ${themeClasses.cardBg}
          transition-all duration-300
          hover:border-2 hover:border-purple-500 hover:shadow-lg
        `}
      >
        {/* Period badge */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xs font-medium text-purple-500">
          {edu.period}
        </div>

        {/* Institution name */}
        <h3
          className={`
            text-xl sm:text-2xl font-semibold mb-2
            transition-all duration-300
            group-hover:text-transparent group-hover:bg-clip-text
            group-hover:bg-gradient-to-r from-blue-400 to-purple-500
          `}
        >
          {edu.institution}
        </h3>

        {/* Degree */}
        <p className={`italic ${themeClasses.textSecondary}`}>
          {edu.degree}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>





{/* Certifications Section */}
<motion.section
  ref={sectionRefs.certifications}
  initial={fadeIn.hidden}
  whileInView={fadeIn.visible}
  className={`py-24 px-4 ${themeClasses.bg} snap-start`}
>
  {/* Section Heading */}
  <h2
    className={`
      text-4xl font-bold mb-12 text-center
      text-transparent bg-clip-text
      bg-gradient-to-r from-purple-400 to-pink-400
      ${!isDarkMode ? 'drop-shadow-lg' : ''}
    `}
  >
    Certifications
  </h2>

  <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {certifications.map((cert, i) => (
      <motion.div
        key={i}
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        whileHover={{ scale: 1.02 }}
        className={`
          group
          rounded-2xl p-6 border ${themeClasses.cardBorder} ${themeClasses.cardBg}
          transition-all duration-300
          hover:border-2 hover:border-pink-400 hover:shadow-lg
        `}
      >
        <div className="flex items-center space-x-3">
          {/* Bullet dot */}
          <span className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></span>

          {/* Certificate text */}
          <p
            className={`
              text-sm transition-all duration-300
              group-hover:text-transparent group-hover:bg-clip-text
              group-hover:bg-gradient-to-r from-purple-400 to-pink-400
            `}
          >
            {cert}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>


{/* Selected Projects Section */}
<motion.section
  ref={sectionRefs.projects}
  initial={fadeIn.hidden}
  whileInView={fadeIn.visible}
  className={`py-24 px-4 ${themeClasses.bg} snap-start`}
>
  {/* Section Heading */}
  <h2
    className={`
      text-4xl font-bold mb-12 text-center
      text-transparent bg-clip-text
      bg-gradient-to-r from-pink-400 to-red-500
      ${!isDarkMode ? 'drop-shadow-lg' : ''}
    `}
  >
    Selected Projects
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((proj, i) => (
      <motion.div
        key={i}
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        whileHover={{ scale: 1.02 }}
        className={`
          group relative rounded-2xl p-6 border 
          ${themeClasses.cardBorder} ${themeClasses.cardBg}
          transition-all duration-300
          hover:border-2 hover:border-red-500 hover:shadow-lg
        `}
      >
        {/* Corner Dot */}
        <span className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full"></span>

        {/* Project Title */}
        <h3
          className={`
            text-xl font-bold mb-3
            transition-all duration-300
            group-hover:text-transparent group-hover:bg-clip-text
            group-hover:bg-gradient-to-r from-pink-400 to-red-500
          `}
        >
          {proj.title}
        </h3>

        {/* Description */}
        <p className={`${themeClasses.textSecondary} mb-4 text-sm`}>
          {proj.description}
        </p>

        {/* Key Features */}
        <ul className={`list-disc list-inside mb-4 space-y-1 ${themeClasses.textMuted}`}>
          {proj.features.slice(0, 8).map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {proj.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`inline-block px-2 py-1 text-xs rounded-full ${themeClasses.text} ${themeClasses.skillBg} border ${themeClasses.skillBorder}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>



      {/* Contact Section */}
<motion.section
  ref={sectionRefs.contact}
  initial={fadeIn.hidden}
  whileInView={fadeIn.visible}
  className={`py-24 px-4 ${themeClasses.bg} snap-start`}
>
  {/* Section Heading */}
  <h2
    className={`
      text-4xl font-bold mb-6 text-center
      text-transparent bg-clip-text
      bg-gradient-to-r from-red-500 to-orange-400
      ${!isDarkMode ? 'drop-shadow-lg' : ''}
    `}
  >
    Let’s Connect
  </h2>
  <p className={`text-lg text-center mb-12 ${themeClasses.textSecondary}`}>
    I’m always keen to chat about new projects and opportunities. Find me on&nbsp;
    <span className="font-semibold">LinkedIn</span>.
  </p>

  {/* LinkedIn Card */}
  <motion.div
    whileHover={{ scale: 1.03 }}
    className={`
      max-w-md mx-auto flex flex-col items-center p-6 rounded-2xl
      border ${themeClasses.cardBorder} ${themeClasses.cardBg}
      transition-shadow duration-300 hover:shadow-2xl
    `}
  >
  
    <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
    <p className={`mb-4 ${themeClasses.textSecondary}`}>
      /in/gowtham-jaganathan-0b5354280
    </p>
    <motion.a
      href="https://www.linkedin.com/in/gowtham-jaganathan-0b5354280/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className={`
        inline-block px-6 py-2 rounded-full
        bg-gradient-to-r from-red-500 to-orange-400
        text-white font-medium
        transition-all duration-300
        hover:opacity-90
      `}
    >
      Visit Profile
    </motion.a>
  </motion.div>
</motion.section>


      {/* Footer */}
<footer
  className={`${themeClasses.bg} py-6 border-t ${themeClasses.footerBorder} transition-colors duration-300`}
>
  <div className="max-w-8xl mx-auto px-4 flex justify-end">
    <p className={`${themeClasses.textMuted} text-sm`}>{' '}Website designed by
      © {new Date().getFullYear()}{' '}
      <span
        style={{ fontFamily: "'Lucida Handwriting', cursive" }}
        className="text-base"
      >
        Gowtham Jaganathan
      </span>
    
    </p>
  </div>
</footer>


    </div>
  );
}
