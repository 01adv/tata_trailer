import Faq from "@/components/Faq";
import HorizontalStrip from "@/components/HorizontalStrip";
import QuoteV0 from "@/components/Quote-v0";
import ServiceSection from "@/components/ServiceSection";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[65vh]  flex justify-center items-center">
        <Image
          src="/assets/services.jpg" // Path to the image
          alt="Services Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
          
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "> </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-4xl sm:6xl md:text-8xl text-white text-center">
            Services
          </h2>
          <p className="font-medium text-orange-500 text-center">
            Innovative Logistic Services
          </p>
        </div>
      </div>
      {/* <ServiceCard /> */}
      <div className="py-16">
        <HorizontalStrip />
      </div>
      <ServiceSection />
      <QuoteV0 />
      <Faq />
      {/* <QuoteRequestForm /> */}
    </div>
  );
};

export default page;
