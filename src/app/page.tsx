import { BehindSection } from "@/components/BehindSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { UpcomingSection } from "@/components/UpcomingSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BehindSection />
        <UpcomingSection />
      </main>
      <Footer />
    </div>
  );
}
