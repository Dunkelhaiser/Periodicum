import React, { createContext, useMemo, useState } from "react";

interface OptionsContextType {
    visibility: {
        nonmetal: boolean;
        metal: boolean;
        gas: boolean;
        liquid: boolean;
        solid: boolean;
    };
    setVisibilityWrapper: (key: "nonmetal" | "metal" | "gas" | "solid" | "liquid") => void;
}

const iOptionsContextState = {
    visibility: {
        nonmetal: true,
        metal: true,
        gas: true,
        liquid: true,
        solid: true,
    },
    setVisibilityWrapper: () => {},
};

export const OptionsContext = createContext<OptionsContextType>(iOptionsContextState);

const OptionsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [visibility, setVisibility] = useState<{
        nonmetal: boolean;
        metal: boolean;
        gas: boolean;
        liquid: boolean;
        solid: boolean;
        [key: string]: boolean;
    }>({
        nonmetal: true,
        metal: true,
        gas: true,
        liquid: true,
        solid: true,
    });

    const setVisibilityWrapper = (key: "nonmetal" | "metal" | "gas" | "solid" | "liquid") => {
        setVisibility((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const values = useMemo(
        () => ({
            visibility,
            setVisibilityWrapper,
        }),
        [visibility]
    );
    return <OptionsContext.Provider value={values}>{children}</OptionsContext.Provider>;
};

export default OptionsContextProvider;
