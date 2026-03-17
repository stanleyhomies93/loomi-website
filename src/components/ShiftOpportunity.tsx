"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ShiftOpportunity() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#000421] py-2 md:py-1 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="relative flex flex-col-reverse md:flex-row items-center">
          {/* Left text */}
          <motion.div
            className="relative z-10 max-w-[538px] shrink-0 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 md:mb-8 text-[28px] md:text-[48px] font-semibold leading-[1.3] md:leading-[66px] text-white">
              {t.home.shift.the}{t.home.shift.the ? " " : ""}
              <span
                className=""
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #f95800, #ff8a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.home.shift.highlight}
              </span>
            </h2>
            <p className="text-[15px] md:text-[18px] leading-[1.6] text-white/70">
              {t.home.shift.p1}
            </p>
            <p className="mt-4 md:mt-6 text-[15px] md:text-[18px] leading-[1.6] text-white/70">
              {t.home.shift.p2}
            </p>
          </motion.div>

          {/* Right image - overlapping closer to text */}
          <motion.div
            className="relative mb-0 md:mb-0 md:mt-0 md:-mr-[250px] md:ml-[-160px] h-[390px] md:h-[850px] w-[450px] self-center md:w-[1100px] shrink-0 -mt-16 -mb-32 md:my-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/shift-opportunity.png"
              alt={t.home.shift.highlight}
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
