import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Corben } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import CookieConsent from "@/components/CookieConsent";
import Script from 'next/script';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true} className={corben.className}>
        <NavBar />
        {children}
        <Whatsapp />
        <Footer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-959213575"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-959213575');
          `}
        </Script>
        <CookieConsent />
      </body>
    </html>
  );
}
