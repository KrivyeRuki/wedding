import { motion } from "framer-motion";

export default function Hero() {
  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdf8f4]">
      {/* Background decorative SVG pattern */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top left floral */}
        <svg className="absolute -top-8 -left-8 w-96 h-96 opacity-30" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="60" fill="#e8c4c4" opacity="0.3"/>
          <circle cx="140" cy="50" r="40" fill="#d4a5a5" opacity="0.25"/>
          <circle cx="50" cy="150" r="35" fill="#f0d9d9" opacity="0.3"/>
          <ellipse cx="200" cy="120" rx="80" ry="50" fill="#e8c4c4" opacity="0.15"/>
          {/* Petals */}
          {[0,45,90,135,180,225,270,315].map((angle, i) => (
            <ellipse
              key={i}
              cx={120 + Math.cos((angle * Math.PI) / 180) * 55}
              cy={120 + Math.sin((angle * Math.PI) / 180) * 55}
              rx="22"
              ry="12"
              transform={`rotate(${angle} ${120 + Math.cos((angle * Math.PI) / 180) * 55} ${120 + Math.sin((angle * Math.PI) / 180) * 55})`}
              fill="#d4a5a5"
              opacity="0.35"
            />
          ))}
          <circle cx="120" cy="120" r="18" fill="#c9908f" opacity="0.3"/>
          {/* Leaves */}
          <ellipse cx="250" cy="200" rx="35" ry="12" transform="rotate(-30 250 200)" fill="#b5c9b0" opacity="0.25"/>
          <ellipse cx="280" cy="240" rx="30" ry="10" transform="rotate(20 280 240)" fill="#b5c9b0" opacity="0.2"/>
          <ellipse cx="60" cy="260" rx="28" ry="9" transform="rotate(-50 60 260)" fill="#b5c9b0" opacity="0.2"/>
        </svg>

        {/* Top right floral */}
        <svg className="absolute -top-8 -right-8 w-96 h-96 opacity-30" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:'scaleX(-1)'}}>
          <circle cx="80" cy="80" r="60" fill="#e8c4c4" opacity="0.3"/>
          <circle cx="140" cy="50" r="40" fill="#d4a5a5" opacity="0.25"/>
          <circle cx="50" cy="150" r="35" fill="#f0d9d9" opacity="0.3"/>
          {[0,45,90,135,180,225,270,315].map((angle, i) => (
            <ellipse
              key={i}
              cx={120 + Math.cos((angle * Math.PI) / 180) * 55}
              cy={120 + Math.sin((angle * Math.PI) / 180) * 55}
              rx="22"
              ry="12"
              transform={`rotate(${angle} ${120 + Math.cos((angle * Math.PI) / 180) * 55} ${120 + Math.sin((angle * Math.PI) / 180) * 55})`}
              fill="#d4a5a5"
              opacity="0.35"
            />
          ))}
          <circle cx="120" cy="120" r="18" fill="#c9908f" opacity="0.3"/>
          <ellipse cx="250" cy="200" rx="35" ry="12" transform="rotate(-30 250 200)" fill="#b5c9b0" opacity="0.25"/>
          <ellipse cx="280" cy="240" rx="30" ry="10" transform="rotate(20 280 240)" fill="#b5c9b0" opacity="0.2"/>
        </svg>

        {/* Bottom center floral */}
        <svg className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-80 h-48 opacity-25" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,40,80,120,160,200,240,280,320].map((angle, i) => (
            <ellipse
              key={i}
              cx={160 + Math.cos((angle * Math.PI) / 180) * 60}
              cy={140 + Math.sin((angle * Math.PI) / 180) * 40}
              rx="20"
              ry="10"
              transform={`rotate(${angle} ${160 + Math.cos((angle * Math.PI) / 180) * 60} ${140 + Math.sin((angle * Math.PI) / 180) * 40})`}
              fill="#d4a5a5"
              opacity="0.4"
            />
          ))}
          <circle cx="160" cy="140" r="16" fill="#c9908f" opacity="0.3"/>
        </svg>
      </div>

      {/* Thin top line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9908f] to-transparent opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[#c9908f] tracking-[0.35em] uppercase text-xs font-light mb-8"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Приглашение на свадьбу
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="flex items-center gap-6 mb-4"
        >
          <div className="h-px w-16 bg-[#c9908f] opacity-50" />
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2C14 2 6 7 6 14a8 8 0 0016 0C22 7 14 2 14 2Z" fill="#c9908f" opacity="0.5"/>
            <path d="M14 6L14 22M8 14H20" stroke="#c9908f" strokeWidth="1" opacity="0.5"/>
          </svg>
          <div className="h-px w-16 bg-[#c9908f] opacity-50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl text-[#3d2b2b] leading-tight mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Роман
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#c9908f] text-2xl italic mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          &amp;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.0 }}
          className="text-6xl sm:text-7xl md:text-8xl text-[#3d2b2b] leading-tight mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Анна
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-[#c9908f] opacity-40" />
          <p
            className="text-[#8b6a6a] tracking-[0.25em] text-sm uppercase"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            12 · 09 · 2026
          </p>
          <div className="h-px w-12 bg-[#c9908f] opacity-40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="max-w-md text-[#7a6060] text-base leading-relaxed mb-12"
          style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
        >
          Мы счастливы пригласить вас разделить с нами самый важный день нашей жизни и стать свидетелями рождения нашей семьи.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(201,144,143,0.35)" }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToRSVP}
          className="px-10 py-4 bg-[#c9908f] text-white tracking-[0.2em] uppercase text-xs rounded-none transition-all duration-300 hover:bg-[#b87d7c]"
          style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, letterSpacing: "0.2em" }}
        >
          Подтвердить присутствие
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <p className="text-[#c9908f] text-xs tracking-widest uppercase opacity-70" style={{ fontFamily: "'Jost', sans-serif" }}>scroll</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#c9908f] to-transparent opacity-60"
          />
        </motion.div>
      </div>
    </section>
  );
}
