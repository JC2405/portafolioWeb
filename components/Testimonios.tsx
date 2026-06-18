'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useWireframe } from './WireframeContext'

const testimonios = [
  { name: 'Camila Rodríguez', city: 'Bogotá, Colombia', text: 'El amanecer sobre el Lago de Tota fue mágico. Sugamuxi superó todas mis expectativas: naturaleza, historia y la calidez de su gente.' },
  { name: 'Andrés Mejía', city: 'Medellín, Colombia', text: 'Caminar por el Páramo de Ocetá entre frailejones es una experiencia que todo colombiano debería vivir al menos una vez.' },
  { name: 'Sofía Hernández', city: 'Tunja, Colombia', text: 'La gastronomía boyacense me conquistó. El cuchuco y la chicha artesanal saben a tradición y a hogar. ¡Volveré pronto!' },
]

export default function Testimonios() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const { isWireframe: wf } = useWireframe()

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonios.length), [])
  const prev = () => setIndex((i) => (i - 1 + testimonios.length) % testimonios.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  const t = testimonios[index]

  return (
    <section
      className={`py-20 md:py-28 transition-colors duration-500 ${wf ? 'bg-white' : 'bg-crema'}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        {wf ? (
          <>
            <div className="mx-auto h-5 w-48 rounded bg-gray-300" />
            <div className="mx-auto mt-3 h-8 w-60 rounded bg-gray-400" />
          </>
        ) : (
          <>
            <p className="font-script text-2xl text-rojo">Lo que dicen los viajeros</p>
            <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
              Historias de Sugamuxi
            </h2>
          </>
        )}

        <div className="relative mt-12 min-h-[18rem] sm:min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl p-8 md:p-10 ${
                wf ? 'border-2 border-gray-300 bg-gray-50 shadow-none' : 'bg-background shadow-md'
              }`}
            >
              {/* Avatar */}
              <div
                className={`mx-auto flex size-16 items-center justify-center rounded-full ${
                  wf ? 'border-2 border-gray-400 bg-gray-200' : 'bg-verde/10'
                }`}
              >
                {wf ? (
                  <div className="size-8 rounded-full bg-gray-400" />
                ) : (
                  <span className="font-serif text-2xl font-bold text-verde">{t.name.charAt(0)}</span>
                )}
              </div>

              {/* Estrellas */}
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${wf ? 'fill-gray-300 text-gray-300' : 'fill-amarillo text-amarillo'}`}
                  />
                ))}
              </div>

              {/* Texto */}
              {wf ? (
                <div className="mt-4 space-y-2">
                  <div className="mx-auto h-4 w-full rounded bg-gray-200" />
                  <div className="mx-auto h-4 w-11/12 rounded bg-gray-200" />
                  <div className="mx-auto h-4 w-4/5 rounded bg-gray-200" />
                </div>
              ) : (
                <p className="mt-4 text-pretty text-lg italic leading-relaxed text-cafe">
                  {'"'}{t.text}{'"'}
                </p>
              )}

              <footer className="mt-5">
                {wf ? (
                  <>
                    <div className="mx-auto h-4 w-36 rounded bg-gray-400" />
                    <div className="mx-auto mt-1 h-3 w-28 rounded bg-gray-300" />
                  </>
                ) : (
                  <>
                    <p className="font-serif text-base font-bold text-verde">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.city}</p>
                  </>
                )}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={prev}
            className={`flex size-10 items-center justify-center rounded-full shadow-sm transition-colors ${
              wf
                ? 'border-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-100'
                : 'bg-background text-verde hover:bg-verde hover:text-crema'
            }`}
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex gap-2">
            {testimonios.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir al testimonio ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`size-2.5 rounded-full transition-colors ${
                  i === index
                    ? wf ? 'bg-gray-500' : 'bg-rojo'
                    : wf ? 'bg-gray-300' : 'bg-cafe/30'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Siguiente testimonio"
            onClick={next}
            className={`flex size-10 items-center justify-center rounded-full shadow-sm transition-colors ${
              wf
                ? 'border-2 border-gray-300 bg-white text-gray-500 hover:bg-gray-100'
                : 'bg-background text-verde hover:bg-verde hover:text-crema'
            }`}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
