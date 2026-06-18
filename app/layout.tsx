import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Satisfy } from 'next/font/google'
import './globals.css'
import { WireframeProvider } from '@/components/WireframeContext'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const satisfy = Satisfy({
  variable: '--font-satisfy',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sugamuxi · Vitrina Digital Turística de Boyacá',
  description:
    'Descubre la Provincia de Sugamuxi en Boyacá, Colombia: el Lago de Tota, el Páramo de Ocetá, el legado Muisca, su gastronomía auténtica y sus seis municipios mágicos.',
  generator: 'v0.app',
  keywords: [
    'Sugamuxi',
    'Boyacá',
    'Colombia',
    'turismo',
    'Lago de Tota',
    'Páramo de Ocetá',
    'Sogamoso',
    'Muisca',
  ],
  openGraph: {
    title: 'Sugamuxi · Donde el cielo toca la tierra',
    description:
      'Vitrina digital turística de la Provincia de Sugamuxi, Boyacá, Colombia. Naturaleza, cultura y gastronomía en los Andes.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Vitrina Digital Sugamuxi',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Lago de Tota en la Provincia de Sugamuxi, Boyacá',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#2D5016',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${satisfy.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <WireframeProvider>
          {children}
        </WireframeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
