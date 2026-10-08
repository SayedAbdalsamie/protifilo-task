import { useState } from 'react';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CaseStudy from './CaseStudy';
import styles from './Work.module.css';

/* Minimal CSS-based project visuals — no fake screenshots */
function ProjectVisual({ project }) {
  const visuals = {
    icms: <IcmsVisual />,
    ocr: <OcrVisual />,
    rag: <RagVisual />,
    crash: <CrashVisual />,
    sentiment: <SentimentVisual />,
  };
  return visuals[project.id] || null;
}

export default function Work() {
  const [openCase, setOpenCase] = useState(null);
  const headerRef = useScrollReveal();

  return (
    <>
      <section className="section" id="work">
        <div className="container">
          <div className="section-header" ref={headerRef}>
            <span className="section-label">Selected Work</span>
            <span className="section-count font-mono">05 Projects</span>
          </div>

          <div className={styles.gallery}>
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setOpenCase(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {openCase && (
        <CaseStudy project={openCase} onClose={() => setOpenCase(null)} />
      )}
    </>
  );
}

function ProjectItem({ project, index, onOpen }) {
  const ref = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref}
      className={`reveal ${styles.project} ${isEven ? styles.projectNormal : styles.projectReverse}`}
      aria-label={`Project: ${project.name}`}
    >
      {/* Info Column */}
      <div className={styles.info}>
        <div className={styles.topMeta}>
          <span className={styles.number}>{project.number}</span>
          <span className={styles.category}>{project.category}</span>
        </div>

        <h2 className={styles.name}>{project.name}</h2>
        <h3 className={styles.subtitle}>{project.subtitle}</h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.slice(0, 5).map(tech => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={`btn btn-primary ${styles.caseBtn}`} onClick={onOpen}>
            View Case Study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Visual Column */}
      <div className={styles.visual}>
        <ProjectVisual project={project} />
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────
   CSS-BASED PROJECT VISUALS (no fake screenshots)
───────────────────────────────────────────────────────── */

function IcmsVisual() {
  return (
    <div className={styles.vizBase}>
      <div className={styles.vizLabel}>Architecture · ICMS Pipeline</div>
      <div className={styles.pipeline}>
        {['REST API', 'Transformer Classifier', 'ML Ensemble Filter', 'Gemini Auto-Reply'].map((node, i) => (
          <div key={node} className={styles.pipelineStep}>
            <div className={styles.pipelineNode}>{node}</div>
            {i < 3 && <div className={styles.pipelineArrow}>↓</div>}
          </div>
        ))}
      </div>
      <div className={styles.vizMeta}>Docker · Azure · Flask</div>
    </div>
  );
}

function OcrVisual() {
  const fields = [
    { label: 'Arabic Name', value: 'سيد محمد عبد السميع', accent: true },
    { label: 'National ID', value: '29901230104598', accent: true },
    { label: 'Address', value: 'Gesr Al Suez, Cairo' },
  ];
  return (
    <div className={styles.vizBase}>
      <div className={styles.vizLabel}>Document Intelligence · OCR Fields</div>
      <div className={styles.docCard}>
        <div className={styles.docHeader}>
          <div className={styles.docChip}>EGY-ID</div>
          <div className={styles.docScanLine} />
        </div>
        <div className={styles.docFields}>
          {fields.map(f => (
            <div key={f.label} className={`${styles.docField} ${f.accent ? styles.docFieldAccent : ''}`}>
              <span className={styles.docFieldLabel}>{f.label}</span>
              <span className={styles.docFieldValue}>{f.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.vizMeta}>PaddleOCR · OpenCV · Python</div>
    </div>
  );
}

function RagVisual() {
  const steps = [
    { label: 'Patient Query', pct: null },
    { label: 'Sentence Transformers', pct: null },
    { label: 'FAISS Retrieval', pct: '87% Intent Acc.' },
    { label: 'Gemini Synthesis', pct: '−40% Ambiguity' },
  ];
  return (
    <div className={styles.vizBase}>
      <div className={styles.vizLabel}>RAG Pipeline · Medical Assistant</div>
      <div className={styles.ragFlow}>
        {steps.map((s, i) => (
          <div key={s.label} className={styles.ragStep}>
            <div className={styles.ragNode}>
              <span className={styles.ragIdx}>0{i + 1}</span>
              <span className={styles.ragLabel}>{s.label}</span>
              {s.pct && <span className={styles.ragBadge}>{s.pct}</span>}
            </div>
            {i < steps.length - 1 && <div className={styles.ragArrow} />}
          </div>
        ))}
      </div>
      <div className={styles.vizMeta}>FAISS · Sentence Transformers · Gemini API</div>
    </div>
  );
}

function CrashVisual() {
  const metrics = [
    { label: 'Classification Accuracy', value: '85%', pct: 85 },
    { label: 'Alert Latency', value: '<0.5s', pct: 20 },
    { label: 'Augmentation Robustness', value: 'High', pct: 92 },
  ];
  return (
    <div className={styles.vizBase}>
      <div className={styles.vizLabel}>VGG16 · Real-Time Collision Detection</div>
      <div className={styles.metricsChart}>
        {metrics.map(m => (
          <div key={m.label} className={styles.metricRow}>
            <span className={styles.metricLabel}>{m.label}</span>
            <div className={styles.metricTrack}>
              <div className={styles.metricFill} style={{ width: `${m.pct}%` }} />
            </div>
            <span className={styles.metricVal}>{m.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.vizMeta}>VGG16 · OpenCV · TensorFlow · Transfer Learning</div>
    </div>
  );
}

function SentimentVisual() {
  const bars = [
    { label: 'Positive', value: 62, color: 'var(--accent)' },
    { label: 'Negative', value: 22, color: 'var(--accent)' },
    { label: 'Neutral', value: 16, color: 'var(--fg-muted)' },
  ];
  return (
    <div className={styles.vizBase}>
      <div className={styles.vizLabel}>Bilingual Sentiment · Arabic / English</div>
      <div className={styles.sentimentChart}>
        <div className={styles.sentBars}>
          {bars.map(b => (
            <div key={b.label} className={styles.sentBar}>
              <div
                className={styles.sentBarFill}
                style={{ height: `${b.value}%`, background: b.color }}
              />
              <span className={styles.sentBarLabel}>{b.label}</span>
              <span className={styles.sentBarVal}>{b.value}%</span>
            </div>
          ))}
        </div>
        <div className={styles.sentMeta}>Live Dashboard · SQL · Flask</div>
      </div>
      <div className={styles.vizMeta}>NLP · Flask · SQL · Bilingual Processing</div>
    </div>
  );
}
