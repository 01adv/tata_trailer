import HorizontalStrip from "@/components/HorizontalStrip";
import Service1 from "@/components/Service1";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className=" w-full">
      <div className=" w-full h-[65vh] bg-rose-200 flex justify-center items-center">
        <div>
          <h2 className=" font-semibold text-6xl text-white text-center">
            Service Details
          </h2>
          <p className=" font-medium text-orange-500 text-center">
            Freight Forwarding Services
          </p>
        </div>
      </div>
      <div className=" py-32">
        <div className="bg-emerald-100 py-20 mb-10">
          <div className=" max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 px-10">
            <div className=" py-10 rounded-lg">
              <h1 className="text-6xl text-start text-gray-800">
                <span className=" text-orange-500 font-bold">
                  We are Great at
                </span>{" "}
                Freight forwarding and Management
              </h1>
              <div className="flex justify-start items-center pt-10">
                <Button>
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="rounded-lg py-10">
              <p className=" text-gray-600 pb-4">
                At Tata Trailor Transport we pride ourselves on being a reliable
                and efficient transportation services provider. With many years
                of experience in the industry we have built a reputation for{" "}
                <span className=" text-orange-500 font-bold">
                  delivering quality services
                </span>
                to our clients, and we go above and beyond to exceed
                expectations.
              </p>
              <hr className="border-1 border-gray-300 shadow-xl shadow-gray-800" />
              <ul className="flex flex-wrap gap-6 justify-evenly pt-5">
                <li className="flex items-center gap-2 font-semibold">
                  <span className=" bg-green-500 rounded-full p-1 text-white">
                    <Check className=" size-4" />
                  </span>
                  Speed of Transportation
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className=" bg-green-500 rounded-full p-1 text-white">
                    <Check className=" size-4" />
                  </span>
                  Network of Destinations
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className=" bg-green-500 rounded-full p-1 text-white">
                    <Check className=" size-4" />
                  </span>
                  Reduced Storage Requirements
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className=" bg-green-500 rounded-full p-1 text-white">
                    <Check className=" size-4" />
                  </span>
                  Cost-effective Transportation
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className=" bg-green-500 rounded-full p-1 text-white">
                    <Check className=" size-4" />
                  </span>
                  Highly Reliable Service
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-20">
          <HorizontalStrip />
        </div>
        <Service1 />
      </div>
    </div>
  );
};

export default page;
