import React, { createContext, useContext } from "react";

export const AppContext = createContext();

const MainProvider = ({ children }) => {
    
  const value = {
    data: 23
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default MainProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
