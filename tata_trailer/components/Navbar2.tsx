"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import { LucideMenu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar2 = () => {
  // State for toggling the mobile menu
  const [open, setOpen] = useState(false);

  // State for tracking scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the mobile menu
  const handleClick = () => {
    setOpen(!open);
  };

  // Effect to handle scroll events and persist scroll position
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
        // Store the scroll position in localStorage
        window.localStorage.setItem(
          "scrollPosition",
          scrollPosition.toString()
        );
      } else {
        // Inherit the color from the hero section
        setIsScrolled(false);
        // Remove the scroll position in localStorage
        window.localStorage.removeItem("scrollPosition");
      }
    };

    // Retrieve scroll position from localStorage on component mount
    const storedScrollPosition = window.localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      // Restore the scroll position from localStorage
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
      setIsScrolled(true);
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathName = usePathname();

  return (
    <header
      className={`fixed w-full flex justify-between items-center px-4 md:px-12 transition-all duration-300 z-50 ${
        isScrolled ? "h-16 glassmorphism-nav bg-green-200" : "h-20 bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <h1
          className={`font-extrabold  ${isScrolled ? "text-xl" : "text-2xl"}`}
        >
          <span className=" text-green-500">TATA</span>{" "}
          <span className=" text-orange-400">TRAILER</span>
        </h1>
      </Link>
      {/* Navigation */}
      <nav className="relative">
        {/* Mobile menu toggle button */}
        <button aria-label="menu" onClick={handleClick} className="h-8 w-8 pr-16 md:hidden">
          <LucideMenu />
        </button>

        {/* Navigation links */}
        <ul
          className={`fixed left-0 right-0 min-h-screen flex flex-col justify-center items-center space-y-4 p-4 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:relative  md:flex md:flex-row md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0 text-lg`}
        >
          {navItems.map((item, index) => {
            const isActive =
              pathName === item.href || pathName.startsWith(`${item.href}/`);
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-orange-500 hover:shadow-md font-mono font-semibold",
                    { "border-b-2 shadow-md border-orange-500": isActive }
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;
