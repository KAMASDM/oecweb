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

    const systemPrompt = `You are an IELTS Writing examiner. Analyze the following IELTS Writing ${task} response according to the official IELTS assessment criteria. Be strict in your evaluation, and provide band scores in .5 increments (e.g., 6.0, 6.5, 7.0).

Task Prompt: ${userPrompt}

Student's Answer: ${answer}

Provide detailed feedback for each of the four criteria:
1. Task Achievement - Evaluate how well the student addresses all parts of the task
2. Coherence and Cohesion - Assess the logical flow and organization
3. Lexical Resource - Evaluate vocabulary range and accuracy
4. Grammatical Range and Accuracy - Assess grammar usage and variety

Return ONLY valid JSON with this exact structure:
{
  "bandScore": "7.0",
  "taskAchievement": "Detailed feedback here...",
  "coherence": "Detailed feedback here...",
  "lexicalResource": "Detailed feedback here...",
  "grammar": "Detailed feedback here...",
  "overallFeedback": "Summary feedback here..."
}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an IELTS Writing examiner. Always return valid JSON." },
        { role: "user", content: systemPrompt }
      ],
      temperature: 0.3,
    });

    const content = response.choices[0].message.content;
    
    // Try to parse JSON response
    try {
      const feedback = JSON.parse(content);
      return NextResponse.json(feedback);
    } catch (parseError) {
      // If JSON parsing fails, return structured error
      return NextResponse.json({
        bandScore: "N/A",
        taskAchievement: content,
        coherence: "Unable to parse AI response",
        lexicalResource: "Unable to parse AI response",
        grammar: "Unable to parse AI response",
        overallFeedback: "The AI returned an improperly formatted response."
      });
    }
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
