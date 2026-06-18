'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Footprints, Bird, ChefHat, Waves, Compass, Image as ImageIcon } from 'lucide-react'
import { useWireframe } from './WireframeContext'

const experiencias = [
  { icon: Footprints, title: 'Senderismo al Páramo de Ocetá', desc: 'Recorre el "páramo más bello del mundo" entre frailejones gigantes y miradores infinitos.' },
  { icon: Bird, title: 'Avistamiento de aves endémicas', desc: 'Descubre colibríes y especies únicas en los humedales y bosques de altura de la provincia.' },
  { icon: ChefHat, title: 'Turismo gastronómico en Sogamoso', desc: 'Saborea recetas ancestrales boyacenses en mercados, fogones y restaurantes locales.' },
  { icon: Waves, title: 'Termas de Iza', desc: 'Relájate en aguas termales naturales rodeadas de paisajes coloniales y montañas.' },
  { icon: Compass, title: 'Ruta cultural Muisca', desc: 'Camina los caminos sagrados del pueblo Muisca y conoce el legado del Templo del Sol.' },
]

const item = { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }

export default function Experiencias() {
  const { isWireframe: wf } = useWireframe()

  return (
    <section
      id="experiencias"
      className={`py-20 md:py-28 transition-colors duration-500 ${wf ? 'bg-gray-50' : 'bg-crema'}`}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-5">
        {/* Imagen / Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`relative h-72 overflow-hidden rounded-3xl sm:h-96 lg:col-span-3 lg:h-[34rem] ${
            wf ? 'border-2 border-dashed border-gray-400 bg-gray-100' : 'shadow-lg'
          }`}
        >
          {wf ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-400">
              <ImageIcon className="size-12" strokeWidth={1} />
              <span className="text-sm font-medium tracking-wide">Imagen Experiencias</span>
              <span className="text-xs text-gray-300">600 × 540</span>
            </div>
          ) : (
            <Image
              src="/experiencias.png"
              alt="Caminantes recorriendo el Páramo de Ocetá al atardecer"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          )}
        </motion.div>

        {/* Lista de experiencias */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {wf ? (
              <>
                <div className="h-5 w-32 rounded bg-gray-300" />
                <div className="mt-3 h-8 w-56 rounded bg-gray-400" />
              </>
            ) : (
              <>
                <p className="font-script text-2xl text-rojo">Vive Sugamuxi</p>
                <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
                  Experiencias inolvidables
                </h2>
              </>
            )}
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="mt-8 flex flex-col gap-5"
          >
            {experiencias.map((e) => (
              <motion.li key={e.title} variants={item} className="flex gap-4">
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                    wf ? 'border-2 border-gray-300 bg-white text-gray-500' : 'bg-verde/10 text-verde'
                  }`}
                >
                  <e.icon className="size-5" strokeWidth={1.5} />
                </div>
                <div>
                  {wf ? (
                    <>
                      <div className="h-4 w-44 rounded bg-gray-400" />
                      <div className="mt-2 h-3 w-full rounded bg-gray-200" />
                      <div className="mt-1 h-3 w-4/5 rounded bg-gray-200" />
                    </>
                  ) : (
                    <>
                      <h3 className="font-serif text-lg font-bold text-cafe">{e.title}</h3>
                      <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                    </>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className={`mt-8 inline-block rounded-full px-7 py-3 text-sm font-semibold transition-colors ${
            wf
              ? 'border-2 border-gray-400 bg-white text-gray-600'
              : 'bg-rojo text-crema hover:bg-cafe-dark'
          }`}>
            {wf ? (
              <div className="h-4 w-44 rounded bg-gray-300" />
            ) : (
              <a href="#contacto">Ver todas las experiencias</a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
