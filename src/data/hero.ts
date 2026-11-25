import type { HeroData } from "./types";

export const heroData: HeroData = {
  eyebrow: "TEAM PROJECT · STEAM TARGET",
  title: "TUMBLE CROWN",
  workingTitleTag: "가제",
  subcopy: "3인이 만드는 액티브 래그돌 멀티플레이 물리 파티 게임.",
  metrics: [
    { label: "TEAM", value: "3인 풀스택", accent: "none" },
    { label: "PLATFORM", value: "Steam PC", accent: "orange" },
    { label: "PLAYERS", value: "2–8인 멀티", accent: "yellow" },
    { label: "CORE TECH", value: "Active Ragdoll", accent: "none" },
  ],
  mediaClips: [
    {
      id: "ringout",
      index: "01",
      title: "링아웃 난투",
      tag: "MINIGAME 01",
      type: "video",
      src: "",
      expectedPath: "public/media/clip-01-ringout.mp4",
      caption: "기울어지는 발판 위 물리 충돌 기반 최후의 1인전",
    },
    {
      id: "relay",
      index: "02",
      title: "폭탄 릴레이",
      tag: "MINIGAME 02",
      type: "video",
      src: "",
      expectedPath: "public/media/clip-02-relay.mp4",
      caption: "팔 잡기·던지기 물리 인터랙션 중심 팀전 모드",
    },
    {
      id: "trap",
      index: "03",
      title: "함정 장애물",
      tag: "MINIGAME 03",
      type: "image",
      src: "",
      expectedPath: "public/media/clip-03-trap.webp",
      caption: "회전 해머와 미끄럼 구간을 돌파하는 레이스 스테이지",
    },
  ],
};
