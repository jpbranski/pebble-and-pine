# Pebble & Pine Design

A production-quality Next.js 16 website showcasing the interior design portfolio of Katrina Lohr.

## 🌿 Overview

**Pebble & Pine Design** is a fully functional, elegant portfolio website featuring:

- **Modern Tech Stack**: Next.js 16 (App Router), TypeScript, MUI v5
- **Complete Theme System**: Light/dark mode with WCAG-compliant color palettes
- **Interactive Quizzes**: Three design quizzes with PDF export functionality
- **Portfolio System**: Dynamic project pages with dual-hero layouts and galleries
- **Shop Integration**: Curated affiliate product showcase
- **Dev CMS**: Local-only content management system
- **Full Accessibility**: WCAG compliant, keyboard navigable, print-friendly

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
/app
  /components/        # Reusable UI components
  /theme/            # MUI theme configuration
  /(site)/           # Main website pages
  /quizzes/          # Interactive design quizzes
  /dev-cms/          # Local development CMS

/data
  /projects/         # Project JSON files
  /quizzes/          # Quiz configuration files
  shop.json          # Shop items data

/public             # Static assets
```

## 🎨 Features

### Theme System

- **Light & Dark Modes**: Fully implemented with localStorage persistence
- **Custom MUI Theme**: Earthy neutrals, brass accents, Century Gothic typography
- **WCAG Compliant**: All color combinations meet accessibility standards

### Pages

#### Main Site
- **Home** (`/`): Moodboard, introduction, quiz previews, portfolio highlights
- **About** (`/about`): Katrina's biography, philosophy, experience
- **Projects** (`/projects`): Portfolio grid and detail pages
- **Shop** (`/shop`): Curated affiliate products
- **Services** (`/services`): Design service offerings (hidden from nav)
- **Contact** (`/contact`): Contact form with quiz CTAs

#### Quizzes
- **Aesthetic Finder** (`/quizzes/aesthetic-finder`): Visual style quiz with 10 questions
- **Design Vibe Check** (`/quizzes/design-vibe-check`): Quick 3-question lead-in quiz
- **Project Readiness** (`/quizzes/project-readiness`): Comprehensive 17-question checklist

All quizzes support PDF export via jsPDF.

### Dev CMS

Access the local CMS at [http://localhost:3000/dev-cms](http://localhost:3000/dev-cms)

**Default Password**: `admin`

Features:
- Edit project metadata and content
- Manage shop items
- Add new projects/products
- **Note**: Changes are stored in memory only (not persisted to files)

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
LOCAL_CMS_PASSWORD=your-secure-password
NEXT_PUBLIC_SITE_URL=https://pebbleandpinedesign.com
```

### Adding Projects

Projects are stored as JSON files in `/data/projects/`. Each project follows this schema:

```json
{
  "title": "Project Title",
  "location": "City, State",
  "year": "2024",
  "category": "Residential",
  "shortDescription": "Brief description",
  "longDescription": "Detailed description",
  "tags": ["Tag1", "Tag2"],
  "hero": {
    "useDoubleHero": true,
    "foreground": "/path/to/image.jpg",
    "background": "/path/to/background.jpg"
  },
  "gallery": ["/path/to/img1.jpg", "/path/to/img2.jpg"],
  "pdfs": [{"label": "Download", "path": "/path/to/file.pdf"}],
  "links": [{"label": "View More", "url": "https://example.com"}],
  "status": "published"
}
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Component Library

Key components in `/app/components/`:

- `Logo.tsx`: SVG logo (pine tree with pebbles)
- `Navbar.tsx`: Responsive navigation with theme toggle
- `Footer.tsx`: Site footer with social links
- `Moodboard.tsx`: Rotating image grid
- `ProjectCard.tsx`: Portfolio project preview
- `GalleryGrid.tsx`: Masonry image gallery
- `ImageSlideshow.tsx`: Keyboard-accessible slideshow
- `QuizCard.tsx`: Quiz preview card
- `AffiliateProductCard.tsx`: Shop product card
- `PdfDownloadButton.tsx`: PDF download handler

## 🎯 Design Philosophy

The design embodies **Elegant Minimalism**:

- **Natural Palette**: Stone, cream, linen, charcoal
- **Accent Colors**: Brushed gold/brass
- **Typography**: Century Gothic (headings), clean sans-serif (body)
- **Aesthetic**: Warm, inviting, professional

## 📱 Responsive Design

Fully responsive with mobile-first approach:
- Mobile: Single column layouts, drawer navigation
- Tablet: 2-column grids, optimized spacing
- Desktop: 3-column grids, full feature set

## ♿ Accessibility

- WCAG 2.1 AA compliant color contrasts
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Print-safe layouts
- Semantic HTML

## 🔐 Security Notes

- Dev CMS restricted to localhost only
- Password protection on dev routes
- No sensitive data in client-side code
- Environment variables for secrets

## 📄 License

© 2024 Pebble & Pine Design. All rights reserved.

## 👤 About

**Designer**: Katrina Lohr
**Website**: [pebbleandpinedesign.com](https://pebbleandpinedesign.com)
**LinkedIn**: [linkedin.com/in/klohr](https://linkedin.com/in/klohr)

---

Built with ❤️ using Next.js 16, TypeScript, and Material-UI
