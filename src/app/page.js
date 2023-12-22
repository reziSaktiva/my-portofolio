import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import CostumNavbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <CostumNavbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
}
