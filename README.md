# NLW Connect – Rocketseat 🚀

A fullstack application developed during Rocketseat's **Next Level Week (NLW)** event. The project connects people through real-time messaging and showcases integration between frontend, backend, and database.

## 🌐 Project Overview

The app allows users to connect with one another via a simple and modern interface. It includes user registration, real-time contact sharing, and a streamlined backend with API routes and database integration.

## 🛠️ Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev/) – UI components

### Backend
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.io/) or Express.js
- [SQLite/PostgreSQL](https://www.postgresql.org/) – Depending on environment
- [Prisma ORM](https://www.prisma.io/)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/caiovellani/nlw-connect-rocketseat.git
cd nlw-connect-rocketseat
```

### 2. Install Dependencies
```bash
npm instal
```

### 3. Configure Environment Variables
```bash
cp.env.example .env
# Update your database URL and other env variables
```

### 4. Run Migrations
```bash
npx prisma migrate dev
```

### 5. Start the Dev Server
```bash
npm run dev
```
