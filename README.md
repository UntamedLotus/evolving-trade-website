# Evolving Trade Solutions

**Global Exporters of Natural Resources**

A high-performance, modern web application built for **Evolving Trade Solutions**, a leading export company specializing in the global trade of premium natural resources, including turmeric, spices, herbs, and agricultural products. This project leverages the latest web technologies to provide a seamless, responsive, and accessible user experience, connecting sustainable sources with international markets.

## 🚀 Technology Stack

This project is built on a cutting-edge stack focused on performance, scalability, and developer experience:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) - The React Framework for the Web.
- **UI Library:** [React 19](https://react.dev/) - The library for web and native user interfaces.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- **Typography:** [Geist](https://vercel.com/font) & [Poppins](https://fonts.google.com/specimen/Poppins) - Optimized fonts for modern aesthetics.
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons.
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript.
- **Package Manager:** [Yarn](https://yarnpkg.com/) - Fast, reliable, and secure dependency management.

## ✨ Key Features

- **Modern Architecture:** Utilizes Next.js App Router for efficient routing and layouts.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS mobile-first approach.
- **SEO & Search Visibility:**
    - Dynamic metadata generation for all pages.
    - **JSON-LD Structured Data**: Organizational and Breadcrumb schema for rich search results.
    - Automatic Sitemap (`sitemap.ts`) and Robots (`robots.ts`) configuration.
- **Accessibility (A11y):** ARIA labels, semantic HTML, and optimized focus states for screen readers.
- **Dynamic Product Engine**: Flexible product and category management system.
- **Performance Optimized:** Server-side rendering (SSR) and optimized image delivery via `next/image`.

## 📂 Project Structure

```bash
src/
├── app/                    # App Router: Pages, Layouts, and Routing
│   ├── about-us/           # About Us page
│   ├── contact/            # Contact page (with interactive inquiry form)
│   ├── product/            # Product catalog
│   │   ├── [category]/     # Dynamic category-specific product listings
│   │   └── page.tsx        # All categories overview landing page
│   ├── globals.css         # Global styles and Tailwind v4 directives
│   ├── layout.tsx          # Root layout with Global SEO and Layout logic
│   ├── robots.ts           # Robots.txt configuration
│   ├── sitemap.ts          # XML Sitemap generator
│   └── page.tsx            # Home page entry point
├── components/             # Reusable UI Components
│   ├── features/           # Feature-specific sections (Hero, Services, Products)
│   ├── layout/             # Shared layout elements (Navigation, Footer)
│   └── seo/                # SEO specialized components (StructuredData)
├── lib/                    # Shared data and logic (Product definitions, utilities)
└── types/                  # TypeScript type definitions
```

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.17.0 or later)
- **Yarn** (v1.22.x or later)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd export-app
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `yarn dev` | Starts the development server with hot-reloading. |
| `yarn build` | Creates an optimized production build. |
| `yarn start` | Runs the production server (requires `yarn build` first). |
| `yarn lint` | Runs ESLint to identify and fix code quality issues. |

## 📐 SEO & Performance Standards

This project adheres to high standards of web performance and SEO:
- **Heading Hierarchy**: Enforces a single `<h1>` per page with logical nesting (`<h2>`, `<h3>`).
- **Semantic Tags**: Uses `<main>`, `<section>`, `<nav>`, and `<footer>` for accessibility.
- **Image Priority**: LCP images are marked with `priority` to improve Core Web Vitals.
- **Canonical URLs**: Managed automatically to prevent duplicate content indexing.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

Built with ❤️ by the **Evolving Trade Solutions** Engineering Team.
