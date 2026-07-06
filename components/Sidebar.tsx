'use client'

import { useState } from 'react'
import { Menu, X, Home, Code, FolderGit2, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio', icon: <Home className="size-5" /> },
  { label: 'Habilidades', href: '#cultura', icon: <Code className="size-5" /> },
  { label: 'Proyectos', href: '#proyectos', icon: <FolderGit2 className="size-5" /> },
  { label: 'Contacto', href: '#contacto', icon: <Mail className="size-5" /> },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between p-8 bg-white/60 backdrop-blur-3xl">
      <div>
        <a href="#inicio" className="font-mono text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 drop-shadow-sm">
          {'<Julián />'}
        </a>
        <nav className="mt-14 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-5 rounded-2xl px-5 py-4 text-base font-bold text-slate-500 transition-all duration-300 hover:bg-white hover:text-blue-600 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-slate-100"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 decoration-slate-200 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:scale-110">
                {link.icon}
              </div>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="pb-4">
        <div className="rounded-3xl bg-gradient-to-tr from-blue-600 to-violet-600 p-[2px] shadow-lg shadow-blue-500/20">
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-[22px] bg-white px-4 py-3.5 text-sm font-bold text-slate-800 transition-all hover:bg-transparent hover:text-white"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 flex w-full items-center justify-between px-6 py-4 transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' : 'bg-transparent'
        }`}
      >
        <span className="font-mono text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 drop-shadow-sm">
          {'<Julián />'}
        </span>
        <button
          onClick={() => setOpen(true)}
          className="group relative flex size-12 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all hover:scale-105 hover:text-blue-600 hover:shadow-[0_4px_25px_rgb(0,0,0,0.1)] border border-slate-100"
        >
          <Menu className="size-6 transition-transform duration-300 group-hover:rotate-180" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
            />
            {/* Panel */}
            <motion.aside
              initial={{ x: '-100%', borderTopRightRadius: '100px', borderBottomRightRadius: '100px' }}
              animate={{ x: 0, borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
              exit={{ x: '-100%', borderTopRightRadius: '100px', borderBottomRightRadius: '100px' }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm flex flex-col bg-slate-50/90 shadow-2xl overflow-hidden backdrop-blur-2xl border-r border-white"
            >
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={() => setOpen(false)}
                  className="flex size-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-all hover:scale-110 hover:bg-slate-100 hover:text-red-500"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {sidebarContent}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
