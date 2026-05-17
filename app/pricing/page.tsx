export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 flex items-center justify-center">
      <section className="bg-slate-900 rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-6">
          Stop making Spanish mistakes
        </h1>

        <p className="text-slate-300 mb-8">
          Get instant corrections, grammar explanations, and more natural
          Spanish sentence suggestions.
        </p>

        <p className="text-3xl font-bold mb-8">
          $12/month
        </p>

        <a
          href="https://buy.stripe.com/4gM00ieOX4BrfJb2Xr6sw03"
          className="block bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg"
        >
          Upgrade
        </a>

        <p className="mt-4 text-sm text-slate-500">
          Secure checkout powered by Stripe
        </p>
      </section>
    </main>
  );
}
