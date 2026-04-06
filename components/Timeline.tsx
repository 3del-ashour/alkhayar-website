"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Timeline() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].timeline;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="timeline" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: "#0F1F3D" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,146,42,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-5">
            <div className="gold-divider" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#C9922A", fontFamily: bodyFont }}>{tr.sectionLabel}</span>
            <div className="gold-divider" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
            style={{ fontFamily: displayFont, color: "#F5F0E8" }}>
            {tr.headline1}{" "}
            <span className="text-gradient-gold">{tr.headline2}</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>
            {tr.sub}
          </motion.p>
        </div>

        {/* Desktop: two-column timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(201,146,42,0.4) 5%, rgba(201,146,42,0.4) 95%, transparent)" }} />

          <div className="space-y-12">
            {tr.milestones.map(({ year, title, body, highlight }: { year: string; title: string; body: string; highlight?: boolean }, i: number) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: "easeOut" as const }}
                  className={`relative flex ${isLeft ? "flex-row" : "flex-row-reverse"} items-center gap-8`}>
                  <div className="w-[calc(50%-3rem)]">
                    <div className="group p-6 rounded-2xl border transition-all duration-300 cursor-default"
                      style={{
                        background: highlight ? "linear-gradient(135deg, rgba(201,146,42,0.1), rgba(10,22,40,0.8))" : "rgba(255,255,255,0.03)",
                        borderColor: highlight ? "rgba(201,146,42,0.3)" : "rgba(201,146,42,0.1)",
                      }}>
                      <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#C9922A", fontFamily: bodyFont }}>{year}</div>
                      <h3 className="text-base font-bold mb-2" style={{ color: "#F5F0E8", fontFamily: bodyFont }}>{title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>{body}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full border-2"
                      style={{ background: highlight ? "#C9922A" : "#0F1F3D", borderColor: "#C9922A", boxShadow: highlight ? "0 0 12px rgba(201,146,42,0.6)" : "none" }} />
                  </div>
                  <div className="w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div className={`absolute ${isAR ? "right-5" : "left-5"} top-0 bottom-0 w-0.5`}
            style={{ background: "linear-gradient(to bottom, transparent, rgba(201,146,42,0.4) 3%, rgba(201,146,42,0.4) 97%, transparent)" }} />

          <div className="space-y-8">
            {tr.milestones.map(({ year, title, body, highlight }: { year: string; title: string; body: string; highlight?: boolean }, i: number) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: isAR ? 30 : -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
                className={`relative ${isAR ? "pr-14" : "pl-14"}`}>
                <div className={`absolute ${isAR ? "right-3.5" : "left-3.5"} top-5 w-4 h-4 rounded-full border-2 -translate-x-1/2`}
                  style={{ background: highlight ? "#C9922A" : "#0F1F3D", borderColor: "#C9922A", boxShadow: highlight ? "0 0 10px rgba(201,146,42,0.5)" : "none" }} />
                <div className="p-5 rounded-2xl border"
                  style={{ background: highlight ? "linear-gradient(135deg, rgba(201,146,42,0.1), rgba(10,22,40,0.8))" : "rgba(255,255,255,0.03)", borderColor: highlight ? "rgba(201,146,42,0.3)" : "rgba(201,146,42,0.1)" }}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#C9922A", fontFamily: bodyFont }}>{year}</div>
                  <h3 className="text-sm font-bold mb-1.5" style={{ color: "#F5F0E8", fontFamily: bodyFont }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
