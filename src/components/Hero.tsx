import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12">
        <div>
          <h1 className="lg:text-6xl md:text-5xl text-4xl text-center m-auto mt-0 text-new-green p-2 lg:p-8 w-full lg:w-11/12">
            Conectando Sua Empresa ao Sucesso Sustentável
          </h1>
          <h2 className="lg:text-xl text-lg text-center font-thin m-auto p-2 text-new-green w-full lg:w-2/3">
            Oferecemos consultoria especializada que entende a cultura única de sua empresa.
          </h2>
        </div>
        <img src="hero-image.jpg" alt="arvores" className="w-10/12 sm:w-2/3 lg:w-1/2 rounded-3xl m-auto mt-3 lg:mt-6" />
      </div>
  )
}

export default Hero