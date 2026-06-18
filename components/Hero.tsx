'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <Image
        src="/hero.png"
        alt="Vista panorámica del Lago de Tota en la Provincia de Sugamuxi, Boyacá"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Verde gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(45,80,22,0.85) 0%, rgba(45,80,22,0.45) 45%, rgba(45,80,22,0.1) 100%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
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
      </motion.div>

      <motion.a
        href="#cultura"
        aria-label="Desplazarse a la siguiente sección"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-crema"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="size-8" />
      </motion.a>
    </section>
  )
}
