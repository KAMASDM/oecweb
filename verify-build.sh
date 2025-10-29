#!/bin/bash

# Build Verification Script for Netlify Deployment
# This script checks if the build is ready for Netlify deployment

echo "🔍 Verifying build for Netlify deployment..."
echo "================================================"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check functions
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅ $1 exists${NC}"
        return 0
    else
        echo -e "${RED}❌ $1 missing${NC}"
        return 1
    fi
}

check_directory() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅ $1/ directory exists${NC}"
        return 0
    else
        echo -e "${RED}❌ $1/ directory missing${NC}"
        return 1
    fi
}

# 1. Check configuration files
echo "📋 Configuration Files:"
check_file "netlify.toml"
check_file "next.config.mjs"
check_file "package.json"

# 2. Check if build output exists
echo ""
echo "🏗️  Build Output:"
check_directory ".next"
check_file ".next/BUILD_ID"

# 3. Check CRM integration
echo ""
echo "🖥️  CRM Integration:"
check_directory "public/crm"
check_file "public/crm/index.html"

# 4. Verify package.json build script
echo ""
echo "📦 Build Script:"
if grep -q "next build" package.json; then
    echo -e "${GREEN}✅ Build script configured for Next.js${NC}"
else
    echo -e "${RED}❌ Build script missing Next.js build${NC}"
fi

# 5. Check netlify.toml configuration
echo ""
echo "⚙️  Netlify Configuration:"
if grep -q '@netlify/plugin-nextjs' netlify.toml; then
    echo -e "${GREEN}✅ Next.js plugin configured${NC}"
else
    echo -e "${RED}❌ Next.js plugin missing${NC}"
fi

if grep -q "/crm/login" netlify.toml; then
    echo -e "${GREEN}✅ CRM login redirect configured${NC}"
else
    echo -e "${RED}❌ CRM login redirect missing${NC}"
fi

# 6. Check next.config.mjs
echo ""
echo "⚛️  Next.js Configuration:"
if grep -q 'rewrites' next.config.mjs; then
    echo -e "${GREEN}✅ CRM rewrites configured${NC}"
else
    echo -e "${RED}❌ CRM rewrites missing${NC}"
fi

if grep -q '/crm/login' next.config.mjs; then
    echo -e "${GREEN}✅ CRM login rewrite configured${NC}"
else
    echo -e "${RED}❌ CRM login rewrite missing${NC}"
fi

# 7. Final summary
echo ""
echo "📊 Summary:"
echo "================================================"

if [ -f "netlify.toml" ] && [ -f "next.config.mjs" ] && [ -d "public/crm" ]; then
    echo -e "${GREEN}✅ Configuration complete!${NC}"
    echo ""
    echo "🚀 Ready to deploy:"
    echo "   1. Run: npm run build"
    echo "   2. Commit and push to repository"
    echo "   3. Connect to Netlify (Git-based deployment)"
    echo ""
    echo "📍 Your site will be available at:"
    echo "   - Main site: https://yoursite.netlify.app/"
    echo "   - CRM: https://yoursite.netlify.app/oeccrm/"
else
    echo -e "${RED}❌ Configuration incomplete${NC}"
    echo ""
    echo "🔧 Required actions:"
    echo "   - Ensure all configuration files exist"
    echo "   - Deploy CRM build to public/crm/"
    echo "   - Configure Next.js plugin in netlify.toml"
    echo "   - Run verification script again"
fi