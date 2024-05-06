import HeroSection from "@/components/Hero";
import Nxthero from "@/components/Nxthero";
import {
  CalendarClock,
  HeadsetIcon,
  MapPinnedIcon
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Nxthero/>
      <section className=" h-screen bg-yellow-300">our services</section>
      <section className=" h-screen bg-rose-300">about us</section>

      <section className=" h-screen bg-teal-300">why choose us</section>
      <section className=" h-screen bg-lime-500">recent projects</section>
      <section className=" h-screen bg-blue-300">team members</section>
      <section className=" h-screen bg-pink-300">testimonial</section>
      <section className=" h-screen bg-orange-300">
        Get A Quote For Free Request A Free Quote(optional)
      </section>
    </main>
  );
}
