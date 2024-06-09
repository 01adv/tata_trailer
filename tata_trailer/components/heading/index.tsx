"use client";
import { useEffect, useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { animated } from "react-spring";

export const HeroHeading = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeading(true);
    }, 100); // Delay for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showHeading) {
      const text = " We Provide Safest Transport & Logistics Solutions";
      let index = 0;
      const typeWriterTimer = setInterval(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        index += 1;
        if (index === text.length) {
          clearInterval(typeWriterTimer);
          setShowSubheading(true); // Show subheading after typing is done
        }
      }, 100); // Speed of the typewriter effect
      return () => clearInterval(typeWriterTimer);
    }
  }, [showHeading]);

  return (
    <header className="relative z-10">
      {showHeading && (
        <h1 className="text-3xl mt-5 sm:mt-10 md:mt-14 sm:text-5xl md:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 via-white to bg-orange-400 font-medium">
          {displayText}
        </h1>
      )}
      {showSubheading && (
        <p
          className="text-orange-500 uppercase font-mono font-bold text-xs sm:text-base mt-4"
          style={{ letterSpacing: "0.4rem" }}
        >
          Intelligent designed{" "}
          <span className="text-white">transportation solutions</span>
          <hr className=" border-2 bg-white" />
        </p>
      )}
    </header>
  );
};

export const WhyUsHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div
      ref={refMove}
      style={animationPropsMove}
      className="text-center items-center py-14"
    >
      <p className=" text-xl font-mono text-black text-center font-semibold">
        What else we can do for you
      </p>
      <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        More Than Just A Transporter
      </h2>
    </animated.div>
  );
};

export const PortfolioHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div
      ref={refMove}
      style={animationPropsMove}
      className="text-center items-center py-14"
    >
      <p className="text-xl font-bold font-mono tracking-widest">
        Our Portfolio
      </p>
      <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Latest Projects We Have Done
      </h2>
    </animated.div>
  );
};

export const TeamMemberHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div ref={refMove} style={animationPropsMove}>
      <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Our Team Members
      </h2>
      <p className="font-light text-gray-500 text-base md:text-lg dark:text-gray-400">
        Explore the whole collection of open-source web components and elements
        built with the utility classNames from Tailwind
      </p>
    </animated.div>
  );
};

export const TestimonialHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div ref={refMove} style={animationPropsMove} className="mb-14">
      <p className="text-center mb-2 text-base sm:text-lg font-bold text-orange-500">
        Testimonials
      </p>
      <h2 className="mb-4 font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Feedback from Our Customers:
      </h2>
    </animated.div>
  );
};

export const QuoteHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div ref={refMove} style={animationPropsMove} className="mb-14">
      <h2 className=" sm:px-10 lg:px-0 font-serif text-wrap sm:text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Get Instant Logistic Quote
      </h2>
    </animated.div>
  );
};

export const FaqHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div ref={refMove} style={animationPropsMove} className="mb-14">
      <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Frequently <span className=" text-orange-500">Asked</span> Questions
      </h2>
    </animated.div>
  );
};

export const ContactHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div ref={refMove} style={animationPropsMove} className="mb-14">
      <p className="text-center mb-2 text-base sm:text-lg font-bold text-orange-500">
        Contact Us
      </p>
      <h2 className="mb-4 font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Our Contact Information
      </h2>
    </animated.div>
  );
};

export const ServiceHeading = () => {
  const { ref: refMove, animationProps: animationPropsMove } =
    useScrollAnimation("move");
  return (
    <animated.div ref={refMove} style={animationPropsMove} className="mb-14">
      <p className="mb-2 text-base sm:text-lg font-bold text-black font-mono">
        What we Provide
      </p>
      <h2 className="mb-4 font-serif text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Our Popular Services
      </h2>
    </animated.div>
  );
};
