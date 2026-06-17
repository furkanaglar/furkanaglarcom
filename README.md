# Furkan Ağlar - Portfolio

A modern, minimal one-page portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Single-page design** with smooth anchor link navigation
- **Light/Dark mode** toggle with system preference detection
- **Smooth minimal animations** using Framer Motion (respects `prefers-reduced-motion`)
- **Fully responsive** across all devices
- **Accessible** with semantic HTML, keyboard navigation, and proper focus states
- **Performance-optimized** with lazy loading and efficient animations
- **SEO-ready** with proper metadata structure

## 📦 Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion (Motion)** - Smooth animations
- **Vite** - Fast build tool
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **next-themes** - Dark mode management

## 🏗️ Project Structure

```
/src
  /app
    /components
      /ui               # Reusable UI components (Button, Card, etc.)
      navbar.tsx        # Sticky navigation with active section indicator
      hero.tsx          # Hero section with CTAs
      about.tsx         # About section with education & languages
      experience.tsx    # Timeline of work experience
      projects.tsx      # Project showcase with filters
      skills.tsx        # Skills grouped by category
      contact.tsx       # Contact information with copy buttons
      footer.tsx        # Footer with quick links
      theme-provider.tsx # Theme context provider
      theme-toggle.tsx   # Dark mode toggle button
      motion-reveal.tsx  # Reusable scroll reveal animations
      copy-button.tsx    # Copy-to-clipboard button
    App.tsx            # Main app component
  /lib
    content.ts         # All portfolio content data
  /styles
    index.css          # Global styles entry
    tailwind.css       # Tailwind imports
    theme.css          # Theme tokens & base styles
    fonts.css          # Font imports
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

The site will be available at `http://localhost:5173` (or the port Vite assigns).

## 📝 Customization Guide

### Update Content

All portfolio content is centralized in `/src/lib/content.ts`. Edit this file to update:

- Personal information (name, title, location, contact details)
- About section (summary, strengths, education, languages)
- Work experience (roles, companies, achievements)
- Projects (title, description, tech stack, highlights)
- Skills (categories, items, descriptions)

### Modify Theme Colors

Theme colors are defined in `/src/styles/theme.css`:

- Update `:root` for light mode colors
- Update `.dark` for dark mode colors
- Colors use CSS custom properties and work with Tailwind utilities

### Add New Sections

1. Create a new component in `/src/app/components/`
2. Import and add to `/src/app/App.tsx`
3. Add corresponding navigation link in `/src/lib/content.ts` (navLinks array)
4. Ensure the section has `id` attribute matching the nav link `href`

## 🎨 Animation Guidelines

All animations follow these principles:

- **Subtle**: opacity + small translate (6-12px)
- **Fast**: 250-450ms duration with easeOut easing
- **Purposeful**: Only animate on scroll reveal, hover, or interaction
- **Accessible**: Respects `prefers-reduced-motion` user preference

Key animation components:
- `MotionReveal` - Fade in + slide up on scroll
- `StaggerContainer` - Stagger children animations
- Motion components support `whileHover` and `whileTap` for micro-interactions

## 📄 Placeholders & TODO

### Files to Add

1. **Favicon**: Add favicon files to `/public/` directory
2. **Project Screenshots**: Add images for project cards (optional)
3. **SEO Metadata**: Add proper Open Graph images and Twitter cards

### Optional Enhancements

- Add real links for projects (currently using placeholders)
- Implement actual case study pages/modals for projects
- Add analytics (Google Analytics, Plausible, etc.)
- Create a contact form backend (currently client-only)
- Add loading states and error boundaries
- Set up CI/CD pipeline for automated deployments

## 🌐 Deployment

This site can be deployed to any static hosting platform:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload /dist folder to Netlify
```

### GitHub Pages
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

Then run:
```bash
npm run build
# Deploy /dist to gh-pages branch
```

## 📊 Performance Checklist

- ✅ Minimal JavaScript bundle size
- ✅ Optimized images (WebP format recommended)
- ✅ Tree-shaking enabled via Vite
- ✅ CSS purging via Tailwind
- ✅ Smooth scrolling with reduced motion support
- ✅ Lazy loading for off-screen content

## ♿ Accessibility Features

- Semantic HTML structure (nav, main, section, footer)
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels for icon buttons
- Color contrast meeting WCAG AA standards
- Screen reader friendly text alternatives

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

© 2026 Furkan Ağlar. All rights reserved.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
