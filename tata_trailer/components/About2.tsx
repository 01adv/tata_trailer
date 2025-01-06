'use client';
import React from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { animated } from "react-spring";

const AboutTataTrailer = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");

  return (
    <animated.div ref={refMove} style={animationPropsMove}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tata Trailer Service and Transport
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                A trusted name in logistics, specializing in transporting heavy-load ODC materials across India and neighboring nations like Bhutan, Nepal, Bangladesh, and others with unmatched reliability and efficiency.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Years of Experience
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  10+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Fleet Vehicles
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  500+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Nationwide Deliveries
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  28 States
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Customer Satisfaction
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  98%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default AboutTataTrailer;
