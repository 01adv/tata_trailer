import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card as UICard, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Service card item component
const ServiceCardItem = ({ service }: any) => {
  const { title, description, buttonText, imgSrc } = service;

  return (
    <div className="p-1">
      <UICard>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <div className="group relative cursor-pointer overflow-hidden w-72 md:w-96 h-96 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-red-400">
              <Image
                src={imgSrc}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
                loading="lazy"
              />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 z-10 bg-gray-800 opacity-0 transition-opacity duration-1000 group-hover:opacity-70"></div>
            <div className="relative z-20 h-full w-full mx-auto max-w-md">
              <div className="h-full w-full text-sm font-medium leading-7 hidden transition-all duration-500 group-hover:text-white/90 group-hover:flex group-hover:flex-wrap items-end justify-center">
                <p>{description}</p>
                <div className="w-full text-center text-base font-semibold">
                  <p className="text-lg">
                    <Link href="#">{buttonText} &rarr;</Link>
                  </p>
                </div>
              </div>
              <div className="h-full w-full flex items-end justify-center text-center font-semibold leading-7 text-white group-hover:hidden transition-all duration-500">
                <h3 className="font-bold text-2xl">{title}</h3>
              </div>
            </div>
          </div>
        </CardContent>
      </UICard>
    </div>
  );
};

// Carousel Component
export function CarouselSpacing({ serviceData }: any) {
  const cardItems = serviceData.map((service: any, index: any) => (
    <CarouselItem
      key={index}
      className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/3"
    >
      <ServiceCardItem service={service} />
    </CarouselItem>
  ));

  return (
    <Carousel className="w-full max-w-sm md:max-w-full lg:max-w-full">
      <CarouselContent className="-ml-1 pb-5 sm:pb-10">
        {cardItems}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
