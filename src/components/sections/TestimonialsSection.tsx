import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Чёткая организация ревизий и понятные требования. Подготовка к аттестации прошла без лишних вопросов.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=face",
    name: "Курсант Орлов И.",
    role: "Взвод военной полиции",
  },
  {
    text: "Командование всегда на связи. Инструкторы помогают разобраться в порядке службы и нормативах.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Сержант Петров А.",
    role: "Сотрудник ВП",
  },
  {
    text: "Аттестацию сдал с первого раза. Все материалы и расписание были доступны заранее.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    name: "Курсант Зайцев К.",
    role: "Взвод военной полиции",
  },
  {
    text: "Дисциплина и порядок на высоте. Каждый знает свои задачи и зону ответственности.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Ефрейтор Соколов Д.",
    role: "Сотрудник ВП",
  },
  {
    text: "Отдел кадров оперативно решает вопросы по личному составу. Всё прозрачно и по уставу.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Курсант Морозов Е.",
    role: "Взвод военной полиции",
  },
  {
    text: "Инструкции по проведению ревизий понятны и структурированы. Служба организована грамотно.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Сержант Лебедев Р.",
    role: "Сотрудник ВП",
  },
  {
    text: "Командный канал связи работает чётко. Любой приказ доходит до личного состава мгновенно.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Курсант Волков С.",
    role: "Взвод военной полиции",
  },
  {
    text: "Старший инструктор подробно разбирает каждый норматив. Подготовка реально качественная.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Ефрейтор Новиков П.",
    role: "Сотрудник ВП",
  },
  {
    text: "Гордость служить в части. Сильный коллектив, грамотное командование и порядок во всём.",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150&h=150&fit=crop&crop=face",
    name: "Курсант Кузнецов М.",
    role: "Взвод военной полиции",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["ВЧ 20115", "FIRE", "Военная полиция", "Ревизии", "Аттестация", "Боевая подготовка"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Аттестация</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Отзывы личного состава
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Что говорят курсанты и сотрудники о службе и подготовке в части.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">FIRE | Войсковая часть 20115</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}