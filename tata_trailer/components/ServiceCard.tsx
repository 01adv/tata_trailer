import { CarouselSpacing } from "./CarouselSpacing"; // Import the CarouselSpacing component
import { Button } from "./ui/button";

const ServiceCard = () => {
  // Array containing data for each service card
  const serviceData = [
    {
      title: "Freight Forwarding",
      description:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      buttonText: "Know more",
      imgSrc: "/assets/truck2.jpg",
    },
    {
      title: "Freight Forwarding",
      description:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      buttonText: "Know more",
      imgSrc: "/assets/truck2.jpg",
    },
    {
      title: "Freight Forwarding",
      description:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      buttonText: "Know more",
      imgSrc: "/assets/truck2.jpg",
    },
    {
      title: "Freight Forwarding",
      description:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      buttonText: "Know more",
      imgSrc: "/assets/truck2.jpg",
    },
    // Add more service data objects as needed
    {
      title: "Freight Forwarding",
      description:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      buttonText: "Know more",
      imgSrc: "/assets/truck2.jpg",
    },
    // Add more service data objects as needed
    {
      title: "Freight Forwarding",
      description:
        "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      buttonText: "Know more",
      imgSrc: "/assets/truck2.jpg",
    },
    // Add more service data objects as needed
  ];

  return (
    <div className="container md:max-w-7xl items-center px-4  m-auto sm:max-w-4xl">
      <div className="mt-32 flex items-center justify-center">
        <h3 className="text-xl font-bold font-mono tracking-widest">
          What We Provide
        </h3>
      </div>
      <div className="mt-2 w-full flex items-center justify-center">
        <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          Popular<span className="mx-4">Logistics</span> Services
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10 w-full">
        <CarouselSpacing serviceData={serviceData} />
      </div>
      <div className="p-9">
        <div className="flex items-center justify-center">
          <Button className="bg-orange-500 px-6 rounded-none font-semibold tracking-wide text-sm shadow-md hover:bg-green-500">
            View All
          </Button>
        </div>
        <p className="text-center tracking-wide font-medium pt-2">
          We provide customized transport services.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
