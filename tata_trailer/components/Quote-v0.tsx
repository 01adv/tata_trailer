// import img from "@/public/assets/logistic-bgrm.png";
// import {
//   CardTitle,
//   CardHeader,
//   CardContent,
//   CardFooter,
//   Card,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { Printer } from "lucide-react";

// export default function QuoteV0() {
//   return (
//     <div className=" bg-gradient-to-r from-[#ffffff] via-[#de892e] to-[#1cdc92]">
//       <h2 className="p-8 text-5xl tracking-tight text-center font-bold text-gray-700 dark:text-white">
//         Get Instant Logistic Quote
//       </h2>
//       <div className=" max-w-7xl mx-auto grid grid-cols-2">
//         <div className=" relative">
//           <Image src={img} layout="fill" objectFit="cover" alt="" />
//         </div>
//         <Card className="w-full border-none shadow-none max-w-xl p-8 bg-inherit sm:w-[90vw]">
//           <CardHeader className="mb-4">
//             <div className=" md:flex items-center justify-between flex-wrap">
//               <CardTitle className="text-xl font-bold text-white">
//                 Request A Quote
//               </CardTitle>
//               <Printer className="text-white" />
//             </div>
//             <hr className="border-t border-white/20" />
//           </CardHeader>
//           <CardContent>
//             <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
//               <div className="col-span-1 sm:col-span-1 md:col-span-1">
//                 <Input placeholder="What is your name" />
//               </div>
//               <div className="col-span-1 sm:col-span-1 md:col-span-1">
//                 <Input placeholder="Your Address" />
//               </div>
//               <div className="col-span-1 sm:col-span-2 md:col-span-2">
//                 <Input placeholder="Email Address" />
//               </div>
//               <div className="col-span-1 sm:col-span-2 md:col-span-2">
//                 <Input placeholder="Phone Number" />
//               </div>
//               <div className="col-span-1 sm:col-span-2 md:col-span-2">
//                 <Input placeholder="Pickup Address" />
//               </div>
//               <div className="col-span-1 sm:col-span-2 md:col-span-2">
//                 <Input placeholder="Delivery Address" />
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter className="flex justify-center mt-4">
//             <Button className="bg-orange-300 hover:bg-orange-400 text-black w-full">
//               Send Quote Request
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// }

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

export default function QuoteV0() {
  return (
    <div className="">
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
        <Card className="w-full border-none shadow-none max-w-xl p-8 bg-inherit sm:w-[90vw] mx-auto lg:mx-0">
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
            <Button >
              Send Quote Request
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
