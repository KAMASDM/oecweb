import { NextResponse } from "next/server";
import OpenAI from "openai";

// TODO: For real-time course data, consider integrating:
// 1. University APIs (where available)
// 2. Education data aggregators (Coursera API, edX API)
// 3. Web scraping services (Puppeteer/Playwright)
// 4. Third-party education databases
// 5. Government education portals APIs

// Current implementation uses AI knowledge base for course suggestions

export async function POST(request) {
  try {
    const body = await request.json();
    const { degree, country, university, field, duration, delivery } = body;

    // Validate API key on server side
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured on server" },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Create a cache key for requests
    const cacheKey = `${degree}-${country}-${field}-${duration}-${delivery}`;
    
    // Simple in-memory cache (in production, use Redis or similar)
    global.courseCache = global.courseCache || new Map();
    
    // Check cache first
    if (global.courseCache.has(cacheKey)) {
      const cachedData = global.courseCache.get(cacheKey);
      if (Date.now() - cachedData.timestamp < 300000) { // 5 minutes cache
        return NextResponse.json(cachedData.data);
      }
    }

    const prompt = `You are a course search engine with access to current university data. Find 12 REAL, currently offered ${degree} degree programs in ${field} from actual universities in ${country}.

Search for authentic courses from well-known universities. Include real tuition fees, actual admission requirements, and current program details.

Return ONLY valid JSON:
{
  "courses": [
    {
      "id": "1",
      "name": "Actual Course Title",
      "university": "Real University Name",
      "description": "Brief factual program overview (15 words max)",
      "tuition": "Real current fees",
      "duration": "${duration}",
      "intake": "Actual intake periods",
      "scholarship": "Real scholarship info",
      "acceptanceRate": "Actual admission rate if known"
    }
  ]
}

Use your knowledge of real universities and their current programs. Be accurate and factual.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system", 
          content: "You are an expert university database with knowledge of real universities and their actual programs. Provide authentic course information from your training data about real institutions."
        },
        { 
          role: "user", 
          content: prompt 
        }
      ],
      temperature: 0.1, // Lower temperature for more factual responses
      max_tokens: 1800,
    });

    const content = response.choices[0].message.content;
    const jsonData = JSON.parse(content);
    
    // Add missing fields with defaults and validate data
    jsonData.courses = jsonData.courses.map((course, index) => ({
      ...course,
      id: course.id || `course-${index + 1}`,
      country: course.country || country,
      degree: course.degree || degree,
      field: course.field || field,
      delivery: course.delivery || delivery,
      careerOutcomes: course.careerOutcomes || ["Career Opportunities Available"],
      curriculum: course.curriculum || ["Core Subjects"],
      faculty: course.faculty || "Academic Department",
      requirements: course.requirements || ["Standard Requirements"],
      language: course.language || "English",
      accreditation: course.accreditation || "Accredited",
      dataSource: "AI Knowledge Base",
      lastUpdated: new Date().toISOString().split('T')[0],
      disclaimer: "Course information is based on AI knowledge. Please verify details directly with the university."
    }));

    // Add metadata about the search
    jsonData.metadata = {
      searchParameters: { degree, country, field, duration, delivery },
      totalResults: jsonData.courses.length,
      dataSource: "AI Knowledge Base (Training Data)",
      disclaimer: "Results are based on AI training data. For the most current information, please visit university websites directly.",
      lastGenerated: new Date().toISOString()
    };

    // Cache the result
    global.courseCache.set(cacheKey, {
      data: jsonData,
      timestamp: Date.now()
    });

    return NextResponse.json(jsonData);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch course data",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
