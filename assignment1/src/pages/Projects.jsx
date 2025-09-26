/**
 * File: src/pages/Projects.jsx
 */
const base = import.meta.env.BASE_URL

// Place your images in public/assets/projects/...
const projects = [
  {
    title: 'DropMe — Ride-Sharing App',
    img: `${base}assets/projects/dropme.png`,
    role: 'Founder / Full-stack Developer',
    outcome: 'MVP with driver & rider flows, Stripe integration.'
  },
  {
    title: 'Ngezayo — Pharmacy Finder (Rwanda)',
    img: `${base}assets/projects/ngezayo.png`,
    role: 'Product Designer & Developer',
    outcome: 'Geo-search to locate meds; verified pharmacy onboarding.'
  },
  {
    title: 'Load Balancer Lab (Linux/Nginx)',
    img: `${base}assets/projects/loadbalancer.png`,
    role: 'DevOps Student Project',
    outcome: 'HA setup across VMs; automated backup scripts.'
  }
]

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border overflow-hidden shadow-sm">
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm"><span className="font-medium">Role:</span> {p.role}</p>
              <p className="text-sm text-slate-700"><span className="font-medium">Outcome:</span> {p.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
