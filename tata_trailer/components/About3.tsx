import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const About3 = () => {
  return (
    <div className="bg-emerald-100 py-20 mb-10">
      <div className=" max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 px-10">
        <div className=" py-10 rounded-lg">
          <h1 className="text-3xl md:text-5xl text-start text-gray-800">
            <span className=" text-orange-500 font-bold">What Makes Our</span>{" "}
            Global Transportation Company Different?
          </h1>
          <div className="flex justify-start items-center pt-10">
            <Button >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="rounded-lg py-10">
          <p className=" text-gray-600 pb-4">
            At Tata Trailor Transport we pride ourselves on being a reliable and
            efficient transportation services provider. With many years of
            experience in the industry we have built a reputation for{" "}
            <span className=" text-orange-500 font-bold">
              delivering quality services
            </span>
            to our clients, and we go above and beyond to exceed expectations.
          </p>
          <hr className="border-1 border-gray-300 shadow-xl shadow-gray-800" />
          <ul className="flex flex-wrap gap-6 justify-evenly pt-5">
            <li className="flex items-center gap-2 font-semibold">
              <span className=" bg-green-500 rounded-full p-1 text-white">
                <Check className=" size-4" />
              </span>
              Speed of Transportation
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <span className=" bg-green-500 rounded-full p-1 text-white">
                <Check className=" size-4" />
              </span>
              Network of Destinations
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <span className=" bg-green-500 rounded-full p-1 text-white">
                <Check className=" size-4" />
              </span>
              Reduced Storage Requirements
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <span className=" bg-green-500 rounded-full p-1 text-white">
                <Check className=" size-4" />
              </span>
              Cost-effective Transportation
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <span className=" bg-green-500 rounded-full p-1 text-white">
                <Check className=" size-4" />
              </span>
              Highly Reliable Service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About3;
