# Dicta Hub Architecture

## Frontend & Backend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Database
- **Provider**: PostgreSQL
- **ORM**: Prisma

## Services
- **Auth**: JWT / NextAuth (scaffolded)
- **Emails**: Resend
- **SMS**: Twilio
- **Uploads**: Cloudinary/S3

## Business Logic
- Located in `/features`
- Thin controllers in `app/api`
- UI Components in `/components`
