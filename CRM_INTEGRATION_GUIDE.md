# 🏗️ OEC CRM Integration - Complete Setup Guide

Your OEC CRM integration is now ready! Here's everything you need to know:

## 📍 **Access Your CRM**

Once deployed, your CRM will be available at:
**http://localhost:3000/oeccrm**

## 🚀 **Quick Deployment**

### Method 1: Using the Deploy Script
```bash
# Navigate to your CRM project
cd /path/to/your/react-crm

# Build your CRM
npm run build

# Navigate back to OEC project
cd /Users/jigardesai/Desktop/oec/oecweb

# Deploy your CRM (assumes build folder is ./build)
npm run deploy-crm

# Or specify custom build directory
npm run deploy-crm /path/to/your/crm/build
```

### Method 2: Manual Copy
```bash
# Build your React CRM
cd /path/to/your/crm
npm run build

# Copy build contents to OEC
cp -r build/* /Users/jigardesai/Desktop/oec/oecweb/public/crm/
```

## 📁 **File Structure**

```
oecweb/
├── src/app/oeccrm/          # CRM route handler
│   ├── layout.jsx           # CRM layout & metadata
│   └── [[...slug]]/
│       └── page.jsx         # Main CRM page component
├── public/crm/              # 🎯 Put your CRM build here
│   ├── index.html           # Main entry point
│   ├── static/              # CSS/JS bundles
│   └── [other assets]       # Images, fonts, etc.
├── crm/                     # Documentation & reference
│   └── README.md            # Detailed setup guide
├── deploy-crm.sh            # Deployment script
└── package.json             # Updated with CRM scripts
```

## ✨ **Features**

### � **Separate Window Experience**
- CRM opens in dedicated browser window - no iframe limitations!
- Full-screen experience with complete functionality
- Easy Alt+Tab switching between main site and CRM
- Standard browser navigation and dev tools

### 🎯 **Smart Loading**
- Automatic build detection and window launch
- Helpful setup instructions if CRM not found
- One-click manual launch if needed
- Pop-up blocker detection and guidance

### 📱 **Full Functionality**
- Complete React Router support for SPA routing
- All CRM features work without restrictions
- Form submissions and API calls work perfectly
- No iframe security or size constraints

### ⚡ **Performance**
- Direct access - no embedding overhead
- Original asset paths preserved
- Efficient asset serving through Next.js rewrites
- Better performance than iframe approach

## 🛠️ **NPM Scripts Added**

```json
{
  "deploy-crm": "Deploy CRM build to OEC website",
  "deploy-crm:help": "Show CRM deployment help"
}
```

## 🔍 **Troubleshooting**

### CRM Not Loading?
1. **Check build exists**: Ensure `/public/crm/index.html` exists
2. **Restart server**: Run `npm run dev` after copying files
3. **Check console**: Look for 404 errors in browser console
4. **Verify paths**: Ensure all assets use relative paths

### Asset 404 Errors?
- Your React build should use relative paths (default for Create React App)
- If using custom webpack config, ensure `publicPath: './'`

### Routing Issues?
- The iframe handles all internal CRM routing automatically
- Browser back/forward buttons work within the CRM

## 📋 **Testing Checklist**

After deployment:
- [ ] Visit `http://localhost:3000/oeccrm`
- [ ] CRM loads without errors
- [ ] All pages/routes work
- [ ] Forms and interactions function
- [ ] Assets (CSS/JS/images) load correctly
- [ ] No console errors

### 📍 **Current Status:**

✅ Route configured: `/oeccrm` - opens new window  
✅ Static serving ready: `/public/crm/`  
✅ Deploy script created and executable  
✅ Window launcher page active  
✅ Documentation updated  
✅ NPM scripts added  
✅ **NEW**: Separate window functionality implemented  

### 🎉 **Ready for Use!**

Your CRM integration is now **100% ready** with the new window approach. Simply:

1. **Build** your React CRM
2. **Run** `npm run deploy-crm [build-directory]`  
3. **Visit** `http://localhost:3001/oeccrm` (or your Next.js port)
4. **🚀 CRM opens automatically in a new browser window!**

The system will detect your CRM build and launch it in a dedicated browser window for the best experience!
## 🚀 **Next Steps**

1. **Build your React CRM**: `npm run build`
2. **Deploy to OEC**: `npm run deploy-crm`
3. **Visit**: `http://localhost:3000/oeccrm`
4. **Enjoy**: Your CRM is now integrated! 🎉

---

**Need help?** Check the detailed instructions in `/crm/README.md` or run `npm run deploy-crm:help`