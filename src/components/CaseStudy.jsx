import { useEffect, useRef } from 'react';
import styles from './CaseStudy.module.css';

export default function CaseStudy({ project, onClose }) {
  const drawerRef = useRef(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    drawerRef.current?.focus();
  }, []);

  return (
    <div className={styles.overlay} onClick={e => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-label={`Case study: ${project.name}`}>
      <div className={styles.drawer} ref={drawerRef} tabIndex="-1">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.num}>{project.number}</span>
            <span className={styles.cat}>{project.category}</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close case study">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className={styles.body}>
          <h2 className={styles.title}>{project.name}</h2>
          <p className={styles.titleSub}>{project.subtitle}</p>
          <div className={styles.roleLine}>
            <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Role
            </span>
            <span className={styles.roleVal}>{project.role}</span>
          </div>

          <div className={styles.divider} />

          <Section label="Problem">
            <p>{project.problem}</p>
          </Section>

          <Section label="Approach">
            <p>{project.approach}</p>
          </Section>

          <Section label="Architecture">
            <div className={styles.architecture}>
              {project.architecture.split('→').map((step, i, arr) => (
                <span key={i} className={styles.archStep}>
                  <span className={styles.archNode}>{step.trim()}</span>
                  {i < arr.length - 1 && <span className={styles.archArrow}>→</span>}
                </span>
              ))}
            </div>
          </Section>

          <Section label="Results">
            <p>{project.results}</p>
          </Section>

          <div className={styles.divider} />

          <Section label="Technology Stack">
            <div className={styles.techGrid}>
              {project.technologies.map(tech => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div className={styles.cSection}>
      <h3 className={styles.cSectionLabel}>{label}</h3>
      {children}
    </div>
  );
}
