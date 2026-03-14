"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[1080px] w-full overflow-hidden bg-[#000421]">
      {/* Background image — positioned down like Figma (top: 184px) */}
      <div className="absolute inset-x-0 top-[184px] h-[882px]">
        <Image
          src="/images/hero-banner.png"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Top gradient: dark → transparent (rotated 180deg, tall fade) */}
      <div className="pointer-events-none absolute left-1/2 top-[111px] -translate-x-1/2 rotate-180">
        <div
          className="h-[451px] w-[1954px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,4,33,0), rgba(0,4,33,0.81) 54.57%, #000421)",
          }}
        />
      </div>

      {/* Top gradient: dark → transparent (rotated 180deg, edge) */}
      <div className="pointer-events-none absolute left-1/2 top-[135px] -translate-x-1/2 rotate-180">
        <div
          className="h-[249px] w-[2438px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,4,33,0), #000421)",
          }}
        />
      </div>

      {/* Bottom gradient: transparent → dark */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[208px] w-[2438px] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,4,33,0), #000421)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[157px]">
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
            className="mb-4"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="max-w-[702px] text-center text-[56px] font-semibold leading-[1.15] tracking-[-0.5px] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shaping Tomorrow&apos;s
          <br />
          Entertainment with{" "}
          <span className="text-[#0d61e8]">AI</span>
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[60px] left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-[120px] w-[3px] bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
