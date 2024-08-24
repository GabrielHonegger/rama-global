import Image from "next/image";

export default function Home() {
  return (
    <main className="m-auto">
      <nav className="h-20 w-10/12 m-auto flex justify-between">
        <div id="menu-logo" className="my-2">
          <img className="w-28" src="./logo-rama-global.png" alt="logo" />
        </div>
       <div className="ml-20 flex">
          <ul className="flex space-x-8 items-center font-corben text-[17px]">
            <li><a href="">Início</a></li>
            <li><a href="">Serviços</a></li>
            <li><a href="">Quem Somos</a></li>
            <li><a href="">Clientes</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contato</a></li>
          </ul>
       </div>
       <div className="flex w-1/4 ml-5 items-center">
        <button className="font-inter uppercase text-[14px] mr-0 bg-slate-950 ml-auto py-3 px-6 rounded-full text-white">
          Solicitar um orçamento
        </button>
       </div>
       <div className="flex space-x-4 text-trans items-center w-15">
          <img className="w-5 cursor-pointer" src="./instagram.png" alt="instagram-logo" />
          <img className="w-5 cursor-pointer" src="./facebook.png" alt="instagram-logo" />
       </div>
      </nav>
      <div id="hero" className="m-auto mt-6 w-10/12">
        <div>
          <h1 className="text-6xl text-center m-auto mt-0 text-new-green w-2/3">
            Conectando Sua Empresa ao Sucesso Sustentável
          </h1>
          <h2 className="text-xl text-center font-thin m-auto mt-4 font-corben text-new-green w-2/3">
            Oferecemos consultoria especializada que entende a cultura única de sua empresa.
          </h2>
        </div>
        <img src="hero-image.jpg" alt="arvores" className="w-1/2 rounded-3xl m-auto mt-10" />
      </div>
      <div id="services" className="bg-slate-50 mt-10 pb-4 w-full">
        <h1 className="text-5xl text-center m-auto pt-5 font-corben text-new-green w-2/3">
          Nossos Serviços
        </h1>
        <div className="flex flex-wrap m-auto justify-between w-10/12 mt-6">
          <div className="bg-white border-[1px] border-lime-700 w-[540px] m-5 ml-10 rounded-2xl">
            <h2 className="text-2xl text-center m-auto mt-6 font-corben text-gray-800">
              Certificação FSC
            </h2>
            <img src="fsc-logo.png" alt="fsc-logo" className="w-[120px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4 font-corben text-gray-600 px-8 pb-6">
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
            <h2 className="text-2xl text-center m-auto mt-6 font-corben text-gray-800">
              Certificação PEFC
            </h2>
            <img src="pefc-logo.png" alt="fsc-logo" className="w-[100px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4 font-corben text-gray-600 px-8 pb-6">
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
            <h2 className="text-2xl text-center m-auto mt-6 font-corben text-gray-800">
              Certificação ESG
            </h2>
            <img src="esg-logo.png" alt="fsc-logo" className="w-[120px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4 font-corben text-gray-600 px-8 pb-6">
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
            <h2 className="text-2xl text-center m-auto mt-6 font-corben text-gray-800">
            Certificação de Rótulo Ecológico
            </h2>
            <img src="rotulo-ecologico-logo.png" alt="fsc-logo" className="w-[140px] m-auto mt-5" />
            <p className="text-lg text-center m-auto mt-4 font-corben text-gray-600 px-8 pb-6">
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
        <h1 className="text-5xl text-center m-auto pt-5 font-corben text-new-green w-2/3">
          Quem Somos
        </h1>
        <div className="flex mt-10 flex-col">
          <div className="w-9/12 m-auto flex">
            <div className="w-1/2 p-7">
              <h3 className="font-corben text-3xl mb-2">Rama Global</h3>
              <p className="font-corben text-lg">
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
                <h3 className="font-corben text-3xl mb-2">Nosso Objetivo</h3>
                <p className="font-corben text-lg">
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
        <h1 className="text-5xl text-center m-auto pt-5 font-corben text-new-green w-2/3">
            Nossos Clientes
          </h1>
        <h2 className="text-xl text-center m-auto pt-2 font-corben text-new-green w-2/3">
          Conheça alguns de nossos clientes
        </h2>
        <div className="flex w-10/12 m-auto justify-between mt-8">
          <img src="clientes/cliente1.png" alt="cliente1" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente3.png" alt="cliente3" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente4.png" alt="cliente4" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente5.png" alt="cliente5" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente6.png" alt="cliente6" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
        </div>
        <div className="flex w-10/12 m-auto justify-between mt-6">
          <img src="clientes/cliente7.png" alt="cliente7" className="object-contain w-[160px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente8.jpg" alt="cliente8" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente9.jpg" alt="cliente9" className="object-contain w-[250px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente10.jpg" alt="cliente10" className="object-contain w-[150px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
          <img src="clientes/cliente11.jpg" alt="cliente11" className="object-contain w-[120px] grayscale hover:grayscale-0 hover:bg-white rounded-lg p-5 transition duration-100" />
        </div>
        <div className="flex w-10/12 m-auto justify-between mt-6">
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
        <h1 className="text-5xl text-center m-auto pt-5 font-corben text-new-green w-2/3">
          Contato
        </h1>
      </div>
    </main>
  );
}
