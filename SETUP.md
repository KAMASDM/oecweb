# OEC India Website - Quick Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your OpenAI API key
# IMPORTANT: Use OPENAI_API_KEY (NOT NEXT_PUBLIC_OPENAI_API_KEY)
```

Your `.env.local` should look like:
```env
OPENAI_API_KEY=sk-your-actual-openai-key-here
NODE_ENV=development
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

### 4. Run Tests (Optional)
```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage
```

---

## 🔧 What Changed?

### ✅ AI College Finder Now Works!
The AI College Finder was not working because:
- OpenAI API key was exposed on the client-side
- No proper error handling

**Fixed by:**
- Moving OpenAI calls to secure server-side API routes
- Adding proper error messages
- Better loading states

### ✅ Better Code Organization
Large components (600+ lines) have been split into smaller, manageable pieces:
- `AICollegeFinder` → 7 smaller components
- Each component has a single responsibility
- Easier to test and maintain

### ✅ Testing Infrastructure
Can now run automated tests:
```bash
npm test
```

### ✅ Security Improvements
- API keys are server-side only
- No sensitive data exposed to browser
- Proper environment variable configuration

---

## 📝 Environment Variables Explained

### Required Variables

**OPENAI_API_KEY** (Server-side only)
- Used for AI-powered features
- Get your key from: https://platform.openai.com/api-keys
- **NEVER** use `NEXT_PUBLIC_` prefix (that would expose it!)

**NODE_ENV**
- `development` for local development
- `production` for deployment

---

## 🐛 Troubleshooting

### AI College Finder shows "API key not configured"
1. Check that `.env.local` exists
2. Verify `OPENAI_API_KEY` is set (without NEXT_PUBLIC prefix)
3. Restart the development server

### Tests failing
1. Run `npm install` to ensure all dependencies are installed
2. Check that Jest is properly configured
3. Run `npm test -- --verbose` for detailed output

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

---

## 📚 Project Structure

```
oecweb/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── api/               # API routes (NEW)
│   │   │   ├── ai-college-finder/
│   │   │   ├── ai-writing-feedback/
│   │   │   └── ai-course-generator/
│   │   ├── ai-college-finder/
│   │   ├── blog/
│   │   └── ...
│   ├── components/
│   │   ├── aiCollegeFinder/   # Refactored (NEW)
│   │   │   ├── __tests__/     # Component tests (NEW)
│   │   │   ├── AICollegeFinder.jsx
│   │   │   ├── CourseCard.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SkeletonCard.jsx
│   │   │   └── ViewModeToggle.jsx
│   │   └── ...
│   ├── helpers/
│   │   ├── __tests__/         # Helper tests (NEW)
│   │   └── ajaxCall.js
│   └── lib/
├── .env.example               # Environment template (NEW)
├── jest.config.js             # Jest configuration (NEW)
├── jest.setup.js              # Test setup (NEW)
├── IMPROVEMENTS.md            # Detailed changes doc (NEW)
└── package.json
```

---

## 🎯 Key Features

### AI-Powered College Finder
- Find courses based on degree, country, field
- Real-time filtering and search
- Detailed course information
- Apply directly through consultation form

### Secure API Routes
- Server-side OpenAI integration
- Protected API keys
- Proper error handling

### Component Testing
- Unit tests for UI components
- Integration tests for user flows
- Easy to extend with more tests

---

## 📞 Need Help?

1. Check `IMPROVEMENTS.md` for detailed documentation
2. Review `.env.example` for environment setup
3. Run tests to verify your setup: `npm test`

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Set `OPENAI_API_KEY` in your hosting environment
- [ ] Set `NODE_ENV=production`
- [ ] Run `npm test` to ensure all tests pass
- [ ] Run `npm run build` to verify build succeeds
- [ ] Verify `.env.local` is NOT committed to git
- [ ] Check that API routes work in production environment

---

**Happy Coding! 🎉**
