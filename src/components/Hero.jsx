import { useEffect, useRef } from 'react'
import Ticker from './Ticker'
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
          <span className="label reveal">{personalInfo.location.coords}</span>
          <span className="label reveal reveal-delay-1" style={{ color: 'var(--dim)' }}>
            {personalInfo.location.city.toUpperCase()}, {personalInfo.location.state.toUpperCase()}, {personalInfo.location.country.toUpperCase()}
          </span>
        </div>
        <div className="hero-strip-right">
          <span className="label reveal">INDEX 001</span>
          <span className="label reveal reveal-delay-1" style={{ color: 'var(--dim)' }}>
            {personalInfo.role.toUpperCase()}
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

      <Ticker />

      {/* bottom action bar */}
      <div className="hero-bottom">
        <div className="hero-scroll-text">SCROLL</div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a
            id="hero-contact-link"
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10.5px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--white)',
              padding: '8px 16px',
              border: '1px solid var(--rule)',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--silver)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.background = 'transparent' }}
          >
            GET IN TOUCH →
          </a>
          <a
            id="hero-projects-link"
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10.5px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--muted)',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            VIEW WORK
          </a>
        </div>

        <div className="hero-coords label">
          {personalInfo.contact.phone} / {personalInfo.contact.email}
        </div>
      </div>
    </section>
  )
}
