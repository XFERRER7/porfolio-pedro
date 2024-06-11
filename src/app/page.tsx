import { Career } from "@/components/Career";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Recommendations } from "@/components/Recommendations";
import { SendMessageSection } from "@/components/SendMessageSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <main className="bg-[#101111]">
      <div className="bg-[#101111] lg:px-28 md:py-14 py-8 min-h-screen lg:max-w-[1600px] mx-auto space-y-20 overflow-hidden">
        <Header />
        <TechnologiesSection />
        <Career />
        <Projects />
        <Recommendations />
        <SendMessageSection />
        <Footer />
      </div>
    </main>
  );
}
