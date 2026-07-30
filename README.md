# Paradise Ranch Wheeler Lake

A modern, responsive landing page for Paradise Ranch Wheeler Lake LLC — a horseback riding farm in Hillsboro, Alabama.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Scroll reveal animations (Intersection Observer API)
- ✅ Hero section with staggered entrance animations
- ✅ Services & pricing cards
- ✅ Photo gallery
- ✅ Testimonials
- ✅ Contact section with embedded Google Map
- ✅ Call-to-action banners
- ✅ SEO-friendly metadata

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Build for Production

```bash
npm run build
```

The static export will be generated in the `dist/` folder.

## Project Structure

```
paradise-ranch/
├── app/
│   ├── components/      # Reusable section components
│   ├── globals.css      # Global styles + scroll reveal CSS
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── public/              # Static assets
├── next.config.js       # Next.js config (static export)
├── tailwind.config.js   # Tailwind CSS config
└── package.json
```

## Customization

- **Images**: Replace Unsplash URLs in components with actual ranch photos
- **Colors**: Edit `tailwind.config.js` theme colors
- **Content**: Update text in each component file
- **Map**: Replace the iframe `src` in `Contact.tsx` with the actual Google Maps embed URL

---

Built for Paradise Ranch Wheeler Lake LLC
