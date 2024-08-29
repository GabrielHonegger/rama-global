import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import React from 'react'

const Post4 = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
                Quem Pode Utilizar o Selo FSC?
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                    O FSC® é detentor de três marcas registradas, que são:
                </p>
                <ul className='px-7 mt-2 mb-3 list-disc'>
                    <li>
                        a sigla FSC
                    </li>
                    <li>
                        a expressão Forest Stewardship Council
                    </li>
                    <li>
                        a logomarca FSC, popularmente conhecida como selo FSC
                    </li>
                </ul>
                <br />
                <p>
                    <b className='text-lg font-bold'>E quem pode utilizar as marcas registradas do FSC?</b>
                    <br />
                    <br />
                    Esta é uma das perguntas mais freqüentes que as pessoas nos fazem sobre 
                    o sistema de certificação do FSC. A dúvida surge principalmente por parte 
                    das empresas que ainda não passaram pela certificação FSC, mas que têm 
                    interesse em utilizar o selo, seja para promover o seu produto ou a sua imagem, 
                    seja para garantir aos seus clientes a origem de seus produtos.
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/post4.jpg" alt="post1" className='w-full rounded-xl h-auto object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-5'>
              <p>
                De acordo com as normas do FSC, as empresas só poderão fazer uso do selo 
                após serem aprovadas em auditoria. Esta auditoria, realizada por uma 
                certificadora credenciada no sistema FSC, verifica se o empreendimento 
                cumpre todos os requisitos necessários para obter e manter a certificação 
                e, em caso afirmativo, concede o certificado FSC (para saber quais são as 
                certificadoras credenciadas no FSC Brasil,  <span className='font-bold underline'><Link target='_blank' href="https://br.fsc.org/br-pt/certificacao/certificadoras">clique aqui</Link></span>).
                <br /><br />
                Portanto, para poder promover sua empresa e seus produtos com o selo FSC, 
                é preciso antes passar por um processo de certificação. A Rama Global Consultoria 
                auxilia as empresas em todas as fases deste processo, oferecendo soluções práticas 
                e eficientes para que a empresa esteja bem preparada para passar pela auditoria, 
                receber sua certificação e ter o direito de utilizar as marcas registradas do FSC.
              </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default Post4