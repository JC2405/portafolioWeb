'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const proyectos = [
  { name: 'Sistema De Gestion Inventarios Sena', github: 'https://github.com/Gabriel3555/SGDIS', img: 'https://plus.unsplash.com/premium_photo-1681426710520-7c56c9f563d2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Sistema multiplataforma de gestión de inventarios basado en microservicios con Spring Boot.' },
  { name: 'Sistema De Programación Horarios', github: 'https://github.com/JC2405/laravel_h', img: 'https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'API REST desarrollada en Laravel para la gestión de horarios académicos (SENA),con detección automática de conflictos. ' },
  { name: 'Sistema De Gestion De citas Medicas', github: 'https://github.com/JC2405/SGC', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop', desc: 'API REST para la gestion de citas medicas, manejando diferentes Roles mejorando la comunicacion cliente empresa.' },
  { name: 'Sistema De inventario/Facturacion', github: 'https://github.com/JC2405/sistemaFacturacionInventario', img: 'https://plus.unsplash.com/premium_photo-1679923906285-386991e8d862?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Sistema de gestion de inventarios para tiendas con facturación.' },
  { name: 'Consumo Multiplataforma', github: 'https://github.com/JC2405/mobile_React', img: 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Consumo multiplataforma de API REST gestion de citas medicas  . ' },
  { name: 'Sistema Asistencia ', github: 'https://github.com/JC2405/sistema_formacion', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop', desc: 'Plataforma para el Seguimiento de Aprendices en Lectiva.' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }

export default function Destinos() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-mono text-sm font-bold tracking-widest text-violet-600 uppercase">
            Portafolio
          </span>
          <h2 className="mt-4 text-balance font-extrabold text-4xl text-slate-900 md:text-5xl lg:text-6xl tracking-tight">
            Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Destacados</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {proyectos.map((p) => (
            <motion.article
              key={p.name}
              variants={item}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 border border-slate-200/50 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-52 sm:h-56 w-full shrink-0">
                <Image
                  src={p.img}
                  alt={`Proyecto ${p.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.6) 100%)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Contenido SIEMPRE visible */}
              <div className="flex flex-col flex-1 gap-3 p-6">
                <h3 className="text-xl font-bold tracking-tight text-slate-900">{p.name}</h3>
                <p className="text-sm leading-relaxed text-slate-500 line-clamp-3 flex-1">
                  {p.desc}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)]"
                  >
                    Ver Repo
                    <GithubIcon className="size-4" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-blue-500 hover:text-blue-600"
                    aria-label="Ir al repositorio"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
