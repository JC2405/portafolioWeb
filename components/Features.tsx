'use client'

import { motion } from 'framer-motion'
import { Mountain, Landmark, UtensilsCrossed } from 'lucide-react'

const features = [
  {
    icon: Mountain,
    title: 'Naturaleza Única',
    desc: 'El Lago de Tota, el majestuoso Páramo de Ocetá y termales naturales que renuevan el cuerpo y el alma.',
  },
  {
    icon: Landmark,
    title: 'Riqueza Cultural',
    desc: 'El legado de la civilización Muisca, artesanías hechas a mano y festividades que mantienen viva la tradición.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Gastronomía Auténtica',
    desc: 'Sabores ancestrales como el cuchuco, la mazamorra chiquita y la chicha de maíz preparada de forma artesanal.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section id="cultura" className="bg-crema py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl text-rojo">Tres razones para venir</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
            Un destino que despierta los sentidos
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="rounded-2xl bg-background p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-verde/10 text-verde">
                <f.icon className="size-8" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-cafe">
                {f.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
