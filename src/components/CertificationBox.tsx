import React from 'react'
import Link from 'next/link';
import ThreeDCard from './ThreeDCard';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Button from './Button';

interface CertificationBoxProps {
    title: string;
    description: string;
    imgSrc: string;
    certificate: string;
}

const CertificationBox: React.FC<CertificationBoxProps> = ({ title, description, imgSrc, certificate }) => {
  return (
    <Link href={`/blog/${certificate}`}>
        <CardContainer className="inter-var mb-10">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
            translateZ="50"
            className="text-xl m-auto font-bold text-neutral-600 dark:text-white"
            >
            {title}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                <img src={`${imgSrc}`} alt={imgSrc} className="object-cover h-[120px]" />
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-[17px] m-auto max-w-sm mt-2 text-center dark:text-neutral-300"
            >
            {description}
            </CardItem>
            <div className="flex justify-center items-center mt-5">
                <Button
                    text='Mais Informações' 
                />
            </div>
        </CardBody>
        </CardContainer>
    </Link>
  )
}

export default CertificationBox