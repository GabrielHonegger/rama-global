import React from 'react'
import Button from './Button';

interface CertificationBoxProps {
    title: string;
    description: string;
    imgSrc: string;
}

const CertificationBox: React.FC<CertificationBoxProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white border-[1px] border-lime-700 rounded-2xl">
        <h2 className="lg:text-2xl text-xl text-center m-auto mt-6  text-gray-800">
            {title}
        </h2>
        <img src={imgSrc} alt={title} className="lg:max-w-[120px] max-w-[80px] md:max-w-[100px] m-auto mt-5" />
        <p className="lg:text-lg text-md text-center m-auto mt-4  text-gray-600 px-8 pb-6">
            {description}
        </p>
        <div className="flex justify-center mb-5">
            <Button text="Mais Informações" />
        </div>
    </div>
  )
}

export default CertificationBox