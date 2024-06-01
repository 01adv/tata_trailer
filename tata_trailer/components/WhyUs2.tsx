import {
  CalendarCheck,
  Clock10,
  IndianRupeeIcon,
  ShieldCheck,
} from "lucide-react";
import { Button } from "./ui/button";

const WhyUs2 = () => {
  return (
    <div className="container items-center px-4 py-8 m-auto mt-5">
      <div className="text-center items-center py-14">
        <p className=" text-xl font-mono text-black text-center font-semibold">
          What else we can do for you
        </p>
        <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          More than just a Transporter
        </h2>
      </div>
      <div className="flex flex-wrap pb-3 mx-12 md:mx-24 lg:mx-0">
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div
            className="flex flex-col items-center justify-center text-center px-4 py-16 bg-white rounded-xl shadow-lg
                 duration-300 hover:bg-gray-50 hover:shadow-2xl group"
          >
            <span className="items-center px-4 py-4 mx-auto bg-indigo-50 rounded-full group-hover:bg-indigo-100">
              <ShieldCheck size={35} />
            </span>
            <div className="text-xl font-semibold text-gray-700 mt-6">
              Safe and efficient Delivery
            </div>
            <div className="text-sm text-gray-500 mt-3 px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              quidem laudantium.
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div
            className="flex flex-col items-center justify-center text-center px-4 py-16 bg-white rounded-xl shadow-lg
                duration-300 hover:bg-gray-50 hover:shadow-2xl group"
          >
            <span className="items-center px-4 py-4 mx-auto bg-pink-50 rounded-full group-hover:bg-pink-100">
              <Clock10 size={35} />
            </span>
            <div className="text-xl font-semibold text-gray-700 mt-6">
              Time tracking
            </div>
            <div className="text-sm text-gray-500 mt-3 px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              commodi esse.
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div
            className="flex flex-col items-center justify-center text-center px-4 py-16 bg-white rounded-xl shadow-lg
                 duration-300 hover:bg-gray-50 hover:shadow-2xl group"
          >
            <span className="items-center px-4 py-4 mx-auto bg-purple-50 rounded-full group-hover:bg-purple-100">
              <CalendarCheck size={35} />
            </span>
            <div className="text-xl font-semibold text-gray-700 mt-6">
              Resource planning
            </div>
            <div className="text-sm text-gray-500 mt-3 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quis debitis quo.
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2">
          <div
            className="flex flex-col items-center justify-center text-center px-4 py-16 bg-white rounded-xl shadow-lg
      duration-300 hover:bg-gray-50 hover:shadow-2xl group"
          >
            <span className="items-center px-4 py-4 mx-auto bg-green-50 rounded-full group-hover:bg-green-100">
              <IndianRupeeIcon size={35} />
            </span>
            <div className="text-xl font-semibold text-gray-700 mt-6">
              Invoicing
            </div>
            <div className="text-sm text-gray-500 mt-3 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              placeat?
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <Button>View all features</Button>
      </div>
    </div>
  );
};

export default WhyUs2;
