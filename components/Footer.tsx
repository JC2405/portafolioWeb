  'use client'

  const columnas = [
    { title: 'Navegación', links: [{ label: 'Inicio', href: '#inicio' }, { label: 'Mis Habilidades', href: '#habilidades' }, { label: 'Proyectos', href: '#proyectos' }, { label: 'Contacto', href: 'https://www.linkedin.com/in/julian-chaparro-barrera-96a247403/' }] },
  
    { title: 'Contacto', links: [{ label: 'Disponibilidad: Full-time', href: '#' }, { label: 'Freelance: Abierto', href: '#' }, { label: 'chaparrobarrerajulian@gmail.com', href: 'mailto:julian.chaparro@example.com' }] },
  ]

  const socials = [
    { name: 'GitHub', href: 'https://github.com/JC2405/', hoverBg: '#24292e', hoverShadow: 'rgba(36,41,46,0.3)', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/julian-chaparro-barrera-96a247403/', hoverBg: '#0077B5', hoverShadow: 'rgba(0,119,181,0.3)', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Instagram', href: 'https://www.instagram.com/julian_xch/', hoverBg: '#E1306C', hoverShadow: 'rgba(225,48,108,0.3)', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  ]

  export default function Footer() {
    return (

      <footer id="foter" className="bg-white border-t border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
          <div className="grid gap-16 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <span className="font-mono text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                {'<Julián />'}
              </span>
              <p className="mt-6 text-pretty text-sm leading-relaxed text-slate-500 pr-4">
               Transformo ideas en aplicaciones web modernas, rápidas e intuitivas, utilizando tecnologías actuales para desarrollar soluciones funcionales, escalables y centradas en las personas/empresas.
              </p>
              <div className="mt-8 flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="group flex size-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:-translate-y-1"
                  >
                    <svg viewBox="0 0 24 24" className="size-5 fill-slate-400 transition-colors duration-300 group-hover:fill-white" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:col-span-3 lg:justify-items-end">
              {columnas.map((col) => (
                <div key={col.title} className="w-full sm:w-auto">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900">{col.title}</h3>
                  <ul className="mt-6 flex flex-col gap-4">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 font-medium">
              © {new Date().getFullYear()} Julián Chaparro. Todos los derechos reservados.
            </p>
            <p className="text-sm text-slate-400 font-medium">
              Construido con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Next.js & Tailwind</span>
            </p>
          </div>
        </div>
      </footer>
    )
  }
