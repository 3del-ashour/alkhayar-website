"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function WhatsAppButton() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].whatsapp;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";

  const [expanded, setExpanded] = useState(false);
  const waNumber = "218912109096";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(tr.defaultMsg)}`;

  return (
    <div className={`fixed bottom-6 ${isAR ? "left-6" : "right-6"} z-50 flex flex-col items-end gap-3`}>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="rounded-2xl border overflow-hidden shadow-2xl"
            style={{ background: "#0F1F3D", borderColor: "rgba(201,146,42,0.25)", width: "260px" }}>
            <div className="px-4 py-3 flex items-center gap-3" style={{ background: "rgba(37, 211, 102, 0.15)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                <MessageCircle size={16} color="white" fill="white" />
              </div>
              <div>
                <div className="text-xs font-bold" style={{ color: "#F5F0E8", fontFamily: bodyFont }}>
                  {isAR ? "شركة الخيار" : "Alkhayar Company"}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs" style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}>{tr.quickReply}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs leading-relaxed mb-4 p-3 rounded-xl"
                style={{ background: "rgba(37, 211, 102, 0.08)", color: "rgba(245,240,232,0.75)", border: "1px solid rgba(37, 211, 102, 0.15)", fontFamily: bodyFont }}>
                {tr.greeting}
              </div>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all"
                style={{ background: "#25D366", color: "#fff", textDecoration: "none", fontFamily: bodyFont }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1fbc58"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#25D366"; }}>
                <MessageCircle size={15} />
                {tr.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setExpanded(!expanded)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37, 211, 102, 0.4)" }}
        aria-label={tr.cta}>
        {!expanded && (
          <motion.span className="absolute inset-0 rounded-full" style={{ background: "rgba(37,211,102,0.4)" }}
            animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
        )}
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} color="white" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={24} color="white" fill="white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
