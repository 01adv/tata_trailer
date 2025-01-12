
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Tata Trailor Service and Transport",
  description:
    "India's Leading Contract Logistics Provider. Tata Trailor Service and Transport specializes in heavy-load ODC (Over Dimensional Cargo) materials, offering nationwide logistics solutions.",
  keywords: [
    "tata",
    "trailor",
    "contract",
    "truck",
    "transport",
    "logistics",
    "heavy load",
    "ODC materials",
    "tata", "trailor", "tata trailor", "contract", "truck", "all india transport", "uttarakhand transport", "tata trailor uttarakhand", "trailer", "tailer", "logistics", "transport services", "heavy load transport", "ODC materials", "trailor services", "nationwide transport", "road transport India", "bulky goods transportation", "reliable logistics India"
  ],
  authors: [{ name: "Tata Trailor Service and Transport" }],
  openGraph: {
    type: "website",
    title: "Tata Trailor Service and Transport",
    description:
      "India's Leading Contract Logistics Provider. Tata Trailor Service and Transport specializes in heavy-load ODC (Over Dimensional Cargo) materials, offering nationwide logistics solutions.",
    siteName: "Tata Trailor Service and Transport",
    // Uncomment when you have a valid Open Graph image
    // images: [{ url: "https://www.example.com/og-image.jpg", alt: "Tata Trailor Logo" }],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Tata Trailor Service and Transport" />
        <meta
          name="description"
          content="India's Leading Contract Logistics Provider. Tata Trailor Service and Transport specializes in heavy-load ODC (Over Dimensional Cargo) materials, offering nationwide logistics solutions."
        />
        <meta
          name="keywords"
          content="tata, trailor, tata trailor, contract, truck, all india transport, uttarakhand transport, tata trailor uttarakhand, trailer, tailer, logistics, transport services, heavy load transport, ODC materials, trailor services, nationwide transport, road transport India, bulky goods transportation, reliable logistics India"
        />
        <meta name="author" content="Tata Trailor Service and Transport" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tata Trailor Service and Transport" />
        <meta
          property="og:description"
          content="India's Leading Contract Logistics Provider. Tata Trailor Service and Transport specializes in heavy-load ODC (Over Dimensional Cargo) materials, offering nationwide logistics solutions."
        />
        {/* <meta property="og:url" content="https://www.example.com/" /> */}
        {/* <meta
          property="og:image"
          content="https://www.example.com/og-image.jpg" // Placeholder for Open Graph image
        /> */}
        <meta property="og:site_name" content="Tata Trailor Service and Transport" />

        {/* Favicon */}
        {/* Uncomment and replace the href below with the actual favicon URL */}
        <link rel="icon" href="/favicon.ico" />

        {/* Commented Placeholder for Social Media Links */}
        {/* Example: Add your Facebook, Twitter, or LinkedIn profile links here */}
        {/* <meta property="og:twitter:site" content="@tata_trailor" /> */}
        {/* <meta property="og:linkedin" content="https://www.linkedin.com/company/tata-trailor" /> */}

        <title>Tata Trailor Service and Transport</title>
      </Head>
      <body className={inter.className}>
        <Navbar2 />
        <div className="antialiased">{children}</div>
        <Footer2 />
      </body>
    </html>
  );
}
