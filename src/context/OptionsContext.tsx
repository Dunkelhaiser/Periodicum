import React, { createContext, useMemo, useState } from "react";

interface OptionsContextType {
    filter: string[];
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const iOptionsContextState = {
    filter: [],
    handleCheckboxChange: () => {},
};

export const OptionsContext = createContext<OptionsContextType>(iOptionsContextState);

const OptionsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filter, setFilter] = useState<string[]>([]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isChecked = e.target.checked;
        setFilter((prevFilter) => {
            const newFilter = isChecked ? [...prevFilter, value] : prevFilter.filter((val) => val !== value);
            return [...newFilter];
        });
    };

    const values = useMemo(
        () => ({
            filter,
            handleCheckboxChange,
        }),
        [filter]
    );
    return <OptionsContext.Provider value={values}>{children}</OptionsContext.Provider>;
};

export default OptionsContextProvider;
