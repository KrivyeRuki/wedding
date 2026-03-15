import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedBlock({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const initial =
    direction === "left"
      ? { opacity: 0, x: -50 }
      : direction === "right"
      ? { opacity: 0, x: 50 }
      : { opacity: 0, y: 40 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IconClock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#c9908f" strokeWidth="1.3"/>
      <path d="M12 7v5.5l3.5 2" stroke="#c9908f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6Z" stroke="#c9908f" strokeWidth="1.3"/>
      <circle cx="12" cy="8" r="2.5" stroke="#c9908f" strokeWidth="1.3"/>
    </svg>
  );
}

// Декоративный SVG-цветок
function FloralCorner({ size = 120, opacity = 0.07 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" style={{ opacity }}>
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a, i) => (
        <ellipse
          key={i}
          cx="60" cy="60" rx="6" ry="26"
          fill="#c9908f"
          transform={`rotate(${a} 60 60) translate(0 -32)`}
        />
      ))}
      <circle cx="60" cy="60" r="9" fill="#c9908f"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <ellipse
          key={`s${i}`}
          cx="60" cy="60" rx="3" ry="12"
          fill="#c9908f"
          opacity="0.5"
          transform={`rotate(${a} 60 60) translate(0 -18)`}
        />
      ))}
    </svg>
  );
}

export default function Details() {
  return (
    <section id="details" className="bg-[#fdf8f4] py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Заголовок */}
        <div className="text-center mb-20">
          <AnimatedBlock>
            <p
              className="text-[#c9908f] tracking-[0.45em] uppercase text-xs mb-5"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Детали торжества
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <h2
              className="text-5xl md:text-7xl text-[#3d2b2b]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Дата &amp; место
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#c9908f] opacity-30" />
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M9 1C6.5 5 1.5 6.5 1.5 9a7.5 7.5 0 0015 0c0-2.5-4.5-4-7.5-8Z" fill="#c9908f" opacity="0.4"/>
              </svg>
              <div className="h-px w-16 bg-[#c9908f] opacity-30" />
            </div>
          </AnimatedBlock>
        </div>

        {/* ── Главный блок: дата слева, место справа ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Карточка ДАТА */}
          <AnimatedBlock direction="left" delay={0.15} className="h-full">
            <div className="relative h-full bg-[#3d2b2b] rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-[320px]">
              {/* Декоративные цветы в углах */}
              <div className="absolute top-0 right-0 pointer-events-none">
                <FloralCorner size={140} opacity={0.09} />
              </div>
              <div className="absolute bottom-0 left-0 pointer-events-none rotate-180">
                <FloralCorner size={100} opacity={0.06} />
              </div>

              {/* Тонкая рамка внутри */}
              <div className="absolute inset-3 rounded-2xl border border-white/8 pointer-events-none" />

              {/* Верхний лейбл */}
              <p
                className="text-[#c9908f]/70 text-xs tracking-[0.4em] uppercase relative z-10"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Дата свадьбы
              </p>

              {/* Большая дата */}
              <div className="relative z-10 my-4">
                <p
                  className="text-white leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 200, fontSize: "6rem", lineHeight: 1 }}
                >
                  12
                </p>
                <p
                  className="text-white/90"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "2.4rem", lineHeight: 1.1 }}
                >
                  сентября
                </p>
                <p
                  className="text-[#c9908f]/80 text-sm tracking-[0.3em] mt-2"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  2026 · суббота
                </p>
              </div>

              {/* Время начала */}
              <div className="relative z-10 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="w-9 h-9 rounded-full border border-[#c9908f]/40 flex items-center justify-center">
                  <IconClock />
                </div>
                <div>
                  <p className="text-white/50 text-xs tracking-widest uppercase" style={{ fontFamily: "'Jost', sans-serif" }}>Начало</p>
                  <p className="text-white text-xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>11:00</p>
                </div>
              </div>
            </div>
          </AnimatedBlock>

          {/* Карточка МЕСТО */}
          <AnimatedBlock direction="right" delay={0.25} className="h-full">
            <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_50px_rgba(201,144,143,0.12)] border border-[#f5e9e9] p-10 flex flex-col justify-between min-h-[320px]">
              {/* Декоративный цветок в углу */}
              <div className="absolute top-0 right-0 pointer-events-none">
                <FloralCorner size={160} opacity={0.06} />
              </div>

              {/* Верхний лейбл */}
              <p
                className="text-[#c9908f]/80 text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Место проведения
              </p>

              {/* Название */}
              <div className="my-4">
                <h3
                  className="text-[#3d2b2b]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "2.8rem", lineHeight: 1.1 }}
                >
                  Ресторан "Вельвет"
                </h3>
                <p
                  className="text-[#b09090] mt-2 text-sm leading-relaxed"
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                >
                  Уютный ресторан
                </p>
              </div>

              {/* Детали */}
              <div className="space-y-4 border-t border-[#f0e8e8] pt-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#fdf0ef] flex items-center justify-center flex-shrink-0">
                    <IconPin />
                  </div>
                  <div>
                    <p className="text-[#b09090] text-xs tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Jost', sans-serif" }}>Адрес</p>
                    <p className="text-[#3d2b2b] text-base" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                      сельский посёлок Буревестник, Новая ул., 27
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </div>

        {/* ── Кнопка карты — полная ширина ── */}
        <AnimatedBlock delay={0.35}>
          <motion.a
            href="https://yandex.com/maps/?ll=43.793404%2C56.143932&mode=routes&rtext=~56.143888%2C43.793628&rtt=auto&ruri=~&z=18"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.015, boxShadow: "0 24px 60px rgba(201,144,143,0.32)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-between bg-gradient-to-r from-[#c9908f] via-[#d4a5a4] to-[#c9908f] text-white rounded-2xl px-10 py-6 overflow-hidden transition-all duration-300"
            style={{ backgroundSize: "200% 100%", backgroundPosition: "0% 0%" }}
          >
            {/* Декоративные круги */}
            <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-white/8 pointer-events-none" />
            <div className="absolute right-10 bottom-0 w-28 h-28 rounded-full bg-white/6 pointer-events-none" />
            {/* Тонкая рамка */}
            <div className="absolute inset-px rounded-2xl border border-white/15 pointer-events-none" />

            {/* Левая часть */}
            <div className="relative z-10">
              <p
                className="text-white/60 text-xs tracking-[0.4em] uppercase mb-1"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Построить маршрут
              </p>
              <p
                className="text-white text-2xl md:text-3xl"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Открыть на карте
              </p>
            </div>

            {/* Правая часть — иконка */}
            <div className="relative z-10 flex items-center gap-4">
              {/* SVG-маршрут */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-60 hidden md:block">
                <circle cx="8" cy="8" r="4" stroke="white" strokeWidth="1.2"/>
                <circle cx="24" cy="24" r="4" stroke="white" strokeWidth="1.2"/>
                <path d="M8 12c0 6 16 2 16 8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white/80 group-hover:bg-white/10 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.a>
        </AnimatedBlock>

        {/* Разделитель */}
        <AnimatedBlock delay={0.45}>
          <div className="mt-20 flex items-center justify-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9908f]/20 to-transparent" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" stroke="#c9908f" strokeWidth="0.7" opacity="0.3"/>
              <path d="M20 8C17 13 10 15 10 20a10 10 0 0020 0c0-5-7-7-10-12Z" fill="#c9908f" opacity="0.13"/>
            </svg>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9908f]/20 to-transparent" />
          </div>
        </AnimatedBlock>

      </div>
    </section>
  );
}
