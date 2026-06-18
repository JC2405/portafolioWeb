'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Footprints, Bird, ChefHat, Waves, Compass } from 'lucide-react'

const experiencias = [
  {
    icon: Footprints,
    title: 'Senderismo al Páramo de Ocetá',
    desc: 'Recorre el "páramo más bello del mundo" entre frailejones gigantes y miradores infinitos.',
  },
  {
    icon: Bird,
    title: 'Avistamiento de aves endémicas',
    desc: 'Descubre colibríes y especies únicas en los humedales y bosques de altura de la provincia.',
  },
  {
    icon: ChefHat,
    title: 'Turismo gastronómico en Sogamoso',
    desc: 'Saborea recetas ancestrales boyacenses en mercados, fogones y restaurantes locales.',
  },
  {
    icon: Waves,
    title: 'Termas de Iza',
    desc: 'Relájate en aguas termales naturales rodeadas de paisajes coloniales y montañas.',
  },
  {
    icon: Compass,
    title: 'Ruta cultural Muisca',
    desc: 'Camina los caminos sagrados del pueblo Muisca y conoce el legado del Templo del Sol.',
  },
]

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Experiencias() {
  return (
    <section id="experiencias" className="bg-crema py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-72 overflow-hidden rounded-3xl shadow-lg sm:h-96 lg:col-span-3 lg:h-[34rem]"
        >
          <Image
            src="/experiencias.png"
            alt="Caminantes recorriendo el Páramo de Ocetá al atardecer"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </motion.div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-2xl text-rojo">Vive Sugamuxi</p>
            <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
              Experiencias inolvidables
            </h2>
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
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-verde/10 text-verde">
                  <e.icon className="size-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cafe">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {e.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <a
            href="#contacto"
            className="mt-8 inline-block rounded-full bg-rojo px-7 py-3 text-sm font-semibold text-crema transition-colors hover:bg-cafe-dark"
          >
            Ver todas las experiencias
          </a>
        </div>
      </div>
    </section>
  )
}
