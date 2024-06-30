const content = [
  {
    title: "Tata Trailer Office Moving Services",
    description: (
      <>
        <p>
          Tata Trailer Office Moving Services specializes in the efficient and
          seamless relocation of office spaces. Whether you are moving to a new
          building across town or relocating to a different city, our
          experienced team and modern fleet ensure that your office equipment
          and furniture are transported safely and securely.
        </p>
        <br />
        <p>
          Our services include packing and unpacking, disassembly and reassembly
          of office furniture, and secure transportation of all office items,
          including computers, documents, and equipment. We adhere to the
          highest standards of care and professionalism, ensuring that your
          office setup is operational at the new location with minimal downtime.
        </p>
        <br />
        <p>
          With years of experience in the logistics industry, Tata Trailer is
          your trusted partner for all your office moving needs. Our team of
          skilled professionals is dedicated to providing personalized service
          and support, ensuring a smooth and stress-free relocation experience
          from start to finish.
        </p>
      </>
    ),

    image: "/assets/portfolio/29.jpg",
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
          fill
          objectFit="center"
          loading="lazy"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "> </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-4xl sm:6xl md:text-8xl text-white text-center">
            Office Moving Services
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
