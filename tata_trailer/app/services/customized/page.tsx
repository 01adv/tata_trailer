const content = [
  {
    title: "Tata Trailor Customized Logistics Services",
    description: (
      <>
        <p>
          Tata Trailor Industrial Machinery Transport Services offers a
          comprehensive solution for transporting heavy industrial machinery via
          road. Our fleet of state-of-the-art trailers and robust vehicles
          ensures the safe and efficient movement of machinery, regardless of
          size or weight.
        </p>
        <br />
        <p>
          We specialize in the transportation of oversized and over-dimensional
          equipment, factory relocations, and the delivery of construction
          machinery to challenging and remote sites. Adhering to the highest
          standards of safety and regulatory compliance, we guarantee that your
          machinery will reach its destination promptly and in perfect
          condition.
        </p>
        <br />
        <p>
          With extensive experience in the logistics sector, Tata Trailor is
          your reliable partner for all your heavy transport needs. Our expert
          team is committed to delivering personalized service and comprehensive
          support, ensuring a seamless and hassle-free transport experience from
          beginning to end.
        </p>
      </>
    ),

    image: "/assets/portfolio/14.jpeg",
  },
];

import HorizontalStrip from "@/components/HorizontalStrip";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="relative w-full h-[65vh]  flex justify-center items-center">
        <Image
          src="/assets/services.jpg" // Path to the image
          alt="Services Background"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "> </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-4xl sm:6xl md:text-8xl text-white text-center">
            Customized Logistics Services
          </h2>
          <p className="font-medium text-orange-500 text-center">
            Innovative Logistic Services
          </p>
        </div>
      </div>
      <div className="pt-40 max-w-7xl mx-auto">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className=" text-2xl md:text-4xl mb-4 font-semibold text-center">
              {item.title}
            </p>
            <div className=" text-lg">
              {item?.image && (
                <div className=" px-8 relative h-[90vh] rounded-lg ">
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    fill
                    objectFit="center"
                    className="rounded-lg h-[70vh] mb-10 object-cover px-8"
                  />
                </div>
              )}
              <div className=" my-20 max-w-5xl mx-auto px-8 md:px-4">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <HorizontalStrip />
    </div>
  );
};

export default page;
