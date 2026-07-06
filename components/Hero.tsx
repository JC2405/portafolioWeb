'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-slate-50"
    >
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
        alt="Código y setup de web moderna en light mode"
        fill
        priority
        className="object-cover opacity-10 md:opacity-20 mix-blend-luminosity"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(248,250,252,0.95) 0%, rgba(248,250,252,0.7) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="absolute top-1/3 left-1/4 size-96 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 size-[500px] rounded-full bg-violet-300/20 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="font-mono text-sm font-semibold tracking-wide text-blue-600">
            👋 Hola, mi nombre es
          </span>
        </motion.div>
        
        <h1 className="text-balance font-extrabold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            Julián
          </span>{' '}
          Chaparro
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl">
          Construyo experiencias digitales excepcionales. Soy un desarrollador apasionado por transformar ideas complejas en productos limpios, escalables y visualmente <b>asombrosos</b>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#proyectos"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(30,41,59,0.3)] sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex items-center gap-2">
              Ver mis proyectos
              <svg className="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </span>
          </a>
          <a
            href="#contacto"
            className="w-full rounded-2xl border-2 border-slate-200 bg-white/50 px-8 py-4 font-bold text-slate-700 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:shadow-lg sm:w-auto"
          >
            Contáctame
          </a>
        </div>
      </motion.div>
    </section>
  )
}
