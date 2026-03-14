"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ShiftOpportunity() {
  return (
    <section className="relative bg-[#000421] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="relative flex items-center">
          {/* Left text */}
          <motion.div
            className="relative z-10 max-w-[538px] shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 text-[48px] font-semibold leading-[66px] text-white">
              The{" "}
              <span
                className="italic"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #f95800, #ff8a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Shift & Opportunity
              </span>
            </h2>
            <p className="text-[18px] leading-[1.6] text-white/70">
              The way people consume entertainment has fundamentally changed —
              driven by mobile-first behaviors, short-form storytelling, and
              strong technological advancement that unlocks new outlets for
              interactive, personalized and shared digital content.
            </p>
            <p className="mt-6 text-[18px] leading-[1.6] text-white/70">
              As audience expectations accelerate, AI presents a new
              opportunity to expand content, distribution, and engagement
              across the entertainment value chain.
            </p>
          </motion.div>

          {/* Right image - overlapping closer to text */}
          <motion.div
            className="relative -mr-[100px] ml-[-20px] h-[722px] w-[948px] shrink-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/shift-opportunity.png"
              alt="The Shift & Opportunity"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
