import React from 'react';
import ContactForm from './ContactForm';
import Title from './Title';
import CTAButton from './CTAButton';

const Contact = () => {
  return (
    <div id="contact" className="mb-10">
        <Title title='Contato' />
    <div className="flex flex-wrap md:flex-nowrap w-full px-6 lg:w-11/12 m-auto">
      <div className="w-full">
        <p className="md:text-lg text-md md:p-5 md:mt-5 lg:ml-16 lg:pr-10">Entre em contato conosco por telefone ou visite-nos a qualquer momento. 
          Nos dedicamos a responder a todas as suas perguntas dentro de 24 horas em 
          dias úteis e teremos prazer em esclarecer suas dúvidas.</p>
        <div>
          <div className="md:p-5 pt-5 md:pl-20 flex flex-col">
            <div className="flex md:mb-10 mb-5">
              <div>
                <img src="local.png" alt="local" className="md:w-8 w-6 object-contain mr-4 mt-1" />
              </div>
              <div className='pl-2'>
                <h2 className="md:text-lg text-md mb-2">Nosso endereço:</h2>
                <p className="md:text-lg text-md text-gray-600">Av. Sete de Setembro, 4995 - Batel - Curitiba - PR, 80250-205, Brasil</p>
              </div>
            </div>
            <div className="flex md:mb-10 mb-5">
              <div>
                <img src="email.png" alt="email" className="md:w-8 w-6 object-contain mr-4 mt-1" />
              </div>
              <div className='pl-2'>
                <h2 className="md:text-lg text-md mb-2">Nosso email:</h2>
                <p className="md:text-lg text-md text-gray-600">contato@ramaglobal.com.br</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src="telefone.png" alt="telefone" className="md:w-8 w-6 object-contain mr-4 mt-1" />
              </div>
              <div className='pl-2'>
                <h2 className="md:text-lg text-md mb-2">Nosso telefone</h2>
                <p className="md:text-lg text-md text-gray-600">+55 (41) 9873-0077</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 lg:p-10">
        <ContactForm />
      </div>
    </div>
    <div className='m-auto text-center lg:mt-5 mt-10'>
          <CTAButton text='Solicite um orçamento' />
    </div>
  </div>
  )
}

export default Contact