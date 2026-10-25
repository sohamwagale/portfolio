import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import GamifiedPortfolio from './components/gamified/GamifiedPortfolio'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'standard'
  })

  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme)
    if (theme === 'gamified') {
      document.body.classList.add('theme-gamified-body')
      document.body.classList.remove('theme-standard-body')
      document.documentElement.setAttribute('data-theme', 'gamified')
    } else {
      document.body.classList.add('theme-standard-body')
      document.body.classList.remove('theme-gamified-body')
      document.documentElement.setAttribute('data-theme', 'standard')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'standard' ? 'gamified' : 'standard'))
  }

  if (theme === 'gamified') {
    return <GamifiedPortfolio onToggleTheme={toggleTheme} />
  }

  return (
    <div className="standard-theme-root">
      <Navbar onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Ticker />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <ContactSection />
    </div>
  )
}

export default App
