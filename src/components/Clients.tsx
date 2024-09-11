import React from 'react'
import Title from './Title'
import ClientImage from './ClientImage'
import Button from './Button'
import Link from 'next/link'

const Clients = () => {
  return (
    <div id="clients" className="bg-slate-50 mt-10 lg:pb-10 pb-5 w-full">
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
        <div className="flex justify-center items-center mt-5">
                <Link href='/clientes'>
                  <Button
                      text='Ver Todos' 
                  />
                </Link>
            </div>
      </div>
  )
}

export default Clients