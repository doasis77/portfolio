import {
  FEATURED,
  CASE_STUDIES,
  PROJECTS,
  SKILLS,
  CYBERSECURITY,
  ARTICLES,
  PINNED_REPOS,
} from "./data.js";

/* ── Featured project visuals (CSS mockups) ── */
function projectVisual(type) {
  const visuals = {
    signtalk: `
      <div class="mock mock-signtalk">
        <div class="mock-cam">
          <div class="mock-hand">
            <span class="landmark"></span><span class="landmark"></span><span class="landmark"></span>
            <span class="landmark"></span><span class="landmark"></span>
          </div>
        </div>
        <div class="mock-output">
          <span class="mock-label">Recognised</span>
          <span class="mock-sign">Thumbs Up</span>
          <span class="mock-translated">→ "Approval / Good job"</span>
        </div>
      </div>`,
    scars: `
      <div class="mock mock-scars">
        <div class="mock-map">
          <span class="mock-pin mock-pin-alert"></span>
          <span class="mock-pin mock-pin-res"></span>
        </div>
        <div class="mock-incident">
          <span class="mock-alert-badge">Alert</span>
          <span class="mock-incident-title">Power outage reported</span>
          <span class="mock-incident-meta">Citizen · 2 min ago</span>
        </div>
      </div>`,
    canteenhub: `
      <div class="mock mock-canteenhub">
        <div class="mock-menu">
          <span class="mock-item">🍔 Burger · $8.99</span>
          <span class="mock-item">🍕 Pizza · $12.99</span>
          <span class="mock-item">🥗 Salad · $7.99</span>
        </div>
        <div class="mock-cart">
          <span class="mock-label">Cart</span>
          <span class="mock-cart-total">2 items · $21.98</span>
        </div>
      </div>`,
  };
  return visuals[type] || "";
}

function featureTag(f) {
  if (f.status === "planned") return `<span class="feature-tag planned">${f.name} <em>Planned</em></span>`;
  if (f.status === "in-dev") return `<span class="feature-tag in-dev">${f.name} <em>In Dev</em></span>`;
  return `<span class="feature-tag">${f.name}</span>`;
}

function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  grid.innerHTML = FEATURED.map((p, i) => `
    <article class="featured-card ${i === 0 ? "featured-primary" : ""}" style="--accent:${p.accent}">
      <div class="featured-visual">${projectVisual(p.visual)}</div>
      <div class="featured-body">
        <div class="featured-meta">
          ${p.status ? `<span class="badge badge-dev">${p.status}</span>` : ""}
          ${p.private ? `<span class="badge badge-private">Private Repo</span>` : ""}
        </div>
        <h3>${p.title}</h3>
        <p class="featured-sub">${p.subtitle}</p>
        <p class="featured-desc">${p.description}</p>
        <div class="featured-features">
          ${p.features.map(featureTag).join("")}
        </div>
        <div class="tag-row">
          ${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="featured-actions">
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm">Live Demo</a>` : ""}
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">GitHub</a>
          <button type="button" class="btn btn-ghost btn-sm case-study-btn" data-case="${p.id}">Case Study</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".case-study-btn").forEach((btn) => {
    btn.addEventListener("click", () => openCaseStudy(btn.dataset.case));
  });
}

/* ── Case study modal ── */
const modal = document.getElementById("case-study-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

function openCaseStudy(id) {
  const cs = CASE_STUDIES[id];
  if (!cs || !modal) return;

  const sections = [
    ["Overview", cs.overview],
    ["Problem", cs.problem],
    ["My Role", cs.role],
    ["Technology", cs.technology.join(", ")],
    ["Architecture", cs.architecture],
    ["Key Features", cs.features],
    ["Challenges", cs.challenges],
    ["Solution", cs.solution],
    ["Results", cs.results],
    ["Lessons Learned", cs.lessons],
  ];

  modalContent.innerHTML = `
    <h2 id="modal-title">${cs.title} — Case Study</h2>
    ${cs.status ? `<span class="badge badge-dev">${cs.status}</span>` : ""}
    ${sections.map(([title, content], idx) => {
      const num = String(idx + 1).padStart(2, "0");
      if (Array.isArray(content)) {
        return `
          <section class="cs-section">
            <h3><span class="cs-num">${num}</span> ${title}</h3>
            <ul>${content.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>`;
      }
      return `
        <section class="cs-section">
          <h3><span class="cs-num">${num}</span> ${title}</h3>
          <p>${content}</p>
        </section>`;
    }).join("")}
    <section class="cs-section">
      <h3><span class="cs-num">11</span> Screenshots</h3>
      <p class="cs-placeholder">Project interface mockups are shown on the featured project card. Add screenshots to <code>assets/projects/${id}/</code> when available.</p>
    </section>
    <section class="cs-section cs-actions">
      <h3><span class="cs-num">12</span> Links</h3>
      <div class="featured-actions">
        ${cs.demo ? `<a href="${cs.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm">Live Demo</a>` : ""}
        <a href="${cs.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">GitHub</a>
      </div>
    </section>`;

  modal.showModal();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (modal?.open) {
    modal.close();
    document.body.style.overflow = "";
  }
}

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
modal?.addEventListener("cancel", () => {
  document.body.style.overflow = "";
});

/* ── More projects ── */
const FILTER_LABELS = {
  all: "All",
  ai: "AI / ML",
  web: "Web",
  mobile: "Mobile",
  backend: "Backend",
  security: "Cybersecurity",
  tools: "Tools",
};

function renderFilters() {
  const container = document.getElementById("project-filters");
  if (!container) return;

  container.innerHTML = Object.entries(FILTER_LABELS)
    .map(([key, label], i) =>
      `<button type="button" class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${key}" role="tab" aria-selected="${i === 0}">${label}</button>`
    ).join("");

  container.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderProjects(btn.dataset.filter);
    });
  });
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const filtered = filter === "all"
    ? PROJECTS
    : filter === "security"
      ? []
      : PROJECTS.filter((p) => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-filter">No projects in this category yet. Security-related work is covered in the <a href="#cybersecurity">Cybersecurity</a> section.</p>`;
    return;
  }

  grid.innerHTML = filtered.map((p) => `
    <article class="project-card">
      <div class="project-card-top">
        <h3>${p.title}</h3>
        <span class="status-badge status-${p.status.toLowerCase().replace(/\s/g, "-")}">${p.status}</span>
      </div>
      <p>${p.description}</p>
      <div class="tag-row">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="project-card-actions">
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">GitHub</a>
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Demo</a>` : ""}
      </div>
    </article>
  `).join("");
}

/* ── Cybersecurity ── */
function renderSecurity() {
  const grid = document.getElementById("security-grid");
  if (!grid) return;

  grid.innerHTML = CYBERSECURITY.map((cat) => `
    <article class="security-card">
      <h3>${cat.title}</h3>
      <ul>${cat.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

/* ── Skills ── */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  const categories = [
    ["Languages", SKILLS.languages],
    ["Frameworks", SKILLS.frameworks],
    ["AI / ML", SKILLS.ai],
    ["Databases", SKILLS.databases],
    ["Tools", SKILLS.tools],
    ["Cloud / Services", SKILLS.cloud],
  ];

  container.innerHTML = categories.map(([title, items]) => `
    <div class="skill-category">
      <h3>${title}</h3>
      <div class="badge-row">${items.map((s) => `<span class="skill-badge">${s}</span>`).join("")}</div>
    </div>
  `).join("");
}

/* ── Pinned repos ── */
const REPO_LOOKUP = {
  scars: { title: "SCARS", url: "https://github.com/doasis77/scars" },
  "sign-language-translator": { title: "SignTalk", url: "https://github.com/doasis77/sign-language-translator" },
  CanteenHub: { title: "CanteenHub", url: "https://github.com/doasis77/CanteenHub" },
  "AI-Rag-System-": { title: "AI RAG Chatbot", url: "https://github.com/doasis77/AI-Rag-System-" },
  "Events-Management": { title: "Events Management", url: "https://github.com/doasis77/Events-Management" },
};

function renderPinned() {
  const container = document.getElementById("pinned-repos");
  if (!container) return;

  container.innerHTML = PINNED_REPOS.map((name) => {
    const repo = REPO_LOOKUP[name] || { title: name, url: `https://github.com/doasis77/${name}` };
    return `<a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="pinned-repo">${repo.title}</a>`;
  }).join("");
}

/* ── Articles ── */
function renderArticles() {
  const grid = document.getElementById("articles-grid");
  if (!grid) return;

  grid.innerHTML = ARTICLES.map((a) => `
    <article class="article-card">
      <span class="badge badge-soon">${a.status}</span>
      <h3>${a.title}</h3>
    </article>
  `).join("");
}

/* ── Navbar ── */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-link");

  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 24);
    updateActiveNav();
  }, { passive: true });

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileMenu.hidden = open;
    toggle.classList.toggle("open", !open);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.hidden = true;
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.classList.remove("open");
    });
  });
}

function updateActiveNav() {
  const sections = ["about", "experience", "featured", "skills", "contact"];
  const scrollPos = window.scrollY + 120;

  let current = "";
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) current = id;
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href")?.slice(1);
    link.classList.toggle("active", href === current);
  });
}

/* ── Scroll reveal ── */
function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ── Contact form (mailto) ── */
function initContactForm() {
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:amegahbill@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderFilters();
  renderProjects();
  renderSecurity();
  renderSkills();
  renderPinned();
  renderArticles();
  initNavbar();
  initReveal();
  initContactForm();
});
