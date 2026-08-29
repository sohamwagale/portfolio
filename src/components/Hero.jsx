import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('in'), 120 + i * 80)
    })
  }, [])

  return (
    <section className="hero" id="hero" aria-label="Introduction" ref={ref}>
      {/* top meta strip */}
      <div className="hero-strip">
        <div className="hero-strip-left">
          <span className="label reveal" style={{ color: 'var(--dim)' }}>
            {personalInfo.location.city.toUpperCase()}, {personalInfo.location.state.toUpperCase()}, {personalInfo.location.country.toUpperCase()}
          </span>
        </div>
        <div className="hero-strip-right">
          <span className="label reveal">{personalInfo.location.timezone}</span>
          <span className="label reveal reveal-delay-1" style={{ color: 'var(--dim)' }}>
            {personalInfo.role.split(' | ')[0]}
          </span>
        </div>
      </div>

      {/* main name */}
      <div className="hero-main">
        <div className="hero-name-wrap">
          <span className="hero-fname reveal">{personalInfo.name.first}</span>
          <span className="hero-lname reveal reveal-delay-1">{personalInfo.name.last}</span>

          {/* sidebar vertical text */}
          <div className="hero-sidebar reveal reveal-delay-2">
            SOFTWARE ENGINEER / 2026 / {personalInfo.location.city.toUpperCase()}
          </div>
        </div>

        {/* 3-col descriptor */}
        <div className="hero-desc-row">
          <div className="hero-desc-cell reveal">
            <span className="hero-desc-label">Status</span>
            <span className="hero-desc-value">
              CS Student — <strong>{personalInfo.status.gradYear}</strong><br />
              DYPCET, {personalInfo.location.city}
            </span>
          </div>
          <div className="hero-desc-cell reveal reveal-delay-1">
            <span className="hero-desc-label">Expertise</span>
            <span className="hero-desc-value">
              Full-stack development.<br />
              <strong>React · FastAPI · Node.js</strong><br />
              Cloud infra, mobile apps.
            </span>
          </div>
          <div className="hero-desc-cell reveal reveal-delay-2">
            <span className="hero-desc-label">Metrics</span>
            <span className="hero-desc-value">
              <strong>CGPA {personalInfo.metrics.cgpa}</strong> / {personalInfo.metrics.maxCgpa}<br />
              <strong>{personalInfo.metrics.leetcodeSolved}</strong> LeetCode solved<br />
              {personalInfo.metrics.projectsCount} shipped projects
            </span>
          </div>
        </div>
      </div>

      {/* bottom action bar */}
      <div className="hero-bottom">
        <div className="hero-scroll-text">SCROLL</div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a
            id="hero-contact-link"
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            Get in touch →
          </a>
          <a
            id="hero-projects-link"
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-ghost"
          >
            View work
          </a>
        </div>

        <div className="hero-coords label">
          {personalInfo.contact.phone} / {personalInfo.contact.email}
        </div>
      </div>
    </section>
  )
}
