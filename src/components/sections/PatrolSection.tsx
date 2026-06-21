import { useState } from "react"
import { ChevronDown } from "lucide-react"

type SubItem = {
  title: string
}

type AccordionItem = {
  icon: string
  title: string
  subitems: SubItem[]
}

const items: AccordionItem[] = [
  {
    icon: "🛡️",
    title: "Патрульная служба",
    subitems: [
      { title: "Состав и организация наряда" },
      { title: "Обязанности патруля" },
      { title: "Порядок доклада" },
      { title: "Проверка документов" },
      { title: "Применение физической силы и оружия" },
    ],
  },
  {
    icon: "🔔",
    title: "Специальные сигналы",
    subitems: [
      { title: "Сигналы управления (звуковые)" },
      { title: "Световые сигналы" },
      { title: "Ручные сигналы (жесты)" },
      { title: "Радиосигналы и позывные" },
    ],
  },
  {
    icon: "⬜",
    title: "Схемы построения",
    subitems: [
      { title: "Линейный порядок (шеренга)" },
      { title: "Колонный порядок" },
      { title: "Клин" },
      { title: "Цепь (рассыпной строй)" },
      { title: "Уступ и колонна зигзагом" },
    ],
  },
  {
    icon: "🚨",
    title: "Правила использования СГУ",
    subitems: [
      { title: "Что такое СГУ" },
      { title: "Когда разрешено включать СГУ" },
      { title: "Запрещено" },
      { title: "Режимы работы СГУ" },
      { title: "Поведение водителей при СГУ" },
    ],
  },
]

export function PatrolSection() {
  const [openMain, setOpenMain] = useState<number | null>(null)
  const [openSub, setOpenSub] = useState<Record<string, number | null>>({})

  const toggleMain = (i: number) => {
    setOpenMain(openMain === i ? null : i)
  }

  const toggleSub = (mainIdx: number, subIdx: number) => {
    const key = String(mainIdx)
    setOpenSub((prev) => ({
      ...prev,
      [key]: prev[key] === subIdx ? null : subIdx,
    }))
  }

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-2">
            Патрульная служба
          </h2>
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
            Несение службы и специальные сигналы
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-700/60 overflow-hidden"
            >
              {/* Main row */}
              <button
                onClick={() => toggleMain(i)}
                className="w-full flex items-center justify-between px-5 py-4 bg-zinc-900/80 hover:bg-zinc-900 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-heading font-semibold text-zinc-100">{item.title}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                    openMain === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Subitems */}
              {openMain === i && (
                <div className="border-t border-zinc-800 bg-zinc-950/50 p-3 space-y-2">
                  {item.subitems.map((sub, si) => (
                    <div key={si} className="rounded-xl border border-zinc-800 overflow-hidden">
                      <button
                        onClick={() => toggleSub(i, si)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900/60 hover:bg-zinc-900 transition-colors text-left"
                      >
                        <span className="text-sm text-zinc-300">{sub.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${
                            openSub[String(i)] === si ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
