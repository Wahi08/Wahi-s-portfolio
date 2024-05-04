import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wahi's Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
