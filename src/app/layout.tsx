import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Corben } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import CookieConsent from "@/components/CookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";

const corben = Corben({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-corben",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="facebook-domain-verification" content="lqvrtaryyotfbjnd99fnn2y2p8fz09" />
        <GoogleTagManager gtmId="GTM-MDN8VD27" />
      </head>
      <body suppressHydrationWarning={true} className={corben.className}>
        <NavBar />
        {children}
        <Whatsapp />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
