import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./GlobaStyle";
import { BrowserRouter } from 'react-router-dom';
import {RecoilRoot} from "recoil";

ReactDOM.render(
  <BrowserRouter>
  <RecoilRoot>
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
  </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root')
);
