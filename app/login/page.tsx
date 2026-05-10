 "use client";

import { useState } from "react";
import { createClient } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function login() {
    const supabase = createClient();
    const origin = location.origin;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${origin}/dashboard` },
    });
    if (error) alert(error.message);
    else setSent(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold">Log in</h1>
        <p className="mt-2 text-slate-400">Get a magic link.</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-6 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="you@email.com" />
        <button onClick={login} className="mt-4 w-full rounded-2xl bg-emerald-400 py-3 font-semibold text-slate-950">Send magic link</button>
        {sent && <p className="mt-4 text-sm text-emerald-300">Check your email.</p>}
      </div>
    </main>
  );
}
