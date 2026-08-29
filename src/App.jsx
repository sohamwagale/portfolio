import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <ContactSection />
    </>
  )
}

export default App
