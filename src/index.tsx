import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./GlobaStyle";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
