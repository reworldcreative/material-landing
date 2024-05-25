import "./styles/index.scss";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { GlobalProvider } from "./contexts/GlobalContext";

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

root.render(
  <GlobalProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </GlobalProvider>
);
