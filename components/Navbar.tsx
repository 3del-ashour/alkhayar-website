"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const { lang, toggleLang, isAR } = useLanguage();
  const tr = t[lang].nav;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: tr.about, href: "#about" },
    { label: tr.products, href: "#products" },
    { label: tr.history, href: "#timeline" },
    { label: tr.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md border-b shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : ""
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(10, 22, 40, 0.95)" : "transparent",
          borderColor: scrolled ? "rgba(201,146,42,0.1)" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex items-center gap-3 group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border"
                style={{
                  background: "linear-gradient(135deg, #C9922A, #E8B45C)",
                  borderColor: "rgba(201,146,42,0.4)",
                  color: "#0A1628",
                }}
              >
                AK
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide" style={{ color: "#F5F0E8", fontFamily: isAR ? "var(--font-cairo)" : "var(--font-dm-sans)" }}>
                  {isAR ? "شركة الخيار" : "Alkhayar Co."}
                </div>
                <div className="text-xs" dir={isAR ? "ltr" : "rtl"} style={{ color: "#C9922A", fontFamily: isAR ? "var(--font-dm-sans)" : "var(--font-cairo)" }}>
                  {isAR ? "Alkhayar Co." : "شركة الخيار"}
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium transition-colors duration-200 relative group cursor-pointer"
                  style={{ color: "rgba(245,240,232,0.75)", fontFamily: isAR ? "var(--font-cairo)" : "var(--font-dm-sans)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#C9922A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,240,232,0.75)"; }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: "linear-gradient(90deg, #C9922A, #E8B45C)" }}
                  />
                </button>
              ))}
            </nav>

            {/* Right side: Lang toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLang}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 cursor-pointer"
                style={{
                  color: "#C9922A",
                  borderColor: "rgba(201,146,42,0.3)",
                  background: "rgba(201,146,42,0.06)",
                  fontFamily: isAR ? "var(--font-dm-sans)" : "var(--font-cairo)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,146,42,0.6)";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,146,42,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,146,42,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,146,42,0.06)";
                }}
              >
                {isAR ? "English" : "العربية"}
              </motion.button>

              <button
                onClick={() => handleNavClick("#contact")}
                className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #C9922A, #A8771F)",
                  color: "#0A1628",
                  boxShadow: "0 0 20px rgba(201,146,42,0.3)",
                  fontFamily: isAR ? "var(--font-cairo)" : "var(--font-dm-sans)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 28px rgba(201,146,42,0.5)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(201,146,42,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                {tr.contactCta}
              </button>
            </div>

            {/* Mobile: Lang toggle + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer"
                style={{
                  color: "#C9922A",
                  borderColor: "rgba(201,146,42,0.3)",
                  background: "rgba(201,146,42,0.06)",
                  fontFamily: isAR ? "var(--font-dm-sans)" : "var(--font-cairo)",
                }}
              >
                {isAR ? "EN" : "ع"}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "#F5F0E8" }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: isAR ? "-100%" : "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAR ? "-100%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10"
            style={{ background: "rgba(10, 22, 40, 0.98)", backdropFilter: "blur(16px)" }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: isAR ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 px-4 rounded-xl text-lg font-medium border-b cursor-pointer"
                  style={{
                    color: "#F5F0E8",
                    borderColor: "rgba(201,146,42,0.1)",
                    fontFamily: isAR ? "var(--font-cairo)" : "var(--font-dm-sans)",
                    textAlign: isAR ? "right" : "left",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <button
                onClick={toggleLang}
                className="w-full py-3.5 rounded-xl text-base font-semibold border cursor-pointer"
                style={{
                  color: "#C9922A",
                  borderColor: "rgba(201,146,42,0.3)",
                  background: "rgba(201,146,42,0.06)",
                  fontFamily: isAR ? "var(--font-dm-sans)" : "var(--font-cairo)",
                }}
              >
                {isAR ? "Switch to English" : "التبديل إلى العربية"}
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full py-4 rounded-xl text-base font-semibold cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #C9922A, #A8771F)",
                  color: "#0A1628",
                  fontFamily: isAR ? "var(--font-cairo)" : "var(--font-dm-sans)",
                }}
              >
                {tr.contactCta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
