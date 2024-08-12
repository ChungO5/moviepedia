import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export const LocaleProvider = ({ defaultValue = "ko", children }) => {
    const [locale, setLocale] = useState(defaultValue);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("반드시 LocaleProvider 안에서 사용행야 합니다.");
    }

    return context.locale;
};

export const useSetLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("반드시 LocaleProvider 안에서 사용행야 합니다.");
    }

    return context.setLocale;
};
