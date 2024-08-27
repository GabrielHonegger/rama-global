import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <div id="about" className="mb-10">
        <Title title="Quem Somos" />
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
  )
}

export default About