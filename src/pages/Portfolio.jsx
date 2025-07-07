import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

// Professional Experience Data
const experiences = [
  {
    company: 'University of Canberra',
    role: 'Capstone Project - Bluebird Advisory',
    period: 'Feb 2025 - May 2025',
    highlights: [
      'Built a desk-booking app in React with interactive floor map and date picker',
      'Automated booking emails and check-in/out tracking using Power Automate',
      'Set up Azure AD single-sign-on and packaged automation flows for easy deployment'
    ],
    technologies: ['React', 'Power Automate', 'Azure AD', 'Microsoft Lists']
  },
  {
    company: 'Canberra Cyber Hub @ Innovation Central Canberra',
    role: 'Student Intern',
    period: 'Dec 2024 - Feb 2025',
    highlights: [
      'Developed automated survey solutions using Microsoft Forms, Power Automate, and HubSpot CRM',
      'Created a structured business directory in Drupal, enhancing data management and usability',
      'Participated in weekly meetings with stakeholders to report progress and adjust workflows'
    ],
    technologies: ['Microsoft Forms', 'Power Automate', 'HubSpot', 'Drupal']
  },
  {
    company: 'eShipz',
    role: 'Software Engineer Intern',
    period: 'Dec 2020 - Dec 2021',
    highlights: [
      'Worked on backend services using Python and Flask, and tested APIs during system migrations',
      'Fixed bugs and added features in agile sprints to boost performance'
    ],
    technologies: ['Python', 'Flask', 'APIs', 'Agile']
  },
  {
    company: 'Gewissen Digital Services',
    role: 'Frontend Developer Intern',
    period: 'Feb 2020 - Nov 2020',
    highlights: [
      'Developed responsive websites with HTML, CSS, and Bootstrap for mobile and cross-browser support',
      'Collaborated on UI updates to improve user experience and site performance'
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
  },
  {
    company: 'MobiPhoenix Systems',
    role: 'iOS Developer Intern',
    period: 'Dec 2018 - Feb 2019',
    highlights: [
      'Built a Swift/Xcode newsreader app that consumed public APIs',
      'Followed Apple design guidelines to create clean, intuitive interfaces'
    ],
    technologies: ['Swift', 'Xcode', 'iOS', 'APIs']
  }
];

// Projects Showcase Data
const projects = [
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
    title: 'Simple Car Parking Management System',
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
    notes: [
      'Dean\'s Excellence Award 2025 (GPA 6.5+)',
      'Dean\'s Excellence Award 2024 (GPA 6.5+)',
      'Focus on cloud computing and workflow automation'
    ]
  },
  {
    institution: 'Anna University, India',
    degree: 'Bachelor of Engineering - Computer Science',
    period: 'Aug 2016 – Sep 2020',
    notes: [
      'Graduated with distinction',
      'Focus on IoT and embedded systems',
      'Final year project: Simple Car Parking Management System'
    ]
  }
];

const certifications = [
  'The Academic Integrity Module (AIM) - University of Canberra',
  'Python Programming - Kaggle',
  'MongoDB - MongoDB University',
  'Fundamentals of Red Hat Enterprise Linux - RedHat (Coursera)',
  'Internet of Things - IIT – NPTEL',
  'Introduction to Generative AI - Google Cloud (Coursera)',
  'Automation Testing (Selenium) - Greens Technology, Chennai'
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
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-gray-600'} transition-colors duration-300`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

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
        className={`${base} ${isActive ? activeClass : `${themeClasses.textMuted} hover:${themeClasses.text.split(' ')[0]}`}`}
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
            className={`text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-purple-400 ${
              !isDarkMode ? 'drop-shadow-lg' : ''
            }`}
          >
            Gowtham Jaganathan
          </h1>
          <p className={`text-2xl md:text-3xl mb-8 ${themeClasses.textSecondary}`}>
            Software Engineer
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={`max-w-3xl mx-auto mb-8 ${themeClasses.textMuted} text-lg leading-relaxed`}
          >
            <p>
             As a Software Engineer with a Master of IT & Systems and a Bachelor in Computer Science, I’ve architected a React-based hot-desk booking platform for Bluebird Advisory, automated end-to-end survey workflows at Canberra Cyber Hub, developed Python/Flask APIs to enable smooth migrations at eShipz, and designed responsive Bootstrap sites at Gewissen Digital. I’m passionate about UX-driven design, cloud automation and IoT, and I quickly ramp up new frameworks and tools—combining analytical problem-solving with a collaborative mindset to deliver polished, maintainable solutions.
            </p>
          </motion.div>
          <div className="flex justify-center space-x-6">
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
          </div>
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
      bg-gradient-to-r from-emerald-400 to-teal-300
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
  className={`py-24 px-4 ${themeClasses.bg} snap-start`}
>
  {/* Section Heading */}
  <h2
    className={`
      text-4xl font-bold mb-12 text-center
      text-transparent bg-clip-text
      bg-gradient-to-r from-blue-400 to-purple-500
      ${!isDarkMode ? 'drop-shadow-lg' : ''}
    `}
  >
    Education
  </h2>

  <div className="max-w-4xl mx-auto space-y-8">
    {education.map((edu, i) => (
      <motion.div
        key={i}
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        whileHover={{ scale: 1.02 }}
        className={`
          group relative rounded-2xl p-6 border
          ${themeClasses.cardBorder} ${themeClasses.cardBg}
          transition-all duration-300
          hover:border-2 hover:border-purple-500 hover:shadow-lg
        `}
      >
        {/* Date label (underline removed) */}
        <div className="absolute top-4 right-4 text-xs font-medium text-purple-500">
          {edu.period}
        </div>

        {/* Institution */}
        <h3
          className={`
            text-2xl font-semibold mb-2
            transition-all duration-300
            group-hover:text-transparent group-hover:bg-clip-text
            group-hover:bg-gradient-to-r from-blue-400 to-purple-500
          `}
        >
          {edu.institution}
        </h3>

        {/* Degree */}
        <p className={`italic mb-4 ${themeClasses.textSecondary}`}>
          {edu.degree}
        </p>

        {/* Notes */}
        <ul className={`list-disc list-inside space-y-1 ${themeClasses.textMuted}`}>
          {edu.notes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
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
          {proj.features.slice(0, 4).map((feat, idx) => (
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
    I’m open to new opportunities and collaborations. Feel free to reach out via email or phone.
  </p>

  <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Email Card */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`
        flex flex-col items-center p-6 rounded-2xl 
        border ${themeClasses.cardBorder} ${themeClasses.cardBg}
        transition-shadow duration-300 hover:shadow-2xl
      `}
    >
      <svg
        className="w-10 h-10 mb-4 text-red-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M2 4a2 2 0 0 1 2-2h16a2 ...Z" />
      </svg>
      <h3 className="text-xl font-semibold mb-2">Email Me</h3>
      <p className={`mb-4 ${themeClasses.textSecondary}`}>gowthamsabari24499@gmail.com</p>
      <motion.a
        href="mailto:gowthamsabari24499@gmail.com"
        whileHover={{ scale: 1.05 }}
        className={`
          inline-block px-6 py-2 rounded-full
          bg-gradient-to-r from-red-500 to-orange-400
          text-white font-medium
          transition-all duration-300
          hover:opacity-90
        `}
      >
        Send Email
      </motion.a>
    </motion.div>

    {/* Phone Card */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`
        flex flex-col items-center p-6 rounded-2xl 
        border ${themeClasses.cardBorder} ${themeClasses.cardBg}
        transition-shadow duration-300 hover:shadow-2xl
      `}
    >
      <svg
        className="w-10 h-10 mb-4 text-red-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.05 ...Z" />
      </svg>
      <h3 className="text-xl font-semibold mb-2">Call Me</h3>
      <p className={`mb-4 ${themeClasses.textSecondary}`}>+61 451 317 244</p>
      <motion.a
        href="tel:+61451317244"
        whileHover={{ scale: 1.05 }}
        className={`
          inline-block px-6 py-2 rounded-full
          bg-gradient-to-r from-red-500 to-orange-400
          text-white font-medium
          transition-all duration-300
          hover:opacity-90
        `}
      >
        Call Now
      </motion.a>
    </motion.div>
  </div>
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
