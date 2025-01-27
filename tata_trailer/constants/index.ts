import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  LucideIcon,
  X,
} from "lucide-react";

//testimonials
export const testimonials = [
  {
    title: "Reliable Logistics for Manufacturing Needs",
    content:
      "Tata Trailor Service and Transport has been a reliable partner in ensuring the seamless movement of our raw materials and finished goods.",
    name: "Rajesh Gupta",
    designation: "Plant Manager",
  },
  {
    title: "Efficiency at Its Best",
    content:
      "Their timely delivery and efficient handling of ODC consignments have streamlined our operations significantly.",
    name: "Meena Sharma",
    designation: "Logistics Head ",
  },
  {
    title: "Cost-Effective and Trustworthy",
    content:
      "We rely on Tata Trailor Service for their cost-effective solutions and dependable service in handling bulk cargo.",
    name: "Vikram Chauhan",
    designation: "Supply Chain Manager ",
  },
  {
    title: "Exceptional Support for Large-Scale Operations",
    content:
      "Their expertise in managing heavy and oversized consignments has been crucial for our production schedules.",
    name: "Anjali Verma",
    designation: "Operations Manager ",
  },
];

//testimonials ends here

// footer
interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { href: "/", icon: Facebook, label: "Facebook" },
  { href: "/", icon: Instagram, label: "Instagram" },
  { href: "/", icon: X, label: "Twitter" },
  { href: "/", icon: Github, label: "GitHub" },
  { href: "/", icon: Dribbble, label: "Dribbble" },
];

export const serviceLinks = [
  { href: "/services/industrial", label: "Industrial Machinery Transport" },
  { href: "/services/heavy", label: "Heavy Equipment Transport" },
  { href: "/services/customized", label: "Customized Logistics Services" },
  { href: "/services/agriculture", label: "Agriculture Equipment Transport" },
  { href: "/services/garter", label: "Garter Channel Transport" },
  { href: "/services/warehouse", label: "Warehouse Shifting" },
  { href: "/services/house", label: "House Shifting" },
  { href: "/services/shipping", label: "International Shipping" },
  { href: "/services/slug", label: "Slug or Iron Waste Transport" },
  { href: "/services/office", label: "Office Moving" },
];

export const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/#quote", label: "Get a Quote" },
];

export const legalLinks = [
  { href: "", label: "Terms & Conditions" },
  { href: "", label: "Privacy Policy" },
];

// Array of navigation items
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

//footer ends

// service page starts

import { TruckIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  btnLink: string;
  btnText: string;
  imgSrc: string;
  imgAlt: string;
}

export const servicesData: Service[] = [
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Industrial Machinery Transport",
    description:
      "Our logistics company specializes in the transport of all types of industrial machinery, ensuring safe and efficient delivery to your desired location.",
    bgColor: "text-orange-500",
    btnLink: "/services/industrial",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/5.jpeg",
    imgAlt: "Industrial Machinery Transport",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Heavy Equipment Transport",
    description:
      "We provide reliable heavy equipment transport services, handling oversized loads with precision and care to meet your project requirements.",
    bgColor: "text-blue-500",
    btnLink: "/services/heavy",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/15.jpeg",
    imgAlt: "Heavy Equipment Transport",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Customized Logistics Services",
    description:
      "We specialize in the transport of customized components, utilizing advanced logistics planning to ensure safe and timely delivery.",
    bgColor: "text-red-500",
    btnLink: "/services/customized",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/14.jpeg",
    imgAlt: "aero plane transport image",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Agriculture Equipment Transport",
    description:
      "Our expert team offers tractor and other agriculture equipment transport solutions, facilitating the movement of these essential machines to your worksite.",
    bgColor: "text-green-500",
    btnLink: "/services/agriculture",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/22.jpeg",
    imgAlt: "Tractor Crane Transport",
  },

  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Garter Channel Transport",
    description:
      "Our services include the transport of garter channels, providing secure and efficient logistics solutions for these critical components.",
    bgColor: "text-yellow-500",
    btnLink: "/services/garter",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/23.jpeg",
    imgAlt: "Garter Channel Transport",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Warehouse Shifting",
    description:
      "We offer comprehensive warehouse shifting services, managing the entire process to minimize downtime and ensure a smooth transition.",
    bgColor: "text-purple-500",
    btnLink: "/services/warehouse",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/27.jpg",
    imgAlt: "Warehouse Shifting",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Office Moving",
    description:
      "Our office moving services are designed to handle the relocation of your business with minimal disruption, ensuring all assets are transported safely.",
    bgColor: "text-pink-500",
    btnLink: "/services/office",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/29.jpg",
    imgAlt: "Office Moving",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "House Shifting",
    description:
      "We provide professional house shifting services, ensuring all your belongings are transported securely to your new home.",
    bgColor: "text-indigo-500",
    btnLink: "/services/house",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/28.jpg",
    imgAlt: "House Shifting",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "International Shipping",
    description:
      "Our international shipping services are tailored to meet your global logistics needs, offering reliable and efficient transport solutions worldwide.",
    bgColor: "text-teal-500",
    btnLink: "/services/shipping",
    btnText: "Learn More",
    imgSrc: "/assets/portfolio/30.jpg",
    imgAlt: "International Shipping",
  },
  {
    icon: TruckIcon, // Replace with appropriate icon
    title: "Slug or Iron Waste Transport",
    description:
      "We handle the transport of slug or iron waste, providing specialized services to manage and move these materials safely and efficiently.",
    bgColor: "text-gray-500",
    btnLink: "/services/slug",
    btnText: "Learn More",
    imgSrc: "/assets/abt.jpg",
    imgAlt: "Slug or Iron Waste Transport",
  },
];

//service page ends here

//contact us data
import { MailIcon, MapPinIcon, PhoneCall } from "lucide-react";
interface Contact {
  icon: LucideIcon;
  description: {
    first: string;
    second?: string;
    third?: string;
    fourth?: string;
    fifth?: string;
  };
}

export const contactCardsData: Contact[] = [
  {
    icon: MailIcon,
    description: {
      first: "tata.trailor.service@gmail.com",
      second: "tatatrailorservice27@gmail.com",
    },
  },
  {
    icon: MapPinIcon,
    description: {
      first:
        "Near Hazi Parking, Opp: Mahindra & Mahindra Ltd Kichha Road Lalpur Rudrapur 263148",
    },
  },
  {
    icon: PhoneCall,

    description: {
      first: "9639658534,",
      second: "9058206080,",
      third: "8375964014,",
      fourth: "9761999097",
      fifth: "9639658534",
    },
  },
];

//homepage service card
export const serviceCardData = [
  {
    title: "Freight Forwarding",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
    buttonText: "Know more",
    imgSrc: "/assets/truck2.jpg",
  },
  {
    title: "Freight Forwarding",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
    buttonText: "Know more",
    imgSrc: "/assets/truck2.jpg",
  },
  {
    title: "Freight Forwarding",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
    buttonText: "Know more",
    imgSrc: "/assets/truck2.jpg",
  },
  {
    title: "Freight Forwarding",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
    buttonText: "Know more",
    imgSrc: "/assets/truck2.jpg",
  },
  // Add more service data objects as needed
  {
    title: "Freight Forwarding",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
    buttonText: "Know more",
    imgSrc: "/assets/truck2.jpg",
  },
  // Add more service data objects as needed
  {
    title: "Freight Forwarding",
    description:
      "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
    buttonText: "Know more",
    imgSrc: "/assets/truck2.jpg",
  },
  // Add more service data objects as needed
];

//faq questions and answers,

export const FaqData = [
  {
    question: "What regions does Tata Trailor operates in?",
    answer:
      "Tata Trailor is specializing in transporting heavy-load ODC materials across India and neighboring nations like Bhutan, Nepal, Bangladesh, and others with unmatched reliability and efficiency.",
  },
  {
    question: "What services does Tata Trailor offer?",
    answer:
      "Tata Trailor provides a comprehensive range of transport and logistics services including freight transportation, warehousing, distribution, supply chain management, and specialized transport solutions for oversized or hazardous materials.",
  },
  {
    question: "How can I book a transportation service with Tata Trailor?",
    answer:
      "Booking a transportation service with Tata Trailor is easy. You can visit our website and fill out the online booking form, or contact our customer service team directly via phone or email to discuss your specific needs and schedule a service.",
  },
  {
    question: "What areas does Tata Trailor serve?",
    answer:
      "Tata Trailor offers nationwide services across India. We have an extensive network that allows us to transport goods to and from any location within the country. We also offer international shipping services to selected destinations.",
  },
  {
    question: "How does Tata Trailor ensure the safety of transported goods?",
    answer:
      "The safety of your goods is our top priority. Tata Trailor uses state-of-the-art tracking systems, well-maintained vehicles, and trained drivers to ensure secure and timely delivery. Additionally, we offer insurance options to cover any unforeseen circumstances during transit.",
  },
  {
    question: "What types of goods can Tata Trailor transport?",
    answer:
      "Tata Trailor can transport a wide variety of goods, including general merchandise, perishable items, oversized equipment, hazardous materials, and more. Our fleet is equipped to handle diverse transportation needs, ensuring that your cargo is delivered safely and efficiently.",
  },
  {
    question: "How can I track my shipment with Tata Trailor?",
    answer:
      "You can easily track your shipment with Tata Trailor using online tracking system. Simply enter your tracking number on the tracking website to get real-time updates on the status and location of your shipment. You can also contact our customer service team for assistance.",
  },
  {
    question: "What payment methods does Tata Trailor accept?",
    answer:
      "Tata Trailor accepts a variety of payment methods for your convenience. You can pay using bank transfers, UPI, and online payment platforms. For corporate clients, we also offer invoicing and credit terms upon approval.",
  },
  {
    question: "How can I contact Tata Trailor for customer support?",
    answer:
      "Our customer support team is available to assist you with any questions or concerns. You can reach us by phone at [+91 9639 658534], email at [tata.trailor.service@gmail.com], or through our website's contact form. We are committed to providing prompt and efficient support to all our clients.",
  },
];

export const portfolioImages = [
  {
    img: "/assets/portfolio/1.jpeg",
    title: "Project 1",
    description: "Project 1 description",
  },
  {
    img: "/assets/portfolio/2.jpeg",
    title: "Project 2",
    description: "Project 2 description",
  },
  {
    img: "/assets/portfolio/3.jpeg",
    title: "Project 3",
    description: "Project 3 description",
  },
  {
    img: "/assets/portfolio/4.jpeg",
    title: "Project 4",
    description: "Project 4 description",
  },
  {
    img: "/assets/portfolio/5.jpeg",
    title: "Project 5",
    description: "Project 5 description",
  },
  {
    img: "/assets/portfolio/6.jpeg",
    title: "Project 6",
    description: "Project 6 description",
  },
  {
    img: "/assets/portfolio/7.jpeg",
    title: "Project 7",
    description: "Project 7 description",
  },
  {
    img: "/assets/portfolio/8.jpeg",
    title: "Project 8",
    description: "Project 8 description",
  },
  {
    img: "/assets/portfolio/9.jpeg",
    title: "Project 9",
    description: "Project 9 description",
  },
  {
    img: "/assets/portfolio/10.jpeg",
    title: "Project 10",
    description: "Project 10 description",
  },
  {
    img: "/assets/portfolio/11.jpeg",
    title: "Project 11",
    description: "Project 11 description",
  },
  {
    img: "/assets/portfolio/12.jpeg",
    title: "Project 12",
    description: "Project 12 description",
  },
  {
    img: "/assets/portfolio/13.jpeg",
    title: "Project 13",
    description: "Project 13 description",
  },
  {
    img: "/assets/portfolio/14.jpeg",
    title: "Project 14",
    description: "Project 14 description",
  },
  {
    img: "/assets/portfolio/15.jpeg",
    title: "Project 15",
    description: "Project 15 description",
  },
  {
    img: "/assets/portfolio/16.jpeg",
    title: "Project 16",
    description: "Project 16 description",
  },
  {
    img: "/assets/portfolio/17.jpeg",
    title: "Project 17",
    description: "Project 17 description",
  },
  {
    img: "/assets/portfolio/18.jpeg",
    title: "Project 18",
    description: "Project 18 description",
  },
  {
    img: "/assets/portfolio/19.jpeg",
    title: "Project 19",
    description: "Project 19 description",
  },
  {
    img: "/assets/portfolio/20.jpeg",
    title: "Project 20",
    description: "Project 20 description",
  },
];

import {
  CalendarCheck,
  Clock10,
  IndianRupeeIcon,
  ShieldCheck,
} from "lucide-react";

export const whyCardData = [
  {
    icon: ShieldCheck,
    title: "Secure Transport Solutions",
    description:
      "At Tata Trailor, we ensure your goods are delivered safely and efficiently, with real-time tracking and robust safety measures in place.",
    bgColor: "bg-indigo-50",
    hoverBgColor: "group-hover:bg-indigo-100",
  },
  {
    icon: Clock10,
    title: "On-Time Shipments",
    description:
      "We value your time. Our logistics services guarantee on-time delivery with precise time tracking for all your shipments.",
    bgColor: "bg-pink-50",
    hoverBgColor: "group-hover:bg-pink-100",
  },
  {
    icon: CalendarCheck,
    title: "Streamlined Supply Chain",
    description:
      "Our advanced resource planning tools help optimize your supply chain, ensuring efficient use of resources and cost-effective operations.",
    bgColor: "bg-purple-50",
    hoverBgColor: "group-hover:bg-purple-100",
  },
  {
    icon: IndianRupeeIcon,
    title: "Affordable Freight Services",
    description:
      "Tata Trailor offers competitive pricing and flexible invoicing options to meet your budget needs without compromising on quality.",
    bgColor: "bg-green-50",
    hoverBgColor: "group-hover:bg-green-100",
  },
];

//services category details page
