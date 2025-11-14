# Finnish Agency Analysis

A comprehensive analysis dashboard for Finnish advertising agencies.

## GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages.

### Setup Instructions

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Wait for deployment**
   - After pushing to the `main` branch, GitHub Actions will automatically build and deploy your site
   - You can check the deployment status in the **Actions** tab
   - Once complete, your site will be available at:
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build:frontend

# Preview production build
pnpm preview
```

### Custom Domain (Optional)

If you want to use a custom domain:
1. Set `VITE_BASE_PATH=/` in your GitHub Actions workflow (or remove it)
2. Configure your custom domain in GitHub Pages settings
3. Update your DNS records as instructed by GitHub

## Project Structure

- `client/` - Frontend React application
- `server/` - Backend Express server
- `shared/` - Shared constants and utilities

## Technologies

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Chart.js for data visualization

