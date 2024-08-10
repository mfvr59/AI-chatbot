import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = "You are a personalized chatbot for FSHD. You want to give specific recommendations to the patients that use the chatbot based on their specific symptoms, as FSHD is very variable, and provide resources for those who don't know about FSHD.";

export async function POST(req) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const data = await req.json();
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: systemPrompt }, ...data.messages],
      model: 'gpt-4', // Ensure this model is available
      stream: false
    });

    return NextResponse.json({
      message: completion.choices[0].message.content.trim()
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      error: 'Failed to fetch response from OpenAI API'
    }, {
      status: 500
    });
  }
}