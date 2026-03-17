"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const featureImages = [
  { image: "/images/studios-feat-prompt1.png", imagePosition: "left" as const },
  { image: "/images/studios-feat-style1.png", imagePosition: "right" as const },
  { image: "/images/studios-feat-character1.png", imagePosition: "left" as const },
  { image: "/images/studios-feat-narrative.png", imagePosition: "right" as const },
  { image: "/images/studios-feat-worldbuilder.png", imagePosition: "left" as const },
];

const productionVideos = [
  "/videos/studios-fully-ai.mp4",
  "/videos/studios-ai-liveaction.mp4",
  "/videos/studios-commercials.mp4",
  "/videos/studios-animations.mp4",
];

export default function StudiosPage() {
  const { t } = useLanguage();

  const features = t.studios.features.map((f, i) => ({
    ...f,
    image: featureImages[i].image,
    imagePosition: featureImages[i].imagePosition,
  }));

  const productionTypes = t.studios.productionTypes.map((p, i) => ({
    ...p,
    video: productionVideos[i],
  }));

  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[716px] w-full overflow-hidden bg-[#000421]">
        <div className="absolute inset-x-0 top-0 h-full">
          <Image
            src="/images/studios-hero-mobile.png"
            alt="Studios hero"
            fill
            className="object-cover object-center md:hidden"
            priority
          />
          <Image
            src="/images/studios-hero.png"
            alt="Studios hero"
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
                <span className="text-[18px] font-semibold text-[#f95800]">{t.studios.label}</span>
              </div>
              <h1 className="text-[40px] md:text-[64px] font-semibold leading-[1.1] text-white">
                {t.studios.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtitle */}
      <section className="relative bg-[#000421] py-8 md:py-8">
        <div className="mx-auto max-w-[1240px] px-6">
          <motion.h2
            className="mx-auto max-w-[1181px] text-center text-[22px] md:text-[48px] font-semibold leading-[1.3] md:leading-[1.1] tracking-[-0.48px] bg-gradient-to-b from-white from-60% to-[#4a8af5] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t.studios.subtitle.split("{ai}").map((part, i, arr) => (
              <span key={i}>
                {part.split("\n").map((line, j, lines) => (
                  <span key={j}>
                    {line}
                    {j < lines.length - 1 && <br />}
                  </span>
                ))}
                {i < arr.length - 1 && (
                  <span className="text-[#f95800]" style={{ WebkitTextFillColor: "#f95800" }}>AI</span>
                )}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* Decorative light line */}
        <div className="mx-auto mt-2 md:mt-2 flex justify-center">
          <Image
            src="/images/studios-lines.png"
            alt=""
            width={444}
            height={296}
            className="opacity-60 w-[250px] md:w-[300px] h-auto"
          />
        </div>
      </section>

      {/* IMAGINARY Section */}
      <section className="relative bg-[#000421] py-4 md:py-4">
        <div className="mx-auto max-w-[1240px] px-6">
          <motion.h2
            className="mb-6 text-center text-[36px] md:text-[72px] font-bold uppercase tracking-[4px] md:tracking-[8px]"
            style={{
              backgroundImage: "linear-gradient(to right, #f95800, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t.studios.imaginary.heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[1166px] text-center text-[16px] leading-[1.6] text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.studios.imaginary.description}
          </motion.p>
        </div>
      </section>

      {/* App Screenshot */}
      <section className="relative bg-[#000421] py-6 md:py-12">
        <div className="mx-auto max-w-[1321px] px-6">
          <motion.div
            className="overflow-hidden rounded-[16px] md:rounded-[34px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/studios-app-screenshot.png"
              alt="Video Studio - Imaginary"
              width={1321}
              height={791}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Built for Storytellers */}
      <section className="relative bg-[#000421] py-16 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <motion.h2
            className="text-center text-[22px] md:text-[48px] font-semibold tracking-[-0.48px] leading-[1.3] md:leading-[56px] bg-gradient-to-b from-white from-60% to-[#4a8af5] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t.studios.builtFor.line1}
            <br />
            {t.studios.builtFor.line2}
          </motion.h2>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-[#000421] pb-10 md:pb-20">
        <div className="mx-auto max-w-[1340px] px-6">
          {features.map((feature) => (
            <motion.div
              key={feature.label}
              className={`mb-16 md:mb-32 flex flex-col gap-6 md:gap-16 md:items-center ${
                feature.imagePosition === "left"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Image - shows after text on mobile */}
              <div className="relative w-full md:w-[624px] shrink-0 overflow-hidden rounded-[13px] order-last md:order-none">
                {feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.label}
                    width={520}
                    height={380}
                    className="h-auto w-full"
                  />
                ) : (
                  <div className="flex h-[250px] md:h-[350px] w-full items-center justify-center bg-white/5 text-sm text-white/30">
                    {feature.label}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <p
                  className="mb-3 text-[12px] md:text-[14px] font-semibold uppercase tracking-[3px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #f95800, #ff8a00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {feature.label}
                </p>
                <p className="whitespace-pre-line text-[20px] md:text-[28px] font-semibold leading-[1.4] text-white">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <section className="relative bg-[#000421] pb-12 md:pb-24">
        <div className="flex justify-center">
          <motion.a
            href="mailto:info@loomi.asia"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 md:px-10 md:py-5 text-[16px] md:text-[20px] font-semibold text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f95800, #ff8a00)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t.studios.experienceImaginary}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 15L15 5M15 5H5M15 5V15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </section>

      {/* The Only Limit Is Your Imagination */}
      <section className="relative bg-[#000421] py-12 md:py-24">
        <div className="mx-auto max-w-[1358px] px-6">
          <motion.h2
            className="mb-8 md:mb-16 text-center text-[22px] md:text-[48px] font-semibold leading-[1.3] md:leading-[56px] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t.studios.imagination.title}{" "}
            <span
              className=""
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f95800, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.studios.imagination.highlight}
            </span>
          </motion.h2>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productionTypes.map((item, i) => (
              <motion.div
                key={i}
                className="group overflow-hidden rounded-[16px] bg-white/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative h-[220px] md:h-[375px] w-full overflow-hidden rounded-t-[13px] bg-[#0a0e2a]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-5 md:p-8">
                  <h3 className="mb-2 md:mb-3 text-[20px] md:text-[28px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] leading-[1.6] text-white/60">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
