import React from 'react'

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="lg:text-6xl md:text-5xl text-4xl text-center m-auto mt-0 text-new-green p-2 lg:p-8 w-full lg:w-11/12">
        {title}
    </h1>
  )
}

export default Title