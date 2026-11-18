import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Get Involved",
  description:
    "Partner with us, volunteer your time, or support Health For All Uganda's community health programs across Uganda.",
  openGraph: {
    type: "website",
    url: "https://www.healthforalluganda.org/contact",
    siteName: "Health For All Uganda",
    title: "Contact & Get Involved | Health For All Uganda",
    description:
      "Partner with us, volunteer your time, or support Health For All Uganda's community health programs across Uganda.",
    images: [
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
    title: "Contact & Get Involved | Health For All Uganda",
    description:
      "Partner with us, volunteer your time, or support Health For All Uganda's community health programs across Uganda.",
    images: ["/assets/logo.jpeg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
