# 🚀 Quick Start Guide

## Running the Portfolio

This portfolio is built with **React + Vite + TypeScript + Tailwind CSS**.

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Development Server

```bash
# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `/dist` folder.

---

## 🎯 What's Included

### ✅ Complete Portfolio Sections

1. **Hero** - Full-screen landing with name, title, CTAs
2. **About** - Professional summary, strengths, education, languages
3. **Experience** - Timeline of work history with achievements
4. **Projects** - Showcase with filters, tech stack badges, expandable details
5. **Skills** - Grouped by category with icons and descriptions
6. **Contact** - Email, website, LinkedIn with copy-to-clipboard buttons
7. **Footer** - Quick navigation links and copyright

### ✅ Features Implemented

- ✅ **Sticky Navigation** with active section indicator (animated underline)
- ✅ **Smooth Scrolling** to anchor sections
- ✅ **Light/Dark Mode** toggle with smooth transitions
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **Minimal Animations** using Motion (Framer Motion)
  - Scroll reveal animations on all sections
  - Staggered list animations
  - Hover effects on cards
  - Micro-interactions on buttons
- ✅ **Accessibility**
  - Semantic HTML (nav, main, section, footer)
  - Keyboard navigation
  - ARIA labels
  - Focus states
  - Respects `prefers-reduced-motion`
- ✅ **SEO Optimization**
  - Dynamic meta tags (title, description)
  - JSON-LD structured data (Person schema)
  - Semantic markup
- ✅ **Performance**
  - Code splitting via Vite
  - Optimized animations (no heavy effects)
  - Efficient scroll listeners

### ✅ Components Created

**Layout Components:**
- `Navbar` - Sticky header with nav links, mobile menu, theme toggle
- `Hero` - Landing section with animated intro
- `About` - About section with cards for education & languages
- `Experience` - Timeline component with role cards
- `Projects` - Filterable project grid with accordions
- `Skills` - Skill category cards with tech badges
- `Contact` - Contact cards with copy buttons
- `Footer` - Footer with quick links

**Utility Components:**
- `ThemeProvider` - Dark mode context
- `ThemeToggle` - Light/dark mode switch button
- `MotionReveal` - Scroll reveal animation wrapper
- `CopyButton` - Copy-to-clipboard with feedback

**UI Library:**
- Pre-built components from Radix UI (Button, Card, Badge, Accordion, etc.)

---

## 📝 Customization

### Update Your Information

All content is in **`/src/lib/content.ts`**. Edit this single file to update:

- Personal info (name, email, website, LinkedIn)
- About section text
- Work experience
- Projects
- Skills
- Navigation links

### Change Colors

Edit **`/src/styles/theme.css`**:

- `:root` - Light mode colors
- `.dark` - Dark mode colors

Colors use CSS custom properties and work seamlessly with Tailwind.

### Add New Sections

1. Create component in `/src/app/components/your-section.tsx`
2. Import in `/src/app/App.tsx`
3. Add nav link to `/src/lib/content.ts` (navLinks array)
4. Give section an `id` attribute matching the nav link

---

## 📦 Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool (fast dev server, HMR)
- **Tailwind CSS v4** - Utility-first CSS
- **Motion (Framer Motion)** - Animations
- **next-themes** - Dark mode
- **Radix UI** - Accessible primitives
- **Lucide React** - Icons
- **Sonner** - Toast notifications

---

## 🎨 Animation Details

All animations follow these principles:

- **Subtle** - 6-12px translate, no large movements
- **Fast** - 250-450ms duration
- **Smooth** - easeOut curves
- **Accessible** - Respects user's motion preferences

### Animation Types Used

1. **Scroll Reveal** - Sections fade in as you scroll
2. **Stagger** - List items animate in sequence
3. **Hover** - Cards lift slightly on hover
4. **Active Indicator** - Navbar underline smoothly moves between sections
5. **Micro-interactions** - Button scale on press, checkmark on copy

---

## 🚨 Placeholders to Replace

Before deploying, make sure to:

1. **Update Links** - Replace placeholder `#` links with real URLs
2. **Add Favicon** - Add favicon files to `/public/`
3. **Verify Contact Info** - Double-check email, website, LinkedIn URLs
4. **Update GitHub Link** - Add your GitHub in structured-data.ts if you have one
5. **Add Project Images** - Optional: add screenshots for project cards
6. **Remove Placeholder Projects** - Or update with real project URLs

---

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Run `npm run build`
2. Upload `/dist` folder to Netlify

### GitHub Pages
1. Build: `npm run build`
2. Deploy `/dist` to `gh-pages` branch

---

## 📊 Performance Tips

- Images: Use WebP format, compress before uploading
- Fonts: Already optimized (system fonts by default)
- Bundle: Vite automatically tree-shakes unused code
- CSS: Tailwind purges unused styles
- Animations: Already optimized (no heavy effects)

---

## ♿ Accessibility Checklist

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Focus indicators on all interactive elements
- ✅ ARIA labels for icon-only buttons
- ✅ Color contrast (WCAG AA compliant)
- ✅ Screen reader friendly
- ✅ Respects `prefers-reduced-motion`

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or specify different port
npm run dev -- --port 3000
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check Node version (requires 18+)
node --version

# Update dependencies
npm update
```

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion Documentation](https://motion.dev/)
- [Radix UI](https://www.radix-ui.com/)

---

**Questions or Issues?** Check the README.md for more details.

**Built with ❤️ for Furkan Ağlar**
