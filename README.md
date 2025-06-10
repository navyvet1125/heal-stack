# Heal-Stack

**Heal-Stack** is a full-stack web application built with [Next.js](https://nextjs.org/), designed to blend personal blogging, holistic services, and spiritual healing. It serves as a personal site for Evan Washington — a "heal-stack developer" and holistic facilitator.

## ✨ Features

- 🔥 **Next.js 14 / App Router**
- 🎨 **Tailwind CSS** with gradient theming and responsive design
- 🧩 **ShadCN UI** components (Drawer, Navigation Menu, Buttons, etc.)
- 🔐 **Clerk** authentication with login/logout and user avatars
- 💽 **Vercel Postgres / Neon** database for blog content
- ✍️ Markdown-friendly blog with future support for full-text search
- 🌙 Reiki-inspired design (including kanji watermark, gold accents)
- 📱 Responsive mobile nav with sheet-style drawer
- 🧠 Emphasis on healing, presence, and spiritual creativity

---

## 📁 Project Structure

```bash
heal-stack/
├── app/              # Next.js app directory
│   ├── page.tsx      # Landing page
│   ├── mission/      # Mission statement page
│   ├── services/     # Services offered
│   ├── blog/         # Blog landing (CRUD to be implemented)
│   └── contact/      # Contact form page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   ├── NavBar.tsx
│   ├── NavMobile.tsx
│   ├── CTAButton.tsx
│   └── ui/           # ShadCN UI components
├── lib/
│   ├── nav-links.ts  # Central navigation links
│   └── db.ts         # (Pending) Drizzle/Neon connection
├── public/
│   └── Reiki_Kanji.png
├── styles/
│   └── globals.css
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/heal-stack.git
cd heal-stack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file and add:

```env
DATABASE_URL=your_neon_or_vercel_postgres_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=...
```

> You'll need accounts with [Clerk](https://clerk.dev/) and [Vercel/Postgres](https://vercel.com/postgres) or [Neon](https://neon.tech/).

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📚 Planned Features

- ✅ Mobile-responsive navbar with sliding drawer
- ✅ Glassy UI and Reiki-inspired gradient themes
- ⌛ Blog post creation (with CRUD support via Drizzle)
- ⌛ Admin-only editing via Clerk
- ⌛ Contact form with validation and email integration
- ⌛ RSS feed + Markdown support for blog posts

---

## 🧘 Philosophy

This project blends modern web technologies with intentional, spiritually-rooted design. It exists to foster healing, share wisdom, and support creative expression through code and music.

> “A full-stack app for whole-person healing.”

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, ShadCN UI
- **Database:** Neon / Vercel Postgres
- **ORM:** Drizzle (planned)
- **Auth:** Clerk
- **Deployment:** Vercel

---

## 📄 License

MIT © 2025 Evan Washington  
Inspired by healing. Built with love. ✨
