import { personal, experiences, skills, education, certifications } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Sections.module.css';

const Arrow = () => <span aria-hidden="true">↗</span>;
const CURRENT_YEAR = new Date().getFullYear();

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useScrollReveal();
  return <Tag ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</Tag>;
}

export function About() {
  const ref = useScrollReveal();
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header"><span className="section-label">02 / About</span><span className="section-count font-mono">Profile</span></div>
        <div className={`${styles.about} reveal`} ref={ref}>
          <h2>I build<br /><em>machine learning</em><br />systems.</h2>
          <div className={styles.aboutCopy}>
            <p>My work sits at the intersection of applied machine learning and dependable software. I turn messy, real-world data into useful systems across computer vision, NLP, and generative AI.</p>
            <p>With a background in Computer and Systems Engineering, I care about the full path from an experiment to a deployed product: clear interfaces, measurable results, and models that solve the problem they were designed for.</p>
            <div className={styles.aboutFacts}><span>Computer Vision</span><span>NLP &amp; RAG</span><span>Model Deployment</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header"><span className="section-label">03 / Experience</span><span className="section-count font-mono">2024—2026</span></div>
        <div className={styles.experienceList}>
          {experiences.map((item, index) => <Reveal as="article" className={styles.experience} delay={index * 100} key={item.id}>
            <div className={styles.year}>{item.year}</div>
            <div><p className={styles.eyebrow}>{item.period}</p><h3>{item.role}</h3><p className={styles.company}>{item.company}</p><ul>{item.points.slice(0, 2).map((point) => <li key={point}>{point}</li>)}</ul></div>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header"><span className="section-label">04 / Capabilities</span><span className="section-count font-mono">04 disciplines</span></div>
        <div className={styles.skillsGrid}>{skills.map((skill, index) => <Reveal as="article" key={skill.id} className={styles.skill} delay={index * 90}>
          <span className={styles.skillNumber}>{skill.number}</span><h3>{skill.domain}</h3><div className={styles.skillItems}>{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
        </Reveal>)}</div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header"><span className="section-label">05 / Education</span><span className="section-count font-mono">{education.period}</span></div>
        <Reveal className={styles.education}><div><p className={styles.eyebrow}>Engineering foundation</p><h2>{education.degree}</h2><p className={styles.company}>{education.university} · {education.faculty}</p></div><div className={styles.educationMeta}><strong>{education.gpa}</strong><span>{education.grade}</span><span>{education.languages.join(' · ')}</span></div></Reveal>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header"><span className="section-label">06 / Certifications</span><span className="section-count font-mono">Archive</span></div>
        <div className={styles.certList}>{certifications.map((cert, index) => <Reveal className={styles.cert} delay={index * 80} key={cert.id}><span className="font-mono">{cert.year}</span><strong>{cert.name}</strong><span>{cert.issuer}</span><Arrow /></Reveal>)}</div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container"><Reveal><p className="section-label">07 / Contact</p><h2>Let&apos;s build<br /><em>something useful.</em></h2><div className={styles.contactLinks}><a href={`mailto:${personal.email}`}>{personal.email} <Arrow /></a><a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={personal.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></Reveal></div>
    </section>
  );
}

export function Footer() {
  return <footer className={styles.footer}><div className="container"><span>{personal.name}</span><span>AI Engineer · Cairo, Egypt</span><span>© {CURRENT_YEAR}</span></div></footer>;
}
