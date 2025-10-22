'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { PROJECTS } from '../../data'

export default function CarouselClient() {
  const params = useParams()
  const slug = params?.slug
  const project = PROJECTS.find((p) => p.slug === slug)
  const samples = project?.samples ?? []

  const [idx, setIdx] = useState(0)

  // reset index if slug changes
  useEffect(() => {
    setIdx(0)
  }, [slug])

  if (!project || samples.length === 0) return null

  const prev = () => setIdx((i) => (i - 1 + samples.length) % samples.length)
  const next = () => setIdx((i) => (i + 1) % samples.length)

  return (
    <section className="space-y-3">
      {/* <h3 className="text-xl font-medium text-zinc-100">Sample Photos</h3> */}

      <div className="relative rounded-lg overflow-hidden bg-zinc-900 mx-12">
        <div className="h-64 md:h-144 relative">
          <Image src={samples[idx]} alt={`${project.name} sample ${idx}`} fill className="object-cover" />
        </div>

        <button onClick={prev} aria-label="previous" className="absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-800/60 p-2 rounded-full">
          ‹
        </button>
        <button onClick={next} aria-label="next" className="absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-800/60 p-2 rounded-full">
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {samples.map((s, i) => (
            <button
              key={s}
              onClick={() => setIdx(i)}
              className={`w-10 h-10 rounded-md overflow-hidden border-2 ${i === idx ? 'border-zinc-200' : 'border-transparent'}`}
            >
              <div className="relative w-full h-full">
                <Image src={s} alt={`thumb-${i}`} fill className="object-cover" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
