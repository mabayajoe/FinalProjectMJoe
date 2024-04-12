import { createContext, useContext, useState } from "react";

export const ThemeSwitcherContext = createContext({
  dark: false,
  toggle: () => {},
});

export const useTheme = () => {
  return useContext(ThemeSwitcherContext);
};

export const ThemeSwitcherProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
  };

  return <ThemeSwitcherContext.Provider value={{ dark, toggle }}>{children}</ThemeSwitcherContext.Provider>;
};
