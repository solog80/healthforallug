# Health For All Uganda Website

A modern, responsive website for Health For All Uganda—a nonprofit organization improving health outcomes through education, disease prevention, community empowerment, and digital innovation.

**Live Site:** [healthforallug.vercel.app](https://healthforallug.vercel.app)

## 🎯 About the Project

Health For All Uganda runs three core programs:
- **HerRise Initiative** - Ending period poverty and keeping girls in school
- **Assistant Clinician** - Digital triage support for frontline health workers
- **Public Health Education** - Fighting misinformation through community engagement

This website showcases these programs, shares organizational values, and provides resources for partners, volunteers, and donors.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) with TypeScript
- **Styling:** Inline CSS with responsive design (clamp units, CSS Grid)
- **Fonts:** Lora (serif) & Work Sans (sans-serif) from Google Fonts
- **Deployment:** [Vercel](https://vercel.com)

## 📁 Project Structure

```
app/
  ├── layout.tsx          # Root layout with Header & Footer
  ├── page.tsx            # Home page
  ├── about/page.tsx      # About page with vision, mission, values, pillars
  ├── programs/page.tsx   # Programs showcase (HerRise, Assistant Clinician, Public Health Education)
  ├── resources/page.tsx  # Resources & publications
  ├── contact/page.tsx    # Contact form with submission handling
  └── globals.css         # Global styles

components/
  ├── Header.tsx          # Navigation header
  └── Footer.tsx          # Footer with links & contact info

public/
  └── assets/             # Images (logo, program photos, etc.)
    ├── logo.jpeg
    ├── herrise-1.jpeg
    ├── herrise-2.jpeg
    ├── herrise-bins.jpeg
    ├── education-1.jpeg
    ├── education-2.jpeg
    ├── ebola-1.jpeg
    ├── ebola-2.jpeg
    └── ebola-book.jpeg
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR-USERNAME/healthforallug.git
cd healthforallug
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

Changes auto-reload as you edit files.

## ✏️ Editing Content

### Pages
Each page is a React component in `app/*/page.tsx`:

- **Home** (`app/page.tsx`) - Hero, mission, featured programs, values, CTA
- **About** (`app/about/page.tsx`) - Vision, mission, values, strategic pillars, founder bio
- **Programs** (`app/programs/page.tsx`) - Detailed program descriptions with images
- **Resources** (`app/resources/page.tsx`) - Articles and publications
- **Contact** (`app/contact/page.tsx`) - Contact form and direct reach info

### Components
- **Header** (`components/Header.tsx`) - Site navigation (update links here)
- **Footer** (`components/Footer.tsx`) - Footer navigation & contact details

### Images
Place images in `public/assets/` and reference them as `/assets/filename.jpeg` in components.

### Styling
All styling uses inline CSS objects for easy editing. Colors used:
- Primary green: `#163F28`, `#1F5D3B`
- Accent brown: `#B54A2C`
- Gold: `#D9A441`
- Beige: `#FAF7F1`, `#F1ECE0`
- Dark: `#12211a`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
This project is configured for automatic deployment to Vercel:

1. Push changes to GitHub
2. Vercel automatically builds and deploys from the `main` branch
3. View live site at your Vercel domain

**Manual Vercel deployment:**
```bash
npm install -g vercel
vercel
```

## 🔄 Making Content Changes

### To update a page:
1. Edit the relevant file in `app/*/page.tsx`
2. Save (changes appear instantly in dev mode)
3. Test locally at http://localhost:3000
4. Commit and push to GitHub
5. Vercel auto-deploys within minutes

### To add a new page:
1. Create `app/newpage/page.tsx`
2. Add a React component (copy an existing page as template)
3. Update Header navigation in `components/Header.tsx`
4. Add to Footer links if needed
5. Test locally, commit, and push

### To update images:
1. Add new images to `public/assets/`
2. Reference in components as `/assets/imagename.jpeg`
3. Update alt text for accessibility

## 📱 Responsive Design

The site uses modern CSS features for responsiveness:
- **Fluid typography:** `clamp()` for responsive font sizes
- **Grid layouts:** CSS Grid with `auto-fit` for mobile-friendly grids
- **Flexible spacing:** `clamp()` for responsive padding/margins

Works beautifully on mobile, tablet, and desktop.

## 🎨 Design System

All design was created in Claude Design. The component styling uses:
- Inline CSS objects (React style prop)
- CSS variables for fonts: `var(--font-lora)`, `var(--font-work-sans)`
- Consistent color palette (see Styling section above)
- Consistent spacing scale and typography

## 🤝 Contributing

To make changes:
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Commit with descriptive messages
4. Push and create a pull request

## 📞 Contact & Support

**Organization Contact:**
- Email: info@healthforalluganda.org
- Phone: +256 700 000 000
- Location: Kampala, Uganda

**Website Issues:**
Open an issue in this repository with details about the problem.

## 📄 License

© 2026 Health For All Uganda. All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Deployed on [Vercel](https://vercel.com)
- Designed with [Claude Design](https://claude.ai/design)
- Fonts from [Google Fonts](https://fonts.google.com)
