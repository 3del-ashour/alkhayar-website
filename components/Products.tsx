"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Cog, Shield, Package, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const productIcons = [Droplets, Cog, Shield, Package];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Products() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].products;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="products" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: "#0F1F3D" }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #C9922A 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C9922A 0%, transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(rgba(201,146,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-3 mb-5">
            <div className="gold-divider" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#C9922A", fontFamily: bodyFont }}>{tr.sectionLabel}</span>
            <div className="gold-divider" />
          </motion.div>

          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
            style={{ fontFamily: displayFont, color: "#F5F0E8" }}>
            {tr.headline1}{" "}
            <span className="text-gradient-gold">{tr.headline2}</span>
          </motion.h2>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>
            {tr.sub}
          </motion.p>
        </div>

        {/* Brand banners — S-Oil + Dongwoo Brake side by side */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* S-Oil banner */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="relative rounded-2xl p-7 border overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(201,146,42,0.12), rgba(201,146,42,0.04))", borderColor: "rgba(201,146,42,0.3)" }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-[60px] pointer-events-none" style={{ background: "#C9922A" }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black border flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9922A, #A8771F)", color: "#0A1628", borderColor: "rgba(201,146,42,0.4)" }}>
                  S
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold" style={{ color: "#F5F0E8", fontFamily: displayFont }}>{tr.soilTitle}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold mt-1"
                    style={{ background: "rgba(201,146,42,0.2)", color: "#E8B45C", fontFamily: bodyFont }}>
                    <Star size={9} fill="#E8B45C" />
                    {tr.soilBadge}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(245,240,232,0.65)", fontFamily: bodyFont }}>{tr.soilBody}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold" style={{ color: "#E8B45C", fontFamily: displayFont }}>{tr.soilStat}</span>
                <span className="text-xs" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{tr.soilStatLabel}</span>
              </div>
            </div>
          </motion.div>

          {/* Dongwoo Brake banner */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="relative rounded-2xl p-7 border overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(30,58,95,0.5), rgba(10,22,40,0.8))", borderColor: "rgba(201,146,42,0.25)" }}>
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-10 blur-[60px] pointer-events-none" style={{ background: "#1E3A5F" }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black border flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1E3A5F, #162847)", color: "#C9922A", borderColor: "rgba(201,146,42,0.3)" }}>
                  DW
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold" style={{ color: "#F5F0E8", fontFamily: displayFont }}>{tr.dongwooTitle}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold mt-1"
                    style={{ background: "rgba(201,146,42,0.15)", color: "#E8B45C", fontFamily: bodyFont }}>
                    <Star size={9} fill="#E8B45C" />
                    {tr.dongwooBadge}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(245,240,232,0.65)", fontFamily: bodyFont }}>{tr.dongwooBody}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold" style={{ color: "#E8B45C", fontFamily: displayFont }}>{tr.dongwooStat}</span>
                <span className="text-xs" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{tr.dongwooStatLabel}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {tr.items.map(({ category, badge, description, items }, i) => {
            const Icon = productIcons[i];
            return (
              <motion.div key={i} custom={i + 5} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
                className="group relative p-7 rounded-2xl border transition-all duration-300 overflow-hidden cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(201,146,42,0.12)" }}
                whileHover={{ borderColor: "rgba(201,146,42,0.35)", y: -4 }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top left, rgba(201,146,42,0.08), transparent 60%)" }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(201,146,42,0.12)", color: "#C9922A" }}>
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                      style={{ color: "#E8B45C", borderColor: "rgba(201,146,42,0.25)", background: "rgba(201,146,42,0.08)", fontFamily: bodyFont }}>
                      {badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#F5F0E8", fontFamily: displayFont }}>{category}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>{description}</p>
                  <ul className="space-y-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245,240,232,0.7)", fontFamily: bodyFont }}>
                        <ChevronRight size={14} style={{ color: "#C9922A", flexShrink: 0, transform: isAR ? "rotate(180deg)" : "none" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div custom={9} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mt-14">
          <p className="text-sm mb-5" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{tr.ctaText}</p>
          <motion.a href="#contact" whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(201,146,42,0.4)" }} whileTap={{ scale: 0.97 }}
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #C9922A, #A8771F)", color: "#0A1628", boxShadow: "0 0 20px rgba(201,146,42,0.25)", fontFamily: bodyFont }}>
            {tr.requestQuote}
            <ChevronRight size={16} style={{ transform: isAR ? "rotate(180deg)" : "none" }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
