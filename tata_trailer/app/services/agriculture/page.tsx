const content = [
  {
    title: "Tata Trailer Agriculture Equipment Transport Services",
    description: (
      <>
        <p>
          Tata Trailer Agricultural Equipment Transport Services specializes in
          the logistics and transportation of heavy agricultural machinery via
          road. Our extensive fleet of modern trailers and heavy-duty vehicles
          ensures that we can handle the transport of machinery of all sizes and
          weights with utmost efficiency and safety.
        </p>
        <br />
        <p>
          Our services include the transportation of oversized farm equipment,
          relocation of entire agricultural operations, and the delivery of
          machinery to remote rural locations. We adhere to the highest
          standards of safety and regulatory compliance, ensuring that your
          equipment arrives at its destination on time and in perfect condition.
        </p>
        <br />
        <p>
          With years of experience in the logistics industry, Tata Trailer is
          your trusted partner for all your agricultural transport needs. Our
          team of skilled professionals is dedicated to providing personalized
          service and support, ensuring a seamless transport experience from
          start to finish.
        </p>
      </>
    ),

    image: "/assets/portfolio/22.jpeg",
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
            Agriculture Equipment Transport
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
