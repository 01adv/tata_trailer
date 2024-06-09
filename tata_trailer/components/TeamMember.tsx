import React from "react";
import Link from "next/link";
import CarouselDemo from "./CarouselDemo"; // Adjust the path accordingly
import Image from "next/image";
import { TeamMemberHeading } from "./heading";
import { FacebookIcon, Linkedin, PhoneCallIcon, Twitter } from "lucide-react";

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
        loading="lazy"
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

const TeamMember = () => {
  return (
    <section className="dark:bg-gray-900 md:py-8 md:pb-16">
      <div className="py-8 rounded-3xl px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <TeamMemberHeading />
        </div>
        <div className="hidden md:flex items-center justify-center flex-wrap gap-40">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
        <div className="md:hidden flex items-center justify-center">
          <CarouselDemo
            items={teamMembers}
            renderItem={(member: any, index: any) => (
              <TeamMemberCard key={index} member={member} />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
