'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

const images = [
  { src: '/gallery-1.png', alt: 'Frailejones del Páramo de Ocetá' },
  { src: '/gallery-2.png', alt: 'Artesanías tradicionales de Boyacá' },
  { src: '/gallery-3.png', alt: 'Botes en Playa Blanca, Lago de Tota' },
  { src: '/gallery-4.png', alt: 'Iglesia colonial al atardecer' },
  { src: '/gallery-5.png', alt: 'Colibrí endémico de los Andes' },
  { src: '/gallery-6.png', alt: 'Cultivos de cebolla junto al Lago de Tota' },
  { src: '/gallery-7.png', alt: 'Termales naturales de Iza' },
  { src: '/gallery-8.png', alt: 'Amanecer entre las montañas de Sugamuxi' },
]

export default function Galeria() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl text-rojo">Postales de Sugamuxi</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
            Galería de paisajes
          </h2>
        </motion.div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={i % 2 === 0 ? 800 : 600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-verde/0 opacity-0 transition-all duration-300 group-hover:bg-verde/55 group-hover:opacity-100">
                <ZoomIn className="size-9 text-crema" strokeWidth={1.5} />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
