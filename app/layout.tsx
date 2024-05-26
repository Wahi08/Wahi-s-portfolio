import type { Metadata } from "next";
import MainLayout from '@/components/MainLayout';
import Header from '@/components/Header'
import Project from '@/components/Project'
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
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
      <body>{children}
      </body>
    </html>
  );
}
