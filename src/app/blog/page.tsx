import ThreeDCard from '@/components/ThreeDCard'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center mb-10 text-2xl'>
              Blog
            </h1>
            <div className='flex flex-wrap justify-around'>
              <Link href="/blog/1">
                <ThreeDCard
                  title='Como Surgiu o FSC?'
                  preview='O FSC foi criado como resposta a uma preocupação internacional com o destino das florestas mundiais no início da década de'
                  img='blog/post1.jpg' />
              </Link>
              <Link href="/blog/fsc">
                <ThreeDCard
                  title='Certificado FSC'
                  preview='O Certificado FSC (Forest Stewardship Council) é uma certificação internacional criada para garantir que produtos florestais como madeira, papel e'
                  img='blog/certificado-fsc.jpg' />
              </Link>
              <Link href="/blog/2">
                <ThreeDCard
                  title='O Que Significa FSC?'
                  preview='O FSC segue princípios e critérios que, aplicados ao manejo florestal, garantem que os produtos originários de uma determinada'
                  img='blog/post2.jpg' />
              </Link>
              <Link href="/blog/pefc">
                <ThreeDCard
                  title='Certificado PEFC'
                  preview='O Certificado PEFC (Programme for the Endorsement of Forest Certification) é uma certificação internacional dedicada a promover a'
                  img='blog/certificado-pefc.webp' />
              </Link>
              <Link href="/blog/3">
                <ThreeDCard
                  title='5 Passos para a Obtenção do Selo FSC'
                  preview='Para que uma empresa possa receber a certificação FSC®, vários requisitos precisam ser observados. Elaboramos aqui uma'
                  img='blog/post3.jpg' />
              </Link>
              <Link href="/blog/esg">
                <ThreeDCard
                  title='Certificado ESG'
                  preview='O Certificado ESG (Environmental, Social and Governance) refere-se a um conjunto de práticas e métricas que avaliam a'
                  img='blog/certificado-esg.jpg' />
              </Link>
              <Link href="/blog/4">
                <ThreeDCard
                  title='Quem Pode Utilizar o Selo FSC?'
                  preview='Esta é uma das perguntas mais freqüentes que as pessoas nos fazem sobre o sistema de certificação do FSC. A dúvida surge principalmente'
                  img='blog/post4.jpg' />
              </Link>
              <Link href="/blog/rotulo-ecologico">
                <ThreeDCard
                  title='Certificado de Rótulo Ecológico'
                  preview='A Certificação de Rótulo Ecológico é uma certificação que indica que um produto foi produzido de maneira ambientalmente'
                  img='blog/certificado-rotulo-ecologico.jpeg' />
              </Link>
            </div>
        </div>
    </main>
  )
}

export default Blog