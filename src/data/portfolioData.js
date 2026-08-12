/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * Edit this file to easily update your personal information, work experience,
 * projects, skills, education, contact info, and deployed links!
 * =========================================================================
 */

export const personalInfo = {
  name: {
    first: 'SOHAM',
    last: 'WAGALE',
  },
  role: 'Computer Science Student | Full-Stack Software Developer',
  tagline: 'Building full-stack applications with React, TypeScript, FastAPI, Node.js, and cloud technologies.',
  bio: 'Computer Science student with 1.5+ years of hands-on full-stack development experience. Skilled in building scalable applications with React, Node.js, and cloud technologies. Solved 140+ LeetCode problems and actively seeking a challenging software engineering internship.',
  location: {
    city: 'Kolhapur',
    state: 'Maharashtra',
    country: 'India',
    coords: 'N 16°42′ E 074°14′',
    timezone: 'UTC +05:30',
  },
  contact: {
    email: 'sohamwagale@gmail.com',
    phone: '+91 9552804518',
    linkedin: 'https://linkedin.com/in/soham-wagale',
    github: 'https://github.com/sohamwagale',
    displayLinkedin: 'linkedin.com/in/soham-wagale',
    displayGithub: 'github.com/sohamwagale',
  },
  status: {
    available: true,
    text: 'Open to Software Engineering Internships',
    navText: 'Open to internships',
    gradYear: 'Expected 2027',
  },
  metrics: {
    cgpa: '8.6',
    maxCgpa: '10.0',
    leetcodeSolved: '140+',
    projectsCount: '4',
    rolesCount: '2',
  },
  documentMeta: {
    docCode: 'DOC ◆ SW-PORTFOLIO-2026 ◆ REV.02',
    navDocCode: 'DOC-2026-001 / PORTFOLIO',
  }
}

export const experiences = [
  {
    fig: 'FIG. 01',
    range: ['Jun 2025', 'Present'],
    role: 'Internship & Placement Coordinator',
    org: 'Training and Placement Club · DYPCET',
    bullets: [
      'Coordinated campus recruitment drives, ensuring smooth execution between students, faculty, and recruiters.',
      'Streamlined scheduling and candidate management workflows, improving coordination efficiency.',
    ],
  },
  {
    fig: 'FIG. 02',
    range: ['Jun 2025', 'Nov 2025'],
    role: 'Mentor — Liberal Learning Course',
    org: 'Google Developer Group (GDG) · DYPCET',
    bullets: [
      'Selected through an interview process assessing Core Java fundamentals to mentor second-year students in a 6-month Liberal Learning Course.',
      'Delivered public speaking and teaching sessions to audiences of up to 150 students per session alongside a team of 3 co-mentors.',
      'Conducted individual oral examinations at course completion to evaluate students\' grasp of core Java concepts.',
      'Strengthened public speaking, communication, and large-audience teaching skills while ensuring every learner\'s doubts were addressed.',
    ],
  },
]

export const projects = [
  {
    fig: 'FIG. 01',
    name: 'AI-WORKFLOW',
    title: 'AI Workflow Automation – Visual Workflow Builder',
    desc: 'Built an AI-assisted visual workflow automation platform for designing, executing, and monitoring automated task pipelines through a node-based interface.',
    stack: ['REACT','Next.JS', 'TYPESCRIPT','PRISMA', 'NODE.JS', 'AI', 'WORKFLOW AUTOMATION'],
    github: 'https://github.com/sohamwagale/AI-Workflow-Automation',
    live: null,
  },
  {
    fig: 'FIG. 02',
    name: 'LEETCODE',
    title: 'LeetCode – Data Structures & Algorithms',
    desc: 'Solved 140+ algorithmic problems across arrays, strings, linked lists, stacks, sliding windows, trees, and other core data structures and algorithms.',
    stack: ['C++', 'DSA', 'ALGORITHMS', 'LEETCODE'],
    github: 'https://github.com/sohamwagale/Leetcode',
    live: null,
  },
  {
    fig: 'FIG. 03',
    name: 'SOCIETY-HUB',
    title: 'Society-Hub – Residential Society Management System',
    desc: 'Built a full-stack residential society management platform with React Native/Expo and React clients, a FastAPI backend, SQLAlchemy, authentication, maintenance billing, complaints, announcements, and polling. Deployed the backend using AWS Lambda and integrated Firebase Cloud Messaging for notifications.',
    stack: ['FASTAPI', 'REACT NATIVE', 'REACT', 'SUPABASE', 'AWS'],
    github: 'https://github.com/sohamwagale/Society-Hub',
    live: 'https://sohamwagale.github.io/Society-Hub/',
  },
  {
    fig: 'FIG. 04',
    name: 'MEDI-PASS',
    title: 'Medi-Pass – Medical Health Records Management System',
    desc: 'Built a prototype system for managing patient medical records using Firebase Firestore with role-based access control, focused on data privacy and usability.',
    stack: ['REACT', 'FIREBASE', 'FIRESTORE', 'RBAC'],
    github: 'https://github.com/sohamwagale/MediPass',
    live: 'https://sohamwagale.github.io/MediPass/',
  },
  {
    fig: 'FIG. 05',
    name: 'SHOP-EASE',
    title: 'Shop-Ease – Full-Stack E-Commerce Web Application',
    desc: 'Built a full-stack e-commerce application with a React, TypeScript, and Tailwind CSS frontend and a custom Node.js/Express REST API backed by MongoDB, featuring product listings, cart, checkout, and order management.',
    stack: ['REACT', 'TYPESCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'TAILWIND'],
    github: 'https://github.com/sohamwagale/Shop-Ease',
    live: 'https://shop-ease-8xko.onrender.com/',
  },
  {
    fig: 'FIG. 06',
    name: 'GIT-HUB',
    title: 'Git-Hub – Mini Version Control System',
    desc: 'Built a GitHub-inspired platform featuring repository management, issue tracking, user profiles, community member search, custom version-control commands, and interactive contribution heatmaps.',
    stack: ['NODE.JS', 'EXPRESS', 'MONGODB', 'REACT', 'DOCKER'],
    github: 'https://github.com/sohamwagale/Guthib',
    live: null,
  },
]

export const skillCategories = [
  {
    name: 'LANGUAGES',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Java',
      'C/C++',
      'SQL',
    ],
  },
  {
    name: 'FRONTEND',
    items: [
      'React',
      'React Native',
      'Next.js',
      'Tailwind CSS',
      'Expo',
    ],
  },
  {
    name: 'BACKEND',
    items: [
      'Node.js',
      'Express',
      'FastAPI',
      'REST APIs',
    ],
  },
  {
    name: 'DATABASES',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQLite',
      'Firebase',
    ],
  },
  {
    name: 'CLOUD & DEVOPS',
    items: [
      'AWS',
      'Docker',
      'GitHub Actions',
      'Git',
      'GitHub',
      'Nginx',
    ],
  },
  {
    name: 'CS FUNDAMENTALS',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'System Design',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science',
  institution: 'D. Y. Patil College of Engineering and Technology (DYPCET)',
  location: 'Kolhapur, Maharashtra',
  cgpa: '8.6',
  maxCgpa: '10',
  expectedGraduation: '2027',
  languages: [
    { lang: 'English', level: 'Fluent' },
    { lang: 'Hindi', level: 'Fluent' },
    { lang: 'Marathi', level: 'Native' },
  ],
  interests: [
  'Full-Stack Development',
  'Backend Engineering',
  'System Design',
  'Cloud Computing',
  'Competitive Programming'],
}
