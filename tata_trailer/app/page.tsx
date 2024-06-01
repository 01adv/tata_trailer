"use client";
import AboutComp from "@/components/AboutComp";
import Faq from "@/components/Faq";
import HeroSection from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Nxthero from "@/components/Nxthero";
import Portfolio from "@/components/Portfolio";
import QuoteV0 from "@/components/Quote-v0";
import TeamMember from "@/components/TeamMember";
import Testimonials from "@/components/Testimonials";
import WhyUs2 from "@/components/WhyUs2";

export default function Home() {
  return (
    <main>
      <Hero2 />
      {/* <HeroSection /> */}

      <Nxthero />
      <AboutComp />

      <WhyUs2 />
      <Portfolio />

      <TeamMember />

      <Testimonials />

      <QuoteV0 />
      <Faq />
    </main>
  );
}
