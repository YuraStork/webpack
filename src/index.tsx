import { App } from "./app";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "styles/global";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </>
);
