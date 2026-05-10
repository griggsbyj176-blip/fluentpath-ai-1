import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  const body = await req.json();
  const { user_id, skill = "Spanish basics", score = 0 } = body;

  if (!user_id) return NextResponse.json({ error: "Missing user_id" }, { status: 400 });

  const { data, error } = await supabaseAdmin.from("progress").insert({ user_id, skill, score }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}
