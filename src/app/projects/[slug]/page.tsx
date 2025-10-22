import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS } from '../../data'
import CarouselClient from './CarouselClient'
import type { Project } from '../../data'

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: Params) {
  const project: Project | undefined = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <div className="space-y-6 py-12 px-8">
      <div className="flex justify-between items-center">
        <Link href="../../" className="text-zinc-300">← Back to projects</Link>
      </div>
      
      <CarouselClient />

      <header className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-6">
        <div>
          <h1 className="text-3xl font-semibold text-zinc-100">{project.name}</h1>
          <p className="text-sm text-zinc-400 mt-1">{project.date} — Team of {project.teamSize ?? '—'}</p>
        </div>

        {/* <div className="w-full md:w-1/3 h-40 relative rounded-lg overflow-hidden">
          <Image src={project.hero ?? project.image} alt={project.name} fill className="object-cover" />
        </div> */}
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-zinc-950 p-6 rounded-[12px]">
          <h2 className="text-xl font-medium text-zinc-100">Overview</h2>
          <p className="text-zinc-400 mt-2">{project.overview ?? project.description}</p>

          {project.features && (
            <>
              <h3 className="mt-4 text-zinc-100">Features</h3>
              <ul className="list-disc list-inside text-zinc-400">
                {project.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </>
          )}

          {project.challenges && (
            <>
              <h3 className="mt-4 text-zinc-100">Challenges & Learnings</h3>
              <p className="text-zinc-400">{project.challenges}</p>
            </>
          )}

          {project.outcome && (
            <>
              <h3 className="mt-4 text-zinc-100">Outcome</h3>
              <p className="text-zinc-400">{project.outcome}</p>
            </>
          )}

          {project.link && (
            // <p className="flex items-center group w-fit
            //   px-8 py-4 bg-zinc-600/30 rounded-2xl mt-4">
            //   <a href={project.link} target="_blank" rel="noopener noreferrer">
            //     View project repository / live site
            //   </a>
            //   <FaArrowRight
            //     className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
            //     size={24}
            //   />
            // </p>
            <p className="mt-4">
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline">
                View project repository / live site
              </a>
            </p>
          )}
        </div>

        <aside className="space-y-4">
          <div className="bg-zinc-950 p-4 rounded-[12px]">
            <h4 className="font-medium text-zinc-100">Tools</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tools.map((t) => <span key={t} className="rounded-full px-3 py-1 text-sm bg-zinc-800/70 text-zinc-300">{t}</span>)}
            </div>
          </div>

          {project.related?.length ? (
            <div className="bg-zinc-950 p-4 rounded-[12px]">
              <h4 className="font-medium text-zinc-100">View Other Projects</h4>
              <div className="mt-2 space-y-2">
                {project.related.map((id) => {
                  const r = PROJECTS.find(p => p.id === id)
                  return r ? (
                    <Link key={r.id} href={`/projects/${r.slug}`} className="text-zinc-300 hover:underline block">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-8">
                          <Image src={r.image} alt={r.name} fill className="object-cover rounded" />
                        </div>
                        <span>{r.name}</span>
                      </div>
                    </Link>
                  ) : null
                })}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  )
}
