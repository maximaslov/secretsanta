import React, { createContext, useContext, useEffect, useState } from "react";
import { passwordGenerator, santaGenerator } from "utils/helpers";
import { useSantaApi } from "queries";
import { useError } from "utils/hooks";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const MainProvider = ({ children }) => {
 const [currentCompany, setCurrentCompany] = useState(null);
 const [sortedCompany, setSortedCompany] = useState(null);
 const [currentCompanyData, setCurrentCompanyData] = useState(null);

 const { showError, isError, errorMessage } = useError();
 const navigate = useNavigate()
 const { post } = useSantaApi();

 useEffect(() => {
  const { santaPairs } = santaGenerator(currentCompany || []);
  setSortedCompany(santaPairs);
 }, [currentCompany]);

 useEffect(() => {
  if (sortedCompany?.size) {
   const mapData = Array.from(sortedCompany.entries());

   const companyData = {
    company: currentCompany,
    pairs: mapData,
    password: passwordGenerator()
   };

   const fetchData = async () => {
    try {
     const result = await post(companyData);
     setCurrentCompanyData(result)
     localStorage.setItem('company', JSON.stringify(result))
     navigate('/company-result')
    } catch (error) {
     showError('error.serverError')
    }
   };

   fetchData();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [sortedCompany]);

 const companyRegistration = (data) => {
  const names = data.map((item) => item.name);
  setCurrentCompany(names);
 };

 const value = {
  showError,
  isError,
  errorMessage,
  companyRegistration,
  currentCompanyData,
 };

 return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default MainProvider;

export const useAppContext = () => {
 return useContext(AppContext);
};
