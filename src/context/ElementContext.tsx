import React, { createContext, useMemo, useState } from "react";

interface ElementContextType {
    element: string;
    setElement: (element: string) => void;
}

const iElementContextState = {
    element: "",
    setElement: () => {},
};

export const ElementContext = createContext<ElementContextType>(iElementContextState);

const ElementContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [element, setElement] = useState("");

    const values = useMemo(
        () => ({
            element,
            setElement,
        }),
        [element]
    );
    return <ElementContext.Provider value={values}>{children}</ElementContext.Provider>;
};

export default ElementContextProvider;
