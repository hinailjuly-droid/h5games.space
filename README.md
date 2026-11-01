# ✨ PromptVault — Premium AI Prompt Sharing & Discovery Platform

> A luxury, editorial-grade AI prompt library inspired by **[faymasprompt.in](https://faymasprompt.in/)**, built 100x more premium with **Next.js 16**, **Tailwind CSS**, and **Express.js**.

---

## 💎 Key Features

- **No-Login Experience (100% Zero Friction)**:
  - Users can browse, search, and copy any prompt without creating an account.
  - **Local Bookmarks (`localStorage`)**: Users can save / favorite prompts directly inside their browser, accessible anytime at `/saved`.
  - Upvote / like counter saved in `localStorage`.
- **Instant 1-Click Copy**:
  - Tactile copy feedback with visual checkmark animation and real-time copy counters.
- **Support for Leading Generative AI Models**:
  - **Midjourney v6.1 & Niji 6**
  - **FLUX.1 [dev] & Schnell**
  - **ChatGPT & DALL·E 3**
  - **Stable Diffusion XL**
- **Rich Prompt Inspector**:
  - Full prompt text with token highlighting
  - Negative prompt box with dedicated copy button
  - Parameter chips: Aspect Ratio (`--ar 16:9`, `4:5`, `1:1`), Stylize, Seed, CFG Scale
  - Direct "Try in ChatGPT" / "Try in Midjourney" outbound action links
- **Editorial Guides & Blog**:
  - In-depth prompt engineering tutorials and lighting guides embedded with copyable prompt blocks.
- **Open Contribution**:
  - Clean `/submit` prompt workflow for visitors to contribute tested prompts.

---

## 🛠️ Project Structure

```text
/frontend      - Next.js 16 Web App (App Router, Tailwind CSS, Lucide icons, Framer Motion)
/backend       - Express API, Mongoose models (Prompt, Category, Blog), Seed scripts
```

---

## 🚀 Getting Started

### 1. Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:3000`. Built-in curated fallback data ensures the site works immediately with zero configuration even if the backend database is offline.

### 2. Backend (Optional for persistent DB)
```bash
cd backend
npm install
npm run seed-prompts   # Seeds 12+ curated high-res prompts
npm run dev            # Starts API on http://localhost:5000
```

---

## 🎨 Routes

- `/` — Homepage with Hero search, AI model filter chips, and category pills
- `/prompt/[slug]` — Dedicated SEO prompt page with parameter inspector
- `/categories` — Browse all genres (Cinematic, Traditional Wear, Cyberpunk, Anime, etc.)
- `/trending` — Leaderboard of most copied and most liked prompts
- `/saved` — Personal bookmarked prompts stored locally in the browser
- `/blog` & `/blog/[slug]` — Prompt engineering guides & tutorials
- `/submit` — Open prompt submission form
