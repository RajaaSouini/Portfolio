# Portfolio — Rajaa Souini 🚀

Portfolio personnel React — thème light, design moderne avec photo.

## Lancer le projet

```bash
npm install
npm start
```
→ http://localhost:3000

## Personnaliser

Tout est dans **`src/data/portfolio.js`** :

### Ajouter un projet
```js
export const projects = [
  {
    title: "Nom du projet",
    type: "Web App",           // Web App | API REST | Mobile | E-commerce
    description: "Description...",
    tech: ["React", "Laravel", "MySQL"],
    github: "https://github.com/...",
    demo: "https://...",       // null si pas de démo
    featured: true,            // true = badge "Projet phare"
  },
];
```

### Ajouter une expérience
```js
export const experiences = [
  {
    role: "Développeuse Full Stack",
    company: "Nom de l'entreprise",
    period: "Jan 2024 — Présent",
    description: "Description de tes missions...",
    type: "Stage",   // CDI | CDD | Stage | Freelance
  },
];
```

## Déployer sur Vercel (gratuit)
```bash
npm install -g vercel
vercel
```

## Déployer sur GitHub Pages
```bash
npm install gh-pages
# Ajouter dans package.json :
#   "homepage": "https://TON_USERNAME.github.io/portfolio"
#   "predeploy": "npm run build"
#   "deploy": "gh-pages -d build"
npm run deploy
```
