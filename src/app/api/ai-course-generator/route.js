import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  try {
    const body = await request.json();
    const { courseDetails } = body;

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

    const prompt = `Generate a comprehensive course structure based on: ${courseDetails}. 
    Provide curriculum, learning outcomes, prerequisites, and career paths in JSON format.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    const courseData = JSON.parse(content);

    return NextResponse.json(courseData);
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
