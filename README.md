### Deployment

https://react-messenger-15th-six.vercel.app/

### TODO

- [x] 채팅방 상단의 프로필을 클릭하면 사용자를 변경할 수 있다.
- [x] 공백 입력 시 alert 메세지를 띄우고, 전송되지 않도록 한다.
- [x] 메세지를 보내면 채팅방 하단으로 스크롤을 이동한다.
- [x] 메세지에 유저 정보(프로필 사진, 이름)를 함께 표시한다.
- [x] user와 message 데이터를 json 형식으로 파일에 저장한다. (json 형식의 데이터를 이용)
- [x] 친구 목록 페이지, 채팅 목록 페이지, 설정 페이지 세 부분으로 구성한다.
- [x] 채팅 목록을 누르면 4주차 미션에서 구현했던 채팅방으로 이동한다.
- [x] 검색 기능을 추가하여 검색한 내용과 일치하는 이름을 가진 사용자만 화면에 표시한다.

### Features

- [The trick to viewport units on mobile](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)를 참고하여 반응형으로 제작한다.
- transform을 활용하여 유저에게 메세지 전송 가능 여부를 시각적으로 전달한다.
- React.memo를 사용하여 리스트 컴포넌트의 성능을 최적화한다.
- useCallback을 사용하여 input 처리 관련 함수를 최적화한다.
- [안티 패턴](https://ui.toast.com/fe-guide/ko_ANTI-PATTERN)에 유의하여 코드를 작성한다. 
- 페이지간 공통적으로 보여줘야 하는 레이아웃의 경우, nested Route와 Outlet 컴포넌트를 사용하여 컴포넌트 중복 사용을 최소화 한다.
- NavLink 컴포넌트를 사용하여 유저가 현재 위치한 페이지에 대해 시각적으로 인지할 수 있도록 한다.
- NotFound 페이지를 구현한다.
- 채팅방 리스트 페이지의 경우 메세지를 마지막 송수신 시각을 기준으로 내림차순(최신순) 정렬하여 보여준다.
- [24siefil-context-api branch] Context API를 사용하여 상태를 전역적으로 관리한다. 
- [24siefil-redux branch] Redux를 사용하여 상태를 전역적으로 관리한다. (작업중)

### Reference

- [The trick to viewport units on mobile](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
- [안티 패턴](https://ui.toast.com/fe-guide/ko_ANTI-PATTERN)
- [웹 성능 최적화 방법 5분 완성](https://velog.io/@hsecode/%EC%B5%9C%EC%A0%81%ED%99%94-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-5%EB%B6%84-%EC%99%84%EC%84%B1)
- [json array sort](https://dreamjy.tistory.com/92)
- [React TypeScript Hooks issue when returning array](https://www.puruvj.dev/blog/get-to-know-typescript--react-hooks-return-array-issue)

<br>

# Key Questions

### Routing

웹 애플리케이션에서 라우팅이라는 개념은 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것을 의미한다.

### SSR

SSR은 서버에서 사용자에게 보여줄 페이지를 모두 구성해 보여주는 방식이다. SSR을 통해 모든 데이터가 매핑된 서비스 페이지를 클라이언트(브라우저)에게 바로 보여줄 수 있다. 서버를 이용해 페이지를 구성하기 때문에 클라이언트 사이드 랜더링(CSR)보다 페이지 구성속도는 느리지만 전체적으로 사용자에게 보여주는 컨텐츠 구성이 완료되는 시점은 빨라진다는 장점이 있다. 또한 SEO도 쉽게 구성할 수 있다.

**SSR, CSR은 언제 사용하면 좋을까?**

1. 동적 컨텐츠 로딩이 반복되는 경우 SSR이 더 나은 선택이다.
2. 웹 앱 UX & 사이트 UX: 웹 앱은 사용자가 데이터 입력 및 보고서 생성 같은 작업을 수행해야 하므로 더 많은 상호작용이 필요하다. 반면 웹 사이트는 단순히 비즈니스에 대한 정보를 제공하는 페이지다. 이를 염두에 두고 CSR은 각 클릭이 너무 오래 걸리지 않도록 하는데 도움이 될 수 있어 웹 앱에 가장 적합하다. 그러나 웹 사이트와 관련해 SSR은 검색 엔진 봇에 대한 올바른 메타데이터를 보장하기 때문에 CSR보다 훨씬 좋다.

### SPA

싱글페이지 애플리케이션이란 하나의 페이지로 이루어진 애플리케이션 이라는 의미이다.

멀티페이지 애플리케이션에서는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서버에서 CSS, JS 이미지 파일 등의 리소스를 전달받아 브라우저 화면에 보여준다. 사용자 인터랙션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션은 이 방식이 적합하지 않다. 새로운 페이지를 보여줘야 할 때마다 서버 측에서 모든 준비를 한다면 그만큼 서버의 자원을 사용하는 것이고, 트래픽도 더 많이 나올 수 있기 때문이다.

html은 한번만 받아와서 웹 애플리케이션을 실행시킨 후, 이후에는 필요한 데이터만 받아와서 화면에 업데이트하는 것이 싱글 페이지 애플리케이션이다.

리액트 라우터 같은 라우팅 시스템은 사용자의 브라우저 주소창의 경로에 따라 알맞은 페이지를 보여준다. 이후 링크를 눌러서 다른 페이지로 이동할 때 서버에 다른 페이지의 html을 새로 요청하는 것이 아니라, 브라우저의 History API를 사용하여 브라우저의 주소창의 값만 변경하고 기존에 페이지에 띄웠던 웹 애플리케이션을 그대로 유지하면서 라우팅 설정에 따라 또 다른 페이지를 보여주게 된다.



