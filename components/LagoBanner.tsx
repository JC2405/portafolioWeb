'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 3015, suffix: ' m.s.n.m', label: 'Altitud sobre el mar' },
  { value: 55, suffix: ' km²', label: 'Extensión del lago' },
  { value: 1, prefix: 'N° ', label: 'Lago más grande de Colombia' },
]

function Counter({
  value,
  prefix = '',
  suffix = '',
  start,
}: {
  value: number
  prefix?: string
  suffix?: string
  start: boolean
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf: number
    const duration = 1600
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  return (
    <span>
      {prefix}
      {display.toLocaleString('es-CO')}
      {suffix}
    </span>
  )
}

export default function LagoBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-24 md:py-32"
    >
      <Image
        src="/lago-banner.png"
        alt="Vista panorámica aérea del Lago de Tota"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(26,74,107,0.7)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="font-script text-3xl text-crema">El espejo de los Andes</p>
        <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
          Lago de Tota
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="font-serif text-4xl font-bold text-crema md:text-5xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  start={inView}
                />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-crema/80">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
