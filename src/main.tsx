import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ElementContextProvider from "./context/ElementContext";
import OptionsContextProvider from "./context/OptionsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <OptionsContextProvider>
            <ElementContextProvider>
                <App />
            </ElementContextProvider>
        </OptionsContextProvider>
    </React.StrictMode>
);
