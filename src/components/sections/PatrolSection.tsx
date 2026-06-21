import { useState } from "react"
import { ChevronDown } from "lucide-react"

type Line =
  | { type: "text"; text: string; highlight?: string }
  | { type: "label"; label: string; text: string; labelColor?: "yellow" | "red" }

type SubItem = {
  title: string
  content?: Line[]
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
      {
        title: "Состав и организация наряда",
        content: [
          { type: "text", text: "Минимальный состав патруля — ", highlight: "2 человека." },
          { type: "text", text: "Старший наряда назначается командиром или старшим по званию в группе." },
          { type: "text", text: "Каждый сотрудник обязан иметь при себе удостоверение, табельное оружие и снаряжение." },
          { type: "text", text: "Перед выходом — обязательный инструктаж у командира: район, задачи, время смены." },
          { type: "text", text: "Связь с дежурным поддерживается не реже чем раз в 30 минут." },
        ],
      },
      {
        title: "Обязанности патруля",
        content: [
          { type: "text", text: "Поддерживать общественный порядок на закреплённой территории." },
          { type: "text", text: "Проверять документы при наличии оснований для подозрений." },
          { type: "text", text: "Пресекать правонарушения, при необходимости — задерживать." },
          { type: "text", text: "Не покидать район патрулирования без приказа старшего." },
          { type: "text", text: "Немедленно докладывать о происшествиях командиру." },
          { type: "text", text: "Оказывать первую помощь пострадавшим до прибытия медиков." },
        ],
      },
      {
        title: "Порядок доклада",
        content: [
          { type: "label", label: "Доклад по смене:", text: " время, район, замечания, происшествия.", labelColor: "yellow" },
          { type: "label", label: "При задержании:", text: " немедленный доклад старшему с указанием личности и основания.", labelColor: "yellow" },
          { type: "label", label: "При ЧП:", text: " доклад дежурному, место, число пострадавших, запрошенная помощь.", labelColor: "yellow" },
          { type: "text", text: "Доклад ведётся чётко, без лишних слов: кто — где — что — что нужно." },
        ],
      },
      {
        title: "Проверка документов",
        content: [
          { type: "text", text: "Основания для проверки: подозрение в совершении правонарушения, нахождение на режимной территории, ориентировка." },
          { type: "text", text: "Сотрудник обязан представиться и назвать причину проверки." },
          { type: "text", text: "Документы принимаются в руки только с согласия владельца либо при задержании." },
          { type: "text", text: "При отказе предъявить документы — составить рапорт и доложить командиру." },
        ],
      },
      {
        title: "Применение физической силы и оружия",
        content: [
          { type: "label", label: "Физическая сила применяется:", text: "", labelColor: "yellow" },
          { type: "text", text: "При активном сопротивлении задержанию." },
          { type: "text", text: "При нападении на сотрудника или гражданских лиц." },
          { type: "label", label: "Оружие применяется:", text: "", labelColor: "yellow" },
          { type: "text", text: "При угрозе жизни сотрудника или третьих лиц." },
          { type: "text", text: "При вооружённом нападении или побеге вооружённого преступника." },
          { type: "label", label: "Запрещено", text: " применять оружие в толпе, против невооружённых при иных возможностях.", labelColor: "red" },
        ],
      },
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

  const toggleMain = (i: number) => setOpenMain(openMain === i ? null : i)

  const toggleSub = (mainIdx: number, subIdx: number) => {
    const key = String(mainIdx)
    setOpenSub((prev) => ({ ...prev, [key]: prev[key] === subIdx ? null : subIdx }))
  }

  const renderContent = (content: Line[]) => (
    <div className="px-4 py-3 space-y-1.5">
      {content.map((line, idx) => {
        if (line.type === "label") {
          return (
            <p key={idx} className="text-sm text-zinc-300 leading-relaxed">
              <span className={line.labelColor === "red" ? "text-red-400 font-semibold" : "text-yellow-400 font-semibold"}>
                {line.label}
              </span>
              {line.text}
            </p>
          )
        }
        return (
          <p key={idx} className="text-sm text-zinc-400 leading-relaxed">
            {line.text}
            {line.highlight && <span className="text-yellow-400 font-semibold">{line.highlight}</span>}
          </p>
        )
      })}
    </div>
  )

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-2">
            Патрульная служба
          </h2>
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
            Несение службы и специальные сигналы
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-zinc-700/60 overflow-hidden">
              <button
                onClick={() => toggleMain(i)}
                className="w-full flex items-center justify-between px-5 py-4 bg-zinc-900/80 hover:bg-zinc-900 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-heading font-semibold text-zinc-100">{item.title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openMain === i ? "rotate-180" : ""}`} />
              </button>

              {openMain === i && (
                <div className="border-t border-zinc-800 bg-zinc-950/50 p-3 space-y-2">
                  {item.subitems.map((sub, si) => (
                    <div key={si} className="rounded-xl border border-zinc-800 overflow-hidden">
                      <button
                        onClick={() => sub.content && toggleSub(i, si)}
                        className={`w-full flex items-center justify-between px-4 py-3 bg-zinc-900/60 transition-colors text-left ${sub.content ? "hover:bg-zinc-900 cursor-pointer" : "cursor-default"}`}
                      >
                        <span className="text-sm text-zinc-300">{sub.title}</span>
                        {sub.content && (
                          <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${openSub[String(i)] === si ? "rotate-180" : ""}`} />
                        )}
                      </button>
                      {sub.content && openSub[String(i)] === si && (
                        <div className="border-t border-zinc-800 bg-zinc-950/70">
                          {renderContent(sub.content)}
                        </div>
                      )}
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
