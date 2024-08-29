"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface ThreeDCardProps {
  title: string;
  preview: string;
  img: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ title, preview, img }) => {
  return (
    <CardContainer className="inter-var mb-10">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {preview}... <span className="font-bold">Ver Mais</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img src={`${img}.jpg`} alt={img} className="rounded-xl" />
        </CardItem>
        <div className="flex justify-end items-center mt-5">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Saiba Mais →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default ThreeDCard