import React from "react";
import { CalendarClock, HeadsetIcon, MapPinnedIcon } from "lucide-react";
import { Button } from "./ui/button";
import ServiceCard from "./ServiceCard";

const Nxthero = () => {
  return (
    <div className=" w-full  bg-gradient-to-br from-green-100 via-orange-100 to-white">
      <div className="relative max-w-7xl mx-auto bg-white h-32 -mt-8 rounded-full">
        <div className="w-full h-full flex items-center justify-evenly">
          <div className="flex gap-2">
            <HeadsetIcon className=" size-16 text-orange-500" />
            <div>
              <h3 className="  text-gray-400 mb-3">Connect with us</h3>
              <p className="font-bold">(+91)9090-909090</p>
            </div>
          </div>
          <div className="flex gap-2">
            <CalendarClock className=" size-16 text-gray-500" />
            <div>
              <h3 className="  text-gray-400 mb-3">Open full week</h3>
              <p className="font-bold">Let's work anytime.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapPinnedIcon className=" size-16 text-green-400" />
            <div>
              <h3 className=" text-gray-400 mb-3">
                Pantnagar, Industrial Area
              </h3>
              <p className=" font-bold">India, Uttrakhand 263153</p>
            </div>
          </div>
        </div>
      </div>
      
      <ServiceCard/>
    </div>
  );
};

export default Nxthero;
