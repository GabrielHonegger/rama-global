import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from '@/components/Hero';
import Services from "@/components/Services";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="m-auto">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
      <Whatsapp />
      <Footer />
    </main>
  );
}