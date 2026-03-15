import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

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

export default function Countdown() {
  const weddingDate = new Date("2026-09-12T11:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(weddingDate)), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Дней" },
    { value: timeLeft.hours, label: "Часов" },
    { value: timeLeft.minutes, label: "Минут" },
    { value: timeLeft.seconds, label: "Секунд" },
  ];

  return (
    <section className="bg-[#3d2b2b] py-24 px-6 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
          {[0,1,2,3,4,5].map(i => (
            <circle key={i} cx={i*180-50} cy={150} r={80+i*20} stroke="#c9908f" strokeWidth="1" fill="none"/>
          ))}
          {[0,1,2].map(i => (
            <circle key={`r${i}`} cx={700-i*200} cy={i*80} r={60+i*15} stroke="#c9908f" strokeWidth="0.5" fill="none"/>
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedBlock>
          <p
            className="text-[#c9908f] tracking-[0.35em] uppercase text-xs mb-6"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            До начала торжества
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.1}>
          <h2
            className="text-5xl md:text-6xl text-white mb-12 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Осталось совсем немного
          </h2>
        </AnimatedBlock>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {units.map((unit, i) => (
            <AnimatedBlock key={i} delay={0.1 + i * 0.1}>
              <div className="flex flex-col items-center p-6 border border-[#c9908f]/30 bg-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#c9908f]/0 group-hover:bg-[#c9908f]/5 transition-colors duration-500" />
                <motion.span
                  key={unit.value}
                  initial={{ opacity: 0.5, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl md:text-6xl text-white mb-2 tabular-nums"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
                <span
                  className="text-[#c9908f] text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {unit.label}
                </span>
              </div>
            </AnimatedBlock>
          ))}
        </div>

        <AnimatedBlock delay={0.6} className="mt-12">
          <p
            className="text-white/40 text-sm italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            «Лучшее ещё впереди»
          </p>
        </AnimatedBlock>
      </div>
    </section>
  );
}
