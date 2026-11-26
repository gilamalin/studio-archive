import type { Metadata } from "next";
import { BasicGuideSection } from "@/components/guide/BasicGuideSection";
import { StageRulesSection } from "@/components/guide/StageRulesSection";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  title: `게임 가이드 — ${siteMeta.gameTitle}`,
  description: "기본 조작키, 커스터마이징, 스테이지별 플레이 방식 및 멀티플레이 안내.",
};

export default function GuidePage() {
  return (
    <>
      <BasicGuideSection />
      <StageRulesSection />
    </>
  );
}
