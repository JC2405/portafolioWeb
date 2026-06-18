'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'
import { useWireframe } from './WireframeContext'

const stats = [
  { value: 3015, suffix: ' m.s.n.m', label: 'Altitud sobre el mar' },
  { value: 55, suffix: ' km²', label: 'Extensión del lago' },
  { value: 1, prefix: 'N° ', label: 'Lago más grande de Colombia' },
]

function Counter({ value, prefix = '', suffix = '', start }: { value: number; prefix?: string; suffix?: string; start: boolean }) {
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
  return <span>{prefix}{display.toLocaleString('es-CO')}{suffix}</span>
}

export default function LagoBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const { isWireframe: wf } = useWireframe()

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden py-24 md:py-32 transition-colors duration-500 ${
        wf ? 'bg-gray-200' : ''
      }`}
    >
      {wf ? (
        /* Placeholder de imagen de fondo */
        <div className="absolute inset-0 flex flex-col items-center justify-center border-y-2 border-dashed border-gray-400 bg-gray-200">
          <ImageIcon className="size-10 text-gray-400" strokeWidth={1} />
          <span className="mt-2 text-xs text-gray-400 tracking-widest uppercase">Imagen Banner — 1920 × 600</span>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
      ) : (
        <>
          <Image src="/lago-banner.png" alt="Vista panorámica aérea del Lago de Tota" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,74,107,0.7)' }} aria-hidden="true" />
        </>
      )}

      <div className={`relative z-10 mx-auto max-w-5xl px-6 text-center ${wf ? 'text-gray-700' : 'text-white'}`}>
        {wf ? (
          <>
            <div className="mx-auto h-6 w-48 rounded bg-gray-400" />
            <div className="mx-auto mt-3 h-9 w-36 rounded bg-gray-500" />
          </>
        ) : (
          <>
            <p className="font-script text-3xl text-crema">El espejo de los Andes</p>
            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">Lago de Tota</h2>
          </>
        )}

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {wf ? (
                <>
                  <div className="mx-auto h-10 w-32 rounded bg-gray-400" />
                  <div className="mx-auto mt-2 h-3 w-40 rounded bg-gray-300" />
                </>
              ) : (
                <>
                  <p className="font-serif text-4xl font-bold text-crema md:text-5xl">
                    <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} start={inView} />
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-crema/80">{s.label}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
