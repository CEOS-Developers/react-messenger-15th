import { RecoilRoot } from "recoil";
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "style/GlobalStyle";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLInputElement,
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
