# datamage landing site

A modern client-side application built with **Tailwind CSS v4** and **Alpine.js v3**, managed with Yarn, and ready to deploy on Vercel.

## 🚀 Features

- **Tailwind CSS v4.1.17** - Latest version with CSS-first configuration
- **Alpine.js v3.15.1** - Lightweight reactive framework for interactive UI
- **Yarn** - Fast and reliable package management
- **Vercel Ready** - Configured for seamless deployment to Vercel

## 📦 Installation

```bash
yarn install
```

## 🛠️ Development

Build CSS and JavaScript:
```bash
yarn build
```

Build CSS only:
```bash
yarn build:css
```

Build JavaScript only:
```bash
yarn build:js
```

Watch CSS for changes:
```bash
yarn dev:css
```

Watch JavaScript for changes:
```bash
yarn dev:js
```

Serve the application locally:
```bash
yarn serve
```

## 🌐 Deployment

This project is configured for Vercel deployment with `vercel.json`. Simply connect your GitHub repository to Vercel, and it will automatically build and deploy.

### Vercel Configuration
- **Build Command**: `yarn build`
- **Output Directory**: `public`
- **Install Command**: `yarn install`

## 📁 Project Structure

```
datamage-com/
├── public/           # Static files and build output
│   ├── index.html   # Main HTML file
│   ├── output.css   # Built Tailwind CSS (generated)
│   └── app.js       # Bundled Alpine.js (generated)
├── src/             # Source files
│   ├── input.css    # Tailwind CSS input
│   └── app.js       # Alpine.js entry point
├── package.json     # Project dependencies and scripts
├── vercel.json      # Vercel deployment configuration
└── .gitignore       # Git ignore rules
```

## 🎨 Technologies

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Alpine.js](https://alpinejs.dev/) - Lightweight JavaScript framework
- [esbuild](https://esbuild.github.io/) - Fast JavaScript bundler
- [Vercel](https://vercel.com/) - Deployment platform

## 📝 License

MIT
