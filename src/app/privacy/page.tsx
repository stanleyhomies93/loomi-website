"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] font-semibold text-white mb-4">
              {t.privacy.title}
            </h1>
            <p className="text-[16px] text-white/50">
              {t.privacy.effectiveDate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div
            className="space-y-6 text-[16px] leading-[1.8] text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.privacy.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {t.privacy.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-[28px] font-semibold text-white pt-6">
                  {section.heading}
                </h2>
                {section.subsections.map((sub, j) => (
                  <div key={j}>
                    {sub.subheading && (
                      <h3 className="text-[20px] font-semibold text-white/90 pt-2 mt-4">
                        {sub.subheading}
                      </h3>
                    )}
                    {sub.paragraphs.map((p, k) => {
                      if (p.includes("\n•") || p.includes("\n\u2022")) {
                        const lines = p.split("\n");
                        const intro = lines[0];
                        const items = lines.slice(1).map((l) => l.replace(/^[•\u2022]\s*/, ""));
                        return (
                          <div key={k}>
                            {intro && <p className="mt-4">{intro}</p>}
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              {items.map((item, m) => (
                                <li key={m}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      if (p.includes("\n")) {
                        const lines = p.split("\n");
                        return (
                          <div key={k} className="mt-4">
                            <p className="font-semibold text-white/80">{lines[0]}</p>
                            {lines.slice(1).map((line, m) => (
                              <p key={m}>{line}</p>
                            ))}
                          </div>
                        );
                      }
                      return <p key={k} className="mt-4">{p}</p>;
                    })}
                  </div>
                ))}
              </div>
            ))}

            <p className="pt-8 text-white/40">{t.privacy.copyright}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
