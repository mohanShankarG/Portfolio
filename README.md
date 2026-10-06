# Mohan Shankar G - Professional Engineering Portfolio

A modern, high-performance portfolio website built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons** showcasing the work and credentials of **Mohan Shankar G** (Full Stack Web Developer & AI Engineer).

---

## 🌟 Key Features

- **Hero & Live Availability**:
  - Interactive typewriter effect cycling through core specializations.
  - Quick contact badges with location (Nidadavole, AP, India), email, phone, and direct links to GitHub & LinkedIn.
  - Active status pill ("Available for Full-time Roles & High-Impact Opportunities").
- **Interactive Technical Capabilities**:
  - Categorized tech stack covering Frontend (React, Vite, JS ES6+), Backend (Node.js, Express, REST APIs, JWT, RBAC, Cron Jobs), Databases (PostgreSQL, MongoDB, Redis, Prisma ORM), AI & Computer Vision (Python, YOLOv11, PyTorch, BoT-SORT, OpenCV), DevOps (Docker, Git, Vercel, Render), and Embedded Hardware (C/C++, Arduino).
  - Instant live keyword filtering across all skills and tags.
- **Featured Production Projects with Specifications Modal**:
  - **GujMarg -- Gujarat Government Road Safety & Complaint Management System**: Automated officer assignment, escalation workflows, daily officer ranking cron jobs, Web & Citizen Audit modules.
  - **Road Furniture Asset Detection System**: YOLOv11 highway video survey pipeline, Redis asynchronous task queue, chainage-based deduplication, PostgreSQL/Prisma integration.
  - **Nirupaa -- Fashion E-Commerce Platform**: React + Node + Express + MongoDB platform with Sharp, Multer, and Cloudinary image pipelines.
  - **Vehicle Detection & Tracking AI**: PyTorch, YOLO, BoT-SORT multi-object tracker, OpenCV video analytics.
  - **Embedded Robotics Suite**: Blind Man Wheelchair, Auto Robo Assistant, EV vehicle prototype.
- **Interactive System Architecture & Workflow Visualizer**:
  - Step-by-step visual exploration of GujMarg's citizen-to-officer escalation lifecycle and YOLOv11's video-to-chainage deduplication pipeline.
- **Experience Timeline & Education**:
  - Detailed milestones for Satra Service and Solutions, Synozon Technology, and Pantech R&D.
  - Andhra University B.Tech CSE degree & distinguished achievements (Best Trainee Certificate, Robotics presentations, Cricket championship).
- **Curriculum Vitae Viewer & PDF Download**:
  - Built-in formatted CV modal with 1-click download of `Mohan_Shankar_Resume.pdf` and browser print integration.
- **Interactive Contact Section**:
  - 1-click "Copy Email" and "Copy Phone" with animated feedback.
  - Live Indian Standard Time (IST) clock display.
  - Direct message form launching the user's mail client.
- **Theme & Aesthetics**:
  - Ultra-crisp typography (Plus Jakarta Sans & JetBrains Mono).
  - Modern dark mode with glowing accents and responsive mobile drawer.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Navigate to the project directory
cd d:\portfolio

# 2. Start the local Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

```bash
# Build the optimized production static files
npm run build
```

The production assets will be generated in `dist/`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the prompts.
3. Or push to GitHub and import the repository on [vercel.com](https://vercel.com).

### Deploy to GitHub Pages
1. Push `dist/` branch or configure GitHub Actions to build and deploy `dist/` on push.

### Deploy to Render / Netlify
- Build command: `npm run build`
- Publish directory: `dist`

---

## 📄 Included Assets
- `resume_source.tex`: Original LaTeX source of Mohan Shankar's resume.
- `public/Mohan_Shankar_Resume.pdf`: Resume PDF for direct download.
