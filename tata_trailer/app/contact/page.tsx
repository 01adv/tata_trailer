import HorizontalStrip from "@/components/HorizontalStrip";
import { contactCardsData } from "@/constants";
import Image from "next/image";

const Page = () => {
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
          Contact Us
          </h2>
          <p className="font-medium text-orange-500 text-center">
          Transportation and Logistic Specialist with a vision of future
          </p>
        </div>
      </div>
      <div className="my-16">
        <HorizontalStrip />
      </div>
      <div className="my-20">
        <div className="text-center w-full py-10">
          <p className="text-center mb-2 text-base sm:text-lg font-bold text-orange-500">
            Contact Us
          </p>
          <h2 className="mb-4 font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
            Our Contact Information
          </h2>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-8">
          {contactCardsData.map((card, index) => (
            <div
              key={index}
              className={`w-80 h-72 bg-white shadow-lg flex justify-center items-center overflow-hidden rounded-lg`}
            >
              <div className="text-center p-4">
                <div className="flex justify-center items-center p-2">
                  <card.icon className=" text-white bg-orange-500 p-4 rounded-full size-20" />
                </div>
                <p className="text-sm text-gray-700 overflow-hidden overflow-ellipsis">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[60vh] my-32">
        <iframe
          title="Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.69958556410736!2d-122.07954668507607!3d37.38934657980193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806b58ebc199%3A0x886f5f5da69fe99d!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1631268970940!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
