# TechSolutions React Home — legacy setup

Pinned versions intended for an older Node.js environment:
- Node.js 13.14.0
- Vite 2.9.18 (declares Node.js >=12.2.0)
- @vitejs/plugin-react 1.3.2
- React and ReactDOM 17.0.2
- lucide-react 0.263.1

Windows 7 and Node.js 13 are obsolete and unsupported, so installation cannot be guaranteed in every environment.

## Run
Open PowerShell in the extracted folder and run:
```powershell
npm install
npm run dev
```
Open the localhost URL printed in the terminal. The first install needs an internet connection. `npm install` will generate `package-lock.json` for your local npm version.

This ZIP includes the Home page. Other nav links are placeholders for pages to add later. The photo and Google Fonts are loaded from the internet.
