#!/bin/bash

echo "🔍 Verifying CRM Setup..."
echo ""

# Check if oeccrm folder exists
if [ -d "public/oeccrm" ]; then
  echo "✅ public/oeccrm folder exists"
else
  echo "❌ public/oeccrm folder NOT found"
  exit 1
fi

# Check index.html
if [ -f "public/oeccrm/index.html" ]; then
  echo "✅ public/oeccrm/index.html exists"
  
  # Check if it has correct paths
  if grep -q "/oeccrm/static/js/main" "public/oeccrm/index.html"; then
    echo "✅ index.html has correct /oeccrm/static paths"
  else
    echo "❌ index.html has wrong paths"
    grep "static/js/main" "public/oeccrm/index.html"
  fi
else
  echo "❌ public/oeccrm/index.html NOT found"
  exit 1
fi

# Check static files
if [ -d "public/oeccrm/static" ]; then
  echo "✅ public/oeccrm/static folder exists"
  
  # Count JS files
  js_count=$(find public/oeccrm/static/js -name "*.js" | wc -l | tr -d ' ')
  echo "✅ Found $js_count JavaScript files"
  
  # Check main.js exists
  if [ -f "public/oeccrm/static/js/main.4e609c23.js" ]; then
    echo "✅ Main CRM bundle exists"
  else
    echo "⚠️  Specific main.4e609c23.js not found, checking for any main.js..."
    ls -lh public/oeccrm/static/js/main.*.js | head -3
  fi
else
  echo "❌ public/oeccrm/static folder NOT found"
  exit 1
fi

# Check CSS files
if [ -d "public/oeccrm/static/css" ]; then
  echo "✅ public/oeccrm/static/css folder exists"
  css_count=$(find public/oeccrm/static/css -name "*.css" | wc -l | tr -d ' ')
  echo "✅ Found $css_count CSS files"
else
  echo "❌ public/oeccrm/static/css folder NOT found"
fi

echo ""
echo "📋 Summary:"
echo "  - CRM files are in: public/oeccrm/"
echo "  - URL path: /oeccrm/login"
echo "  - Asset paths: /oeccrm/static/*"
echo ""
echo "✨ CRM setup verification complete!"
echo ""
echo "🚀 To test locally: npm run dev"
echo "🌐 Then visit: http://localhost:3000/oeccrm/login"
