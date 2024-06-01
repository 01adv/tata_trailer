import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Outstanding Service and Reliability",
      content:
        "Tata Trailer Logistics has provided us with unparalleled service, ensuring our goods are delivered on time, every time.",
      name: "John Doe",
      designation: "Operations Manager at XYZ Manufacturing",
    },
    {
      title: "Exceptional Efficiency",
      content:
        "The efficiency and professionalism of Tata Trailer Logistics have significantly improved our supply chain operations.",
      name: "Jane Smith",
      designation: "Supply Chain Director at ABC Retail",
    },
    {
      title: "Reliable and Cost-Effective",
      content:
        "Tata Trailer Logistics offers reliable and cost-effective solutions, making them our preferred logistics partner.",
      name: "Michael Brown",
      designation: "CEO at Global Logistics Inc.",
    },
    {
      title: "Innovative and Dependable",
      content:
        "Their innovative solutions and dependable service have been instrumental in our company's growth.",
      name: "Emily Davis",
      designation: "COO at Tech Distributors Ltd.",
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl py-20 px-8 sm:px-10 md:px-10 lg:px-0 mx-auto items-center justify-center">
        <p className="text-center mb-2 text-base sm:text-lg font-bold text-orange-500">
          Testimonials
        </p>
        <h2 className="mb-4 font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          Feedback from Our Customers:
        </h2>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-md dark:border-gray-700 md:mb-12 md:grid-cols-2 dark:bg-gray-800">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className={`flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 ${
                index % 2 === 0
                  ? "md:rounded-t-lg md:border-e"
                  : "md:rounded-se-lg"
              } dark:bg-gray-800 dark:border-gray-700`}
            >
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.title}
                </h3>
                <p className="my-4">{testimonial.content}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.designation}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
