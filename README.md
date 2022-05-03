### TODO

* 채팅방 상단의 프로필을 클릭하면 사용자를 변경할 수 있다.
* 공백 입력 시 alert 메세지를 띄우고, 전송되지 않도록 한다.
* 메세지를 보내면 채팅방 하단으로 스크롤을 이동한다.
* 메세지에 유저 정보(프로필 사진, 이름)를 함께 표시한다.
*  user와 message 데이터를 json 형식으로 파일에 저장한다.

### Component Structure

* App

  * ChatRoom

    * ChatRoomHeader - ChatRoomHeaderBlock
      * Button
      * Profile
        * Img
        * Text
    * ChatRoomMain - ChatRoomMainBlock
      * ChatBlock
        * ProfileImg
        * TextBlock
          * UserName
          * ChatInfoBlock
            * Bubble
            * Time
    * ChatRoomForm - ChatRoomFormBlock
      * Form
        * Input
        * Button

    



### Convention

* CSS 코드는 styled-components를 활용하며, nested 형태로 작성한다.

* 컴포넌트는 regular function의 형태로 작성한다.
* 함수에 관한 타이핑은 interface를 활용하여 작성한다.

### Library

- NPM


```shell
rm -rf Error: Misplaced &HOME/.brew && git clone --depth=1 https://github.com/Homebrew/brew HOME/.brew && echo 'export PATH=HOME/.brew/bin:HOME/.brew/bin:PATH' >> Error: Misplaced &HOME/.zshrc && source HOME/.zshrc && brew update
brew install node
brew install yarn --ignore-dependencies
```

- CRA


```shell
npx create-react-app . --template typescript
```

- eslint -D
- prettier -D
- @typescript-eslint/eslint-plugin -D
- @typescript-eslint/parser -D
- eslint-config-airbnb -D 
- eslint-config-prettier -D
- eslint-plugin-prettier -D

```shell
npm i -D eslint prettier
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i -D eslint-config-airbnb
npm i -D eslint-config-prettier eslint-plugin-prettier
```

```js
// ./.eslintrc.js
// https://eslint.org/docs/rules/

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
```

```js
// ./.prettierrc

{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

- [Reference](https://velog.io/@kmlee95/React-Typescript-eslint-prettier%EC%84%A4%EC%A0%95)