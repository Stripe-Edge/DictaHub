# DictaHub

A modern educational platform for AI and tech skill development. Built with Next.js 14 and React 18, providing a comprehensive learning platform with intuitive navigation, responsive design, and engaging user experience.

## Features

**Pages & Routes **
- Homepage with navigation
- Admissions form page
- Teach at Dicta Hub instructor registration
- Sitemap with visual site structure
- Programs and courses listing
- Student Portal (LMS)

**Components**
- Responsive Navbar with Programs dropdown
- Sidebar navigation
- Multi-section Footer
- Custom Select dropdown
- Reusable Input & Button components

**Design**
- Gradient backgrounds with green accent (#00c896)
- Smooth animations (Framer Motion)
- Fully responsive (Tailwind CSS)
- Custom hover effects
- Rounded buttons and form inputs

**Programs**
- AI Engineering
- ChatBot Development
- Data Science

**Course Formats**
- 3-Month Programs
- 6-Month Bootcamps
- 12-Month Diplomas
- Self-Paced Learning

**Extras**
- Academy Calendar
- Fee Structure & Scholarships
- Career guidance
- Community portal
- Assignment management

## Backend
- Cloudinary for media
- Twilio for communications
- Resend for email notifications
- PostgreSQL database with Prisma ORM

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Environment Setup

Create a `.env.local` file with required environment variables:
```
DATABASE_URL="postgresql://user:password@localhost:5432/dicta_hub"
JWT_SECRET="your-secret-key"
CLOUDINARY_API_KEY=cloudinary_key
CLOUDINARY_CLOUD_NAME=cloudinary_name
CLOUDINARY_API_SECRET=cloudinary_secret
TWILIO_ACCOUNT_SID=twilio_sid
TWILIO_AUTH_TOKEN=twilio_token
TWILIO_PHONE_NUMBER=+1234567890
RESEND_API_KEY=resend_key
```

## Database

This project uses PostgreSQL with Prisma ORM for data management.

## Tech Stack

- **Framework**: Next.js 14.2.35
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.19
- **Animations**: Framer Motion 11.3.28
- **Icons**: Lucide React 0.344.0
- **Language**: TypeScript 5.3.3
- **Validation**: Zod 3.22.4
- **Database**: PostgreSQL with Prisma

## Deployment

Deploy easily on [Vercel](https://vercel.com) with automatic Prisma client generation:

1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma ORM](https://www.prisma.io/)
