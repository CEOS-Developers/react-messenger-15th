### Deployment

https://react-messenger-15th-d2eoz2mh4-24siefil.vercel.app/

### TODO

- [x] 채팅방 상단의 프로필을 클릭하면 사용자를 변경할 수 있다.
- [x] 공백 입력 시 alert 메세지를 띄우고, 전송되지 않도록 한다.
- [x] 메세지를 보내면 채팅방 하단으로 스크롤을 이동한다.
- [x] 메세지에 유저 정보(프로필 사진, 이름)를 함께 표시한다.
- [x] user와 message 데이터를 json 형식으로 파일에 저장한다. (json 형식의 데이터를 이용)
- [ ] [예정] 유저 및 기능 추가, Routing

### Component Structure

```
└── chatroom
    ├── ChatRoomHeader
    ├── ChatRoomList
    │    └── ChatRoomItem
    └── ChatRoomForm
```

### Features

- React Router를 활용한 SPA 개발을 염두하여 코드를 작성한다.
- [The trick to viewport units on mobile](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)를 참고하여 반응형으로 제작한다.
- transform을 활용하여 유저에게 메세지 전송 가능 여부를 시각적으로 전달한다.
- React.memo를 사용하여 리스트 컴포넌트의 성능을 최적화한다.
- Context API를 사용하여 상태를 전역적으로 관리한다.

### Reference

- The trick to viewport units on mobile

  - https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

- [HTML, CSS] Input박스 안에 아이콘 넣기 (fontawesome)
  - https://joogaem.com/m/entry/HTML-CSS-Input%EB%B0%95%EC%8A%A4-%EC%95%88%EC%97%90-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%84%A3%EA%B8%B0-fontawesome
