import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="relative h-screen w-full pt-28">
      {" "}
      {/* Adjust pt-28 for padding from top */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/assets/truck.jpg"}
          alt="truck"
          fill
          objectFit="cover"
          loading="eager"
          className="z-0"
        />
      </div>
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="h-full w-full max-w-7xl mx-auto p-4 md:pt-10 flex items-start text-start">
          <div className=" sm:w-4/5 md:w-2/3 md:pl-4 pr-20 sm:px-10 md:px-5">
            {" "}
            {/* Adjust width and padding for the right half */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl xl:text-7xl text-orange-500  font-medium"
              style={{ lineHeight: "4rem" }}
            >
              We Provide Safest{" "}
              <span className="text-white">Transport & Logistics</span>{" "}
              <span className="text-green-500">Solutions</span>
            </h1>
            <p
              className="text-orange-500 uppercase font-mono font-bold text-sm sm:text-base md:text-lg lg:text-lg mt-4"
              style={{ letterSpacing: "0.4rem" }}
            >
              Intelligent designed{" "}
              <span className="text-white">transportation solutions</span>
            </p>
            <div className="bg-white h-0.5 mt-3"></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
