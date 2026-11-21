# XTRA Construction — Building & Engineering Excellence

A responsive, production-grade React + TypeScript application recreating the **XTRA Construction 2** corporate architectural showcase. The application features asymmetric overlapping geometry, 3D interactive flip cards, a filterable project gallery with modal lightboxes, client-side validated quote forms, interactive engineering showreel modals, and responsive mobile navigation.

Live Website: [https://vigneshmr747-cpu.github.io/Xtra-construction/](https://vigneshmr747-cpu.github.io/Xtra-construction/)

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Prerequisites](#prerequisites)
3. [Setup & Installation Instructions](#setup--installation-instructions)
4. [Environment Configuration Details](#environment-configuration-details)
5. [Brief API Documentation](#brief-api-documentation)
6. [Project Structure](#project-structure)
7. [Deployment Instructions](#deployment-instructions)

---

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build Tool & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React + custom architectural SVG emblems
- **Typography:** Google Fonts (`Poppins` for display headings, `Open Sans` for body copy)
- **CI/CD:** GitHub Actions for automated deployment to GitHub Pages

---

## Prerequisites
Before running or building the project, ensure you have:
- **Node.js:** v18.0.0 or higher (v20+ recommended)
- **npm:** v9.0.0 or higher (bundled with Node.js)
- **Git**

---

## Setup & Installation Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/vigneshmr747-cpu/Xtra-construction.git
cd Xtra-construction
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy the example environment configuration:
```bash
# On Linux / macOS / Git Bash:
cp .env.example .env

# On Windows PowerShell:
Copy-Item .env.example .env
```

### 4. Run the Development Server
```bash
npm run dev
```
- Starts the Vite local server with Hot Module Replacement (HMR).
- Default URL: [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

### 5. Build for Production
```bash
npm run build
```
- Compiles TypeScript and packages assets into the optimized static `dist/` directory.
- Runs unbundled asset synchronization for production asset resolution.

### 6. Preview Production Build
```bash
npm run preview
```
- Serves the built `dist/` bundle on a local HTTP server for staging review.

### 7. Lint and Typecheck
```bash
npm run lint
```
- Runs `tsc --noEmit` to validate all TypeScript types and module declarations.

---

## Environment Configuration Details

The project utilizes environment variables defined in `.env` (or `.env.local` for local secrets):

| Variable Name | Required | Default / Example | Purpose & Description |
| :--- | :---: | :--- | :--- |
| `GEMINI_API_KEY` | Optional | `AIzaSy...` | API key for server-side Google Gemini AI calls (e.g. intelligent estimate estimation or construction assistant). |
| `APP_URL` | Optional | `http://localhost:3000` | The public base URL of the application. Used for absolute link generation, OAuth callbacks, and self-referential metadata. |
| `VITE_CONFIG_NATIVE_IGNORE_WARNING` | Optional | `true` | Suppresses Vite config loader warnings for Node-specific path resolvers. |

### Configuration Rules:
1. **Client-Side Variables:** Vite exposes environment variables to frontend code only when prefixed with `VITE_` (accessed via `import.meta.env.VITE_*`).
2. **Secret Keys:** Sensitive server-side keys such as `GEMINI_API_KEY` should never be prefixed with `VITE_` to prevent leaking keys into the browser bundle.
3. **Environment Cascade:**
   - `.env.local` — Local overrides (git-ignored).
   - `.env.production` — Loaded during `npm run build`.
   - `.env.development` — Loaded during `npm run dev`.
   - `.env` — Global fallback defaults.

---

## Brief API Documentation

While the frontend is a self-contained Single-Page Application (SPA) with offline in-memory data, the project is architected with clear schemas and endpoints for backend integration.

### Core Data Models

#### 1. Quote Request Payload (`QuoteRequestPayload`)
```typescript
interface QuoteRequestPayload {
  name: string;        // Full name of the client (Required, non-empty)
  email: string;       // Valid RFC 5322 email string (Required)
  subject: string;     // Inquiry topic or pre-filled service name
  department: string;  // e.g. "Business Department", "Engineering", "Billing"
  message: string;     // Project scope (Required, min 10 characters)
}
```

#### 2. Project Item (`ProjectItem`)
```typescript
interface ProjectItem {
  id: string;
  title: string;
  category: 'Building' | 'Construction' | 'Road Construction' | 'Maintenance' | 'Architecture';
  image: string;
  client?: string;
  location?: string;
  duration?: string;
  description: string;
}
```

#### 3. Service Specification Item (`ServiceItem`)
```typescript
interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  excerpt: string;
  fullDescription: string;
  specifications: string[];
  deliverables: string[];
}
```

---

### Endpoints (Specification)

#### `POST /api/quotes` — Submit Quote Request
Submits client quote requests to the estimating team.

- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "Arun Kumar",
    "email": "arun@example.com",
    "subject": "Road Construction — 5km Highway Paving",
    "department": "Engineering Department",
    "message": "We need a detailed quote for a 5km commercial asphalt paving project."
  }
  ```
- **Validation Rules:**
  - `name`: Must be trimmed and not empty.
  - `email`: Regex validated (`^[^\s@]+@[^\s@]+\.[^\s@]+$`).
  - `message`: Minimum length of 10 characters.
- **Success Response (`201 Created` / `200 OK`):**
  ```json
  {
    "success": true,
    "quoteId": "QTE-2026-8942",
    "message": "Your quote request has been received. An engineer will respond within 24 hours.",
    "timestamp": "2026-11-21T10:52:00Z"
  }
  ```
- **Error Response (`400 Bad Request`):**
  ```json
  {
    "success": false,
    "errors": {
      "email": "Please provide a valid email address.",
      "message": "Please describe your project scope (at least 10 characters)."
    }
  }
  ```

---

#### `POST /api/ai/estimate` — Gemini AI Preliminary Estimator (Optional)
Generates preliminary timeline and milestone breakdowns using Google Gemini SDK (`@google/genai`).

- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "serviceCategory": "Building Engineering",
    "projectScope": "3-story commercial office building with 15,000 sq ft floor area.",
    "timelineMonths": 12
  }
  ```
- **Success Response (`200 OK`):**
  ```json
  {
    "phases": [
      { "phase": "01 Site Planning & Permits", "estimatedWeeks": 4 },
      { "phase": "02 Foundation & Structural Framing", "estimatedWeeks": 16 },
      { "phase": "03 MEP & Interior Finishes", "estimatedWeeks": 20 }
    ],
    "disclaimer": "Preliminary AI assessment. Subject to physical survey and blueprint review."
  }
  ```

---

## Project Structure
```text
xtra-construction/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── assets/
│   │   └── images/ref/           # Local architectural images and brand assets
│   ├── components/
│   │   ├── AboutSection.tsx      # Company story, credentials, and checklist
│   │   ├── DreamBanner.tsx       # Full-width architectural banner with CTA
│   │   ├── FeaturesFlipCards.tsx # 3D hover/tap interactive flip cards
│   │   ├── Header.tsx            # Sticky navigation, search, and mobile drawer
│   │   ├── HeroSlider.tsx        # 2-slide hero showcase with video modal trigger
│   │   ├── Modals.tsx            # Lightboxes, search overlays, and service specs
│   │   ├── PartnersAndFooter.tsx # Partner emblem carousel, footer links
│   │   ├── ProcessSection.tsx    # 3-step construction execution timeline
│   │   ├── ProjectsSection.tsx   # Filterable 8-project portfolio gallery
│   │   ├── QuoteSection.tsx      # Validated quote submission form
│   │   ├── SafeImage.tsx         # Image loading fallback wrapper
│   │   ├── ServicesSection.tsx   # Elevated 3-column service cards
│   │   └── TestimonialsSection.tsx # Client reviews carousel
│   ├── data/
│   │   └── constructionData.ts   # Centralized data model and static content
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Tailwind v4 import and custom 3D utilities
│   └── main.tsx                  # React DOM entry point
├── .env.example                  # Template for environment configuration
├── .gitignore                    # Git exclusions (node_modules, dist, .env)
├── index.html                    # HTML entry point with Google Fonts
├── package.json                  # Dependencies and build scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite config with relative base & asset sync
```

---

## Deployment Instructions

### GitHub Pages (Automated with GitHub Actions)
1. Push your changes to the `main` branch.
2. In your GitHub repository:
   - Go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
3. The `.github/workflows/deploy.yml` workflow will automatically build and publish the site.
4. Access the live URL: `https://<username>.github.io/<repo-name>/`.
