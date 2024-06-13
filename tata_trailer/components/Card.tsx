import React from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

const Card = ({ imgUrl, onZoom }:any) => {
  return (
    <div className="relative w-full h-full bg-green-100 rounded-lg dark:bg-gray-800">
      <div className="relative mx-auto mb-4 w-full h-full">
        <Image
          className="rounded-t-lg"
          src={imgUrl}
          alt="Avatar"
          fill
          loading="lazy"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
          <ZoomIn
            className="text-white text-3xl cursor-pointer"
            onClick={onZoom}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
