'use client'

import { useWireframe } from './WireframeContext'

const columnas = [
  { title: 'Destinos', links: ['Sogamoso', 'Iza', 'Firavitoba', 'Tópaga', 'Mongua', 'Aquitania'] },
  { title: 'Experiencias', links: ['Páramo de Ocetá', 'Avistamiento de aves', 'Turismo gastronómico', 'Termas de Iza', 'Ruta Muisca'] },
  { title: 'Contacto', links: ['Gobernación de Boyacá', 'Oficina de Turismo', 'info@sugamuxi.gov.co', '+57 (8) 770 0000'] },
]

const socials = [
  { name: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
  { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
]

export default function Footer() {
  const { isWireframe: wf } = useWireframe()

  return (
    <footer
      style={{ backgroundColor: wf ? '#d1d5db' : '#3B2010' }}
      className={`transition-colors duration-500 ${wf ? 'text-gray-700 border-t-2 border-gray-400' : 'text-crema'}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div>
            {wf ? (
              <>
                <div className="h-7 w-36 rounded bg-gray-500" />
                <div className="mt-4 space-y-1.5">
                  <div className="h-3 w-full rounded bg-gray-400" />
                  <div className="h-3 w-4/5 rounded bg-gray-400" />
                  <div className="h-3 w-3/4 rounded bg-gray-400" />
                </div>
                {/* Íconos sociales wireframe */}
                <div className="mt-5 flex gap-3">
                  {socials.map((s) => (
                    <div key={s.name} className="size-9 rounded-full border-2 border-gray-400 bg-gray-300" />
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="font-serif text-2xl font-bold tracking-wide">SUGAMUXI</span>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-crema/75">
                  Vitrina digital turística de la Provincia de Sugamuxi, Boyacá. Un
                  viaje al corazón ancestral de los Andes colombianos.
                </p>
                <div className="mt-5 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      aria-label={s.name}
                      className="flex size-9 items-center justify-center rounded-full bg-crema/10 transition-colors hover:bg-rojo"
                    >
                      <svg viewBox="0 0 24 24" className="size-4 fill-crema" aria-hidden="true">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Columnas de enlaces */}
          {columnas.map((col) => (
            <div key={col.title}>
              {wf ? (
                <>
                  <div className="h-4 w-24 rounded bg-gray-500" />
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <div className="h-3 w-32 rounded bg-gray-400" />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="font-serif text-base font-bold text-crema">{col.title}</h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-crema/75 transition-colors hover:text-amarillo">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        <div
          className={`mt-12 border-t pt-6 text-center text-xs ${
            wf ? 'border-gray-400 text-gray-500' : 'border-crema/15 text-crema/60'
          }`}
        >
          © 2025 Vitrina Digital Sugamuxi · Gobernación de Boyacá
        </div>
      </div>
    </footer>
  )
}
