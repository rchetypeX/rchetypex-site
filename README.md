# <@>rchetypeX — CRT Landing

**Purpose:** Minimal, gritty CRT landing with logo, name, tagline, and socials.

A single-page landing site with an authentic CRT monitor aesthetic featuring scanlines, phosphor glow, and subtle flicker effects. Built with Next.js and styled-jsx for optimal performance.

## Features

- 🖥️ **CRT Aesthetic:** Scanlines, phosphor glow, vignette, and subtle flicker
- 📱 **Mobile-First:** Responsive design from 360px to desktop
- ♿ **Accessible:** Semantic HTML, focus states, reduced motion support
- ⚡ **Fast:** Optimized for 3G loading (LCP < 2.5s)
- 🎨 **Custom Fonts:** VT323 (monospace) and Tilt Warp (brand)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Customization

### Logo
Replace `/public/logo.svg` with your logo (PNG/SVG recommended)

### Tagline
Edit `pages/index.tsx` → `<p className="tagline">` line

### Social Links
Update the `socials` array in `pages/index.tsx`:

```typescript
const socials = [
  {
    name: 'X',
    href: 'https://x.com/rchetypeX',
    icon: '𝕏'
  },
  // ... add more social links
]
```

### Colors (CRT Palette)
The green phosphor palette is defined in the styled-jsx block:
- Primary text: `#C8FFB8`
- Secondary text: `#9FE6A0`
- Borders/glow: `rgba(140,255,160,0.22–0.42)`
- Background: `#000`

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set Framework Preset to "Next.js"
3. Deploy automatically on push

### Static Export
```bash
npm run build
# Deploy the `out` directory to any static host
```

## Technical Stack

- **Framework:** Next.js (Pages Router)
- **Language:** TypeScript
- **Styling:** styled-jsx (no external CSS frameworks)
- **Fonts:** Google Fonts (VT323, Tilt Warp)
- **Images:** Next.js Image optimization
- **Hosting:** Vercel-ready

## Performance

- Single webfont with display swap
- Optimized images via Next.js Image
- Inline critical CSS
- No external JavaScript dependencies
- Lighthouse scores target: Performance ≥95, Accessibility ≥95

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Focus-visible outlines
- `prefers-reduced-motion` support
- Color contrast ≥4.5:1
- Keyboard navigation support

## Browser Support

Modern browsers with ES6+ support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Private project for rchetypeX.
