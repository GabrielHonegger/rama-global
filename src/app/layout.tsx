import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Corben } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const corben = Corben({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rama Global",
  description: "Oferecemos consultoria para a sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/icon.ico"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Corben:wght@400;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${corben.className}`}>{children}</body>
    </html>
  );
}
