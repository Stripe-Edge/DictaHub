import { NextResponse } from "next/server";
import { AIAgentService } from "@/features/ai-agent/ai-agent.service";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const response = await AIAgentService.generateResponse(prompt);
    return NextResponse.json({ response });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
