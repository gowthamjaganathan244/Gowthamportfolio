import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';


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
    period: 'Jul 2023 – May 2025',
    gpa: '6.38 / 7.00',
    awards: [
      "Dean’s Excellence Award – Faculty of Science & Technology (2024)",
      "Dean’s Excellence Award – Faculty of Science & Technology (2025)"
    ]
  },
  {
    institution: 'Anna University, India',
    degree: 'Bachelor of Engineering – Computer Science',
    period: 'Aug 2016 – Nov 2020',
    classification: 'First Class'
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
      {/* Navigation - Perfect responsive */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={`fixed top-0 w-full h-12 sm:h-14 md:h-16 ${themeClasses.navBg} backdrop-blur-md z-50 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Site logo"
              className="h-6 sm:h-7 md:h-8 w-auto cursor-pointer transition-transform hover:scale-105"
              onClick={toggleTheme}
            />
          </div>

          {/* Mobile Hamburger + Desktop Links */}
          <div className="flex items-center">
            {/* Mobile Hamburger */}
            <button
              className={`md:hidden p-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {Object.keys(sectionRefs).map(key => {
                const isActive = activeSection === key;
                const base = 'relative text-xs lg:text-sm normal-case tracking-wider py-1 px-2 transition-all';
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
                      <span className="absolute bottom-0 left-1/2 w-3 lg:w-4 h-[2px] bg-blue-500 -translate-x-1/2"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
      
      



<AnimatePresence>
  {menuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
      className={`
        md:hidden fixed top-0 left-0 w-full
        ${isDarkMode ? 'bg-black' : 'bg-white'}
        pt-14 pb-4 z-40 shadow-md overflow-auto
      `}
      style={{ paddingTop: 'calc(56px + env(safe-area-inset-top))' }}
    >
      {/* Close button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(false)}
        className={`
          absolute top-4 right-4 p-2 rounded-full
          ${isDarkMode ? 'bg-black' : 'bg-white'}
          transition
        `}
        aria-label="Close menu"
      >
        <X size={24} />
      </motion.button>

      {/* Menu items */}
      <div className="flex flex-col mt-2">
        {Object.keys(sectionRefs).map((key, idx) => {
          const isActive = activeSection === key;
          const textClass = isActive
            ? sectionGradients[key]
            : themeClasses.textSecondary;

          return (
            <motion.button
              key={key}
              custom={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }} // 50 ms stagger
              onClick={() => {
                scrollToSection(key);
                setMenuOpen(false);
              }}
              className={`
                w-full text-left px-6 py-3 text-base
                ${textClass}
                ${isDarkMode ? 'bg-black' : 'bg-white'}
                transition-colors
              `}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  )}
</AnimatePresence>




      </motion.nav>

       {/* Hero Section - Perfect alignment and responsive */}
      <motion.section
        ref={sectionRefs.home}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12"
      >
        <div className={`absolute inset-0 ${themeClasses.bg}`} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center"
        >
          {/* Header Content - Centered */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            {/* Name - Perfect scaling for all devices */}
            <h1
              className={`
                text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                font-bold mb-4 sm:mb-6 
                text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-violet-400
                leading-tight
                ${!isDarkMode ? 'drop-shadow-lg' : ''}
              `}
            >
              Gowtham Jaganathan
            </h1>
            
            {/* Subtitle - Perfect scaling */}
            <p className={`
              text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              leading-relaxed max-w-4xl mx-auto
              ${themeClasses.textSecondary}
            `}>
              Software Engineer | Full-Stack Developer & Workflow Automation Specialist
            </p>
          </div>
          
          {/* Main Content Grid - Perfect alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Text aligned left on desktop, center on mobile */}
              <div className="space-y-6 text-center lg:text-left">
                <h3 className={`
                  text-lg xs:text-xl sm:text-2xl md:text-3xl 
                  font-bold leading-tight
                  ${themeClasses.text}
                `}>
                  Full-stack developer passionate about creating intuitive applications and automating complex workflows to solve real-world problems.
                </h3>
                
                <p className={`
                  text-base xs:text-lg sm:text-xl 
                  leading-relaxed
                  ${themeClasses.textSecondary}
                `}>
                  I enjoy turning ideas into functional solutions, whether it's a sleek web app or an innovative IoT prototype.
                </p>
              </div>
              
              {/* Right Content Card - Perfectly centered */}
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <div className={`
                  w-full group p-5 sm:p-6 md:p-7 rounded-2xl 
                  border ${themeClasses.cardBorder} ${themeClasses.cardBg} 
                  transition-all duration-300 
                  hover:border-2 hover:border-blue-500 hover:shadow-xl
                  transform hover:scale-[1.02]
                `}>
                  <h4 className={`
                    text-base sm:text-lg font-semibold mb-4
                    ${themeClasses.text} 
                    group-hover:text-transparent group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r from-blue-400 to-purple-500 
                    transition-all duration-300
                  `}>
                    Recent Impact
                  </h4>
                  
                  <ul className="space-y-3">
                    {[
                      { color: 'blue-400', text: 'Built interactive desk booking platform' },
                      { color: 'purple-400', text: 'Automated business workflows and surveys' },
                      { color: 'green-400', text: 'Developed backend APIs and mobile apps' },
                      { color: 'orange-400', text: 'Created IoT prototypes and automation systems' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`text-${item.color} mr-3 mt-1 text-sm font-bold`}>•</span>
                        <span className={`${themeClasses.textMuted} text-sm sm:text-base leading-relaxed`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Skills Tags - Centered on mobile, left on desktop */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full">
                  {['Web Development', 'Automation', 'IoT Projects', 'Problem Solving'].map((skill) => (
                    <span 
                      key={skill} 
                      className={`
                        inline-block px-3 py-1.5 
                        text-xs sm:text-sm font-medium
                        rounded-full 
                        ${themeClasses.text} ${themeClasses.skillBg} 
                        border ${themeClasses.skillBorder}
                        transition-all duration-200 hover:scale-105
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Technical Skills Section - Perfect responsive */}
      <motion.section
        ref={sectionRefs.skills}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 ${themeClasses.bg} snap-start`}
      >
        <h2
          className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
            font-bold mb-8 sm:mb-10 md:mb-12 text-center
            text-transparent bg-clip-text
            bg-gradient-to-r from-teal-200 to-emerald-500 
            leading-tight
            ${!isDarkMode ? 'drop-shadow-lg' : 'drop-shadow-xl'}
          `}
        >
          Technical Skills & Interests
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Object.entries(techSkillsInterests).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                group p-4 sm:p-5 md:p-6 
                rounded-xl sm:rounded-2xl 
                border ${themeClasses.cardBorder} ${themeClasses.cardBg}
                transition-all duration-300
                hover:border-2 hover:border-teal-300 hover:shadow-lg
              `}
            >
              <h3
                className={`
                  text-base sm:text-lg md:text-xl 
                  font-semibold mb-3 sm:mb-4 
                  transition-all
                  group-hover:text-transparent group-hover:bg-clip-text
                  group-hover:bg-gradient-to-r group-hover:from-teal-200
                  group-hover:to-emerald-500
                `}
              >
                {category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {items.map(item => (
                  <li key={item} className="flex items-center">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-300 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span className={`${themeClasses.textSecondary} text-xs sm:text-sm md:text-base`}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section*/}
      <motion.section
        ref={sectionRefs.experience}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 ${themeClasses.bg} snap-start`}
      >
        <h2
          className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
            font-bold mb-8 sm:mb-10 md:mb-12 text-center
            text-transparent bg-clip-text
            bg-gradient-to-r from-teal-400 to-blue-500
            leading-tight
            ${!isDarkMode ? 'drop-shadow-lg' : ''}
          `}
        >
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                group rounded-xl sm:rounded-2xl 
                p-4 sm:p-5 md:p-6 
                border ${themeClasses.cardBorder} ${themeClasses.cardBg}
                transition-all duration-300
                hover:border-2 hover:border-blue-500 hover:shadow-lg
              `}
            >
              {/* Company & Period */}
              <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 mb-3 sm:mb-4">
                <h3
                  className={`
                    text-lg xs:text-xl sm:text-2xl md:text-3xl 
                    font-semibold leading-tight
                    transition-all duration-300
                    group-hover:text-transparent group-hover:bg-clip-text
                    group-hover:bg-gradient-to-r from-teal-400 to-blue-500
                  `}
                >
                  {exp.company}
                </h3>
                <span className={`
                  ${themeClasses.textSecondary} 
                  text-xs sm:text-sm 
                  flex-shrink-0
                 
                  px-2 py-1 rounded-full
                  xs:bg-transparent xs:dark:bg-transparent xs:px-0 xs:py-0
                `}>
                  {exp.period}
                </span>
              </div>

              {/* Role */}
              <p className={`text-sm sm:text-base md:text-lg mb-3 sm:mb-4 ${themeClasses.textSecondary}`}>
                {exp.role}
              </p>

              {/* Highlights */}
              <ul className={`list-disc list-inside space-y-1 sm:space-y-2 mb-4 ${themeClasses.textMuted}`}>
                {exp.highlights.map((hl, idx) => (
                  <li key={idx} className="text-xs sm:text-sm md:text-base leading-relaxed pl-1">
                    {hl}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`
                      px-2 sm:px-3 py-1 
                      rounded-full 
                      text-xs sm:text-xs
                      ${themeClasses.text} ${themeClasses.skillBg} 
                      border ${themeClasses.skillBorder}
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section - Perfect responsive */}
      <motion.section
        ref={sectionRefs.education}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 ${themeClasses.bg} snap-start`}
      >
        <h2
          className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
            font-bold mb-8 sm:mb-10 md:mb-12 text-center
            text-transparent bg-clip-text
            bg-gradient-to-r from-blue-400 to-purple-500
            leading-tight
            ${!isDarkMode ? 'drop-shadow-lg' : ''}
          `}
        >
          Education
        </h2>

        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                group relative rounded-xl sm:rounded-2xl 
                p-4 sm:p-5 md:p-6 
                border ${themeClasses.cardBorder} ${themeClasses.cardBg}
                transition-all duration-300
                hover:border-2 hover:border-purple-500 hover:shadow-lg
              `}
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {/* Institution and Period */}
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2">
                  <h3
                    className={`
                      text-base xs:text-lg sm:text-xl md:text-2xl 
                      font-semibold leading-tight
                      transition-all duration-300
                      group-hover:text-transparent group-hover:bg-clip-text
                      group-hover:bg-gradient-to-r from-blue-400 to-purple-500
                    `}
                  >
                    {edu.institution}
                  </h3>
                  <span 
                    className={`
                      text-xs sm:text-sm font-medium text-purple-500 
                      self-start xs:self-center flex-shrink-0
                      
                      xs:bg-transparent xs:dark:bg-transparent xs:px-0 xs:py-0 xs:rounded-none
                    `}
                  >
                    {edu.period}
                  </span>
                </div>

                {/* Degree */}
                <p className={`text-sm sm:text-base md:text-lg italic ${themeClasses.textSecondary} leading-relaxed`}>
                  {edu.degree}
                </p>

                {/* Academic Performance */}
                <div className="flex flex-col xs:flex-row xs:gap-4 gap-1">
                  {edu.gpa && (
                    <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
                      <span className="font-medium text-blue-400">GPA:</span> {edu.gpa}
                    </p>
                  )}
                  {edu.classification && (
                    <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
                      <span className="font-medium text-blue-400">Grade:</span> {edu.classification}
                    </p>
                  )}
                </div>

                {/* Awards */}
                {edu.awards?.length > 0 && (
                  <div className="mt-2">
                    <h4 className={`text-sm sm:text-base font-medium mb-2 text-purple-400`}>
                      Awards & Recognition:
                    </h4>
                    <ul className="space-y-1 pl-2">
                      {edu.awards.map((award, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1 text-xs">•</span>
                          <span className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                            {award}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section - Perfect responsive */}
      <motion.section
        ref={sectionRefs.certifications}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 ${themeClasses.bg} snap-start`}
      >
        <h2
          className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
            font-bold mb-8 sm:mb-10 md:mb-12 text-center
            text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-400
            leading-tight
            ${!isDarkMode ? 'drop-shadow-lg' : ''}
          `}
        >
          Certifications
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`
                group rounded-xl sm:rounded-2xl 
                p-4 sm:p-5 md:p-6 
                border ${themeClasses.cardBorder} ${themeClasses.cardBg}
                transition-all duration-300
                hover:border-2 hover:border-pink-400 hover:shadow-lg
              `}
            >
              <div className="flex items-center space-x-3">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400 rounded-full flex-shrink-0"></span>
                <p
                  className={`
                    text-xs sm:text-sm md:text-base 
                    transition-all duration-300 leading-relaxed
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

      {/* Projects Section - Perfect responsive */}
      <motion.section
        ref={sectionRefs.projects}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 ${themeClasses.bg} snap-start`}
      >
        <h2
          className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
            font-bold mb-8 sm:mb-10 md:mb-12 text-center
            text-transparent bg-clip-text
            bg-gradient-to-r from-pink-400 to-red-500
            leading-tight
            ${!isDarkMode ? 'drop-shadow-lg' : ''}
          `}
        >
          Selected Projects
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                group relative rounded-xl sm:rounded-2xl 
                p-4 sm:p-5 md:p-6 
                border ${themeClasses.cardBorder} ${themeClasses.cardBg}
                transition-all duration-300
                hover:border-2 hover:border-red-500 hover:shadow-lg
                flex flex-col h-full
              `}
            >
              <span className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-400 rounded-full"></span>

              <h3
                className={`
                  text-base sm:text-lg md:text-xl 
                  font-bold mb-3 pr-6
                  transition-all duration-300
                  group-hover:text-transparent group-hover:bg-clip-text
                  group-hover:bg-gradient-to-r from-pink-400 to-red-500
                `}
              >
                {proj.title}
              </h3>

              <p className={`${themeClasses.textSecondary} mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed flex-grow`}>
                {proj.description}
              </p>

              <ul className={`list-disc list-inside mb-3 sm:mb-4 space-y-1 ${themeClasses.textMuted} flex-grow`}>
                {proj.features.slice(0, 6).map((feat, idx) => (
                  <li key={idx} className="text-xs sm:text-sm leading-relaxed pl-1">{feat}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                {proj.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`
                      inline-block px-2 sm:px-3 py-1 
                      text-xs rounded-full 
                      ${themeClasses.text} ${themeClasses.skillBg} 
                      border ${themeClasses.skillBorder}
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section - Perfect responsive */}
      <motion.section
        ref={sectionRefs.contact}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 ${themeClasses.bg} snap-start`}
      >
        <h2
          className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
            font-bold mb-4 sm:mb-6 text-center
            text-transparent bg-clip-text
            bg-gradient-to-r from-red-500 to-orange-400
            leading-tight
            ${!isDarkMode ? 'drop-shadow-lg' : ''}
          `}
        >
          Let's Connect
        </h2>
        
        <p className={`
          text-sm sm:text-base md:text-lg 
          text-center mb-8 sm:mb-10 md:mb-12 
          leading-relaxed px-4
          ${themeClasses.textSecondary}
        `}>
          I'm always keen to chat about new projects and opportunities. Find me on{' '}
          <span className="font-semibold">LinkedIn</span>.
        </p>

        <div
          className={`
            max-w-sm sm:max-w-md mx-auto
            flex flex-col items-center 
            p-4 sm:p-5 md:p-6 
            rounded-xl sm:rounded-2xl
            border ${themeClasses.cardBorder} ${themeClasses.cardBg}
            transition-shadow duration-300 hover:shadow-lg
          `}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">LinkedIn</h3>
          <p className={`mb-4 sm:mb-6 ${themeClasses.textSecondary} text-sm sm:text-base text-center`}>
            /in/gowtham-jaganathan-0b5354280
          </p>
          <a
            href="https://www.linkedin.com/in/gowtham-jaganathan-0b5354280/"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-block px-4 sm:px-6 py-2 sm:py-3 
              rounded-full text-sm sm:text-base
              bg-gradient-to-r from-red-500 to-orange-400
              text-white font-medium
              transition-all duration-300
              hover:opacity-90 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
            `}
          >
            Visit Profile
          </a>
        </div>
      </motion.section>

      {/* Footer - Perfect responsive */}
      <footer
        className={`${themeClasses.bg} py-4 sm:py-6 border-t ${themeClasses.footerBorder} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex justify-center">
          <p className={`${themeClasses.textMuted} text-xs sm:text-sm text-center leading-relaxed`}>
            Website designed by © {new Date().getFullYear()}{' '}
            <span
              style={{ fontFamily: "'Lucida Handwriting', cursive" }}
              className="text-sm sm:text-base"
            >
              Gowtham Jaganathan
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
