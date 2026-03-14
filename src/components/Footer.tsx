"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ecosystemLinks = [
  { label: "Loomi Mobile App", href: "#" },
  { label: "Imaginery", href: "#" },
];

const companyLinks = [
  { label: "Studio", href: "#" },
  { label: "Digital", href: "#" },
  { label: "Ventures", href: "#" },
];

const legalLinks = [
  { label: "Term of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
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
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/images/loomi-logo-footer.png"
              alt="LOOMI Entertainment Group"
              width={270}
              height={34}
              className="mb-4 w-[200px] md:w-[270px] h-auto"
            />
            <p className="mb-8 text-[16px] leading-[1.4] text-white">
              Shaping Tomorrow&apos;s Entertainment with AI
            </p>

            {/* Social buttons */}
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-[13px] border-[0.5px] border-white/30 bg-white/10 px-3 md:px-4 py-2 md:py-3 text-[16px] md:text-[20px] text-white/70 transition-colors hover:bg-white/20"
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
                href="#"
                className="flex items-center gap-2 rounded-[13px] border-[0.5px] border-white/30 bg-white/10 px-3 md:px-4 py-2 md:py-3 text-[16px] md:text-[20px] text-white/70 transition-colors hover:bg-white/20"
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
          <div className="flex flex-wrap gap-10 md:gap-24">
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

        {/* Copyright */}
        <p className="mt-10 md:mt-16 text-[12px] leading-[1.5] text-white/40">
          © 2026 — © LOOMI Entertainment Group | All rights reserved
        </p>
      </div>
    </motion.footer>
  );
}
