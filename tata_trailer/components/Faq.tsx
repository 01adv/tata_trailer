import worldImage from "@/public/assets/world.jpg";
import Image from "next/image";
import { AccordionFaq } from "./AccordionSection";

const Faq = () => {
  return (
    <div className=" w-full py-32">
      <div className=" w-full flex relative">
        <div className=" max-w-7xl mx-auto z-20 px-20 py-32">
          <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
            Frequently <span className=" text-orange-500">Asked</span> Questions
          </h2>
          <div className=" ">

          <AccordionFaq />
          </div>
        </div>
        <div className=" z-0">
          <Image
            src={worldImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className=" opacity-15 shadow-lg border-t-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
