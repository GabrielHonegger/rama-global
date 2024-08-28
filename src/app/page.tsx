import Image from "next/image";
import Hero from '@/components/Hero';
import Services from "@/components/Services";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="m-auto">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
    </main>
  );
}