# Thyself Analyzer

Thyself Analyzer is an AI-powered behavioral insight platform for future personality and productivity insights from digital behavior.

## Current Phase

Phase 2 Database Foundation

Phase 1 added the project structure, responsive navigation, static pages, reusable UI components, and placeholder surfaces.

Phase 2 adds PostgreSQL database support with Prisma ORM, including the schema, generated Prisma client setup, and environment variable template. It does not include login/register logic, admin logic, AI model logic, rule-based predictions, Hugging Face integration, or generated model outputs.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Prisma ORM
- PostgreSQL

## How To Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## Database Setup

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Set `DATABASE_URL` to your PostgreSQL connection string:

```text
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/thyself_analyzer?schema=public"
```

Generate the Prisma client:

```bash
npx prisma generate
```

Create and apply the first migration:

```bash
npx prisma migrate dev --name init
```

## Pages

- `/`
- `/about`
- `/login`
- `/register`
- `/dashboard`
- `/analyze`
- `/history`
- `/feedback`
- `/admin`

## Database Models

- `User`: stores user identity fields, password hash, role, and timestamps for future authentication.
- `Analysis`: stores future analysis input JSON, optional model output JSON, status, errors, and the owning user.
- `ModelFeedback`: stores user feedback, optional analysis linkage, rating, comment, and timestamp.
- `ModelConfig`: stores future Hugging Face model configuration and active status.

Note: This project uses Prisma 7, so PostgreSQL runtime access uses Prisma's `@prisma/adapter-pg` driver adapter and the CLI database URL lives in `prisma.config.ts`.

## Future Phases

- Phase 3: AI analysis form and Hugging Face model integration
- Phase 4: Feedback system and user response collection
- Phase 5: Authentication, protected routes, history storage, and admin monitoring
- Phase 6: Production hardening, evaluation, and deployment polish
