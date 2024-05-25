import React, { createContext, useState, useContext, ReactNode } from "react";

interface GlobalContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <GlobalContext.Provider value={{ theme, toggleTheme }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext is not found");
  }
  return context;
};
