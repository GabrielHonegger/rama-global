import React from 'react'

const NavBar = () => {
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
                <a href="https://www.instagram.com/rama_global/" target="_blank"><img className="w-5 cursor-pointer" src="./instagram.png" alt="instagram-logo" /></a>
                <a href="https://web.facebook.com/ramaglobal/" target="_blank"><img className="w-5 cursor-pointer" src="./facebook.png" alt="facebook-logo" /></a>
            </div>
        </div>
        <a className='w-full flex justify-end p-5 max-w-[900px] lg:hidden'>
            <img src="menu-aberto.png" alt="menu" className='w-10 h-10' />
        </a>
        <div className='w-full hidden justify-between max-w-[900px] lg:hidden'>
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
                <a href="https://www.instagram.com/rama_global/" target="_blank"><img className="w-5 cursor-pointer" src="./instagram.png" alt="instagram-logo" /></a>
                <a href="https://web.facebook.com/ramaglobal/" target="_blank"><img className="w-5 cursor-pointer" src="./facebook.png" alt="facebook-logo" /></a>
            </div>
        </div>
      </nav>
  )
}

export default NavBar