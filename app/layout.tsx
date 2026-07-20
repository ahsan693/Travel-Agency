import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const saansTrial = localFont({
  src: [
    {
      path: "../public/fonts/DP_saans_TRIAL/DP_saans_TRIAL/Saans-TRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DP_saans_TRIAL/DP_saans_TRIAL/Saans-TRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DP_saans_TRIAL/DP_saans_TRIAL/Saans-TRIAL-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/DP_saans_TRIAL/DP_saans_TRIAL/Saans-TRIAL-Bold.woff2",
      weight: "700",
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
