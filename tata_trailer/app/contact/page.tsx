import QuoteForm from "@/components/QuoteForm";
import {
  LucidePhone,
  MailIcon,
  MapPinIcon,
  PhoneCall,
  PhoneIcon,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className=" w-full">
      <div className=" w-full h-[65vh] bg-rose-200 flex justify-center items-center">
        <div>
          <h2 className=" font-semibold text-6xl text-white text-center">
            Contact Us
          </h2>
          <p className=" font-medium text-orange-500 text-center">
            Transportation and Logistic Specialist with a vision of future.
          </p>
        </div>
      </div>
      <div className="py-32">
        <div className=" text-center w-full py-10">
          <h3 className=" text-xl font-bold text-orange-500 font-mono tracking-widest">
            Contact Us
          </h3>
          <h2 className=" font-serif text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-emerald-500">
            Our<span className="mx-4">Contact</span>Information
          </h2>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-8">
          <div className=" w-80 h-72 bg-white shadow-lg   flex justify-center items-center">
            <div className=" text-center p-4">
              <div className="flex justify-center items-center p-2">
                <MapPinIcon className=" text-white bg-orange-500 p-4 rounded-full size-20" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                asperiores?asperiores?asperiores?asperiores?
              </p>
            </div>
          </div>
          <div className=" w-80 h-72 bg-white flex shadow-lg   justify-center items-center">
            <div className=" text-center p-4">
              <div className="flex justify-center items-center p-2">
                <PhoneCall className=" text-white bg-orange-500 p-4 rounded-full size-20" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                asperiores?asperiores?asperiores?asperiores?
              </p>
            </div>
          </div>
          <div className=" w-80 h-72 bg-white shadow-lg   flex justify-center items-center">
            <div className=" text-center p-4">
              <div className="flex justify-center items-center p-2">
                <MailIcon className=" text-white bg-orange-500 p-4 rounded-full size-20" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                asperiores?asperiores?asperiores?asperiores?
              </p>
            </div>
          </div>
        </div>
      </div>
      <QuoteForm />

      <div className=" w-full h-[60vh]  my-32">
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

export default page;
