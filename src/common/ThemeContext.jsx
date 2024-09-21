import React, { createContext, useContext, useEffect } from "react";

// Skapar ThemeContext, men vi behöver inte längre hålla koll på något state
const ThemeContext = createContext();

// Hook för att använda kontexten, ifall den behövs
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider-komponent
export const ThemeProvider = ({ children }) => {
  // Använd endast mörkt tema
  const theme = "dark";

  useEffect(() => {
    // Sätt dark theme på body direkt
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Returnerar provider med det statiska mörka temat
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
