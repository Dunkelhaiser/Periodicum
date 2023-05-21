import React, { createContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "../models/Element";

interface LanguageContextType {
    data: Element[];
}

const iLanguageContextState = {
    data: [],
};

export const LanguageContext = createContext<LanguageContextType>(iLanguageContextState);

const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<Element[]>([]);
    const { i18n } = useTranslation();

    useEffect(() => {
        const importLanguageData = async () => {
            const languageData = await import(`../languages/${i18n.resolvedLanguage}.json`);
            setData(languageData.default);
        };
        importLanguageData();
    }, [i18n.resolvedLanguage]);

    const values = useMemo(
        () => ({
            data,
        }),
        [data]
    );
    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;
