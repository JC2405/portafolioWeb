'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { geoMercator, geoPath } from 'd3-geo'
import type { GeoPermissibleObjects } from 'd3-geo'
import { sugamuxiGeo } from '@/lib/sugamuxi-geo'

// 13 colores distintos, uno por municipio, dentro de una paleta cálida/andina cohesiva
const COLORS: Record<string, string> = {
  Sogamoso: '#8b2012',
  Aquitania: '#1a4a6b',
  Tota: '#2f7d8a',
  Cuítiva: '#3d8c6e',
  Iza: '#e0a92e',
  Firavitoba: '#c77d28',
  Tibasosa: '#a85d1f',
  Nobsa: '#7a4a9c',
  Gámeza: '#5c3a1e',
  Tópaga: '#b5472d',
  Mongua: '#2d5016',
  Monguí: '#3d6b1f',
  Pesca: '#6b8e23',
}

const DEFAULT_COLOR = '#5c3a1e'

const WIDTH = 760
const HEIGHT = 620

export default function MapaProvincia() {
  const [active, setActive] = useState<string | null>(null)

  // Proyección y generador de paths calculados una sola vez a partir del GeoJSON real
  const { paths, centroids } = useMemo(() => {
    const fc = sugamuxiGeo as unknown as GeoJSON.FeatureCollection
    const projection = geoMercator().fitExtent(
      [
        [24, 24],
        [WIDTH - 24, HEIGHT - 24],
      ],
      fc as unknown as GeoPermissibleObjects,
    )
    const pathGen = geoPath(projection)

    const paths = fc.features.map((f) => ({
      name: (f.properties as { name: string }).name,
      d: pathGen(f as unknown as GeoPermissibleObjects) ?? '',
    }))

    const centroids = fc.features.map((f) => {
      const [x, y] = pathGen.centroid(f as unknown as GeoPermissibleObjects)
      return { name: (f.properties as { name: string }).name, x, y }
    })

    return { paths, centroids }
  }, [])

  const municipios = paths.map((p) => p.name)

  return (
    <section id="mapa" className="bg-crema py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl text-rojo">Geografía de la provincia</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-verde md:text-4xl">
            El croquis de Sugamuxi
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-cafe">
            Trece municipios conforman la provincia de Sugamuxi, en el corazón de
            Boyacá. Pasa el cursor o toca cada zona del mapa para descubrirlos.
          </p>
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-md"
          >
            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="h-auto w-full"
              role="img"
              aria-label="Mapa de la provincia de Sugamuxi con sus municipios resaltados en distintos colores"
            >
              {paths.map((p) => {
                const isActive = active === p.name
                const dim = active !== null && !isActive
                return (
                  <path
                    key={p.name}
                    d={p.d}
                    fill={COLORS[p.name] ?? DEFAULT_COLOR}
                    stroke="#fffaf0"
                    strokeWidth={isActive ? 2.5 : 1.2}
                    style={{
                      cursor: 'pointer',
                      opacity: dim ? 0.4 : 1,
                      transformOrigin: 'center',
                      transition: 'opacity 0.25s ease, filter 0.25s ease',
                      filter: isActive
                        ? 'brightness(1.12) drop-shadow(0 4px 8px rgba(0,0,0,0.35))'
                        : 'none',
                    }}
                    onMouseEnter={() => setActive(p.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(p.name)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive(p.name)}
                    tabIndex={0}
                    aria-label={p.name}
                  >
                    <title>{p.name}</title>
                  </path>
                )
              })}

              {/* Etiquetas de los municipios */}
              {centroids.map((c) => {
                const isActive = active === c.name
                return (
                  <text
                    key={c.name}
                    x={c.x}
                    y={c.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    pointerEvents="none"
                    style={{
                      fontSize: isActive ? 14 : 10,
                      fontWeight: 700,
                      fill: '#fffaf0',
                      paintOrder: 'stroke',
                      stroke: 'rgba(43,32,24,0.55)',
                      strokeWidth: 2.4,
                      strokeLinejoin: 'round',
                      transition: 'font-size 0.2s ease',
                    }}
                  >
                    {c.name}
                  </text>
                )
              })}
            </svg>
          </motion.div>

          {/* Leyenda */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-xl font-bold text-verde">
              Municipios de la provincia
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {municipios.map((name) => {
                const isActive = active === name
                return (
                  <li key={name}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(name)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(name)}
                      onBlur={() => setActive(null)}
                      onClick={() => setActive(name)}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-sm transition-colors ${
                        isActive
                          ? 'bg-white font-semibold text-verde shadow-sm'
                          : 'text-cafe hover:bg-white/60'
                      }`}
                    >
                      <span
                        className="h-3.5 w-3.5 shrink-0 rounded-sm ring-1 ring-black/10"
                        style={{ backgroundColor: COLORS[name] ?? DEFAULT_COLOR }}
                        aria-hidden="true"
                      />
                      {name}
                    </button>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground">
              Mapa elaborado con datos geográficos oficiales del Marco
              Geoestadístico Nacional (DANE).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
