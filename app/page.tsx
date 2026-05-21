"use client";

export default function Home() {
  const continueAsGoogleTester = () => {
    localStorage.setItem("email", "googleplayreview@fluentpathai.com");
    localStorage.setItem("isGooglePlayTester", "true");
    localStorage.setItem("subscriptionStatus", "active");

    window.location.href = "/coach";
  };

  const hearSpanishDemo = () => {
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
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 flex items-center justify-center">
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6">
          Fix your Spanish instantly
        </h1>

        <p className="text-xl text-slate-300 mb-10">
          Type any Spanish sentence and get corrections, explanations, and a
          better natural version in seconds.
        </p>

        <button
          type="button"
          onClick={continueAsGoogleTester}
          className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold text-lg mb-4"
        >
          Continue as Google Play tester
        </button>

        <br />

        <button
          type="button"
          onClick={hearSpanishDemo}
          className="inline-block border border-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg mb-4"
        >
          🔊 Hear Spanish demo
        </button>

        <br />

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
    </main>
  );
}
