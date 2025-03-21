// import { createContext } from "react";

// export const ThemeContext = createContext({
//   darkThemeOn: true,
// });
import React, { createContext, useState, useEffect, useContext } from "react";

// Create Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkModeOn, setDarkModeOn] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkModeOn(savedTheme);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkModeOn;
    setDarkModeOn(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <ThemeContext.Provider value={{ darkModeOn, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
