import ThreeDCard from '@/components/ThreeDCard'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 p-6">
            <h1 className='lg:text-4xl md:text-3xl  text-center mb-10 text-2xl'>
              Blog
            </h1>
            <div className='flex flex-wrap justify-around'>
              <Link href="/">
                <ThreeDCard
                  title='Como Surgiu o FSC?'
                  preview='O FSC foi criado como resposta a uma preocupação internacional com o destino das florestas mundiais no início da década de'
                  img='blog-post1' />
              </Link>
            </div>
        </div>
    </main>
  )
}

export default Blog