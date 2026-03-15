import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function AnimatedBlock({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
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

// ──────────────────────────────────────────────────────────────
const photos = [
  { id: 1, src: "/gallery/1.jpg", label: "Первое свидание" },
  { id: 2, src: "/gallery/2.jpg", label: "Путешествие" },
  { id: 3, src: "/gallery/3.jpg", label: "В ресторане" },
  { id: 4, src: "/gallery/4.jpg", label: "Прогулка" },
  { id: 5, src: "/gallery/5.jpg", label: "Фотосессия" },
  { id: 6, src: "/gallery/6.jpg", label: "Наше счастье" },
];

// Заглушка — показывается если фото ещё не добавлено
function Placeholder({ label, index }: { label: string; index: number }) {
  const pastelBg = [
    "#f5e6e0", "#f0e8f0", "#e8f0e8", "#f0ebe0", "#fde8e8", "#e8f0f5"
  ][index % 6];
  const accentColor = [
    "#c9908f", "#9d8fc9", "#8fad8f", "#c4a86e", "#c98f8f", "#8fafc4"
  ][index % 6];

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ background: pastelBg }}
    >
      {/* Camera icon */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="14" width="36" height="26" rx="4" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="24" cy="27" r="8" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="24" cy="27" r="4" fill={accentColor} opacity="0.25"/>
        <path d="M16 14l3-5h10l3 5" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        <circle cx="37" cy="20" r="2" fill={accentColor} opacity="0.4"/>
      </svg>
      <p className="text-xs tracking-widest uppercase opacity-50" style={{ color: accentColor, fontFamily: "'Jost', sans-serif" }}>
        {label}
      </p>
      <p className="text-[10px] opacity-30 text-center px-4" style={{ color: accentColor, fontFamily: "'Jost', sans-serif" }}>
        Добавьте фото<br/>в public/gallery/
      </p>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const handleImgError = (id: number) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const goNext = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % photos.length);
  };

  const goPrev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + photos.length) % photos.length);
  };

  return (
    <section id="gallery" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedBlock>
            <p
              className="text-[#c9908f] tracking-[0.35em] uppercase text-xs mb-6"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Галерея
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <h2
              className="text-5xl md:text-6xl text-[#3d2b2b]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Наши моменты
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <AnimatedBlock key={photo.id} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 16px 48px rgba(61,43,43,0.15)" }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden cursor-pointer group shadow-sm rounded-sm"
                style={{ aspectRatio: i % 3 === 1 ? "3/4" : "4/3" }}
                onClick={() => setLightbox(i)}
              >
                {/* Photo or Placeholder */}
                {imgErrors[photo.id] ? (
                  <Placeholder label={photo.label} index={i} />
                ) : (
                  <img
                    src={photo.src}
                    alt={photo.label}
                    onError={() => handleImgError(photo.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Hover overlay with label */}
                <div className="absolute inset-0 bg-[#3d2b2b]/0 group-hover:bg-[#3d2b2b]/35 transition-all duration-500 flex items-end">
                  <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p
                      className="text-white text-sm tracking-wider"
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    >
                      {photo.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedBlock>
          ))}
        </div>

        {/* Hint */}
        <AnimatedBlock delay={0.5}>
          <p
            className="text-center mt-10 text-[#c9908f]/60 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Нажмите на фото чтобы увеличить
          </p>
        </AnimatedBlock>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full bg-white shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {imgErrors[photos[lightbox].id] ? (
                <Placeholder label={photos[lightbox].label} index={lightbox} />
              ) : (
                <img
                  src={photos[lightbox].src}
                  alt={photos[lightbox].label}
                  onError={() => handleImgError(photos[lightbox].id)}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Label */}
            <div className="py-5 text-center">
              <p
                className="text-[#3d2b2b] text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {photos[lightbox].label}
              </p>
              <p className="text-[#c9908f]/60 text-xs mt-1" style={{ fontFamily: "'Jost', sans-serif" }}>
                {lightbox + 1} / {photos.length}
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white shadow transition-colors rounded-full"
            >
              <X size={15} className="text-[#3d2b2b]" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-white shadow transition-colors rounded-full"
            >
              <ChevronLeft size={18} className="text-[#3d2b2b]" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-white shadow transition-colors rounded-full"
            >
              <ChevronRight size={18} className="text-[#3d2b2b]" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
