import type { Metadata } from "next";
import { ContactSection } from "@/components/team/ContactSection";
import { NextProjectsSection } from "@/components/team/NextProjectsSection";
import { TeamSection } from "@/components/team/TeamSection";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  title: `스튜디오 — ${siteMeta.studioName}`,
  description: "3인 인디 게임 개발팀 FLIP FIVE 소개, 차기 라인업 및 비즈니스 연락처.",
};

export default function TeamPage() {
  return (
    <>
      <TeamSection />
      <NextProjectsSection />
      <ContactSection />
    </>
  );
}
