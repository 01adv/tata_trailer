"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { animated } from "react-spring";

const AboutComp = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div ref={refMove} style={animationPropsMove}>
      <section className=" mx-auto max-w-7xl pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 space-y-4 sm:px-4 xl:w-1/2">
                  <div className="relative py-3 sm:py-4 h-40 md:h-72">
                    <Image
                      src="/assets/abt.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      fill
                      loading="lazy"
                    />
                  </div>
                  <div className="relative py-3 sm:py-4 h-40 md:h-72">
                    <Image
                      src="/assets/abt2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      fill
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2 h-60 md:h-96">
                  <div className="relative z-10 my-4  h-full">
                    <Image
                      src="/assets/abt3.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl"
                      layout="fill"
                      loading="lazy"
                      objectFit="center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="mt-10 lg:mt-0">
                <span className="text-xl font-mono text-black text-center pb-3 font-semibold">
                  About Us
                </span>
                <h2 className="font-serif mb-3 md:mb-5 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
                  India&apos;s Leading Contract Logistics Provider
                </h2>
                <p className="">
                  Tata Trailor Service and Transport, established over a decade
                  ago, is a renowned name in the logistics and transport
                  industry in India. As fleet owners and transport contractors,
                  we specialize in carrying heavy-load ODC (Over Dimensional
                  Cargo) materials using open flat frame trucks and trailors.
                  Our services are available nationwide, operating on any road,
                  at any time, and to any location in India.
                </p>
                <p className="mt-4">
                  We pride ourselves on our expertise in handling heavy and
                  bulky consignments, utilizing our own fleet of vehicles. Our
                  commitment to excellence has earned us a reputation for
                  reliability and efficiency in the transportation of oversized
                  cargo, ensuring timely delivery and customer satisfaction.
                </p>
                <p className="mt-4">
                  Our services extend beyond transportation; we offer trailor
                  services, ensuring that your goods are delivered securely and
                  efficiently. With a focus on safety and reliability, we
                  provide comprehensive solutions for transporting goods of all
                  sizes and types.
                </p>
                <p className="mt-4">
                  Tata Trailor Service and Transport is committed to delivering
                  superior service and solutions tailored to meet the unique
                  needs of each customer. Whether it is a one-time shipment or
                  ongoing logistics support, we are dedicated to exceeding your
                  expectations.
                </p>
                <Link href={"/about"}>
                  <Button>Know More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </animated.div>
  );
};

export default AboutComp;
