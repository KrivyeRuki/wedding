import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

/* ─── SVG иконки в стиле тонкой линии ─── */
const IconGuests = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#c9908f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {/* два силуэта людей */}
    <circle cx="18" cy="14" r="5" />
    <path d="M8 36c0-6 4-10 10-10h0c6 0 10 4 10 10" />
    <circle cx="33" cy="14" r="4" />
    <path d="M29 36c0-5 3-8 7-8" />
    {/* веточка-украшение */}
    <path d="M38 20 Q41 16 44 20" />
    <path d="M41 16 L41 24" />
  </svg>
);

const IconRings = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#c9908f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {/* два переплетённых кольца */}
    <circle cx="18" cy="26" r="9" />
    <circle cx="30" cy="26" r="9" />
    {/* бриллиант сверху */}
    <polygon points="24,6 28,11 24,15 20,11" />
    <line x1="20" y1="11" x2="28" y2="11" />
  </svg>
);

const IconCamera = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#c9908f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="6" y="16" width="36" height="26" rx="4" />
    <circle cx="24" cy="29" r="7" />
    <circle cx="24" cy="29" r="3" />
    {/* вспышка / объектив */}
    <path d="M16 16l3-6h10l3 6" />
    <circle cx="37" cy="21" r="2" />
  </svg>
);

const IconChampaign = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#c9908f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {/* бокалы шампанского */}
    <path d="M14 8 L10 22 Q10 30 17 30 L17 40 L11 40" />
    <path d="M14 8 L18 22 Q18 30 17 30" />
    <path d="M34 8 L30 22 Q30 30 31 30 L31 40 L37 40" />
    <path d="M34 8 L38 22 Q38 30 31 30" />
    {/* пузырьки */}
    <circle cx="14" cy="16" r="1" />
    <circle cx="34" cy="14" r="1" />
    <circle cx="32" cy="20" r="0.8" />
    {/* чокаются */}
    <line x1="18" y1="12" x2="30" y2="12" stroke="#c9908f" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const IconCake = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#c9908f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {/* торт */}
    <rect x="6" y="30" width="36" height="12" rx="3" />
    <rect x="11" y="20" width="26" height="11" rx="2" />
    <rect x="16" y="13" width="16" height="8" rx="2" />
    {/* свечи */}
    <line x1="20" y1="13" x2="20" y2="8" />
    <line x1="28" y1="13" x2="28" y2="8" />
    {/* огоньки */}
    <path d="M20 8 Q21 5 20 3 Q19 5 20 8" fill="#c9908f" stroke="none" />
    <path d="M28 8 Q29 5 28 3 Q27 5 28 8" fill="#c9908f" stroke="none" />
    {/* волнистый декор */}
    <path d="M6 36 Q12 33 18 36 Q24 39 30 36 Q36 33 42 36" strokeWidth="1.2" />
  </svg>
);

const IconMusic = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#c9908f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    {/* ноты */}
    <path d="M20 36 L20 14 L40 10 L40 32" />
    <circle cx="16" cy="36" r="4" />
    <circle cx="36" cy="32" r="4" />
    {/* лиги */}
    <line x1="20" y1="18" x2="40" y2="14" />
    {/* звёздочки */}
    <path d="M8 18 L9 15 L10 18 L13 18 L11 20 L12 23 L9 21 L6 23 L7 20 L5 18 Z" fill="#c9908f" stroke="none" opacity="0.5" />
    <path d="M38 4 L39 2 L40 4 L42 4 L41 5.5 L41.5 7.5 L39 6.5 L36.5 7.5 L37 5.5 L36 4 Z" fill="#c9908f" stroke="none" opacity="0.5" />
  </svg>
);

const events = [
  {
    time: "10:00",
    title: "Сбор гостей",
    desc: "Встреча гостей, музыка, лёгкие закуски и шампанское в ожидании торжества",
    Icon: IconGuests,
    photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
  },
  {
    time: "11:00",
    title: "Выездная церемония",
    desc: "Торжественное бракосочетание в окружении цветов и близких людей",
    Icon: IconRings,
    photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80",
  },
  {
    time: "12:30",
    title: "Фотосессия",
    desc: "Прогулка молодожёнов, фото с гостями",
    Icon: IconCamera,
    photo: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80",
  },
  {
    time: "17:00",
    title: "Банкет",
    desc: "Праздничный ужин, музыка, поздравления и танцы",
    Icon: IconChampaign,
    photo: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
  },
  {
    time: "22:00",
    title: "Свадебный торт",
    desc: "Разрезание свадебного торта и сладкий фуршет",
    Icon: IconCake,
    photo: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&q=80",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedBlock>
            <p
              className="text-[#c9908f] tracking-[0.35em] uppercase text-xs mb-6"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Программа
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <h2
              className="text-5xl md:text-6xl text-[#3d2b2b]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Программа дня
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.15}>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#c9908f] opacity-40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9908f] opacity-60" />
              <div className="h-px w-16 bg-[#c9908f] opacity-40" />
            </div>
          </AnimatedBlock>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#e8c9c8] to-transparent hidden md:block" />

          <div className="flex flex-col">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedBlock
                  key={i}
                  delay={0.1 + i * 0.12}
                  className={`flex items-center md:gap-0 gap-4 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row mb-10 md:mb-2`}
                >
                  {/* ── Content card ── */}
                  <div className={`flex-1 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14"} md:py-8`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`group bg-[#fdf8f4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex ${
                        isLeft ? "md:flex-row-reverse" : "md:flex-row"
                      } flex-row`}
                    >
                      {/* Фото */}
                      <div className="w-24 md:w-28 flex-shrink-0 overflow-hidden">
                        <img
                          src={event.photo}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Текст */}
                      <div className={`flex-1 p-4 md:p-5 flex flex-col justify-center ${isLeft ? "md:items-end md:text-right" : ""}`}>
                        <span
                          className="text-[#c9908f] tracking-[0.15em] text-xs mb-1"
                          style={{ fontFamily: "'Jost', sans-serif" }}
                        >
                          {event.time}
                        </span>
                        <h3
                          className="text-xl md:text-2xl text-[#3d2b2b] mb-1"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                        >
                          {event.title}
                        </h3>
                        <p
                          className="text-[#7a6060] text-xs md:text-sm leading-relaxed"
                          style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                        >
                          {event.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* ── Center circle icon ── */}
                  <div className="relative z-10 hidden md:flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full bg-white border-2 border-[#c9908f] flex items-center justify-center shadow-md"
                    >
                      <event.Icon />
                    </motion.div>
                  </div>

                  {/* ── Mobile circle icon ── */}
                  <div className="md:hidden w-11 h-11 rounded-full bg-white border border-[#c9908f] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <event.Icon />
                  </div>

                  {/* Empty half desktop */}
                  <div className="flex-1 hidden md:block" />
                </AnimatedBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
