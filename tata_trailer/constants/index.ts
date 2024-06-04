import { Dribbble, Facebook, Github, Instagram, LucideIcon, X } from "lucide-react";


//testimonials
export const testimonials = [
  {
    title: "Outstanding Service and Reliability",
    content:
      "Tata Trailer Logistics has provided us with unparalleled service, ensuring our goods are delivered on time, every time.",
    name: "John Doe",
    designation: "Operations Manager at XYZ Manufacturing",
  },
  {
    title: "Exceptional Efficiency",
    content:
      "The efficiency and professionalism of Tata Trailer Logistics have significantly improved our supply chain operations.",
    name: "Jane Smith",
    designation: "Supply Chain Director at ABC Retail",
  },
  {
    title: "Reliable and Cost-Effective",
    content:
      "Tata Trailer Logistics offers reliable and cost-effective solutions, making them our preferred logistics partner.",
    name: "Michael Brown",
    designation: "CEO at Global Logistics Inc.",
  },
  {
    title: "Innovative and Dependable",
    content:
      "Their innovative solutions and dependable service have been instrumental in our company's growth.",
    name: "Emily Davis",
    designation: "COO at Tech Distributors Ltd.",
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
  { href: '/', icon: Facebook, label: "Facebook" },
  { href: '/', icon: Instagram, label: "Instagram" },
  { href: '/', icon: X, label: "Twitter" },
  { href: '/', icon: Github, label: "GitHub" },
  { href: '/', icon: Dribbble, label: "Dribbble" },
];

export const serviceLinks = [
  { href: "", label: "Personal Account" },
  { href: "", label: "Join Account" },
  { href: "", label: "Wealth Account" },
  { href: "", label: "Team Account" },
];

export const companyLinks = [
  { href: "", label: "About Us" },
  { href: "", label: "Blog & News" },
  { href: "", label: "Careers" },
  { href: "", label: "Help" },
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
    icon: TruckIcon,
    title: "Natural Language Processing (NLP)",
    description: "The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs.",
    bgColor: "bg-orange-500",
    btnLink: "/",
    btnText: "Learn More",
    imgSrc: "/assets/truck3.jpg",
    imgAlt: "NLP Service",
  },
  {
    icon: TruckIcon,
    title: "Sentiment Analysis",
    description: "The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback.",
    bgColor: "bg-pink-500",
    btnLink: "/login",
    btnText: "Learn More",
    imgSrc: "/assets/truck3.jpg",
    imgAlt: "Sentiment Analysis Service",
  },
  {
    icon: TruckIcon,
    title: "Natural Language Generation (NLG)",
    description: "The AI product can generate human-like written content, summaries, or reports based on structured data or analysis results.",
    bgColor: "bg-green-500",
    btnLink: "/login",
    btnText: "Learn More",
    imgSrc: "/assets/truck3.jpg",
    imgAlt: "NLG Service",
  },
];

//service page ends here


//contact us data
import { MailIcon, MapPinIcon, PhoneCall } from "lucide-react";
interface Contact {
    icon: LucideIcon;
    description: string;
  }

  export const contactCardsData: Contact[] = [
    {
      icon: MailIcon,
      description: "The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs.",
    },
    {
      icon: MapPinIcon,
      description: "The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs.",
    },
    {
      icon: PhoneCall,
      
      description: "The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs.",
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
