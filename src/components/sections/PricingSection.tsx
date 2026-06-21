import { Phone } from "lucide-react"

const officers = [
  {
    role: "Начальник военной полиции",
    name: "Майор Чапкин М.Д.",
    phone: "380-800",
    highlighted: true,
  },
  {
    role: "Зам. по БП",
    name: "Вакантно",
    phone: "",
    highlighted: false,
  },
  {
    role: "Отдел кадров",
    name: "Прапорщик Васильев Н.И.",
    phone: "554-929",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Контакты</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Командование и инструкторы
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Командный канал связи: FIRE | ВЧ | Взвод Военной Полиции<br />
            По всем вопросам обращайтесь к командованию.
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officers.map((officer) => (
            <div
              key={officer.phone}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                officer.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              <p
                className={`text-sm uppercase tracking-wider mb-3 ${
                  officer.highlighted ? "text-zinc-600" : "text-zinc-500"
                }`}
              >
                {officer.role}
              </p>
              <h3
                className={`font-heading text-lg font-semibold mb-6 ${
                  officer.highlighted ? "text-zinc-900" : "text-zinc-100"
                }`}
              >
                {officer.name}
              </h3>

              {officer.phone && (
                <a
                  href={`tel:${officer.phone}`}
                  className={`mt-auto flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full font-medium text-sm transition-colors ${
                    officer.highlighted
                      ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  тел. {officer.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}