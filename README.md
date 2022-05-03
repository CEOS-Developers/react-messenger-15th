### Technical Features

https://kimdabin.tistory.com/entry/Reactjs-ESLint%EC%99%80-Prettier%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-React-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95-VSCode



### Library

* CRA

```shell
npx create-react-app . --template typescript
```

* TS 환경 구성

```shell
npm i -D typescript @babel/core @babel/preset-env @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier eslint-plugin-prettier
```





```html
// index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> -->
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```.eslintignore
// .eslintignore

node_modules
dist
```

```js
// .eslintrc.js

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        useTabs: false,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
```

```json
// pakage.json

{
  "name": "react-messenger-15th",
  "version": "1.0.0",
  "main": "index.js",
  "description": "CEOS 15th FE Study",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "keywords": [],
  "author": "Sungwoo Shin",
  "license": "MIT",
  "scripts": {
    "start": "react-scripts start",
    "build": "tsc",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/core": "^7.17.10",
    "@babel/preset-env": "^7.17.10",
    "@babel/preset-typescript": "^7.16.7",
    "@typescript-eslint/eslint-plugin": "^5.21.0",
    "@typescript-eslint/parser": "^5.21.0",
    "eslint": "^8.14.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "^2.6.2",
    "typescript": "^4.6.4"
  }
}
```

```json
// tsconfig.json

{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "allowJs": true,
    "moduleResolution": "Node",
    "lib": ["ES2015", "DOM", "DOM.Iterable"],
    "noImplicitAny": true
  },
  "include": ["./src/**/*"]
}
```

