import type { BehindData } from "./types";

export const behindData: BehindData = {
  headline: "개발 노트",
  subcopy: "",
  pivotLabel: "주제 피벗",
  pivotStages: [
    {
      step: "BEFORE",
      title: "턴제 전략 프로토타입",
      summary: "규칙 학습 비용이 높고 초반 재미 검증이 지연됨.",
    },
    {
      step: "PIVOT",
      title: "원초적 물리 재미로 전환",
      summary: "설명 없이 3초 만에 웃음이 터지는 슬랩스틱으로 재설계.",
      highlight: true,
    },
    {
      step: "NOW",
      title: "액티브 래그돌 파티 게임",
      summary: "짧은 라운드 반복과 최대 8인 멀티플레이 빌드 개발.",
    },
  ],
  pipelineTitle: "제작 파이프라인",
  pipelineTools: ["Unity MCP", "Blender MCP", "AI Codegen", "Auto QA"],
  pipelineItems: [
    {
      label: "프로토타입 제작",
      metric: "2일 / 1종",
      detail: "미니게임 룰·기믹 초안 자동화로 검증 주기 단축.",
    },
    {
      label: "3D 에셋 블록아웃",
      metric: "-65% 공수",
      detail: "Blender MCP로 프롭 배치 및 콜라이더 일괄 생성.",
    },
    {
      label: "3인 풀스택 운영",
      metric: "1인 2역",
      detail: "반복 툴링을 AI에 위임해 핵심 물리 튜닝에 집중.",
    },
  ],
  techTitle: "핵심 문제 해결",
  techSolutions: [
    {
      id: "ragdoll-clipping",
      tag: "PHYSICS",
      title: "액티브 래그돌 팔 클리핑 해결",
      problem: "물체 파지 시 과도한 조인트 토크로 팔이 벽·몸체를 관통.",
      solution: "ConfigurableJoint 감쇠 보간과 레이어별 충돌 분리 적용.",
    },
    {
      id: "ngo-sync",
      tag: "NETWORK",
      title: "Unity NGO 멀티플레이 물리 동기화",
      problem: "8인 동시 충돌 시 클라이언트 간 래그돌 위치 튐·지연 누적.",
      solution: "호스트 권한 루트 보간 + 본 회전 압축 전송으로 대역폭 절감.",
    },
  ],
  devNotes: [
    {
      date: "NOTE 01",
      title: "물리 조작감 튜닝",
      summary: "관절 복원력과 무게 중심 비율 12회 조정으로 조작 손맛 확보.",
    },
    {
      date: "NOTE 02",
      title: "라운드 템포 압축",
      summary: "대기·로딩 연출을 3초 이내로 줄여 즉각 재도전 흐름 구현.",
    },
  ],
};
