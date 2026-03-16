"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const emojis = ["🚀", "🧪", "🤝", "🌍"];

export default function Values() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#000421] py-12 md:py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.h2
          className="mb-8 md:mb-16 text-center text-[28px] md:text-[48px] font-semibold leading-[1.2] md:leading-[56px] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {t.home.values.our}{" "}
          <span
            className=""
            style={{
              backgroundImage:
                "linear-gradient(to right, #f95800, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.home.values.highlight}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.home.values.items.map((value, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-[16px] border border-white/10 p-6 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Decorative border lines */}
              <div className="absolute inset-0 rounded-[16px] border border-white/5" />

              <div className="flex items-start gap-4">
                <span className="text-[36px]">{emojis[i]}</span>
                <div>
                  <h3 className="mb-3 text-[20px] md:text-[24px] font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="max-w-[430px] text-[14px] md:text-[16px] leading-[1.6] text-white/60">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
