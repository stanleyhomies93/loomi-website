"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionStatement() {
  return (
    <section className="relative bg-[#000421] py-2 md:py-2">
      <motion.div
        className="mx-auto max-w-[1211px] px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-[22px] md:text-[48px] font-semibold leading-[1.3] md:leading-[56px] tracking-[-0.48px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #ffffff 60%, #4a8af5 362.5%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We&apos;re shaping the entertainment industry with AI —{" "}
          from production, distribution, and monetization to deliver
          storytelling experiences tailored for today&apos;s audiences.
        </p>
      </motion.div>

      {/* Decorative light line */}
      <div className="mx-auto mt-0 md:mt-2 flex justify-center -mb-16 md:-mb-24">
        <Image
          src="/images/studios-lines.png"
          alt=""
          width={444}
          height={296}
          className="opacity-60 w-[250px] md:w-[444px] h-auto"
        />
      </div>
    </section>
  );
}
