import { GameFeaturesSection } from "@/components/home/GameFeaturesSection";
import { HomeSnapController } from "@/components/home/HomeSnapController";
import { SceneCarousel } from "@/components/home/SceneCarousel";

export default function HomePage() {
  return (
    <>
      <HomeSnapController />
      <SceneCarousel />
      <GameFeaturesSection />
    </>
  );
}
