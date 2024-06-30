const content = [
  {
    title: "Tata Trailer Warehouse Shifting Services",
    description: (
      <>
        <p>
          Tata Trailer Warehouse Shifting Services specializes in the efficient
          and seamless relocation of warehouses. Whether you are moving to a
          larger facility or a new location, our experienced team and modern
          fleet ensure that your inventory and equipment are transported safely
          and securely.
        </p>
        <br />
        <p>
          Our services include inventory management, packing and unpacking,
          loading and unloading, and secure transportation of all warehouse
          items, including heavy machinery, shelving units, and stock. We adhere
          to the highest standards of safety and professionalism, ensuring that
          your warehouse is set up and operational at the new location with
          minimal disruption.
        </p>
        <br />
        <p>
          With years of experience in the logistics industry, Tata Trailer is
          your trusted partner for all your warehouse shifting needs. Our team
          of skilled professionals is dedicated to providing personalized
          service and support, ensuring a smooth and stress-free relocation
          experience from start to finish.
        </p>
      </>
    ),

    image: "/assets/portfolio/27.jpg",
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
            Warehouse Shifting Services
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
