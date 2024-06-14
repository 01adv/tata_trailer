import { whyCardData } from "@/constants";
import { WhyUsHeading } from "./heading";

const WhyUs2 = () => {
  return (
    <div className="bg-orange-100/20 items-center px-4 py-8 md:py-16 m-auto mt-5">
      <div className="max-w-7xl mx-auto">
        <WhyUsHeading />
        <div className="flex flex-wrap pb-3 mx-12 md:mx-24 lg:mx-0">
          {whyCardData.map((card, index) => (
            <div key={index} className="w-full p-2 lg:w-1/4 md:w-1/2">
              <div
                className="flex flex-col items-center justify-center text-center px-4 py-16 bg-white rounded-xl border-[1px] border-slate-300 relative overflow-hidden group shadow-lg
                duration-300 hover:bg-gray-50 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-emerald-100 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                <card.icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-500 group-hover:rotate-12 transition-transform duration-300" />
                <span
                  className={`relative z-10 items-center px-4 py-4 mx-auto ${card.bgColor} rounded-full ${card.hoverBgColor}`}
                >
                  <card.icon size={35} />
                </span>
                <div className="text-xl font-semibold text-gray-500 mt-6 relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                  {card.title}
                </div>
                <div className="text-sm text-gray-500 mt-3 px-4 max-h-16 overflow-hidden text-ellipsis relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                  {card.description.length > 100
                    ? `${card.description.substring(0, 97)}...`
                    : card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs2;
