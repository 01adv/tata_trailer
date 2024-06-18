import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tata_trailor",
  description: "Provide Logistic Services",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar2/>
        <div className=" antialiased">

        {children}
        </div>
        <Footer2/>
        </body>
    </html>
  );
}
