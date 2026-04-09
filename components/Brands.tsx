"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const row1 = [
  "Toyota", "Hyundai", "Kia", "Nissan", "Mitsubishi",
  "Honda", "Chevrolet", "GMC", "Mazda", "Suzuki",
];
const row2 = [
  "Mercedes-Benz", "BMW", "Volkswagen", "Peugeot", "Renault",
  "Isuzu", "Land Rover", "Jeep", "Daewoo", "SsangYong",
];

function MarqueeRow({
  items,
  duration = 35,
  reverse = false,
  bodyFont,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
  bodyFont: string;
}) {
  // Quadruple the items so the loop is seamless
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-1.5">
      <motion.div
        className="flex gap-3"
        style={{ width: "max-content" }}
        animate={{ x: reverse ? ["0%", "25%"] : ["0%", "-25%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-5 py-2.5 rounded-full border text-sm font-semibold whitespace-nowrap"
            style={{
              background: "rgba(201,146,42,0.06)",
              borderColor: "rgba(201,146,42,0.18)",
              color: "rgba(245,240,232,0.65)",
              fontFamily: bodyFont,
            }}
          >
            {brand}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Brands() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].brands;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "#060E1A" }}
    >
      {/* top / bottom gold rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,146,42,0.35), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,146,42,0.35), transparent)",
        }}
      />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="gold-divider" />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#C9922A", fontFamily: bodyFont }}
          >
            {tr.label}
          </span>
          <div className="gold-divider" />
        </div>
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
          style={{ color: "#F5F0E8", fontFamily: displayFont }}
        >
          {tr.headline}
        </h2>
        <p
          className="text-sm max-w-lg mx-auto leading-relaxed"
          style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}
        >
          {tr.sub}
        </p>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #060E1A, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(-90deg, #060E1A, transparent)",
          }}
        />

        <div className="space-y-3">
          <MarqueeRow items={row1} duration={35} bodyFont={bodyFont} />
          <MarqueeRow items={row2} duration={42} reverse bodyFont={bodyFont} />
        </div>
      </div>
    </section>
  );
}
