import type { TeamPageData } from "./types";

export const teamData: TeamPageData = {
  headline: "팀원 구성",
  subcopy: "",
  members: [
    {
      id: "member-01",
      index: "01",
      name: "팀원 A",
      handle: "LEAD / PHYSICS",
      oneLiner: "액티브 래그돌 물리와 Unity NGO 멀티플레이 동기화 담당.",
      roles: ["물리 프로그래밍", "멀티플레이 동기화", "AI · MCP 파이프라인"],
      avatarSrc: "",
      expectedAvatarPath: "public/media/member-01.webp",
      links: [
        { label: "GitHub", href: "https://github.com/gilamalin" },
        { label: "Portfolio", href: "https://github.com/gilamalin" },
      ],
    },
    {
      id: "member-02",
      index: "02",
      name: "팀원 B",
      handle: "LEVEL / DESIGN",
      oneLiner: "스테이지 기믹 설계, 라운드 밸런싱 및 파티 룰 기획 담당.",
      roles: ["스테이지 레벨 디자인", "게임 기획", "UI / UX"],
      avatarSrc: "",
      expectedAvatarPath: "public/media/member-02.webp",
      links: [
        { label: "GitHub", href: "https://github.com" },
        { label: "Portfolio", href: "https://github.com" },
      ],
    },
    {
      id: "member-03",
      index: "03",
      name: "팀원 C",
      handle: "3D ART / TECH",
      oneLiner: "캐릭터 3D 모델링, 커스터마이징 파츠와 스테이지 아트 담당.",
      roles: ["3D 모델링 · 리깅", "커스터마이징 파츠", "셰이더 · 이펙트"],
      avatarSrc: "",
      expectedAvatarPath: "public/media/member-03.webp",
      links: [
        { label: "GitHub", href: "https://github.com" },
        { label: "Portfolio", href: "https://github.com" },
      ],
    },
  ],
  contact: {
    headline: "연락처",
    subcopy: "비즈니스 · 협업 문의",
    email: "hello@studio-archive.dev",
    snsLinks: [
      { label: "GitHub", href: "https://github.com/gilamalin/studio-archive" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "X", href: "https://x.com" },
    ],
  },
};
