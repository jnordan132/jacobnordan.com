import { useEffect, useState } from 'react'
import Icon from './components/Icon.jsx'
import { Hero, Stats, About, Services, Experience, Skills, Education, Contact } from './components/Sections.jsx'
import { useReveal, useActiveSection } from './hooks.js'
import { profile } from './data.js'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const NAV_IDS = NAV.map((n) => n.id)

function Nav() {
  const active = useActiveSection(NAV_IDS)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="Jacob Nordan, home">
          <span className="logo-mark">JN</span>
          <span className="logo-text">Jacob Nordan</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a className="btn btn-small btn-primary" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Jacob Nordan. Built with React.</p>
          <div className="footer-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
