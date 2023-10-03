import React, { useState, createContext, useContext } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : "uk";
  });

  const languages = ["en", "uk"];

  const value = {
    currentLanguage,
    setCurrentLanguage,
    languages,
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
