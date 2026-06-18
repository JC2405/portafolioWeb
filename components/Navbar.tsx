'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Layers, Eye } from 'lucide-react'
import { useWireframe } from './WireframeContext'

const links = [
  { label: 'Destinos', href: '#destinos' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Cultura', href: '#cultura' },
  { label: 'Gastronomía', href: '#gastronomia' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isWireframe, toggle } = useWireframe()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── estilos condicionales según modo ── */
  const wf = isWireframe

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        wf
          ? 'bg-white border-b-2 border-gray-400'
          : scrolled
          ? 'bg-background shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className={`font-serif text-2xl font-bold tracking-wide transition-colors duration-300 ${
            wf ? 'text-gray-700' : scrolled ? 'text-verde' : 'text-crema'
          }`}
        >
          {wf ? (
            <span className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded border-2 border-gray-400 bg-gray-200 text-xs text-gray-500">
                S
              </span>
              SUGAMUXI
            </span>
          ) : (
            'SUGAMUXI'
          )}
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  wf
                    ? 'text-gray-500 underline decoration-gray-300 hover:text-gray-800'
                    : `hover:text-rojo ${scrolled ? 'text-verde' : 'text-crema'}`
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          {/* ── Toggle Wireframe ── */}
          <button
            id="wireframe-toggle"
            type="button"
            onClick={toggle}
            title={wf ? 'Ver con colores' : 'Ver wireframe'}
            className={`
              flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold
              border-2 transition-all duration-300 cursor-pointer select-none
              ${wf
                ? 'border-gray-400 bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'border-crema/60 bg-white/10 text-crema hover:bg-white/20 backdrop-blur-sm'
              }
              ${scrolled && !wf ? 'border-verde/40 bg-verde/10 text-verde hover:bg-verde/20' : ''}
            `}
          >
            {wf ? (
              <>
                <Eye className="size-3.5" />
                <span className="hidden sm:inline">Ver Colores</span>
              </>
            ) : (
              <>
                <Layers className="size-3.5" />
                <span className="hidden sm:inline">Wireframe</span>
              </>
            )}
          </button>

          <a
            href="#contacto"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-300 md:inline-block ${
              wf
                ? 'border-2 border-gray-400 bg-white text-gray-700 hover:bg-gray-100'
                : 'bg-rojo text-crema hover:bg-cafe-dark'
            }`}
          >
            Planea tu visita
          </a>

          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`lg:hidden ${wf ? 'text-gray-600' : scrolled ? 'text-verde' : 'text-crema'}`}
          >
            <Menu className="size-7" />
          </button>
        </div>
      </nav>

      {/* ── Banner modo wireframe ── */}
      <AnimatePresence>
        {wf && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-gray-300 bg-gray-100"
          >
            <p className="py-1.5 text-center text-xs font-medium tracking-widest text-gray-400 uppercase">
              🖊 Modo Wireframe — Vista esquemática sin colores ni imágenes
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Drawer móvil ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-cafe-dark/50 lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80%] flex-col p-6 shadow-xl lg:hidden ${
                wf ? 'bg-white border-l-2 border-gray-300' : 'bg-background'
              }`}
              role="dialog"
              aria-label="Menú de navegación"
            >
              <div className="flex items-center justify-between">
                <span className={`font-serif text-xl font-bold ${wf ? 'text-gray-700' : 'text-verde'}`}>
                  SUGAMUXI
                </span>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                  className={wf ? 'text-gray-400' : 'text-cafe'}
                >
                  <X className="size-6" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        wf
                          ? 'text-gray-600 border border-gray-200 hover:bg-gray-50'
                          : 'text-verde hover:bg-crema hover:text-rojo'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className={`mt-6 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  wf
                    ? 'border-2 border-gray-400 bg-white text-gray-700 hover:bg-gray-100'
                    : 'bg-rojo text-crema hover:bg-cafe-dark'
                }`}
              >
                Planea tu visita
              </a>

              {/* Toggle en menú móvil */}
              <button
                type="button"
                onClick={() => { toggle(); setOpen(false) }}
                className={`mt-4 flex items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                  wf
                    ? 'border-gray-400 bg-gray-100 text-gray-700'
                    : 'border-verde text-verde hover:bg-verde/10'
                }`}
              >
                {wf ? <><Eye className="size-4" /> Ver Colores</> : <><Layers className="size-4" /> Modo Wireframe</>}
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
