import React from 'react'
import Title from './Title'
import ClientImage from './ClientImage'

const Clients = () => {
  return (
    <div id="clients" className="bg-slate-50 mt-10 pb-5 w-full">
        <Title title='Nossos Clientes' />
        <h2 className="md:text-lg sm:text-md text-center m-auto lg:text-xl text-new-green w-2/3">
          Conheça alguns de nossos clientes
        </h2>
        <div className="grid md:w-10/12 sm:w-full m-auto lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between mt-8">
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
        </div>
        <div className="flex">
          <button className="m-auto border-2 rounded-full border-orange-400 text-orange-400 px-4 py-2 mb-3 text-md hover:text-white hover:bg-orange-400 mt-2 transition duration-200">
              Ver Mais
          </button>
        </div>
      </div>
  )
}

export default Clients