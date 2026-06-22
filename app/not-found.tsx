import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-24 text-center">
      <h1 className="text-5xl font-black text-white">Page not found</h1>
      <p className="mx-auto mt-5 max-w-xl text-slate-300">This page does not exist. Go back to the homepage or explore Seovize services.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-teal-300 px-6 py-3 font-bold text-slate-950">Back home</Link>
    </section>
  );
}
