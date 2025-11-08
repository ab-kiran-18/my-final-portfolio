# Netlify Deployment Setup Guide

## Fixed Issues

### 1. Dependency Versions ✅
- **Fixed**: Pinned `"latest"` dependencies to specific versions:
  - `@emotion/is-prop-valid`: `^1.3.1`
  - `framer-motion`: `^12.14.0`
  - `next-themes`: `^0.4.6`
- **Fixed**: Downgraded `date-fns` from `4.1.0` to `^3.6.0` to resolve conflict with `react-day-picker`

### 2. Build Configuration ✅
- **Added**: Experimental package import optimization for better build traces
- **Fixed**: PostCSS configuration to include `autoprefixer`
- **Added**: Node version specification (Node 20) in `.nvmrc` and `package.json`

### 3. Netlify Configuration ✅
- **Configured**: `netlify.toml` with proper build settings
- **Important**: Publish directory must be EMPTY in Netlify UI

## Required Netlify UI Settings

### Step 1: Clear Publish Directory
1. Go to your Netlify dashboard
2. Navigate to: **Site settings** → **Build & deploy** → **Continuous Deployment**
3. Under **Build settings**, click **Edit settings**
4. **Clear/Delete the "Publish directory" field** - leave it EMPTY
5. Save the changes

### Step 2: Verify Environment Variables (Optional)
If you're using `NEXT_PUBLIC_SITE_URL`:
1. Go to **Site settings** → **Environment variables**
2. Add `NEXT_PUBLIC_SITE_URL` with your site URL (e.g., `https://your-site.netlify.app`)

### Step 3: Clear Build Cache
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**

## Current Configuration

### Build Settings
- **Build command**: `npm run build` (from `netlify.toml`)
- **Publish directory**: (empty - managed by `@netlify/plugin-nextjs`)
- **Node version**: 20 (specified in `.nvmrc` and `netlify.toml`)
- **NPM flags**: `--legacy-peer-deps` (handles peer dependency conflicts)

### Plugins
- **@netlify/plugin-nextjs**: Automatically installed and configured
  - Handles Next.js routing
  - Manages build output
  - Sets up serverless functions if needed

## What Was Fixed

### Build Trace Collection Error
The build was failing during "Collecting build traces" phase. This was caused by:
1. **Dependency version conflicts**: `date-fns` v4 incompatible with `react-day-picker`
2. **Unpinned dependencies**: `"latest"` versions resolving differently on Netlify
3. **Missing optimizations**: Build trace collection needed package import optimization

### Solutions Applied
1. ✅ Pinned all dependencies to specific versions
2. ✅ Fixed `date-fns` version conflict
3. ✅ Added `optimizePackageImports` for better build performance
4. ✅ Ensured `package-lock.json` is committed with correct versions

## Next Steps

1. **Commit all changes**:
   ```bash
   git add .
   git commit -m "Fix Netlify build: pin dependencies and fix conflicts"
   git push
   ```

2. **Trigger new deployment** on Netlify (should happen automatically)

3. **Monitor build logs** for any remaining issues

## Troubleshooting

### If build still fails:
1. Check Netlify build logs for specific error messages
2. Verify publish directory is empty in UI
3. Clear build cache and redeploy
4. Ensure `package-lock.json` is committed to repository
5. Verify Node version is 20 in Netlify environment

### Common Issues:
- **"Publish directory error"**: Clear publish directory in UI
- **"Module not found"**: Ensure all dependencies are in `package.json`
- **"Build trace error"**: Usually resolved by pinning dependencies (already fixed)
- **"Peer dependency conflict"**: Already handled with `--legacy-peer-deps` flag

