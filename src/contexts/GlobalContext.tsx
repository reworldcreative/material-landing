import React, { createContext, useState, useContext, ReactNode } from "react";

interface GlobalContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
  employeesToShow: number;
  setEmployeesToShow: (employeesNumber: number) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [employeesToShow, setEmployeesToShow] = useState<number>(6);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme, setTheme, employeesToShow, setEmployeesToShow }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext is not found");
  }
  return context;
};
