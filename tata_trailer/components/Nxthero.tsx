"use client";
import React from "react";
import { CalendarClock, HeadsetIcon, MapPinnedIcon } from "lucide-react";
import { Button } from "./ui/button";
import ServiceCard from "./ServiceCard";
import HorizontalStrip from "./HorizontalStrip";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { animated } from "react-spring";

const Nxthero = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <>
      <div className=" w-full">
        <div className="relative max-w-7xl mx-auto bg-white h-auto md:h-32 mt-20 md:-mt-8 md:rounded-full z-30">
          <div className="w-full h-full flex items-center justify-center md:justify-evenly flex-wrap gap-5">
            <div className="flex gap-2 px-10 py-5">
              <HeadsetIcon className=" size-8 sm:size-10 md:size-12 lg:size-16 text-orange-500" />
              <div>
                <h3 className="  text-gray-800 mb-3">Connect with us</h3>
                <p className="font-bold">(+91)9090-909090</p>
              </div>
            </div>
            <div className="flex gap-2 px-10 py-5">
              <CalendarClock className="size-8 sm:size-10 md:size-12 lg:size-16 text-gray-500" />
              <div>
                <h3 className="  text-gray-800 mb-3">Open full week</h3>
                <p className="font-bold">Le&apos;'s work anytime.</p>
              </div>
            </div>
            <div className="flex gap-2 px-10 py-5">
              <MapPinnedIcon className=" size-8 sm:size-10 md:size-12 lg:size-16 text-green-400" />
              <div>
                <h3 className=" text-gray-800 mb-3">
                  Pantnagar, Industrial Area
                </h3>
                <p className=" font-bold">India, Uttrakhand 263153</p>
              </div>
            </div>
          </div>
        </div>

        <animated.div ref={refMove} style={animationPropsMove}>
          <ServiceCard />
        </animated.div>
        <div className="pb-10">
          <HorizontalStrip />
        </div>
      </div>
    </>
  );
};

export default Nxthero;
