import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ElementContextProvider from "./context/ElementContext";
import LanguageContextProvider from "./context/LanguageContext";
import OptionsContextProvider from "./context/OptionsContext";
import ThemeContextProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <LanguageContextProvider>
                <OptionsContextProvider>
                    <ElementContextProvider>
                        <App />
                    </ElementContextProvider>
                </OptionsContextProvider>
            </LanguageContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);
