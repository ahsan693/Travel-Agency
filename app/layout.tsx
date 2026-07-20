import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configure the local Saans Trial font
const saansTrial = localFont({
  src: [
    {
      path: "../public/fonts/DP_saans_TRIAL/Saans-TRIAL-VF.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-saans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelMommy",
  description: "Compare flights, hotels & travel deals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saansTrial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}