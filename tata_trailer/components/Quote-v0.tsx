
import img from "@/public/assets/logistic-bgrm.png";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Printer } from "lucide-react";
import Link from "next/link";

export default function QuoteV0() {
  return (
    <div className="bg-emerald-100/50 p-20">
      <h2 className="px-8 sm:px-10 lg:px-0 mb-4 font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
        Get Instant Logistic Quote
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        <div className="relative h-64 lg:h-auto">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="Logistic Background"
            className="rounded-lg"
          />
        </div>
        <Card className="w-full border-none shadow-none max-w-xl p-8 bg-inherit sm:w-[90vw] mx-auto lg:mx-0 glassmorphism-nav">
          <CardHeader className="mb-4">
            <div className="flex items-center justify-between flex-wrap">
              <CardTitle className="text-xl font-bold">
                Request A Quote
              </CardTitle>
              <Printer/>
            </div>
            <hr className="border-t border-white/20 mt-2" />
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
              <div className="col-span-1">
                <Input placeholder="What is your name" />
              </div>
              <div className="col-span-1">
                <Input placeholder="Your Address" />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <Input placeholder="Email Address" />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <Input placeholder="Phone Number" />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <Input placeholder="Pickup Address" />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <Input placeholder="Delivery Address" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center mt-4">
            <Link href={'/'}><Button >
              Send Quote Request
            </Button></Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
