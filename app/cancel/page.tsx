import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h1 className="text-3xl font-bold">Checkout canceled</h1>
        <p className="mt-3 text-slate-400">No charge was made.</p>
        <Link href="/pricing" className="mt-6 inline-block rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950">Back to pricing</Link>
      </div>
    </main>
  );
}
