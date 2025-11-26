import type { Metadata } from "next";
import { Roboto, Questrial, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/global/MainNavigation";
import Footer from "@/components/global/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric M. Dullavin",
  description: "Personal website of Eric M. Dullavin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${questrial.variable} ${geistMono.variable} antialiased relative`}
      >
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
