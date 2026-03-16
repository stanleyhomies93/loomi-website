"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const officeImages = [
  "/images/office-singapore.jpg",
  "/images/office-malaysia.jpg",
  "/images/office-hongkong.jpg",
];

export default function ContactPage() {
  const { t } = useLanguage();

  const offices = t.contact.offices.map((office, i) => ({
    ...office,
    image: officeImages[i],
  }));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Company Information Header */}
      <section className="pt-[140px] md:pt-[200px] pb-8 md:pb-12">
        <motion.h1
          className="text-center text-[36px] md:text-[72px] font-semibold leading-[1] tracking-[-0.72px] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.contact.companyInfo}
        </motion.h1>
      </section>

      {/* Office Locations */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-[13px] border border-white/10 bg-white/10 p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* City Image */}
                <div className="relative h-[200px] md:h-[258px] w-full overflow-hidden rounded-[6px]">
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="pt-4 pb-2 text-center">
                  <h3 className="mb-2 text-[22px] md:text-[26px] font-semibold leading-[1.2] text-white">
                    {office.city}
                  </h3>
                  <p className="text-[14px] md:text-[17px] leading-[1.5] text-[#97989f]">
                    {office.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Left - Contact Info */}
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-4 md:mb-6 text-[36px] md:text-[72px] font-bold leading-[1] text-white">
                {t.contact.contactUs}
              </h2>
              <p className="mb-6 md:mb-8 md:max-w-[508px] text-[16px] md:text-[22px] leading-[1.6] text-white">
                {t.contact.contactDescription}
              </p>

              {/* Email */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="8"
                    width="33"
                    height="22"
                    rx="3"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 11L18.5 22L35 11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="mailto:info@loomi.asia"
                  className="text-[18px] md:text-[22px] font-bold text-white hover:text-[#f95800] transition-colors"
                >
                  info@loomi.asia
                </a>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.form
              className="w-full md:w-[489px] shrink-0 flex flex-col gap-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <input
                type="text"
                placeholder={t.contact.form.name}
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-[64px] w-full rounded-[7px] bg-[#f9f9f9] px-6 text-[18px] text-[#333] placeholder:text-[#6b6b6b] outline-none focus:ring-2 focus:ring-[#f95800]"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-[64px] w-full rounded-[7px] bg-[#f9f9f9] px-6 text-[18px] text-[#333] placeholder:text-[#6b6b6b] outline-none focus:ring-2 focus:ring-[#f95800]"
              />
              <input
                type="text"
                placeholder={t.contact.form.subject}
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="h-[64px] w-full rounded-[7px] bg-[#f9f9f9] px-6 text-[18px] text-[#333] placeholder:text-[#6b6b6b] outline-none focus:ring-2 focus:ring-[#f95800]"
              />
              <textarea
                placeholder={t.contact.form.message}
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[200px] w-full rounded-[7px] bg-[#f9f9f9] px-6 py-4 text-[18px] text-[#333] placeholder:text-[#6b6b6b] outline-none resize-none focus:ring-2 focus:ring-[#f95800]"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="h-[78px] w-full rounded-[7px] bg-[#f95800] text-[21px] font-medium text-white uppercase tracking-wide transition-colors hover:bg-[#e04f00] disabled:opacity-60"
              >
                {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
              </button>

              {status === "success" && (
                <p className="text-center text-[16px] text-green-400">
                  {t.contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-[16px] text-red-400">
                  {t.contact.form.error}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
