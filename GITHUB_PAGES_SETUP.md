# GitHub Pages Deployment Guide

## Quick Setup

Your project is ready for GitHub Pages deployment. Follow these steps:

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/jordynbarzano/fa.finalproject
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** 
   - Folder: Select **/ (root)**
4. Click **Save**

### Step 2: Wait for Deployment
GitHub will build your site. In about 1-2 minutes, you'll see a message like:
> "Your site is live at https://jordynbarzano.github.io/fa.finalproject/"

### Step 3: Verify Deployment
- Visit: https://jordynbarzano.github.io/fa.finalproject/
- You should see the project report landing page
- Verify links work:
  - "📋 Project Report" → Opens project-report.html
  - "🗺️ Interactive Map" → Opens index.html (the map)
  - "📊 GitHub Repository" → Links to GitHub repo

### Step 4: Submit to Blackboard
The submission URL is: **https://jordynbarzano.github.io/fa.finalproject/**

## What Gets Published

GitHub Pages will automatically serve:
- `index.html` → Main map application
- `project-report.html` → Landing page with full project report
- `styles.css`, `map.js`, `data.js`, `data.json` → Supporting files
- All images and assets in the root directory

## File Structure for GitHub Pages

Your root directory should have:
```
fa.finalproject/
├── index.html                 ✅ Map app
├── project-report.html        ✅ Landing page (goes to Blackboard URL)
├── styles.css                 ✅ Shared styles
├── map.js                      ✅ Map logic
├── data.js                     ✅ Data loader
├── data.json                   ✅ Stadium data
├── README.md                   ✅ GitHub repo description
└── (other files: .db, .csv, .sql - not served but in repo)
```

## Default Landing Page

When someone visits `https://jordynbarzano.github.io/fa.finalproject/`, GitHub Pages will serve `project-report.html` (if you want) or `index.html`.

To make the project report the default landing page, you have two options:

### Option A: Rename Files (Recommended for this project)
1. Keep the map as `map-app.html`
2. Keep the report as `index.html`

This way, the GitHub Pages default URL shows the report first.

### Option B: Keep Current Names + Update Entry Point
The current setup is fine - visitors land on the map, which has buttons to the report.

## Verification Checklist

- [ ] GitHub Pages is enabled in Settings
- [ ] Site is published at https://jordynbarzano.github.io/fa.finalproject/
- [ ] Project report page loads and displays all sections
- [ ] Map application loads with interactive features
- [ ] GitHub repository link works
- [ ] No broken links or 404 errors
- [ ] Mobile responsive layout works

## Submission Information

**For Your Blackboard Submission:**
- **URL:** https://jordynbarzano.github.io/fa.finalproject/
- **GitHub Repo:** https://github.com/jordynbarzano/fa.finalproject
- **Project Name:** Super Bowl Stadiums: Interactive Historical Data Visualization
- **Report Sections:** Overview, Web Scraping, Database, Web App, Requirements Met

## Testing Locally Before Publishing

Before pushing to GitHub, test locally:

```bash
cd fa.finalproject
python3 -m http.server 8000
# Visit http://localhost:8000/project-report.html
# Visit http://localhost:8000/index.html
```

Verify:
1. Map renders correctly
2. Year picker buttons work
3. Markers are clickable
4. All links are functional
5. Styling displays properly

## Troubleshooting

### Site not appearing?
- Wait 2-3 minutes after enabling GitHub Pages
- Check Settings → Pages to confirm deployment status
- Refresh browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### 404 errors on assets?
- Ensure filenames match exactly (case-sensitive on GitHub)
- Check relative paths in CSS/JS imports
- Verify files are in root directory, not in subdirectories

### GitHub Pages won't deploy?
- Ensure repository is public
- Check that Settings → Pages shows "Your site is live"
- Look at deployment logs for errors

## Questions?

Refer to the official GitHub Pages documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages
