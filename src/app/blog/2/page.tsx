import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import React from 'react'

const Post2 = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
                O Que Significa FSC?
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                O FSC segue princípios e critérios que, aplicados ao manejo florestal, 
                garantem que os produtos originários de uma determinada floresta foram 
                obtidos com respeito ao meio ambiente, aos trabalhadores florestais e à comunidade. 
                <br /><br />
                Pela sua seriedade, o FSC tornou-se o sistema de certificação florestal 
                mais confiável do mundo. Com sede na cidade de Bonn, na Alemanha, e com 
                representações nacionais em mais de 50 países, o FSC consolidou-se como 
                um elo confiável entre a produção florestal responsável e o consumo de 
                produtos florestais de origem garantida.
                <br /><br />
                Portanto, quando compramos ou vendemos um produto com o selo FSC, 
                temos a garantia de que a madeira utilizada na sua fabricação provém 
                de uma floresta que passou por um criterioso processo de certificação.
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/post2.jpg" alt="post1" className='w-full rounded-xl h-auto object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-5'>
              <p>
              Hoje, a certificação FSC é um diferencial importante em relação aos concorrentes.
            A tendência é se tornar cada vez mais uma exigência para permanecer no mercado.
              </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default Post2