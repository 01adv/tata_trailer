
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tata Trailer",
  description: "India's Leading Contract Logistics Provider. Tata Trailer Service and Transport specializes in heavy-load ODC (Over Dimensional Cargo) materials, offering nationwide logistics solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Tata Trailer" />
        <meta
          name="description"
          content="India's Leading Contract Logistics Provider. Tata Trailer Service and Transport specializes in heavy-load ODC (Over Dimensional Cargo) materials, offering nationwide logistics solutions."
        />
        <meta
          name="keywords"
          content="logistics, transport services, heavy load transport, ODC materials, trailer services, nationwide transport, road transport India, bulky goods transportation, reliable logistics India"
        />
        <meta name="author" content="Tata Trailer" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tata Trailer" />
        <meta
          property="og:description"
          content="India's Leading Contract Logistics Provider. Tata Trailer Service and Transport specializes in heavy-load ODC (Over Dimensional Cargo) materials, offering nationwide logistics solutions."
        />
        {/* <meta property="og:url" content="https://www.example.com/" /> */}
        {/* <meta
          property="og:image"
          content="https://www.example.com/og-image.jpg" // Placeholder for Open Graph image
        /> */}
        <meta property="og:site_name" content="Tata Trailer" />

        {/* Favicon */}
        {/* Uncomment and replace the href below with the actual favicon URL */}
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* Commented Placeholder for Social Media Links */}
        {/* Example: Add your Facebook, Twitter, or LinkedIn profile links here */}
        {/* <meta property="og:twitter:site" content="@tata_trailer" /> */}
        {/* <meta property="og:linkedin" content="https://www.linkedin.com/company/tata-trailer" /> */}

        <title>Tata Trailer</title>
      </head>
      <body className={inter.className}>
        <Navbar2 />
        <div className="antialiased">{children}</div>
        <Footer2 />
      </body>
    </html>
  );
}
