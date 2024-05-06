import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tata_trailer",
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
        {/* <Navbar/> */}
        <Navbar2/>
        {children}
        footer
        </body>
    </html>
  );
}
