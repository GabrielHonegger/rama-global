import React from 'react'

interface CTAButtonProps {
    text: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text }) => {
  return (
    <button className="border-2 border-orange-500 uppercase min-w-[250px] text-sm lg:text-[16px] hover:bg-white hover:text-orange-500 bg-orange-500 text-center py-[10px] px-6 rounded-full text-white transition duration-200">
        {text}
    </button>
  )
}

export default CTAButton