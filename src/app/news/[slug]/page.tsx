"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocalizedArticles } from "@/data/news";
import { useLanguage } from "@/i18n/LanguageContext";

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { locale, t } = useLanguage();
  const articles = getLocalizedArticles(locale);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#000421]">
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-[200px] pb-24">
          <h1 className="text-[48px] font-semibold text-white mb-4">
            {t.home.news.articleNotFound}
          </h1>
          <Link
            href="/news"
            className="text-[#f95800] text-[18px] hover:underline"
          >
            {t.home.news.backToNews}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Article Header */}
      <section className="pt-[120px] md:pt-[165px] px-6 md:px-16">
        <div className="mx-auto max-w-[900px]">
          <motion.div
            className="flex flex-col gap-[18px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[16px] md:text-[22px] font-semibold uppercase text-[#adadad]">
              {article.date}
            </p>
            <h1 className="text-[28px] md:text-[48px] font-semibold leading-[1.2] text-[#f95800]">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pt-8 md:pt-12 pb-24 px-6 md:px-16">
        <motion.div
          className="mx-auto max-w-[900px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {article.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-[24px] md:text-[32px] font-bold leading-[1.3] text-white mt-2"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "spacer") {
              return <div key={i} className="h-6" />;
            }
            return (
              <p
                key={i}
                className="text-[16px] md:text-[22px] leading-[1.5] text-white mb-0"
              >
                {block.text}
              </p>
            );
          })}
        </motion.div>

        {/* Back to News */}
        <div className="mx-auto max-w-[900px] mt-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#f95800] text-[18px] font-semibold hover:underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13 8H3M3 8L8 3M3 8L8 13"
                stroke="#f95800"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.home.news.backToNews}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
