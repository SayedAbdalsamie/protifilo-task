import { useEffect, useRef } from 'react';
import { personal } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const headingRef = useRef(null);

  // Stagger the headline lines on mount
  useEffect(() => {
    const lines = headingRef.current?.querySelectorAll(`.${styles.line}`);
    if (!lines) return;
    lines.forEach((line, i) => {
      line.style.transitionDelay = `${i * 0.1 + 0.2}s`;
      requestAnimationFrame(() => line.classList.add(styles.lineVisible));
    });
  }, []);

  return (
    <section className={styles.hero} id="hero" aria-label="Introduction">
      <div className={`container ${styles.inner}`}>

        {/* Left Column — Main Content */}
        <div className={styles.content}>
          {/* Eyebrow label */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className="font-mono">{personal.title}</span>
          </div>

          {/* Display Headline */}
          <h1 className={styles.headline} ref={headingRef}>
            <span className={`${styles.lineWrapper} ${styles.line}`}>
              <span>Building</span>
            </span>
            <span className={`${styles.lineWrapper} ${styles.line}`}>
              <span>Intelligent</span>
            </span>
            <span className={`${styles.lineWrapper} ${styles.line}`}>
              <span>
                Systems<span className={styles.dot} aria-hidden="true">.</span>
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            {personal.summary}
          </p>

          {/* CTA Row */}
          <div className={styles.ctas}>
            <a href="#work" className="btn btn-primary">
              View Selected Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href={personal.cv} download className="btn btn-outline">
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          {/* Meta Tags */}
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.metaDot} aria-hidden="true" />
              {personal.location}
            </span>
            <span className={styles.metaItem}>
              <span className={styles.metaDot} aria-hidden="true" />
              Available for Opportunities
            </span>
            <span className={styles.metaItem}>
              <span className={styles.metaDot} aria-hidden="true" />
              ML · CV · NLP
            </span>
          </div>
        </div>

        {/* Right Column — Abstract Visual */}
        <div className={styles.visual} aria-hidden="true">
          <HeroVisual />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--fg-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Scroll
        </span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Abstract technical grid visual — pure CSS/SVG, no heavy libraries   */
/* ------------------------------------------------------------------ */
function HeroVisual() {
  const projects = ['ICMS', 'OCR Pipeline', 'Medical RAG', 'Crash Vision', 'Sentiment'];
  const stats = [
    { label: 'Model Accuracy', value: '85–99%' },
    { label: 'Latency', value: '≤0.8s' },
    { label: 'Deployed Apps', value: '5+' },
  ];

  return (
    <div className={styles.visualBox}>
      {/* Top label bar */}
      <div className={styles.vizHeader}>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Production Systems
        </span>
        <span className={styles.vizLive}>
          <span className={styles.vizDot} />
          Live
        </span>
      </div>

      {/* Project index list */}
      <div className={styles.vizList}>
        {projects.map((name, i) => (
          <div key={name} className={styles.vizRow}>
            <span className={styles.vizNum}>0{i + 1}</span>
            <span className={styles.vizName}>{name}</span>
            <span className={styles.vizBar}>
              <span
                className={styles.vizBarFill}
                style={{ width: `${[88, 74, 82, 65, 91][i]}%`, transitionDelay: `${i * 0.15 + 0.4}s` }}
              />
            </span>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className={styles.vizStats}>
        {stats.map(s => (
          <div key={s.label} className={styles.vizStat}>
            <span className={styles.vizStatValue}>{s.value}</span>
            <span className={styles.vizStatLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
