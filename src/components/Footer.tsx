"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ecosystemLinks = [
  { label: "Loomi Mobile App", href: "https://app.loomi.asia/" },
  { label: "Imaginary", href: "https://preview.imaginary-ai.com/" },
];

const companyLinks = [
  { label: "Studio", href: "/studios" },
  { label: "Digital", href: "/digital" },
  { label: "Ventures", href: "/ventures" },
];

const legalLinks = [
  { label: "Term of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <motion.footer
      className="relative overflow-hidden border-t border-white/20 bg-[#000421]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle top gradient glow matching Figma */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 pb-10 pt-10 md:pt-16">
        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-between">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/images/loomi-logo-full-white.png"
              alt="LOOMI Entertainment Group"
              width={498}
              height={64}
              className="mb-4 w-[320px] h-auto"
            />
            <p className="mb-8 text-[16px] leading-[1.4] text-white">
              Shaping Tomorrow&apos;s Entertainment with AI
            </p>

            {/* Social buttons */}
            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/company/loomi-entertainment-group/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[13px] border-[0.5px] border-white/30 bg-white/10 px-4 py-3 text-[20px] text-white/70 transition-colors hover:bg-white/20"
              >
                <Image
                  src="/images/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                />
                LinkedIn
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-[13px] border-[0.5px] border-white/30 bg-white/10 px-4 py-3 text-[20px] text-white/70 transition-colors hover:bg-white/20"
              >
                <Image
                  src="/images/mail-icon.svg"
                  alt="Contact"
                  width={22}
                  height={22}
                />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Footer columns */}
          <div className="flex gap-24">
            <div>
              <p className="mb-4 text-[12px] leading-[1.5] text-white/40">
                LEG Ecosystem
              </p>
              <ul className="space-y-[17px]">
                {ecosystemLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] leading-[1.4] text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[12px] leading-[1.5] text-white/40">
                Company
              </p>
              <ul className="space-y-[17px]">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] leading-[1.4] text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[12px] leading-[1.5] text-white/40">
                Legal
              </p>
              <ul className="space-y-[17px]">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] leading-[1.4] text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col md:hidden">
          {/* Logo & tagline */}
          <Image
            src="/images/loomi-logo-full-white.png"
            alt="LOOMI Entertainment Group"
            width={498}
            height={64}
            className="mb-4 w-[320px] h-auto"
          />
          <p className="mb-8 text-[16px] leading-[1.4] text-white">
            Shaping Tomorrow&apos;s Entertainment with AI
          </p>

          {/* LEG Ecosystem - inline */}
          <div className="mb-6">
            <p className="mb-3 text-[12px] leading-[1.5] text-white/40">
              LEG Ecosystem
            </p>
            <div className="flex items-center gap-3">
              {ecosystemLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-3">
                  {i > 0 && <span className="text-white/30">|</span>}
                  <Link
                    href={link.href}
                    className="text-[15px] leading-[1.4] text-white transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Company - inline */}
          <div className="mb-6">
            <p className="mb-3 text-[12px] leading-[1.5] text-white/40">
              Company
            </p>
            <div className="flex items-center gap-3">
              {companyLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-3">
                  {i > 0 && <span className="text-white/30">|</span>}
                  <Link
                    href={link.href}
                    className="text-[15px] leading-[1.4] text-white transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Legal + Social icons row */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="mb-3 text-[12px] leading-[1.5] text-white/40">
                Legal
              </p>
              <div className="flex items-center gap-3">
                {legalLinks.map((link, i) => (
                  <span key={link.label} className="flex items-center gap-3">
                    {i > 0 && <span className="text-white/30">|</span>}
                    <Link
                      href={link.href}
                      className="text-[15px] leading-[1.4] text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
              </div>
            </div>

            {/* Social icon buttons */}
            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/company/loomi-entertainment-group/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[48px] h-[48px] rounded-[13px] border-[0.5px] border-white/30 bg-white/10 transition-colors hover:bg-white/20"
              >
                <Image
                  src="/images/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center w-[48px] h-[48px] rounded-[13px] border-[0.5px] border-white/30 bg-white/10 transition-colors hover:bg-white/20"
              >
                <Image
                  src="/images/mail-icon.svg"
                  alt="Contact"
                  width={22}
                  height={22}
                />
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-white/20 mb-6" />

          {/* Copyright */}
          <p className="text-[12px] leading-[1.5] text-white/40">
            © LOOMI Entertainment Group | All rights reserved
          </p>
        </div>

        {/* Desktop Copyright */}
        <p className="hidden md:block mt-16 text-[12px] leading-[1.5] text-white/40">
          © 2026 — © LOOMI Entertainment Group | All rights reserved
        </p>
      </div>
    </motion.footer>
  );
}
