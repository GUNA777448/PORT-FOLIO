import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./portfolio.css";

let rootElement = document.getElementById("tsx-root");

if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.id = "tsx-root";
  document.body.innerHTML = "";
  document.body.appendChild(rootElement);
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
