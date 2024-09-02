import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-500 p-6 w-full flex flex-col space-y-8 items-center justify-center'>
        <ul className="grid gap-x-8 gap-y-5 lg:grid-cols-6 md:grid-cols-3 grid-cols-2 text-white md:text-md text-sm">
            <li><Link href="/#hero">Início</Link></li>
            <li><Link href="/#services">Serviços</Link></li>
            <li><Link href="/#about">Quem Somos</Link></li>
            <li><Link href="/#clients">Clientes</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#contact">Contato</Link></li>
        </ul>
        <ul className="flex space-x-8 text-white md:text-md text-sm">
            <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
            <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
        </ul>
        <p className='text-white text-center text-sm md:text-md'>
            Direitos autorais © 2024 Rama Global. Todos os direitos reservados.
        </p>
    </div>
  )
}

export default Footer