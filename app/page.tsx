import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OpenWall from "@/components/home/openwall/OpenWall";
import Stats from "@/components/home/Stats";
import PartnersLead from "@/components/home/PartnersLead";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 冒頭は黒い壁。ヘッダーは difference で反転させないと消える */}
      <Navbar overOpenWall />
      <main>
        <OpenWall />
        <Stats />
        <PartnersLead />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
