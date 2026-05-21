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
    <main className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 flex items-center justify-center py-16">
      <section className="text-center w-full max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Fix your Spanish instantly
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
          Type any Spanish sentence and get corrections, explanations, and a
          better natural version in seconds.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <button
            type="button"
            onClick={continueAsGoogleTester}
            className="w-full sm:w-auto bg-white text-black px-6 py-4 rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-transform"
          >
            Continue as Google Play tester
          </button>

          <button
            type="button"
            onClick={hearSpanishDemo}
            className="w-full sm:w-auto border border-slate-600 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-transform"
          >
            🔊 Hear Spanish demo
          </button>

          <a
            href="/pricing"
            className="w-full sm:w-auto bg-emerald-400 text-black px-6 py-4 rounded-xl font-bold text-base sm:text-lg text-center active:scale-95 transition-transform"
          >
            Start fixing your Spanish
          </a>
        </div>

        <p className="mt-5 text-sm text-slate-500">
          $12/month · Cancel anytime
        </p>
      </section>
    </main>
  );
}
