import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import MainPage from "./screens/MainPage/MainPage";
import { CssBaseline } from "@mui/material";
import { useGlobalContext } from "./contexts/GlobalContext";
import { lightTheme, darkTheme } from "./contexts/Theme/Theme";

function App() {
  const { theme } = useGlobalContext();
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
