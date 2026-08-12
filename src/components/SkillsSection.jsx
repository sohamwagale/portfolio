import { useEffect, useRef } from 'react'
import { skillCategories } from '../data/portfolioData'

const totalSkills = skillCategories.reduce((acc, c) => acc + c.items.length, 0)

export default function SkillsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('in'), i * 50)
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
    <section className="section" id="skills" ref={ref} aria-labelledby="skills-title">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">03</div>
          <h2 className="sec-title" id="skills-title">
            SKILLS <span className="ghost">& TECH</span>
          </h2>
        </div>

        <div className="skills-wrap">
          {/* Left sidebar: count */}
          <div className="skills-aside reveal">
            <div className="skills-aside-label">Total skills</div>
            <div className="skills-count-big">{totalSkills}</div>
            <div className="skills-count-sub">Competencies<br />documented</div>
          </div>

          {/* Right: skill table */}
          <div className="skills-table">
            {skillCategories.map((cat, i) => (
              <div className="skills-cat reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="skills-cat-name">{cat.name}</div>
                <div className="skills-items">
                  {cat.items.map((item) => (
                    <div className="skills-item" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
