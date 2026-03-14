import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MissionStatement from "@/components/MissionStatement";
import ShiftOpportunity from "@/components/ShiftOpportunity";
import Ecosystem from "@/components/Ecosystem";
import Partnerships from "@/components/Partnerships";
import LatestNews from "@/components/LatestNews";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />
      <HeroBanner />
      <MissionStatement />
      <ShiftOpportunity />
      <Ecosystem />
      <Partnerships />
      <LatestNews />
      <Values />
      <Footer />
    </main>
  );
}
