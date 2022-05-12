import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import GlobalStyle from "style/GlobalStyle";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLInputElement,
);

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
