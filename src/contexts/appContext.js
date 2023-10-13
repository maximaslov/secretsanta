import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const MainProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [isError, setError] = useState(false);

  const showError = (message) => {
    if(isError || errorMessage === message) {
      return
    }

    setErrorMessage(message);
    setError(true);

    setTimeout(() => {
      setError(false);
      setErrorMessage("");
    }, 4000);
  };

  const value = {
    showError,
    isError,
    errorMessage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default MainProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
