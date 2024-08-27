import React from 'react'

const Whatsapp = () => {
  return (
    <div id="whatsapp">
        <a aria-label="Chat on WhatsApp" className="fixed z-20 right-7 bottom-7 bg-green-whatapp p-4 rounded-full cursor-pointer" href="https://wa.me/554198730077?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria" target="_blank">
          <img alt="Chat on WhatsApp" src="whatsapp.png" className="w-8" />
        </a>
    </div>
  )
}

export default Whatsapp