import type { Metadata } from "next";
import { Fraunces, Inter, Lora, Caveat, Dancing_Script } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monika Vaishnav — Creative Portfolio",
  description: "Brand strategist & story-first thinker — brand strategy, GTM planning, and campaign work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${lora.variable} ${caveat.variable} ${dancingScript.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
