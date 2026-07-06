import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Destinos from '@/components/Destinos'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-blue-500/30">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Features />
        <Destinos />
        <Footer />
      </main>
    </div>
  )
}
