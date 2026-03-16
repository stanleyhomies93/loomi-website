"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ecosystemCards = [
  {
    label: "LEG",
    title: "Venture",
    image: "/images/ecosystem-venture-new.png",
    description: "We support storytellers with resources, technology, and guidance, helping them scale their vision and reach wider audiences.",
    href: "/ventures",
  },
  {
    label: "LEG",
    title: "Studios",
    image: "/images/ecosystem-studios-new.png",
    description: "We push the boundaries of storytelling with AI-powered tools, redefining how content is created, distributed, and experienced.",
    href: "/studios",
  },
  {
    label: "LEG",
    title: "Digital",
    image: "/images/ecosystem-digital-new.png",
    description: "We build strong partnerships across the ecosystem — with creators, platforms, and audiences — to amplify storytelling and create shared success.",
    href: "/digital",
  },
];

// SVG clip path matching the Figma parallelogram mask (viewBox 0 0 452.468 549.289)
const cardClipPath =
  "polygon(26.3% 0%, 100% 0%, 91.2% 0.27%, 99.6% 8.45%, 82% 93.9%, 79.7% 97.5%, 73.7% 99.7%, 8.85% 99.7%, 3.54% 99.7%, 0% 95.85%, 0.45% 91.6%, 17.95% 6.12%, 20.2% 2.74%, 26.3% 0.27%)";

export default function Ecosystem() {
  return (
    <section className="relative bg-[#000421] py-12 md:py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Section heading */}
        <motion.h2
          className="mb-6 text-center text-[28px] md:text-[48px] font-semibold leading-[1.2] md:leading-[56px] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Our{" "}
          <span
            className=""
            style={{
              backgroundImage:
                "linear-gradient(to right, #f95800, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ecosystem
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mx-auto mb-8 md:mb-16 max-w-[943px] text-center text-[15px] md:text-[18px] leading-[1.6] text-white/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Through an AI-powered ecosystem that seamlessly enhances every layer
          of the microdrama industry value chain, LEG is shaping how
          entertainment is built, delivered, and scaled.
        </motion.p>

        {/* Mobile Cards - horizontal scroll with rounded cards */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-6 -mx-6 scrollbar-hide">
          {ecosystemCards.map((card, i) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative shrink-0 snap-center w-[85vw] max-w-[340px]"
            >
              <motion.div
                className="relative h-[480px] overflow-hidden rounded-[20px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000421] via-[#000421]/30 via-[15%] to-transparent to-[50%]" />
                {/* Glow border */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[20px]"
                  style={{
                    boxShadow:
                      "inset 0px -34px 26.7px 0px rgba(102,148,255,0.5), inset 0px -8px 16.7px 0px rgba(255,255,255,0.64), inset 0px -30px 12px 0px rgba(35,101,255,0.15), inset 0px -1px 10.8px 0px rgba(102,148,255,0.2)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-[15px] tracking-[-0.3px] text-[#f95800]">
                      {card.label}
                    </p>
                    <p className="text-[36px] font-semibold leading-[1.1] tracking-[-0.38px] text-white">
                      {card.title}
                    </p>
                  </div>
                  <svg
                    width="28"
                    height="32"
                    viewBox="0 0 20 24"
                    fill="none"
                    className="mb-1 shrink-0"
                  >
                    <path d="M20 12L0 24V0L20 12Z" fill="#f95800" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Desktop Cards - parallelogram mask */}
        <div className="hidden md:flex items-center justify-center gap-0 -space-x-6">
          {ecosystemCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="relative h-[550px] w-[452px] overflow-hidden"
                style={{
                  WebkitMaskImage: "url(/images/card-mask.svg)",
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskImage: "url(/images/card-mask.svg)",
                  maskSize: "100% 100%",
                  maskRepeat: "no-repeat",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000421] via-[#000421]/40 via-[20%] to-transparent to-[55%]" />
                <div className="absolute bottom-10 left-12 right-12 flex items-end justify-between">
                  <div>
                    <p className="text-[17px] tracking-[-0.3px] text-[#f95800]">
                      {card.label}
                    </p>
                    <p className="text-[38px] font-semibold leading-[1.2] tracking-[-0.38px] text-white">
                      {card.title}
                    </p>
                    <p className="mt-2 max-w-[300px] text-[14px] leading-[1.5] text-white/80 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {card.description}
                    </p>
                  </div>
                  <Link href={card.href} className="mb-2 shrink-0">
                    <svg
                      width="24"
                      height="28"
                      viewBox="0 0 20 24"
                      fill="none"
                    >
                      <path d="M20 12L0 24V0L20 12Z" fill="#f95800" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  WebkitMaskImage: "url(/images/card-mask.svg)",
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskImage: "url(/images/card-mask.svg)",
                  maskSize: "100% 100%",
                  maskRepeat: "no-repeat",
                  boxShadow:
                    "inset 0px -34px 26.7px 0px rgba(102,148,255,0.5), inset 0px -8px 16.7px 0px rgba(255,255,255,0.64), inset 0px -30px 12px 0px rgba(35,101,255,0.15), inset 0px -1px 10.8px 0px rgba(102,148,255,0.2)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
