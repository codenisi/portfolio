/**
 * Portfolio Projects & Publications Data
 * Barthola Anselia Nisi - Software Engineer | Full-Stack Developer
 */

const PROJECTS_DATA = [
  {
    id: "smart-resume-analyzer",
    title: "Smart Resume Analyzer",
    category: "python",
    badge: "Python • Flask • NLP",
    shortDesc: "Intelligent document-processing web application that analyzes resumes, extracts candidate competencies, and scores matches against job descriptions.",
    featured: true,
    tags: ["Python", "Flask", "Flask-SQLAlchemy", "spaCy", "NLTK", "PyPDF2", "python-docx", "ReportLab", "SQLite/MySQL"],
    highlights: [
      "Engineered automated resume parsing supporting both PDF and DOCX document formats.",
      "Implemented NLP pipelines using spaCy and NLTK to identify and match candidate skills with job requisites.",
      "Built user authentication and role-based dashboard for recruiters and candidates.",
      "Generated downloadable, structured PDF analysis reports dynamically utilizing ReportLab.",
      "Persisted structured applicant data, extracted entities, and scores with Flask-SQLAlchemy."
    ],
    architecture: "Client (Bootstrap / Modern Web UI) ➔ Flask REST Endpoints ➔ PyPDF2/python-docx Ingestion ➔ spaCy/NLTK Entity & Skill Extractor ➔ ReportLab PDF Generator ➔ Flask-SQLAlchemy DB",
    metrics: "Automates multi-page resume screening in seconds with structured entity scoring",
    githubUrl: "https://github.com/codenisi/RESUME-ANALYZER"
  },
  {
    id: "teachers-timetable-system",
    title: "Teachers Automatic Timetable Management System",
    category: "java",
    badge: "Java • MySQL • RBAC",
    shortDesc: "Academic resource planning system featuring algorithmic clash detection, teacher workload balancing, and strict role-based access control.",
    featured: true,
    tags: ["Java", "MySQL", "HTML5", "CSS3", "JavaScript", "RBAC", "DBMS Design"],
    highlights: [
      "Engineered robust role-based authentication separating department heads, faculty, and administrators.",
      "Designed and normalized relational database schemas in MySQL ensuring ACID compliance and data integrity.",
      "Implemented conflict-detection routines preventing classroom, faculty, and timeslot overlaps.",
      "Created an intuitive schedule visualization interface for individual instructors and departments."
    ],
    architecture: "Web Frontend ➔ Java Backend Business Logic ➔ Conflict Detection Module ➔ MySQL Relational Storage",
    metrics: "Eliminated manual scheduling clashes and accelerated schedule dissemination across academic terms",
    githubUrl: "https://github.com/codenisi/Teachers-automatic"
  },
  {
    id: "on-road-breakdown-assistance",
    title: "On-Road Vehicle Breakdown Assistance System",
    category: "php",
    badge: "PHP • MySQL • Bootstrap",
    shortDesc: "Real-time emergency roadside assistance coordination portal connecting stranded motorists with certified local mechanics and towing services.",
    featured: true,
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Responsive UI", "REST Workflows"],
    highlights: [
      "Built a web-based service dispatch system managing real-time roadside breakdown requests.",
      "Implemented multi-tier user verification and access control for vehicle owners, mechanics, and dispatchers.",
      "Structured order and service status tracking with live updates from request submission to job resolution.",
      "Designed mobile-responsive UI with Bootstrap to ensure seamless experience on roadside smartphones."
    ],
    architecture: "Responsive Mobile/Desktop UI ➔ PHP Request Router & Validation ➔ Service Dispatch Engine ➔ MySQL DB",
    metrics: "Reduced service response times and provided transparent ticket tracking for emergency roadside incidents",
    githubUrl: "https://github.com/codenisi/On-road-vehicle-break-down"
  },
  {
    id: "fresh-to-farm-dairy",
    title: "Fresh to Farm – Dairy Product Management System",
    category: "php",
    badge: "PHP • MySQL • E-Commerce",
    shortDesc: "End-to-end farm-to-door dairy inventory and supply-chain portal featuring direct customer ordering, vendor tracking, and secure information management.",
    featured: false,
    tags: ["PHP", "MySQL", "Bootstrap", "CRUD", "Data Security", "Session Management"],
    highlights: [
      "Engineered secure customer and vendor management modules with encrypted sessions and credential handling.",
      "Implemented real-time inventory tracking for perishable dairy commodities.",
      "Built order lifecycle management from cart checkout through fulfillment and invoice generation.",
      "Applied defensive security practices guarding sensitive customer addresses and transaction logs."
    ],
    architecture: "Client Interface ➔ PHP Controller & Session Layer ➔ Order Processing Module ➔ MySQL Relational DB",
    metrics: "Streamlined daily subscription orders and minimized perishables wastage through automated stock tracking",
    githubUrl: "https://github.com/codenisi/Fresh-to-farm-dairy-products"
  },
  {
    id: "hybrid-iot-smart-library",
    title: "Hybrid IoT Smart Library Management System",
    category: "iot",
    badge: "IoT • Hardware & Web • Patent-Associated",
    shortDesc: "Next-generation library inventory ecosystem integrating IoT hardware sensors with web-based catalog management, associated with an official patent filing.",
    featured: true,
    tags: ["IoT Hardware", "Microcontrollers", "RFID / Sensors", "Python / Web API", "MySQL", "Patent-Associated"],
    highlights: [
      "Contributed to the hardware-software hybrid architecture for automated shelf inventory tracking.",
      "Designed real-time sensor and tag-reading telemetry reporting book locations and shelf misplacements.",
      "Interfaced embedded microcontroller communication with centralized server and database records.",
      "Co-authored technical documentation and functional schemas associated with an official patent filing."
    ],
    architecture: "RFID / Sensor Node Grid ➔ Microcontroller Gateway ➔ Web API Service ➔ Central Database & Admin Portal",
    metrics: "Associated with an official patent filing; enables instantaneous shelf auditing without manual scans",
    githubUrl: "https://github.com/codenisi"
  }
];

const PUBLICATIONS_DATA = [
  {
    title: "A Study on Law Enforcement Identification System Using Deep Learning",
    journal: "International Journal of Novel Research and Development (IJNRD)",
    tag: "Deep Learning • Law Enforcement",
    description: "Explores neural network architectures and deep learning techniques for automated facial identification and biometric indexing to aid modern investigative agencies."
  },
  {
    title: "Designing a Web Blog Poster Using Random Forest & Decision Trees",
    journal: "Journal of Emerging Technologies and Innovative Research (JETIR)",
    tag: "Machine Learning • Web Publishing",
    description: "Analyzes predictive content classification and audience engagement models using Random Forest and Decision Tree ensembles for automated web publishing workflows."
  },
  {
    title: "AI-Enabled Governance in Cryptocurrency Communities",
    journal: "International Journal of Innovative Science and Research Technology (IJISRT)",
    tag: "AI • Decentralized Systems • Governance",
    description: "Investigates autonomous moderation, fraud mitigation, and consensus verification frameworks powered by artificial intelligence within decentralized tokenized networks."
  }
];

const CERTIFICATIONS_DATA = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    icon: "cloud",
    category: "Cloud Computing"
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    year: "2024",
    icon: "network",
    category: "Networking & Infrastructure"
  },
  {
    title: "Database Management System (DBMS)",
    issuer: "NPTEL (IIT)",
    year: "2024",
    icon: "database",
    category: "Database Engineering"
  },
  {
    title: "UiPath Studio: Automation Development",
    issuer: "UiPath Academy",
    year: "2024",
    icon: "bot",
    category: "RPA & Automation"
  },
  {
    title: "Cyber Psychology Certification",
    issuer: "Professional Institution",
    year: "2024",
    icon: "shield",
    category: "Human Factors & Security"
  }
];
