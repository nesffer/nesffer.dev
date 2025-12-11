# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

nesffer.dev는 Next.js 16 App Router와 TypeScript로 구축된 웹사이트입니다. Tailwind CSS v4와 shadcn/ui 컴포넌트 라이브러리를 사용합니다.

## 개발 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
bun dev

# 프로덕션 빌드
bun run build

# 프로덕션 서버 실행
bun start

# 린트 실행
bun run lint
```

**중요**: 이 프로젝트는 **Bun**을 패키지 매니저로 사용합니다. npm, yarn, pnpm 대신 `bun` 명령어를 사용하세요.

## 기술 스택 및 설정

### 프레임워크
- **Next.js 16.0.7** (App Router)
- **React 19.2.0**
- **TypeScript** (strict 모드)

### 스타일링
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **shadcn/ui** (new-york 스타일)
- 다크모드: 커스텀 variant `@custom-variant dark (&:is(.dark *))`를 사용
- 테마는 [app/globals.css](app/globals.css)에서 CSS 변수로 관리

### 경로 별칭

TypeScript paths 설정:
- `@/*` → 프로젝트 루트

shadcn/ui 별칭:
- `@/components` → 컴포넌트
- `@/components/ui` → UI 컴포넌트
- `@/lib` → 유틸리티
- `@/hooks` → 커스텀 훅

## 프로젝트 구조

```
nesffer.dev/
├── app/                 # Next.js App Router 페이지 및 레이아웃
│   ├── layout.tsx      # 루트 레이아웃 (Geist 폰트 적용)
│   ├── page.tsx        # 홈페이지
│   └── globals.css     # 전역 스타일 및 Tailwind/shadcn 테마
├── components/         # React 컴포넌트 (아직 생성 전)
│   └── ui/            # shadcn/ui 컴포넌트가 여기에 설치됨
├── lib/               # 유틸리티 함수
│   └── utils.ts       # cn() 함수 (className 병합)
├── public/            # 정적 파일
└── components.json    # shadcn/ui 설정
```

## UI 컴포넌트 (shadcn/ui)

shadcn/ui 컴포넌트를 추가할 때:

```bash
# 컴포넌트 추가 예시
bunx shadcn@latest add button
bunx shadcn@latest add card
```

- 컴포넌트는 `components/ui/` 디렉토리에 자동 생성됩니다
- 스타일: **new-york** 스타일 사용
- 베이스 컬러: **zinc**
- 아이콘: **lucide-react**

## 스타일 가이드

### className 병합

여러 className을 조합할 때 `cn()` 유틸리티 사용:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", variant && "variant-class", className)} />
```

### 다크모드

Tailwind의 `dark:` variant 사용:

```tsx
<div className="bg-background dark:bg-sidebar" />
```

### 타입스크립트

- `any` 타입 사용 금지
- strict 모드 활성화됨
- 모든 타입은 명확하게 정의

## Git 커밋

**Conventional Commits** 형식을 준수합니다:

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 변경
style: 코드 포맷팅
refactor: 리팩토링
test: 테스트 추가
chore: 빌드 설정 등
```
