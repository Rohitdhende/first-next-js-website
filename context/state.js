import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }
  });
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
