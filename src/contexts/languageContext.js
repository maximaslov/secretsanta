import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";

const DEFAULT_LANGUAGE = "uk";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("language");
  const [translations, setTranslations] = useState(null);

  const [currentLanguage, setCurrentLanguage] = useState(
    storedLanguage ?? DEFAULT_LANGUAGE
  );

  const setLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
  };

  const switchLanguage = () => {
    if (currentLanguage === "en") {
      setLanguage("uk");
    } else {
      setLanguage("en");
    }
  };

  const loadTranslations = useCallback(async () => {
    const translationModule = await import(`../lang/${currentLanguage}.json`);
    setTranslations(translationModule.default);
  }, [setTranslations, currentLanguage]);

  useEffect(() => {
    loadTranslations();
  }, [loadTranslations]);

  const value = {
    currentLanguage,
    switchLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useLanguage = () => {
  return useContext(LanguageContext);
};
