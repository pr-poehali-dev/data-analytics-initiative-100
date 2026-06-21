import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import { Shield, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge - customize your announcement */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
          <Shield className="w-4 h-4 text-zinc-400" />
          <span className="text-sm text-zinc-400">FIRE | Войсковая часть № 9170174</span>
        </div>

        {/* Headline - customize your value proposition */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-zinc-100 block">Взвод Военной</span>
          <span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Полиции
          </span>
        </h1>

        {/* Subheadline - describe your product */}
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Официальный ресурс Военной полиции фракции «Воинская часть». Для курсантов и сотрудников — вся информация о ревизиях, аттестации и контактах командования.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing">
            <LiquidCtaButton>Контакты командования</LiquidCtaButton>
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Ревизии и аттестация</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>


      </div>
    </section>
  )
}