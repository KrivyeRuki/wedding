import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedBlock({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const palette = [
  { color: "#f5e6e0", name: "Пудровый" },
  { color: "#e8d5c4", name: "Бежевый" },
  { color: "#d4b8a8", name: "Карамель" },
  { color: "#c9a89d", name: "Розово-терра" },
  { color: "#b5c4b1", name: "Шалфей" },
  { color: "#d8dce8", name: "Сиреневый туман" },
  { color: "#f0e8d0", name: "Слоновая кость" },
  { color: "#e2e0db", name: "Светлый серый" },
];

const forbidden = [
  { color: "#ffffff", name: "Белый", border: true },
  { color: "#111111", name: "Чёрный" },
  { color: "#e53e3e", name: "Красный" },
];

export default function DressCode() {
  return (
    <section id="dresscode" className="py-28 px-6 overflow-hidden" style={{ background: "linear-gradient(160deg, #fff5f0 0%, #fdf8f4 50%, #f5f0f8 100%)" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedBlock>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9908f]" />
              <p className="text-[#c9908f] tracking-[0.35em] uppercase text-xs" style={{ fontFamily: "'Jost', sans-serif" }}>
                Дресс-код
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9908f]" />
            </div>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <h2 className="text-5xl md:text-6xl text-[#3d2b2b] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Стиль торжества
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <p className="max-w-xl mx-auto text-[#7a6060] text-base leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              Мы будем рады, если вы поддержите нашу цветовую палитру. Выбирайте мягкие, пастельные и природные тона — как весенние лепестки.
            </p>
          </AnimatedBlock>
        </div>

        {/* Top row: two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Для дам */}
          <AnimatedBlock delay={0.2}>
            <div className="relative bg-white rounded-2xl p-10 shadow-md border border-[#f0e6e6] overflow-hidden h-full">
              {/* Декоративный SVG-угол */}
              <svg className="absolute top-0 right-0 opacity-10 w-36 h-36" viewBox="0 0 120 120" fill="none">
                <circle cx="100" cy="20" r="50" stroke="#c9908f" strokeWidth="0.8" fill="none"/>
                <circle cx="110" cy="10" r="35" stroke="#c9908f" strokeWidth="0.8" fill="none"/>
                <path d="M60,0 Q80,30 60,60 Q40,90 60,120" stroke="#c9908f" strokeWidth="0.6" fill="none"/>
                <path d="M80,0 Q95,40 80,80" stroke="#c9908f" strokeWidth="0.5" fill="none"/>
              </svg>

              {/* Иконка */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #f5e6e0, #e8d5c4)" }}>
                <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                  <path d="M20 8 C14 8 10 14 10 20 C10 28 14 34 20 36 C26 34 30 28 30 20 C30 14 26 8 20 8Z" stroke="#c9908f" strokeWidth="1.2" fill="none"/>
                  <path d="M13 16 Q20 12 27 16" stroke="#c9908f" strokeWidth="1" fill="none"/>
                  <path d="M10 22 Q20 26 30 22" stroke="#c9908f" strokeWidth="1" fill="none"/>
                  <path d="M20 8 L20 6 M17 7 L16 5 M23 7 L24 5" stroke="#c9908f" strokeWidth="0.8"/>
                </svg>
              </div>

              <h3 className="text-2xl text-[#3d2b2b] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                Для дам
              </h3>
              <div className="space-y-3">
                {[
                  "Вечерние или коктейльные платья",
                  "Пастельная и нежная цветовая гамма",
                  "Лёгкие ткани: шифон, атлас, кружево",
                  "Каблуки или изящные балетки",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9908f] mt-2 flex-shrink-0" />
                    <p className="text-[#7a6060] text-sm leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedBlock>

          {/* Для господ */}
          <AnimatedBlock delay={0.3}>
            <div className="relative bg-white rounded-2xl p-10 shadow-md border border-[#f0e6e6] overflow-hidden h-full">
              <svg className="absolute top-0 right-0 opacity-10 w-36 h-36" viewBox="0 0 120 120" fill="none">
                <circle cx="100" cy="20" r="50" stroke="#c9908f" strokeWidth="0.8" fill="none"/>
                <circle cx="110" cy="10" r="35" stroke="#c9908f" strokeWidth="0.8" fill="none"/>
                <path d="M60,0 Q80,30 60,60" stroke="#c9908f" strokeWidth="0.6" fill="none"/>
              </svg>

              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #e8d5c4, #d4b8a8)" }}>
                <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                  <rect x="12" y="8" width="16" height="22" rx="2" stroke="#c9908f" strokeWidth="1.2" fill="none"/>
                  <path d="M16 8 L16 14 L20 12 L24 14 L24 8" stroke="#c9908f" strokeWidth="1" fill="none"/>
                  <path d="M15 20 L25 20 M15 24 L22 24" stroke="#c9908f" strokeWidth="0.8"/>
                </svg>
              </div>

              <h3 className="text-2xl text-[#3d2b2b] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                Для господ
              </h3>
              <div className="space-y-3">
                {[
                  "Классический или смарт-кэжуал стиль",
                  "Светлые костюмы пастельных оттенков",
                  "Рубашки в тон цветовой палитре",
                  "Галстук или платок в петличку",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9908f] mt-2 flex-shrink-0" />
                    <p className="text-[#7a6060] text-sm leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </div>

        {/* Bottom row: palette + forbidden */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Палитра — занимает 2 колонки */}
          <AnimatedBlock delay={0.35} className="md:col-span-2">
            <div className="bg-white rounded-2xl p-10 shadow-md border border-[#f0e6e6]">
              <h3 className="text-2xl text-[#3d2b2b] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                Цветовая палитра
              </h3>
              <p className="text-[#8b6a6a] text-xs mb-8 tracking-wider" style={{ fontFamily: "'Jost', sans-serif" }}>
                Рекомендуемые оттенки
              </p>

              {/* Большие круги */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {palette.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center gap-2 cursor-default"
                  >
                    <div
                      className="w-full aspect-square rounded-full shadow-sm border border-white"
                      style={{ backgroundColor: item.color, boxShadow: `0 4px 16px ${item.color}80` }}
                    />
                    <span className="text-[#8b6a6a] text-[10px] text-center leading-tight" style={{ fontFamily: "'Jost', sans-serif" }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Полоска-свотч */}
              <div className="h-8 rounded-full overflow-hidden shadow-inner flex">
                {palette.map((item, i) => (
                  <div key={i} className="flex-1 transition-all duration-300 hover:flex-[2]" style={{ backgroundColor: item.color }} />
                ))}
              </div>
            </div>
          </AnimatedBlock>

          {/* Просьба избегать */}
          <AnimatedBlock delay={0.45}>
            <div className="bg-[#3d2b2b] rounded-2xl p-10 shadow-md h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl text-[#f5e6e0] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                  Просьба
                </h3>
                <h3 className="text-2xl text-[#c9908f] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                  избегать
                </h3>
                <p className="text-[#c4a898] text-xs leading-relaxed mb-8" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                  Эти цвета зарезервированы для особых участников торжества
                </p>

                <div className="space-y-4">
                  {forbidden.map((item) => (
                    <div key={item.name} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex-shrink-0 relative"
                        style={{
                          backgroundColor: item.color,
                          border: item.border ? "1px solid #555" : "none",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                        }}
                      >
                        {/* Крест */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute w-full h-px bg-[#c9908f] rotate-45" style={{ width: "60%", left: "20%" }} />
                        </div>
                      </div>
                      <span className="text-[#c4a898] text-sm" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Декор */}
              <div className="mt-8 pt-6 border-t border-[#5a3f3f]">
                <p className="text-[#8b6a6a] text-xs text-center italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Спасибо за понимание ♡
                </p>
              </div>
            </div>
          </AnimatedBlock>
        </div>

      </div>
    </section>
  );
}
