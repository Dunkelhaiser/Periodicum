import React, { createContext, useEffect, useMemo, useState } from "react";

interface ThemeContextType {
    theme: string;
    setThemeHandler: (selectedTheme?: string) => void;
}

const iThemeContextState = {
    theme: localStorage.getItem("theme") || "dark",
    setThemeHandler: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(iThemeContextState);

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    const setThemeStorage = (selectedTheme: string) => {
        localStorage.setItem("theme", selectedTheme);
    };
    const setThemeHandler = (selectedTheme?: string) => {
        if (selectedTheme) {
            setTheme(selectedTheme);
            return;
        }
        setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        setThemeStorage(theme);
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f7f7f7" : "#1a1c22");
        document.querySelector("html")?.setAttribute("data-theme", theme === "light" ? "light" : "dark");
    }, [theme]);

    const values = useMemo(
        () => ({
            theme,
            setThemeHandler,
        }),
        [theme]
    );
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
