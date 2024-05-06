import React from "react";
import { Button } from "./ui/button";
import { MessageCircleQuestion } from "lucide-react";
import Image from "next/image";
import img from "@/public/assets/truck2.jpg";

const ServiceCard = () => {
  return (
    <div>
      <div className=" mt-40 flex items-center justify-center">
        <h3 className=" text-xl font-bold font-mono tracking-widest">
          What We Provide
        </h3>
      </div>
      <div className=" mt-2 w-full flex items-center justify-center">
        <h2 className=" font-serif text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          Popular<span className="mx-4">Logistics</span> Services
        </h2>
      </div>
      <div className=" h-auto w-full mt-10 flex items-center justify-center gap-8 ">
        <div className="relative flex flex-col justify-center overflow-hidden">
          <div className="group relative cursor-pointer overflow-hidden w-96 h-80 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-red-400">
              <Image
                src={img}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-1000 group-hover:opacity-70"></div>
            <div className="relative z-20 mx-auto max-w-md">
              <div className="space-y-6 pt-16 text-sm font-medium leading-7 hidden transition-all duration-500 group-hover:text-white/90 group-hover:block">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a href="#">Know more &rarr;</a>
                  </p>
                </div>
              </div>
              <div className="absolute top-56 left-0 right-0 text-center text-base font-semibold leading-7 text-white group-hover:hidden transition-all duration-500  ">
                <h3 className=" font-bold text-lg">Freight Fowarding</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden">
          <div className="group relative cursor-pointer overflow-hidden w-96 h-80 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-red-400">
              <Image
                src={img}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-1000 group-hover:opacity-70"></div>
            <div className="relative z-20 mx-auto max-w-md">
              <div className="space-y-6 pt-16 text-sm font-medium leading-7 hidden transition-all duration-500 group-hover:text-white/90 group-hover:block">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a href="#">Know more &rarr;</a>
                  </p>
                </div>
              </div>
              <div className="absolute top-56 left-0 right-0 text-center text-base font-semibold leading-7 text-white group-hover:hidden transition-all duration-500  ">
                <h3 className=" font-bold text-lg">Freight Fowarding</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden">
          <div className="group relative cursor-pointer overflow-hidden w-96 h-80 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-red-400">
              <Image
                src={img}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-1000 group-hover:opacity-70"></div>
            <div className="relative z-20 mx-auto max-w-md">
              <div className="space-y-6 pt-16 text-sm font-medium leading-7 hidden transition-all duration-500 group-hover:text-white group-hover:block">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a href="#">Know more &rarr;</a>
                  </p>
                </div>
              </div>
              <div className="absolute top-56 left-0 right-0 text-center text-base font-semibold leading-7 text-white group-hover:hidden transition-all duration-500  ">
                <h3 className=" font-bold text-lg tracking-wide">
                  Freight Fowarding
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-9">
        <div className=" flex items-center justify-center">
          <Button className="bg-orange-500 px-6 rounded-none font-semibold tracking-wide text-sm shadow-md hover:bg-green-500">
            View All
          </Button>
        </div>
        <p className=" text-center tracking-wide font-medium pt-1">
          We provide customized transport services.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
