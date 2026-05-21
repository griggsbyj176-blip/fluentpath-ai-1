"use client";

export default function Home() {
  function speakSpanishDemo() {
    if (!("speechSynthesis" in window)) {
      alert("Voice is not supported on this device.");
      return;
    }

    window.speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(
      "Hola, FluentPath AI puede ayudarte a mejorar tu español."
    );

    message.lang = "es-ES";
    message.rate = 0.9;
    message.pitch = 1;

    window.speechSynthesis.speak(message);
  }

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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://buy.stripe.com/4gM00ieOX4BrfJb2Xr6sw03"
            className="inline-block bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg"
          >
            Start fixing your Spanish
          </a>

          <button
            type="button"
            onClick={speakSpanishDemo}
            className="inline-block border border-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg"
          >
            🔊 Hear Spanish demo
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          $12/month · Cancel anytime
        </p>
      </section>
    </main>
  );
}
