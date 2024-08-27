import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Hero from '@/components/Hero';
import Services from "@/components/Services";
import About from "@/components/About";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main className="m-auto">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Clients />
      
      <div id="contact" className="mb-10">
        <h1 className="text-5xl text-center m-auto pt-5  text-new-green w-2/3">
          Contato
        </h1>
        <div className="flex flex-wrap w-10/12 m-auto">
          <div className="w-full">
            <p className="text-lg p-5 mt-5 ml-16 pr-10">Entre em contato conosco por telefone ou visite-nos a qualquer momento. 
              Nos dedicamos a responder a todas as suas perguntas dentro de 24 horas em 
              dias úteis e teremos prazer em esclarecer suas dúvidas.</p>
            <div>
              <div className="p-5 pl-20 flex flex-col">
                <div className="flex mb-10">
                  <div>
                    <img src="local.png" alt="local" className="w-8 object-contain mr-4 mt-1" />
                    {/* #FF8A35 */}
                  </div>
                  <div>
                    <h2 className="text-lg mb-2">Nosso endereço:</h2>
                    <p className="text-lg text-gray-600">Av. Sete de Setembro, 4995 - Batel - Curitiba - PR, 80250-205, Brasil</p>
                  </div>
                </div>
                <div className="flex mb-10">
                  <div>
                    <img src="email.png" alt="email" className="w-8 object-contain mr-4 mt-1" />
                    {/* #FF8A35 */}
                  </div>
                  <div>
                    <h2 className="text-lg mb-2">Nosso email:</h2>
                    <p className="text-lg text-gray-600">contato@ramaglobal.com.br</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src="telefone.png" alt="telefone" className="w-8 object-contain mr-4 mt-1" />
                    {/* #FF8A35 */}
                  </div>
                  <div>
                    <h2 className="text-lg mb-2">Nosso telefone</h2>
                    <p className="text-lg text-gray-600">+55 (41) 9873-0077</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 p-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <div id="whatsapp">
        <a aria-label="Chat on WhatsApp" className="fixed z-20 right-7 bottom-7 bg-green-whatapp p-4 rounded-full cursor-pointer" href="https://wa.me/554198730077?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria" target="_blank">
          <img alt="Chat on WhatsApp" src="whatsapp.png" className="w-8" />
        </a>
      </div>
    </main>
  );
}