/* Portfolio data — sourced from actual GitHub repositories. Do not invent metrics. */

export const PROFILE = {
  name: "Bill Amegah",
  title: "Computer Science Graduate | Software Developer | AI & Cybersecurity",
  label: "Software Developer • AI • Cybersecurity",
  tagline: "I build practical software that solves real problems — from AI-powered accessibility tools and emergency response platforms to productivity and full-stack applications.",
  email: "amegahbill@gmail.com",
  github: "https://github.com/doasis77",
  linkedin: "https://linkedin.com/in/bill-amegah-3b799926a/",
  cvPath: "assets/cv.html",
  stats: {
    repos: "16+",
    languages: "8+",
    liveProjects: "3",
  },
};

export const FEATURED = [
  {
    id: "signtalk",
    title: "SignTalk",
    subtitle: "Bridging communication for the Deaf through AI",
    description:
      "An AI-powered sign language translation platform designed to support communication between Deaf and hearing users through real-time gesture recognition.",
    tech: ["Python", "Flask", "OpenCV", "MediaPipe", "JavaScript"],
    features: [
      { name: "Sign-to-Text", status: "live" },
      { name: "Gesture Recognition", status: "live" },
      { name: "User Authentication", status: "live" },
      { name: "Translation History", status: "live" },
      { name: "Text-to-Speech", status: "planned" },
      { name: "Talk-to-Sign", status: "planned" },
    ],
    github: "https://github.com/doasis77/sign-language-translator",
    demo: "https://signtalk-demo.vercel.app",
    visual: "signtalk",
    accent: "#7C5CFC",
  },
  {
    id: "scars",
    title: "SCARS",
    subtitle: "Smart Community Alert and Resource System",
    description:
      "A community-focused emergency reporting and resource coordination platform designed to help users report incidents and connect with relevant resources.",
    tech: ["React Native", "Expo", "Supabase", "PostgreSQL", "TypeScript"],
    features: [
      { name: "Emergency Reporting", status: "live" },
      { name: "Community Alerts", status: "live" },
      { name: "Resource Coordination", status: "live" },
      { name: "Role-based Dashboards", status: "live" },
      { name: "Risk Analysis (ML)", status: "live" },
    ],
    github: "https://github.com/doasis77/scars",
    demo: null,
    visual: "scars",
    accent: "#4F8CFF",
  },
  {
    id: "canteenhub",
    title: "CanteenHub",
    subtitle: "Campus canteen ordering made simple",
    description:
      "A full-stack campus canteen platform with menu browsing, cart management, order tracking, and loyalty points.",
    tech: ["Node.js", "PostgreSQL", "Neon", "JavaScript", "JWT"],
    features: [
      { name: "Menu & Cart", status: "live" },
      { name: "Order Tracking", status: "live" },
      { name: "Loyalty Points", status: "live" },
      { name: "JWT Auth", status: "live" },
    ],
    github: "https://github.com/doasis77/CanteenHub",
    demo: "https://canteenhub-demo.vercel.app",
    visual: "canteenhub",
    accent: "#F59E0B",
  },
];

export const CASE_STUDIES = {
  signtalk: {
    title: "SignTalk",
    overview:
      "SignTalk is a web application that translates hand gestures into text in real time using a webcam. It was developed as a final-year project focused on accessibility and practical AI.",
    problem:
      "Communication between Deaf and hearing communities can be difficult when interpreters or knowledge of sign language are unavailable.",
    role: "Sole developer — designed the gesture recognition pipeline, built the Flask backend, and created the web interface.",
    technology: ["Python", "Flask", "MediaPipe", "OpenCV", "JavaScript", "HTML/CSS", "SQLite"],
    architecture:
      "Webcam feed → MediaPipe hand landmark detection → feature extraction → gesture classification → text output displayed in the browser. User accounts and translation history stored via Flask-SQLAlchemy.",
    features: [
      "Live webcam-based gesture recognition",
      "Support for multiple gestures (A, B, D, V, L, Thumbs Up, I Love You, Wave)",
      "User registration and login",
      "Translation history with real-time feedback",
    ],
    challenges: [
      "Limited sign language training datasets for the target gestures",
      "Variation in lighting conditions affecting detection accuracy",
      "Background noise in webcam frames",
      "Maintaining real-time prediction latency on consumer hardware",
    ],
    solution:
      "Built a webcam-based gesture recognition pipeline using MediaPipe hand landmarks and machine-learning classification, with a Flask backend handling authentication and session data.",
    results:
      "Working prototype that recognises a set of defined gestures in real time through a browser-based interface. Suitable for demonstration and further development.",
    lessons: [
      "Computer vision pipelines need robust testing across varied environments",
      "Accessibility tools benefit from iterative user feedback early in development",
      "Separating detection, classification, and UI layers keeps the system maintainable",
    ],
    github: "https://github.com/doasis77/sign-language-translator",
    demo: "https://signtalk-demo.vercel.app",
  },
  scars: {
    title: "SCARS",
    overview:
      "SCARS (Smart Community Alert and Resource System) is a mobile-first platform for community emergency reporting, alert distribution, and resource coordination.",
    problem:
      "Communities often lack a structured way to report emergencies, notify relevant responders, and coordinate shared resources during incidents.",
    role: "Lead developer — designed the mobile application architecture, database schema, API integrations, and role-based user flows.",
    technology: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Expo Router",
    ],
    architecture:
      "Expo mobile app with Supabase for authentication, PostgreSQL database, row-level security policies, Edge Functions for notifications and ML inference, and offline-capable incident reporting with photo sync.",
    features: [
      "Role-based access (Citizen, Responder, Analyst, Admin)",
      "Incident reporting with location and media attachments",
      "Community alert broadcasting",
      "Resource assignment and tracking",
      "Operational maps with incident markers",
      "ML-based risk prediction (Supabase Edge Function)",
    ],
    challenges: [
      "Designing role-based permissions across multiple user types",
      "Handling offline incident reports with later sync",
      "Coordinating real-time notifications across user roles",
      "Building map interfaces that work on both native and web platforms",
    ],
    solution:
      "Built a Supabase-backed mobile app with RLS policies, database triggers for automated notifications, an offline outbox pattern for incident reports, and platform-split map components for native and web.",
    results:
      "Functional mobile application with multi-role dashboards, incident lifecycle management, and community alert capabilities.",
    lessons: [
      "Database triggers can reliably handle side effects like notifications without duplicating logic in app code",
      "Offline-first patterns matter for emergency reporting in areas with poor connectivity",
      "Strong typing with Supabase-generated types prevents many runtime errors",
    ],
    github: "https://github.com/doasis77/scars",
    demo: null,
  },
};

export const PROJECTS = [
  {
    name: "AI-Rag-System-",
    title: "AI RAG Chatbot",
    description: "Retrieval-Augmented Generation chatbot for document-based Q&A built in Python.",
    tech: ["Python", "RAG", "NLP"],
    category: "ai",
    status: "Complete",
    url: "https://github.com/doasis77/AI-Rag-System-",
    demo: null,
  },
  {
    name: "CanteenHub",
    title: "CanteenHub",
    description: "Campus canteen ordering platform with real-time tracking, loyalty points, and JWT authentication.",
    tech: ["Node.js", "PostgreSQL", "Neon", "JavaScript"],
    category: "web",
    status: "Complete",
    url: "https://github.com/doasis77/CanteenHub",
    demo: "https://canteenhub-demo.vercel.app",
  },
  {
    name: "Events-Management",
    title: "Events Management",
    description: "Events management frontend for creating, browsing, and managing events.",
    tech: ["JavaScript", "CSS", "HTML"],
    category: "web",
    status: "Deployed",
    url: "https://github.com/doasis77/Events-Management",
    demo: "https://events-management-sand.vercel.app",
  },
  {
    name: "Events-Backend",
    title: "Events Backend API",
    description: "RESTful backend API powering the Events Management platform.",
    tech: ["Node.js", "REST API"],
    category: "backend",
    status: "Deployed",
    url: "https://github.com/doasis77/Events-Backend",
    demo: "https://events-backend-blush.vercel.app",
  },
  {
    name: "computer-vision",
    title: "Computer Vision",
    description: "HSV-based color detection for images and live webcam feeds using Python and OpenCV.",
    tech: ["Python", "OpenCV"],
    category: "ai",
    status: "Complete",
    url: "https://github.com/doasis77/computer-vision",
    demo: null,
  },
  {
    name: "neural-networks",
    title: "Neural Networks",
    description: "Jupyter notebooks covering MNIST classification, Fashion-MNIST, and customer segmentation.",
    tech: ["Python", "Jupyter", "ML"],
    category: "ai",
    status: "Complete",
    demo: null,
    url: "https://github.com/doasis77/neural-networks",
  },
  {
    name: "raycom",
    title: "Raycom Web Dialer",
    description: "Web-based SIP dialer and billing platform with Express and PostgreSQL backend.",
    tech: ["SIP.js", "Express", "PostgreSQL", "Neon"],
    category: "web",
    status: "Complete",
    url: "https://github.com/doasis77/raycom",
    demo: null,
  },
  {
    name: "Vehicle-Requisition-System",
    title: "Vehicle Requisition System",
    description: "Employee vehicle requisition portal with department and date range capture.",
    tech: ["HTML", "CSS"],
    category: "web",
    status: "Complete",
    demo: "https://vehicle-requisition-system.vercel.app",
  },
  {
    name: "Stationery-Request-Form",
    title: "Stationery Request Form",
    description: "Corporate stationery request portal as a single-page HTML form.",
    tech: ["HTML", "CSS"],
    category: "tools",
    status: "Complete",
    demo: "https://stationery-request-form.vercel.app",
  },
  {
    name: "Mental-Health-Awareness-Event-Website",
    title: "Mental Health Awareness",
    description: "Event website promoting mental health awareness and education.",
    tech: ["HTML", "CSS"],
    category: "web",
    status: "Complete",
    url: "https://github.com/doasis77/Mental-Health-Awareness-Event-Website",
    demo: null,
  },
  {
    name: "Bill-s-Assignment",
    title: "Bill's Assignment",
    description: "JavaScript assignment demonstrating core web development concepts.",
    tech: ["JavaScript"],
    category: "web",
    status: "Complete",
    url: "https://github.com/doasis77/Bill-s-Assignment",
    demo: null,
  },
  {
    name: "Greeting",
    title: "Greeting Card",
    description: "Interactive digital greeting card built with JavaScript.",
    tech: ["JavaScript"],
    category: "web",
    status: "Complete",
    url: "https://github.com/doasis77/Greeting",
    demo: null,
  },
  {
    name: "hoen-scanner",
    title: "Hoen Scanner",
    description: "Flight scanner backend from Skyscanner's Forage program in Java.",
    tech: ["Java"],
    category: "backend",
    status: "Complete",
    url: "https://github.com/doasis77/hoen-scanner",
    demo: null,
  },
];

export const SKILLS = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  frameworks: ["React", "React Native", "Node.js", "Express", "Flask", "Expo"],
  ai: ["Scikit-learn", "OpenCV", "MediaPipe", "Machine Learning", "Computer Vision"],
  databases: ["PostgreSQL", "Neon", "Supabase", "SQLite"],
  tools: ["Git", "GitHub", "VS Code", "Linux", "Docker"],
  cloud: ["Supabase", "GitHub Pages", "Vercel"],
};

export const CYBERSECURITY = [
  {
    title: "Network Security",
    items: ["Linux networking", "TCP/IP", "SSH", "Firewalls", "Network fundamentals"],
  },
  {
    title: "Application Security",
    items: ["Authentication", "Authorization", "Secure APIs", "Input validation"],
  },
  {
    title: "System Security",
    items: ["Linux", "File permissions", "Users & groups", "sudo", "systemctl"],
  },
  {
    title: "Security Development",
    items: ["Secure coding", "API security", "Database security", "Access control"],
  },
];

export const ARTICLES = [
  {
    title: "Building SignTalk: Lessons from a Sign Language AI Project",
    status: "Coming Soon",
  },
  {
    title: "Using MediaPipe for Real-Time Hand Gesture Recognition",
    status: "Coming Soon",
  },
  {
    title: "Building a Community Emergency Response Platform",
    status: "Coming Soon",
  },
  {
    title: "Linux Security Fundamentals for Cybersecurity Roles",
    status: "Coming Soon",
  },
];

export const PINNED_REPOS = [
  "scars",
  "sign-language-translator",
  "CanteenHub",
  "AI-Rag-System-",
  "Events-Management",
];
