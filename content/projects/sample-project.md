---
title: "Sample Project"
description: "Next.js와 TypeScript로 만든 샘플 프로젝트입니다."
date: "2025-12-01"
tags: ["Next.js", "TypeScript", "Tailwind CSS"]
github: "https://github.com/nesffer/sample-project"
demo: "https://sample-project.vercel.app"
featured: true
status: "completed"
---

## 프로젝트 소개

이 프로젝트는 **Next.js 16**과 **TypeScript**를 사용하여 만든 웹 애플리케이션입니다.

### 주요 기능

- 서버 사이드 렌더링(SSR)과 정적 생성(SSG) 지원
- TypeScript로 타입 안전성 보장
- Tailwind CSS를 활용한 반응형 디자인

### 기술 스택

| 기술 | 용도 |
|------|------|
| Next.js | 프레임워크 |
| TypeScript | 언어 |
| Tailwind CSS | 스타일링 |
| Vercel | 배포 |

### 코드 예시

```typescript
export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: { data },
    revalidate: 60,
  };
}
```

### 실행 방법

1. 저장소를 클론합니다
2. 의존성을 설치합니다
3. 개발 서버를 실행합니다

```bash
git clone https://github.com/nesffer/sample-project
cd sample-project
bun install
bun dev
```

> 이 프로젝트는 지속적으로 개선되고 있습니다.
