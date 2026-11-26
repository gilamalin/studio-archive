import type { HomeData } from "./types";

export const homeData: HomeData = {
  eyebrow: "ACTIVE RAGDOLL · 2–8P PHYSICS PARTY",
  tagline:
    "나는 그저 멋지게 해내고 싶었을 뿐인데 팔다리가 말을 듣지 않아 엉망진창이 되었습니다",
  slides: [
    {
      id: "scene-01",
      index: "01",
      title: "링아웃 난투",
      tag: "SCENE 01",
      caption: "기울어지는 발판 위 물리 충돌 기반 최후의 1인전",
      videoSrc: "/media/scene-01.mp4",
      expectedPath: "public/media/scene-01.mp4",
    },
    {
      id: "scene-02",
      index: "02",
      title: "폭탄 릴레이",
      tag: "SCENE 02",
      caption: "상대를 붙잡아 폭탄을 떠넘기는 30초 카운트다운",
      videoSrc: "/media/scene-02.mp4",
      expectedPath: "public/media/scene-02.mp4",
    },
    {
      id: "scene-03",
      index: "03",
      title: "함정 장애물",
      tag: "SCENE 03",
      caption: "회전 해머와 미끄럼 구간을 돌파하는 물리 레이스",
      videoSrc: "/media/scene-03.mp4",
      expectedPath: "public/media/scene-03.mp4",
    },
  ],
  featuresHeadline: "재미 요소",
  features: [
    {
      id: "feat-physics",
      index: "01",
      keyword: "우당탕탕 물리 충돌",
      summary: "액티브 래그돌 조작으로 매 판 달라지는 예측 불가 플레이",
      screenshotSrc: "/media/feature-01-physics.jpg",
      expectedPath: "public/media/feature-01-physics.jpg",
      caption: "우당탕탕 물리 충돌 스크린샷",
    },
    {
      id: "feat-grab",
      index: "02",
      keyword: "자유로운 상호작용",
      summary: "잡기, 던지기, 드롭킥까지 무엇이든 시도해 보는 자유로움",
      screenshotSrc: "/media/feature-02-grab.jpg",
      expectedPath: "public/media/feature-02-grab.jpg",
      caption: "자유로운 상호작용 스크린샷",
    },
    {
      id: "feat-party",
      index: "03",
      keyword: "다양한 스테이지 구성",
      summary: "새로운 룰 속에서 피어나는 우정",
      screenshotSrc: "/media/feature-03-party.jpg",
      expectedPath: "public/media/feature-03-party.jpg",
      caption: "다양한 스테이지 구성 스크린샷",
    },
  ],
};
