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
  role: 'Computer Science Student | Aspiring Software Engineer',
  tagline: 'Building scalable full-stack applications with React, FastAPI, Node.js & Cloud.',
  bio: 'Computer Science student (CGPA 8.6) with hands-on experience in full-stack development. Skilled in building scalable applications, solved 140+ Leetcode problems and seeking a software engineering internship to apply and grow technical expertise.',
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
    text: 'Open to internship opportunities — 2026',
    navText: 'Open to work',
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
    name: 'MEDI-PASS',
    title: 'Medi-Pass – Medical Health Records Management System',
    desc: 'Built a prototype system for managing patient medical records using Firebase (Firestore) with role-based access control, focused on data privacy and usability.',
    stack: ['REACT', 'FIREBASE', 'FIRESTORE', 'RBAC'],
    github: 'https://github.com/sohamwagale',
    live: 'https://medi-pass-demo.vercel.app', // Update with your actual deployed link!
  },
  {
    fig: 'FIG. 02',
    name: 'SOCIETY-HUB',
    title: 'Society-Hub – Residential Society Management System',
    desc: 'Engineered a full stack monorepo application with a FastAPI backend deployed on AWS, a React Native mobile app, and a React web app, implementing announcements, polls, and complaint tracking.',
    stack: ['FASTAPI', 'REACT NATIVE', 'REACT', 'SUPABASE', 'AWS'],
    github: 'https://github.com/sohamwagale',
    live: 'https://society-hub-demo.vercel.app', // Update with your actual deployed link!
  },
  {
    fig: 'FIG. 03',
    name: 'SHOP-EASE',
    title: 'Shop-Ease – Full-Stack E-Commerce Web Application',
    desc: 'Built a full-stack e-commerce application with a React, TypeScript, and Tailwind CSS frontend and a custom Node.js/Express REST API backed by MongoDB, featuring product listings, cart, checkout, and order management.',
    stack: ['REACT', 'TYPESCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'TAILWIND'],
    github: 'https://github.com/sohamwagale',
    live: 'https://shop-ease-demo.vercel.app', // Update with your actual deployed link!
  },
  {
    fig: 'FIG. 04',
    name: 'GIT-HUB',
    title: 'Gt-Hib – Mini Version Control System',
    desc: 'Features repository management, issue tracking, user profile management, community member search, custom VCS commands, and interactive contribution heatmaps wrapped in a sleek GitHub Dark UI theme.',
    stack: ['NODE.JS', 'EXPRESS', 'MONGODB', 'REACT', 'DOCKER'],
    github: 'https://github.com/sohamwagale',
    live: null, // Set to string URL if deployed
  },
]

export const skillCategories = [
  {
    name: 'LANGUAGES',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'HTML', 'CSS', 'SQL'],
  },
  {
    name: 'WEB & MOBILE',
    items: ['React.js', 'React Native', 'FastAPI', 'Tailwind CSS', 'REST API Design', 'Expo'],
  },
  {
    name: 'DATABASES',
    items: ['MongoDB', 'Firebase', 'Supabase', 'Firestore'],
  },
  {
    name: 'CLOUD & DEVOPS',
    items: ['AWS', 'Docker (basics)', 'CI/CD (GitHub Actions)', 'Git / GitHub'],
  },
  {
    name: 'CORE CS',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'System Design'],
  },
  {
    name: 'SOFT SKILLS',
    items: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication', 'Time Management'],
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
  interests: ['Software Development', 'System Design', 'Competitive Programming'],
}
