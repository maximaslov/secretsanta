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

  const loadTranslations = useCallback(async () => {
    const translationModule = await import(`../lang/${currentLanguage}.json`);
    setTranslations(translationModule.default);
  }, [setTranslations, currentLanguage]);

  useEffect(() => {
    loadTranslations();
  }, [loadTranslations]);

  const languages = ["en", "uk"];

  const value = {
    currentLanguage,
    setCurrentLanguage,
    languages,
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
