# VeltrixDigital Website

A complete static website built with HTML5, CSS3, and Vanilla JavaScript for VeltrixDigital - an IT Digital Services Agency.

## Features Implemented (PRD Compliant)

### Core Functional Features
- ✅ Mobile-First Responsiveness (works on all screen sizes)
- ✅ Performance Optimized (fast loading with lazy loading)
- ✅ Intuitive Navigation (sticky header, hamburger menu on mobile)
- ✅ Integrated AI Chatbot (with predefined responses)
- ✅ Accessibility & Inclusion (WCAG compliant, keyboard navigation, screen reader support)

### Trending Design Aesthetics
- ✅ Immersive Micro-interactions (hover effects, scroll animations)
- ✅ Bold Typography (Oswald + Inter font combination)
- ✅ Dark Mode (with system preference detection)
- ✅ Bento & Card Layouts (clean, rounded rectangular blocks)
- ✅ Scrollytelling Elements (fade-in animations on scroll)

### Strategic Marketing Elements
- ✅ Clear Calls-to-Action (contrasting colors, prominent buttons)
- ✅ Hero Headers (full-page impactful headers)
- ✅ Social Proof & Trust (testimonials, client logos)

## Pages Created

1. **Homepage** (`index.html`) - Hero, services overview, testimonials, FAQ, CTA
2. **Services** (`pages/services.html`) - Detailed service pages with sub-sections
3. **Portfolio** (`pages/portfolio.html`) - Case studies with filtering
4. **About Us** (`pages/about.html`) - Team, mission, values
5. **Contact Us** (`pages/contact.html`) - Contact form, map placeholder
6. **Blog** (`pages/blog.html`) - Blog grid with articles
7. **Careers** (`pages/careers.html`) - Job listings
8. **404 Page** (`pages/404.html`) - Custom error page
9. **Privacy Policy** (`pages/privacy-policy.html`)
10. **Terms of Service** (`pages/terms.html`)

## Project Structure

```
VeltrixDigital/
├── index.html              # Homepage
├── css/
│   ├── style.css          # Main styles + variables + dark mode
│   ├── home.css           # Homepage-specific styles
│   └── pages.css          # Shared page styles
├── js/
│   ├── main.js            # Core functionality (theme, menu, scroll, form)
│   ├── chatbot.js         # AI chatbot functionality
│   └── portfolio.js       # Portfolio filtering
├── pages/                 # All sub-pages
│   ├── services.html
│   ├── portfolio.html
│   ├── about.html
│   ├── contact.html
│   ├── blog.html
│   ├── careers.html
│   ├── 404.html
│   ├── privacy-policy.html
│   └── terms.html
└── assets/
    ├── images/            # SVG placeholder images
    └── fonts/            # Custom fonts (if needed)
```

## How to Run

Since this is a static website, you can:

### Option 1: Direct File Opening
Simply open `index.html` in your browser.

### Option 2: Local HTTP Server (Recommended)

**Using Python:**
```bash
python -m http.server 8000
```
Then visit: http://localhost:8000

**Using Node.js:**
```bash
npx http-server -p 8000
```
Then visit: http://localhost:8000

**Using PHP:**
```bash
php -S localhost:8000
```
Then visit: http://localhost:8000

## Customization

1. **Replace placeholder images**: Replace SVG files in `assets/images/` with real images
2. **Update content**: Edit the HTML files to add your real content
3. **Branding**: Update colors in `css/style.css` CSS variables (`:root` and `[data-theme="dark"]`)
4. **Chatbot**: Enhance `js/chatbot.js` with more responses or connect to an AI API
5. **Form handling**: Connect `js/main.js` contact form to a backend service (Formspree, EmailJS, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Pure HTML/CSS/JS (no framework overhead)
- Lazy loading for images
- Debounced scroll events
- CSS variables for theming
- Intersection Observer for animations
- SVG images for fast loading

## License

© 2026 VeltrixDigital. All rights reserved."# VeltrixDigital" 
