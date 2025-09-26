
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="rounded-2xl bg-gradient-to-br from-cyan-200 to-indigo-200 p-[1px]">
        <div className="rounded-2xl bg-white p-8 md:p-12">
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Hey, I'm Junior — Web & AI Developer
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            I design and build fast, accessible web applications and AI‑powered tools.
          </p>
          <p className="mt-2 italic text-slate-600">
            Mission: Build useful software that’s simple, inclusive, and delightful.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/about" className="rounded-xl border px-4 py-2 hover:bg-slate-50">About Me</Link>
            <Link to="/projects" className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">View Projects</Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <InfoCard title="What I Do" text="Full‑stack web apps, React front‑ends, APIs, and basic ML integrations." />
        <InfoCard title="How I Work" text="Iterative, test‑driven, with a focus on UX and maintainability." />
        <InfoCard title="What I Value" text="Clear communication, reliability, and learning fast." />
      </div>
    </section>
  )
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-slate-700">{text}</p>
    </div>
  )
}
