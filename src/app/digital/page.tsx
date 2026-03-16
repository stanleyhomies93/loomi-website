"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function DigitalPage() {
  const { t } = useLanguage();

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
            className="object-cover object-[70%_center] md:object-center"
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
                <span className="text-[18px] font-semibold text-[#f95800]">{t.digital.label}</span>
              </div>
              <h1 className="text-[40px] md:text-[64px] font-semibold leading-[1.1] text-white">
                {t.digital.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtitle */}
      <section className="relative bg-[#000421] py-4 md:py-8">
        <div className="mx-auto max-w-[1320px] px-6">
          <motion.h2
            className="text-center text-[22px] md:text-[48px] font-semibold tracking-[-0.48px] leading-[1.3] md:leading-[56px] bg-gradient-to-b from-white from-60% to-[#4a8af5] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {t.digital.subtitle.line1}
            <br className="md:hidden" />
            {" "}
            <span className="text-[#f95800]" style={{ WebkitTextFillColor: "#f95800" }}>
              {t.digital.subtitle.highlight}
            </span>
            <br />
            {t.digital.subtitle.line2}
          </motion.h2>
        </div>

        {/* Decorative divider line */}
        <div className="mx-auto mt-4 md:mt-6 flex justify-center -mb-8 md:-mb-12">
          <Image
            src="/images/digital-divider-line.png"
            alt=""
            width={1440}
            height={80}
            className="w-[60%] md:w-[40%] h-auto"
          />
        </div>
      </section>

      {/* Distribution via LOOMI AI Short Drama Platform */}
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
              {t.digital.loomi.distributionVia}
            </h3>
            <p className="mb-4 text-[24px] font-semibold text-[#f95800]">
              {t.digital.loomi.platform}
            </p>
            <p className="mb-6 text-[16px] leading-[1.4] text-white">
              {t.digital.loomi.description}
            </p>
            <div className="flex gap-3 justify-center">
              <a href="https://apps.apple.com/sg/app/loomi-short-dramas/id6754369030" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[44px] w-auto"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.loomi.asia&hl=en_SG" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
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
                {t.digital.loomi.distributionVia}
              </h3>
              <p className="mb-6 text-[48px] font-semibold text-[#f95800]">
                {t.digital.loomi.platform}
              </p>
              <p className="mb-8 max-w-[658px] text-[22px] leading-[1.2] text-white">
                {t.digital.loomi.description}
              </p>
              <div className="flex gap-4">
                <a href="https://apps.apple.com/sg/app/loomi-short-dramas/id6754369030" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <Image
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="h-[60px] w-auto"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.loomi.asia&hl=en_SG" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
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
              {t.digital.tiktok.distributionVia}
            </h3>
            <p className="mb-4 text-[24px] font-semibold text-[#f95800]">
              {t.digital.tiktok.platform}
            </p>
            <p className="mb-6 text-[16px] leading-[1.4] text-white">
              {t.digital.tiktok.description}
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.tiktok.com/@loomi_entertainment"
                target="_blank"
                rel="noopener noreferrer"
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
                  {t.digital.tiktok.followUs}
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
              className="flex-1 pl-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="mb-2 text-[48px] font-semibold leading-normal text-white">
                {t.digital.tiktok.distributionVia}
              </h3>
              <p className="mb-6 text-[48px] font-semibold text-[#f95800]">
                {t.digital.tiktok.platform}
              </p>
              <p className="mb-8 max-w-[658px] text-[22px] leading-[1.2] text-white">
                {t.digital.tiktok.description}
              </p>
              <a
                href="https://www.tiktok.com/@loomi_entertainment"
                target="_blank"
                rel="noopener noreferrer"
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
                  {t.digital.tiktok.followUs}
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
              {t.digital.global.distributionVia}
            </p>
            <p className="mb-4 text-[22px] font-semibold text-[#f95800]">
              {t.digital.global.platform}
            </p>
            <p className="text-[16px] font-normal leading-[1.4] text-white">
              {t.digital.global.description}
            </p>
          </motion.div>
        </div>

        {/* Map image below */}
        <div className="relative w-full h-[420px] overflow-hidden">
          <Image
            src="/images/digital-map-bg.png"
            alt="Global Distribution Networks"
            fill
            className="object-cover object-right md:object-center"
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
                <span className="text-white">{t.digital.global.distributionVia}</span>
                <br />
                <span className="text-[#f95800]">
                  {t.digital.global.platform}
                </span>
              </p>
              <p className="max-w-[566px] text-[22px] font-normal leading-[1.2] text-white">
                {t.digital.global.description}
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
