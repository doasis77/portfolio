const PROJECTS = [
  {
    name: "scars",
    title: "SCARS",
    description: "Smart Community Alert and Response System — a real-time emergency platform with role-based access for citizens, responders, and admins. Expo mobile app with Supabase backend, offline support, maps, and ML risk inference.",
    language: "TypeScript",
    tags: ["React Native", "Expo", "Supabase", "PostgreSQL", "Maps"],
    category: "mobile",
    url: "https://github.com/doasis77/scars",
    updated: "2026-09-17",
    featured: true,
  },
  {
    name: "Scrolllock-",
    title: "Scrolllock",
    description: "A human performance ecosystem designed to make people distraction-proof. Full-stack productivity platform with TypeScript, mobile (Kotlin), and PostgreSQL.",
    language: "TypeScript",
    tags: ["TypeScript", "Kotlin", "PostgreSQL", "Productivity"],
    category: "tools",
    url: "https://github.com/doasis77/Scrolllock-",
    demo: "https://scrolllock.vercel.app",
    updated: "2026-09-17",
    featured: true,
    private: true,
  },
  {
    name: "AI-Rag-System-",
    title: "AI RAG Chatbot",
    description: "Retrieval-Augmented Generation AI chatbot built in Python. Enables intelligent document-based Q&A and conversational AI experiences.",
    language: "Python",
    tags: ["Python", "RAG", "AI", "NLP"],
    category: "ai",
    url: "https://github.com/doasis77/AI-Rag-System-",
    updated: "2026-04-24",
    featured: true,
  },
  {
    name: "sign-language-translator",
    title: "SignTalk",
    description: "Real-time sign language translator using webcam and MediaPipe. Translates hand gestures (A, B, D, V, L, Thumbs Up, I Love You, Wave) into text with user authentication and translation history.",
    language: "HTML",
    tags: ["Flask", "MediaPipe", "Computer Vision", "Python"],
    category: "ai",
    url: "https://github.com/doasis77/sign-language-translator",
    updated: "2025-07-18",
    featured: true,
  },
  {
    name: "CanteenHub",
    title: "CanteenHub",
    description: "Campus canteen ordering platform with real-time order tracking, loyalty points, dietary preferences, and JWT-authenticated user management. Full Node.js + PostgreSQL backend.",
    language: "JavaScript",
    tags: ["Node.js", "PostgreSQL", "JWT", "REST API"],
    category: "web",
    url: "https://github.com/doasis77/CanteenHub",
    updated: "2026-04-22",
    featured: true,
  },
  {
    name: "Events-Management",
    title: "Events Management",
    description: "Full-featured events management frontend for creating, browsing, and managing events. Deployed live on Vercel.",
    language: "JavaScript",
    tags: ["JavaScript", "CSS", "Events"],
    category: "web",
    url: "https://github.com/doasis77/Events-Management",
    demo: "https://events-management-sand.vercel.app",
    updated: "2024-12-16",
  },
  {
    name: "Events-Backend",
    title: "Events Backend API",
    description: "RESTful backend API powering the Events Management platform. Handles event CRUD, authentication, and data persistence.",
    language: "JavaScript",
    tags: ["Node.js", "REST API", "Backend"],
    category: "backend",
    url: "https://github.com/doasis77/Events-Backend",
    demo: "https://events-backend-blush.vercel.app",
    updated: "2024-12-14",
  },
  {
    name: "computer-vision",
    title: "Computer Vision",
    description: "HSV-based color detection for images and live webcam feeds. Python tool for identifying and isolating colors in real time.",
    language: "Python",
    tags: ["Python", "OpenCV", "Computer Vision"],
    category: "ai",
    url: "https://github.com/doasis77/computer-vision",
    updated: "2026-09-17",
  },
  {
    name: "neural-networks",
    title: "Neural Networks",
    description: "Jupyter notebook collection covering data analysis, customer segmentation, Fashion-MNIST classification, and building neural networks from scratch on MNIST.",
    language: "Jupyter Notebook",
    tags: ["Python", "TensorFlow", "MNIST", "ML"],
    category: "ai",
    url: "https://github.com/doasis77/neural-networks",
    updated: "2026-09-17",
  },
  {
    name: "raycom",
    title: "Raycom Web Dialer",
    description: "Web-based SIP dialer and billing platform. Browser calling via SIP.js with an Express + PostgreSQL backend for billing and live chat.",
    language: "HTML",
    tags: ["SIP.js", "Express", "PostgreSQL", "VoIP"],
    category: "web",
    url: "https://github.com/doasis77/raycom",
    updated: "2026-09-17",
  },
  {
    name: "Vehicle-Requisition-System",
    title: "Vehicle Requisition System",
    description: "Employee vehicle requisition portal for requesting company vehicles. Captures department, vehicle type, purpose, and date range with a clean responsive UI.",
    language: "HTML",
    tags: ["HTML", "CSS", "Forms"],
    category: "web",
    url: "https://github.com/doasis77/Vehicle-Requisition-System",
    updated: "2026-09-17",
  },
  {
    name: "Stationery-Request-Form",
    title: "Stationery Request Form",
    description: "Corporate stationery request portal — a single-page HTML form for employees to submit office supply requests with validation and responsive design.",
    language: "HTML",
    tags: ["HTML", "CSS", "Forms"],
    category: "tools",
    url: "https://github.com/doasis77/Stationery-Request-Form",
    updated: "2026-09-17",
  },
  {
    name: "Mental-Health-Awareness-Event-Website",
    title: "Mental Health Awareness",
    description: "Event website promoting mental health awareness. Informative, accessible design built to educate and engage visitors about mental wellness.",
    language: "HTML",
    tags: ["HTML", "CSS", "Events"],
    category: "web",
    url: "https://github.com/doasis77/Mental-Health-Awareness-Event-Website",
    updated: "2024-11-05",
  },
  {
    name: "Bill-s-Assignment",
    title: "Bill's Assignment",
    description: "JavaScript assignment project demonstrating core web development concepts and interactive UI patterns.",
    language: "JavaScript",
    tags: ["JavaScript", "Web"],
    category: "web",
    url: "https://github.com/doasis77/Bill-s-Assignment",
    updated: "2024-11-15",
  },
  {
    name: "Greeting",
    title: "Greeting Card",
    description: "Interactive digital greeting card built with JavaScript. A creative web project for sending personalized greetings.",
    language: "JavaScript",
    tags: ["JavaScript", "Creative"],
    category: "web",
    url: "https://github.com/doasis77/Greeting",
    updated: "2024-11-25",
  },
  {
    name: "hoen-scanner",
    title: "Hoen Scanner",
    description: "Flight scanner backend from Skyscanner's Forage program. Java-based project exploring backend engineering patterns for travel search.",
    language: "Java",
    tags: ["Java", "Backend", "Skyscanner"],
    category: "backend",
    url: "https://github.com/doasis77/hoen-scanner",
    updated: "2024-03-15",
  },
];

const SKILLS = [
  { name: "TypeScript", level: 90, color: "#3178c6" },
  { name: "JavaScript", level: 95, color: "#f7df1e" },
  { name: "Python", level: 85, color: "#3776ab" },
  { name: "React Native", level: 80, color: "#61dafb" },
  { name: "Node.js", level: 85, color: "#68a063" },
  { name: "PostgreSQL", level: 80, color: "#336791" },
  { name: "HTML / CSS", level: 95, color: "#e34f26" },
  { name: "Java", level: 65, color: "#b07219" },
  { name: "Machine Learning", level: 75, color: "#ff6f61" },
  { name: "Supabase", level: 75, color: "#3ecf8e" },
];

const LANG_COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  Java: "#b07219",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
  Kotlin: "#A97BFF",
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("project-grid");
  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  grid.innerHTML = filtered
    .map((p) => {
      const langColor = LANG_COLORS[p.language] || "#8b949e";
      return `
      <article class="project-card ${p.featured ? "featured" : ""}" data-category="${p.category}">
        ${p.featured ? '<span class="badge badge-featured">Featured</span>' : ""}
        ${p.private ? '<span class="badge badge-private">Private</span>' : ""}
        <div class="card-top">
          <h3>${p.title}</h3>
          <span class="lang-dot" style="background:${langColor}" title="${p.language}"></span>
        </div>
        <p class="card-desc">${p.description}</p>
        <div class="card-tags">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="card-footer">
          <span class="card-date">Updated ${formatDate(p.updated)}</span>
          <div class="card-links">
            ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="card-link demo">Live Demo ↗</a>` : ""}
            <a href="${p.url}" target="_blank" rel="noopener" class="card-link">GitHub ↗</a>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" style="width:${s.level}%;background:${s.color}"></div>
      </div>
    </div>`
  ).join("");
}

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  initFilters();
  initNav();
});
