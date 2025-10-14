# 🎓 OEC India - Overseas Education Consultants Website

> A modern, AI-powered platform helping students achieve their dream of studying abroad.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-5.5.1-412991)](https://openai.com/)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Setup environment
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Environment Setup](#-environment-setup)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Documentation](#-documentation)

---

## ✨ Features

### 📱 Mobile-First Design
- **Bottom Navigation** - Quick access to key features on mobile
- **Responsive Layout** - Optimized for all screen sizes
- **Smart Auto-Hide** - Navigation hides on scroll for immersive experience
- **Touch-Friendly** - Large tap targets and intuitive gestures

### 🤖 AI-Powered Tools
- **AI College Finder** - Get personalized university recommendations
- **Course Matching** - Find programs based on your preferences
- **Smart Filters** - Degree, country, field, duration, delivery mode

### 🎓 Education Services
- University selection and counseling
- Visa assistance and documentation
- Test preparation (IELTS, TOEFL)
- Scholarship guidance
- Pre-departure briefing
- Career counseling

### 💰 Financial Tools
- Budget planner
- Loan calculator
- ROI calculator
- Scholarship calculator
- Part-time work earnings estimator
- Multi-country comparison

### 📚 Resources
- Country guides (USA, Canada, UK, Australia, etc.)
- Blog articles and news
- Event listings and webinars
- Success stories
- FAQs and knowledge base

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **Framer Motion 12** - Animation library
- **Lucide React** - Icon library

### Backend & APIs
- **Next.js API Routes** - Server-side endpoints
- **OpenAI 5.5.1** - AI-powered features
- **Axios** - HTTP client

### Forms & Validation
- **React Hook Form** - Form management
- **Yup** - Schema validation

### Testing
- **Jest 29** - Testing framework
- **React Testing Library** - Component testing
- **jsdom** - DOM environment

### Development
- **Turbopack** - Fast bundler (Next.js)
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📁 Project Structure

```
oecweb/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # Server-side API routes
│   │   │   ├── ai-college-finder/    # AI course recommendations
│   │   │   ├── ai-writing-feedback/  # IELTS evaluation
│   │   │   └── ai-course-generator/  # Course structure generation
│   │   ├── about-us/
│   │   ├── ai-college-finder/
│   │   ├── blog/
│   │   ├── contact-us/
│   │   ├── universities/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── aiCollegeFinder/          # Modular components
│   │   │   ├── __tests__/            # Component tests
│   │   │   ├── AICollegeFinder.jsx   # Main component
│   │   │   ├── CourseCard.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SkeletonCard.jsx
│   │   │   └── ViewModeToggle.jsx
│   │   ├── blogs/
│   │   ├── community/
│   │   ├── forms/
│   │   ├── sections/
│   │   └── ...
│   │
│   ├── helpers/
│   │   ├── __tests__/
│   │   └── ajaxCall.js               # API helper
│   │
│   └── lib/                          # Utilities & configs
│       ├── test-config.js
│       ├── Listening/
│       ├── Reading/
│       └── Writing/
│
├── public/                           # Static assets
├── .env.example                      # Environment template
├── jest.config.js                    # Jest configuration
├── next.config.mjs                   # Next.js config
├── tailwind.config.mjs               # Tailwind config
└── package.json

📚 Documentation:
├── IMPROVEMENTS.md                   # Detailed changes
├── SETUP.md                          # Quick setup guide
└── SUMMARY.md                        # Implementation summary
```

---

## ⚙️ Environment Setup

### Required Environment Variables

Create a `.env.local` file in the root directory:

```env
# OpenAI Configuration (Server-side only)
# Get your key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-your-actual-key-here

# Application Configuration
NODE_ENV=development

# Optional: Custom API URL (if different from default)
# NEXT_PUBLIC_API_URL=https://sweekarme.in/oecweb/api
```

### Important Notes

⚠️ **NEVER** commit `.env.local` to version control  
⚠️ **DO NOT** use `NEXT_PUBLIC_` prefix for API keys (exposes to client)  
✅ **DO** use `.env.example` as reference  
✅ **DO** restart server after changing environment variables

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server (with Turbopack)
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint

# Testing
npm test                 # Run all tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage report

# Sitemap
npm run postbuild        # Generate sitemap (runs after build)
```

### Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

2. **Make Changes**
   - Components auto-reload with Fast Refresh
   - Turbopack for fast builds

3. **Run Tests**
   ```bash
   npm run test:watch
   ```
   Tests run automatically on file changes

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests once
npm test

# Watch mode (re-runs on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure

```
src/
├── components/
│   └── aiCollegeFinder/
│       ├── __tests__/
│       │   ├── SearchBar.test.jsx
│       │   ├── Pagination.test.jsx
│       │   └── ViewModeToggle.test.jsx
│       └── ...
└── helpers/
    └── __tests__/
        └── ajaxCall.test.js
```

### Writing Tests

```javascript
// Example component test
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('renders and handles input', () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(mockOnChange).toHaveBeenCalled();
  });
});
```

---

## 🚀 Deployment

### Build Process

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Set environment variables
# Add OPENAI_API_KEY to your hosting platform

# 3. Build application
npm run build

# 4. Start server
npm start
```

### Environment Variables for Production

Set these in your hosting platform (Vercel, Netlify, etc.):

```env
OPENAI_API_KEY=your-production-key
NODE_ENV=production
```

### Deployment Checklist

- [ ] Set `OPENAI_API_KEY` in hosting environment
- [ ] Set `NODE_ENV=production`
- [ ] Run `npm test` locally
- [ ] Run `npm run build` successfully
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Test API routes in production environment
- [ ] Verify sitemap generation works
- [ ] Check all pages render correctly

---

## 📖 Documentation

### Main Documentation Files

1. **SETUP.md** - Quick setup guide for new developers
2. **IMPROVEMENTS.md** - Detailed technical documentation of all changes
3. **SUMMARY.md** - Overview of improvements and changes
4. **README.md** - This file (project overview)

### Component Documentation

Each major component includes inline documentation:
- Props and their types
- Usage examples
- Key features

### API Routes Documentation

API routes are documented in `IMPROVEMENTS.md` with:
- Request/response formats
- Error handling
- Authentication requirements

---

## 🔒 Security

### Current Security Measures

✅ **API Keys**
- Server-side only (never exposed to client)
- Secure environment variable management
- No `NEXT_PUBLIC_` prefixes for sensitive data

✅ **API Routes**
- Server-side execution
- Input validation
- Error handling without exposing internals

✅ **Dependencies**
- Regular security audits
- Updated to latest stable versions
- Legacy peer deps for compatibility

### Best Practices

- Never commit `.env.local` or `.env`
- Always use server-side API routes for sensitive operations
- Validate all user inputs
- Use HTTPS in production
- Regular dependency updates

---

## 🐛 Troubleshooting

### Common Issues

**Issue: AI College Finder not working**
```bash
# Solution: Check environment variables
cat .env.local
# Ensure OPENAI_API_KEY is set without NEXT_PUBLIC_ prefix
# Restart server: npm run dev
```

**Issue: Tests failing**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules
npm install --legacy-peer-deps
npm test
```

**Issue: Port 3000 already in use**
```bash
# Solution: Kill process or use different port
lsof -ti:3000 | xargs kill -9
# Or: PORT=3001 npm run dev
```

**Issue: Build errors**
```bash
# Solution: Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 📈 Performance

### Optimizations Implemented

- ✅ Code splitting with Next.js
- ✅ Image optimization (Next.js Image component)
- ✅ Component lazy loading
- ✅ Efficient state management
- ✅ Memoization for expensive operations
- ✅ Turbopack for fast development builds

---

## 🤝 Contributing

### Development Guidelines

1. **Code Style**
   - Use `.jsx` for React components
   - Use `.js` for utilities
   - Follow existing naming conventions

2. **Component Guidelines**
   - Keep components under 300 lines
   - Single responsibility principle
   - Write tests for new components

3. **Commit Messages**
   - Use clear, descriptive messages
   - Reference issue numbers when applicable

4. **Pull Requests**
   - Include tests for new features
   - Update documentation
   - Ensure all tests pass

---

## 📞 Support

### Getting Help

1. Check `SETUP.md` for setup issues
2. Review `IMPROVEMENTS.md` for technical details
3. Run `npm test` to verify setup
4. Check browser console for errors

### Useful Commands

```bash
# Verify environment
cat .env.local

# Check dependencies
npm list

# Audit security
npm audit

# Clean install
rm -rf node_modules .next
npm install --legacy-peer-deps
```

---

## 📄 License

Private - OEC India © 2025

---

## 🎉 Recent Updates (October 2025)

### v2.0.0 - Major Refactoring

- ✅ Fixed AI College Finder functionality
- ✅ Secured OpenAI API key (server-side only)
- ✅ Split large components into modules
- ✅ Added comprehensive testing suite
- ✅ Created detailed documentation
- ✅ Standardized file naming
- ✅ Improved code organization

See `IMPROVEMENTS.md` for full details.

---

**Built with ❤️ by the OEC India Team**

For questions or issues, refer to the documentation files or contact the development team.
