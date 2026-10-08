// ============================================================
// PORTFOLIO DATA — SOURCE OF TRUTH (Extracted from CV)
// Sayed Mohammed — AI Engineer
// ============================================================

export const personal = {
  name: 'Sayed Mohammed',
  title: 'AI Engineer',
  location: 'Gesr Al Suez, Cairo, Egypt',
  email: 'abonars30@gmail.com',
  phone: '+201095937013',
  linkedin: 'https://www.linkedin.com/in/sayed-mohammed-085a94253/',
  github: 'https://github.com/Sayedabdalsamie',
  portfolio: 'https://portfolio-io-git-main-sayedabdalsamies-projects.vercel.app/',
  cv: '/Sayed_Mohammed_Resume.pdf',
  summary:
    'ML Engineer with hands-on experience in computer vision, NLP, and end-to-end model deployment. Built production-ready AI systems achieving 85–99% accuracy across real-world projects. Certified by Microsoft (DEPI), AMIT Learning, and DataCamp.',
};

export const experiences = [
  {
    id: 'uneeq',
    year: '2026',
    role: 'AI Engineer Intern',
    company: 'Uneeq Interns',
    period: 'March 2026',
    points: [
      'Developed and deployed 5 AI applications spanning computer vision and NLP domains.',
      'Achieved 85–92% model accuracy using CNN and Transformer architectures.',
      'Reduced RMSE by 20% through hyperparameter tuning and feature engineering.',
      'Built real-time inference systems with sub-second latency (≤0.8s) using FastAPI.',
    ],
  },
  {
    id: 'amit',
    year: '2025',
    role: 'Data Science & AI Intern',
    company: 'AMIT Learning',
    period: 'Feb 2025 – Oct 2025',
    points: [
      'Completed 243+ hour hands-on program covering ML, Deep Learning, Computer Vision, NLP, and MLOps.',
      'Worked with real-world datasets (5K+ samples), achieving model accuracy up to 99%.',
      'Gained practical experience in Docker and model deployment pipelines.',
    ],
  },
  {
    id: 'depi',
    year: '2024',
    role: 'Machine Learning Engineer Intern',
    company: 'DEPI — Microsoft Track',
    period: 'Apr 2024 – Oct 2024',
    points: [
      'Built and evaluated ML/DL models for classification and prediction using Python, TensorFlow, and PyTorch.',
      'Improved model performance by 15–20% via feature engineering and hyperparameter tuning.',
      'Developed end-to-end ML pipelines covering data preprocessing, training, and evaluation.',
      'Applied CNN, NLP, and Transformer architectures in real-world project scenarios.',
      'Gained practical experience in MLOps and model deployment workflows.',
    ],
  },
];

export const projects = [
  {
    id: 'icms',
    number: '01',
    name: 'ICMS — AI Module',
    shortName: 'ICMS',
    subtitle: 'Intelligent Issue Management System',
    role: 'Lead AI Engineer / Graduation Project',
    category: 'GenAI · NLP · MLOps',
    description:
      'Automated issue triage system integrating a Gemini-powered chatbot, transformer-based classifier, and ML ensemble text moderation layer. Designed and deployed as REST APIs containerized with Docker on Azure.',
    problem:
      'Enterprise support teams spend significant manual effort routing, categorizing, and moderating incoming issues. Delays in triage increase resolution time and reduce engineering productivity.',
    approach:
      'Built a multi-layer AI pipeline: a Transformer classifier for category detection, a Gemini API chatbot for automated first-response generation, and an ML ensemble filter to detect toxic or policy-violating submissions.',
    architecture:
      'Inbound request → Flask REST API → Transformer Classifier (category + priority) → ML Ensemble Moderation filter → Gemini LLM draft response → Docker container → Azure cloud deployment.',
    results:
      'Reduced manual issue categorization effort through fully automated prioritization pipelines. Enabled automated first-response drafting with Gemini API integration.',
    technologies: ['Python', 'Gemini API', 'Transformers', 'Scikit-learn', 'Flask', 'Docker', 'Azure', 'REST APIs'],
    tags: ['GenAI', 'Transformers', 'Cloud'],
  },
  {
    id: 'ocr',
    number: '02',
    name: 'ID Card OCR System',
    shortName: 'OCR Pipeline',
    subtitle: 'Bilingual Arabic/English Document Intelligence',
    role: 'ML Engineer',
    category: 'Computer Vision · Document AI',
    description:
      'End-to-end bilingual OCR pipeline using PaddleOCR to extract structured data from ID card images. Handles Arabic script and English text simultaneously with modular field-level processing.',
    problem:
      'Standard OCR systems fail on Arabic cursive script and mixed-language documents. Extracting structured fields from ID cards requires accurate bounding box detection and language-aware post-processing.',
    approach:
      'Applied PaddleOCR with custom field-level modular post-processing. Built regex-based normalization layers to extract names, addresses, national ID numbers, and issue dates from raw OCR output.',
    architecture:
      'Input image → Preprocessing (deskew, contrast enhancement) → PaddleOCR text detection (DBNet) → Recognition (CRNN) → Field-level post-processing → Structured JSON output.',
    results:
      'Significantly improved extraction accuracy across Arabic names, national ID numbers, and addresses from diverse photo captures of physical documents.',
    technologies: ['Python', 'PaddleOCR', 'OpenCV', 'Computer Vision', 'NumPy'],
    tags: ['Computer Vision', 'OCR', 'Bilingual'],
  },
  {
    id: 'rag',
    number: '03',
    name: 'AI Clinic Chatbot',
    shortName: 'Medical RAG',
    subtitle: 'Retrieval-Augmented Generation Medical Assistant',
    role: 'ML Engineer',
    category: 'RAG · NLP · Generative AI',
    description:
      'Medical decision-support chatbot using FAISS vector indexing and Sentence Transformers for context retrieval, grounded through Gemini API. Achieved 87% intent classification accuracy.',
    problem:
      'General LLMs generate hallucinated or vague answers for clinical symptom queries without authoritative literature grounding, reducing trust and safety in medical-adjacent applications.',
    approach:
      'Engineered a RAG pipeline: medical knowledge base embedded with Sentence Transformers into a FAISS index. Patient queries trigger sub-20ms semantic retrieval, grounding Gemini API responses in verified context.',
    architecture:
      'Patient query → Sentence Transformer embedding → FAISS top-k retrieval → Context grounding → Gemini API synthesis → Response with clinical disclaimers.',
    results: '87% intent classification accuracy. Reduced ambiguous responses by 40%. Improved resolution time by 30%.',
    technologies: ['Python', 'FAISS', 'Sentence Transformers', 'Gemini API', 'RAG', 'NLP'],
    tags: ['RAG', 'GenAI', 'NLP'],
  },
  {
    id: 'crash',
    number: '04',
    name: 'Crash Prediction System',
    shortName: 'Crash Vision',
    subtitle: 'Real-Time Collision Detection with VGG16',
    role: 'ML Engineer',
    category: 'Computer Vision · Safety Systems',
    description:
      'Real-time vehicular collision prediction system using VGG16 and OpenCV. Processes live video streams to generate sub-second risk alerts, achieving 85% classification accuracy.',
    problem:
      'Collision detection from dashcam or traffic camera footage requires high-accuracy real-time inference that generalizes across lighting conditions, speeds, and weather environments.',
    approach:
      'Fine-tuned VGG16 on traffic collision datasets via transfer learning. Applied heavy data augmentation (illumination, blur, velocity perturbation). OpenCV video pipeline handles frame extraction and alert dispatch.',
    architecture:
      'Video stream → OpenCV frame extraction → VGG16 inference (85% accuracy) → Collision probability threshold → Real-time alert dispatch.',
    results: '85% classification accuracy. Sub-second latency alert dispatch. Robust generalization via transfer learning and heavy augmentation.',
    technologies: ['Python', 'TensorFlow', 'VGG16', 'OpenCV', 'Transfer Learning', 'Computer Vision'],
    tags: ['Computer Vision', 'Deep Learning', 'Safety'],
  },
  {
    id: 'sentiment',
    number: '05',
    name: 'Twitter Sentiment System',
    shortName: 'Sentiment',
    subtitle: 'Bilingual Arabic/English Social Intelligence',
    role: 'ML Engineer',
    category: 'NLP · Web Engineering · Data',
    description:
      'End-to-end bilingual NLP pipeline for scraping, analyzing, and visualizing Twitter sentiment across Arabic and English content. Full Flask web app with interactive dashboards.',
    problem:
      'Monitoring brand sentiment in bilingual Arabic-English social media markets is complex: mixed scripts, informal dialects, and colloquial expressions break standard NLP pipelines.',
    approach:
      'Built a custom text normalization layer for Arabic dialects and English slang. Supervised sentiment classifier trained on labeled bilingual data. Full Flask application with SQL database integration.',
    architecture:
      'Twitter scraper → Bilingual text normalization → Sentiment classifier → SQL DB → Flask dashboard with real-time analytics.',
    results: 'Real-time bilingual sentiment tracking across Arabic and English social streams. Interactive visual dashboards for brand monitoring.',
    technologies: ['Python', 'Flask', 'NLP', 'SQL', 'Web Scraping', 'Data Visualization'],
    tags: ['NLP', 'Bilingual', 'Web'],
  },
];

export const skills = [
  {
    id: 'ml',
    number: '01',
    domain: 'Machine Learning',
    items: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Feature Engineering'],
  },
  {
    id: 'cv',
    number: '02',
    domain: 'Computer Vision',
    items: ['OpenCV', 'PaddleOCR', 'VGG16', 'CNN', 'Transfer Learning', 'Data Augmentation'],
  },
  {
    id: 'nlp',
    number: '03',
    domain: 'NLP / Generative AI',
    items: ['Transformers', 'NLP', 'RAG', 'FAISS', 'Sentence Transformers', 'Gemini API', 'LLMs'],
  },
  {
    id: 'ops',
    number: '04',
    domain: 'MLOps & Deployment',
    items: ['Docker', 'FastAPI', 'Flask', 'Azure', 'Google Cloud', 'REST APIs', 'MLOps Pipelines'],
  },
];

export const education = {
  degree: 'B.Sc. Computer and Systems Engineering',
  university: 'Zagazig University',
  faculty: 'Faculty of Engineering',
  period: '2020 – 2025',
  gpa: '2.9 / 4.0',
  grade: 'Good',
  languages: ['Arabic (Native)', 'English (Advanced)'],
};

export const certifications = [
  {
    id: 'uneeq-cert',
    name: 'AI Internship Credential',
    issuer: 'Uneeq Interns',
    year: 'March 2026',
  },
  {
    id: 'amit-cert',
    name: 'AI & Data Scientist Associate',
    issuer: 'AMIT Learning',
    year: 'October 2025',
  },
  {
    id: 'datacamp-cert',
    name: 'Data Scientist Associate',
    issuer: 'DataCamp',
    year: 'February 2025',
  },
  {
    id: 'depi-cert',
    name: 'Machine Learning Engineer',
    issuer: 'Microsoft / DEPI',
    year: 'October 2024',
  },
];
