
## Avalanche Recordings Website

Official website for Avalanche Recordings — a creative platform showcasing music releases, visuals, and projects.
Built as a fast, modern React site with a focus on clean UI, responsive layouts, and easy future expansion.

🌐 Live site: (https://avalanche-recordings-website.vercel.app/)

🚀 Tech Stack

Vite — Fast development server and optimized production builds

React + TypeScript — Component-driven UI with strong typing

Tailwind CSS — Utility-first styling for rapid layout and design iteration

Node.js / npm — Package management and scripts

Vercel — Hosting and continuous deployment

📁 Project Structure
public/
  images/            # Static assets served at root (/images/...)
src/
  app/
    components/      # Reusable UI components (AlbumCard, Header, Footer, etc.)
    pages/            # Page-level views (Home, Music, Visuals, Shop)
  styles/             # Global styles
  main.tsx            # App entry point
index.html
vite.config.ts
package.json


Anything placed inside /public is automatically served at the site root.
Example: public/images/logo.png → /images/logo.png

🧑‍💻 Local Development
1. Install dependencies
npm install

2. Start the dev server
npm run dev


Then open:

http://localhost:5173


Vite supports hot reload, so changes update instantly.

📦 Production Build

To generate an optimized production build:

npm run build


The output will be generated in:

dist/


You can preview the production build locally with:

npm run preview

🌍 Deployment

This site is deployed using Vercel.

Deployment flow:

Code is pushed to GitHub.

Vercel automatically pulls the repo.

Vercel runs:

npm install

npm run build

The dist/ output is deployed globally.

Every push to the main branch triggers an automatic redeploy.

🖼️ Asset Notes

Static assets live in the /public directory.

Files are referenced from the root path:

<img src="/images/avalanche-logo.png" />


Filenames should avoid spaces and special characters for maximum compatibility.

🛠️ Path Aliases

This project uses a path alias:

@ → /src


Example:

import { AlbumCard } from "@/app/components/AlbumCard";


Configured in:

vite.config.ts

tsconfig.json paths

🎯 Future Ideas

Add CMS or JSON-driven content for releases

Dynamic routing for albums and visuals

Audio previews and embeds

Merch checkout integration

Performance optimizations and image pipelines

👤 Author

Brett Stokes
Avalanche Recordings