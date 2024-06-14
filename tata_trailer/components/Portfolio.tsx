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
import { PortfolioHeading } from "./heading";
import { portfolioImages } from "@/constants";

// Carousel Component
export function CarouselSpacing() {
  const cardItems = portfolioImages.map((cards, index) => (
    <CarouselItem
      key={index}
      className="pl-1  sm:basis-full md:basis-1/2 lg:basis-1/3 transition-all duration-800 ease-in-out hover:scale-110"
    >
      <div className="p-4">
        <UICard>
          <CardContent className="flex aspect-square items-center justify-center p-6 ">
            <Card imgUrl={cards.img} />
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
  return (
    <div className="container md:max-w-7xl items-center px-4 py-8 m-auto mt-5 sm:max-w-4xl ">
      <div className="text-center items-center">
        <PortfolioHeading />
      </div>
      <div className="hidden md:block">
        <CarouselSpacing />
      </div>
      <div className="md:hidden flex items-center justify-center">
        <CarouselSpacing />
      </div>
      <div className="flex items-center justify-center ">
        <Link href={"/"}>
          <Button>View All</Button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
