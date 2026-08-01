# MINEVE

`Minerals through Jeju`

제주 미네랄의 원천을 바탕으로 식탁, 피부, 몸의 균형을 제안하는
MINEVE의 대표 검토용 정적 브랜드·커머스 프로토타입입니다.

GitHub Pages의 프로젝트 사이트 경로에서도 동작하도록 정적 export와
`basePath` 처리가 적용되어 있습니다.

## Scope

- Home
- SALT, RENEW, REST
- OUR STORY
- NOTES overview and article detail
- SHOP
- Product detail template

회원, 결제, 재고, CMS, API, 데이터베이스는 연결하지 않습니다. 장바구니,
뉴스레터와 언어 선택은 UI 검토용 클라이언트 인터랙션입니다.

## Content

상품 가격, 중량, Notes, 과학 정보와 검증 상태는
`app/data/site.ts`에서 관리합니다. 실제 이미지가 준비되기 전까지 각
위치에는 권장 비율과 교체 목적이 표시된 접근 가능한 placeholder가
노출됩니다.

## Commands

```sh
npm run dev
npm run lint
npm run typecheck
npm run build
npm test
```

브라우저 화면 검수는 로컬 서버 실행 후 `node tests/visual-qa.mjs`로
진행할 수 있습니다.

`main` 브랜치에 푸시하면 `.github/workflows/deploy-pages.yml`이 정적
결과물인 `out/`을 GitHub Pages에 배포합니다.
