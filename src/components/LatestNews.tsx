"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/news";

export default function LatestNews() {
  // Show only the first 3 articles on the homepage
  const displayedArticles = newsArticles.slice(0, 3);

  return (
    <section id="news" className="relative bg-[#000421] py-12 md:py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.h2
          className="mb-8 md:mb-16 text-center text-[28px] md:text-[48px] font-semibold leading-[1.2] md:leading-[56px] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Latest{" "}
          <span
            className=""
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

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {displayedArticles.map((article, i) => (
            <motion.div
              key={article.slug}
              className="flex-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={`/news/${article.slug}`}
                className="group block cursor-pointer overflow-hidden rounded-[12px] border border-white/40 bg-white/5 p-4"
              >
                {/* Image */}
                <div className="relative mb-4 h-[240px] w-full overflow-hidden rounded-[6px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-2">
                  <h3 className="mb-5 line-clamp-4 min-h-[86px] md:min-h-[106px] text-[18px] md:text-[22px] font-semibold leading-[1.2] tracking-[-0.22px] text-white">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[14px] text-[#97989f]">
                      {article.date}
                    </p>
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
