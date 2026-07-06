import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Satisfy } from 'next/font/google'
import './globals.css'

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
  title: 'Julián Chaparro · Desarrollador Web Full Stack',
  description:
    'Portafolio de Julián Chaparro, programador enfocado en crear experiencias digitales excepcionales, limpias y altamente escalables.',
  generator: 'v0.app',
  keywords: [
    'Portfolio',
    'Programmer',
    'Developer',
    'Web Development',
    'Software Engineer',
    'React',
    'Next.js',
  ],
  openGraph: {
    title: 'Julián Chaparro | Portafolio Tech',
    description:
      'Explora mis últimos proyectos, habilidades técnicas y experiencia profesional como desarrollador de software.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dev Portfolio',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Julián Chaparro Portfolio',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
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
      className={`${playfair.variable} ${inter.variable} ${satisfy.variable} bg-slate-50`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

