'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#inicio"
          className={`font-serif text-2xl font-bold tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-verde' : 'text-crema'
          }`}
        >
          SUGAMUXI
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-rojo ${
                  scrolled ? 'text-verde' : 'text-crema'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden rounded-full bg-rojo px-5 py-2.5 text-sm font-semibold text-crema shadow-sm transition-colors duration-300 hover:bg-cafe-dark md:inline-block"
          >
            Planea tu visita
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`lg:hidden ${scrolled ? 'text-verde' : 'text-crema'}`}
          >
            <Menu className="size-7" />
          </button>
        </div>
      </nav>

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
              className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80%] flex-col bg-background p-6 shadow-xl lg:hidden"
              role="dialog"
              aria-label="Menú de navegación"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-bold text-verde">
                  SUGAMUXI
                </span>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                  className="text-cafe"
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
                      className="block rounded-lg px-3 py-3 text-base font-medium text-verde transition-colors hover:bg-crema hover:text-rojo"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-rojo px-5 py-3 text-center text-sm font-semibold text-crema transition-colors hover:bg-cafe-dark"
              >
                Planea tu visita
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
