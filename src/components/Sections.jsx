import { useState } from 'react'
import Icon from './Icon.jsx'
import { useCountUp } from '../hooks.js'
import { profile, stats, services, skillGroups, experience, education } from '../data.js'

function SectionHeader({ eyebrow, title, intro }) {
  return (
    <header className="section-header reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
      <div className="hero-inner">
        <p className="hero-status reveal">
          <span className="pulse" aria-hidden="true" />
          Software Developer at Oaye Creative
        </p>
        <h1 className="reveal">
          Hi, I'm Jacob.<br />
          I build websites that <span className="gradient-text">grow businesses.</span>
        </h1>
        <p className="hero-lede reveal">
          I'm a developer on a marketing team in {profile.location}, where code and campaigns
          meet. I build and maintain sites at scale, wire up the analytics behind them, and keep
          Salesforce reporting what the business needs to know.
        </p>
        <div className="hero-actions reveal">
          <a className="btn btn-primary" href="#contact">
            Get in touch <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href="#experience">See my work</a>
        </div>
        <ul className="hero-social reveal" aria-label="Social links">
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a></li>
          <li><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a></li>
          <li><a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a></li>
        </ul>
      </div>
      <div className="hero-code reveal" aria-hidden="true">
        <div className="code-bar"><span /><span /><span /></div>
        <pre>
          <code>
            <span className="tk-k">const</span> <span className="tk-v">jacob</span> = {'{'}{'\n'}
            {'  '}role: <span className="tk-s">'Developer + Marketer'</span>,{'\n'}
            {'  '}based: <span className="tk-s">'Wilmington, NC'</span>,{'\n'}
            {'  '}pagesShipped: <span className="tk-n">1367</span>,{'\n'}
            {'  '}stack: [<span className="tk-s">'React'</span>, <span className="tk-s">'WordPress'</span>,{'\n'}
            {'          '}<span className="tk-s">'Salesforce'</span>, <span className="tk-s">'GA4'</span>],{'\n'}
            {'  '}learning: <span className="tk-k">true</span>,{'\n'}
            {'}'}
          </code>
        </pre>
      </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  const [ref, n] = useCountUp(value)
  return (
    <div className="stat reveal" ref={ref}>
      <span className="stat-value">{n.toLocaleString()}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="stats-band" aria-label="Highlights">
      <div className="container stats-grid">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <SectionHeader eyebrow="About" title="A developer who speaks marketing." />
        </div>
        <div className="about-body reveal">
          <p>
            Since finishing UNC Chapel Hill's Full Stack Web Development program, I've built and
            shipped applications across several industries. Today I work at <strong>Oaye
            Creative</strong>, where I'm the developer on the marketing team. That covers the
            websites, the reporting behind them, and the systems the team runs on.
          </p>
          <p>
            Being on the marketing side means I think about more than whether the code works. I
            care about how a page converts, whether the tracking is accurate, and whether
            leadership can read the results. I rebuilt a 1,367-page site on my own, and I put the
            same care into a monthly performance report or a Salesforce dashboard.
          </p>
          <p>
            Before that I spent a year and a half as a Senior Tutor at 2U, running more than 1,300
            one-on-one sessions. Teaching taught me to break hard problems into clear steps, and I
            still work that way. I pick things up fast and I like a hard problem.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="What I do"
          title="Engineering and marketing, in one person."
          intro="Most teams have to coordinate between a developer and a marketer. I do both jobs."
        />
        <div className="cards">
          {services.map((s, i) => (
            <article className="card reveal" key={s.title} style={{ '--delay': `${i * 60}ms` }}>
              <div className="card-icon"><Icon name={s.icon} size={22} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader eyebrow="Experience" title="Where I've worked." />
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item reveal" key={job.company}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="job">
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-summary">{job.summary}</p>
                <div className="job-groups">
                  {job.groups.map((g) => (
                    <div className="job-group" key={g.label}>
                      <h4>{g.label}</h4>
                      <ul>
                        {g.points.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Skills() {
  const [active, setActive] = useState('All')
  const tabs = ['All', ...skillGroups.map((g) => g.name)]
  const visible = active === 'All' ? skillGroups : skillGroups.filter((g) => g.name === active)

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionHeader eyebrow="Toolkit" title="Skills and tools." />
        <div className="tabs reveal" role="tablist" aria-label="Skill categories">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              className={`tab ${active === t ? 'is-active' : ''}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="skill-groups">
          {visible.map((g) => (
            <div className="skill-group" key={g.name}>
              <h3>{g.name}</h3>
              <ul className="chips">
                {g.items.map((item) => <li className="chip" key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader eyebrow="Education" title="Training." />
        <div className="edu-card reveal">
          <div className="card-icon"><Icon name="grad" size={22} /></div>
          <div>
            <h3>{education.credential}</h3>
            <p className="job-company">{education.school}</p>
          </div>
          <span className="job-period">{education.period}</span>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner reveal">
        <p className="eyebrow">Contact</p>
        <h2>Let's build something together.</h2>
        <p className="section-intro">
          Whether it's a website, a reporting setup, or a project that needs both development and
          marketing, I'd like to hear about it.
        </p>
        <div className="hero-actions contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={18} /> Email me
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={18} /> Connect on LinkedIn
          </a>
        </div>
        <p className="contact-meta">
          <Icon name="pin" size={16} /> {profile.location}
        </p>
      </div>
    </section>
  )
}
