"use client";

export default function PricingPage() {
  const handleUpgrade = async () => {
    const email = prompt("Enter your email");
    localStorage.setItem("email", email || "test@test.com");

    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="bg-slate-900 p-10 rounded-2xl text-center max-w-md">
        
        <h1 className="text-3xl font-bold mb-4">
          Stop making Spanish mistakes
        </h1>

        <p className="text-gray-400 mb-6">
          Get instant corrections + explanations
        </p>

        <p className="text-2xl font-bold mb-6">$12/month</p>

        <button
          onClick={handleUpgrade}
          className="bg-emerald-400 text-black px-6 py-3 rounded-xl w-full"
        >
          Upgrade
        </button>

      </div>
    </main>
  );
}