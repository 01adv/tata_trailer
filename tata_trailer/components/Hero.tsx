import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden h-screen w-full pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src={"/assets/truck.jpg"}
          alt="truck"
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="absolute w-full bg-black/40 inset-0 flex flex-col justify-center mx-4">
        <div className=" flex items-center justify-center p-8">
          <div className=" max-w-4xl p-10">
            <p
              className=" text-green-400 uppercase leading-3 text-center font-mono"
              style={{ letterSpacing: "0.4rem" }}
            >
              Intelligent designed{" "}
              <span className=" text-white">transportation solutions</span>
            </p>
            <h1 className="text-7xl font-bold font-serif text-center text-orange-500 leading-tight">
              We Provide Safest{" "}
              <span className="text-white">Transport & Logistics</span>{" "}
              <span className="text-green-500">Solutions.</span>
            </h1>
            <p className=" font-mono text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              corporis cum possimus totam ipsa exercitationem nisi culpa dicta
              rem id?
            </p>
            <div className="bg-white h-0.5 mt-3"></div>
            <div className="flex items-center justify-center mt-10 gap-4">
              <Button className="text-lg px-8 bg-red-500">Ship with us</Button>
              <Button className="text-lg px-8 bg-white text-red-500">
                Haul for us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
