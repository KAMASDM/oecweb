import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  try {
    const body = await request.json();
    const { task, prompt: userPrompt, answer } = body;

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

    const systemPrompt = `You are an IELTS Writing examiner. Evaluate the following ${task} response and provide:
1. Band Score (0-9)
2. Task Achievement score
3. Coherence and Cohesion score
4. Lexical Resource score
5. Grammatical Range and Accuracy score
6. Detailed feedback for each criterion
7. Suggestions for improvement

Task Prompt: ${userPrompt}

Student's Answer: ${answer}

Provide your evaluation in JSON format.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: systemPrompt }],
      temperature: 0.3,
    });

    const content = response.choices[0].message.content;
    const feedback = JSON.parse(content);

    return NextResponse.json(feedback);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate feedback",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
