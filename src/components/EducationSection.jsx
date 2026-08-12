import { useEffect, useRef } from 'react'
import { education, personalInfo } from '../data/portfolioData'

export default function EducationSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('in'), i * 70)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="education" ref={ref} aria-labelledby="edu-title">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">04</div>
          <h2 className="sec-title" id="edu-title">
            EDUCATION <span className="ghost">& DATA</span>
          </h2>
        </div>

        <div className="edu-top">
          {/* Left: degree info */}
          <div className="edu-left reveal">
            <div className="edu-degree-label label">Degree</div>
            <div className="edu-degree-name">{education.degree.toUpperCase()}<br />OF TECHNOLOGY</div>
            <div className="edu-degree-name" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', color: 'var(--muted)', marginTop: '4px' }}>
              {education.field.toUpperCase()}
            </div>
            <div className="edu-inst label">
              {education.institution}<br />
              {education.location}
            </div>

            <div className="edu-rows">
              {[
                ['Graduation', `Expected ${education.expectedGraduation}`],
                ['Status', 'Active / Full-time'],
                ['Focus', 'Full-Stack · Systems · Cloud'],
                ...education.languages.map((l) => [l.lang, l.level]),
              ].map(([k, v]) => (
                <div className="edu-data-row" key={k}>
                  <span className="edu-data-k">{k}</span>
                  <span className="edu-data-v">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: large CGPA + stats */}
          <div className="edu-right reveal reveal-delay-1">
            <div>
              <div className="label" style={{ marginBottom: '8px' }}>CGPA / {education.maxCgpa}</div>
              <div className="edu-cgpa-big">{education.cgpa}</div>
              <div className="edu-cgpa-sub">D. Y. PATIL COLLEGE OF ENG. &amp; TECH.</div>
            </div>

            <div className="edu-stats-row">
              {[
                [personalInfo.metrics.leetcodeSolved, 'LEETCODE'],
                [personalInfo.metrics.projectsCount,    'PROJECTS'],
                [personalInfo.metrics.rolesCount,    'ROLES'],
                [education.languages.length,    'LANGUAGES'],
              ].map(([n, l]) => (
                <div className="edu-stat" key={l}>
                  <span className="edu-stat-n">{n}</span>
                  <span className="edu-stat-l">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
