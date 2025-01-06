
import worldImage from "@/public/assets/world.jpg";
import Image from "next/image";
import { AccordionFaq } from "./AccordionSection";
import { FaqHeading } from "./heading";

const Faq = () => {
  return (
    <div className="w-full my-32">
      <div className="w-full flex items-center justify-center relative">
        {/* Content Section */}
        <div className=" z-20 px-10 md:px-20 py-32 w-full max-w-6xl mx-auto">
          <FaqHeading />
          <div>
            <AccordionFaq />
          </div>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={worldImage}
            alt="Background Image"
            layout="fill"
            className="opacity-15 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
