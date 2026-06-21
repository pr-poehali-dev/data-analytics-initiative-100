import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { PatrolSection } from "@/components/sections/PatrolSection"
import { FooterSection } from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <HeroSection />
        <PricingSection />
        <PatrolSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default Index