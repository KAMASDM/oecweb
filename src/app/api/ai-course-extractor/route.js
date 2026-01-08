import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  try {
    const body = await request.json();
    const { universityName, categoryName } = body;

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

    const comprehensivePrompt = `
Your task is to act as a highly accurate academic data specialist.
1. First, find an official course page on the website of "${universityName}" for a program that fits the category "${categoryName}".
2. Once you have found the specific, official course webpage, extract the following information directly from that page. Prioritize accuracy above all else. Do not invent or infer data that is not present on the page.
3. Return a single, valid JSON object with the following keys. If a specific piece of information cannot be found on the official course page, use an empty string "" as the value.

The JSON object must have these keys: "name", "description", "curriculum", "career_prospects", "admission_requirements", "tuition_fee", "other_fees", "currency", "min_gpa", "ielts_score", "toefl_score", "gre_required", "gmat_required", "is_scholarship_available", "meta_title", "meta_description", "duration", "duration_unit", and "intakes".

**JSON Field Instructions:**
- "name": The official, full name of the course as listed on the page.
- "description": A detailed overview from the page. At the end, you **must** include the full URL of the official course page you used as your source. For example: "For more information, visit: [URL]".
- "curriculum": A summary of the course structure or list of modules, taken directly from the source.
- "career_prospects": A summary of potential career prospects, taken directly from the source.
- "admission_requirements": A summary of admission requirements, taken directly from the source.
- "tuition_fee": The tuition cost per year or total (numerical value only, no currency symbol).
- "other_fees": Any additional fees mentioned.
- "currency": The 3-letter currency code (e.g., "USD", "GBP").
- "min_gpa": Minimum GPA if stated (e.g., "3.0"). Use "" if not stated.
- "ielts_score": Minimum IELTS score if required (e.g., "6.5"). Use "" if not stated.
- "toefl_score": Minimum TOEFL score if required (e.g., "90"). Use "" if not stated.
- "gre_required": true if GRE is required, false otherwise.
- "gmat_required": true if GMAT is required, false otherwise.
- "is_scholarship_available": true if scholarships are mentioned, false otherwise.
- "meta_title": A concise SEO-friendly title for this course.
- "meta_description": A concise SEO description (up to 160 characters).
- "duration": Numerical value of course length (e.g., "2" or "4").
- "duration_unit": Unit of duration. Must be one of: "years", "months", "weeks".
- "intakes": A comma-separated list of intake periods if mentioned (e.g., "Fall, Spring"). Use "" if not stated.

Return ONLY the JSON object, no additional commentary.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an academic data extraction specialist. Always return valid JSON.",
        },
        { role: "user", content: comprehensivePrompt },
      ],
      temperature: 0.3,
    });

    const content = response.choices[0].message.content;

    try {
      const courseData = JSON.parse(content);
      return NextResponse.json(courseData);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      return NextResponse.json(
        { error: "Failed to parse course data from AI response" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate course data",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
