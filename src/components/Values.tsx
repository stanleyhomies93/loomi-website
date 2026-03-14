"use client";

import { motion } from "framer-motion";

const values = [
  {
    emoji: "🚀",
    title: "Innovation",
    description:
      "We push the boundaries of storytelling with AI-powered tools, redefining how content is created, distributed, and experienced.",
  },
  {
    emoji: "🧪",
    title: "Creator Empowerment",
    description:
      "We support storytellers with resources, technology, and guidance, helping them scale their vision and reach wider audiences.",
  },
  {
    emoji: "🤝",
    title: "Collaboration",
    description:
      "We build strong partnerships across the ecosystem — with creators, platforms, and audiences — to amplify storytelling and create shared success.",
  },
  {
    emoji: "🌍",
    title: "Impactful Engagement",
    description:
      "We focus on building meaningful connections between creators and audiences fostering communities and unlocking new monetization opportunities.",
  },
];

export default function Values() {
  return (
    <section className="relative bg-[#000421] py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.h2
          className="mb-16 text-center text-[48px] font-semibold leading-[56px] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Our{" "}
          <span
            className="italic"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f95800, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Values
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="relative overflow-hidden rounded-[16px] border border-white/10 p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Decorative border lines */}
              <div className="absolute inset-0 rounded-[16px] border border-white/5" />

              <div className="flex items-start gap-4">
                <span className="text-[36px]">{value.emoji}</span>
                <div>
                  <h3 className="mb-3 text-[24px] font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="max-w-[430px] text-[16px] leading-[1.6] text-white/60">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
