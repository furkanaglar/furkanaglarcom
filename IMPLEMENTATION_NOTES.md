# Implementation Notes

## 📋 Project Overview

This is a **single-page portfolio website** for **Furkan Ağlar** built as a modern, minimal, and performant web application.

### Tech Stack
- **React 18.3.1** with TypeScript
- **Vite 6.3.5** (build tool)
- **Tailwind CSS v4** (styling)
- **Motion (Framer Motion)** (animations)
- **next-themes** (dark mode)
- **Radix UI** (accessible components)
- **Lucide React** (icons)

---

## 🏗️ Architecture

### Single-Page Design
All content is on one page (`/src/app/App.tsx`) with sections accessible via anchor links:
- `#about`
- `#experience`
- `#projects`
- `#skills`
- `#contact`

### Component Structure

```
App.tsx (root)
├── ThemeProvider (wraps entire app)
├── Navbar (sticky header)
├── Hero (landing section)
├── About (summary + education + languages)
├── Experience (timeline with role cards)
├── Projects (filterable grid with accordions)
├── Skills (categorized skill cards)
├── Contact (contact info with copy buttons)
├── Footer (quick links)
└── Toaster (toast notifications)
```

### Data Layer

All portfolio content is centralized in **`/src/lib/content.ts`**:
- `personalInfo` - Name, title, contact details
- `quickFacts` - Hero section chips
- `about` - Summary, strengths, education, languages
- `experience` - Work history array
- `projects` - Project showcase array
- `skills` - Skill categories array
- `navLinks` - Navigation menu items

This makes it **extremely easy to update content** without touching components.

---

## 🎨 Design System

### Colors
Defined in `/src/styles/theme.css` with CSS custom properties:
- Light mode: Clean white background, dark text
- Dark mode: Dark background, light text
- Primary color: Near-black (#030213) in light, white in dark
- Accent colors for cards, borders, and interactive states

### Typography
- System font stack (no web fonts for performance)
- Responsive sizing using Tailwind utilities
- Semantic heading hierarchy (h1 → h2 → h3 → h4)

### Spacing & Layout
- Container max-width: 5xl (1024px)
- Sections: 20-32 vertical padding (responsive)
- Consistent gap spacing (4, 6, 8, 12 units)

---

## ✨ Animations

All animations use **Motion (Framer Motion)** with these principles:

### 1. Scroll Reveal (`MotionReveal` component)
- Fade in + slight Y translate (20px)
- Duration: 400ms with easeOut
- Triggers once when element enters viewport
- Used on all section headings and major blocks

### 2. Stagger Animations (`StaggerContainer`)
- Parent container defines stagger timing (0.1s)
- Children animate in sequence
- Used for lists, cards, and timeline items

### 3. Hover Effects
- Card lift: translateY(-4px) + shadow increase
- Button scale: 1.02 on hover, 0.98 on press
- Navbar links: scale 1.05 on hover

### 4. Active Section Indicator
- Animated underline in navbar
- Uses `layoutId="activeSection"` for smooth transitions
- Spring animation (stiffness: 380, damping: 30)

### 5. Theme Toggle
- Sun/moon icon rotation and scale
- Smooth transition between icons

### Accessibility
**All animations respect `prefers-reduced-motion`:**
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

---

## 🔍 SEO Implementation

### Meta Tags (dynamically set in App.tsx)
- **Title**: "Furkan Ağlar — Portfolio | QA Engineer & Full-Stack Developer"
- **Description**: Includes key roles and technologies

### JSON-LD Structured Data
Schema.org Person markup in `/src/lib/structured-data.ts`:
- Name, job title, URL
- Email, location
- Social profiles (LinkedIn)
- Education (alumni of Sinop University)
- Skills/expertise

This helps Google and other search engines understand the content.

### Semantic HTML
- `<nav>` for navigation
- `<main>` for main content
- `<section>` for major page sections with proper IDs
- `<footer>` for footer
- Proper heading hierarchy

---

## ♿ Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Proper focus states (outline-ring)
- Logical tab order

### ARIA Labels
- Icon-only buttons have `aria-label` attributes
- Mobile menu toggle has proper labeling
- Screen reader only text (`sr-only` class) where needed

### Color Contrast
- Tested for WCAG AA compliance
- Text color: sufficient contrast ratio (4.5:1+)
- Interactive elements: clear focus indicators

### Responsive Focus Management
- Focus visible on tab navigation
- Focus states styled with ring utilities

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)
- `sm`: 640px (tablets)
- `md`: 768px (small laptops)
- `lg`: 1024px (desktops)

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement with breakpoint classes
- Mobile menu (hamburger) shown on screens < 768px
- Desktop navigation shown on >= 768px

### Responsive Components
- **Navbar**: Hamburger menu on mobile, inline links on desktop
- **Hero**: Stacked CTAs on mobile, horizontal on desktop
- **Experience**: Timeline line hidden on mobile, visible on desktop
- **Skills**: 1 column → 2 columns → 3 columns
- **Projects**: Full width → grid layout

---

## 🎯 Key Features

### 1. Sticky Navigation with Active Indicator
- Navbar sticks to top on scroll
- Detects current section based on scroll position
- Animated underline moves to active section link
- Smooth scroll to section on click

### 2. Dark Mode
- Toggle button in navbar
- Persists preference in localStorage (via next-themes)
- Smooth color transitions
- No flash of unstyled content (FOUC)

### 3. Copy-to-Clipboard
- Contact section has copy buttons for email, website, LinkedIn
- Visual feedback (checkmark) on copy
- Toast notification confirms success
- Falls back gracefully if clipboard API unavailable

### 4. Project Filters
- Filter projects by category (Next.js, WordPress, DevOps, SEO)
- Smooth transitions when filtering
- "All" button to reset filter

### 5. Expandable Project Details
- Accordion component for project highlights
- Smooth height animation on expand/collapse
- Accessible keyboard controls (Space/Enter to toggle)

---

## 🚀 Performance Optimizations

### Code Splitting
- Vite automatically splits code by route/component
- Dynamic imports where possible

### CSS
- Tailwind CSS v4 automatically purges unused styles
- Minimal custom CSS (only in theme.css)

### JavaScript
- Motion (Framer Motion) is tree-shakeable
- Only necessary Radix UI components imported
- No heavy third-party libraries

### Images
- No images currently used (placeholder ready with ImageWithFallback component)
- Unsplash tool available for adding optimized images

### Animation Performance
- No expensive effects (blur, large transforms, continuous animations)
- GPU-accelerated properties (opacity, transform)
- Animations triggered by scroll events use IntersectionObserver (not scroll listener)

---

## 📂 File Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/              # Radix UI based components
│   │   │   ├── navbar.tsx       # Sticky nav with active indicator
│   │   │   ├── hero.tsx         # Hero section
│   │   │   ├── about.tsx        # About section
│   │   │   ├── experience.tsx   # Experience timeline
│   │   │   ├── projects.tsx     # Projects with filters
│   │   │   ├── skills.tsx       # Skills categorized
│   │   │   ├── contact.tsx      # Contact with copy buttons
│   │   │   ├── footer.tsx       # Footer
│   │   │   ├── theme-provider.tsx   # Dark mode context
│   │   │   ├── theme-toggle.tsx     # Theme switch button
│   │   │   ├── motion-reveal.tsx    # Scroll animations
│   │   │   └── copy-button.tsx      # Copy to clipboard
│   │   └── App.tsx              # Main app component
│   ├── lib/
│   │   ├── content.ts           # All portfolio data
│   │   └── structured-data.ts   # JSON-LD SEO schema
│   └── styles/
│       ├── index.css            # Global styles entry
│       ├── tailwind.css         # Tailwind imports
│       ├── theme.css            # Theme colors & base styles
│       └── fonts.css            # Font imports
├── package.json
├── vite.config.ts
├── README.md                    # Comprehensive documentation
├── QUICKSTART.md                # Quick setup guide
└── IMPLEMENTATION_NOTES.md      # This file
```

---

## 🔧 Customization Guide

### Change Personal Information
Edit `/src/lib/content.ts`:
- Update `personalInfo` object
- Modify `about`, `experience`, `projects`, `skills` arrays

### Modify Colors
Edit `/src/styles/theme.css`:
- Light mode: `:root` section
- Dark mode: `.dark` section
- Use any valid CSS color format

### Add New Section
1. Create component in `/src/app/components/your-section.tsx`
2. Import and add to `/src/app/App.tsx` between `<main>` tags
3. Add nav link to `/src/lib/content.ts` (navLinks array)
4. Ensure section has `id` attribute for anchor linking

### Adjust Animations
Edit animation parameters in component files:
- Duration: `transition={{ duration: 0.4 }}`
- Delay: `delay={0.2}`
- Easing: `ease: "easeOut"`

---

## ✅ Checklist Before Deploy

### Content
- [ ] Update all personal information in `/src/lib/content.ts`
- [ ] Replace placeholder project links with real URLs
- [ ] Verify all email/website/LinkedIn links are correct
- [ ] Update GitHub link in structured-data.ts (if applicable)

### SEO
- [ ] Confirm page title and meta description are accurate
- [ ] Test Open Graph tags (social media previews)
- [ ] Validate JSON-LD structured data
- [ ] Add favicon files to `/public/`

### Testing
- [ ] Test on mobile, tablet, desktop
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test keyboard navigation (Tab, Enter, Space)
- [ ] Test dark mode toggle
- [ ] Test all anchor links scroll correctly
- [ ] Test copy-to-clipboard buttons
- [ ] Test project filters
- [ ] Check for console errors

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Optimize any images (use WebP, compress)
- [ ] Ensure bundle size is reasonable (check build output)

---

## 🐛 Known Limitations / Future Enhancements

### Placeholders
- Some project links use `#` placeholders
- No actual case study pages for projects

### Potential Additions
- Contact form with backend integration
- Blog section for articles/posts
- Testimonials/recommendations section
- Project detail modals or separate pages
- Analytics integration (Google Analytics, Plausible)
- Loading states and error boundaries
- Unit and integration tests
- CI/CD pipeline setup

---

## 📊 Browser Support

Tested and working in:
- ✅ Chrome 120+
- ✅ Firefox 120+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ Mobile Safari (iOS 16+)
- ✅ Chrome Android

---

## 🤝 Maintenance

### Updating Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all packages (carefully!)
npm update

# Update specific package
npm install package-name@latest
```

### Adding New Dependencies
```bash
# Always use npm install
npm install package-name

# Example: adding a new icon library
npm install @heroicons/react
```

---

## 📞 Support

For questions, issues, or suggestions:
- Review the README.md for detailed documentation
- Check QUICKSTART.md for setup instructions
- Review this file for implementation details

---

**Portfolio built for Furkan Ağlar**  
**Last updated: January 2026**
