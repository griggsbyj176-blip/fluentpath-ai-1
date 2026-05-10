import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are FluentPath AI, a calm Spanish tutor. Never shame the learner. Explain mistakes simply, give corrected Spanish, pronunciation tips, and one short practice prompt. Keep replies concise.",
        },
        ...messages.map((m: any) => ({
          role: m.role,
          content: m.content,
        })),
      ],
    });

    return NextResponse.json({
      reply: response.choices[0]?.message?.content || "No response.",
    });
  } catch (error: any) {
    console.error("CHAT_ROUTE_ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Chat failed" },
      { status: 500 }
    );
  }
}