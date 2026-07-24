import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Health For All Uganda",
  description:
    "A Uganda where every community has the power to live healthy, productive lives. Health education, disease prevention, community empowerment and digital health solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${workSans.variable}`}>
      <body style={{ margin: 0, background: "#FAF7F1", fontFamily: "Work Sans, sans-serif", color: "#201C16", overflowX: "hidden" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
