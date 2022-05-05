import { MessageProvider } from "contexts/MessageContext";
import { ResponsiveSizeProvider } from "contexts/ResponsiveContext";
import { UserProvider } from "contexts/UserContext";
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "style/GlobalStyle";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ResponsiveSizeProvider>
      <UserProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </UserProvider>
    </ResponsiveSizeProvider>
  </React.StrictMode>,
);
