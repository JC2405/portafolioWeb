'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'
import { useWireframe } from './WireframeContext'

export default function CTAFinal() {
  const { isWireframe: wf } = useWireframe()

  return (
    <section
      id="contacto"
      className={`relative overflow-hidden py-24 md:py-32 transition-colors duration-500 ${
        wf ? 'bg-gray-200' : 'bg-verde'
      }`}
    >
      {wf ? (
        /* Placeholder fondo */
        <div className="absolute inset-0 flex flex-col items-center justify-center border-y-2 border-dashed border-gray-400 bg-gray-200">
          <ImageIcon className="size-8 text-gray-400" strokeWidth={1} />
          <span className="mt-1 text-xs text-gray-400 tracking-widest uppercase">Imagen fondo CTA</span>
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
          <Image src="/paramo-oceta.png" alt="" fill sizes="100vw" aria-hidden="true" className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-verde/70" aria-hidden="true" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
      >
        {wf ? (
          <div className="flex flex-col items-center gap-4">
            <div className="h-6 w-56 rounded bg-gray-400" />
            <div className="h-10 w-72 rounded bg-gray-500" />
            <div className="h-10 w-64 rounded bg-gray-500" />
            <div className="mt-2 h-4 w-full rounded bg-gray-300" />
            <div className="h-4 w-4/5 rounded bg-gray-300" />
            <div className="mt-4 h-12 w-56 rounded-full border-2 border-gray-500 bg-gray-300" />
          </div>
        ) : (
          <>
            <p className="font-script text-3xl text-crema">Te esperamos en los Andes</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-white md:text-5xl">
              Tu próxima aventura comienza aquí
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-crema/90">
              Planifica tu viaje a la Provincia de Sugamuxi y déjate sorprender por
              la magia de su naturaleza, su cultura ancestral y sus sabores únicos.
            </p>
            <a
              href="#inicio"
              className="mt-9 inline-block rounded-full bg-rojo px-9 py-4 text-base font-semibold text-crema shadow-lg transition-colors hover:bg-cafe-dark"
            >
              Planea tu visita a Sugamuxi
            </a>
          </>
        )}
      </motion.div>
    </section>
  )
}
