import React from 'react'
import CertificationBox from './CertificationBox'
import Title from './Title'
import CTAButton from './CTAButton'

const Services = () => {
  return (
    <div id="services" className="bg-slate-50 mt-10 pb-4 w-full">
        <Title title='Nossos Serviços' />
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 p-5 m-auto justify-between w-full lg:w-10/12 mt-2 lg:mt-3 ">
            <CertificationBox 
                title='Certificação FSC'
                description='A certificação FSC melhora a reputação de sua empresa, abre acesso a mercados conscientes, cumpre regulações ambientais e atrai consumidores que valorizam a sustentabilidade.'
                imgSrc='fsc-logo.png'
            />
            <CertificationBox 
                title='Certificação PEFC'
                description='A certificação PEFC demonstra manejo florestal sustentável, melhora a reputação de sua empresa, 
                facilita acesso a mercados que exigem sustentabilidade e atrai consumidores preocupados 
                com o meio ambiente.'
                imgSrc='pefc-logo.png'
            />
            <CertificationBox 
                title='Certificação ESG'
                description='A certificação ESG avalia práticas empresariais em critérios ambientais, 
                sociais e de governança, assegurando que a empresa opera de forma sustentável e ética, 
                considerando seu impacto ambiental, responsabilidade social e práticas de gerenciamento 
                transparentes e justas.'
                imgSrc='esg-logo.png'
            />
            <CertificationBox 
                title='Certificação de Rótulo Ecológico'
                description='O certificado de Rótulo Ecológico diferencia produtos ambientalmente responsáveis, 
                melhora a imagem da marca e abre mercados sustentáveis, atraindo consumidores que 
                buscam opções ecológicas e ajudando-os a escolher produtos menos nocivos ao meio ambiente.'
                imgSrc='rotulo-ecologico-logo.png'
            />
        </div>
        <div className='m-auto text-center mt-8 pb-5'>
          <CTAButton text='Começar Agora' />
        </div>
      </div>
  )
}

export default Services