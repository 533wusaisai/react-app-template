import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector("#app")!);
console.log(2121);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
