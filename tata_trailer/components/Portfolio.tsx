"use client";
import React, { useState } from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card as UICard, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { PortfolioHeading } from "./heading";
import { portfolioImages } from "@/constants";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

// Carousel Component
export function CarouselSpacing({ onZoom }: any) {
  const cardItems = portfolioImages.map((cards, index) => (
    <CarouselItem
      key={index}
      className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/3 transition-all duration-800 ease-in-out hover:scale-110"
    >
      <div className="p-4">
        <UICard>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <Card imgUrl={cards.img} onZoom={() => onZoom(index)} />
          </CardContent>
        </UICard>
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel className="w-full max-w-sm md:max-w-full lg:max-w-full">
      <CarouselContent className="-ml-1 pb-5 sm:pb-10">
        {cardItems}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Portfolio Component
const Portfolio = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: any) => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="container md:max-w-7xl items-center px-4 py-8 m-auto mt-5 sm:max-w-4xl">
      <div className="text-center items-center">
        <PortfolioHeading />
      </div>
      <div className="hidden md:block">
        <CarouselSpacing onZoom={openLightbox} />
      </div>
      <div className="md:hidden flex items-center justify-center">
        <CarouselSpacing onZoom={openLightbox} />
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <Link href="/">
          <Button>View All</Button>
        </Link>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-lg p-4">
            <X
              className="absolute top-2 right-2 text-black text-2xl cursor-pointer"
              onClick={closeLightbox}
            />
            <Carousel>
              <CarouselContent>
                {portfolioImages.map((cards, index) => (
                  <CarouselItem
                    key={index}
                    className="relative w-full h-[80vh]"
                  >
                    <Image
                      src={cards.img}
                      alt={`Zoomed Image ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg p-8"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
