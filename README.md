# Barthola Anselia Nisi — Professional Portfolio

> **Software Engineer | Full-Stack Developer | Python Developer**  
> *MCA Graduate (8.81 CGPA) &bull; PG Diploma in Cybersecurity & Digital Forensics (Rashtriya Raksha University)*

This repository contains the complete personal portfolio website and ATS-ready printable resume for **Barthola Anselia Nisi**.

---

## 🌟 Features

- **Zero External Dependencies**: Pure semantic HTML5, modern CSS3 (Custom Properties, Flexbox, Grid, Glassmorphism), and vanilla ES6+ JavaScript.
- **Dark / Light Theme Toggle**: Persistent theme state via `localStorage` with automated system theme preference fallback.
- **Interactive Project Showcase**: Filter projects by stack (*Python & NLP*, *Java*, *PHP*, *IoT & Patent*).
- **Architecture Deep Dive Modals**: Modal views explaining the system architecture flow, problem solved, highlights, and metrics for each project.
- **Cybersecurity & Forensics Spotlight**: Dedicated showcase of security tools and practical workflows (Wireshark, Burp Suite, OWASP ZAP, Metasploit, Autopsy, FTK Imager, Volatility 3).
- **Printable ATS Resume (`resume.html`)**: Built with dedicated `@media print` CSS so recruiters or you can click "Print / Save as PDF" (`Ctrl + P`) for a clean, perfectly structured resume.
- **One-Click Contact & Clipboard**: Quick-copy buttons for email and phone with feedback toast notifications, plus a pre-formatted contact form that opens in your default email client.

---

## 📁 Project Directory Structure

```
barthola-portfolio/
│
├── index.html              # Main interactive single-page portfolio
├── resume.html             # Clean printable / downloadable resume format
├── README.md               # Documentation and GitHub Pages deployment guide
│
├── css/
│   └── style.css           # Complete responsive styles, theme variables, animations
│
└── js/
    ├── projects-data.js    # Data source for all projects, publications, and certifications
    └── main.js             # Theme switcher, project filtering, modals, smooth scroll, clipboard
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Opening (No server needed)
Simply navigate to this folder and double-click `index.html` or `resume.html`. It will open instantly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Brave, Safari).

### Option 2: Using Any Lightweight HTTP Server
If you prefer running a local server:
- **VS Code Live Server**: Right click `index.html` and click `Open with Live Server`.
- **Python** (if installed):
  ```bash
  python -m http.server 3000
  ```
- **Node/npx** (if installed):
  ```bash
  npx serve .
  ```

---

## 🌐 How to Deploy to GitHub Pages

Since you already have a GitHub account at [github.com/codenisi](https://github.com/codenisi), you can host this portfolio completely free of charge on GitHub Pages:

1. Create a new repository on GitHub named `portfolio` (or `codenisi.github.io`).
2. Push all the files from this directory to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Barthola Anselia Nisi Portfolio"
   git branch -M main
   git remote add origin https://github.com/codenisi/portfolio.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** ➔ **Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your live portfolio will be deployed at:  
   `https://codenisi.github.io/portfolio/`

---

## 🛠️ How to Customize

- **Add or edit projects**: Open `js/projects-data.js` and add an object to `PROJECTS_DATA`. The cards and modal details update automatically!
- **Update contact info**: Open `index.html` and `resume.html` and update the email, phone, or links.
- **Add publications or certifications**: Open `js/projects-data.js` and update `PUBLICATIONS_DATA` or `CERTIFICATIONS_DATA`.
