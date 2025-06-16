/ src/data/services.js
export const DETAILED_SERVICES = [
  {
    id: 'university-selection',
    title: 'Course Selection & University Matching',
    shortDescription: 'AI-powered matching system to find the perfect university and program.',
    fullDescription: 'Our proprietary matching algorithm analyzes your academic background, career goals, budget, and personal preferences to identify the perfect university and program combinations. We go beyond basic matching to ensure cultural fit and long-term career success.',
    icon: 'GraduationCap',
    features: [
      'Personalized university shortlisting based on your profile',
      'Program finder with detailed career outcome data',
      'Budget optimization strategies and cost comparisons',
      'Alternative pathway recommendations',
      'University ranking analysis and interpretation',
      'Faculty research matching for graduate programs',
      'Campus culture and lifestyle assessment',
      'Industry connections and internship opportunities'
    ],
    process: [
      'Comprehensive profile assessment and goal setting',
      'AI-powered university and program matching',
      'Detailed analysis and recommendation report',
      'One-on-one consultation to finalize choices'
    ],
    pricing: {
      basic: 25000,
      premium: 50000,
      elite: 100000
    },
    successRate: '92%',
    avgScholarship: '₹12 Lakhs',
    testimonial: {
      name: 'Arjun Patel',
      text: 'The university matching was spot-on. MIT was perfect for my AI research goals.',
      outcome: 'Admitted to MIT with $50,000 scholarship'
    }
  },
  {
    id: 'application-support',
    title: 'Application Support',
    shortDescription: 'Complete application assistance with expert guidance.',
    fullDescription: 'Our team of former admissions officers and expert writers provide comprehensive application support to maximize your chances of acceptance at top universities worldwide.',
    icon: 'FileText',
    features: [
      'Step-by-step application timeline and checklist',
      'Professional essay writing workshops and reviews',
      'Document verification and preparation',
      'Mock interview sessions with feedback',
      'Application portal guidance and submission support',
      'Follow-up with universities and status tracking',
      'Letter of recommendation coordination',
      'Portfolio development for creative programs'
    ],
    process: [
      'Application strategy development',
      'Document preparation and essay writing',
      'Multiple review and revision cycles',
      'Application submission and tracking'
    ],
    pricing: {
      basic: 35000,
      premium: 70000,
      elite: 120000
    },
    successRate: '95%',
    avgScholarship: '₹15 Lakhs',
    testimonial: {
      name: 'Priya Sharma',
      text: 'Their essay coaching transformed my application. The interview prep was exceptional.',
      outcome: 'Admitted to London Business School with 40% scholarship'
    }
  },
  // Add more services...
]
