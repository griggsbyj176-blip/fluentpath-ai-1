'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  const login = async () => {
    alert(`Login link would be sent to: ${email}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>

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
      </div>
    </main>
  );
}