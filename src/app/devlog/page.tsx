import type { Metadata } from "next";
import { BehindSection } from "@/components/BehindSection";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  title: `개발 노트 — ${siteMeta.gameTitle}`,
  description: "주제 피벗 과정, 짧은 개발 노트, 문제 해결 사례 및 제작 파이프라인.",
};

export default function DevlogPage() {
  return <BehindSection />;
}
