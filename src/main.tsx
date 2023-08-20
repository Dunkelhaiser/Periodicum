import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import LanguageContextProvider from "./context/LanguageContext";
import OptionsContextProvider from "./context/OptionsContext";
import ThemeContextProvider from "./context/ThemeContext";
import "./i18n";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="*" element={<App />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <LanguageContextProvider>
                <OptionsContextProvider>
                    <RouterProvider router={router} />
                </OptionsContextProvider>
            </LanguageContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);
