import React, { useState } from 'react';
import { SimpleProjectCard, QuestLogCard, ProjectCaseStudyCard } from '../../../gamified/components/PixelCards';
import { projects } from '../../data/portfolioData';

// Lore zones for projects
const projectLore = {
  'AI-WORKFLOW': {
    zone: 'Hollow Oak (North)',
    badge: 'FIG. 01 · QUEST MASTER',
    overview: 'Built an AI-assisted visual workflow automation platform for designing, executing, and monitoring automated task pipelines through a node-based interface.',
    architecture: 'Engineered interactive canvas nodes with Next.js, backed by Prisma ORM and Node.js execution workers with AI automation chaining.',
    results: 'Enables engineers and power users to chain complex APIs, data transformations, and schedule distributed background pipelines visually.',
  },
  'LEETCODE': {
    zone: 'Ruined Stone Tower',
    badge: 'FIG. 02 · ALGORITHMIC ARENA',
    overview: 'Built a containerized LeetCode-inspired coding platform featuring problem browsing, code execution, submission handling, user profiles, and progress tracking.',
    architecture: 'Built with React frontend, FastAPI backend, PostgreSQL relational database, and Docker containerized sandboxing for secure code evaluation.',
    results: 'Allows secure isolated execution of code submissions with instant test suite validation and progress analytics.',
  },
  'SOCIETY-HUB': {
    zone: 'Citadel of Clouds',
    badge: 'FIG. 03 · RESIDENTIAL REALM',
    overview: 'Full-stack residential society management platform with React Native/Expo and React clients, FastAPI backend, SQLAlchemy, and cloud notifications.',
    architecture: 'FastAPI REST backend deployed on AWS Lambda with Supabase/PostgreSQL database, Firebase Cloud Messaging for notifications, and Expo mobile client.',
    results: 'Streamlines maintenance billing, complaint resolution, announcements, and tenant polling across housing complexes.',
  },
  'MEDI-PASS': {
    zone: "Healer's Sanctum",
    badge: 'FIG. 04 · MEDICAL ARCHIVE',
    overview: 'Prototype system for managing patient medical records using Firebase Firestore with role-based access control, focused on data privacy and usability.',
    architecture: 'React web interface coupled with Firebase Firestore real-time NoSQL database, security rules, and fine-grained RBAC permissions.',
    results: 'Ensures confidentiality of health records while allowing immediate, verified access to authorized medical practitioners.',
  },
  'SHOP-EASE': {
    zone: "Merchant's Bazaar",
    badge: 'FIG. 05 · COMMERCIAL BASTION',
    overview: 'Full-stack e-commerce web application featuring product browsing, search, cart, secure checkout, and order management.',
    architecture: 'Built with React, TypeScript, and Tailwind CSS on frontend, Node.js/Express REST API backend, and MongoDB database with order state persistence.',
    results: 'Delivers a responsive shopping experience with end-to-end cart state management and simulated checkout workflow.',
  },
  'GIT-HUB': {
    zone: 'The Archive Bastion',
    badge: 'FIG. 06 · TIME CHRONOMANCY',
    overview: 'GitHub-inspired version control web application featuring repository management, issue tracking, user profiles, and interactive contribution heatmaps.',
    architecture: 'Node.js and Express backend with MongoDB storage, Docker containerization, and custom version control command simulation.',
    results: 'Provides developer profiles, code browsing, commit tracking, and community collaboration tooling.',
  },
};

export default function GamifiedProjects() {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'questlog'
  const [activeProject, setActiveProject] = useState(null);

  const openCaseStudy = (proj) => {
    const lore = projectLore[proj.name] || {};
    setActiveProject({
      ...proj,
      ...lore,
    });
  };

  const closeCaseStudy = () => {
    setActiveProject(null);
  };

  return (
    <section className="rpg-section" id="rpg-projects" aria-labelledby="rpg-proj-title">
      <div className="gamified-wrap">
        <div className="rpg-sec-head">
          <div className="rpg-sec-badge">RECORDED QUESTS &amp; TECH ARTIFACTS</div>
          <h2 className="rpg-sec-title" id="rpg-proj-title">
            Selected <span className="accent">Work &amp; Quests</span>
          </h2>
          <p className="rpg-sec-sub">
            Full-stack software engineering projects engineered across web, mobile, APIs, and cloud infrastructure.
          </p>
        </div>

        {/* View mode switcher */}
        <div className="rpg-projects-controls">
          <button
            type="button"
            className={`rpg-tab-btn ${viewMode === 'cards' ? 'active' : ''}`}
            onClick={() => setViewMode('cards')}
          >
            🛡️ Grid View (Simple Cards)
          </button>
          <button
            type="button"
            className={`rpg-tab-btn ${viewMode === 'questlog' ? 'active' : ''}`}
            onClick={() => setViewMode('questlog')}
          >
            📜 Quest Log View
          </button>
        </div>

        {/* Card View */}
        {viewMode === 'cards' && (
          <div className="rpg-projects-grid">
            {projects.map((proj, idx) => {
              const lore = projectLore[proj.name] || {};
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <SimpleProjectCard
                    name={proj.name}
                    zone={lore.zone || 'Forest Outpost'}
                    title={proj.title}
                    description={proj.desc}
                    stack={proj.stack}
                    githubUrl={proj.github}
                    liveUrl={proj.live}
                  />
                  <button
                    type="button"
                    className="rpg-parchment-btn"
                    onClick={() => openCaseStudy(proj)}
                    style={{
                      marginTop: 8,
                      alignSelf: 'flex-start',
                      fontSize: '11px',
                      padding: '5px 12px',
                    }}
                  >
                    🔍 Inspect Lore &amp; Architecture
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Quest Log View */}
        {viewMode === 'questlog' && (
          <div className="rpg-questlog-grid">
            {projects.map((proj, idx) => {
              const lore = projectLore[proj.name] || {};
              return (
                <QuestLogCard
                  key={idx}
                  name={proj.name}
                  zone={lore.zone || 'Unknown Woods'}
                  isCompleted={true}
                  onInspect={() => openCaseStudy(proj)}
                />
              );
            })}
          </div>
        )}

        {/* Interactive Case Study Modal Popup */}
        {activeProject && (
          <div className="rpg-modal-backdrop" onClick={closeCaseStudy} role="dialog" aria-modal="true">
            <div onClick={(e) => e.stopPropagation()}>
              <ProjectCaseStudyCard
                title={activeProject.title}
                badge={activeProject.badge || `${activeProject.fig} · QUEST`}
                subtitle={activeProject.zone ? `Location: ${activeProject.zone}` : null}
                overview={activeProject.overview || activeProject.desc}
                architecture={activeProject.architecture || 'Full-stack software architecture with clean modular code.'}
                results={activeProject.results || 'Fully tested and delivered with production-ready standards.'}
                stack={activeProject.stack}
                githubUrl={activeProject.github}
                liveUrl={activeProject.live}
                onClose={closeCaseStudy}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
