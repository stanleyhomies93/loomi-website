"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ecosystemCards = [
  {
    label: "LEG",
    title: "Ventures",
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

        {/* Mobile Cards - horizontal scroll */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-2 px-4 -mx-4 scrollbar-hide">
          {ecosystemCards.map((card, i) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative shrink-0 snap-center w-[72vw] max-w-[300px]"
            >
              <div className="relative">
                <div
                  className="relative h-[380px] w-full overflow-hidden"
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
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000421] via-[#000421]/40 via-[20%] to-transparent to-[55%]" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[15px] tracking-[-0.3px] text-[#f95800]">
                      {card.label}
                    </p>
                    <p className="text-[32px] font-semibold leading-[1.1] tracking-[-0.38px] text-white">
                      {card.title}
                    </p>
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
              </div>
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
                {/* Gradient - strengthens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000421] via-[#000421]/50 via-[30%] to-transparent to-[60%] transition-all duration-300 group-hover:via-[#000421]/70 group-hover:via-[45%] group-hover:to-[#000421]/30" />

                {/* Content area */}
                <div className="absolute bottom-10 left-12 right-20 transition-all duration-300 group-hover:bottom-0 group-hover:top-0 group-hover:left-16 group-hover:right-16 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-center">
                  <div className="flex items-end justify-between transition-all duration-300 group-hover:justify-center">
                    <div className="transition-all duration-300 group-hover:text-center">
                      <p className="text-[17px] tracking-[-0.3px] text-[#f95800] transition-opacity duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:overflow-hidden">
                        {card.label}
                      </p>
                      <p className="text-[38px] font-semibold leading-[1.2] tracking-[-0.38px] text-white transition-opacity duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:overflow-hidden">
                        {card.title}
                      </p>
                    </div>
                    {/* Play button - hides on hover */}
                    <div className="mb-1 mr-10 shrink-0 transition-opacity duration-300 group-hover:opacity-0 group-hover:w-0 group-hover:overflow-hidden">
                      <Image src="/images/play-icon.png" alt="" width={24} height={28} className="w-[24px] h-[28px] object-contain" />
                    </div>
                  </div>
                  {/* Description + CTA - appears on hover */}
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-[250px] group-hover:opacity-100">
                    <p className="mt-3 text-center text-[14px] italic leading-[1.6] text-white/90">
                      {card.description}
                    </p>
                    <div className="mt-5 flex justify-center">
                      <Link
                        href={card.href}
                        className="inline-flex items-center justify-center rounded-[6px] px-10 py-3 text-[13px] font-semibold uppercase tracking-[1px] text-white"
                        style={{ background: "linear-gradient(135deg, #f95800, #ff8a00)" }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
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
