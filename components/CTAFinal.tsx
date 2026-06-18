'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CTAFinal() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-verde py-24 md:py-32">
      <Image
        src="/paramo-oceta.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-verde/70" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
      >
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
      </motion.div>
    </section>
  )
}
