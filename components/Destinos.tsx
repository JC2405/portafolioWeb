'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const municipios = [
  {
    name: 'Sogamoso',
    img: '/sogamoso.png',
    desc: 'La Ciudad del Sol, capital de la provincia y antiguo centro sagrado de la civilización Muisca.',
  },
  {
    name: 'Iza',
    img: '/iza.png',
    desc: 'Pueblo de postales coloniales, famoso por sus termales y su deliciosa plaza de postres.',
  },
  {
    name: 'Firavitoba',
    img: '/firavitoba.png',
    desc: 'Tierra de tradición agrícola coronada por una imponente iglesia de piedra neoclásica.',
  },
  {
    name: 'Tópaga',
    img: '/topaga.png',
    desc: 'Hogar de jardines topiarios únicos y una de las iglesias coloniales más bellas de Boyacá.',
  },
  {
    name: 'Mongua',
    img: '/mongua.png',
    desc: 'Puerta de entrada al páramo, entre montañas verdes, niebla y aire puro de altura.',
  },
  {
    name: 'Aquitania',
    img: '/aquitania.png',
    desc: 'A orillas del Lago de Tota, con sus cultivos de cebolla larga descendiendo hacia el agua.',
  },
]

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Destinos() {
  return (
    <section id="destinos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl text-rojo">Seis tesoros andinos</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
            Descubre nuestros municipios
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {municipios.map((m) => (
            <motion.article
              key={m.name}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={m.img}
                alt={`Vista de ${m.name}, Boyacá`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(59,32,16,0.92) 0%, rgba(59,32,16,0.35) 55%, transparent 100%)',
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {m.name}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-crema/90">
                  {m.desc}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-crema underline-offset-4 transition-colors group-hover:text-amarillo group-hover:underline">
                  Conocer más →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
