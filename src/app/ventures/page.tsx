"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ventures = [
  {
    title: "Capital Investment",
    description:
      "LEG Ventures invests in professional short dramas while partners leverage our ecosystem, creating powerful synergies that benefit all stakeholders.",
    image: "/images/ventures-capital.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Creator Incubator Program",
    description:
      "We collaborate regionally to incubate emerging creators with mentorship, resources, and guidance to scale storytelling across Southeast Asia.",
    image: "/images/ventures-creator.jpg",
    imagePosition: "right" as const,
  },
];

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[716px] w-full overflow-hidden bg-[#000421]">
        <div className="absolute inset-x-0 top-0 h-full">
          <Image
            src="/images/ventures-hero.jpg"
            alt="Ventures hero"
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
                Ventures
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
            Investing in the industry while partners leverage the{" "}
            <span
              className="text-[#f95800]"
              style={{ WebkitTextFillColor: "#f95800" }}
            >
              LEG ecosystem
            </span>{" "}
            to create powerful synergies that benefit
            <br />
            all stakeholders
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

      {/* Venture Cards */}
      <section className="relative bg-[#000421] pb-24">
        <div className="mx-auto max-w-[1240px] px-6 flex flex-col gap-12">
          {ventures.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex h-[497px] overflow-hidden rounded-[16px] border border-[#f95800]/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {item.imagePosition === "left" && (
                <div className="relative w-[55%] shrink-0 bg-[#0a0e2a]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-white/30">
                      {item.title} Image
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col justify-center px-16">
                <h3 className="mb-4 text-[48px] font-semibold leading-normal text-[#f95800]">
                  {item.title}
                </h3>
                <p className="max-w-[397px] text-[22px] font-normal leading-[1.2] text-white">
                  {item.description}
                </p>
              </div>

              {item.imagePosition === "right" && (
                <div className="relative w-[55%] shrink-0 bg-[#0a0e2a]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-white/30">
                      {item.title} Image
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
