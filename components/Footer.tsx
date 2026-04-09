"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const sectionHrefs = ["#about", "#products", "#timeline", "#partners", "#contact"];

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].footer;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#060E1A" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,146,42,0.5), transparent)" }} />
      <div className="absolute top-0 left-0 w-[400px] h-[300px] opacity-5 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9922A, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black border"
                style={{ background: "linear-gradient(135deg, #C9922A, #A8771F)", color: "#0A1628", borderColor: "rgba(201,146,42,0.4)" }}>AK</div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#F5F0E8", fontFamily: isAR ? "var(--font-cairo)" : "var(--font-dm-sans)" }}>
                  {isAR ? "شركة الخيار" : "Alkhayar Company"}
                </div>
                <div className="text-xs" dir={isAR ? "ltr" : "rtl"} style={{ color: "#C9922A", fontFamily: isAR ? "var(--font-dm-sans)" : "var(--font-cairo)" }}>
                  {isAR ? "Alkhayar Co." : "شركة الخيار"}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{tr.tagline}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{ background: "rgba(201,146,42,0.08)", borderColor: "rgba(201,146,42,0.25)", color: "#E8B45C", fontFamily: bodyFont }}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {tr.estBadge}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold mb-5 tracking-wider uppercase" style={{ color: "#C9922A", fontFamily: bodyFont }}>{tr.quickLinks}</h4>
            <ul className="space-y-3">
              {tr.links.map((label, i) => (
                <li key={i}>
                  <button onClick={() => handleNav(sectionHrefs[i])}
                    className="group flex items-center gap-2 text-sm transition-colors duration-200 cursor-pointer"
                    style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#E8B45C"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,240,232,0.55)"; }}>
                    <ChevronRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{ color: "#C9922A", transform: isAR ? "rotate(180deg)" : "none" }} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold mb-5 tracking-wider uppercase" style={{ color: "#C9922A", fontFamily: bodyFont }}>{tr.ourProducts}</h4>
            <ul className="space-y-3">
              {tr.productList.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}>
                  <ChevronRight size={12} style={{ color: "#C9922A", flexShrink: 0, transform: isAR ? "rotate(180deg)" : "none" }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-sm font-bold mb-5 tracking-wider uppercase" style={{ color: "#C9922A", fontFamily: bodyFont }}>{tr.branches}</h4>
            <ul className="space-y-3 mb-5">
              {tr.branchList.map((branch, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}>
                  <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#C9922A" }} />
                  {branch}
                </li>
              ))}
            </ul>
            <div className="space-y-2.5">
              <a href="tel:+218912109096" className="flex items-center gap-2 text-sm transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#E8B45C"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.55)"; }}>
                <Phone size={13} style={{ color: "#C9922A" }} />
                <span dir="ltr">+218 91 210 9096</span>
              </a>
              <a href="https://wa.me/218912109096" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#25D366"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.55)"; }}>
                <MessageCircle size={13} style={{ color: "#25D366" }} />
                {tr.whatsappUs}
              </a>
            </div>
          </div>
        </div>

        <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(201,146,42,0.2), transparent)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs" style={{ color: "rgba(245,240,232,0.35)", fontFamily: bodyFont }}>
            © {new Date().getFullYear()} {tr.copyright}
          </div>
          <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)", fontFamily: bodyFont }}>
            {isAR ? "طرابلس، ليبيا · alkhayar.ly" : "Tripoli, Libya · alkhayar.ly"}
          </span>
        </div>
      </div>

      <motion.div className="h-0.5"
        style={{ background: "linear-gradient(90deg, transparent, #C9922A, #E8B45C, #C9922A, transparent)" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
    </footer>
  );
}
