import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselDemo = ({ items, renderItem }: any) => (
  <Carousel className="w-full max-w-xs">
    <CarouselContent className="pb-5 sm:pb-10">
      {items.map((item: any, index: any) => (
        <CarouselItem key={index}>
          <div className="p-1">{renderItem(item, index)}</div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="" />
    <CarouselNext className="" />
  </Carousel>
);

export default CarouselDemo;
