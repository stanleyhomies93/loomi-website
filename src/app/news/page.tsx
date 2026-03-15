"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { newsArticles } from "@/data/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Header */}
      <section className="pt-[140px] md:pt-[180px] pb-12 md:pb-16">
        <motion.h1
          className="text-center text-[40px] md:text-[72px] font-semibold leading-[1] tracking-[-0.72px] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest{" "}
          <span className="text-[#f95800] italic">News</span>
        </motion.h1>
      </section>

      {/* News Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="group block overflow-hidden rounded-[12px] border border-white/40 bg-white/5 p-4"
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
                    <h3 className="mb-5 line-clamp-4 text-[18px] md:text-[22px] font-semibold leading-[1.2] tracking-[-0.22px] text-white">
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

      <Footer />
    </main>
  );
}
