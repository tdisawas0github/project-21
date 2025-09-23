# Project 21

This repository contains multiple versions of a React application:

## 📁 Repository Structure

### `/project/`
- Basic React + Vite project (JavaScript)
- Simple starter template

### `/vite-project/`
- Advanced React + TypeScript + Vite project
- Includes Tailwind CSS and custom UI components
- Development version with full features

### `/github-pages/` ⭐
- **GitHub Pages ready version** of the TypeScript project
- Configured for deployment to GitHub Pages
- Includes automatic deployment workflow
- **This is the version you want for web deployment!**

## 🚀 Quick Start for GitHub Pages

To use the GitHub Pages version:

```bash
cd github-pages
npm install
npm run dev    # Start development server
npm run build  # Build for production
```

The GitHub Pages version includes:
- ✅ Proper base path configuration (`/project-21/`)
- ✅ GitHub Actions workflow for automatic deployment
- ✅ React 19 + TypeScript + Vite
- ✅ Tailwind CSS styling
- ✅ Custom UI components
- ✅ ESLint configuration

## 🌐 Live Demo

Once deployed, the application will be available at:
`https://tdisawas0github.github.io/project-21/`

## 📖 Documentation

See the README in each folder for specific setup and usage instructions:
- [`/github-pages/README.md`](./github-pages/README.md) - **Start here for GitHub Pages deployment**
- [`/vite-project/README.md`](./vite-project/README.md) - Original TypeScript project
- [`/project/README.md`](./project/README.md) - Basic JavaScript project

## 🔧 Deployment

The `/github-pages/` folder is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow is located at `.github/workflows/deploy-github-pages.yml`.