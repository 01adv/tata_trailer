import React from "react";
import { testimonials } from "@/constants";
import CarouselDemo from "./CarouselDemo"; // Adjust the path accordingly
import { TestimonialHeading } from "./heading";

const TestimonialCard = ({ testimonial }: any) => (
  <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {testimonial.title}
      </h3>
      <p className="my-4">{testimonial.content}</p>
    </blockquote>
    <figcaption className="flex items-center justify-center">
      <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
        <div>{testimonial.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.designation}
        </div>
      </div>
    </figcaption>
  </figure>
);

const Testimonials = () => {
  return (
    <div className="">
      <div className="max-w-7xl py-20 px-8 sm:px-10 md:px-10 lg:px-0 mx-auto items-center justify-center">
        <TestimonialHeading/>
        <div className=" bg-gray-100 hidden md:grid mb-8 border border-gray-200 rounded-lg shadow-md dark:border-gray-700 md:mb-12 md:grid-cols-2 dark:bg-gray-800">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="md:hidden flex items-center justify-center">
          <CarouselDemo
            items={testimonials}
            renderItem={(testimonial: any, index: any) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
