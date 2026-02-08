---
title: "Hello World"
description: "첫 번째 블로그 포스트입니다. 블로그를 시작하며 앞으로의 계획을 공유합니다."
date: "2026-01-15"
tags: ["일상", "개발"]
published: true
---

## 블로그를 시작하며

안녕하세요! 개발자 블로그를 시작합니다.

이 블로그에서는 **웹 개발**에 관한 경험과 배운 것들을 공유할 예정입니다.

### 다룰 주제

- Next.js와 React 생태계
- TypeScript 활용 팁
- 프로젝트 회고
- 개발 도구 리뷰

### 코드 하이라이팅 테스트

TypeScript 코드:

```typescript
interface Post {
  title: string;
  date: string;
  tags: string[];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
```

CSS 코드:

```css
.prose {
  max-width: 65ch;
  line-height: 1.75;
  color: var(--color-foreground);
}
```

### 체크리스트

- [x] 블로그 셋업
- [x] 첫 포스트 작성
- [ ] RSS 피드 추가
- [ ] 댓글 시스템 연동

### 인용

> 좋은 코드는 좋은 문서보다 낫고, 좋은 문서는 나쁜 코드보다 낫다.

앞으로 꾸준히 글을 올리겠습니다. 감사합니다!
