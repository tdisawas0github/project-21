# Project 21 - GitHub Pages Version

This is the GitHub Pages ready version of the React + TypeScript + Vite project with Tailwind CSS and custom UI components.

## Features

- React 19 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Custom UI components (Button with variants)
- Radix UI components
- ESLint configuration
- Configured for GitHub Pages deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## GitHub Pages Deployment

This project is configured to work with GitHub Pages. The base URL is set to `/project-21/` in `vite.config.ts`.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` folder. Deploy these files to GitHub Pages.

### Automatic Deployment with GitHub Actions

You can set up GitHub Actions to automatically deploy when you push to the main branch. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: github-pages/package-lock.json
    
    - name: Install dependencies
      run: |
        cd github-pages
        npm ci
    
    - name: Build
      run: |
        cd github-pages
        npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./github-pages/dist
```

## Configuration

The key configuration for GitHub Pages is in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/project-21/', // This must match your repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

## Differences from Original Project

- Base path configured for GitHub Pages (`/project-21/`)
- Package name updated to `project-21-github-pages`
- Added `deploy` script in package.json
- Includes this README with deployment instructions

## Project Structure

```
github-pages/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── dist/ (generated)
├── vite.config.ts
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```
