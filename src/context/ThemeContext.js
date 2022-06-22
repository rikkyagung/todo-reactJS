import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
   const [theme, setTheme] = useState(localStorage.theme);
   const themeValue = theme === "dark" ? "light" : "dark";

   useEffect(() => {
      const html = document.documentElement;
      html.classList.add(themeValue);
      html.classList.remove(theme);

      localStorage.setItem("theme", theme);
   });

   return (
      <ThemeContext.Provider value={{ theme, setTheme, themeValue }}>
         {props.children}
      </ThemeContext.Provider>
   );
};
