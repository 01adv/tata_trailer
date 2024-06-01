import React from "react";
import image from "@/public/assets/truck2.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Card = () => {
  return (
    <div className="w-full bg-white rounded-lg  dark:bg-gray-800">
      <Link href="/">
        {/* <img className="rounded-t-lg" src={image.src} alt="" /> */}
        <div className="mx-auto mb-4 w-full h-48 relative">
          <Image
            className="rounded-t-lg"
            src={"/assets/trailer.jpg"}
            alt={`Avatar`}
            fill

          />
        </div>
      </Link>

      <div className="">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Button className="bg-orange-500 hover:bg-gray-100 hover:text-black">
        Read more
          <ArrowRight size={15} />
        </Button>
      </div>
    </div>
  );
};

export default Card;
