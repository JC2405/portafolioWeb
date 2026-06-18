'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Image as ImageIcon } from 'lucide-react'
import { useWireframe } from './WireframeContext'

export default function Hero() {
  const { isWireframe: wf } = useWireframe()

  return (
    <section
      id="inicio"
      className={`relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden transition-colors duration-500 ${
        wf ? 'bg-gray-200' : ''
      }`}
    >
      {/* Imagen real o placeholder */}
      {wf ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 border-b-2 border-gray-400">
          <ImageIcon className="size-16 text-gray-400" strokeWidth={1} />
          <span className="mt-3 text-sm font-medium text-gray-400 tracking-widest uppercase">
            Imagen Hero — 1920 × 1080
          </span>
          {/* Grid de wireframe */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      ) : (
        <>
          <Image
            src="/hero.png"
            alt="Vista panorámica del Lago de Tota en la Provincia de Sugamuxi, Boyacá"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(45,80,22,0.85) 0%, rgba(45,80,22,0.45) 45%, rgba(45,80,22,0.1) 100%)',
            }}
            aria-hidden="true"
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        {wf ? (
          /* ── WIREFRAME: bloques rectangulares ── */
          <div className="flex flex-col items-center gap-4">
            {/* Badge */}
            <div className="h-6 w-72 rounded bg-gray-400/60" />
            {/* Título H1 */}
            <div className="h-12 w-full rounded bg-gray-500/60" />
            <div className="h-12 w-4/5 rounded bg-gray-500/60" />
            {/* Subtítulo */}
            <div className="mt-2 h-4 w-3/4 rounded bg-gray-400/50" />
            <div className="h-4 w-2/3 rounded bg-gray-400/50" />
            {/* Botones */}
            <div className="mt-6 flex gap-4">
              <div className="h-11 w-40 rounded-full border-2 border-gray-500 bg-gray-300/60" />
              <div className="h-11 w-40 rounded-full border-2 border-gray-500 bg-transparent" />
            </div>
          </div>
        ) : (
          /* ── COLOR: contenido real ── */
          <>
            <p className="font-script text-2xl text-crema md:text-3xl">
              Provincia de Sugamuxi · Boyacá, Colombia
            </p>
            <h1 className="mt-3 text-balance font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Donde el cielo toca la tierra
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-crema/90 md:text-lg">
              Lagos sagrados, páramos de frailejones, legado Muisca y sabores
              ancestrales. Descubre el corazón ancestral de los Andes colombianos.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#destinos"
                className="w-full rounded-full bg-verde px-8 py-3.5 text-sm font-semibold text-crema shadow-lg transition-colors hover:bg-verde-light sm:w-auto"
              >
                Explorar destinos
              </a>
              <a
                href="#experiencias"
                className="w-full rounded-full border-2 border-crema px-8 py-3.5 text-sm font-semibold text-crema transition-colors hover:bg-crema hover:text-verde sm:w-auto"
              >
                Ver experiencias
              </a>
            </div>
          </>
        )}
      </motion.div>

      <motion.a
        href="#cultura"
        aria-label="Desplazarse a la siguiente sección"
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 ${wf ? 'text-gray-500' : 'text-crema'}`}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="size-8" />
      </motion.a>
    </section>
  )
}
