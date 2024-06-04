import * as React from "react";
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

// Carousel Component
export function CarouselSpacing() {
  const cardItems = Array.from({ length: 6 }).map((_, index) => (
    <CarouselItem
      key={index}
      className="pl-1  sm:basis-full md:basis-1/2 lg:basis-1/3"
    >
      <div className="p-4">
        <UICard>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <Card />
          </CardContent>
        </UICard>
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel className="w-full max-w-sm md:max-w-full lg:max-w-full">
      <CarouselContent className="-ml-1">{cardItems}</CarouselContent>
      <CarouselPrevious className="hidden sm:flex"/>
      <CarouselNext className="hidden sm:flex"/>
    </Carousel>
  );
}

// Portfolio Component
const Portfolio = () => {
  return (
    <div className="container md:max-w-7xl items-center px-4 py-8 m-auto mt-5 sm:max-w-4xl">
      <div className="text-center items-center py-14">
        <h3 className="text-xl font-bold font-mono tracking-widest">
          Our Portfolio
        </h3>
        <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          Latest Projects We Have Done
        </h2>
      </div>
      <div className="hidden md:block">
        <CarouselSpacing />
      </div>
      <div className="md:hidden flex items-center justify-center">
        <CarouselSpacing />
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link href={'/'}><Button>View All</Button></Link>
      </div>
    </div> 
  );
};

export default Portfolio;
