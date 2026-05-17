<section className="text-center py-20">
  <h1 className="text-5xl font-extrabold mb-6">
    Fix your Spanish instantly
  </h1>

  <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
    Type any Spanish sentence and get corrections,
    explanations, and a better natural version in seconds.
  </p>

  <button
    onClick={async () => {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      window.location.href = data.url;
    }}
    className="inline-block bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg"
  >
    Start fixing your Spanish
  </button>

  <p className="mt-4 text-sm text-slate-500">
    $12/month · Cancel anytime
  </p>
</section>
