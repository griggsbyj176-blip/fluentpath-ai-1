export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6">
          Fix your Spanish instantly
        </h1>

        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Type any Spanish sentence and get corrections, explanations, and a
          better natural version in seconds.
        </p>

        <a
          href="PASTE_NEW_MONTHLY_STRIPE_LINK_HERE"
          className="inline-block bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg"
        >
          Start fixing your Spanish
        </a>

        <p className="mt-4 text-sm text-slate-500">
          $12/month · Cancel anytime
        </p>
      </section>
    </main>
  );
}
