"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const savePaidUser = async () => {
      const email = localStorage.getItem("email") || "test@test.com";

      await supabase.from("users").upsert({
        email,
        subscribed: true,
      });

      localStorage.setItem("email", email);
    };

    savePaidUser();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">You’re in.</h1>
        <p className="mb-6">Your subscription was verified.</p>
        <button
          onClick={() => router.push("/coach")}
          className="bg-emerald-400 text-black px-6 py-3 rounded-xl"
        >
          Open coach
        </button>
      </div>
    </main>
  );
}