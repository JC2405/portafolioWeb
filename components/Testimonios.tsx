'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonios = [
  {
    name: 'Camila Rodríguez',
    city: 'Bogotá, Colombia',
    text: 'El amanecer sobre el Lago de Tota fue mágico. Sugamuxi superó todas mis expectativas: naturaleza, historia y la calidez de su gente.',
  },
  {
    name: 'Andrés Mejía',
    city: 'Medellín, Colombia',
    text: 'Caminar por el Páramo de Ocetá entre frailejones es una experiencia que todo colombiano debería vivir al menos una vez.',
  },
  {
    name: 'Sofía Hernández',
    city: 'Tunja, Colombia',
    text: 'La gastronomía boyacense me conquistó. El cuchuco y la chicha artesanal saben a tradición y a hogar. ¡Volveré pronto!',
  },
]

export default function Testimonios() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonios.length),
    [],
  )
  const prev = () =>
    setIndex((i) => (i - 1 + testimonios.length) % testimonios.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  const t = testimonios[index]

  return (
    <section
      className="bg-crema py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-script text-2xl text-rojo">Lo que dicen los viajeros</p>
        <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
          Historias de Sugamuxi
        </h2>

        <div className="relative mt-12 min-h-[18rem] sm:min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-background p-8 shadow-md md:p-10"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-verde/10">
                <span className="font-serif text-2xl font-bold text-verde">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div className="mt-4 flex justify-center gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-amarillo text-amarillo"
                  />
                ))}
              </div>
              <p className="mt-4 text-pretty text-lg italic leading-relaxed text-cafe">
                {'"'}
                {t.text}
                {'"'}
              </p>
              <footer className="mt-5">
                <p className="font-serif text-base font-bold text-verde">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.city}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={prev}
            className="flex size-10 items-center justify-center rounded-full bg-background text-verde shadow-sm transition-colors hover:bg-verde hover:text-crema"
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
                  i === index ? 'bg-rojo' : 'bg-cafe/30'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Siguiente testimonio"
            onClick={next}
            className="flex size-10 items-center justify-center rounded-full bg-background text-verde shadow-sm transition-colors hover:bg-verde hover:text-crema"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
