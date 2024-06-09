import worldImage from "@/public/assets/world.jpg";
import Image from "next/image";
import { AccordionFaq } from "./AccordionSection";
import { FaqHeading } from "./heading";

const Faq = () => {
  return (
    <div className=" w-full py-32">
      <div className=" w-full flex relative">
        <div className=" max-w-7xl mx-auto z-20 px-20 py-32">
          <FaqHeading />
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
