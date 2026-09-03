/**
 * Portfolio JavaScript Engine
 * Barthola Anselia Nisi - Software Engineer | Full-Stack Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initNavbarScroll();
  initProjects();
  initCertifications();
  initPublications();
  initProjectModal();
  initContactForm();
  initClipboardCopy();
});

/* --- Theme Management --- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('ban_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ban_theme', theme);

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  if (theme === 'light') {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
  } else {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
  }
}

/* --- Mobile Navigation --- */
function initMobileNav() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (!mobileBtn || !navLinks) return;

  mobileBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    mobileBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close nav on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', false);
    });
  });
}

/* --- Sticky Navbar & Section Spy --- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Intersection Observer for active nav highlighting
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --- Projects Showcase --- */
function initProjects() {
  const container = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  renderProjects(PROJECTS_DATA);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(PROJECTS_DATA);
      } else {
        const filtered = PROJECTS_DATA.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });
}

function renderProjects(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No projects found for this category.</p>`;
    return;
  }

  container.innerHTML = projects.map(proj => {
    const techPills = proj.tags.slice(0, 5).map(t => `<span class="tech-pill">${t}</span>`).join('');
    const isPatent = proj.badge.toLowerCase().includes('patent');
    return `
      <div class="project-card" data-category="${proj.category}">
        <div class="project-card-top">
          <span class="project-badge-tag ${isPatent ? 'patent-badge' : ''}">
            ${isPatent ? '★ ' : ''}${proj.badge}
          </span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.shortDesc}</p>
          <div class="project-tech-pills">
            ${techPills}
            ${proj.tags.length > 5 ? `<span class="tech-pill">+${proj.tags.length - 5} more</span>` : ''}
          </div>
        </div>
        <div class="project-footer">
          <button class="project-details-btn" onclick="openProjectModal('${proj.id}')">
            <span>View Architecture & Details</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* --- Project Modal Handling --- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

window.openProjectModal = function(projectId) {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body-content');
  if (!modal || !modalContent || typeof PROJECTS_DATA === 'undefined') return;

  const proj = PROJECTS_DATA.find(p => p.id === projectId);
  if (!proj) return;

  const highlightsHtml = proj.highlights.map(h => `
    <li style="margin-bottom: 0.5rem; display: flex; gap: 0.6rem; align-items: flex-start;">
      <span style="color: var(--accent-primary); font-weight: bold;">▹</span>
      <span>${h}</span>
    </li>
  `).join('');

  const tagsHtml = proj.tags.map(t => `
    <span class="skill-badge" style="font-size: 0.8rem;">${t}</span>
  `).join('');

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="project-badge-tag">${proj.badge}</span>
      <h2 style="font-size: 1.75rem; font-weight: 800; margin-top: 0.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">${proj.title}</h2>
      <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6;">${proj.shortDesc}</p>
    </div>

    <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-secondary); margin-bottom: 0.5rem;">System Architecture Flow</h4>
      <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text-primary); word-break: break-word; line-height: 1.5;">${proj.architecture}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-primary);">Key Architectural Highlights & Implementation</h4>
      <ul style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
        ${highlightsHtml}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 1rem;">
      <h4 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-emerald); margin-bottom: 0.25rem;">Engineering Impact / Metric</h4>
      <p style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary); margin: 0;">${proj.metrics}</p>
    </div>

    <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color); display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: flex-end;">
      <a href="${proj.githubUrl || 'https://github.com/codenisi'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.5rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>View Project Repository</span>
      </a>
      <button class="btn btn-primary btn-sm" onclick="closeModal(); document.getElementById('contact').scrollIntoView({behavior:'smooth'});">
        <span>Discuss Architecture</span>
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* --- Certifications Rendering --- */
function initCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container || typeof CERTIFICATIONS_DATA === 'undefined') return;

  const iconMap = {
    cloud: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    network: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    bot: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg>`,
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
  };

  container.innerHTML = CERTIFICATIONS_DATA.map(cert => `
    <div class="cert-card">
      <div class="cert-icon">
        ${iconMap[cert.icon] || iconMap.shield}
      </div>
      <div class="cert-info">
        <span class="cert-year">${cert.year} • ${cert.category}</span>
        <h4>${cert.title}</h4>
        <p>${cert.issuer}</p>
      </div>
    </div>
  `).join('');
}

/* --- Research Publications Rendering --- */
function initPublications() {
  const container = document.getElementById('publications-list');
  if (!container || typeof PUBLICATIONS_DATA === 'undefined') return;

  container.innerHTML = PUBLICATIONS_DATA.map(pub => `
    <div class="pub-card">
      <div>
        <span class="pub-tag">${pub.tag}</span>
        <h4 class="pub-title">${pub.title}</h4>
        <p class="pub-journal">${pub.journal}</p>
        <p class="pub-desc">${pub.description}</p>
      </div>
      <div style="margin-top: 1.25rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 700; color: var(--accent-secondary);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        <span>Peer-Reviewed Journal Publication</span>
      </div>
    </div>
  `).join('');
}

/* --- Clipboard Copy Utilities --- */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('[data-copy-target]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.getAttribute('data-copy-target');
      if (!targetText) return;

      navigator.clipboard.writeText(targetText)
        .then(() => {
          showToast(`Copied "${targetText}" to clipboard!`);
        })
        .catch(() => {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = targetText;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast(`Copied to clipboard!`);
        });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --- Contact Form Handling --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name')?.value.trim();
    const email = document.getElementById('sender-email')?.value.trim();
    const subject = document.getElementById('sender-subject')?.value.trim() || 'Software Engineer Opportunity';
    const message = document.getElementById('sender-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    const mailtoUrl = `mailto:Vbartholanisi@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoUrl;
    showToast('Opening default email client...');
  });
}
