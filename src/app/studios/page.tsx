"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    label: "Prompt Optimization Engine",
    text: "Type rough ideas, get cinematic results.\nNo technical skills needed.",
    image: "/images/studios-feat-prompt1.png",
    imagePosition: "left" as const,
  },
  {
    label: "Style Lock",
    text: "Set your visual style once — every\nscene stays consistent automatically.",
    image: "/images/studios-feat-style1.png",
    imagePosition: "right" as const,
  },
  {
    label: "Character Memory",
    text: "Your characters look the same in\nevery single scene. No more\nrandom face changes.",
    image: "/images/studios-feat-character1.png",
    imagePosition: "left" as const,
  },
  {
    label: "Narrative-Aware Generation",
    text: "Imaginary is designed for drama\ncreation, streamlining the entire\nstorytelling workflow from start\nto finish within a single project.",
    image: "/images/studios-feat-narrative.png",
    imagePosition: "right" as const,
  },
  {
    label: "World Builder",
    text: "One sentence becomes a full story\nuniverse — characters, scenes, and all.",
    image: "/images/studios-feat-worldbuilder.png",
    imagePosition: "left" as const,
  },
];

const productionTypes = [
  {
    title: "Fully AI Dramas",
    description:
      "End-to-end AI-generated storytelling — from script and characters to visuals and scenes — enabling rapid production and limitless creative possibilities.",
    video: "/videos/studios-fully-ai.mp4",
  },
  {
    title: "AI + Live Action Dramas",
    description:
      "A hybrid production model that blends AI-generated elements with live-action filming to enhance creativity, reduce costs, and accelerate production.",
    video: "/videos/studios-ai-liveaction.mp4",
  },
  {
    title: "Commercials",
    description:
      "High-impact branded video content crafted for advertising campaigns, combining storytelling and visual creativity to help brands connect with audiences.",
    video: "/videos/studios-commercials.mp4",
  },
  {
    title: "Animations",
    description:
      "Visually engaging 2D or 3D animations created with Imaginery to bring compelling worlds and characters to life.",
    video: "/videos/studios-animations.mp4",
  },
];

export default function StudiosPage() {
  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[716px] w-full overflow-hidden bg-[#000421]">
        <div className="absolute inset-x-0 top-0 h-full">
          <Image
            src="/images/studios-hero.png"
            alt="Studios hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Left dark gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #000421 0%, transparent 50%)",
          }}
        />

        {/* Top gradient for mobile readability */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[300px] md:hidden"
          style={{
            background: "linear-gradient(to bottom, #000421, transparent)",
          }}
        />

        {/* Bottom gradient */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[208px]"
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
                <span className="text-[18px] font-semibold text-[#f95800]">LEG</span>
              </div>
              <h1 className="text-[40px] md:text-[64px] font-semibold leading-[1.1] text-white">
                Studios
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
            Leveraging proprietary{" "}
            <span className="text-[#f95800]" style={{ WebkitTextFillColor: "#f95800" }}>AI</span>{" "}
            to accelerate production, reduce costs, and empower creators to
            scale creativity beyond traditional limits.
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
            IMAGINARY
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[1166px] text-center text-[16px] leading-[1.6] text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Imaginary is a cinematic AI engine that transforms a single story
            prompt into a fully realized universe. We streamline drama
            production, IP creation, and world-building, enabling storytellers to
            effortlessly bring their creative visions to life.
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
            Built for Storytellers.
            <br />
            Powered by AI.
          </motion.h2>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-[#000421] pb-10 md:pb-20">
        <div className="mx-auto max-w-[1340px] px-6">
          {features.map((feature, i) => (
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
                    {feature.label} Image
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
            href="https://preview.imaginary-ai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 md:px-10 md:py-5 text-[16px] md:text-[20px] font-semibold text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f95800, #ff8a00)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Experience Imaginary
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
            The Only Limit Is Your{" "}
            <span
              className=""
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f95800, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Imagination
            </span>
          </motion.h2>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productionTypes.map((item, i) => (
              <motion.div
                key={item.title}
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
