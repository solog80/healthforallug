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
  metadataBase: new URL("https://www.healthforalluganda.org"),
  title: {
    default: "Health For All Uganda",
    template: "%s | Health For All Uganda",
  },
  description:
    "A Uganda where every community has the power to live healthy, productive lives. Health education, disease prevention, community empowerment and digital health solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-512.png",
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://www.healthforalluganda.org",
    siteName: "Health For All Uganda",
    title: "Health For All Uganda",
    description:
      "Improving health outcomes through education, disease prevention, community empowerment, and innovative solutions across Uganda.",
    images: [
      {
        url: "/assets/herrise-1.jpeg",
        width: 1080,
        height: 787,
        alt: "Health For All Uganda community health programs",
        type: "image/jpeg",
      },
      {
        url: "/assets/logo.jpeg",
        width: 1056,
        height: 1056,
        alt: "Health For All Uganda logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health For All Uganda",
    description:
      "Improving health outcomes through education, disease prevention, community empowerment, and innovative solutions across Uganda.",
    images: ["/assets/herrise-1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${workSans.variable}`}>
      <body
        style={{
          margin: 0,
          background: "#FAF7F1",
          fontFamily: "Work Sans, sans-serif",
          color: "#201C16",
          overflowX: "hidden",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
