import { servicesData } from "@/constants";
import Link from "next/link";
import { CarouselSpacing } from "./CarouselSpacing"; // Import the CarouselSpacing component
import { Button } from "./ui/button";

const ServiceCard = () => {
  // Array containing data for each service card
  

  return (
    <div className="container md:max-w-7xl items-center px-4  m-auto sm:max-w-4xl">
      <div className="mt-32 flex items-center justify-center">
        <h3 className="text-xl font-bold font-mono tracking-widest">
          What We Provide
        </h3>
      </div>
      <div className="mt-2 w-full flex items-center justify-center">
        <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          Popular<span className="mx-4">Logistics</span> Services
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10 w-full">
        <CarouselSpacing serviceData={servicesData}/>
      </div>
      <div className="p-9">
        <div className="flex items-center justify-center">
          <Link href={'/services'}><Button >
            View All
          </Button></Link>
        </div>
        <p className="text-center tracking-wide font-medium pt-2">
          We provide customized transport services.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
