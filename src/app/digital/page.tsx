"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DigitalPage() {
  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[716px] w-full overflow-hidden bg-[#000421]">
        <div className="absolute inset-x-0 top-0 h-full">
          <Image
            src="/images/digital-hero.jpg"
            alt="Digital hero"
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

        {/* Bottom gradient */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[208px]"
          style={{
            background: "linear-gradient(to bottom, transparent, #000421)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end pb-24 px-6">
          <div className="mx-auto w-full max-w-[1320px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/leg-logo.png"
                  alt="LEG"
                  width={23}
                  height={29}
                />
                <span className="text-[18px] text-white/70">LEG</span>
              </div>
              <h1 className="text-[64px] font-semibold leading-[1.1] text-white">
                Digital
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtitle */}
      <section className="relative bg-[#000421] py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.h2
            className="text-center text-[48px] font-semibold tracking-[-0.48px] leading-[56px] bg-gradient-to-b from-white to-[#0d61e8] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Shaping the next generation of{" "}
            <span className="text-[#f95800]" style={{ WebkitTextFillColor: "#f95800" }}>
              drama distribution
            </span>
            <br />
            in Southeast Asia and beyond
          </motion.h2>
        </div>

        {/* Decorative light line */}
        <div className="mx-auto mt-8 flex justify-center">
          <Image
            src="/images/studios-lines.png"
            alt=""
            width={444}
            height={296}
            className="opacity-60"
          />
        </div>
      </section>

      {/* Distribution via LOOMI AI Short Drama Platform */}
      <section className="relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#000421]/75" />

        {/* Top border glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 20%, #0d61e8 50%, transparent 80%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-28">
          <div className="flex items-center gap-16">
            {/* Left text */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* LOOMI Icon */}
              <div className="mb-8">
                <Image
                  src="/images/loomi-icon.png"
                  alt="LOOMI"
                  width={136}
                  height={136}
                  className="rounded-[23px]"
                />
              </div>

              <h3 className="mb-2 text-[48px] font-semibold leading-normal text-white">
                Distribution via
              </h3>
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/images/loomi-logo-white.png"
                  alt="LOOMI"
                  width={160}
                  height={45}
                  className="h-[45px] w-auto object-contain"
                />
                <span className="text-[48px] font-semibold italic text-[#f95800]">
                  AI Short Drama Platform
                </span>
              </div>

              <p className="mb-8 max-w-[658px] text-[22px] leading-[1.2] text-white">
                LOOMI uses AI and data-driven insights to curate and translate
                content tailored to Southeast Asia&apos;s diverse audiences,
                enabling creative engagement at scale across all touchpoints.
              </p>

              {/* App Store Buttons - placeholder */}
              <div className="flex gap-4">
                <div className="flex h-[48px] w-[140px] items-center justify-center rounded-[8px] bg-black text-xs text-white/80 border border-white/30">
                  App Store
                </div>
                <div className="flex h-[48px] w-[140px] items-center justify-center rounded-[8px] bg-black text-xs text-white/80 border border-white/30">
                  Google Play
                </div>
              </div>
            </motion.div>

            {/* Right phone mockup - placeholder */}
            <motion.div
              className="relative flex h-[600px] w-[520px] shrink-0 items-center justify-center rounded-[20px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-sm text-white/30">LOOMI Phone Mockup</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distribution via TikTok Platform */}
      <section className="relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#000421]/75" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-28">
          <div className="flex items-center gap-16">
            {/* Left phone mockup - placeholder */}
            <motion.div
              className="relative flex h-[600px] w-[520px] shrink-0 items-center justify-center rounded-[20px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm text-white/30">TikTok Phone Mockup</span>
            </motion.div>

            {/* Right text */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="mb-2 text-[48px] font-semibold leading-normal text-white">
                Distribution via
              </h3>
              <p className="mb-6 text-[48px] font-semibold italic text-[#f95800]">
                Tiktok Platform
              </p>

              <p className="mb-8 max-w-[658px] text-[22px] leading-[1.2] text-white">
                Our platform distributes proprietary dramas on TikTok, reaching
                millions across the region through a Pay-Per-View model that
                generates revenue for creators and brands while maximizing
                engagement and delivering performance-based results.
              </p>

              {/* Follow on TikTok Button */}
              <a
                href="#"
                className="inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 transition-transform hover:scale-105"
              >
                <Image
                  src="/images/tiktok-icon.png"
                  alt="TikTok"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-[19px] font-semibold text-black">
                  Follow us on TikTok
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distribution via Global Distribution Networks */}
      <section className="relative overflow-hidden bg-[#000421]">
        {/* Background image - placeholder */}
        <div className="absolute inset-0">
          <Image
            src="/images/digital-map-bg.png"
            alt=""
            fill
            className="object-cover object-right"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-28">
          <div className="flex items-start gap-16">
            {/* Left text */}
            <motion.div
              className="flex-1 pt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-[48px] font-semibold leading-normal">
                <span className="text-white">Distribution via</span>
                <br />
                <span className="text-[#f95800]">
                  Global Distribution
                  <br />
                  Networks
                </span>
              </p>

              <p className="max-w-[566px] text-[22px] font-normal leading-[1.2] text-white">
                As microdramas expand globally, LEG partners with various
                distribution platforms and app owners to build strategic
                alliances that connect stories with millions of potential
                viewers across Southeast Asia - accelerating discovery, boosting
                engagement, and maximizing reach for every production.
              </p>
            </motion.div>

            {/* Right spacer - map is the background */}
            <div className="w-[600px] shrink-0" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
