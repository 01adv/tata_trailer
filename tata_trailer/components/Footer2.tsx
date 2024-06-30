import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  companyLinks,
  legalLinks,
  serviceLinks,
  socialLinks,
} from "@/constants";

const Footer2 = () => {
  return (
    <footer className="left-0 bottom-0 mt-40">
      <div className="pt-32">
        <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <div className="rounded-2xl bg-orange-200 w-full lg:w-2/5 p-8">
            <h2 className="mb-6 text-3xl font-semibold">Connect with us!</h2>

            <table className="mb-4 text-xs  sm:text-sm text-left text-gray-600">
              <tbody>
                <tr className="">
                  <th
                    scope="row"
                    className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Email :
                  </th>
                  <td className="px-2 py-2">
                    <p>tata.trailor.service@gmail.com</p>
                    <p>tatatrailorservice27@gmail.com</p>
                  </td>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Address :
                  </th>
                  <td className="px-2 py-2">
                    Near Hazi Parking, Opp: Mahindra & Mahindra Ltd Kichha Road
                    Lalpur Rudrapur 263148
                    <br />
                    263153, Uttarakhand, India
                  </td>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Phone :
                  </th>
                  <td className="px-2 py-2">
                    <p>9761303561, 9058206080</p>
                    <p>9761999097, 8375964014</p>
                    <p>9639658534</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mb-2 text-sm font-medium text-gray-600">Follow us</p>
            <div className="flex space-x-6 text-gray-600">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  className="hover:opacity-75"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{link.label}</span>
                  <link.icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white w-full lg:w-1/4 p-8">
            <h2 className="mx-auto text-3xl font-semibold tracking-tight sm:text-3xl">
              Keep Connected With Us
            </h2>

            <form className="w-full mx-auto mt-6">
              <input
                id="phone-number"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className="w-full rounded-2xl border border-gray-800 bg-white/5 px-3.5 py-2 text-gray-600 text-sm shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter Phone Number"
              />
              <Button className="w-full mt-2 rounded-2xl px-3.5 py-2.5 font-semibold shadow-sm">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="rounded-2xl bg-emerald-100 w-full lg:w-2/4 p-8">
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-medium">Service</p>
                <nav className="grid grid-cols-2 mt-4 text-xs sm:text-sm text-gray-600 text-balance ">
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:opacity-75 py-2 px-1"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p className="font-medium">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-xs  sm:text-sm text-gray-600">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:opacity-75 py-2"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-800">
              Copyright © 2024 Tata Trailor Transport, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
