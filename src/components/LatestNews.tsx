"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getLocalizedArticles } from "@/data/news";
import { useLanguage } from "@/i18n/LanguageContext";

export default function LatestNews() {
  const { t, locale } = useLanguage();
  const displayedArticles = getLocalizedArticles(locale).slice(0, 3);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

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
          {t.home.news.latest}{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #f95800, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.home.news.highlight}
          </span>
        </motion.h2>

        {/* Mobile: horizontal scroll with arrows */}
        <div className="relative md:hidden">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide"
          >
            {displayedArticles.map((article) => (
              <div key={article.slug} className="shrink-0 snap-center w-[85vw] max-w-[340px]">
                <Link
                  href={`/news/${article.slug}`}
                  className="group block cursor-pointer overflow-hidden rounded-[12px] border border-white/40 bg-white/5 p-4"
                >
                  <div className="relative mb-4 h-[200px] w-full overflow-hidden rounded-[6px]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="mb-5 line-clamp-4 min-h-[86px] text-[18px] font-semibold leading-[1.2] tracking-[-0.22px] text-white">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] text-[#97989f]">{article.date}</p>
                      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/20">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Arrow controls */}
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/30 transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-30"}`}
              disabled={!canScrollLeft}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/30 transition-opacity ${canScrollRight ? "opacity-100" : "opacity-30"}`}
              disabled={!canScrollRight}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:flex gap-8">
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
                <div className="relative mb-4 h-[240px] w-full overflow-hidden rounded-[6px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-2">
                  <h3 className="mb-5 line-clamp-4 min-h-[106px] text-[22px] font-semibold leading-[1.2] tracking-[-0.22px] text-white">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[14px] text-[#97989f]">{article.date}</p>
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[#f95800]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
