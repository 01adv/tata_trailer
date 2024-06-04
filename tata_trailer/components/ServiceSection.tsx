import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/constants";

const ServiceSection: React.FC = () => {
  return (
    <div className="pt-16 pb-32 space-y-24">
      <div className="text-center">
        <p className="mb-2 text-base sm:text-lg font-bold text-black font-mono">
          What we Provide
        </p>
        <h2 className="mb-4 font-serif text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          Our Popular Services
        </h2>
      </div>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          } items-center lg:items-start mx-auto max-w-7xl gap-8 px-8`}
        >
          <div className="flex-1 max-w-xl px-6 lg:py-16">
            <div className="flex items-center space-x-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.bgColor}`}
              >
                <service.icon className="sm:size-16 md:size-20" />
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
                {service.title}
              </h2>
            </div>
            <p className="mt-4 text-lg text-gray-600">{service.description}</p>
            <div className="mt-6">
              <Link href={service.btnLink}>
                <Button>{service.btnText}</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full relative rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 overflow-hidden">
              <Image
                loading="lazy"
                className="rounded-xl"
                src={service.imgSrc}
                alt={service.imgAlt}
                layout="responsive"
                width={700}
                height={475}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
