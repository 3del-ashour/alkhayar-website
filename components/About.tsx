"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Handshake, TrendingUp, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const pillarIcons = [Award, Handshake, TrendingUp, MapPin];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function About() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].about;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9922A, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1E3A5F, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-center">
          {/* Left */}
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#C9922A", fontFamily: bodyFont }}>
                {tr.sectionLabel}
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: displayFont, color: "#F5F0E8" }}>
              {tr.headline1}{" "}
              <span className="text-gradient-gold">{tr.headline2}</span>
            </motion.h2>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.65)", fontFamily: bodyFont }}>
              {tr.body1.includes("شركة الخيار") ? (
                <>
                  {tr.body1.split("شركة الخيار")[0]}
                  <strong style={{ color: "#F5F0E8" }}>شركة الخيار</strong>
                  {tr.body1.split("شركة الخيار")[1]}
                </>
              ) : tr.body1.includes("Alkhayar Company") ? (
                <>
                  {tr.body1.split("Alkhayar Company (شركة الخيار)")[0]}
                  <strong style={{ color: "#F5F0E8" }}>Alkhayar Company (شركة الخيار)</strong>
                  {tr.body1.split("Alkhayar Company (شركة الخيار)")[1]}
                </>
              ) : tr.body1}
            </motion.p>
            <motion.p custom={3} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.65)", fontFamily: bodyFont }}>
              {tr.body2
                .split(/(S-Oil Corporation|Hi-TEC|Dongwoo Brake)/g)
                .map((part, i) =>
                  part === "S-Oil Corporation" || part === "Hi-TEC" || part === "Dongwoo Brake"
                    ? <strong key={i} style={{ color: "#E8B45C" }}>{part}</strong>
                    : part
                )}
            </motion.p>
          </div>

          {/* Right: visual card */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <div className="relative rounded-2xl overflow-hidden p-8 border"
              style={{ background: "linear-gradient(135deg, rgba(15,31,61,0.9), rgba(10,22,40,0.95))", borderColor: "rgba(201,146,42,0.2)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20"
                style={{ background: "radial-gradient(circle at top right, #C9922A, transparent 70%)" }} />

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: tr.stat1, sub: tr.stat1Sub },
                  { value: tr.stat2, sub: tr.stat2Sub },
                  { value: tr.stat3, sub: tr.stat3Sub },
                  { value: tr.stat4, sub: tr.stat4Sub },
                ].map(({ value, sub }, i) => (
                  <div key={i} className="p-4 rounded-xl border"
                    style={{ background: "rgba(201,146,42,0.05)", borderColor: "rgba(201,146,42,0.12)" }}>
                    <div className="text-3xl font-bold mb-1" style={{ fontFamily: displayFont, color: "#E8B45C" }}>{value}</div>
                    <div className="text-xs" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{sub}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "rgba(201,146,42,0.07)", border: "1px solid rgba(201,146,42,0.2)" }}>
                <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: "#C9922A" }} />
                <div>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "rgba(245,240,232,0.85)", fontFamily: bodyFont }}>
                    {tr.quote}
                  </p>
                  <p className="text-xs mt-2 font-semibold tracking-wide" style={{ color: "#C9922A", fontFamily: bodyFont }}>{tr.quoteAuthor}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.pillars.map(({ title, body }, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
                className="group p-6 rounded-2xl border transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(201,146,42,0.12)" }}
                whileHover={{ borderColor: "rgba(201,146,42,0.4)", background: "rgba(201,146,42,0.05)", y: -4 }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(201,146,42,0.12)", color: "#C9922A" }}>
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "#F5F0E8", fontFamily: bodyFont }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}>{body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
