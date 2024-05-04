import type { Metadata } from "next";
import MainLayout from '@components/MainLayout';
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
      <body><MainLayout></MainLayout></body>
    </html>
  );
}
