<!-- > [https://react-todo-15th-47y241e55-poodlepoodle.vercel.app](https://react-todo-15th-47y241e55-poodlepoodle.vercel.app) -->
> [배포 링크 나중에 위치시키기](배포링크)

# 🔥 개요

안녕하세요. CEOS 15기 **프론트** 최어진입니다.  
중간고사 기간을 보내고 주어진 프론트 스터디 4주차 미션은
<**Typescript + React를 이용한 Messenager 만들기**> 였습니다.  
이전 3주차동안 **To-do List**라는 주제로 미션을 진행했었던 만큼
새로운 주제가 반갑기도 하고, 주제를 통해 구현해야 하는 요소들이
다른 프로젝트를 진행함에 있어서 실무적으로 응용할 수 있겠다 싶은 내용들이라서
기대되는 마음으로 slack 공지를 보자마자 `fork`를 했습니다!

이후 주차에서 프로젝트의 기능을 추가하는 방식으로 미션 내용이 계속 주어지므로
확장성까지 고려해서 개발하면 좋을 것이라는 팁을 주셨는데요,  
이를 잘 생각해 구성 요소들을 배치하고
초기 콘셉트를 정해야겠다는 생각에 고민을 조금 했습니다.  

# ✨ 콘셉트

개인적으로 과제 혹은 미션이 주어졌을 때 디자인에 신경을 많이 써서
매번 색다른 주제를 선보이거나 최대한 참신한 시도를 하려고 하는 편인데요,  
이번 주제를 보고 지난 앞선 주차의 To-do List 미션을
카카오톡 메신저 모양으로 미리 구현해 버린 것을 후회했습니다....  

그래서 이번에는 아예 색다른 시도보다는 실제 프론트 포지션으로 프로젝트에 참여한 상황에서
디자인 시안이 주어졌을 때 빠르게 퍼블리싱한다는 느낌으로
이미 존재하는 콘셉트 디자인을 잉요해 개발을 진행했습니다.  
프론트 미션이라는 본질을 잊고 너무 외적인 부분만 신경쓰기보다는
Typescript를 이용한 구현에 더 집중하기 위한 마음도 있었구요...  

> 활용한 콘셉트 디지인은 **dribbble**에 올라와 있는
**Alex Banaga**님의 [**Facebook Messenger Redesign**](https://dribbble.com/shots/8275108-Facebook-Messenger-Redesign)입니다.  

![image](https://user-images.githubusercontent.com/6462456/167119263-033291f3-8fe0-48dc-872d-41b873177129.png)
_design concept by dribbble@alex banaga_

# 🧭 개발 순서

이러한 순서로 개발 순서를 구성했습니다.

1. Messenger 기본 레이아웃 구성
2. Messenger 필수 구현 기능 구현
3. Messenger 추가 구현 기능 구현
4. Vercel을 이용한 배포

# ✍🏻 개발 고려사항

> 미션 목표
- **Typescript**에 익숙해집니다.
- **useState**로 컴포넌트의 상태를 관리합니다.
- **useEffect**와 **useRef**의 사용법을 이해합니다.
- **Styled-Components**를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.

> 필수 요건
- **함수형 컴포넌트**를 사용합니다.
- **styled-components**를 사용합니다.
- **컴포넌트 네이밍**에 신경써 봅니다.
- **UI는 자유롭게 구성**하되, 반응형까진 고려하지 않으셔도 됩니다.

> **필수 구현 기능**
- [**결과 화면**](https://corinth-messenger.vercel.app)과 같이 구현합니다.
- 채팅방 상단의 **프로필을 클릭**하면 **사용자를 변경**할 수 있습니다.
- 공백 입력 시 **alert 메세지**를 띄우고, 전송되지 않도록 합니다.
- 메세지를 보내면 채팅방 하단으로 **스크롤을 이동**시킵니다.  
(Hint: **useEffect + scrollTo**)
- 메세지에 **유저 정보(프로필 사진, 이름)**를 함께 표시합니다.
- user와 message 데이터를 **json 형식의 파일**에 저장합니다.

> 추가 구현 기능
- **라이트 모드/다크 모드**를 선택할 수 있는 기능을
`styled-component`의 `ThemeProvider`를 이용해 구현합니다.
- **검색창**을 이용해 키워드가 포함된 메세지의 내용을 찾아볼 수 있도록 합니다. 

# 🧐 씽킹 모먼트

> (1) ㅇㅇㅇ

ㅇㅇㅇ

> (2) ㅇㅇㅇ

ㅇㅇㅇ  

# 📎 KEY QUESTIONS

> ㅇㅇㅇ

ㅇㅇㅇ

> ㅇㅇㅇ

ㅇㅇㅇ

# 🥲 마치며

작성 중입니다...

# 링크 및 참고자료

- [React docs - Hook](https://ko.reactjs.org/docs/hooks-intro.html)
- [React의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks#1-usestate)
- [useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [리액트 프로젝트에서 타입스크립트 사용하기 (시리즈)](https://velog.io/@velopert/series/react-with-typescript)
