import { useState } from "react"
import { Zap, X } from "lucide-react"

type ModalSection =
  | { type: "bullets"; title?: string; items: { text: string; highlight?: string }[] }
  | { type: "numbered"; title?: string; items: { text: string; sub?: string }[] }
  | { type: "contacts"; title?: string; items: { role: string; name: string; phone: string }[] }
  | { type: "divider" }

interface Modal {
  title: string
  sections: ModalSection[]
}

const cards: { icon: string; title: string; description: string; modal: Modal | null; href?: string }[] = [
  {
    icon: "📋",
    title: "Ревизии",
    description: "Расписание и инструкции по проведению",
    modal: {
      title: "📋 Ревизии — полная информация",
      sections: [
        {
          type: "bullets",
          items: [
            { text: "Плановые ревизии: каждый день с 10:00 до 22:00." },
            { text: "Проверке подлежат: оружейные склады государственных организаций." },
            { text: "По итогам ревизии составляется акт и отправляется в штаб." },
          ],
        },
      ],
    },
  },
  {
    icon: "⭐",
    title: "Аттестация",
    description: "Требования и порядок сдачи",
    modal: {
      title: "🎖️ Аттестация — порядок и требования",
      sections: [
        {
          type: "bullets",
          title: "Правила прохождения",
          items: [
            { text: "Срок на сдачу: ", highlight: "5 дней" },
            { text: "Допускается не более ", highlight: "5 ошибок", },
            { text: "При провале — ", highlight: "2 дня", },
            { text: "После второго провала — перевод в ", highlight: "РМТО/ДШР" },
          ],
        },
        { type: "divider" },
        {
          type: "numbered",
          title: "Что входит в аттестацию",
          items: [
            { text: "Внутренний устав ВЧ" },
            { text: "Устав ВП" },
            { text: "ФЗ «О территориях с ограниченным доступом»" },
            { text: "ФЗ «Об оружии»" },
            { text: "ФЗ «О статусе военнослужащих и военной службе»" },
            { text: "Уголовный кодекс" },
            { text: "Федеральное постановление" },
            { text: "Правила и процесс задержания" },
            { text: "Проверка на знание приказов Генерала", sub: "в разработке" },
          ],
        },
      ],
    },
  },
  {
    icon: "📞",
    title: "Контакты",
    description: "Командование и инструкторы",
    modal: {
      title: "📞 Контакты командования и экстренная связь",
      sections: [
        {
          type: "contacts",
          items: [
            { role: "Начальник военной полиции", name: "Майор Чапкин М.Д.", phone: "380-800" },
            { role: "Зам. по БП", name: "Вакантно", phone: "" },
            { role: "Отдел кадров", name: "Прапорщик Васильев Н.И.", phone: "554-929" },
          ],
        },
      ],
    },
  },
]

export function HeroSection() {
  const [activeModal, setActiveModal] = useState<Modal | null>(null)

  const handleCardClick = (card: typeof cards[0], e: React.MouseEvent) => {
    if (card.modal) {
      e.preventDefault()
      setActiveModal(card.modal)
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-zinc-400" />
          <span className="text-sm text-zinc-400">Официальный портал для личного состава</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-zinc-100">Взвод Военной Полиции</span>
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-xl text-zinc-400 mb-4">
          ВВП | FIRE — фракция «Воинская часть»
        </p>

        {/* Description */}
        <p className="text-base text-zinc-500 max-w-xl mx-auto mb-8 leading-relaxed">
          Добро пожаловать на сайт Военной полиции фракции Воинская часть. Официальный ресурс для курсантов и сотрудников. Здесь вы найдёте всю необходимую информацию о ревизиях, аттестации и контактах командования.
        </p>

        {/* Channel badge */}
        <a
          href="#pricing"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-700 hover:border-zinc-500 transition-colors mb-14"
        >
          <Zap className="w-4 h-4 text-zinc-300" />
          <span className="text-sm text-zinc-300">
            Командный канал связи: <span className="font-semibold text-zinc-100">FIRE | Войсковая часть № 9170174</span>
          </span>
        </a>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href ?? "#"}
              onClick={(e) => handleCardClick(card, e)}
              className="group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 flex flex-col items-start gap-4 text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl">
                {card.icon}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-zinc-100 text-lg mb-1">{card.title}</h3>
                <p className="text-sm text-zinc-500">{card.description}</p>
              </div>
              <span className="mt-auto w-full py-2 px-4 rounded-full bg-zinc-800 text-zinc-300 text-sm text-center group-hover:bg-zinc-700 transition-colors">
                Подробнее
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          onClick={() => setActiveModal(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <h2 className="font-heading font-bold text-zinc-100 text-lg leading-snug pr-4">
                {activeModal.title}
              </h2>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center flex-shrink-0 transition-colors"
              >
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Sections */}
            <div className="space-y-5">
              {activeModal.sections.map((section, si) => {
                if (section.type === "divider") {
                  return <div key={si} className="border-t border-zinc-800" />
                }

                if (section.type === "bullets") {
                  return (
                    <div key={si}>
                      {section.title && (
                        <p className="text-sm font-semibold text-zinc-400 mb-3">{section.title}</p>
                      )}
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                            <span>
                              {item.text}
                              {item.highlight && (
                                <span className="font-bold text-zinc-200"> {item.highlight} </span>
                              )}
                              {item.text.endsWith(" ") ? "." : ""}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }

                if (section.type === "numbered") {
                  return (
                    <div key={si}>
                      {section.title && (
                        <p className="text-sm font-semibold text-zinc-400 mb-3">{section.title}</p>
                      )}
                      <ol className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                            <span className="text-zinc-500 flex-shrink-0 w-4">{i + 1}.</span>
                            <span>
                              {item.text}
                              {item.sub && (
                                <span className="text-zinc-500 ml-1">({item.sub})</span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )
                }

                if (section.type === "contacts") {
                  return (
                    <div key={si}>
                      {section.title && (
                        <p className="text-sm font-semibold text-zinc-400 mb-3">{section.title}</p>
                      )}
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                            <span>
                              <span className="font-semibold text-zinc-200">{item.role}:</span>{" "}
                              {item.name}
                              {item.phone && <> — тел. {item.phone}</>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }

                return null
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
