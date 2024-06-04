import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 space-y-4 sm:px-4 xl:w-1/2">
                  <div className="relative py-3 sm:py-4 h-40 md:h-72">
                    <Image
                      src="/assets/trailer.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      fill
                    />
                  </div>
                  <div className="relative py-3 sm:py-4 h-40 md:h-72">
                    <Image
                      src="/assets/trailer.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      fill
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2 h-60 md:h-96">
                  <div className="relative z-10 my-4  h-full">
                    <Image
                      src="/assets/trailer.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <div className=" flex items-center justify-center">
                  <h3 className="text-xl font-bold font-mono tracking-widest">
                    Why Choose Us
                  </h3>
                </div>
                <div className=" w-full flex items-center justify-center">
                  <h2 className="font-serif text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 mb-4">
                    Make your customers happy by giving services
                  </h2>
                </div>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
