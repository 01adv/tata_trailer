import About1 from "@/components/About1";
import About2 from "@/components/About2";
import About3 from "@/components/About3";
import HorizontalStrip from "@/components/HorizontalStrip";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="">
      
        <div className="relative w-full h-[65vh] flex justify-center items-center">
          <Image
            src="/assets/services.jpg" // Path to the image
            alt="Services Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm ">
            {" "}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="font-semibold text-4xl sm:6xl md:text-8xl text-white text-center">
              About Us
            </h2>
            <p className="font-medium text-orange-500 text-center">
              Transportation and Logistic Specialist with a vision of future
            </p>
          </div>
        </div>
      </div>
      <div className="py-16">
        <HorizontalStrip/>
      </div>
      <About1 />
      <About2 />
      <About3 />
    </main>
  );
}
