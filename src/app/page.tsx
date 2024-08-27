import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import Hero from '@/components/Hero';
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="m-auto">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <div id="clients" className="bg-slate-50 mt-10 pb-5 w-full">
        <h1 className="text-5xl text-center m-auto pt-5  text-new-green w-2/3">
            Nossos Clientes
          </h1>
        <h2 className="text-xl text-center m-auto pt-2  text-new-green w-2/3">
          Conheça alguns de nossos clientes
        </h2>
        <div className="flex w-10/12 m-auto flex-wrap justify-between mt-8">
          <img src="clientes/cliente1.png" alt="cliente1" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente3.png" alt="cliente3" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente4.png" alt="cliente4" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente5.png" alt="cliente5" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente6.png" alt="cliente6" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
        </div>
        <div className="flex w-10/12 flex-wrap m-auto justify-between mt-6">
          <img src="clientes/cliente7.png" alt="cliente7" className="object-contain w-[160px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente8.jpg" alt="cliente8" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente9.jpg" alt="cliente9" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente10.jpg" alt="cliente10" className="object-contain w-[150px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente11.jpg" alt="cliente11" className="object-contain w-[120px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
        </div>
        <div className="flex w-10/12 m-auto flex-wrap justify-between mt-6">
          <img src="clientes/cliente12.jpg" alt="cliente12" className="object-contain w-[150px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente13.jpg" alt="cliente13" className="object-contain w-[150px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente14.jpg" alt="cliente14" className="object-contain w-[200px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente15.jpg" alt="cliente15" className="object-contain w-[220px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente16.jpg" alt="cliente16" className="object-contain w-[220px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
        </div>
        <div className="flex">
          <button className="m-auto border-2 rounded-full border-orange-400 text-orange-400 px-4 py-2 mb-3 text-md hover:text-white hover:bg-orange-400 mt-2">
              Ver Mais
          </button>
        </div>
      </div>
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