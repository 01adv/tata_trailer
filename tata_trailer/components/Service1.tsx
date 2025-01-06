import Image from "next/image";
import React from "react";

const Service1 = () => {
  return (
    <div className=" mx-auto max-w-7xl p-10 md:p-0 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-10">
        <div className="space-y-10 md:px-10">
          <div className=" h-72 relative">
            <Image
              src="/assets/image.png"
              alt="service image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" h-72 relative">
            <Image
              src="/assets/image.png"
              alt="service image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="mx-auto">
              <h1 className="text-5xl  text-orange-600 mb-8">
                Cargo Insurance To Cover <span className="text-green-400">Your Freight Shipment</span>
              </h1>
              <p className="text-gray-700 mb-6">
                At Cargoly Transport we pride ourselves on being a reliable and
                efficient transportation services provider. With many years of
                experience in the industry we have built a reputation for
                <span className="font-bold text-orange-600">
                  {" "}
                  delivering quality services{" "}
                </span>
                to our clients, and we go above and beyond to exceed
                expectations.
              </p>
              <ul className=" mb-6">
                <li className="text-gray-700 mb-2 font-semibold">
                  <span className="font-bold text-2xl text-green-600">•</span> Domestic
                  and international customized transport solutions
                </li>
                <li className="text-gray-700 font-semibold mb-2">
                  <span className="font-bold text-2xl text-green-600">•</span> We have
                  stable capacities (trucks & trailors) and dedicated resources
                </li>
                <li className="text-gray-700 font-semibold">
                  <span className="font-bold text-2xl text-green-600">•</span> Low-carbon
                  solutions: Transportation to reduce carbon footprint
                </li>
              </ul>
              <p className="text-gray-700 mb-8">
                Cargo Insurance is designed specifically to address your needs
                and protect the value of your cargo and cover legal liability.
                Tortor dignissim convallis aenean et tortor at risus viverra
                adipiscing. Est ultricies integer quis auctor elit sed vulputate
                mi. Sit amet facilisis magna etiam tempor orci.
              </p>

              <hr className="my-10 border-2 shadow-md border-gray-200" />
              <div className="flex justify-around">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-orange-500">
                    44
                  </span>
                  <span className="text-gray-700">Years in Business</span>
                  <span className="block text-gray-500">Started In 1979</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold text-orange-500">
                    26
                  </span>
                  <span className="text-gray-700">
                    Dedicated Truck Drivers Working
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
