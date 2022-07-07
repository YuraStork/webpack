import { App } from "./app";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "styles/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "styles/themes";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <>
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>
);
