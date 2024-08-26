import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Corben } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={corben.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
