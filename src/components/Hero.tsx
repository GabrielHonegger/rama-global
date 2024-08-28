import React from 'react'
import Title from './Title'
import CTAButton from './CTAButton'

const Hero = () => {
  return (
    <div id="hero" className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12">
        <div>
          <Title title="Conectando Sua Empresa ao Sucesso Sustentável" />
          <h2 className="lg:text-xl text-lg text-center font-thin m-auto p-2 text-new-green w-full lg:w-2/3">
            Oferecemos consultoria especializada que entende a cultura única de sua empresa.
          </h2>
        </div>
        <img src="hero-image.jpg" alt="arvores" className="w-10/12 sm:w-2/3 lg:w-1/2 rounded-3xl m-auto mt-3 lg:mt-6" />
        <div className='m-auto text-center mt-8'>
          <CTAButton text='Solicitar um orçamento' />
        </div>
    </div>
  )
}

export default Hero