import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

import localFont from "next/font/local";

const didotFont = localFont({
  src: [
    {
      path: "./fonts/Didot.otf",
      weight: "400",
      style: "normal",
    },
    {
      // path: "./fonts/Didot Title.otf",
      path: "./fonts/Headton-m2PVx.otf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-didot",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Z Manifesto",
  description: "Coming to get ya vote and better Cardano!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${didotFont.variable} antialiased min-h-screen bg-red text-[#2F4CE3] font-['Inter',sans-serif]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
