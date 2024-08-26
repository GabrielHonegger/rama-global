import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="m-auto">
      <NavBar />
      <div id="hero" className="m-auto mt-6 w-10/12">
        <div>
          <h1 className="text-6xl text-center m-auto mt-0 text-new-green w-2/3">
            Conectando Sua Empresa ao Sucesso Sustentável
          </h1>
          <h2 className="text-xl text-center font-thin m-auto mt-4  text-new-green w-2/3">
            Oferecemos consultoria especializada que entende a cultura única de sua empresa.
          </h2>
        </div>
        <img src="hero-image.jpg" alt="arvores" className="w-1/2 rounded-3xl m-auto mt-10" />
      </div>
      <div id="services" className="bg-slate-50 mt-10 pb-4 w-full">
        <h1 className="text-5xl text-center m-auto pt-5  text-new-green w-2/3">
          Nossos Serviços
        </h1>
        <div className="flex flex-wrap m-auto justify-between w-10/12 mt-6">
          <div className="bg-white border-[1px] border-lime-700 w-[540px] m-5 ml-10 rounded-2xl">
            <h2 className="text-2xl text-center m-auto mt-6  text-gray-800">
              Certificação FSC
            </h2>
            <img src="fsc-logo.png" alt="fsc-logo" className="w-[120px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4  text-gray-600 px-8 pb-6">
            A certificação FSC melhora a reputação de sua empresa, abre acesso a mercados conscientes, 
            cumpre regulações ambientais e atrai consumidores que valorizam a sustentabilidade.
            </p>
            <div className="flex justify-center mb-5">
              <button className="border-2 rounded-full border-orange-400 text-orange-400 px-4 py-2 mb-3 text-md hover:text-white hover:bg-orange-400">
                Mais Informações
              </button>
            </div>
          </div>
          <div className="bg-white border-[1px] border-lime-700 w-[540px] m-5 mr-10 rounded-2xl">
            <h2 className="text-2xl text-center m-auto mt-6  text-gray-800">
              Certificação PEFC
            </h2>
            <img src="pefc-logo.png" alt="fsc-logo" className="w-[100px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4  text-gray-600 px-8 pb-6">
            A certificação PEFC demonstra manejo florestal sustentável, melhora a reputação de sua empresa, 
            facilita acesso a mercados que exigem sustentabilidade e atrai consumidores preocupados 
            com o meio ambiente.
            </p>
            <div className="flex justify-center mb-5">
              <button className="border-2 rounded-full border-orange-400 text-orange-400 px-4 py-2 mb-3 text-md hover:text-white hover:bg-orange-400">
                Mais Informações
              </button>
            </div>
          </div>
          <div className="bg-white border-[1px] border-lime-700 w-[540px] m-5 ml-10 rounded-2xl">
            <h2 className="text-2xl text-center m-auto mt-6  text-gray-800">
              Certificação ESG
            </h2>
            <img src="esg-logo.png" alt="fsc-logo" className="w-[120px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4 text-gray-600 px-8 pb-6">
            A certificação ESG avalia práticas empresariais em critérios ambientais, 
            sociais e de governança, assegurando que a empresa opera de forma sustentável e ética, 
            considerando seu impacto ambiental, responsabilidade social e práticas de gerenciamento 
            transparentes e justas.
            </p>
            <div className="flex justify-center mb-5">
              <button className="border-2 rounded-full border-orange-400 text-orange-400 px-4 py-2 mb-3 text-md hover:text-white hover:bg-orange-400">
                Mais Informações
              </button>
            </div>
          </div>
          <div className="bg-white border-[1px] border-lime-700 w-[540px] m-5 mr-10 rounded-2xl">
            <h2 className="text-2xl text-center m-auto mt-6 text-gray-800">
            Certificação de Rótulo Ecológico
            </h2>
            <img src="rotulo-ecologico-logo.png" alt="fsc-logo" className="w-[140px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4  text-gray-600 px-8 pb-6">
            O certificado de Rótulo Ecológico diferencia produtos ambientalmente responsáveis, 
            melhora a imagem da marca e abre mercados sustentáveis, atraindo consumidores que 
            buscam opções ecológicas e ajudando-os a escolher produtos menos nocivos ao meio ambiente.
            </p>
            <div className="flex justify-center mb-5">
              <button className="border-2 rounded-full border-orange-400 text-orange-400 px-4 py-2 mb-3 text-md hover:text-white hover:bg-orange-400">
                Mais Informações
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="mb-10">
        <h1 className="text-5xl text-center m-auto pt-5 text-new-green w-2/3">
          Quem Somos
        </h1>
        <div className="flex mt-10 flex-col">
          <div className="w-9/12 m-auto flex">
            <div className="w-1/2 p-7">
              <h3 className=" text-3xl mb-2">Rama Global</h3>
              <p className=" text-lg">
                A Rama Global oferece consultoria para sua empresa, respeitando as diferenças 
                entre os clientes e a cultura de cada empresa, proporcionando assim um trabalho 
                personalizado para atender com eficiência cada setor de negócio e atender às 
                necessidades de nossos clientes.
              </p>
            </div>
            <div className="w-1/2">
              <img src="quem-somos1.jpg" alt="floresta-ensolarada" className="w-full h-[300px] object-cover"/>
            </div>
          </div>
          <div className="w-9/12 m-auto flex">
            <div className="w-1/2">
              <img src="quem-somos2.jpg" alt="nosso-objetivo" className="w-full h-[300px] object-cover" />
            </div>
            <div className="w-1/2 p-7">
                <h3 className=" text-3xl mb-2">Nosso Objetivo</h3>
                <p className=" text-lg">
                Nos dias de hoje, as empresas enfrentam desafios significativos ao equilibrar o 
                crescimento econômico com a responsabilidade ambiental. Com isso em mente, 
                nossa missão é contribuir para o surgimento de uma nova geração de negócios.
                Ao integrar estratégias de sustentabilidade, as empresas podem transformar 
                essas práticas em verdadeiros diferenciais competitivos.
                </p>
            </div>
          </div>
        </div>
      </div>
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
        <div className="flex w-10/12 m-auto">
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
        <a aria-label="Chat on WhatsApp" className="fixed right-7 bottom-7 bg-green-whatapp p-4 rounded-full cursor-pointer" href="https://wa.me/554198730077?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria" target="_blank">
        <img alt="Chat on WhatsApp" src="whatsapp.png" className="w-8" />
      </a>
      </div>
    </main>
  );
}