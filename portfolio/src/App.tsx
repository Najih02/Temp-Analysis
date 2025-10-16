import { useMemo } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './App.css'

type Experience = {
  role: string
  company: string
  location?: string
  date: string
  bullets: string[]
}

type Project = {
  title: string
  org?: string
  date?: string
  bullets: string[]
}

const experiences: Experience[] = [
  {
    role: 'AI Engineer',
    company: 'Reap Studio',
    date: 'Jul 2025',
    bullets: [
      'Built AI-powered virtual try-on features for Relafie with real-time image processing and personalization',
      'Designed FastAPI services to connect AI models with web frontends and third‑party systems',
      'Integrated WhatsApp Cloud API for automated notifications and customer workflows',
    ],
  },
  {
    role: 'Data Science AI Intern',
    company: 'Future Optima IT Solutions',
    date: 'Jul 2024 – May 2025',
    bullets: [
      'Performed data cleaning and feature engineering for ML models',
      'Developed predictive models using statistical methods and machine learning algorithms',
      'Improved model performance collaborating with the data science team',
    ],
  },
]

const projects: Project[] = [
  {
    title: 'Emotion Detection',
    org: 'Future Optima IT Solutions',
    date: 'Nov 2024 – Jan 2024',
    bullets: [
      'NLP + CNN pipeline to classify emotions from text and facial images using HF Transformers, OpenCV, TensorFlow',
    ],
  },
  {
    title: 'Customer Churn Prediction',
    org: 'Future Optima IT Solutions',
    date: 'Aug 2023 – Apr 2024',
    bullets: [
      'Trained LR, RF, XGBoost with K-Fold CV on Kaggle telecom churn dataset; 86.52% accuracy',
    ],
  },
  {
    title: 'SmartFace Market',
    org: 'MES College of Engineering',
    date: 'Feb 2024 – June 2024',
    bullets: [
      'Face recognition loyalty and recommendation engine using vision + behavioral data',
    ],
  },
  {
    title: 'Data Groom — CLI',
    org: 'MES College of Engineering',
    date: 'Sep 2023 – Jan 2024',
    bullets: [
      'Data preprocessing CLI with imbalance handling and hyperparameter tuning grid-search',
    ],
  },
]

const skills = {
  core: ['AI/ML', 'NLP', 'LLM', 'Computer Vision', 'Data Science', 'Predictive Modeling'],
  stacks: ['Python', 'FastAPI', 'NumPy', 'Pandas', 'scikit‑learn', 'TensorFlow', 'Keras', 'OpenCV'],
  web: ['HTML', 'CSS', 'React'],
  data: ['MySQL', 'MongoDB', 'PostgreSQL'],
  analytics: ['Tableau', 'PowerBI'],
}

function Nav() {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ]
  return (
    <nav aria-label="Primary" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="blur-surface" style={{ borderBottom: '1px solid var(--outline)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between', paddingBlock: 14 }}>
          <a href="#home" style={{ fontWeight: 700 }}>NN</a>
          <div style={{ display: 'flex', gap: 14 }}>
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} className="muted" style={{ padding: '8px 12px', borderRadius: 999 }}>{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="container" style={{ paddingTop: 'min(12vh, 80px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <p className="muted" style={{ letterSpacing: 2, textTransform: 'uppercase' }}>AI Engineer • Data Scientist</p>
        <h1 style={{ marginTop: 16 }}>Najih Nowshad</h1>
        <p style={{ marginTop: 16, maxWidth: 760 }}>
          Building intelligent systems that predict, understand, and delight. Experienced across Python, FastAPI,
          TensorFlow, scikit‑learn, and modern data pipelines. Passionate about leveraging AI for real‑world impact.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="mailto:najihnowshad@gmail.com"><FiMail/> Contact</a>
          <a className="btn ghost" href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin/> LinkedIn</a>
          <a className="btn ghost" href="https://github.com" target="_blank" rel="noreferrer"><FiGithub/> GitHub</a>
        </div>
      </motion.div>
    </section>
  )
}

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <motion.li
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ listStyle: 'none', display: 'grid', gap: 8 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <strong>{item.role}</strong>
        <span className="muted">{item.company} • {item.date}</span>
      </div>
      <ul style={{ marginLeft: 18, display: 'grid', gap: 6 }}>
        {item.bullets.map((b, i) => (
          <li key={i} className="muted">{b}</li>
        ))}
      </ul>
    </motion.li>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="container">
      <div style={{ display: 'grid', gap: 20 }}>
        <h2>Experience</h2>
        <ul style={{ display: 'grid', gap: 16, padding: 0 }}>
          {experiences.map((e, i) => (
            <ExperienceItem key={i} item={e} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <strong>{p.title}</strong>
        <span className="muted">{p.org} {p.date ? `• ${p.date}` : ''}</span>
      </div>
      <ul style={{ marginTop: 10, marginLeft: 18, display: 'grid', gap: 6 }}>
        {p.bullets.map((b, i) => <li key={i} className="muted">{b}</li>)}
      </ul>
    </motion.div>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="container">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <h2>Projects</h2>
        <a className="btn" href="#">All repos</a>
      </div>
      <div style={{ display: 'grid', gap: 16, marginTop: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {projects.map((p, i) => <ProjectCard key={i} p={p}/>) }
      </div>
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="btn" style={{ borderRadius: 999, padding: '8px 12px' }}>{children}</span>
}

function SkillsSection() {
  return (
    <section id="skills" className="container">
      <h2>Skills</h2>
      <div style={{ display: 'grid', gap: 18, marginTop: 12 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{skills.core.map(s => <Pill key={s}>{s}</Pill>)}</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{skills.stacks.map(s => <Pill key={s}>{s}</Pill>)}</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{skills.web.map(s => <Pill key={s}>{s}</Pill>)}</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{skills.data.map(s => <Pill key={s}>{s}</Pill>)}</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{skills.analytics.map(s => <Pill key={s}>{s}</Pill>)}</div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section id="education" className="container compact">
      <h2>Education</h2>
      <div className="card" style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <strong>B.Tech, Artificial Intelligence and Data Science</strong>
          <span className="muted">MES College of Engineering Kuttippuram • Nov 2020 – Jun 2024</span>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="container compact" style={{ borderTop: '1px solid var(--outline)', paddingTop: 20, marginTop: 30, marginBottom: 40 }}>
      <p className="muted">© {new Date().getFullYear()} Najih Nowshad. Built with React + Vite.</p>
    </footer>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  useMemo(() => {
    const handle = (e: Event) => {
      const t = e.target as HTMLAnchorElement
      if (t.matches('a[href^="#"]')) {
        const id = t.getAttribute('href')!.slice(1)
        const el = document.getElementById(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', handle)
    return () => document.removeEventListener('click', handle)
  }, [])

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Nav/>
      <Hero/>
      <ExperienceSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <EducationSection/>
      <Footer/>
    </>
  )
}

export default App
