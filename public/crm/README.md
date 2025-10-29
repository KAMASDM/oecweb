# OEC CRM Integration Guide

This folder is for reference and build preparation. Your actual CRM build should be placed in `/public/crm/`.

## Setup Instructions

1. **Build your React CRM application:**
   ```bash
   cd /path/to/your/crm/project
   npm run build
   ```

2. **Copy the build contents to the public/crm directory:**
   ```bash
   cp -r build/* /Users/jigardesai/Desktop/oec/oecweb/public/crm/
   ```

3. **Verify the structure:**
   Your `/public/crm/` directory should contain:
   - `index.html` (main entry point)
   - `static/` directory (CSS/JS bundles)
   - Any other static assets

4. **Access your CRM:**
   Visit: `http://localhost:3000/oeccrm`

## Notes

- The CRM will be served as a static Single Page Application (SPA)
- All CRM routes will be handled by your React Router within the iframe
- The CRM is isolated in an iframe for security and to prevent conflicts with the main Next.js app
- Static files are automatically cached for better performance

## Troubleshooting

If your CRM doesn't load:
1. Check that `index.html` exists in `/public/crm/`
2. Ensure all asset paths in your build are relative (not absolute)
3. Restart the Next.js development server after copying files
4. Check browser console for any 404 errors on missing assets

## File Structure Expected:

```
public/
  crm/
    index.html          ← Main CRM entry point
    static/
      css/
        main.[hash].css
      js/
        main.[hash].js
    manifest.json       ← (if using Create React App)
    favicon.ico        ← (optional)
    [other assets]
```