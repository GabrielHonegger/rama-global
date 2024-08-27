import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <div id="about" className="mb-10">
        <Title title="Quem Somos" />
        <div className="flex mt-2 md:mt-5 flex-col">
          <div className="flex lg:flex-nowrap flex-wrap lg:w-10/12 md:11/12 w-full m-auto">
            <div className="lg:w-1/2 md:p-10 w-full p-6 pt-2">
              <h3 className="text-2xl mb-2">Rama Global</h3>
              <p className="md:text-lg text-md">
                A Rama Global oferece consultoria para sua empresa, respeitando as diferenças 
                entre os clientes e a cultura de cada empresa, proporcionando assim um trabalho 
                personalizado para atender com eficiência cada setor de negócio e atender às 
                necessidades de nossos clientes.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src="quem-somos1.jpg" alt="floresta-ensolarada" className="w-11/12 max-w-[500px] lg:mx-5 m-auto rounded-xl object-cover"/>
            </div>
          </div>
          <div className="flex lg:flex-row flex-wrap lg:w-10/12 md:11/12 w-full m-auto lg:mt-5 flex-col-reverse">
            <div className="lg:w-1/2 w-full lg:m-0">
              <img src="quem-somos2.jpg" alt="nosso-objetivo" className="w-11/12 max-w-[500px] lg:mx-5 m-auto rounded-xl object-cover" />
            </div>
            <div className="lg:w-1/2 w-full md:p-10 p-6 lg:pl-3 lg:pt-5">
                <h3 className="text-2xl mb-2">Nosso Objetivo</h3>
                <p className="md:text-lg text-md">
                Nos dias de hoje, as empresas enfrentam desafios significativos ao equilibrar o 
                crescimento econômico com a responsabilidae ambiental. Com isso em mente, 
                nossa missão é contribuir para o surgimento de uma nova geração de negócios.
                Ao integrar estratégias de sustentabilidade, as empresas podem transformar 
                essas práticas em verdadeiros diferenciais competitivos.
                </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About