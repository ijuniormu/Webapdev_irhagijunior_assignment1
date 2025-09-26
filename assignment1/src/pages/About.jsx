/**
 * File: src/pages/About.jsx
 */
export default function About() {
  // Put your image in public/assets/headshot-placeholder.jpg (or real photo)
  const headshotSrc = `${import.meta.env.BASE_URL}assets/headshot-placeholder.jpg`
  // Put resume.pdf in public/ so it builds to the site root
  const resumeHref  = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <section className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
      <img
        src={headshotSrc}
        alt="Junior headshot"
        className="rounded-2xl border object-cover h-[200px] w-[200px]"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Irhagi Junior Muderhwa</h1>
        <p className="text-slate-700 max-w-2xl">
          I'm a Software Engineering Technology – AI student at Centennial College and a builder at heart.
          I enjoy shipping React front-ends, Node APIs, and experimenting with ML features to solve real problems.
          Outside of coding, I love soccer and learning about automotive tech.
        </p>
        <a
          href={resumeHref}
          className="inline-block rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800"
          target="_blank"
          rel="noreferrer"
        >
          View Resume (PDF)
        </a>
      </div>
    </section>
  )
}
