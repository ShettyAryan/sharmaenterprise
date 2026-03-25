import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharma Enterprise | Chartered Accountants",
  description:
    "Sharma Enterprise — Chartered Accountants providing Income Tax, GST, audit, accounting, and compliance services for individuals, SMEs, and growing businesses across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <NextTopLoader
          color="#C9A84C"
          height={2}
          showSpinner={false}
          easing="ease"
          speed={250}
          shadow="0 0 12px rgba(201,168,76,0.35)"
        />
        {children}
      </body>
    </html>
  );
}
