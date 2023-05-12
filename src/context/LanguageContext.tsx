import React, { createContext, useEffect, useMemo, useState } from "react";
import { Element } from "../models/Element";

interface LanguageContextType {
    language: string;
    setLanguageHandler: (selectedLanguage: string) => void;
    data: Element[];
}

const iLanguageContextState = {
    language: localStorage.getItem("language") || "english",
    setLanguageHandler: () => {},
    data: [],
};

export const LanguageContext = createContext<LanguageContextType>(iLanguageContextState);

const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "english");
    const [data, setData] = useState<Element[]>([]);

    const setLanguageStorage = (selectedLanguage: string) => {
        localStorage.setItem("language", selectedLanguage);
    };
    const setLanguageHandler = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
    };
    useEffect(() => {
        setLanguageStorage(language);
    }, [language]);

    useEffect(() => {
        const importLanguageData = async () => {
            const languageData = await import(`../languages/${language}.json`);
            setData(languageData.default);
        };
        importLanguageData();
    }, [language]);

    const values = useMemo(
        () => ({
            language,
            setLanguageHandler,
            data,
        }),
        [language, data]
    );
    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;
