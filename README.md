# ProCraftWorks - Construction Company Website

A professional and responsive construction company website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional construction-themed design
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Accessible**: WCAG compliant with proper ARIA labels and semantic markup

## Pages

- **Homepage**: Hero section, services overview, company highlights, and call-to-action
- **About Us**: Company history, mission, values, team, and certifications
- **Services**: Detailed construction services with process overview
- **Projects**: Portfolio gallery with project details and testimonials
- **Contact**: Contact form, company information, and service areas
- **404 Page**: Custom not found page with navigation options

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd procraftworks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
procraftworks/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects gallery page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   └── ui/               # UI components
│       ├── Header.tsx    # Navigation header
│       └── Footer.tsx    # Site footer
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Customization

### Colors
The website uses a professional color scheme:
- Primary: #222222 (Dark Gray/Black)
- Accent: #D32F2F (Construction Red)
- Neutral: #F5F5F5 (Light Gray)

### Content
To customize the content:
1. Update company information in the footer component
2. Modify services data in the services page
3. Update project portfolio in the projects page
4. Customize team information in the about page

### Images
Replace placeholder emojis with actual images:
1. Add images to the `public/` folder
2. Update image references in components
3. Use Next.js `Image` component for optimization

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Performance Features

- **Static Generation**: Pages are pre-rendered for faster loading
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Font Optimization**: Optimized Google Fonts loading
- **Code Splitting**: Automatic code splitting for smaller bundles

## SEO Features

- **Meta Tags**: Proper title and description for each page
- **Structured Data**: Semantic HTML markup
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation

## Contact Form

The contact form is currently set up with basic validation and a client-side submission handler. For production use, you'll need to:

1. Set up a backend API or use a service like:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Custom API endpoint

2. Add proper form validation and error handling
3. Implement spam protection (reCAPTCHA)

## License

This project is created for demonstration purposes. Customize as needed for your business.

## Support

For questions or support, please contact the development team.
