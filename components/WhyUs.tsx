"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, BadgeCheck, Users, Truck, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const reasonIcons = [Clock, BadgeCheck, ShieldCheck, Truck, Users, HeadphonesIcon];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function WhyUs() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].whyUs;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="why-us" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9922A, transparent)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,146,42,0.3), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,146,42,0.3), transparent)" }} />

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
            <span style={{ color: "#E8B45C" }}>{tr.headline2}</span>
          </motion.h2>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>
            {tr.sub}
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.reasons.map(({ title, body, stat, statLabel }, i) => {
            const Icon = reasonIcons[i];
            return (
              <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
                className="group relative p-7 rounded-2xl border transition-all duration-400 overflow-hidden cursor-default"
                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(201,146,42,0.1)" }}
                whileHover={{ borderColor: "rgba(201,146,42,0.4)", background: "rgba(201,146,42,0.04)", y: -6 }}>
                <div className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(201,146,42,0.06), transparent)" }} />
                <div className="relative">
                  <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,146,42,0.1)", color: "#C9922A" }}
                    whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Icon size={22} />
                  </motion.div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#F5F0E8", fontFamily: bodyFont }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.58)", fontFamily: bodyFont }}>{body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust bar */}
        <motion.div custom={9} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="mt-16 p-6 rounded-2xl border text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,146,42,0.08), rgba(10,22,40,0.5))", borderColor: "rgba(201,146,42,0.2)" }}>
          <p className="text-lg sm:text-xl font-semibold" style={{ fontFamily: displayFont, color: "#F5F0E8" }}>{tr.trustQuote}</p>
          <p className="text-sm mt-2" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{tr.trustSub}</p>
        </motion.div>
      </div>
    </section>
  );
}
