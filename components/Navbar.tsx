'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Code, FolderGit2, Mail } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio', icon: <Home className="size-5" /> },
  { label: 'Habilidades', href: '#habilidades', icon: <Code className="size-5" /> },
  { label: 'Proyectos', href: '#proyectos', icon: <FolderGit2 className="size-5" /> },
  { label: 'Contacto', href: '#foter', icon: <Mail className="size-5" /> },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Manejar el blur y la sombra general al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ─── BARRA SUPERIOR FIJA ─── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          
          {/* Logo */}
          <a href="#inicio" className="group flex items-center gap-2">
            <span className="font-mono text-2xl font-black tracking-tighter text-slate-800 transition-colors group-hover:text-blue-600">
              {'<Julián />'}
            </span>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 bg-white/50 px-8 py-3 rounded-full border border-slate-200/50 shadow-sm backdrop-blur-md">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-slate-500 transition-all hover:text-blue-600 hover:-translate-y-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a
              href="https://www.linkedin.com/in/julian-chaparro-barrera-96a247403/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]"
            >
              Contactar
            </a>
          </div>

          {/* Botón Hamburger Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="group relative flex size-12 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-all hover:scale-105 hover:text-blue-600 border border-slate-100 md:hidden"
          >
            <Menu className="size-5 transition-transform group-hover:rotate-180" />
          </button>
        </div>
      </header>

      {/* ─── MENÚ MÓVIL FULLSCREEN ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] flex flex-col bg-slate-50/98 backdrop-blur-3xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-mono text-2xl font-black tracking-tighter text-blue-600">
                {'<Julián />'}
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex size-12 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-all hover:scale-110 hover:text-red-500 border border-slate-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-6 px-6 pb-20">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group flex items-center gap-6 rounded-3xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                    {link.icon}
                  </div>
                  <span className="text-xl font-bold text-slate-700 transition-colors group-hover:text-blue-600">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
