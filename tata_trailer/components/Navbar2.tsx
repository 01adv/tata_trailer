"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Home,
  LucideMenu,
  Mail,
  MapIcon,
  MapPinIcon,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

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
    <header className="fixed w-full z-50">
      <div className="hidden md:block">
        <div
          className={`transition-all duration-300  px-4 md:px-12 py-2 flex justify-between items-center ${
            isScrolled ? "hidden" : "block glassmorphism-black"
          }`}
        >
          <div className=" w-full flex md:flex-row md:items-center justify-end md:space-x-8 text-sm font-bold text-white">
            <span className="flex gap-1">
              <MapPinIcon size={18} /> Pantnagar, 263153, Uttarakhand
            </span>
            <span className="flex gap-1">
              <PhoneCall size={18} />
              +91 9876 543210
            </span>
            <span className="flex gap-1">
              <Mail size={18} /> tatatrailor@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center px-4 md:px-12 transition-all duration-300 ${
          isScrolled
            ? "h-16 glassmorphism-nav bg-green-200"
            : "h-20 bg-transparent text-white"
        }`}
      >
        <Link href="/">
          <h1
            className={`font-extrabold ${isScrolled ? "text-xl" : "text-2xl"}`}
          >
            <span className="text-green-500">TATA</span>{" "}
            <span className="text-orange-400">TRAILOR</span>
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
              open ? "translate-x-0 bg-gray-100" : "-translate-x-full"
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
                      "block w-full py-2 px-4 hover:text-orange-500 hover:border-b-2 border-white font-mono font-semibold",
                      {
                        "text-orange-500 md:text-black md:border-b-2 md:border-orange-500":
                          isActive,
                      }
                    )}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="py-1">
              <Link href="/#quote">
                <Button className="py-2" variant={"destructive"}>
                  Quote
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar2;
