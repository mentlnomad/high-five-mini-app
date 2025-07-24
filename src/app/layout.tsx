import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "High Five Mini App",
  description: "Spread good vibes with virtual high fives for $1 USDC!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}