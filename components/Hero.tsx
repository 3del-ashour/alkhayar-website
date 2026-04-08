"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ArrowRight, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].hero;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      {/* Parallax background layers */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #C9922A 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(201,146,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #C9922A 0, #C9922A 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: `${4 + i * 2}px`, height: `${4 + i * 2}px`, background: i % 2 === 0 ? "rgba(201,146,42,0.4)" : "rgba(30,58,95,0.6)", left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -24, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }} />
      ))}

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center pt-24 sm:pt-28 lg:pt-0">
        {/* Badge — desktop only */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border"
          style={{ background: "rgba(201,146,42,0.08)", borderColor: "rgba(201,146,42,0.25)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#C9922A" }} />
          <span className="text-xs sm:text-sm font-medium tracking-wide sm:tracking-wider uppercase" style={{ color: "#C9922A", fontFamily: bodyFont }}>
            {tr.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[2.4rem] sm:text-6xl lg:text-8xl font-bold leading-[1.15] mb-6"
          style={{ fontFamily: displayFont, color: "#F5F0E8" }}>
          <span className="block">{tr.headline1}</span>
          <span className="block" style={{ color: "#E8B45C" }}>{tr.headline2}</span>
          <span className="block">{tr.headline3}</span>
        </motion.h1>

        {/* Arabic / English name accent */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-10 sm:w-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,146,42,0.5))" }} />
          <span className="text-base sm:text-lg tracking-[0.22em] font-light"
            dir={isAR ? "ltr" : "rtl"}
            style={{ color: "rgba(201,146,42,0.75)", fontFamily: isAR ? "var(--font-dm-sans)" : "var(--font-cairo)" }}>
            {isAR ? "Alkhayar Co." : "شركة الخيار"}
          </span>
          <div className="h-px w-10 sm:w-16" style={{ background: "linear-gradient(to left, transparent, rgba(201,146,42,0.5))" }} />
        </motion.div>

        {/* Subheading */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(245,240,232,0.65)", fontFamily: bodyFont }}>
          {tr.sub.split(/(S-Oil|Hi-TEC)/g).map((part, i) =>
            part === "S-Oil" || part === "Hi-TEC"
              ? <span key={i} style={{ color: "#E8B45C", fontWeight: 600 }}>{part}</span>
              : part
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(201,146,42,0.5)" }} whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #C9922A, #A8771F)", color: "#0A1628", boxShadow: "0 0 24px rgba(201,146,42,0.35)", fontFamily: bodyFont }}>
            {tr.ctaContact}
            <ArrowRight size={18} className={isAR ? "rotate-180" : ""} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.03, borderColor: "rgba(201,146,42,0.6)" }} whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll("#products")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all cursor-pointer border"
            style={{ color: "#F5F0E8", borderColor: "rgba(201,146,42,0.3)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)", fontFamily: bodyFont }}>
            {tr.ctaProducts}
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {[
            { icon: Shield, value: tr.stat1Value, label: tr.stat1Label },
            { icon: Globe, value: tr.stat2Value, label: tr.stat2Label },
            { icon: null, value: tr.stat3Value, label: tr.stat3Label },
          ].map(({ icon: Icon, value, label }, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 + i * 0.1 }}
              className="flex items-center gap-3">
              {Icon ? (
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,146,42,0.12)", color: "#C9922A" }}>
                  <Icon size={16} />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: "rgba(201,146,42,0.12)", color: "#C9922A" }}>LY</div>
              )}
              <div className="text-left">
                <div className="text-xl font-bold" style={{ color: "#F5F0E8", fontFamily: bodyFont }}>{value}</div>
                <div className="text-xs" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll("#about")}>
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(245,240,232,0.4)", fontFamily: bodyFont }}>{tr.scroll}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} style={{ color: "#C9922A" }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0A1628)" }} />
    </section>
  );
}
