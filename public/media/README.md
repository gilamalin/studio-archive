# Media Assets

이 폴더(`public/media/`)에 게임 플레이 영상(`.mp4` / `.webm`) 또는 스크린샷(`.png` / `.webp` / `.jpg`) 파일을 배치하고,
`src/data/hero.ts`의 `mediaClips[].src` 경로를 연결하면 플레이스홀더 프레임이 자동으로 실제 미디어로 전환됩니다.

예시:
- `public/media/clip-01-ringout.mp4` -> `src: "/media/clip-01-ringout.mp4"`
- `public/media/clip-02-relay.webp` -> `src: "/media/clip-02-relay.webp"`
- `public/media/clip-03-trap.mp4` -> `src: "/media/clip-03-trap.mp4"`
