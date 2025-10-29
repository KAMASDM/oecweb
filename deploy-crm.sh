#!/bin/bash

# OEC CRM Deployment Script
# This script helps you deploy your React CRM build to the Next.js application

echo "🚀 OEC CRM Deployment Script"
echo "================================"

# Default build directory (common for Create React App)
DEFAULT_BUILD_DIR="./build"
TARGET_DIR="/Users/jigardesai/Desktop/oec/oecweb/public/crm"

# Function to check if directory exists
check_directory() {
    if [ ! -d "$1" ]; then
        echo "❌ Directory not found: $1"
        return 1
    fi
    return 0
}

# Function to deploy CRM
deploy_crm() {
    local BUILD_DIR="$1"
    
    echo "📂 Source: $BUILD_DIR"
    echo "📂 Target: $TARGET_DIR"
    echo ""
    
    # Check if build directory exists
    if ! check_directory "$BUILD_DIR"; then
        echo "💡 Make sure you've built your React app first:"
        echo "   npm run build"
        exit 1
    fi
    
    # Check for index.html
    if [ ! -f "$BUILD_DIR/index.html" ]; then
        echo "❌ index.html not found in build directory"
        echo "💡 Make sure this is a valid React build directory"
        exit 1
    fi
    
    # Create backup if target exists
    if [ -d "$TARGET_DIR" ] && [ "$(ls -A $TARGET_DIR)" ]; then
        BACKUP_DIR="${TARGET_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
        echo "📦 Creating backup: $BACKUP_DIR"
        cp -r "$TARGET_DIR" "$BACKUP_DIR"
    fi
    
    # Clear target directory
    echo "🧹 Cleaning target directory..."
    rm -rf "$TARGET_DIR"/*
    
    # Copy files
    echo "📋 Copying CRM build files..."
    cp -r "$BUILD_DIR"/* "$TARGET_DIR"/
    
    # Note: No path fixing needed since CRM opens in separate window
    echo "✅ CRM deployed successfully - will open in new browser window"
    
    # Verify deployment
    if [ -f "$TARGET_DIR/index.html" ]; then
        echo "✅ CRM deployed successfully!"
        echo ""
        echo "🌐 Your CRM is now available at:"
        echo "   http://localhost:3000/oeccrm"
        echo ""
        echo "💡 If the server is not running, start it with:"
        echo "   npm run dev"
    else
        echo "❌ Deployment failed - index.html not found in target"
        exit 1
    fi
}

# Main script logic
if [ $# -eq 0 ]; then
    # No arguments provided, use default
    echo "🔍 No build directory specified, using default: $DEFAULT_BUILD_DIR"
    deploy_crm "$DEFAULT_BUILD_DIR"
elif [ $# -eq 1 ]; then
    # Build directory provided
    deploy_crm "$1"
else
    echo "Usage: $0 [build_directory]"
    echo ""
    echo "Examples:"
    echo "  $0                    # Uses ./build (default)"
    echo "  $0 ./dist            # Uses ./dist directory"
    echo "  $0 /path/to/build    # Uses custom path"
    exit 1
fi