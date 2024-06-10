"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import { LucideMenu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
        window.localStorage.setItem(
          "scrollPosition",
          scrollPosition.toString()
        );
      } else {
        setIsScrolled(false);
        window.localStorage.removeItem("scrollPosition");
      }
    };

    const storedScrollPosition = window.localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
      setIsScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  const pathName = usePathname();

  return (
    <header
      className={`fixed w-full flex justify-between items-center px-4 md:px-12 transition-all duration-300 z-50 ${
        isScrolled
          ? "h-16 glassmorphism-nav bg-green-200"
          : "h-20 bg-transparent text-white"
      }`}
    >
      <Link href="/">
        <h1 className={`font-extrabold ${isScrolled ? "text-xl" : "text-2xl"}`}>
          <span className=" text-green-500">TATA</span>{" "}
          <span className=" text-orange-400">TRAILER</span>
        </h1>
      </Link>
      <nav className="relative">
        <button
          aria-label="menu"
          onClick={handleClick}
          className="h-8 w-8 pr-8 md:hidden"
        >
          <LucideMenu />
        </button>
        <ul
          className={`fixed left-0 right-0 min-h-screen flex flex-col justify-start items-start space-y-4 p-4 transform transition-transform duration-300 ${
            open ? "translate-x-0 glassmorphism-nav" : "-translate-x-full"
          } md:relative md:flex md:flex-row md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0 text-lg`}
        >
          {navItems.map((item, index) => {
            const isActive =
              pathName === item.href || pathName.startsWith(`${item.href}/`);
            return (
              <li key={index} className="w-full md:w-auto">
                <Link
                  href={item.href}
                  className={cn(
                    "block w-full py-2 px-4 hover:text-orange-500 hover:shadow-md font-mono font-semibold",
                    { "md:border-b-2 md:shadow-md md:border-orange-500": isActive }
                  )}
                  onClick={handleLinkClick}
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
