"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function CoachPage() {
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content: "Hola 👋 Send me a sentence and I’ll fix it.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const email = localStorage.getItem("email");

      if (!email) {
        router.push("/pricing");
        return;
      }

      const { data } = await supabase
        .from("users")
        .select("subscribed")
        .eq("email", email)
        .single();

      if (!data?.subscribed) router.push("/pricing");
    };

    checkAccess();
  }, [router]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      {
        role: "assistant",
        content: data.reply || "Something went wrong.",
      },
    ]);

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">
      
      <header className="border-b border-slate-800 px-6 py-4">
        <h1 className="text-2xl font-bold">Fix your Spanish</h1>
      </header>

      <section className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  m.role === "user"
                    ? "bg-emerald-400 text-black"
                    : "bg-slate-800 text-white"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && <p className="text-gray-400">Thinking...</p>}

          <div ref={bottomRef} />

        </div>
      </section>

      <footer className="border-t border-slate-800 p-4">
        <div className="max-w-3xl mx-auto flex gap-3">
          
          <textarea
            className="flex-1 resize-none rounded-xl bg-slate-900 p-3"
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Example: Yo querer comer tacos"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />

          <button
            onClick={sendMessage}
            className="bg-emerald-400 text-black px-6 rounded-xl"
          >
            Send
          </button>

        </div>
      </footer>

    </main>
  );
}