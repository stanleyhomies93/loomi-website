"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const partners = [
  {
    name: "Google AI Studio",
    image: "/images/logo-google-ai-studio.png",
    height: 56,
    width: 270,
  },
  {
    name: "BytePlus",
    image: "/images/logo-byteplus.png",
    height: 50,
    width: 210,
  },
  {
    name: "Alibaba Cloud",
    image: "/images/logo-alibaba-cloud.png",
    height: 50,
    width: 245,
  },
  {
    name: "STUDIO GENIE",
    image: "/images/logo-studio-genie.png",
    height: 50,
    width: 225,
  },
  {
    name: "COL",
    image: "/images/logo-col.png",
    height: 70,
    width: 110,
  },
];

function LogoSet() {
  return (
    <>
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="relative mx-6 md:mx-12 flex shrink-0 items-center justify-center opacity-60"
          style={{ width: partner.width, height: partner.height }}
        >
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </>
  );
}

export default function Partnerships() {
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
          {t.home.partnerships.our}{" "}
          <span
            className=""
            style={{
              backgroundImage:
                "linear-gradient(to right, #f95800, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.home.partnerships.highlight}
          </span>
        </motion.h2>
      </div>

      {/* Mobile: static grid of logos */}
      <div className="mx-auto max-w-[1240px] px-6 md:hidden">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative flex shrink-0 items-center justify-center"
              style={{ width: partner.width * 0.6, height: partner.height * 0.6 }}
            >
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: infinite scrolling logos */}
      <div className="mx-auto max-w-[1600px] relative overflow-hidden hidden md:block">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[200px] bg-gradient-to-r from-[#000421] via-[#000421]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[200px] bg-gradient-to-l from-[#000421] via-[#000421]/80 to-transparent" />

        <motion.div
          className="flex items-center justify-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <LogoSet />
          <LogoSet />
        </motion.div>
      </div>
    </section>
  );
}
