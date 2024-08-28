import React from 'react'

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="border-2 rounded-full border-orange-400 text-orange-400 px-4 py-2 mb-3 text-md hover:text-white hover:bg-orange-400 transition duration-200">
        {text}
    </button>
  )
}

export default Button