export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 text-center">
        <p className="mb-4 text-emerald-400 font-semibold">
          Built for frustrated Spanish learners
        </p>

        <h1 className="text-5xl font-bold max-w-3xl mx-auto mb-6">
          Fix your Spanish instantly
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Type any Spanish sentence and get corrections, explanations, and a better natural version in seconds.
        </p>

        <a
          href="/pricing"
          className="inline-block bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg"
        >
          Start fixing your Spanish
        </a>

        <p className="mt-4 text-sm text-slate-500">
          $12/month · Cancel anytime
        </p>
      </section>

      <section className="px-6 py-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">1. Type your sentence</h2>
          <p className="text-slate-400">Example: “Yo querer comer tacos”</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">2. Get corrected</h2>
          <p className="text-slate-400">“Yo quiero comer tacos.”</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">3. Understand why</h2>
          <p className="text-slate-400">Learn the rule without boring grammar lectures.</p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="bg-slate-900 rounded-2xl p-8">
          <p className="text-slate-400 mb-2">Before</p>
          <p className="text-2xl mb-6">Yo querer beber agua</p>

          <p className="text-emerald-400 mb-2">After</p>
          <p className="text-2xl mb-4">Yo quiero beber agua.</p>

          <p className="text-slate-300">
            “Querer” changes to “quiero” because the subject is “yo.”
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stop guessing. Start speaking correctly.
        </h2>

        <a
          href="/pricing"
          className="inline-block bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold"
        >
          Try it now
        </a>
      </section>
    </main>
  );
}