import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const proximaNova = localFont({
  src: [
    {
      path: "../fonts/ProximaNova-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ProximaNova-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ProximaNova-RegularIt.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/ProximaNova-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ProximaNova-SemiboldIt.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/ProximaNova-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ProximaNova-BoldIt.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loomi Entertainment Group | Shaping Tomorrow's Entertainment with AI",
  description:
    "We're shaping the entertainment industry with AI — from production, distribution, and monetization to deliver storytelling experiences tailored for today's audiences.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Loomi Entertainment Group | Shaping Tomorrow's Entertainment with AI",
    description:
      "We're shaping the entertainment industry with AI — from production, distribution, and monetization to deliver storytelling experiences tailored for today's audiences.",
    url: "https://loomi.asia",
    siteName: "Loomi Entertainment Group",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1920,
        height: 814,
        alt: "Loomi Entertainment Group",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loomi Entertainment Group | Shaping Tomorrow's Entertainment with AI",
    description:
      "We're shaping the entertainment industry with AI — from production, distribution, and monetization to deliver storytelling experiences tailored for today's audiences.",
    images: ["/images/hero-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
