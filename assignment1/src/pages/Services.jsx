const services = [
  { title: 'Web Development', desc: 'React, Vite, Tailwind, REST APIs.' },
  { title: 'Mobile‑friendly UI', desc: 'Responsive layouts, accessibility best practices.' },
  { title: 'AI Integrations', desc: 'Basic NLP, chat assistants, and ML features.' },
]

export default function Services() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="rounded-2xl border p-6 shadow-sm">
            <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-200 to-indigo-200 mb-4" />
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-slate-700 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
