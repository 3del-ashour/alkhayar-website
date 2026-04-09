"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, ChevronRight } from "lucide-react";
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

type FormState = { name: string; email: string; phone: string; message: string };

export default function Contact() {
  const { lang, isAR } = useLanguage();
  const tr = t[lang].contact;
  const bodyFont = isAR ? "var(--font-cairo)" : "var(--font-dm-sans)";
  const displayFont = isAR ? "var(--font-cairo)" : "var(--font-playfair)";

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  const branches = [
    { name: tr.branch1Name, address: tr.branch1Address, href: "https://maps.app.goo.gl/eiXaya5uVQv4z8XT6" },
    { name: tr.branch2Name, address: tr.branch2Address, href: "https://maps.app.goo.gl/ax7s8Vzo2hwCM3Fo6" },
    { name: tr.branch3Name, address: tr.branch3Address, href: null },
  ];

  const contactInfo = [
    { icon: Phone, label: isAR ? "الهاتف" : "Phone", value: tr.phone, sub: tr.phoneSub, href: "tel:+218912109096" },
    { icon: Mail, label: isAR ? "البريد" : "Email", value: tr.email, sub: tr.emailSub, href: "mailto:info@alkhayar.ly" },
    { icon: MessageCircle, label: "WhatsApp", value: tr.whatsapp, sub: tr.whatsappSub, href: "https://wa.me/218912109096" },
  ];

  const inputStyle = { background: "rgba(255,255,255,0.04)", borderColor: "rgba(201,146,42,0.15)", color: "#F5F0E8", fontFamily: bodyFont };
  const inputClass = "w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 border";

  return (
    <section id="contact" ref={ref} className="relative py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-8 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9922A, transparent)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
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
            <span className="text-gradient-gold">{tr.headline2}</span>
          </motion.h2>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>
            {tr.sub}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            {/* Branch cards */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-3 mb-5">
              {branches.map(({ name, address, href }, i) => {
                const Tag = href ? "a" : "div";
                const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Tag key={i} {...linkProps}
                    className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(201,146,42,0.15)", textDecoration: "none", display: "flex", cursor: href ? "pointer" : "default" }}
                    onMouseEnter={href ? (e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,146,42,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(201,146,42,0.06)"; } : undefined}
                    onMouseLeave={href ? (e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,146,42,0.15)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; } : undefined}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(201,146,42,0.12)", color: "#C9922A" }}>
                      <MapPin size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold" style={{ color: "#F5F0E8", fontFamily: bodyFont }}>{name}</div>
                      <div className="text-xs" style={{ color: "rgba(245,240,232,0.5)", fontFamily: bodyFont }}>{address}</div>
                    </div>
                    {href && <ChevronRight size={14} style={{ color: "#C9922A", flexShrink: 0, transform: isAR ? "rotate(180deg)" : "none" }} />}
                  </Tag>
                );
              })}
            </motion.div>

            {/* Contact info */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-3 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, sub, href }, i) => {
                const Wrapper = href ? "a" : "div";
                const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Wrapper key={i} {...wrapperProps}
                    className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-default"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(201,146,42,0.12)", textDecoration: "none" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,146,42,0.35)"; (e.currentTarget as HTMLElement).style.background = "rgba(201,146,42,0.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,146,42,0.12)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(201,146,42,0.12)", color: "#C9922A" }}>
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#C9922A", fontFamily: bodyFont }}>{label}</div>
                      <div className="text-sm font-medium truncate" dir="ltr" style={{ color: "#F5F0E8", fontFamily: bodyFont, textAlign: isAR ? "right" : "left" }}>{value}</div>
                      <div className="text-xs" style={{ color: "rgba(245,240,232,0.45)", fontFamily: bodyFont }}>{sub}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </motion.div>

            {/* Google Map embed */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(201,146,42,0.25)" }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.05%2C32.83%2C13.35%2C32.97&layer=mapnik&marker=32.9%2C13.18"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                title={isAR ? "موقع فروع شركة الخيار" : "Alkhayar Branch Locations"}
              />
              <div className="flex items-center justify-between px-4 py-3"
                style={{ background: "#0F1F3D", borderTop: "1px solid rgba(201,146,42,0.15)" }}>
                <span className="text-xs" style={{ color: "rgba(245,240,232,0.55)", fontFamily: bodyFont }}>
                  {isAR ? "طرابلس ومصراتة، ليبيا" : "Tripoli & Misrata, Libya"}
                </span>
                <a href="https://maps.app.goo.gl/eiXaya5uVQv4z8XT6" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                  style={{ color: "#C9922A", background: "rgba(201,146,42,0.1)", border: "1px solid rgba(201,146,42,0.25)", fontFamily: bodyFont }}>
                  <MapPin size={11} />
                  {tr.openMaps}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <div className="p-8 rounded-2xl border"
              style={{ background: "rgba(15,31,61,0.6)", borderColor: "rgba(201,146,42,0.2)", backdropFilter: "blur(12px)" }}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(201,146,42,0.15)", color: "#C9922A" }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#F5F0E8", fontFamily: displayFont }}>{tr.successTitle}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)", fontFamily: bodyFont }}>{tr.successBody}</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                    className="mt-6 text-xs px-5 py-2.5 rounded-lg border transition-all cursor-pointer"
                    style={{ color: "#C9922A", borderColor: "rgba(201,146,42,0.3)", fontFamily: bodyFont }}>
                    {tr.successReset}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "rgba(245,240,232,0.7)", fontFamily: bodyFont }}>{tr.formName} *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={tr.formNamePlaceholder} className={inputClass} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(201,146,42,0.1)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.15)"; e.target.style.boxShadow = "none"; }} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "rgba(245,240,232,0.7)", fontFamily: bodyFont }}>{tr.formEmail}</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={tr.formEmailPlaceholder} className={inputClass} style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(201,146,42,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.15)"; e.target.style.boxShadow = "none"; }} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "rgba(245,240,232,0.7)", fontFamily: bodyFont }}>{tr.formPhone}</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={tr.formPhonePlaceholder} className={inputClass} style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(201,146,42,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.15)"; e.target.style.boxShadow = "none"; }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: "rgba(245,240,232,0.7)", fontFamily: bodyFont }}>{tr.formMessage} *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={tr.formMessagePlaceholder}
                      className={`${inputClass} resize-none`} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(201,146,42,0.1)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(201,146,42,0.15)"; e.target.style.boxShadow = "none"; }} />
                  </div>
                  <motion.button type="submit" disabled={submitting}
                    whileHover={!submitting ? { scale: 1.02, boxShadow: "0 0 32px rgba(201,146,42,0.4)" } : {}}
                    whileTap={!submitting ? { scale: 0.98 } : {}}
                    className="w-full py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
                    style={{ background: submitting ? "rgba(201,146,42,0.5)" : "linear-gradient(135deg, #C9922A, #A8771F)", color: "#0A1628", boxShadow: "0 0 20px rgba(201,146,42,0.25)", fontFamily: bodyFont }}>
                    {submitting ? (
                      <><span className="w-4 h-4 border-2 border-navy/40 border-t-navy rounded-full animate-spin" />{tr.formSending}</>
                    ) : (
                      <>{tr.formSend}<Send size={16} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
