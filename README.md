# 🦑 Squid

A modern, fully responsive **SaaS web application** built entirely with **React** — featuring user authentication, dynamic data fetching, and a clean dark UI designed from Figma.

---

## 🌐 Live Demo

🔗 [squid-eight.vercel.app](https://squid-eight.vercel.app)

---

## 📸 Screenshots

| Home | Feature Boxes |
|------|--------------|
| ![Home](frontend/screenshots/Screenshot%202026-02-16%20140827.png) | ![Features](frontend/screenshots/Screenshot%202026-02-16%20140849.png) |

| Free Trial Banner | Dashboard |
|------------------|-----------|
| ![Trial](frontend/screenshots/Screenshot%202026-02-16%20140909.png) | ![Dashboard](frontend/screenshots/Screenshot%202026-02-16%20140934.png) |

| Users Management | Account Settings |
|-----------------|-----------------|
| ![Users](frontend/screenshots/Screenshot%202026-02-16%20140951.png) | ![Settings](frontend/screenshots/Screenshot%202026-02-16%20141016.png) |

| Pricing Page | More Sections Menu | Coming Soon |
|-------------|-------------------|-------------|
| ![Pricing](frontend/screenshots/Screenshot%202026-02-16%20141035.png) | ![Menu](frontend/screenshots/Screenshot%202026-02-16%20141052.png) | ![Coming Soon](frontend/screenshots/Screenshot%202026-02-16%20141109.png) |

---

## ✨ Features

- 🔐 **User Authentication** — Login & logout with protected routes using `localStorage`
- 🏠 **Landing Page** — Hero section, feature boxes, brand marquee & free trial CTA
- 💳 **Pricing Page** — Silver, Golden & Premium plans with Monthly/Yearly toggle
- 📊 **Dashboard** — Stats overview (Total Users, Unique Cities, Companies) with sample data preview
- 👥 **Users Management** — Full users table with search, sort A→Z, and Card/Table view toggle — data fetched from dummy API via React Context
- ⚙️ **Account Settings** — Profile settings form + Dark/Light mode toggle
- 📋 **More Sections** — Pricing, Testimonials, Help, Questions, Coming Soon pages
- 🌙 **Dark / Light Mode** — Theme toggle managed via React Context
- ⚡ **Blazing Fast** — Built with Vite for instant HMR and optimized builds
- ☁️ **Deployed on Vercel** — With SPA refresh fix via `vercel.json`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) + [Vite](https://vitejs.dev/) | Frontend framework & build tool |
| [React Router DOM](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | Styling & responsive design |
| [React Context API](https://react.dev/reference/react/useContext) | Global state, theme & data management |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Dummy API for users data |
| [Vercel](https://vercel.com/) | Deployment & hosting |

---

## 📁 Project Structure

```
MERN-SaaS-Project/
└── frontend/
    ├── screenshots/         # Project screenshots
    ├── public/
    ├── src/
    │   ├── assets/          # Images, icons, fonts
    │   ├── components/      # Reusable UI components (Navbar, Cards, etc.)
    │   ├── pages/           # All application pages
    │   │   ├── Home.jsx
    │   │   ├── Pricing.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Users.jsx
    │   │   ├── Settings.jsx
    │   │   ├── Login.jsx
    │   │   ├── Testimonials.jsx
    │   │   ├── Help.jsx
    │   │   ├── Questions.jsx
    │   │   ├── MoreSections.jsx
    │   │   └── ComingSoon.jsx
    │   ├── App.jsx          # Root component & route definitions
    │   └── main.jsx         # App entry point
    ├── vercel.json          # Vercel SPA routing fix
    └── package.json
```

---

## 📄 Pages

All pages are built from the original Figma design:

- **Home** — Hero section, feature boxes, brand marquee & 15-day free trial CTA
- **Pricing** — Silver ($40/mo), Golden ($70/mo) & Premium ($120/mo) with Monthly/Yearly toggle
- **Dashboard** — Stats cards, local users finder & sample data preview
- **Users** — Full users table with search, sort, and Card/Table view toggle
- **Settings** — Profile editor & Dark/Light mode appearance toggle
- **Login** — User authentication page
- **Testimonials** — Customer reviews section
- **Help** — Help & support section
- **Questions** — FAQ section
- **More Sections** — Extended content page
- **Coming Soon** — Upcoming features page

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/thearsalan1/MERN-SaaS-Project.git
cd MERN-SaaS-Project/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be running at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

> ℹ️ No `.env` file is required — this project uses no backend or external API keys.

---

## 🚀 Deployment

This project is deployed on **Vercel**. A `vercel.json` is included to fix the 404 on page refresh issue that occurs with React Router in SPAs:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🔐 Authentication Flow

Authentication is handled entirely on the **frontend** using `localStorage`:

1. User logs in — credentials are saved to `localStorage`
2. Protected routes check `localStorage` for a valid session
3. On logout, the session is cleared from `localStorage`

> ℹ️ This is a frontend-only implementation — no backend or database is involved.

---

## 👤 Author

**Arsalan**

- GitHub: [@thearsalan1](https://github.com/thearsalan1)
- Live: [squid-eight.vercel.app](https://squid-eight.vercel.app)

---

> ⭐ If you like this project, give it a star on GitHub!
