import type { Metadata } from "next";
import { ContactSection } from "@/components/team/ContactSection";
import { TeamSection } from "@/components/team/TeamSection";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  title: `팀 & 연락처 — ${siteMeta.gameTitle}`,
  description: "3인 인디 팀 구성원 소개, 역할 분담, 포트폴리오 및 비즈니스 연락처.",
};

export default function TeamPage() {
  return (
    <>
      <TeamSection />
      <ContactSection />
    </>
  );
}
