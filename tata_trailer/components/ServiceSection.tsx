import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/constants";
import { ServiceHeading } from "./heading";

const ServiceSection: React.FC = () => {
  return (
    <div className="pt-16 pb-32 space-y-24">
      <div className="text-center">
        <ServiceHeading />
      </div>

      <div className="container mx-auto space-y-14">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={` h-screen flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
          >
            <div className=" w-full md:w-1/2 p-6 h-[80vh] relative">
              <Image
                src={service.imgSrc}
                alt={service.imgAlt}
                fill
                className="w-full rounded-lg"
                loading="lazy"
                objectFit="cover"
              />
            </div>
            <div className="md:w-1/2 p-6 text-center md:text-left">
              <h2 className={`text-3xl font-bold mb-4 ${service.bgColor}`}>
                {service.title}
              </h2>
              <p className="text-lg text-gray-700">{service.description}</p>
              <div className="mt-6">
                <Link href={service.btnLink}>
                  <Button>{service.btnText}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
