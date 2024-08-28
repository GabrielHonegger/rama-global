import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-500 p-6 w-full flex flex-col space-y-8 items-center justify-center'>
        <ul className="grid gap-x-8 gap-y-5 lg:grid-cols-6 md:grid-cols-3 grid-cols-2 text-white md:text-md text-sm">
            <li><a href="#hero">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Quem Somos</a></li>
            <li><a href="#clients">Clientes</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
        <p className='text-white text-center text-sm md:text-md'>
            Direitos autorais © 2024 Rama Global. Todos os direitos reservados.
        </p>
    </div>
  )
}

export default Footer