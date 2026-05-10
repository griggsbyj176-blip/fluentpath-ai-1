"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function login() {
    const supabase = createClient();
    const origin = window.location.origin;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${origin}/dashboard` },
    });

    if (error) alert(error.message);
    else setSent(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>

        {sent ? (
          <p>Check your email for the login link.</p>
        ) : (
          <>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded p-2 text-black"
            />

            <button
              onClick={login}
              className="w-full rounded bg-green-500 p-2 text-black font-semibold"
            >
              Send login link
            </button>
          </>
        )}
      </div>
    </main>
  );
}