import HorizontalStrip from "@/components/HorizontalStrip";
import QuoteV0 from "@/components/Quote-v0";
import { ContactHeading } from "@/components/heading";
import { contactCardsData } from "@/constants";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[65vh] flex justify-center items-center">
        <Image
          src="/assets/services.jpg" // Path to the image
          alt="Services Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"> </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-4xl sm:text-6xl md:text-8xl text-white text-center">
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
          <ContactHeading />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-8">
          {contactCardsData.map((card, index) => (
            <div
              key={index}
              className="w-80 h-32 p-4 border-[1px] border-slate-300 relative overflow-hidden group bg-white rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-emerald-100 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
              <card.icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
              <card.icon className="mb-2 text-2xl text-orange-600 group-hover:text-white transition-colors relative z-10 duration-300" />
              <p className="text-slate-700 group-hover:text-gray-800 relative z-10 duration-300">
                {card.description}
              </p>
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

      <QuoteV0 />
    </div>
  );
};

export default Page;
