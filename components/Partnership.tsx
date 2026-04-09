"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const scrollToContact = () =>
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

export default function Partnership() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].partnership;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      id="partners"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      {/* Gold rule top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,146,42,0.4), transparent)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-8 blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C9922A, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-3 mb-5"
          >
            <div className="gold-divider" />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#C9922A", fontFamily: bodyFont }}
            >
              {tr.sectionLabel}
            </span>
            <div className="gold-divider" />
          </motion.div>

          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
            style={{ fontFamily: displayFont, color: "#F5F0E8" }}
          >
            {tr.headline1}{" "}
            <span className="text-gradient-gold">{tr.headline2}</span>
          </motion.h2>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}
          >
            {tr.sub}
          </motion.p>
        </div>

        {/* Two cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Libya / Wholesale */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="group flex flex-col p-8 rounded-2xl border transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(201,146,42,0.2)",
            }}
            whileHover={{ borderColor: "rgba(201,146,42,0.45)", background: "rgba(201,146,42,0.04)" }}
          >
            {/* Icon + tag row */}
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(201,146,42,0.12)", color: "#C9922A" }}
              >
                <Building2 size={26} />
              </div>
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                style={{
                  background: "rgba(201,146,42,0.1)",
                  color: "#E8B45C",
                  border: "1px solid rgba(201,146,42,0.25)",
                  fontFamily: bodyFont,
                }}
              >
                {tr.libyaTag}
              </span>
            </div>

            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#F5F0E8", fontFamily: displayFont }}
            >
              {tr.libyaTitle}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}
            >
              {tr.libyaBody}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {tr.libyaPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm"
                  style={{ color: "rgba(245,240,232,0.75)", fontFamily: bodyFont }}>
                  <CheckCircle size={15} style={{ color: "#C9922A", flexShrink: 0 }} />
                  {point}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="mt-auto flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3.5 rounded-xl cursor-pointer transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #C9922A, #A8771F)",
                color: "#0A1628",
                fontFamily: bodyFont,
                boxShadow: "0 0 20px rgba(201,146,42,0.25)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(201,146,42,0.45)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(201,146,42,0.25)"; }}
            >
              {tr.libyaCta}
              <ArrowRight size={16} style={{ transform: isAR ? "rotate(180deg)" : "none" }} />
            </button>
          </motion.div>

          {/* Card 2: International / Partnership */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="group flex flex-col p-8 rounded-2xl border transition-all duration-300"
            style={{
              background: "rgba(201,146,42,0.04)",
              borderColor: "rgba(201,146,42,0.3)",
            }}
            whileHover={{ borderColor: "rgba(201,146,42,0.55)", background: "rgba(201,146,42,0.07)" }}
          >
            {/* Icon + tag row */}
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(201,146,42,0.15)", color: "#E8B45C" }}
              >
                <Globe size={26} />
              </div>
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                style={{
                  background: "rgba(201,146,42,0.15)",
                  color: "#E8B45C",
                  border: "1px solid rgba(201,146,42,0.35)",
                  fontFamily: bodyFont,
                }}
              >
                {tr.globalTag}
              </span>
            </div>

            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#F5F0E8", fontFamily: displayFont }}
            >
              {tr.globalTitle}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}
            >
              {tr.globalBody}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {tr.globalPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm"
                  style={{ color: "rgba(245,240,232,0.75)", fontFamily: bodyFont }}>
                  <CheckCircle size={15} style={{ color: "#E8B45C", flexShrink: 0 }} />
                  {point}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="mt-auto flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3.5 rounded-xl cursor-pointer transition-all duration-200"
              style={{
                background: "transparent",
                color: "#E8B45C",
                border: "1.5px solid rgba(201,146,42,0.5)",
                fontFamily: bodyFont,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,146,42,0.1)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,146,42,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,146,42,0.5)";
              }}
            >
              {tr.globalCta}
              <ArrowRight size={16} style={{ transform: isAR ? "rotate(180deg)" : "none" }} />
            </button>
          </motion.div>
        </div>

        {/* Credential stats bar */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(201,146,42,0.15)" }}
          >
            {tr.stats.map(({ value, label }, i) => (
              <div key={i} className="text-center py-2">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#E8B45C", fontFamily: displayFont }}
                >
                  {value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
