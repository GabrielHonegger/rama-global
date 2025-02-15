import CTAButton from '@/components/CTAButton'
import ClientImage from '@/components/ClientImage'
import React from 'react'

const Clientes = () => {
  return (
    <main className="m-auto">
        <h1 className='lg:text-4xl md:text-3xl  text-center mb-5 mt-10 text-2xl'>
              Nossos Clientes
        </h1>
        <h2 className="md:text-lg sm:text-md text-center w-full px-4 m-auto lg:text-xl text-new-green md:w-2/3">
          Há mais de 15 anos ajudando empresas a obterem certificações ecológicas.
        </h2>
        <div className="grid md:w-10/12 sm:w-full m-auto mb-10 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between mt-8">
            <ClientImage cliendId='36' imgFormat='jpg' />
            <ClientImage cliendId='1' imgFormat='png' />
            <ClientImage cliendId='3' imgFormat='png' />
            <ClientImage cliendId='4' imgFormat='png' />
            <ClientImage cliendId='5' imgFormat='png' />
            <ClientImage cliendId='6' imgFormat='png' />
            <ClientImage cliendId='7' imgFormat='png' />
            <ClientImage cliendId='8' imgFormat='jpg' />
            <ClientImage cliendId='9' imgFormat='jpg' />
            <ClientImage cliendId='10' imgFormat='jpg' />
            <ClientImage cliendId='11' imgFormat='jpg' />
            <ClientImage cliendId='12' imgFormat='jpg' />
            <ClientImage cliendId='13' imgFormat='jpg' />
            <ClientImage cliendId='14' imgFormat='jpg' />
            <ClientImage cliendId='15' imgFormat='jpg' />
            <ClientImage cliendId='16' imgFormat='jpg' />
            <ClientImage cliendId='17' imgFormat='jpg' />
            <ClientImage cliendId='18' imgFormat='png' />
            <ClientImage cliendId='19' imgFormat='png' />
            <ClientImage cliendId='20' imgFormat='png' />
            <ClientImage cliendId='21' imgFormat='png' />
            <ClientImage cliendId='22' imgFormat='jpg' />
            <ClientImage cliendId='23' imgFormat='jpg' />
            <ClientImage cliendId='24' imgFormat='png' />
            <ClientImage cliendId='25' imgFormat='jpg' />
            <ClientImage cliendId='26' imgFormat='png' />
            <ClientImage cliendId='27' imgFormat='jpg' />
            <ClientImage cliendId='28' imgFormat='jpg' />
            <ClientImage cliendId='29' imgFormat='png' />
            <ClientImage cliendId='30' imgFormat='jpg' />
            <ClientImage cliendId='31' imgFormat='png' />
            <ClientImage cliendId='32' imgFormat='png' />
            <ClientImage cliendId='33' imgFormat='png' />
            <ClientImage cliendId='34' imgFormat='png' />
            <ClientImage cliendId='35' imgFormat='png' />
        </div>
        <div className='m-auto text-center mt-3 mb-10'>
          <CTAButton text='Solicitar Consultoria' />
        </div>
    </main>
  )
}

export default Clientes