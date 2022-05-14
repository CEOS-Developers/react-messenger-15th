import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot, useRecoilState } from 'recoil';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLInputElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
