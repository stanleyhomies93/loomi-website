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
      <section className="relative h-[500px] md:h-[716px] w-full overflow-hidden bg-[#000421]">
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
        <div className="relative z-10 flex h-full flex-col justify-start pt-24 items-center md:justify-end md:items-start md:pt-0 pb-0 md:pb-24 px-6">
          <div className="mx-auto w-full max-w-[1320px] flex flex-col items-center md:items-start">
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-1 flex items-center gap-3">
                <svg width="16" height="18" viewBox="0 0 20 24" fill="none">
                  <path d="M20 12L0 24V0L20 12Z" fill="#f95800" />
                </svg>
                <span className="text-[18px] font-semibold text-[#f95800]">LEG</span>
              </div>
              <h1 className="text-[40px] md:text-[64px] font-semibold leading-[1.1] text-white">
                Digital
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
            Shaping the next generation of
            <br className="md:hidden" />
            {" "}
            <span className="text-[#f95800]" style={{ WebkitTextFillColor: "#f95800" }}>
              drama distribution
            </span>
            <br />
            in Southeast Asia and beyond
          </motion.h2>
        </div>

      </section>

      {/* Distribution via LOOMI AI Short Drama Platform */}
      {/* Mobile: content on top, video below */}
      <section className="md:hidden bg-[#000421]">
        {/* Top border glow */}
        <div
          className="h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 20%, #0d61e8 50%, transparent 80%)",
          }}
        />

        <div className="px-6 pt-12 pb-2">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/loomi-icon.png"
                alt="LOOMI"
                width={136}
                height={136}
                className="rounded-[23px] w-[80px] h-auto"
              />
            </div>
            <h3 className="mb-2 text-[28px] font-semibold leading-normal text-white">
              Distribution via
            </h3>
            <p className="mb-4 text-[24px] font-semibold text-[#f95800]">
              Loomi AI Short Drama Platform
            </p>
            <p className="mb-6 text-[16px] leading-[1.4] text-white">
              LOOMI uses AI and data-driven insights to curate and translate
              content tailored to Southeast Asia&apos;s diverse audiences,
              enabling creative engagement at scale across all touchpoints.
            </p>
            <div className="flex gap-3 justify-center">
              <a href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[44px] w-auto"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/images/googleplay.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[44px] w-auto"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Video below content */}
        <div className="flex justify-center pb-4 px-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[85%] h-auto rounded-[16px]"
          >
            <source src="/videos/digital-loomi-mobile.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Desktop: video background with overlay content */}
      <section className="relative overflow-hidden hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/digital-loomi.mp4" type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 20%, #0d61e8 50%, transparent 80%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-28">
          <div className="flex items-center gap-16">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
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
              <p className="mb-6 text-[48px] font-semibold text-[#f95800]">
                Loomi AI Short Drama Platform
              </p>
              <p className="mb-8 max-w-[658px] text-[22px] leading-[1.2] text-white">
                LOOMI uses AI and data-driven insights to curate and translate
                content tailored to Southeast Asia&apos;s diverse audiences,
                enabling creative engagement at scale across all touchpoints.
              </p>
              <div className="flex gap-4">
                <a href="#" className="transition-transform hover:scale-105">
                  <Image
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="h-[60px] w-auto"
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <Image
                    src="/images/googleplay.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-[60px] w-auto"
                  />
                </a>
              </div>
            </motion.div>
            <div className="relative flex h-[600px] w-[520px] shrink-0 items-center justify-center rounded-[20px]" />
          </div>
        </div>
      </section>

      {/* Distribution via TikTok Platform */}
      {/* Mobile: content on top, video below */}
      <section className="md:hidden bg-[#000421]">
        <div className="px-6 pt-12 pb-2">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-2 text-[28px] font-semibold leading-normal text-white">
              Distribution via
            </h3>
            <p className="mb-4 text-[24px] font-semibold text-[#f95800]">
              Tiktok Platform
            </p>
            <p className="mb-6 text-[16px] leading-[1.4] text-white">
              Our platform distributes proprietary dramas on TikTok, reaching
              millions across the region through a Pay-Per-View model that
              generates revenue for creators and brands while maximizing
              engagement and delivering performance-based results.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 transition-transform hover:scale-105"
              >
                <Image
                  src="/images/tiktok-icon.png"
                  alt="TikTok"
                  width={40}
                  height={40}
                  className="rounded-full w-[32px] h-auto"
                />
                <span className="text-[16px] font-semibold text-black">
                  Follow us on TikTok
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Video below content */}
        <div className="flex justify-center pb-4 px-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[85%] h-auto rounded-[16px]"
          >
            <source src="/videos/digital-tiktok-mobile.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Desktop: video background */}
      <section className="relative overflow-hidden hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/digital-tiktok.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-28">
          <div className="flex items-center gap-16">
            <div className="relative flex h-[600px] w-[520px] shrink-0 items-center justify-center rounded-[20px]" />
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
              <p className="mb-6 text-[48px] font-semibold text-[#f95800]">
                Tiktok Platform
              </p>
              <p className="mb-8 max-w-[658px] text-[22px] leading-[1.2] text-white">
                Our platform distributes proprietary dramas on TikTok, reaching
                millions across the region through a Pay-Per-View model that
                generates revenue for creators and brands while maximizing
                engagement and delivering performance-based results.
              </p>
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
      {/* Mobile: content on top, image below */}
      <section className="md:hidden bg-[#000421]">
        <div className="px-6 pt-12 pb-2">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 text-[28px] font-semibold leading-[1.2] text-white">
              Distribution via
            </p>
            <p className="mb-4 text-[22px] font-semibold text-[#f95800]">
              Global Distribution Networks
            </p>
            <p className="text-[16px] font-normal leading-[1.4] text-white">
              As microdramas expand globally, LEG partners with various
              distribution platforms and app owners to build strategic
              alliances that connect stories with millions of potential
              viewers across Southeast Asia - accelerating discovery, boosting
              engagement, and maximizing reach for every production.
            </p>
          </motion.div>
        </div>

        {/* Map image below */}
        <div className="relative w-full h-[420px] overflow-hidden">
          <Image
            src="/images/digital-map-bg.png"
            alt="Global Distribution Networks"
            fill
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[60px]"
            style={{ background: "linear-gradient(to bottom, #000421, transparent)" }}
          />
        </div>
      </section>

      {/* Desktop: background image with overlay content */}
      <section className="relative overflow-hidden bg-[#000421] hidden md:block">
        <div className="absolute inset-0">
          <Image
            src="/images/digital-map-bg.png"
            alt=""
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-40">
          <div className="flex items-start gap-16">
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
            <div className="w-[600px] shrink-0" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
