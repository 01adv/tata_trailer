import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent">
      {/* First Row: Contact Info and Social Media Icons */}
      <div className=" max-w-7xl mx-auto flex justify-between items-center text-sm font-light ">
        {/* Contact Info */}
        <div className=" flex space-x-4">
          <p>Contact Us: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* Add your social media icons here */}
          <a href="#" className="">
            facebook
          </a>
          <a href="#" className="">
            instagram
          </a>
          <a href="#" className="">
            whatsapp
          </a>
        </div>
      </div>
      <hr />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className=" font-bold">
              Your Logo
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="flex items-center justify-center">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Button>Get a Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
