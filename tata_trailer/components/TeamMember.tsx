"use client";
import React, { MouseEvent } from "react";
import Link from "next/link";
import CarouselDemo from "./CarouselDemo"; // Adjust the path accordingly
import Image from "next/image";
import { TeamMemberHeading } from "./heading";
import { PhoneCallIcon, Mail } from "lucide-react"; // Assuming you have Lucide icons for phone and mail

const teamMembers = [
  {
    name: "Kamal Kumar Pal",
    role: "CEO/Co-founder",
    imageUrl: "/assets/dummy.png",
    socialLinks: {
      mail: "tatatrailorservice27@gmail.com",
      whatsapp: "9639658534",
      phone: "9761999097",
    },
  },
  {
    name: "Bhupendra Kumar Pal",
    role: "MD/Co-founder",
    imageUrl: "/assets/dummy.png",
    socialLinks: {
      mail: "tata.trailor.service@gmail.com",
      whatsapp: "8375964014",
      phone: "9058206080",
    },
  },
  // Add more members as needed
];

const handlePhoneClick = (phone: string) => {
  alert(`You are about to call: ${phone}`);
  setTimeout(() => {
    window.location.href = `tel:${phone}`;
  }, 100);
};

const handleMailClick = (e: MouseEvent<HTMLAnchorElement>, mail: string) => {
  e.preventDefault();
  alert(`You are about to send an email to: ${mail}`);
  setTimeout(() => {
    window.location.href = `mailto:${mail}`;
  }, 100);
};

const handleWhatsAppClick = (
  e: MouseEvent<HTMLAnchorElement>,
  whatsapp: string
) => {
  e.preventDefault();
  alert(`You are about to open WhatsApp chat with: ${whatsapp}`);
  setTimeout(() => {
    window.location.href = whatsapp;
  }, 100);
};

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
          href={member.socialLinks.mail}
          aria-label="mail"
          className="text-blue-500 hover:text-gray-900 dark:hover:text-white"
          onClick={(e) => handleMailClick(e, member.socialLinks.mail)}
        >
          <Mail color="red" />
        </Link>
      </li>
      <li>
        <Link
          href={member.socialLinks.whatsapp}
          aria-label="whatsapp"
          className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
          onClick={(e) => handleWhatsAppClick(e, member.socialLinks.whatsapp)}
        >
          <Image
            src="/assets/icon/whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
          />
        </Link>
      </li>
      <li>
        <Link
          href={`tel:${member.socialLinks.phone}`}
          aria-label="phone"
          className="text-orange-500 hover:text-gray-900 dark:hover:text-white"
          onClick={() => handlePhoneClick(member.socialLinks.phone)}
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
