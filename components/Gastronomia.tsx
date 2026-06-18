'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const platos = [
  {
    name: 'Cuchuco de trigo',
    img: '/cuchuco.png',
    desc: 'Sopa espesa y reconfortante a base de trigo, espinazo de cerdo y papas, símbolo de la cocina boyacense.',
  },
  {
    name: 'Mazamorra chiquita boyacense',
    img: '/mazamorra.png',
    desc: 'Un caldo abundante con maíz, habas, papas y carnes, perfecto para el frío de los Andes.',
  },
  {
    name: 'Chicha de maíz artesanal',
    img: '/chicha.png',
    desc: 'Bebida ancestral fermentada de maíz, heredada de la tradición Muisca y preparada de forma artesanal.',
  },
  {
    name: 'Arepas con cuajada',
    img: '/arepas.png',
    desc: 'Arepas de maíz doradas acompañadas de cuajada fresca, un clásico del desayuno campesino.',
  },
]

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Gastronomia() {
  return (
    <section id="gastronomia" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl text-rojo">Sabores ancestrales</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
            Gastronomía auténtica
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {platos.map((p) => (
            <motion.article
              key={p.name}
              variants={item}
              className="flex items-center gap-5 rounded-2xl border-l-4 border-rojo bg-crema p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-cafe">
                  {p.name}
                </h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
