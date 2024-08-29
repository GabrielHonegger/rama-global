'use client';

import Link from 'next/link';
import React, { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className="h-20 max-w-[1200px] m-auto flex justify-between">
        <div id="menu-logo" className="my-2 min-w-[105px] pl-5 mr-5">
          <img className="w-28" src="/logo-rama-global.png" alt="logo" />
        </div>
        <div className='w-full lg:flex justify-between max-w-[900px] hidden'>
            <div className="flex min-w-[550px] justify-end">
                <ul className="flex space-x-8 items-center  text-[17px]">
                    <li><Link href="/#hero">Início</Link></li>
                    <li><Link href="/#services">Serviços</Link></li>
                    <li><Link href="/#about">Quem Somos</Link></li>
                    <li><Link href="/#clients">Clientes</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/#contact">Contato</Link></li>
                </ul>
            </div>
            <div className="flex w-1/4 items-center">
                <Link href="/solicitar-orcamento">
                <button className="border-2 border-slate-950 font-inter uppercase min-w-[250px] text-[14px] mr-5 hover:bg-white hover:text-slate-950 bg-slate-950 ml-auto py-[10px] px-6 rounded-full text-white transition duration-200">
                Solicitar um orçamento
                </button>
                </Link>
            </div>
            <div className="flex space-x-4 justify-between items-center w-15 px-3">
                <a href="https://www.instagram.com/rama_global/" target="_blank">
                    <img className="w-5 cursor-pointer" src="/instagram.png" alt="instagram-logo" />
                </a>
                <a href="https://web.facebook.com/ramaglobal/" target="_blank">
                    <img className="w-5 cursor-pointer" src="/facebook.png" alt="facebook-logo" />
                </a>
            </div>
        </div>
        <button onClick={toggleMenu} className='w-full z-20 flex justify-end p-5 max-w-[900px] lg:hidden'>
            <img src={isOpen ? "/menu-fechado.png" : "/menu-aberto.png" } alt="menu" className={isOpen ? "w-6 h-6 fixed" : "w-8 h-8"} />
        </button>
        <div className={`w-3/4 border-l border-gray-800 bg-white pt-14 top-0 right-0 bottom-0 z-10 h-screen fixed flex-col items-center ${isOpen ? "flex" : "hidden"} lg:hidden`}>
            <div className="flex flex-col min-w-full items-center justify-center">
                <ul className="flex flex-col items-center space-y-12 text-lg mt-4">
                    <li><a href="#hero">Início</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#about">Quem Somos</a></li>
                    <li><a href="#clients">Clientes</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
            <div className="flex items-center justify-center mt-8">
                <Link href="/solicitar-orcamento">
                    <button className="font-inter uppercase w-full text-[14px] mt-5 bg-slate-950 py-3 px-6 rounded-full text-white">
                    Solicitar um orçamento
                    </button>
                </Link>
            </div>
            <div className="flex justify-center space-x-6 items-center mt-8">
                <a href="https://www.instagram.com/rama_global/" target="_blank">
                    <img className="w-6 cursor-pointer" src="./instagram.png" alt="instagram-logo" />
                </a>
                <a href="https://web.facebook.com/ramaglobal/" target="_blank">
                    <img className="w-6 cursor-pointer" src="./facebook.png" alt="facebook-logo" />
                </a>
            </div>
        </div>
      </nav>
  )
}

export default NavBar