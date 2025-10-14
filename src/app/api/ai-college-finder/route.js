import { NextResponse } from "next/server";
import OpenAI from "openai";

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

    const prompt = `
      You are an expert course database assistant. Generate a list of 18 fictional but realistic courses based on:
      - Degree Level: ${degree}
      - Country: ${country}
      - University: ${university || "any reputable university"}
      - Field: ${field}
      - Duration: ${duration}
      - Delivery Mode: ${delivery}

      Return valid JSON like:
      {
        "courses": [
          {
            "id": "unique-id",
            "name": "Course Name",
            "university": "University Name",
            "country": "Country",
            "description": "20-25 word overview of the course.",
            "degree": "Bachelor",
            "field": "Computer Science",
            "duration": "4 years",
            "delivery": "On Campus",
            "tuition": "$25,000 - $35,000",
            "intake": "Fall, Spring",
            "scholarship": "Up to 30%",
            "acceptanceRate": "35%",
            "careerOutcomes": ["Software Developer", "Data Analyst", "IT Consultant"],
            "curriculum": ["Algorithms", "Data Structures", "Machine Learning"],
            "faculty": "School of Computer Science",
            "requirements": ["High School Diploma", "Math Proficiency"],
            "language": "English",
            "accreditation": "Nationally Accredited"
          }
        ]
      }
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    const jsonData = JSON.parse(content);

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
