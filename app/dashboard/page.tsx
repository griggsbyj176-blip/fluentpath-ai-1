export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <section className="mx-auto max-w-5xl py-12">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-slate-400">Track confidence, weak skills, and weekly fluency growth.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Confidence", "68%"],
            ["Weak skill", "Past tense"],
            ["Plan", "Free"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">{k}</p>
              <p className="mt-2 text-3xl font-bold">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
