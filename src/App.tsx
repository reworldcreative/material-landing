import "./App.scss";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import MainPage from "./screens/MainPage/MainPage";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { useGlobalContext } from "./contexts/GlobalContext";
import { lightTheme, darkTheme } from "./contexts/Theme/Theme";
import Layout from "./components/layouts/Layout";

function App() {
  const { theme, setTheme } = useGlobalContext();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setTheme(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
