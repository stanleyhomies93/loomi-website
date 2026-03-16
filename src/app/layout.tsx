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
