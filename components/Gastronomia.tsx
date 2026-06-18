'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'
import { useWireframe } from './WireframeContext'

const platos = [
  { name: 'Cuchuco de trigo', img: '/cuchuco.png', desc: 'Sopa espesa y reconfortante a base de trigo, espinazo de cerdo y papas, símbolo de la cocina boyacense.' },
  { name: 'Mazamorra chiquita boyacense', img: '/mazamorra.png', desc: 'Un caldo abundante con maíz, habas, papas y carnes, perfecto para el frío de los Andes.' },
  { name: 'Chicha de maíz artesanal', img: '/chicha.png', desc: 'Bebida ancestral fermentada de maíz, heredada de la tradición Muisca y preparada de forma artesanal.' },
  { name: 'Arepas con cuajada', img: '/arepas.png', desc: 'Arepas de maíz doradas acompañadas de cuajada fresca, un clásico del desayuno campesino.' },
]

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Gastronomia() {
  const { isWireframe: wf } = useWireframe()

  return (
    <section
      id="gastronomia"
      className={`py-20 md:py-28 transition-colors duration-500 ${wf ? 'bg-gray-50' : 'bg-background'}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {wf ? (
            <>
              <div className="mx-auto h-5 w-36 rounded bg-gray-300" />
              <div className="mx-auto mt-3 h-8 w-52 rounded bg-gray-400" />
            </>
          ) : (
            <>
              <p className="font-script text-2xl text-rojo">Sabores ancestrales</p>
              <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
                Gastronomía auténtica
              </h2>
            </>
          )}
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
              className={`flex items-center gap-5 rounded-2xl p-4 transition-shadow ${
                wf
                  ? 'border-2 border-gray-300 bg-white shadow-none'
                  : 'border-l-4 border-rojo bg-crema shadow-sm hover:shadow-md'
              }`}
            >
              {/* Imagen / Placeholder */}
              <div
                className={`relative shrink-0 overflow-hidden rounded-xl sm:size-28 ${
                  wf
                    ? 'flex size-24 items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100'
                    : 'size-24'
                }`}
              >
                {wf ? (
                  <div className="flex flex-col items-center justify-center gap-1 text-gray-400">
                    <ImageIcon className="size-6" strokeWidth={1} />
                    <span className="text-[10px]">112×112</span>
                  </div>
                ) : (
                  <Image src={p.img} alt={p.name} fill sizes="112px" className="object-cover" />
                )}
              </div>

              <div className="flex-1">
                {wf ? (
                  <>
                    <div className="h-4 w-40 rounded bg-gray-400" />
                    <div className="mt-2 h-3 w-full rounded bg-gray-200" />
                    <div className="mt-1 h-3 w-4/5 rounded bg-gray-200" />
                  </>
                ) : (
                  <>
                    <h3 className="font-serif text-lg font-bold text-cafe">{p.name}</h3>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
