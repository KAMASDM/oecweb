# OEC CRM Integration Guide

This folder is for reference and build preparation. Your actual CRM build should be placed in `/public/crm/`.

## Setup Instructions

1. **Build your React CRM application:**
   ```bash
   cd /path/to/your/crm/project
   npm run build
   ```

2. **Deploy using the automated script:**
   ```bash
   cd /Users/jigardesai/Desktop/oec/oecweb
   npm run deploy-crm /path/to/your/crm/build
   ```
   
   Or manually copy:
   ```bash
   cp -r /path/to/your/crm/build/* /Users/jigardesai/Desktop/oec/oecweb/public/crm/
   ```

3. **Access your CRM:**
   Visit: `http://localhost:3001/oeccrm` (or whatever port Next.js is running on)
   
   **🚀 NEW: CRM opens in a separate browser window!**

## How It Works

- **Separate Window**: CRM opens in a dedicated browser window, not embedded
- **Full Functionality**: No iframe limitations - full React app capabilities
- **Better Performance**: Direct access to CRM without embedding overhead
- **Easy Management**: Switch between main site and CRM easily
- **Original Paths**: CRM uses its original `/oeccrm/` asset paths
- **Auto-Launch**: CRM window opens automatically when you visit the route

## Advantages of New Window Approach

✅ **Full-screen experience** - No iframe constraints  
✅ **Better performance** - Direct access to CRM  
✅ **Easier debugging** - Standard browser dev tools  
✅ **Window management** - Alt+Tab between site and CRM  
✅ **No path conflicts** - CRM uses its original build paths  
✅ **Pop-up control** - User can manage multiple CRM windows

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