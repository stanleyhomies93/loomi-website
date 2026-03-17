"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const ventureImages = [
  { image: "/images/ventures-capital.jpg", imagePosition: "left" as const },
  { image: "/images/ventures-creator.jpg", imagePosition: "right" as const },
];

export default function VenturesPage() {
  const { t } = useLanguage();

  const ventures = t.ventures.cards.map((card, i) => ({
    ...card,
    image: ventureImages[i].image,
    imagePosition: ventureImages[i].imagePosition,
  }));

  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[716px] w-full overflow-hidden bg-[#000421]">
        <div className="absolute inset-x-0 top-0 h-full">
          <Image
            src="/images/ventures-hero-mobile.png"
            alt="Ventures hero"
            fill
            className="object-cover object-center md:hidden"
            priority
          />
          <Image
            src="/images/venture-scene.jpg"
            alt="Ventures hero"
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
        </div>

        {/* Left dark gradient — desktop only */}
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, #000421 0%, transparent 50%)",
          }}
        />

        {/* Top gradient for mobile readability */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[200px] md:hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(0,4,33,0.6), transparent)",
          }}
        />

        {/* Bottom gradient */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[150px] md:h-[208px]"
          style={{
            background: "linear-gradient(to bottom, transparent, #000421)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-start pt-24 items-center md:justify-center md:items-start md:pt-0 pb-0 md:pb-0 px-6">
          <div className="mx-auto w-full max-w-[1320px] flex flex-col items-center md:items-start md:pl-12">
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-1 flex items-center gap-3">
                <Image src="/images/play-icon.png" alt="" width={16} height={18} className="w-[16px] h-[18px] object-contain" />
                <span className="text-[18px] font-semibold text-[#f95800]">{t.ventures.label}</span>
              </div>
              <h1 className="text-[40px] md:text-[64px] font-semibold leading-[1.1] text-white">
                {t.ventures.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtitle */}
      <section className="relative bg-[#000421] py-8 md:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.h2
            className="text-center text-[22px] md:text-[48px] font-semibold tracking-[-0.48px] leading-[1.3] md:leading-[56px] bg-gradient-to-b from-white from-60% to-[#4a8af5] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t.ventures.subtitle.part1}{" "}
            <span
              className="text-[#f95800]"
              style={{ WebkitTextFillColor: "#f95800" }}
            >
              {t.ventures.subtitle.highlight}
            </span>{" "}
            {t.ventures.subtitle.part2}
          </motion.h2>
        </div>

        {/* Decorative light line */}
        <div className="mx-auto mt-4 md:mt-8 flex justify-center">
          <Image
            src="/images/studios-lines.png"
            alt=""
            width={444}
            height={296}
            className="opacity-60 w-[250px] md:w-[444px] h-auto"
          />
        </div>
      </section>

      {/* Venture Cards */}
      <section className="relative bg-[#000421] pb-12 md:pb-24">
        <div className="mx-auto max-w-[1240px] px-6 flex flex-col gap-8 md:gap-12">
          {ventures.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row md:h-[497px] overflow-hidden rounded-[16px] border border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {/* Image - always on top for mobile, position varies on desktop */}
              <div
                className={`relative w-full h-[240px] md:w-[55%] md:h-auto shrink-0 bg-[#0a0e2a] ${
                  item.imagePosition === "right" ? "md:order-last" : ""
                }`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-white/30">
                    {item.title}
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col justify-center px-6 py-8 md:px-16">
                <h3 className="mb-3 md:mb-4 text-[28px] md:text-[48px] font-semibold leading-normal text-[#f95800]">
                  {item.title}
                </h3>
                <p className="max-w-[397px] text-[16px] md:text-[22px] font-normal leading-[1.4] md:leading-[1.2] text-white">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
