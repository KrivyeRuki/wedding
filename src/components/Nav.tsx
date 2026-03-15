import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#story", label: "История" },
  { href: "#details", label: "Детали" },
  { href: "#schedule", label: "Программа" },
  { href: "#gallery", label: "Галерея" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`transition-colors duration-300 ${scrolled ? "text-[#3d2b2b]" : "text-[#3d2b2b]"}`}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 400 }}
          >
            Р & А
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-[#8b6a6a] hover:text-[#c9908f] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#3d2b2b] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-[#fdf8f4] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-[#3d2b2b]"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <p
              className="text-[#c9908f] tracking-[0.3em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Навигация
            </p>

            {links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                className="text-3xl text-[#3d2b2b] hover:text-[#c9908f] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
