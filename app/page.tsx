import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/home/AnnouncementBanner";
import Hero from "@/components/home/Hero";
import WhatIs from "@/components/home/WhatIs";
import Stats from "@/components/home/Stats";
import WhySection from "@/components/home/WhySection";
import Activities from "@/components/home/Activities";
import PartnersLead from "@/components/home/PartnersLead";
import JoinLead from "@/components/home/JoinLead";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <Stats />
        <WhySection />
        <Activities />
        <PartnersLead />
        <JoinLead />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
