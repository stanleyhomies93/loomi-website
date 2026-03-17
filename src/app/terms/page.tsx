"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function TermsPage() {
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
              {t.terms.title}
            </h1>
            <p className="text-[16px] text-white/50">
              {t.terms.effectiveDate}
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
            <p>{t.terms.intro}</p>

            {t.terms.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-[24px] font-semibold text-white pt-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => {
                  if (p.includes("\n•") || p.includes("\n\u2022")) {
                    const lines = p.split("\n");
                    const intro = lines[0];
                    const items = lines.slice(1).map((l) => l.replace(/^[•\u2022]\s*/, ""));
                    return (
                      <div key={j}>
                        {intro && <p className="mt-4">{intro}</p>}
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                          {items.map((item, k) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return <p key={j} className="mt-4">{p}</p>;
                })}
              </div>
            ))}

            <p className="pt-8 text-white/40">{t.terms.copyright}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
