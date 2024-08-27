import React from 'react'

interface ClientImageProps {
    cliendId: string;
    imgFormat: string;
}

const ClientImage: React.FC<ClientImageProps> = ({ cliendId, imgFormat }) => {
  return (
    <img 
        src={`clientes/cliente${cliendId}.${imgFormat}`} 
        alt={`cliente${cliendId}`} 
        className="object-contain md:max-w-[200px] max-w-[140px] m-auto grayscale hover:grayscale-0 hover:bg-white 
        rounded-lg p-5 transition duration-100" />
  )
}

export default ClientImage