import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google'

const QuoteSent = () => {
  return (
    <main className="m-auto">
        <div className="m-auto mt-3 lg:mt-4 w-full p-6 lg:w-1/2">
            <h1 className='lg:text-5xl text-green-700 md:text-4xl  text-center mb-5 text-3xl'>
              Obrigado!
            </h1>
            <h2 className='lg:text-2xl text-green-700 md:text-xl  text-center mb-8 text-xl'>
              Sua solicitação de orçamento foi enviada com sucesso.
              Você receberá uma resposta em breve.
            </h2>
        </div>
        <GoogleTagManager gtmId="GTM-MDN8VD27" />
    </main>
  )
}

export default QuoteSent