import Image from "next/image";
import { HeroHeading } from "./heading";

const Hero2 = () => {
  return (
    <div className="relative h-[80vh] md:h-screen w-full pt-32">
      <div className="absolute inset-0">
        <Image
          src={"/assets/truck.jpg"}
          alt="truck"
          fill
          objectFit="cover"
          loading="eager"
          className="z-0"
        />
      </div>
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-slate-700/40 z-10"></div>
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="h-full w-full max-w-7xl mx-auto p-4 md:pt-10 flex items-start text-start">
          <div className=" sm:w-4/5 md:w-2/3 md:pl-4 pr-20 sm:px-10 md:px-5">
            <HeroHeading />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero2;
