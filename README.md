# react-messenger-15th week-5

## DEMO

[배포 링크](https://react-messenger-15th-i66a5q4p8-poodlepoodle.vercel.app)
_2가지 적용을 위해 지금도 개발중에 있습니다... (Recoil 적용, TS 적용)_

## KEY QUESTIONS

> Routing

_서로 다른 URL에 따라 개별 상응하는 웹 페이지를 보여주는 것_

- `React-Router`를 통해 리액트에서의 라우팅을 편리하게 구현 가능

> SSR

_Server-Side Rendering_

- Server에서 사용자에게 보여줄 페이지를 모두 구성하여 보여주는 방식 (Client-Side Rendering과 반대되는 개념)
- 대표적인 CSR 기반 라이브러리는 **Angular**, 반대로 SSR 기반 라이브러리는 **Node.js**
- SSR은 서버를 이용해서 페이지를 구성하므로 CSR보다 페이지를 구성하는 속도는 늦어지지만
  전체적으로 사용자에게 보여주는 콘텐츠 구성이 완료되는 시점은 빨라진다는 장점 존재
- 개발 측면에서도 SSR 적용 시 프론트 영역과 백엔드 영역 사이를
  `REST API`를 통해서만 연결되도록 분리 가능 -> 생산성에 Positive 영향

> SPA

_SPA : Single Page Application_

- 웹 사이트의 전체 페이지를 표현함에 있어서, 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하는 것
- 사용자의 행동에 대해 최소한의 요소만 Interaction 및 Rendering
- HTML5의 `history api`를 이용해 history.state에 담아둔 정보만을 `ajax`요청해 화면 갱신
- 대표적인 SPA 라이브러리 : **Angular**, **React**, **Vue**
- SPA의 단점은 빈번한 DOM 조작으로 인한 퍼포먼스 저하가 일어날 수 있다는 점인데,
  이는 Virtual DOM을 통한 해결법 접근 가능
