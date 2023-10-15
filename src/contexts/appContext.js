import React, { createContext, useContext, useState } from "react";
import { useIntl } from "react-intl";

export const AppContext = createContext();

const MainProvider = ({ children }) => {
  const { formatMessage } = useIntl();

  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setError] = useState(false);

  const showError = (message) => {
    const messageText = formatMessage({ id: message });
    if (isError || errorMessage === messageText) {
      return;
    }

    setErrorMessage(messageText);
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
