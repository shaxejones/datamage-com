# Deployment Setup

This project uses trunk-based development with Vercel deployments.

## Workflow

1. **Commit to `main`** → Automatically deploys to **Staging**
2. **Review staging deployment** → Test the changes
3. **Manual approval required** → Triggers **Production** deployment

## Setup Required

### GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

1. **`VERCEL_TOKEN`**: Get from [Vercel Account Tokens](https://vercel.com/account/tokens)
2. **`VERCEL_ORG_ID`**: Found in `.vercel/project.json` after running `vercel link`
3. **`VERCEL_PROJECT_ID`**: Found in `.vercel/project.json` after running `vercel link`

### GitHub Environments

Configure these in GitHub (Settings → Environments):

1. **`staging`** - No protection rules (auto-deploys)
2. **`production`** - Add protection rules:
   - ✅ Required reviewers (add yourself)
   - ✅ Wait timer (optional, e.g., 5 minutes)

## How to Deploy

### Automatic (Staging):
```bash
git add .
git commit -m "Your changes"
git push origin main
```
→ GitHub Actions automatically deploys to staging

### Manual (Production):
1. Go to GitHub Actions tab
2. Find the workflow run
3. Click "Review deployments"
4. Approve "production" environment
→ Deploys to production

## Local Development

```bash
yarn dev        # Start development server
yarn build      # Build for production
```

## Vercel CLI (Alternative)

```bash
vercel          # Deploy to preview (staging)
vercel --prod   # Deploy to production
vercel promote <staging-url>  # Promote staging to production
```
