'use client';

import React, { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className="h-20 max-w-[1200px] m-auto flex justify-between">
        <div id="menu-logo" className="my-2 min-w-[105px] pl-5 mr-5">
          <img className="w-28" src="./logo-rama-global.png" alt="logo" />
        </div>
        <div className='w-full lg:flex justify-between max-w-[900px] hidden'>
            <div className="flex min-w-[550px] justify-end">
                <ul className="flex space-x-8 items-center  text-[17px]">
                    <li><a href="">Início</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Quem Somos</a></li>
                    <li><a href="">Clientes</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>
            <div className="flex w-1/4 items-center">
                <button className="font-inter uppercase min-w-[250px] text-[14px] mr-5 bg-slate-950 ml-auto py-3 px-6 rounded-full text-white">
                Solicitar um orçamento
                </button>
            </div>
            <div className="flex space-x-4 justify-between items-center w-15 px-3">
                <a href="https://www.instagram.com/rama_global/" target="_blank">
                    <img className="w-5 cursor-pointer" src="./instagram.png" alt="instagram-logo" />
                </a>
                <a href="https://web.facebook.com/ramaglobal/" target="_blank">
                    <img className="w-5 cursor-pointer" src="./facebook.png" alt="facebook-logo" />
                </a>
            </div>
        </div>
        <button onClick={toggleMenu} className='w-full z-20 flex justify-end p-5 max-w-[900px] lg:hidden'>
            <img src={isOpen ? "menu-fechado.png" : "menu-aberto.png" } alt="menu" className={isOpen ? "w-8 h-8 fixed" : "w-10 h-10"} />
        </button>
        <div className={`w-3/4 border-l border-gray-800 bg-white pt-14 top-0 right-0 bottom-0 z-10 h-screen fixed flex-col items-center ${isOpen ? "flex" : "hidden"} lg:hidden`}>
            <div className="flex flex-col min-w-full items-center justify-center">
                <ul className="flex flex-col items-center space-y-12 text-lg mt-4">
                    <li><a href="">Início</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Quem Somos</a></li>
                    <li><a href="">Clientes</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>
            <div className="flex items-center justify-center mt-8">
                <button className="font-inter uppercase w-full text-[14px] mt-5 bg-slate-950 py-3 px-6 rounded-full text-white">
                Solicitar um orçamento
                </button>
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