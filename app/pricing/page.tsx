'use client';

export default function PricingPage() {
  const continueAsGoogleTester = () => {
    localStorage.setItem('email', 'googleplayreview@fluentpathai.com');
    localStorage.setItem('isGooglePlayTester', 'true');
    localStorage.setItem('subscriptionStatus', 'active');
    window.location.href = '/dashboard';
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-3">
          Stop making Spanish mistakes
        </h1>

        <p className="text-slate-300 mb-6">
          Get instant corrections, grammar explanations, and more natural Spanish sentence suggestions.
        </p>

        <div className="rounded-xl bg-slate-800 p-5 mb-6">
          <p className="text-4xl font-bold">$12/month</p>
          <p className="text-slate-400 mt-2">Cancel anytime</p>
        </div>

        <a
          href="https://buy.stripe.com"
          className="block w-full text-center rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-3 font-semibold mb-3"
        >
          Upgrade
        </a>

        <button
          type="button"
          onClick={continueAsGoogleTester}
          className="w-full rounded-xl bg-white text-slate-950 px-4 py-3 font-semibold"
        >
          Continue as Google Play tester
        </button>

        <p className="text-xs text-slate-400 text-center mt-4">
          Secure checkout powered by Stripe
        </p>
      </section>
    </main>
  );
}
