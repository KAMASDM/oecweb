#!/usr/bin/env node

/**
 * Comprehensive Site Testing Script
 * Tests all pages, API endpoints, and external links
 */

const baseURL = 'http://localhost:3000';
const externalAPIBase = 'https://sweekarme.in/oecweb/api';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  section: (msg) => console.log(`\n${colors.cyan}━━━ ${msg} ━━━${colors.reset}\n`),
};

const issues = {
  brokenPages: [],
  brokenAPIs: [],
  emptyResponses: [],
  warnings: [],
};

// Static pages to test
const pagesToTest = [
  '/',
  '/about-us',
  '/services',
  '/universities',
  '/popular-courses',
  '/blog',
  '/events',
  '/community',
  '/finance',
  '/test-preparation',
  '/ai-college-finder',
  '/contact-us',
  '/country-guides',
  '/faqs',
  '/resources',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer',
];

// API endpoints to test
const apiEndpoints = [
  '/services/services/',
  '/testimonials/testimonials/',
  '/students/students/admitted-students/',
  '/events/events/events/',
  '/blog/blog/posts/',
  '/blog/blog/categories/',
  '/academics/academics/universities/',
  '/academics/academics/courses/',
  '/academics/academics/countries/',
  '/academics/academics/course-categories/',
  '/faq/faqs/',
];

async function testPage(path) {
  try {
    const response = await fetch(`${baseURL}${path}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TestBot/1.0)',
      },
    });

    if (response.ok) {
      const contentLength = parseInt(response.headers.get('content-length') || '0');
      if (contentLength < 100 && contentLength > 0) {
        issues.warnings.push(`${path} - Page content is suspiciously small (${contentLength} bytes)`);
        log.warning(`${path} (${response.status}) - Small content size: ${contentLength} bytes`);
      } else {
        log.success(`${path} (${response.status})`);
      }
      return true;
    } else {
      issues.brokenPages.push(`${path} - Status: ${response.status}`);
      log.error(`${path} (${response.status})`);
      return false;
    }
  } catch (error) {
    issues.brokenPages.push(`${path} - Error: ${error.message}`);
    log.error(`${path} - ${error.message}`);
    return false;
  }
}

async function testAPIEndpoint(endpoint) {
  try {
    const response = await fetch(`${externalAPIBase}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      
      // Check if response has data
      if (data && data.results) {
        if (Array.isArray(data.results) && data.results.length === 0) {
          issues.emptyResponses.push(`${endpoint} - Returns empty results array`);
          log.warning(`${endpoint} (${response.status}) - Empty results`);
        } else {
          log.success(`${endpoint} (${response.status}) - ${data.results.length} items`);
        }
      } else if (data && Object.keys(data).length === 0) {
        issues.emptyResponses.push(`${endpoint} - Returns empty object`);
        log.warning(`${endpoint} (${response.status}) - Empty response`);
      } else {
        log.success(`${endpoint} (${response.status})`);
      }
      return true;
    } else {
      issues.brokenAPIs.push(`${endpoint} - Status: ${response.status}`);
      log.error(`${endpoint} (${response.status})`);
      return false;
    }
  } catch (error) {
    issues.brokenAPIs.push(`${endpoint} - Error: ${error.message}`);
    log.error(`${endpoint} - ${error.message}`);
    return false;
  }
}

async function testNextJSAPIs() {
  log.section('Testing Next.js API Routes');
  
  const nextAPIs = [
    { 
      path: '/api/ai-college-finder', 
      method: 'POST',
      body: {
        degree: 'Bachelor',
        country: 'USA',
        field: 'Computer Science',
        duration: '4 years',
        delivery: 'On Campus'
      }
    },
    { 
      path: '/api/ai-course-generator', 
      method: 'POST',
      body: { courseDetails: 'Computer Science Bachelor' }
    },
  ];

  for (const api of nextAPIs) {
    try {
      const response = await fetch(`${baseURL}${api.path}`, {
        method: api.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(api.body),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          issues.warnings.push(`${api.path} - API returned error: ${data.error}`);
          log.warning(`${api.path} - ${data.error}`);
        } else {
          log.success(`${api.path} (${response.status})`);
        }
      } else {
        issues.brokenAPIs.push(`${api.path} - Status: ${response.status}`);
        log.error(`${api.path} (${response.status})`);
      }
    } catch (error) {
      issues.brokenAPIs.push(`${api.path} - Error: ${error.message}`);
      log.error(`${api.path} - ${error.message}`);
    }
  }
}

async function runAllTests() {
  console.log(`${colors.magenta}
╔═══════════════════════════════════════════╗
║   OEC Website Comprehensive Test Suite   ║
╚═══════════════════════════════════════════╝
${colors.reset}`);

  log.info(`Testing against: ${baseURL}`);
  log.info(`External API: ${externalAPIBase}\n`);

  // Test static pages
  log.section('Testing Static Pages');
  for (const page of pagesToTest) {
    await testPage(page);
  }

  // Test external API endpoints
  log.section('Testing External API Endpoints');
  for (const endpoint of apiEndpoints) {
    await testAPIEndpoint(endpoint);
  }

  // Test Next.js API routes
  await testNextJSAPIs();

  // Print summary
  log.section('Test Summary');
  
  const totalIssues = issues.brokenPages.length + issues.brokenAPIs.length + issues.emptyResponses.length;
  
  if (totalIssues === 0 && issues.warnings.length === 0) {
    console.log(`${colors.green}
╔═══════════════════════════════════════════╗
║  🎉 All Tests Passed! No Issues Found!   ║
╚═══════════════════════════════════════════╝
${colors.reset}`);
  } else {
    if (issues.brokenPages.length > 0) {
      console.log(`\n${colors.red}Broken Pages (${issues.brokenPages.length}):${colors.reset}`);
      issues.brokenPages.forEach(issue => console.log(`  • ${issue}`));
    }

    if (issues.brokenAPIs.length > 0) {
      console.log(`\n${colors.red}Broken API Endpoints (${issues.brokenAPIs.length}):${colors.reset}`);
      issues.brokenAPIs.forEach(issue => console.log(`  • ${issue}`));
    }

    if (issues.emptyResponses.length > 0) {
      console.log(`\n${colors.yellow}Empty API Responses (${issues.emptyResponses.length}):${colors.reset}`);
      issues.emptyResponses.forEach(issue => console.log(`  • ${issue}`));
    }

    if (issues.warnings.length > 0) {
      console.log(`\n${colors.yellow}Warnings (${issues.warnings.length}):${colors.reset}`);
      issues.warnings.forEach(issue => console.log(`  • ${issue}`));
    }

    console.log(`\n${colors.magenta}Total Issues Found: ${totalIssues}${colors.reset}`);
    console.log(`${colors.yellow}Total Warnings: ${issues.warnings.length}${colors.reset}\n`);
  }

  return {
    success: totalIssues === 0,
    issues,
  };
}

// Run tests
runAllTests()
  .then(({ success }) => {
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    log.error(`Test runner failed: ${error.message}`);
    process.exit(1);
  });
