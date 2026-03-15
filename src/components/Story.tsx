import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

function AnimatedBlock({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.9, delay, ease: "easeOut" } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Story() {
  return (
    <section id="story" className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedBlock>
          <p
            className="text-[#c9908f] tracking-[0.35em] uppercase text-xs mb-6"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
          >
            Наша история
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.1}>
          <h2
            className="text-5xl md:text-6xl text-[#3d2b2b] mb-10 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Всё началось с одного взгляда
          </h2>
        </AnimatedBlock>

        <AnimatedBlock delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-[#c9908f] opacity-40" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C7 5 3 7 3 11a7 7 0 0014 0c0-4-4-6-7-9z" fill="#c9908f" opacity="0.6"/>
            </svg>
            <div className="h-px w-16 bg-[#c9908f] opacity-40" />
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={0.3}>
          <p
            className="text-[#7a6060] text-lg leading-relaxed mb-8"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            Мы встретились 3 года назад вечером на дне Города. Тогда мы не знали, что этот вечер изменит всё. С первых слов нам было легко и тепло — словно мы знали друг друга всю жизнь.
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.4}>
          <p
            className="text-[#7a6060] text-lg leading-relaxed mb-8"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            Годы вместе подарили нам тысячи счастливых мгновений: путешествия, смех, уютные вечера дома, мечты и планы. И вот наступил день, когда мы хотим сказать всему миру — мы выбираем друг друга навсегда.
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.5}>
          <p
            className="text-[#3d2b2b] text-2xl italic leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            «Ты — мой дом. Где бы ты ни был — я дома.»
          </p>
        </AnimatedBlock>

        {/* Timeline */}
        <div className="mt-20 flex flex-col md:flex-row justify-center gap-12 md:gap-0">
          {[
            { year: "2023", label: "Первая встреча" },
            { year: "2024", label: "Первое путешествие" },
            { year: "2025", label: "Предложение руки и сердца" },
            { year: "2026", label: "Свадьба" },
          ].map((item, i) => (
            <AnimatedBlock key={i} delay={0.2 + i * 0.15} className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full border border-[#c9908f] flex items-center justify-center text-[#c9908f] text-sm mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.year}
                </div>
                <p
                  className="text-[#8b6a6a] text-xs tracking-wider text-center max-w-[100px]"
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                >
                  {item.label}
                </p>
              </div>
              {i < 3 && (
                <div className="hidden md:block h-px w-16 bg-[#c9908f] opacity-30 mx-4 mt-[-1.5rem]" />
              )}
              {i < 3 && (
                <div className="md:hidden w-px h-10 bg-[#c9908f] opacity-30 my-2" />
              )}
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
