# 22-web-professional-showcase

# 22 Web Professional Showcase

A modern, elegant professional portfolio website built with Vue 3, TypeScript, and Tailwind CSS v4. Features dynamic theming, smooth animations, and a minimalist design aesthetic.

## 🚀 Live Links

| Platform | Status | URL |
|----------|--------|-----|
| GitHub Pages | ✅ Active | https://mk-knight23.github.io/22-web-professional-showcase/ |
| Render | ✅ Ready | https://22-web-professional-showcase.onrender.com |
| Vercel | ✅ Ready | https://22-web-professional-showcase.vercel.app |
| Firebase | ✅ Ready | https://web-professional-showcase.web.app |
| AWS Amplify | ✅ Ready | https://main.22-web-professional-showcase.amplifyapp.com |

## 📦 Deployment

### Render (One-Click Deploy)
This repository includes a `render.yaml` blueprint for automated deployment:
1. Visit [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect repository: `mk-knight23/22-web-professional-showcase`
4. Render will auto-detect and apply the blueprint configuration

### Vercel
1. Visit [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

### Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### AWS Amplify
Connect repository in AWS Amplify Console. The `amplify.yml` is pre-configured.

### Manual Deployment
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`



## ✨ Features

This repository has been upgraded with the following features:

1. **Add Vue 3 Composition API** ✅
2. **Implement Pinia for state** ✅
3. **Add Vue Router guards** ✅
4. **Create composables** ✅
5. **Add Teleport and Suspense** ✅
6. **Implement v-model optimization** ✅
7. **Add TypeScript support** ✅
8. **Create reusable components** ✅
9. **Add transitions and animations** ✅
10. **Implement Vitest tests** ✅

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Vue 3.5.24, TypeScript 5.9.3 |
| **Build Tool** | Vite 7.2.4 |
| **Styling** | Tailwind CSS v4 |
| **Routing** | Vue Router 4.6.4 |
| **State Management** | Pinia 3.0.4 |
| **Utilities** | VueUse 14.1.0 |
| **Icons** | Lucide Vue Next 0.563.0 |
| **Animations** | MotionOne Vue 10.16.4 |

---

## 🏗️ Architecture

### Project Structure

```
22-web-professional-showcase/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Badge.vue
│   │   │   └── Section.vue
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.vue
│   │   │   ├── About.vue
│   │   │   ├── Projects.vue
│   │   │   └── Contact.vue
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   └── Navigation.vue
│   │   └── features/     # Feature-specific components
│   │       ├── ThemeToggle.vue
│   │       ├── SmoothScroll.vue
│   │       └── AnimatedElement.vue
│   ├── stores/           # Pinia stores
│   │   ├── useTheme.ts
│   │   └── useNavigation.ts
│   ├── router/           # Vue Router config
│   │   └── index.ts
│   ├── composables/      # Vue composables
│   │   ├── useMediaQuery.ts
│   │   ├── useScroll.ts
│   │   └── useIntersection.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── utils/            # Utility functions
│   │   ├── formatters.ts
│   │   └── constants.ts
│   ├── App.vue           # Root component
│   └── main.ts           # Entry point
├── public/               # Static assets
├── .github/workflows/    # CI/CD pipelines
│   ├── ci.yml           # Lint and test
│   └── deploy.yml       # Deploy to Vercel & GitHub Pages
├── render.yaml           # Render deployment config
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── tailwind.config.ts    # Tailwind config
└── README.md             # This file
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Vue 3.5.24 (Composition API) |
| **Language** | TypeScript 5.9.3 |
| **Styling** | Tailwind CSS v4 |
| **State** | Pinia 3.0.4 (official Vue store) |
| **Routing** | Vue Router 4.6.4 |
| **Utilities** | VueUse 14.1.0 (composition utilities) |
| **Animations** | MotionOne Vue 10.16.4 |
| **Build Tool** | Vite 7.2.4 |

### Key Architectural Patterns

- **Composition API**: Reusable logic with Vue 3 composables
- **Type Safety**: Full TypeScript coverage with strict mode
- **State Management**: Pinia for reactive state (Vue 3 native)
- **Router Guards**: Navigation guards for protected routes
- **Teleport & Suspense**: Modern Vue 3 features
- **v-model Optimization**: Efficient two-way binding
- **Lazy Loading**: Route and component-based code splitting
- **VueUse**: Powerful composition utilities

### Theme System

```typescript
{
  theme: {
    modes: {
      light: "Default light theme",
      dark: "Elegant dark theme",
      auto: "System preference detection"
    },
    storage: "LocalStorage",
    transition: "Smooth theme switching"
  }
}
```

### State Management (Pinia)

```
User Action → Pinia Store → Component Update
     ↓              ↓             ↓
  Theme Click   useTheme()    Vue Reactivity
  Navigation    useNavigation()  Auto-update
```

- **useTheme**: Theme state (light/dark/auto)
- **useNavigation**: Navigation state and active routes
- **Local Storage**: Persist user preferences

### Vue Composables

```typescript
{
  useMediaQuery: "Responsive breakpoints",
  useScroll: "Scroll position tracking",
  useIntersection: "Element visibility detection",
  useTheme: "Theme state management"
}
```

### Performance Optimizations

- **Lazy Loading**: Route and component-based
- **Vue Teleport**: Efficient portal rendering
- **Vue Suspense**: Async component loading
- **Tree Shaking**: Icon library and dependencies
- **Minimal Bundle**: Pinia ~1.5KB, Vue 3 ~45KB
- **GPU Acceleration**: MotionOne animations

### Design System

```typescript
// Professional Showcase Theme
{
  typography: {
    heading: "Modern sans-serif",
    body: "Clean, readable",
    mono: "Technical code blocks"
  },
  color: {
    primary: "indigo-600",
    secondary: "slate-600",
    accent: "emerald-500",
    neutral: "slate-50"
  },
  spacing: {
    sections: "Generous whitespace for elegance",
    cards: "Optimal card layout"
  },
  layout: {
    container: "Max-width 1200px",
    grid: "CSS Grid + Flexbox",
    responsive: "Mobile-first breakpoints"
  }
}
```

### Multi-Platform Deployment

| Platform | URL | Auto-Deploy |
|----------|-----|-------------|
| GitHub Pages | https://mk-knight23.github.io/22-web-professional-showcase/ | ✅ GitHub Actions |
| Vercel | https://22-web-professional-showcase.vercel.app | ✅ GitHub Actions |
| Render | https://22-web-professional-showcase.onrender.com | ✅ render.yaml |
| Firebase | https://web-professional-showcase.web.app | Manual |
| AWS Amplify | https://main.22-web-professional-showcase.amplifyapp.com | Manual |

### CI/CD Pipeline

```yaml
Push to main → CI Check → Build → Deploy
     ↓            ↓          ↓         ↓
  Trigger     Lint+Test   Production   Vercel/GitHub Pages
              (Vitest)   Build
```

- **CI**: Linting and build checks
- **Testing**: Vitest + Vue Test Utils
- **Build**: Production-optimized bundle
- **Deploy**: Automatic to Vercel and GitHub Pages

---

## 🛠️ Installation

```bash
git clone https://github.com/mk-knight23/22-web-professional-showcase.git
cd 22-web-professional-showcase
npm install
```

## 📝 License

MIT

---

*Last updated: 2026-03-01*
