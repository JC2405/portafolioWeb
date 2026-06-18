'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ZoomIn, Image as ImageIcon } from 'lucide-react'
import { useWireframe } from './WireframeContext'

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

// Alturas fijas para el modo wireframe (masonry simulado)
const wfHeights = [240, 180, 200, 220, 160, 200, 240, 180]

export default function Galeria() {
  const { isWireframe: wf } = useWireframe()

  return (
    <section className="bg-background py-20 md:py-28" id="galeria">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {wf ? (
            <>
              <div className="mx-auto h-5 w-44 rounded bg-gray-300" />
              <div className="mx-auto mt-3 h-8 w-56 rounded bg-gray-400" />
            </>
          ) : (
            <>
              <p className="font-script text-2xl text-rojo">Postales de Sugamuxi</p>
              <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
                Galería de paisajes
              </h2>
            </>
          )}
        </motion.div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              className={`group relative break-inside-avoid overflow-hidden rounded-2xl ${
                wf
                  ? 'border-2 border-dashed border-gray-300 bg-gray-100'
                  : 'shadow-sm'
              }`}
              style={wf ? { height: wfHeights[i] } : undefined}
            >
              {wf ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-gray-400">
                  <ImageIcon className="size-7" strokeWidth={1} />
                  <span className="px-4 text-center text-xs">{img.alt}</span>
                </div>
              ) : (
                <>
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
                </>
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
