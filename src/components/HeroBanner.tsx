"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HeroBanner() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative h-[600px] md:h-[1080px] w-full overflow-hidden bg-[#000421]">
      {/* Background image — mobile uses portrait image, desktop uses landscape */}
      <motion.div
        className="absolute inset-x-0 top-[60px] md:top-[184px] h-[540px] md:h-[882px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-banner-mobile.png"
          alt="Hero background"
          fill
          className="object-cover object-top md:hidden"
          priority
          onLoad={() => setImageLoaded(true)}
        />
        <Image
          src="/images/hero-banner.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center hidden md:block"
          priority
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>

      {/* Top gradient: dark → transparent (rotated 180deg, tall fade) */}
      <div className="pointer-events-none absolute left-1/2 top-[60px] md:top-[111px] -translate-x-1/2 rotate-180">
        <div
          className="h-[300px] md:h-[451px] w-[200vw] md:w-[1954px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,4,33,0), rgba(0,4,33,0.81) 54.57%, #000421)",
          }}
        />
      </div>

      {/* Top gradient: dark → transparent (rotated 180deg, edge) */}
      <div className="pointer-events-none absolute left-1/2 top-[80px] md:top-[135px] -translate-x-1/2 rotate-180">
        <div
          className="h-[150px] md:h-[249px] w-[200vw] md:w-[2438px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,4,33,0), #000421)",
          }}
        />
      </div>

      {/* Bottom gradient: transparent → dark */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[150px] md:h-[208px] w-[200vw] md:w-[2438px] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,4,33,0), #000421)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[80px] md:pt-[140px]">
        {/* Loomi Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/loomi-logo-white.png"
            alt="LOOMI Entertainment Group"
            width={354}
            height={45}
            className="mb-0 md:mb-4 w-[280px] md:w-[354px] h-auto"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="max-w-[702px] text-center text-[36px] md:text-[56px] font-semibold leading-[1.15] tracking-[-0.5px] text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.home.hero.title}
          <br />
          {t.home.hero.titleLine2}{" "}
          <span className="text-[#f95800]">{t.home.hero.ai}</span>
        </motion.h1>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}
