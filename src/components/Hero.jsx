import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('in'), 100 + i * 65)
    })
  }, [])

  const techBadges = [
    'React',
    'Next.js',
    'FastAPI',
    'Node.js',
    'TypeScript',
    'Python',
    'Docker',
    'AWS',
    'PostgreSQL',
  ]

  return (
    <section className="hero" id="hero" aria-label="Introduction" ref={ref}>
      {/* Top Meta Strip */}
      <div className="hero-strip">
        <div className="hero-strip-left">
          <div className="hero-loc-pill reveal">
            <span className="hero-loc-pin">📍</span>
            <span>
              {personalInfo.location.city.toUpperCase()}, {personalInfo.location.state.toUpperCase()} &middot; {personalInfo.location.timezone}
            </span>
          </div>
        </div>

        <div className="hero-strip-right">
          <div className="hero-live-status reveal reveal-delay-1">
            <span className="hero-live-dot" />
            <span className="hero-live-text">{personalInfo.status.text}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Body */}
      <div className="hero-main">
        <div className="hero-name-wrap">
          <div className="hero-kicker reveal">
            <span className="hero-kicker-num">01 //</span>
            <span>SOFTWARE ENGINEER &amp; FULL-STACK DEVELOPER</span>
          </div>

          <div className="hero-title-container">
            <h1 className="hero-fname reveal">
              {personalInfo.name.first}
            </h1>
            <span className="hero-lname reveal reveal-delay-1">
              {personalInfo.name.last}
            </span>
          </div>

          {/* Sidebar vertical technical stamp */}
          <div className="hero-sidebar reveal reveal-delay-2" aria-hidden="true">
            <span>SYS.ARCH</span>
            <span className="hero-sidebar-sep">&diams;</span>
            <span>VOL. 2026</span>
            <span className="hero-sidebar-sep">&diams;</span>
            <span>{personalInfo.location.city.toUpperCase()}</span>
          </div>

          {/* Narrative lead statement */}
          <p className="hero-lead reveal reveal-delay-2">
            Engineering resilient full-stack web applications, scalable backends, and responsive cloud software.
            Passionate about algorithmic efficiency, microservices, and crafting interfaces with tactile precision.
          </p>

          {/* Quick interactive tech chips */}
          <div className="hero-chips-wrap reveal reveal-delay-3" aria-label="Core Technologies">
            {techBadges.map((badge) => (
              <span key={badge} className="hero-chip">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 3-Column Structured Information Panel */}
        <div className="hero-desc-row">
          <div className="hero-desc-cell reveal">
            <div className="hero-desc-eyebrow">
              <span className="hero-desc-num">01</span>
              <span>ACADEMIC STATUS</span>
            </div>
            <div className="hero-desc-value">
              <strong>B.Tech Computer Science</strong>
              <div className="hero-desc-sub">
                Expected {personalInfo.status.gradYear} &middot; DYPCET, {personalInfo.location.city}
              </div>
            </div>
            <div className="hero-desc-badge">Active Undergrad</div>
          </div>

          <div className="hero-desc-cell reveal reveal-delay-1">
            <div className="hero-desc-eyebrow">
              <span className="hero-desc-num">02</span>
              <span>CORE ARCHITECTURE</span>
            </div>
            <div className="hero-desc-value">
              <strong>Full-Stack &amp; Distributed Systems</strong>
              <div className="hero-desc-sub">
                React &middot; Next.js &middot; FastAPI &middot; Node.js &middot; Cloud Infra
              </div>
            </div>
            <div className="hero-desc-badge">1.5+ Yrs Hands-on</div>
          </div>

          <div className="hero-desc-cell reveal reveal-delay-2">
            <div className="hero-desc-eyebrow">
              <span className="hero-desc-num">03</span>
              <span>KEY METRICS</span>
            </div>
            <div className="hero-desc-value">
              <strong>CGPA {personalInfo.metrics.cgpa} / {personalInfo.metrics.maxCgpa} &middot; {personalInfo.metrics.leetcodeSolved} LeetCode</strong>
              <div className="hero-desc-sub">
                {personalInfo.metrics.projectsCount} Shipped Projects &middot; GDG Mentor &middot; T&amp;P Coord
              </div>
            </div>
            <div className="hero-desc-badge">Top Academic Standing</div>
          </div>
        </div>
      </div>

      {/* Bottom Action & CTAs Bar */}
      <div className="hero-bottom">
        <div className="hero-cta-group">
          <a
            id="hero-projects-link"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            <span>Explore Work</span>
            <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </a>

          <a
            id="hero-contact-link"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary"
          >
            <span>Get in Touch</span>
          </a>

          <div className="hero-social-links" aria-label="Social Profiles">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="hero-scroll-line" />
          <span className="hero-scroll-caption">SCROLL DOWN</span>
        </div>

        <div className="hero-coords label">
          <span className="hero-coord-tag">DIRECT &middot;</span>
          <a href={`mailto:${personalInfo.contact.email}`} className="hero-coord-link">
            {personalInfo.contact.email}
          </a>
        </div>
      </div>
    </section>
  )
}

