#!/bin/bash

# Script to add generateStaticParams to dynamic routes

echo "Adding generateStaticParams to dynamic routes..."

# Array of files to update
files=(
  "src/app/universities/[country]/page.jsx"
  "src/app/universities/[country]/[slug]/page.jsx"
  "src/app/test-preparation/[category]/[subCategory]/[id]/page.jsx"
  "src/app/popular-courses/[course]/page.jsx"
  "src/app/popular-courses/[course]/[slug]/page.jsx"
)

# Function to add generateStaticParams
add_generate_static_params() {
  local file=$1
  echo "Processing $file..."
  
  # Check if generateStaticParams already exists
  if grep -q "generateStaticParams" "$file"; then
    echo "  ✅ Already has generateStaticParams"
  else
    # Add after imports, before other exports
    sed -i '' '/^import/,/^$/{ /^$/{
      a\
\
// Generate static params for static export\
export async function generateStaticParams() {\
  return [];\
}
    }}' "$file"
    echo "  ✅ Added generateStaticParams"
  fi
}

# Process each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    add_generate_static_params "$file"
  else
    echo "  ❌ File not found: $file"
  fi
done

echo "Done!"