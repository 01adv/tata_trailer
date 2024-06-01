import Faq from "@/components/Faq";
import HorizontalStrip from "@/components/HorizontalStrip";
import QuoteV0 from "@/components/Quote-v0";
import ServiceSection from "@/components/ServiceSection";

// https://tailwindflex.com/@noah/features-list-with-images-and-description
// the above link is for new service section design

const page = () => {
  return (
    <div className=" w-full">
      <div className=" w-full h-[65vh] bg-rose-200 flex justify-center items-center">
        <div>
          <h2 className=" font-semibold text-6xl text-white text-center">
            Services
          </h2>
          <p className=" font-medium text-orange-500 text-center">
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
