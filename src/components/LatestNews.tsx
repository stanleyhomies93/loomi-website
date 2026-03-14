"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const newsItems = [
  {
    title:
      "Loomi Entertainment Group Partners with KT Studiogenie to Bring Premium K-Drama to Southeast Asia",
    date: "13 March 2026",
    image: "/images/news-1.jpg",
  },
  {
    title:
      "Loomi Partners with COL Group, Greenlights Original Microdramas as Southeast Asia Hits 23% of Global Vertical Drama Downloads",
    date: "9 March 2026",
    image: "/images/news-2.png",
  },
  {
    title:
      "Loomi Entertainment Group Takes the Stage at Alibaba Cloud CXO Nexus World Tour in Kuala Lumpur",
    date: "24 February 2026",
    image: "/images/news-3-alt.png",
  },
];

export default function LatestNews() {
  return (
    <section id="news" className="relative bg-[#000421] py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.h2
          className="mb-16 text-center text-[48px] font-semibold leading-[56px] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Latest{" "}
          <span
            className="italic"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f95800, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            News
          </span>
        </motion.h2>

        <div className="flex gap-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={i}
              className="group flex-1 cursor-pointer overflow-hidden rounded-[12px] border border-white/40 bg-white/5 p-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative mb-4 h-[240px] w-full overflow-hidden rounded-[6px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="mb-5 line-clamp-4 text-[22px] font-semibold leading-[1.2] tracking-[-0.22px] text-white">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-[14px] text-[#97989f]">{item.date}</p>
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[#f95800]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
