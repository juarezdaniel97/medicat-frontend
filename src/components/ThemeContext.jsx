import { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";


const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const themeValue = useTheme();

  return ( // Se agrega el return
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);

    if (!context) { // Corrección de validación
        throw new Error("useThemeContext debe ser utilizado dentro de ThemeProvider");
    }
    return context;
}