import React from "react";
import Link from "next/link";
import { FacebookIcon, Linkedin, PhoneCallIcon, Twitter } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    imageUrl: "/assets/trailer.jpg",
    socialLinks: {
      facebook: "/",
      twitter: "/",
      linkedin: "/",
      phone: "/",
    },
  },
  {
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    imageUrl: "/assets/trailer.jpg",
    socialLinks: {
      facebook: "/",
      twitter: "/",
      linkedin: "/",
      phone: "/",
    },
  },
  {
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    imageUrl: "/assets/trailer.jpg",
    socialLinks: {
      facebook: "/",
      twitter: "/",
      linkedin: "/",
      phone: "/",
    },
  },
  {
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    imageUrl: "/assets/trailer.jpg",
    socialLinks: {
      facebook: "/",
      twitter: "/",
      linkedin: "/",
      phone: "/",
    },
  },
  // Add more members as needed
];

const TeamMemberCard = ({ member }: any) => (
  <div className="text-center text-gray-500 dark:text-gray-400">
    <div className="mx-auto mb-4 w-40 h-40 relative">
      <Image
        className="rounded-full"
        src={member.imageUrl}
        alt={`${member.name} Avatar`}
        fill
      />
    </div>

    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <Link href="/" aria-label="team">
        {member.name}
      </Link>
    </h3>
    <p>{member.role}</p>
    <ul className="flex justify-center mt-4 space-x-4">
      <li>
        <Link
          href={member.socialLinks.facebook}
          aria-label="social"
          className="text-blue-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link
          href={member.socialLinks.twitter}
          aria-label="social"
          className="text-blue-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Twitter />
        </Link>
      </li>
      <li>
        <Link
          href={member.socialLinks.linkedin}
          aria-label="social"
          className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
        >
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link
          href={member.socialLinks.phone}
          aria-label="social"
          className="text-red-500 hover:text-gray-900 dark:hover:text-white"
        >
          <PhoneCallIcon />
        </Link>
      </li>
    </ul>
  </div>
);

const CarouselDemo = ({ teamMembers }: any) => (
  <Carousel className="w-full max-w-xs">
    <CarouselContent>
      {teamMembers.map((member: any, index: any) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <TeamMemberCard member={member} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

const TeamMember = () => {
  return (
    <section className="dark:bg-gray-900 md:py-8 md:pb-16">
      <div className="py-8 rounded-3xl px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="font-serif text-center text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
            Our Team Members
          </h2>
          <p className="font-light text-gray-500 text-base md:text-lg dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNames from Tailwind
          </p>
        </div>
        <div className="hidden md:grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
        <div className="md:hidden flex items-center justify-center">
          <CarouselDemo teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
