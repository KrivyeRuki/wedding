import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedBlock({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#3d2b2b] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedBlock>
            <h2
              className="text-5xl md:text-7xl text-white mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Роман & Анна
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <p
              className="text-[#c9908f] tracking-[0.3em] text-xs uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              12 · 09 · 2026
            </p>
          </AnimatedBlock>

          <AnimatedBlock delay={0.2} className="mt-8">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-[#c9908f] opacity-30" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C9 5.5 5 7.5 5 12a7 7 0 0014 0c0-4.5-4-6.5-7-10Z" fill="#c9908f" opacity="0.5"/>
              </svg>
              <div className="h-px w-20 bg-[#c9908f] opacity-30" />
            </div>
          </AnimatedBlock>
        </div>

        {/* Contacts */}
        <div className="flex justify-center mb-16">
          <AnimatedBlock delay={0.1} className="flex flex-col items-center text-center">
            <p
              className="text-[#c9908f] text-xs tracking-widest uppercase mb-2"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Телефон
            </p>
            <a
              href="tel:+79001234567"
              className="text-white/70 text-sm hover:text-[#c9908f] transition-colors"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              +7 (951) 087-83-95
            </a>
          </AnimatedBlock>
        </div>

        {/* Thank you message */}
        <AnimatedBlock delay={0.3}>
          <div className="border-t border-white/10 pt-12 text-center">
            <p
              className="text-3xl text-white/80 italic mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Спасибо, что вы есть в нашей жизни
            </p>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Каждый из вас занимает особое место в наших сердцах. Ваше присутствие сделает этот день незабываемым.
            </p>
          </div>
        </AnimatedBlock>

        {/* Bottom */}
        <AnimatedBlock delay={0.4}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-[#c9908f] opacity-30" />
              <span className="text-[#c9908f] text-lg">♥</span>
              <div className="h-px w-8 bg-[#c9908f] opacity-30" />
            </div>
            <p
              className="text-white/20 text-xs tracking-widest"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              С любовью · 12 сентября 2026
            </p>
          </div>
        </AnimatedBlock>
      </div>
    </footer>
  );
}
