"use client";

export default function PricingPage() {
  const continueAsGoogleTester = () => {
    localStorage.setItem("email", "googleplayreview@fluentpathai.com");
    localStorage.setItem("isGooglePlayTester", "true");
    localStorage.setItem("subscriptionStatus", "active");

    window.location.href = "/coach";
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 flex items-center justify-center">
      <section className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <h1 className="text-3xl font-extrabold mb-4">
          Stop making Spanish mistakes
        </h1>

        <p className="text-slate-300 mb-8">
          Get instant corrections, grammar explanations, voice playback, and
          more natural Spanish sentence suggestions.
        </p>

        <div className="rounded-xl bg-slate-800 p-6 mb-6">
          <p className="text-4xl font-extrabold mb-2">
            7-day free trial
          </p>

          <p className="text-slate-400">
            Then $12/month · Cancel anytime
          </p>
        </div>

        <a
          href="https://buy.stripe.com/4gM00ieOX4BrfJb2Xr6sw03"
          className="block w-full rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white hover:bg-blue-500"
        >
          Start 7-day free trial
        </a>

        <button
          type="button"
          onClick={continueAsGoogleTester}
          className="mt-3 block w-full rounded-xl bg-white px-6 py-4 text-center font-bold text-black hover:bg-slate-200"
        >
          Continue as Google Play tester
        </button>

        <p className="mt-6 text-center text-xs text-slate-400">
          Secure checkout powered by Stripe
        </p>
      </section>
    </main>
  );
}
