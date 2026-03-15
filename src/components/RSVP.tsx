import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

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

const TELEGRAM_BOT_TOKEN = "7007939579:AAGs42QYuNHYwAa6vgJLlLR2Ok1PAo6o9pA";  
const TELEGRAM_CHAT_ID   = "1312908046"; 

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    guests: "1",
    menu: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Пожалуйста, введите имя";
    if (!form.attendance) newErrors.attendance = "Пожалуйста, выберите ответ";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSendError("");

    const attendanceText = form.attendance === "yes" ? "✅ Придёт" : "❌ Не придёт";
    const menuText = form.menu ? `\n🍽 Меню: ${form.menu}` : "";
    const guestsText = form.attendance === "yes" ? `\n👥 Гостей: ${form.guests}` : "";
    const commentText = form.comment ? `\n💬 Комментарий: ${form.comment}` : "";

    const message =
      ` *Новый ответ на приглашение!*\n\n` +
      ` Имя: *${form.name}*\n` +
      `${attendanceText}` +
      guestsText +
      menuText +
      commentText;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );
      const data = await res.json();
      if (!data.ok) throw new Error(data.description);
      setSubmitted(true);
    } catch (err) {
      console.error("Telegram error:", err);
      setSendError("Не удалось отправить. Проверьте токен и Chat ID.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border-b border-[#e0d0d0] bg-transparent py-3 text-[#3d2b2b] text-sm placeholder-[#c4aaaa] focus:outline-none focus:border-[#c9908f] transition-colors duration-300";

  return (
    <section id="rsvp" className="bg-[#fdf8f4] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedBlock>
            <p
              className="text-[#c9908f] tracking-[0.35em] uppercase text-xs mb-6"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Подтверждение
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <h2
              className="text-5xl md:text-6xl text-[#3d2b2b] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Вы придёте?
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <p
              className="text-[#7a6060] text-base leading-relaxed"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Пожалуйста, подтвердите своё присутствие до <strong className="font-medium text-[#c9908f]">1 июня 2026</strong> года. Это поможет нам подготовиться к торжеству.
            </p>
          </AnimatedBlock>
        </div>

        <AnimatedBlock delay={0.25}>
          <div className="bg-white p-10 shadow-sm border border-[#f0e6e6]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  {/* Name */}
                  <div>
                    <label
                      className="block text-[#8b6a6a] text-xs tracking-[0.15em] uppercase mb-3"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        setErrors({ ...errors, name: "" });
                      }}
                      className={inputClass}
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    />
                    {errors.name && (
                      <p className="text-[#c9908f] text-xs mt-1" style={{ fontFamily: "'Jost', sans-serif" }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Attendance */}
                  <div>
                    <label
                      className="block text-[#8b6a6a] text-xs tracking-[0.15em] uppercase mb-4"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      Вы придёте? *
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: "yes", label: "С радостью буду!" },
                        { value: "no", label: "К сожалению, нет" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, attendance: opt.value });
                            setErrors({ ...errors, attendance: "" });
                          }}
                          className={`flex-1 py-3 text-xs tracking-wider uppercase border transition-all duration-300 ${
                            form.attendance === opt.value
                              ? "bg-[#c9908f] text-white border-[#c9908f]"
                              : "border-[#e0d0d0] text-[#8b6a6a] hover:border-[#c9908f] hover:text-[#c9908f]"
                          }`}
                          style={{ fontFamily: "'Jost', sans-serif" }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {errors.attendance && (
                      <p className="text-[#c9908f] text-xs mt-2" style={{ fontFamily: "'Jost', sans-serif" }}>
                        {errors.attendance}
                      </p>
                    )}
                  </div>

                  {/* Guests count — show only if attending */}
                  <AnimatePresence>
                    {form.attendance === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <label
                          className="block text-[#8b6a6a] text-xs tracking-[0.15em] uppercase mb-3"
                          style={{ fontFamily: "'Jost', sans-serif" }}
                        >
                          Количество гостей
                        </label>
                        <select
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                          className={inputClass + " cursor-pointer"}
                          style={{ fontFamily: "'Jost', sans-serif" }}
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}</option>
                          ))}
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Menu preference */}
                  <AnimatePresence>
                    {form.attendance === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="overflow-hidden"
                      >
                        <label
                          className="block text-[#8b6a6a] text-xs tracking-[0.15em] uppercase mb-4"
                          style={{ fontFamily: "'Jost', sans-serif" }}
                        >
                          Предпочтения в еде
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {["Без ограничений", "Вегетарианское", "Без глютена", "Без лактозы"].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setForm({ ...form, menu: opt })}
                              className={`px-4 py-2 text-xs border transition-all duration-300 ${
                                form.menu === opt
                                  ? "bg-[#f5e0de] border-[#c9908f] text-[#c9908f]"
                                  : "border-[#e0d0d0] text-[#8b6a6a] hover:border-[#c9908f]"
                              }`}
                              style={{ fontFamily: "'Jost', sans-serif" }}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Comment */}
                  <div>
                    <label
                      className="block text-[#8b6a6a] text-xs tracking-[0.15em] uppercase mb-3"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      Пожелание или комментарий
                    </label>
                    <textarea
                      placeholder="Напишите что-нибудь тёплое..."
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      rows={3}
                      className={inputClass + " resize-none"}
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    />
                  </div>

                  {sendError && (
                    <p className="text-red-400 text-xs text-center -mt-4" style={{ fontFamily: "'Jost', sans-serif" }}>
                      {sendError}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.03, boxShadow: "0 8px 32px rgba(201,144,143,0.3)" } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                    className={`w-full py-4 text-white tracking-[0.2em] uppercase text-xs transition-all duration-300 flex items-center justify-center gap-3 ${
                      loading ? "bg-[#d9a8a7] cursor-wait" : "bg-[#c9908f] hover:bg-[#b87d7c]"
                    }`}
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Отправляем...
                      </>
                    ) : "Отправить"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#f5e0de] flex items-center justify-center mb-6">
                    <Check size={32} className="text-[#c9908f]" />
                  </div>
                  <h3
                    className="text-4xl text-[#3d2b2b] mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    Спасибо, {form.name}!
                  </h3>
                  <p
                    className="text-[#7a6060] text-base leading-relaxed max-w-sm"
                    style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                  >
                    {form.attendance === "yes"
                      ? "Мы очень рады, что вы будете с нами в этот особенный день! До встречи 12 сентября"
                      : "Жаль, что вас не будет с нами. Мы будем скучать и обязательно поделимся воспоминаниями!"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}
