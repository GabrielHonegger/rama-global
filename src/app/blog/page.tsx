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
                  img='blog/post1' />
              </Link>
              <Link href="/blog/2">
                <ThreeDCard
                  title='O Que Significa FSC?'
                  preview='O FSC segue princípios e critérios que, aplicados ao manejo florestal, garantem que os produtos originários de uma determinada'
                  img='blog/post2' />
              </Link>
              <Link href="/blog/3">
                <ThreeDCard
                  title='5 Passos para a Obtenção do Selo FSC'
                  preview='Para que uma empresa possa receber a certificação FSC®, vários requisitos precisam ser observados. Elaboramos aqui uma'
                  img='blog/post3' />
              </Link>
              <Link href="/blog/4">
                <ThreeDCard
                  title='Quem Pode Utilizar o Selo FSC?'
                  preview='Esta é uma das perguntas mais freqüentes que as pessoas nos fazem sobre o sistema de certificação do FSC. A dúvida surge principalmente'
                  img='blog/post4' />
              </Link>
            </div>
        </div>
    </main>
  )
}

export default Blog