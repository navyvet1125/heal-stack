import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evan Washington | Heal-Stack Developer",
  description: "Heal-stack developer & holistic facilitator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <Header />
        <Divider />
        <Main>
            {children}
        </Main>
        <Divider />
        <Footer />
      </body>
    </html>
  );
}
