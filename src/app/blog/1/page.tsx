import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import React from 'react'

const Post1 = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
                Como Surgiu o FSC?
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                  O FSC foi criado como resposta a uma preocupação internacional com o destino das florestas mundiais no início da década de 90. Já naquela época os desmatamentos na Amazônia e em outras florestas tropicais atraíam a atenção da mídia internacional. <br /><br />

                  Consumidores da Europa e América do Norte decidiram iniciar então um boicote à madeira oriunda de florestas tropicais. Entretanto, a tática não teve o resultado esperado já que estimulava uma desvalorização ainda maior da floresta. Tornou-se evidente que a solução não seria banir o uso da madeira tropical, mas garantir que sua extração fosse realizada de forma a minimizar os impactos ao meio ambiente. <br /> <br />

                  O conceito da certificação surgiu então como uma forma de controle das práticas produtivas florestais por meio da valorização, no mercado, dos produtos originados de manejo responsável das florestas. <br /> <br />
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/post1.jpg" alt="post1" className='w-full rounded-xl h-auto object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-2'>
              <p>
                Um grupo formado por empresas e organizações sociais e ambientais do mundo todo iniciou as negociações para a criação de uma entidade independente que estabelecesse princípios universais para garantir o bom manejo florestal. Após um longo processo de consulta internacional, incluindo discussões durante a Rio-92, o FSC foi oficialmente fundado em 1993, no Canadá.
                  <br /> <br />
                  Desde então, o FSC se tornou o sistema de certificação florestal de maior credibilidade internacional e o único que incorpora de forma igualitária os interesses de grupos sociais, ambientais e econômicos.
                  <br /> <br />
                  O FSC no Brasil
                  No Brasil, a discussão sobre o FSC se iniciou em 1996 como um grupo de trabalho criado para discutir a adaptação do padrão internacional à realidade do país. Em 2001 foi constituída a organização não-governamental Conselho Brasileiro de Manejo Florestal, reconhecida oficialmente como iniciativa nacional do FSC no ano seguinte.
                  <br /> <br />
                  Desde então, o FSC Brasil vem atuando em três frentes principais: desenvolvimento dos padrões locais, promoção e divulgação da certificação florestal tanto na cadeia produtiva quanto entre os consumidores finais, e a realização de atividades relacionadas ao manejo e certificação florestal, como cursos de capacitação e seminários.
                  <br /> <br />
                  Junto com outras 45 iniciativas nacionais distribuídas em todo o mundo, o FSC Brasil tem trabalhado para promover cada vez mais o manejo responsável de nossas florestas, conciliando conservação da natureza, benefícios sociais e viabilidade econômica.
                  <br /><br />
                  (Fonte: FSC Brasil)
              </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default Post1