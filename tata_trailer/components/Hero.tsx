import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full pt-20">
      {/* Background Image */}
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
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className=" h-full max-w-md sm:max-w-lg md:max-w-4xl  p-4 md:p-10 text-center flex items-center justify-center">
          <div>
            <p
              className="text-green-400 uppercase font-mono text-sm sm:text-base md:text-lg lg:text-lg"
              style={{ letterSpacing: "0.4rem" }}
            >
              Intelligent designed{" "}
              <span className="text-white">transportation solutions</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-bold font-serif text-orange-500 leading-tight">
              We Provide Safest{" "}
              <span className="text-white">Transport & Logistics</span>{" "}
              <span className="text-green-500">Solutions</span>
            </h1>
            <p className="font-mono text-white text-sm sm:text-base md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              corporis cum possimus totam ipsa exercitationem nisi culpa dicta
              rem id?
            </p>
            <div className="bg-white h-0.5 mt-3"></div>
            <div className="flex items-center justify-center mt-6 md:mt-10 gap-4 flex-col sm:flex-row">
              <Button className=" bg-orange-500 font-medium hover:bg-white hover:text-black">
                Ship with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
