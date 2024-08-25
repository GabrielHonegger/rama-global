import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Corben } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const corben = Corben({ 
  weight: ["400"], 
  subsets: ["latin"],
  variable: '--font-corben'
});

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Rama Global",
  description: "Oferecemos consultoria ecológica para a sua empresa.",
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
      </head>
      <body className={corben.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
