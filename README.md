# A U R A  ®

*The Art of Understatement — Spring / Summer 2026 Collection*

A premium, high-fidelity luxury fashion e-commerce concept built for speed, elegance, and cinematic fluid interaction.

---

## Vision & Aesthetic

AURA is a digital editorial concept storefront defined by structural minimalist layouts and cinematic micro-interactions. The interface embraces a striking "noir" palette (#0F0F0F), clean typography scales using Inter and Playfair Display, and fluid image transitions designed to mimic browsing a physical luxury atelier boutique.

## Features

* Cinematic Navigation: Smart scroll-aware navigation that beautifully hides on down-scroll and reveals instantly on up-scroll for maximal content focus.
* Bleeding-Edge Performance: Architected using React 19 and compiled via Vite 6 for lightning-fast hot module replacement (HMR) and compilation.
* Next-Gen Layouts: Formatted natively using Tailwind CSS v4 engine layouts utilizing strict custom theme CSS layer injection variables.
* Fluid Motion Physics: Interactive cards that scale dynamically, utilizing high-performance viewport animations powered by motion/react.

## Tech Stack

* Framework: React 19
* Build Tool: Vite 6 (TypeScript)
* Styling: Tailwind CSS v4
* Animations: Motion (Framer Motion Engine)
* Icons: Lucide React
* AI Engine Integration: Ready-scaffolded with @google/genai context

---

## Getting Started

Follow these steps to pull down the project and boot your local server setup:

1. Clone the repository
git clone https://github.com/virajr7123/aura-e-commerece-test.git
cd aura-e-commerece-test

2. Install dependencies
npm install

3. Spin up the development server
npm run dev

The server will default to port 3000 (http://localhost:3000).

4. Build for Production
To bundle optimized components and check production types:
npm run build

---

## Deployment

This setup compiles out of the box cleanly into static web distributions. Here is how to launch it live instantly:

### Option A: Deployment via Vercel (Recommended)
1. Push your latest code changes safely onto your public GitHub repository.
2. Head to the Vercel Dashboard (https://vercel.com) and click "Add New Project".
3. Import this repository.
4. Vercel automatically detects the Vite configuration framework.
5. Leave settings default and press "Deploy".

### Option B: Deployment via Netlify
1. Connect your repository to your account dashboard over at Netlify.
2. Apply the following settings to your deployment terminal parameters:
   * Build Command: npm run build
   * Publish Directory: dist
3. Click "Deploy Site".

### Option C: Production Preview Testing Locally
If you want to view exactly how your production static build files look inside your local terminal environments before launching to a production server, run:
npm run preview

---

## Designed and developed with by Viraj Sawant.
