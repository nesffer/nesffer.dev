# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 명령어

```bash
bun dev          # 개발 서버 실행 (http://localhost:3000)
bun run build    # 프로덕션 빌드
bun run lint     # Biome 린터 실행
bun run format   # Biome 포매터 실행
bun run check    # 린트 + 포맷 통합 검사
bun run check:fix # 통합 검사 + 자동 수정
bun start        # 프로덕션 서버 실행
```

패키지 매니저: **Bun** (`npm install` 대신 `bun add` 사용)

## 아키텍처

Next.js 16 App Router 프로젝트 (React 19) — 개인 웹사이트/포트폴리오.

### 린터/포매터: Biome

**Biome** 단독 사용 (ESLint/Prettier 없음). `biome.json`에서 설정.
- 코드 스타일: 세미콜론 필수, 싱글 쿼트, 2칸 스페이스 들여쓰기
- 린트: recommended 규칙 + a11y + React Hooks
- import 자동 정렬 활성화
- `components/ui/`는 shadcn 생성 코드이므로 일부 a11y 규칙 완화

### 컴포넌트 시스템: shadcn base-nova + Base UI

`components/ui/`의 UI 컴포넌트는 하이브리드 패턴을 사용:
- **@base-ui/react**가 headless 프리미티브 제공 (Button, Input, Select, AlertDialog 등)
- **shadcn base-nova 스타일**이 Tailwind 클래스와 CVA variant로 래핑
- 컴포넌트는 `data-slot` 속성을 스타일링 훅으로 사용

패턴 예시 (모든 UI 컴포넌트가 이 구조를 따름):
```tsx
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva } from 'class-variance-authority';

const buttonVariants = cva('...', { variants: { ... } });

function Button({ className, variant, size, ...props }) {
  return (
    <ButtonPrimitive
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

shadcn 컴포넌트 추가: `bunx shadcn@latest add <component>` — `components.json`에 설정된 base-nova 스타일로 `components/ui/`에 자동 생성됨.

### 스타일링

- **Tailwind CSS v4** — `app/globals.css`에서 인라인 `@theme` 설정
- **OKLCH 색상 공간** — 모든 테마 토큰에 사용 (라이트/다크 모드는 `.dark` 클래스 기반)
- 색상 토큰: `primary`, `secondary`, `muted`, `accent`, `destructive`, `card`, `popover`, `sidebar`, `chart-1..5`
- 반지름 토큰: `--radius` 기본값에서 `sm/md/lg/xl/2xl/3xl/4xl` 계산
- 다크 모드: `@custom-variant dark (&:is(.dark *))` — 클래스 기반
- `cn()` 유틸리티(`lib/utils.ts`) — className 병합 시 항상 사용 (clsx + tailwind-merge)

### 아이콘

**@hugeicons/react** + `@hugeicons/core-free-icons` — `components.json`에서 아이콘 라이브러리로 설정됨.

### 경로 별칭

`@/*` → 프로젝트 루트 (예: `@/components/ui/button`, `@/lib/utils`)
