import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Destinos from '@/components/Destinos'
import MapaProvincia from '@/components/MapaProvincia'
import Experiencias from '@/components/Experiencias'
import LagoBanner from '@/components/LagoBanner'
import Galeria from '@/components/Galeria'
import Gastronomia from '@/components/Gastronomia'
import Testimonios from '@/components/Testimonios'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Destinos />
      <MapaProvincia />
      <Experiencias />
      <LagoBanner />
      <Galeria />
      <Gastronomia />
      <Testimonios />
      <CTAFinal />
      <Footer />
    </main>
  )
}
